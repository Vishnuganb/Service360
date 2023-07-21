import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';
import AdsPage from './components/pages/advertiser/AdsHome.js';



import SP_Dashboard from './components/pages/ServiceProvider/SP_Dashboard/Index.js';
import RootLayout from './components/layout/RootLayout.js';
import SpLayout from './components/layout/SpLayout.js'
import AdvertiserLayout from './components/layout/AdvertiserLayout.js'
import CustomerDashboard from './components/pages/Customer/CustomerDashboard/CustomerDashboard.js';
import CustomerLayout from './components/layout/CustomerLayout.js';


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='Login' element={<Login />} />
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


    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
