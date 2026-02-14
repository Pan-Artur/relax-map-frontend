import { Container } from "../../../../components/Container/Container";

import style from "./LocationDescription.module.scss";

export const LocationDescription = ({ description }) => {
  return (
    <section className={style.description}>
      <Container>
        <p className={style.paragraph}>{description}</p>
      </Container>
    </section>
  );
};
