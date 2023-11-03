import { ThemeContextProvider } from "./ThemeContext";

const composeProvider = (contextProviders, children) =>
  contextProviders.reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);

const RootContextProvider = ({ children }) => {
  return composeProvider([ThemeContextProvider], children);
};

export default RootContextProvider;
