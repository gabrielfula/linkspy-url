import { createBrowserRouter } from "react-router-dom";
import TrackingPage from "./TrackingPage";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <TrackingPage />,
  },
]);
