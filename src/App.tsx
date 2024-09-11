// Importe toutes les dépendances nécessaires
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Error404 from './components/404/Error404';
import { Spinner } from '@fluentui/react-components';

// Importe les composants nécessaires en lazy loading
const Home = React.lazy(() => import('./components/home/Home'));
const Pokemon = React.lazy(() => import('./components/pokemon/Pokemon'));

// Créer un composant pour l'application
function App() {
  // Retourne un rendu
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Suspense fallback={<Spinner label="Chargement..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </Provider>
    </Router>
  );
}

// Exporte le composant pour pouvoir l'utiliser ailleurs
export default App;
