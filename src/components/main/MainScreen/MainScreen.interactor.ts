import useTempQuery from "queries/temp/useTempQuery";

const useInteractor = () => {
  const query = useTempQuery();
  console.log(query);
  return {};
};

export default useInteractor;
