import {
  createRoutesFromElements,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import NavigationManager from "./NavigationManager";
import { Home } from "src/pages";

const routes = createRoutesFromElements(
  <Route
    path="/"
    element={
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    }
  >
    <Route path="/">
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<p>Author Appa bout page</p>} />
      <Route path="contact" element={<p>Author App contact page</p>} />
    </Route>
  </Route>
);

export default routes;
