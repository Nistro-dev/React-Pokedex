// Import la librairie FluentUI
import { FluentProvider, webLightTheme } from "@fluentui/react-components";;

// Créer un composant pour les Erreurs 404 en utilisant une fonction
const Error404: React.FC = () => {
  // Retourne un rendu
  return (
    <FluentProvider theme={webLightTheme}>
      <h1>404 - Page Not Found</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      </FluentProvider>
  );
};

// Exporte le composant pour pouvoir l'utiliser ailleurs
export default Error404;
