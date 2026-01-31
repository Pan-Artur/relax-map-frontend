import { useDispatch, useSelector } from "react-redux";
import { login, logout, loadFromLocalStorage } from "../store/authSlice";
import { selectUser, selectIsLoggedIn } from "../store/authSelectors";
import { api } from "../services/appClient";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const doLogin = async (data) => {
    try {
      const res = await api.login(data);
      
      dispatch(login(res.data));
      localStorage.setItem("auth", JSON.stringify(res.data));
    } catch (error) {
      throw error;
    }
  };

  const doLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth");
  };

  const loadAuth = () => {
    dispatch(loadFromLocalStorage());
  };

  return { user, isLoggedIn, doLogin, doLogin, doLogout, loadAuth };
}