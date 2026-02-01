import { useDispatch, useSelector } from "react-redux";
import { setLocations, setSelectedLocation, setLoading, setError } from "../store/locationsSlice";
import { api } from "../services/apiClient";

export const useLocations = () => {
  const dispatch = useDispatch();
  const { list, selected, loading, error } = useSelector((state) => state.locations);

  const fetchLocations = async (params) => {
    dispatch(setLoading(true));

    try {
      const res = await api.getLocations(params);
      dispatch(setLocations(res.data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchLocationById = async (id) => {
    dispatch(setLoading(true));

    try {
      const res = await api.getLocationById(id);

      dispatch(setSelectedLocation(res.data));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { list, selected, loading, error, fetchLocations, fetchLocationById };
};