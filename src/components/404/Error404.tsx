import { FluentProvider, webLightTheme } from "@fluentui/react-components";

const Error404: React.FC = () => {
    return (
        <FluentProvider theme={webLightTheme}>
            <h1>404</h1>
        </FluentProvider>
    );
}

export default 404;