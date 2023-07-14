import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/layout/header.js';
import AppFooter from './components/layout/footer.js';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';

function App() {
  return (
    <>
      <AppHeader fixed="top" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <AppFooter />
    </>
  );
}

export default App;
