import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Storage } from "./pages/Storage/Storage";
import { ProductStock } from "./pages/ProductStock/ProductStock";
import { Orders } from "./components/Marketplace/Orders/Orders";
import { NotFound } from "./pages/NotFound/NotFound";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { APP_ROUTES } from "assets/const";
import "./styles/App.css";
import { AddItemWrapper } from "./components/AddItem/AddItemWrapper";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.Auth} element={<AuthPage />} />
      <Route exact path={APP_ROUTES.Main} element={<Layout />}>
        <Route path={APP_ROUTES.Storage} element={<Storage />} />
        <Route path={APP_ROUTES.Products} element={<ProductStock />} />
        <Route path={APP_ROUTES.Add} element={<AddItemWrapper />} />
        <Route path="orders" element={<Orders />}>
          <Route path=":id" element={<Orders />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
