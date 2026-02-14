import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loadFromLocalStorage } from "./app/store/authSlice.js";
import {
  selectIsLoggedIn,
  selectUser,
  selectInitialized,
} from "./app/store/authSelectors.js";

import { ToastProvider } from "./components/ToastProvider/ToastProvider.jsx";

import { ModalWrapper } from "./ui/ModalWrapper/ModalWrapper.jsx";

import { MainLayout } from "./app/MainLayout.jsx";
import { HomePage } from "./features/home/HomePage.jsx";
import { LocationsPage } from "./features/locations/pages/LocationsPage.jsx";
import { LocationDetailsPage } from "./features/locations/pages/LocationDetailsPage/LocationDetailsPage.jsx";
import { LocationFormPage } from "./features/locations/pages/LocationFormPage/LocationFormPage.jsx";
import { ProfilePage } from "./features/profile/ProfilePage.jsx";
import { LoginPage } from "./features/auth/LoginPage.jsx";
import { RegisterPage } from "./features/auth/RegisterPage.jsx";
import { NotFoundPage } from "./ui/NotFoundPage.jsx";

import { AddReviewModal } from "./features/locations/modals/AddReviewModal/AddReviewModal.jsx";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const initialized = useSelector(selectInitialized);

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  if (!initialized) {
    return <div>Loading auth...</div>;
  }

  return (
    <ToastProvider>
      <Routes location={state?.background || location}>
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
            path={"profile/:id"}
            element={
              isLoggedIn && user?.id ? (
                <ProfilePage />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          path="auth/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="auth/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
      </Routes>
      {state?.background && (
        <Routes>
          <Route
            path="locations/:id/add-review"
            element={
              <ModalWrapper onClose={() => navigate(-1)}>
                <AddReviewModal />
              </ModalWrapper>
            }
          />
        </Routes>
      )}
    </ToastProvider>
  );
};

export default App;
