import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout.jsx";

// pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { careersLoader } from "./pages/Careers/careersLoader.jsx";
import CareerDetails from "./pages/CareerDetails/CareerDetails.jsx";
import { careerDetailsLoader } from "./pages/CareerDetails/careerDetailsLoader.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { contactAction } from "./pages/Contact/contactAction.jsx";
import Confirmation from "./pages/Confirmation/Confirmation.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route path="about" element={<About />} errorElement={<ErrorPage />} />
      <Route
        path="contact"
        element={<Contact />}
        action={contactAction}
        errorElement={<ErrorPage />}
      />
      <Route
        path="contact/confirmation"
        element={<Confirmation />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="careers"
        element={<Careers />}
        loader={careersLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path="careers/:id"
        element={<CareerDetails />}
        loader={careerDetailsLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/skill-match/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
