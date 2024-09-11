import { FluentProvider, webLightTheme } from "@fluentui/react-components";;

const Error404: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <h1>404 - Page Not Found</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      </FluentProvider>
  );
};

export default Error404;
