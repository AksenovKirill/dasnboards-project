import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { WareHouses } from "./pages/Storages/WareHouses/WareHouses";
import { ProductStock } from "./pages/Storages/ProductStock/ProductStock";
import { Orders } from "./components/Marketplace/Orders/Orders";
import { NotFound } from "./pages/NotFound/NotFound";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { Organizations } from "./pages/MarketPlaces/Organizations/Organizations";
import { APP_ROUTES } from "assets/const";
import "./styles/App.css";

const App = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.Auth} element={<AuthPage />} />
      <Route exact path={APP_ROUTES.Main} element={<Layout />}>
        <Route path={APP_ROUTES.WareHouses} element={<WareHouses />} />
        <Route path={APP_ROUTES.Products} element={<ProductStock />} />
        <Route path={APP_ROUTES.Organizations} element={<Organizations />} />
        <Route path="orders" element={<Orders />}>
          <Route path=":id" element={<Orders />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
