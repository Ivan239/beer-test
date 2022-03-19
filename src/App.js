import Header from './layout/Header'
import Main from './layout/Main'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Favourite from './Pages/Favourite/Favourite';
import store from './redux/store/store';
import { loadCart } from './redux/favourite/actions';
import CardPage from './Pages/CardPage/CardPage';

function App() {
  store.dispatch(loadCart(JSON.parse(localStorage.getItem('favourites'))))
  return (
    <div className="App">
      <BrowserRouter basename="/beer-test">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:pageNumber" element={<Main />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/item/:itemId" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
