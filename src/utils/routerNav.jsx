import { createHashRouter } from "react-router-dom";
import App from "../App";
import Simulado from "../pages/simulado";

const routerNav = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/prova",
    element: <Simulado />,
  },
]);

export { routerNav };
