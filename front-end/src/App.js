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
import SpSignUp from './components/loginForm/ServiceProviderSignUP.js';
import CustSignUp from './components/loginForm/CustomerSignUP.js';
import AdminDashboard from './components/pages/Admin/AdminDashboard/Dashboard.js';
import CustomerDashboard from './components/pages/Customer/CustomerDashboard/CustomerDashboard.js';
import CustomerLayout from './components/layout/CustomerLayout.js';
import PostVacancyForm from './components/pages/Customer/PostVacancyForm.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='custSignUp' element={<CustSignUp />} />
        <Route path='SpSignUp' element={<SpSignUp />} />
      </Route>

      <Route path="/Admin" element={<AdminLayout />}>
        <Route path="AdminDashboard" element={<AdminDashboard /> } />
      </Route>

      <Route path="/ServiceProvider" element={<SpLayout />}>
        <Route path="ServiceProviderDashboard" element={<SP_Dashboard />} />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="AdsPage" element={<AdsPage />} />
      </Route>
      <Route path="/Customer" element={<CustomerLayout />}>
        <Route path="CustomerDashboard" element={<CustomerDashboard />} />
      </Route>
      <Route path="/Customer" element={<CustomerLayout />}>
      <Route path="PostVacancyForm" element={<PostVacancyForm />} />
      </Route>

      <Route path="/Customer" element={<CustomerLayout/>}>
        <Route path="CustomerDashboard" element={<CustomerDashboard />} />
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
