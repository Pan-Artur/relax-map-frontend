import { HeroBlock } from "./HeroBlock/HeroBlock.jsx";
import { AdvantagesBlock } from "./AdvantagesBlock/AdvantagesBlock.jsx";
import PopularLocationsBlock from "./PopularLocationsBlock/PopularLocationsBlock.jsx";
import ReviewsBlock from "./ReviewsBlock/ReviewsBlock.jsx";
  
export const HomePage = () => {
  return (
    <>
      <HeroBlock />
      <AdvantagesBlock />
      <PopularLocationsBlock />
      <ReviewsBlock />
    </>
  );
};
