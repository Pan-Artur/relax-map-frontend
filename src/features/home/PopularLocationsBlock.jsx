import { useEffect, useState } from "react";
import { fetchPopularLocations } from "./api.js";
import { LocationsCard } from "../../features/locations/components/LocationsCard.jsx";
import styles from "./PopularLocationsBlock.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import {ReactComponent as ArrowBack} from '../../assets/icons/arrow_back.svg'
import {ReactComponent as  ArrowNext} from '../../assets/icons/arrow_forward.svg'
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function PopularLocationsBlock() {
  const [locations, setLocations] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchPopularLocations().then(setLocations);
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const next = () => {
    setIndex((i) => (i === locations.length - 1 ? 0 : i + 1));
  };
  const prev = () => {
    setIndex((i) => (i === 0 ? locations.length - 1 : i - 1));
  };
  return (
    <Container>
        <div className={styles.popular__header}>
          <h2>Популярні локації</h2>
          <button> <Link to="/locations">Всі локації</Link></button>
        </div>

      <div className={styles.popular__slider}>
        <Swiper 
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        >
          {locations.map(item => (
            <SwiperSlide key={item.id}>
              <LocationsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.popular__nav}>
        <button ref={prevRef}>
          <ArrowBack/>
        </button>
        <button ref={nextRef}>
          <ArrowNext/>
        </button>
      </div>
    </Container>
  );
}
