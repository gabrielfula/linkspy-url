import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function AppRouter() {
     console.log("aqui em approuter")
     return <RouterProvider router={router} />;
}