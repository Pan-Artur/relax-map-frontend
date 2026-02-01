import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadFromLocalStorage } from "./app/store/authSlice.js";
import { selectIsLoggedIn } from "./app/store/authSelectors.js";

import { MainLayout } from "./app/MainLayout.jsx";
import { HomePage } from "./features/home/HomePage.jsx";
import { LocationsPage } from "./features/locations/pages/LocationsPage.jsx";
import { LocationDetailsPage } from "./features/locations/pages/LocationDetailsPage.jsx";
import { LocationFormPage } from "./features/locations/pages/LocationFormPage.jsx";
import { ProfilePage } from "./features/profile/ProfilePage.jsx";
import { LoginPage } from "./features/auth/LoginPage.jsx";
import { RegisterPage } from "./features/auth/RegisterPage.jsx";
import { NotFoundPage } from "./ui/NotFoundPage.jsx";

const App = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="locations/:id" element={<LocationDetailsPage />} />
        <Route
          path="locations/add"
          element={
            isLoggedIn ? <LocationFormPage /> : <Navigate to="/auth/login" />
          }
        />
        <Route
          path="locations/:id/edit"
          element={
            isLoggedIn ? <LocationFormPage /> : <Navigate to="/auth/login" />
          }
        />
        <Route
          path="profile/:userId"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="auth/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="auth/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;