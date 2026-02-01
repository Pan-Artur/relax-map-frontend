import { HeroBlock } from "./HeroBlock";
import { AdvantagesBlock } from "./AdvantagesBlock";
import PopularLocationsBlock from "./PopularLocationsBlock";
import { ReviewsBlock } from "./ReviewsBlock";
  
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
