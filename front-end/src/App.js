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
import AdvertiserProfile from'./components/pages/User/Advertiser/EditProfile.js';
import VerifiedAds from './components/pages/advertiser/Ads/VerifiedAds.js';
import RejectedAds from "./components/pages/advertiser/Ads/RejectedAds.js";
import YetToVerifyAds from './components/pages/advertiser/Ads/YetToVerifyAds.js';
import ViewThread from './components/pages/Forum/ViewThread/ViewThread.js';


import SpDashboard from './components/pages/ServiceProvider/SpDashboard/Index.js';
import SpViewJobs from './components/pages/ServiceProvider/ViewJobs/Index.js';
import SpViewVacancies from './components/pages/ServiceProvider/ViewVacancies/Index.js';
import SpApplyVacancy from './components/pages/ServiceProvider/ApplyVacancy/Index.js';
import SpServices from './components/pages/ServiceProvider/MyServices/index.js';
import SpViewAJob from './components/pages/ServiceProvider/ViewAJob/Index.js';
import SpViewAVacancy from './components/pages/ServiceProvider/ViewAVacancy/Index.js';
import SpAddNewServices from './components/pages/ServiceProvider/AddNewServices/Index.js';
import SpCreateBlog from './components/pages/ServiceProvider/CreateABlog/Index.js';
import SpCreateTrainingSession from './components/pages/ServiceProvider/CreateTrainingSession/Index.js';
import SpMyProjectsJobs from './components/pages/ServiceProvider/MyProjectsJobs/Index.js';
import SpMyProjectsVacancies from './components/pages/ServiceProvider/MyProjectsVacancies/Index.js';
import SpViewTrainingSessions from './components/pages/ServiceProvider/ViewTrainingSessions/Index.js';
import SpViewATrainingSession from './components/pages/ServiceProvider/ViewATrainingSession/Index.js';
import SpMyProjectStates from './components/pages/ServiceProvider/MyProjectStates.js';
import SpAcceptedJob from './components/pages/ServiceProvider/AcceptedJob/Index.js';
import SpAcceptedVacancy from './components/pages/ServiceProvider/AcceptedVacancy/Index.js';
import SpStartJob from './components/pages/ServiceProvider/StartJob/Index.js';
import SpAvailabilityCalendar from './components/pages/ServiceProvider/AvailabilityCalendar/Index.js';
import SpMyTrainingSessions from './components/pages/ServiceProvider/MyTrainingSessions/Index.js';
import SpViewHistory from './components/pages/ServiceProvider/ViewHistory/Index.js';


import RootLayout from './components/layout/RootLayout.js';
import SpLayout from './components/layout/SpLayout.js';
import AdvertiserLayout from './components/layout/AdvertiserLayout.js';
import AdminLayout from './components/layout/AdminLayout.js';
import Layout404 from './components/layout/Layout404.js';
import PageNotFound from './components/pages/PageNotFound.js';

import AdminDashboard from './components/pages/Admin/AdminDashboard/Dashboard.js';
import ViewHistory from './components/pages/User/Admin/ViewHistory.js';
import AdminServices from './components/pages/Admin/AdminServices/AdminServices.js';
import AdminServiceProvider from './components/pages/Admin/AdminUsers/AdminServiceProviders.js';
import AdminCustomers from './components/pages/Admin/AdminUsers/AdminCustomers.js';
import AdminAdvertisers from './components/pages/Admin/AdminUsers/AdminAdvertisers.js';
import AdminReviews from './components/pages/Admin/AdminReviews/AdminReviews.js';

import CustomerDashboard from './components/pages/Customer/CustomerDashboard/CustomerDashboard.js';
import CustomerLayout from './components/layout/CustomerLayout.js';
import CustomerProfile from './components/pages/User/Customer/EditProfile.js';
import PostVacancyFormIndex from './components/pages/Customer/PostVacancyFormIndex.js';
import OngoingProject from './components/pages/Customer/CustomerDashboard/OngoingProject.js';
import Quotation from './components/pages/Customer/Quotation.js'
import ViewVacancy from './components/pages/Customer/ViewVacancy.js';
import SocialShareSP from './components/pages/Customer/SocialShare/SocialShareSP.js';


