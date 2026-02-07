import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout/Layout.jsx";
import { ROUTER } from "./app/routes.jsx";
import "/src/assets/styles/global.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage.jsx"));
const AboutProductPage = lazy(
  () => import("./pages/AboutProductPage/AboutProductPage.jsx"),
);
const ComparisionPage = lazy(
  () => import("./pages/ComparisonPage/ComparisonPage.jsx"),
);
const FavouriteProductPage = lazy(
  () => import("./pages/FavouriteProductPage/FavouriteProductPage.jsx"),
);
const CartPage = lazy(() => import("./pages/CartPage/CartPage.jsx"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/Checkout.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage.jsx"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage.jsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTER.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${ROUTER.SHOP}`} element={<ShopPage />} />
          <Route path={`${ROUTER.SHOPITEM}`} element={<AboutProductPage />} />
          <Route path={`${ROUTER.COMPARISION}`} element={<ComparisionPage />} />
          <Route
            path={`${ROUTER.FAVOURITE}`}
            element={<FavouriteProductPage />}
          />
          <Route path={`${ROUTER.CART}`} element={<CartPage />} />
          <Route path={`${ROUTER.CHECKOUT}`} element={<CheckoutPage />} />
          <Route path={`${ROUTER.CONTACT}`} element={<ContactPage />} />
          <Route path={`${ROUTER.BLOG}`} element={<BlogPage />} />

          <Route path={ROUTER.ALL} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
