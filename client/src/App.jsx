// NOTE: VITE expects a `.jsx` extension for React components or VITE will lose it's shit!
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Page component imports
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages";

const router = createBrowserRouter([
  {
    // Parent route => Home page
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    // children prop set = to an array
    children: [
      {
        /** INDEX PAGE Landing:
         * Location of Landing component in this array is irrelevant, as
         * long as index is included. */
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        // Dashboard => will become a Parent route
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ]
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

