import { Container } from "../components/Container/Container";
import { ReactComponent as NotFound} from '../assets/icons/not found.svg'
import style from "./NotFoundPage.module.css"
export const NotFoundPage = () => {
  return (
    <Container>

      <h2 className={style.NotFoundTitle}>Ми шукали як могли...</h2>
      <p className={style.NotFoundSubTitle}>Ведіть правильний шлях</p>
      <div className={style.NotFoundSvgContainer}>
        <NotFound height={500}/>
      </div>
    </Container>
  );
}