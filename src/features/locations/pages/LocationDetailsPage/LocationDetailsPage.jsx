import { useParams } from "react-router-dom";
import { api } from "../../../../app/services/apiClient";
import { useEffect, useState } from "react";

import { Container } from "../../../../components/Container/Container";

import { LocationInfoBlock } from "../../blocks/LocationInfoBlock/LocationInfoBlock";
import { LocationGallery } from "../../blocks/LocationGallery/LocationGallery";
import { LocationDescription } from "../../blocks/LocationDecription/LocationDescription";
import { ReviewsSection } from "../../components/ReviewsSection/ReviewsSection";

import style from "./LocationDetailsPage.module.scss";

export const LocationDetailsPage = () => {
  const { id } = useParams();

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await api.getLocationById(id);

        setLocation(res.data);
      } catch (error) {
        setError("Failed to load location!");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!location) return null;

  return (
    <>
      <div className={style.hero}>
        <Container>
          <LocationInfoBlock location={location} />
          <LocationGallery gallery={location.gallery} poster={location.poster} />
        </Container>
      </div>
      <LocationDescription description={location.description} />
      <ReviewsSection locationId={location.id} />
    </>
  );
};