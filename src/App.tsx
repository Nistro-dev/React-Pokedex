import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Error404 from './components/404/Error404';
import { Spinner } from '@fluentui/react-components';

const Home = React.lazy(() => import('./components/home/Home'));
const Pokemon = React.lazy(() => import('./components/pokemon/Pokemon'));

function App() {
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

export default App;
