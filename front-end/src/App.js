import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/layout/header.js';
import AppFooter from './components/layout/footer.js';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';
import SP_Dashboard  from './components/pages/ServiceProvider/SP_Dashboard/Index.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="ServiceProviderDashboard" element={<SP_Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
