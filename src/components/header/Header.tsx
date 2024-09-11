import { FluentProvider, Tab, webLightTheme } from "@fluentui/react-components";
import * as Icon from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <NavLink to="/">
      <Tab icon={<Icon.Home16Regular />} value="home">
        Accueil
      </Tab>
      </NavLink>
    </FluentProvider>
  );
}

export default Header;