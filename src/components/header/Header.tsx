// Import la librairie FluentUI
import { FluentProvider, Tab, webLightTheme } from "@fluentui/react-components";
// Import la librairie FluentUI Icons
import { Home16Regular } from "@fluentui/react-icons";
// Import le router pour naviguer entre les pages
import { NavLink } from "react-router-dom";

// Créer un composant pour le header en utilisant une fonction
const Header: React.FC = () => {

  // Retourne un rendu
  return (
    <FluentProvider theme={webLightTheme}>
      {/* Utilise NavLink pour naviguer entre les pages */}
      <NavLink to="/">
        <Tab icon={<Home16Regular />} value="home">
          Accueil
        </Tab>
      </NavLink>
    </FluentProvider>
  );
}

// Exporte le composant pour pouvoir l'utiliser ailleurs
export default Header;