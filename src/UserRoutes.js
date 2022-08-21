import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./shared/components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const SingleImgPage = lazy(() => import("./pages/SingleImgPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/imgs/:id"} element={<SingleImgPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
