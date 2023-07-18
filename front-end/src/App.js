import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Index.js';
import Login from './components/loginForm/Login.js';
import SP_Dashboard  from './components/pages/ServiceProvider/SP_Dashboard/Index.js';
import RootLayout from './components/layout/RootLayout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path="ServiceProviderDashboard" element={<SP_Dashboard />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
