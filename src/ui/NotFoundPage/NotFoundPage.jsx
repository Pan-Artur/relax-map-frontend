import { Container } from "../../components/Container/Container";
import NotFound from '../../assets/icons/errorPage.png';
import style from "./NotFoundPage.module.css"
export const NotFoundPage = () => {
  return (
    <Container>

      <h2 className={style.NotFoundTitle}>Ми шукали як могли...</h2>
      <p className={style.NotFoundSubTitle}>Введіть правильний шлях</p>
      <div className={style.NotFoundSvgContainer}>
        <img style={{width:'300px'}} src={NotFound} alt="" />
      </div>
    </Container>
  );
}