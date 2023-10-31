const fs = require("fs");
const path = require("node:path");
const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const util = require("util");

const question = util.promisify(readline.question).bind(readline);

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("node viper.js [COMPONENT_NAME]");
  process.exit(1);
}

let screenName = args[0];
screenName = screenName.charAt(0).toUpperCase() + screenName.slice(1);

const COMPONENTS_PATH = "../src/components/";

const TARGET_WEBAPP = "src";

const replaceInFile = async ({ filename, regex, replacement }) => {
  try {
    const contents = await fs.promises.readFile(filename, "utf-8");
    const replaced = contents.replace(regex, replacement);

    await fs.promises.writeFile(filename, replaced);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const copyFile = async (src, dest) => {
  try {
    await fs.promises.copyFile(src, dest);
    console.log(`create file: ${dest}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const isAnswerYes = async () => {
  const yesOrNo = await question("[Y/n]: ");

  return yesOrNo === "Y" || yesOrNo === "y";
};

const copyTemplates = async ({ basePath, interactorPath, presenterPath, routerPath, screenPath }) => {
  // interactor
  await copyFile("./templates/ScreenName.interactor.ts.template", interactorPath);

  await replaceInFile({ filename: interactorPath, regex: new RegExp(/ScreenName/gi), replacement: screenName });

  // presenter
  await copyFile("./templates/ScreenName.presenter.ts.template", presenterPath);

  await replaceInFile({ filename: presenterPath, regex: new RegExp(/ScreenName/gi), replacement: screenName });

  // routers
  await copyFile("./templates/ScreenName.router.ts.template", routerPath);

  await replaceInFile({ filename: routerPath, regex: new RegExp(/ScreenName/gi), replacement: screenName });
  await replaceInFile({ filename: routerPath, regex: new RegExp(/##basepath##/gi), replacement: basePath });

  // screens
  await copyFile("./templates/ScreenName.tsx.template", screenPath);

  await replaceInFile({ filename: screenPath, regex: new RegExp(/ScreenName/gi), replacement: screenName });
};

const createFolderIfNotExist = targetPath => {
  try {
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
      console.log("create folder: ", targetPath);
    }
  } catch (ex) {
    console.error(ex);
  }
};

const generateFiles = async () => {
  const subpath = await question(`\nInput subpath under component folders (ex: domestic, worldstock):\n`);

  const targetPath = path.join(COMPONENTS_PATH, subpath, screenName);

  const interactorPath = path.join(targetPath, `${screenName}.interactor.ts`);
  const presenterPath = path.join(targetPath, `${screenName}.presenter.ts`);
  const routerPath = path.join(targetPath, `${screenName}.router.ts`);
  const screenPath = path.join(targetPath, `${screenName}.tsx`);

  console.log("\nAre you sure to generate these files?");
  console.log([interactorPath, presenterPath, routerPath, screenPath].join("\n"));

  if (await isAnswerYes()) {
    createFolderIfNotExist(targetPath);

    copyTemplates({
      interactorPath,
      presenterPath,
      routerPath,
      screenPath,
    });
  } else {
    throw Error("Aborting...");
  }
};

const main = async () => {
  process.chdir(__dirname);

  try {
    await generateFiles([TARGET_WEBAPP]);
  } catch (ex) {
    console.error(ex.message);
  } finally {
    readline.close();
  }
};

main();
