import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';
import AdsPage from './components/pages/advertiser/AdsHome.js';
import SP_Dashboard from './components/pages/ServiceProvider/SpDashboard/Index.js';
import RootLayout from './components/layout/RootLayout.js';
import SpLayout from './components/layout/SpLayout.js';
import AdvertiserLayout from './components/layout/AdvertiserLayout.js';
import AdminLayout from './components/layout/AdminLayout.js';
import Layout404 from './components/layout/Layout404.js';
import PageNotFound from './components/pages/PageNotFound.js';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='Login' element={<Login />} />
      </Route>

      <Route path="/Admin" element={<AdminLayout />}>
        <Route path="AdminDashboard" element={<SP_Dashboard />} />
      </Route>

      <Route path="/ServiceProvider" element={<SpLayout />}>
        <Route path="ServiceProviderDashboard" element={<SP_Dashboard />} />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="AdsPage" element={<AdsPage />} />
      </Route>

      <Route path="*" element={<Layout404><PageNotFound /></Layout404>} />
      
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
