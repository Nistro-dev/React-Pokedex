import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pokemon from "./components/pokemon/Pokemon";
import Header from "./components/header/Header";
import Error404 from "./components/404/Error404";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={Error404} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
