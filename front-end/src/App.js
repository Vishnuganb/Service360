import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';

import Login from './components/loginForm/LoginContextProviderInterface.js';

import CreateAd from './components/pages/advertiser/CreateAd.js';
import AdsPage from './components/pages/advertiser/AdsPage.js';
import AdDashbord from './components/pages/advertiser/AdDashboard.js';

import SpDashboard  from './components/pages/ServiceProvider/SpDashboard/Index.js';
import SpViewJobs  from './components/pages/ServiceProvider/ViewJobs/Index.js';
import SpViewVacancies  from './components/pages/ServiceProvider/ViewVacancies/index.js';
import SpApplyVacancy from './components/pages/ServiceProvider/ApplyVacancy/Index.js';
import SpServices from './components/pages/ServiceProvider/MyServices/index.js';

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
import AdvertiserSignUp from './components/loginForm/AdvertiserSignUP.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/signup/customer' element={<CustSignUp />} />
        <Route path='/signup/serviceProvider' element={<SpSignUp />} />
        <Route path='/signup/advertiser' element={<AdvertiserSignUp />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard /> } />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="CreateAd" element={<CreateAd />} />
        <Route path="Ads" element={<AdsPage />} />
        <Route path="Dashboard" element={<AdDashbord />} />
      </Route>

      <Route path="/ServiceProvider" element={<SpLayout />}>
        <Route path="Dashboard" element={<SpDashboard />} />
        <Route path="ViewJobs" element={<SpViewJobs />} />
        <Route path="ViewVacancies" element={<SpViewVacancies />} />
        <Route path="ApplyVacancy" element={<SpApplyVacancy />} />
        <Route path="MyServices" element={<SpServices />} />
      </Route>

      <Route path="/Customer" element={<CustomerLayout />}>
        <Route path="CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="PostVacancyForm" element={<PostVacancyForm />} />
      </Route>

      <Route
        path="*"
        element={
          <Layout404>
            {" "}
            <PageNotFound />
          </Layout404>
        }
      />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
