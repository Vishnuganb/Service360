import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';

import Login from './components/loginForm/LoginContextProviderInterface.js';
import SpSignUp from './components/loginForm/ServiceProviderSignUP.js';
import CustSignUp from './components/loginForm/CustomerSignUP.js';
import AdvertiserSignUp from './components/loginForm/AdvertiserSignUP.js';
import ViewServices from './components/pages/User/ViewServices.js';
import ServicePage from './components/pages/User/ServicePage.js';

import CreateAd from './components/pages/advertiser/CreateAd.js';
import AdsPage from './components/pages/advertiser/AdsPage.js';
import AdDashbord from './components/pages/advertiser/AdDashboard.js';
import ViewAd from './components/pages/advertiser/ViewAd.js';

import SpDashboard from './components/pages/ServiceProvider/SpDashboard/Index.js';
import SpViewJobs from './components/pages/ServiceProvider/ViewJobs/Index.js';
import SpViewVacancies from './components/pages/ServiceProvider/ViewVacancies/index.js';
import SpApplyVacancy from './components/pages/ServiceProvider/ApplyVacancy/Index.js';
import SpServices from './components/pages/ServiceProvider/MyServices/index.js';
import SpViewAJob from './components/pages/ServiceProvider/VIewAJob/index.js';
import SpViewAVacancy from './components/pages/ServiceProvider/ViewAVacancy/index.js';
import SpAddNewServices from './components/pages/ServiceProvider/AddNewServices/Index.js'

import RootLayout from './components/layout/RootLayout.js';
import SpLayout from './components/layout/SpLayout.js';
import AdvertiserLayout from './components/layout/AdvertiserLayout.js';
import AdminLayout from './components/layout/AdminLayout.js';
import Layout404 from './components/layout/Layout404.js';
import PageNotFound from './components/pages/PageNotFound.js';

import AdminDashboard from './components/pages/Admin/AdminDashboard/Dashboard.js';
import AdminServices from './components/pages/Admin/AdminServices/AdminServices.js';

import CustomerDashboard from './components/pages/Customer/CustomerDashboard/CustomerDashboard.js';
import CustomerLayout from './components/layout/CustomerLayout.js';

import PostVacancyFormIndex from './components/pages/Customer/PostVacancyFormIndex.js';
import OngoingProject from './components/pages/Customer/CustomerDashboard/OngoingProject.js';
import Quotation from './components/pages/Customer/Quotation.js'
import ViewVacancy from './components/pages/Customer/ViewVacancy.js';
import SocialShareSP from './components/pages/Customer/SocialShare/SocialShareSP.js';


import Forum from './components/pages/Forum/Forum.js';
import PostVacancyForm from './components/pages/Customer/PostVacancyForm.js';
import Searchserviceprovider from './components/pages/Customer/SearchServiceProvider.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<ViewServices/>} />
        <Route path="/services/:serviceName" element={<ServicePage />} />
        <Route path='login' element={<Login />} />
        <Route path='/signup/customer' element={<CustSignUp />} />
        <Route path='/signup/serviceProvider' element={<SpSignUp />} />
        <Route path='/signup/advertiser' element={<AdvertiserSignUp />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="services" element={<AdminServices />} />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="CreateAd" element={<CreateAd />} />
        <Route path="Ads" element={<AdsPage />} />
        <Route path='View' element={<ViewAd />} />
        <Route path="Dashboard" element={<AdDashbord />} />
        <Route path='Forum' element={<Forum />} />
      </Route>

      <Route path="/Customer" element={<CustomerLayout />}>
        <Route path="CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="PostVacancyFormIndex" element={<PostVacancyFormIndex />} />
        <Route path="OngoingProject" element={<OngoingProject />} />
        <Route path="Quotation" element={<Quotation/>} />
        <Route path="ViewVacancy" element={<ViewVacancy/>} />
        <Route path="SocialShareSP" element={<SocialShareSP />}/>
        <Route path="PostVacancyForm" element={<PostVacancyForm />} />
        <Route path="Searchserviceprovider" element={<Searchserviceprovider />} />
      </Route>

      <Route path="/ServiceProvider" element={<SpLayout />}>
        <Route path="Dashboard" element={<SpDashboard />} />
        <Route path="ViewJobs" element={<SpViewJobs />} />
        <Route path="ViewVacancies" element={<SpViewVacancies />} />
        <Route path="ApplyVacancy" element={<SpApplyVacancy />} />
        <Route path="MyServices" element={<SpServices />} />
        <Route path="ViewAJob" element={<SpViewAJob />} />
        <Route path="ViewAVacancy" element={<SpViewAVacancy />} />
        <Route path="AddNewServices" element={<SpAddNewServices />} />
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