import Forum from './components/pages/Forum/Forum.js';
import PostVacancyForm from './components/pages/Customer/PostVacancyForm.js';
import Searchserviceprovider from './components/pages/Customer/SearchServiceProvider.js';
import ViewAservice from './components/pages/User/ViewAservice.js';
import ReceivedQuotation from './components/pages/Customer/ReceivedQuotation.js';
import ViewAQuotation from './components/pages/Customer/ViewAQuotation.js';
import ViewVacancyResponse from './components/pages/Customer/ViewVacanyResponse.js';
import CustomerComplaints from './components/pages/Customer/Complaints.js';
import ViewAjob from './components/pages/User/ViewAjob.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<ViewServices />} />
        <Route path="/services/:serviceName" element={<ServicePage />} />
        <Route path="/services/:serviceName/:ViewAservice" element={<ViewAservice />} />
        <Route path="/services/:serviceName/:ViewAjob" element={<ViewAjob />} />
        <Route path='login' element={<Login />} />
        <Route path='/signup/customer' element={<CustSignUp />} />
        <Route path='/signup/serviceProvider' element={<SpSignUp />} />
        <Route path='/signup/advertiser' element={<AdvertiserSignUp />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="serviceProviders" element={<AdminServiceProvider />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="advertisers" element={<AdminAdvertisers />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="history" element={<ViewHistory /> } />
      </Route>

      <Route path="/Advertiser" element={<AdvertiserLayout />}>
        <Route path="CreateAd" element={<CreateAd />} />
        <Route path="Ads" element={<AdsPage />} />
        <Route path="View" element={<ViewAd />} />
        <Route path="Dashboard" element={<AdDashbord />} />
        <Route path="Forum" element={<Forum />} />
        <Route path="VerifiedAds" element={<VerifiedAds />} />
        <Route path="RejectedAds" element={<RejectedAds />} />
        <Route path="YetToVerifyAds" element={<YetToVerifyAds />} />
        <Route path="ViewThread" element={<ViewThread />} />
      </Route>

      <Route path="/Customer" element={<CustomerLayout />}>
        <Route path="CustomerDashboard" element={<CustomerDashboard />} />
        <Route path="PostVacancyFormIndex" element={<PostVacancyFormIndex />} />
        <Route path="OngoingProject" element={<OngoingProject />} />
        <Route path="Quotation" element={<Quotation />} />
        <Route path="ViewVacancy" element={<ViewVacancy />} />
        <Route path="SocialShareSP" element={<SocialShareSP />} />
        <Route path="PostVacancyForm" element={<PostVacancyForm />} />
        <Route path="Searchserviceprovider" element={<Searchserviceprovider/>} />
        <Route path="ReceivedQuotation" element={<ReceivedQuotation />} />
        <Route path="ViewAQuotation" element={<ViewAQuotation/>} />
        <Route path="ViewVacancyResponse" element={<ViewVacancyResponse/>} />
        <Route path="CustomerComplaints" element={<CustomerComplaints/>} />
      </Route>

      <Route path="/ServiceProvider" element={<SpLayout />}>
        <Route path="Dashboard" element={<SpDashboard />} />
        <Route path="ViewJobs" element={<SpViewJobs />} />
        <Route path="ViewVacancies" element={<SpViewVacancies />} />
        <Route path="ApplyVacancy" element={<SpApplyVacancy />} />
        <Route path="MyServices" element={<SpServices />} />
        <Route path="ViewAJob/:id" element={<SpViewAJob />} />
        <Route path="ViewAVacancy/:id" element={<SpViewAVacancy />} />
        <Route path="AddNewServices" element={<SpAddNewServices />} />
        <Route path="CreateBlog" element={<SpCreateBlog />} />
        <Route path="CreateTrainingSession" element={<SpCreateTrainingSession />} />
        <Route path="MyProjectsJobs" element={<SpMyProjectsJobs/>} />
        <Route path="MyProjectsVacancies" element={<SpMyProjectsVacancies/>} />
        <Route path="ViewTrainingSessions" element={<SpViewTrainingSessions/>} />
        <Route path="ViewATrainingSession" element={<SpViewATrainingSession/>} />
        <Route path="MyProjectStates" element={<SpMyProjectStates/>} />
        <Route path="AcceptedJob" element={<SpAcceptedJob/>} />
        <Route path="AcceptedVacancy" element={<SpAcceptedVacancy/>} />
        <Route path="StartJob" element={<SpStartJob/>} />
        <Route path="AvailabilityCalendar" element={<SpAvailabilityCalendar/>} />
        <Route path="MyTrainingSessions" element={<SpMyTrainingSessions/>} />
        <Route path="ViewHistory" element={<SpViewHistory/>} />
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
