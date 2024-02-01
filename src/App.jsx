import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              element={<Homepage />}
            />
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="catalog"
              element={<Catalog />}
            />
            <Route
              path="cart"
              element={<Cart />}
            />
          </Route>
          <Route
            path="*"
            element={<Homepage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
