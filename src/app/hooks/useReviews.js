import { useDispatch, useSelector } from "react-redux";
import { setReviews, setLoading, setError } from "../store/reviewsSlice";
import { api } from "../services/apiClient";

export const useReviews = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.reviews);

  const fetchReviews = async (locationId) => {
    dispatch(setLoading(true));

    try {
      const res = await api.getLocationById(locationId);

      dispatch(setReviews(res.data.reviews || []));
    } catch (error) {
      dispatch(setError(error.message)) ;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const addReview = async (locationId, data) => {
    dispatch(setLoading(true));

    try {
      await api.addReview(locationId, data);
      await fetchReviews(locationId);
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const deleteReview = async (id, locationId) => {
    dispatch(setLoading(true));

    try {
      await api.deleteReview(id);
      await fetchReviews(locationId);
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { list, loading, error, fetchReviews, addReview, deleteReview };
};