import { useEffect, useState } from "react";
import { fetchPopularLocations } from "./api.js";
import { LocationsCard } from "../../features/locations/components/LocationsCard.jsx";
import styles from "./PopularLocationsBlock.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back.svg";
import { ReactComponent as ArrowNext } from "../../assets/icons/arrow_forward.svg";
import { Swiper, SwiperSlide } from "swiper/react";
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
 let locationsData = [
		{
			id: 1,
			title: 'Сонячна Рівʼєра',
			type: 'Море',
			rate: 2,
			image:
				'https://image2url.com/r2/default/images/1770461401787-f00e54c3-ede3-493b-9b4b-c4f298fe4a21.png',
		},
		{
			id: 2,
			title: 'Тилігульський Спокій',
			type: 'Море',
			rate: 4,
			image:
				'https://image2url.com/r2/default/images/1770461473395-e26988ca-23c0-4ac1-91a8-71eaf2e5729e.png',
		},
		{
			id: 3,
			title: 'Кінбурнська Вольниця',
			type: 'Море',
			rate: 5,
			image:
				'https://image2url.com/r2/default/images/1770461551036-26198a2b-3a66-4888-98c1-3c3bc21395ea.png',
		},
  ];
  return (
    <div className={styles.popularBox}>
      <Container>
        <div className={styles.popular__header}>
          <h2>Популярні локації</h2>
          <button>
            {" "}
            <Link to="/locations">Всі локації</Link>
          </button>
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
              1374: {
                slidesPerView: 3,
              },
            }}
          >
            {locationsData.map((location) => (
              <SwiperSlide key={location.id}>
                <LocationsCard
                  place={location.place}
                  image={location.image}
                  rating={location.rate}
                  title={location.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.popular__nav}>
          <button ref={prevRef}>
            <ArrowBack />
          </button>
          <button ref={nextRef}>
            <ArrowNext />
          </button>
        </div>
      </Container>
    </div>
  );
}
