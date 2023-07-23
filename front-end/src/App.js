import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';
import AdsPage from './components/pages/advertiser/AdsHome.js';


          
import SpDashboard  from './components/pages/ServiceProvider/SpDashboard/Index.js';
import SpViewJobs  from './components/pages/ServiceProvider/ViewJobs/Index.js';
import SpViewVacancies  from './components/pages/ServiceProvider/ViewVacancies/Index.js';


import RootLayout from './components/layout/RootLayout.js';
import SpLayout from './components/layout/SpLayout.js'
import AdvertiserLayout from './components/layout/AdvertiserLayout.js'


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='Login' element={<Login />} />
      </Route>
      <Route path="/ServiceProvider" element={<SpLayout/>}>
        <Route path="Dashboard" element={<SpDashboard />} />
        <Route path="ViewJobs" element={<SpViewJobs />} />
        <Route path="ViewVacancies" element={<SpViewVacancies />} />
      </Route>
      <Route path="/Advertiser" element={<AdvertiserLayout/>}>
        <Route path="AdsPage" element={<AdsPage />} />
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
