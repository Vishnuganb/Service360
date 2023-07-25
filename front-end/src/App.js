import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';
import CreateAd from './components/pages/advertiser/CreateAd.js';
import AdsPage from './components/pages/advertiser/AdsPage.js';
import AdDashbord from './components/pages/advertiser/AdDashboard.js';


          
import SP_Dashboard  from './components/pages/ServiceProvider/SP_Dashboard/Index.js';
import RootLayout from './components/layout/RootLayout.js';
import SpLayout from './components/layout/SpLayout.js'
import AdvertiserLayout from './components/layout/AdvertiserLayout.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Route>
      <Route path="/ServiceProvider" element={<SpLayout />}>
        <Route path="ServiceProviderDashboard" element={<SP_Dashboard />} />
      </Route>
      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="CreateAd" element={<CreateAd />} />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="Ads" element={<AdsPage />} />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="Dashboard" element={<AdDashbord />} />
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
