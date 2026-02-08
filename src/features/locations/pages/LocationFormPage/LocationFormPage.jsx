import { useNavigate } from "react-router-dom";

import { Container } from "../../../../components/Container/Container";

import { LocationForm } from "../../forms/LocationForm/LocationForm";

export const LocationFormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <LocationForm onSuccess={() => navigate("/locations")} />
      </Container>
    </>
  );
};
