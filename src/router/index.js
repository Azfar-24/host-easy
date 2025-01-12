import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';
import Loader from 'components/ui/loader';
import Header from 'components/header';
import Footer from 'components/footer';
import { routes } from './routesConfig';
import AboutUs from 'pages/aboutUs';
import FAQ from 'pages/faq';
import TnC from 'pages/tnc';
import PrivacyPolicy from 'pages/privacyPolicy';
import ServiceDetails from 'pages/serviceDetails';
import EventDetails from 'pages/eventDetails';
import Helper from 'pages/helper';

const AppLayout = lazy(() => import(/* webpackChunkName: "AppLayout" */ '../components/applayout'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ 'pages/Home'));

const childRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: `${routes.services.path}/:serviceId`,
    element: <ServiceDetails />
  },
  {
    path: `${routes.events.path}/:eventId`,
    element: <EventDetails />
  },

  {
    path: routes.aboutUs.path,
    element: <AboutUs />
  },
  {
    path: routes.faq.path,
    element: <FAQ />
  },
  {
    path: routes.privacyPolicy.path,
    element: <PrivacyPolicy />
  },
  {
    path: routes.applyAsHelper.path,
    element: <Helper />
  },
  {
    path: routes.tnc.path,
    element: <TnC />
  },
  {
    path: '*',
    element: <h1>No Such Route</h1>
  }
];

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);

  return <h1>Something went wrong; please refresh the page.</h1>;
}

const route = [
  {
    path: '/',
    element: (
      <div className='main'>
        <Header />
        <AppLayout />
        <Footer />
      </div>
    ),
    children: childRoutes,
    errorElement: <ErrorBoundary />
  }
];
export const router = createBrowserRouter(route, {});
const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
export default Routes;
