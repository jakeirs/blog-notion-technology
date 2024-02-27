import { ImageWithBg, src } from "@/components/ui/image-with-bg";

export const CarouselPostsRow = () => {
  return (
    <div className="grid grid-cols-3">
      <div className=".Block presentation .cards">
        <ImageWithBg src={src} />
        <div className="LEading">Leading</div>
      </div>
      <div className=".Block presentation .cards">
        <ImageWithBg src={src} />
        <div className="LEading">Leading</div>
      </div>
      <div className=".Block presentation .cards">
        <ImageWithBg src={src} />
        <div className="LEading">Leading</div>
      </div>
    </div>
  );
};
