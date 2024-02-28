import { ImageWithScaling } from "@/components/ui/image-with-scaling";

const digitalSurvivalSrc = "/images/web-framing/digital_survival.webp";
const howWeBuildSrc = "/images/web-framing/how_we_build.webp";

export const TwoCategoriesPosts = () => {
  return (
    <div className="grid grid-cols-2">
      <div className=".Block presentation .cards inner-shadow-fading">
        <ImageWithScaling src={digitalSurvivalSrc} ratio={16 / 9} vignette />
        <div className="LEading">Leading</div>
      </div>
      <div className=".Block presentation .cards">
        <ImageWithScaling src={howWeBuildSrc} ratio={16 / 9} vignette />
        <div className="LEading">Leading</div>
      </div>
    </div>
  );
};
