import { PatternBg } from "@/components/ui/pattern-bg";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";
import { ImageSimple } from "@/components/ui/image-simple";
import { Separator } from "@/components/ui/separator";

export default function ComponentsImagesPage() {
  return (
    <div>
      <div className="grid grid-cols-3" /* "flex flex-col" works */>
        <ImageWithBg src={src} ratio={16 / 9} vignette />

        <ImageWithBg src={src} ratio={16 / 9} vignette />

        <ImageWithBg src={src} ratio={16 / 9} vignette />
      </div>
      <Separator className="my-10" />
      <section className="grid-cols-[repeat(auto-fit,minmax(400px,auto))] grid gap-2">
        <ImageWithBg src={src} ratio={16 / 9} />
        <ImageWithBg src={src} ratio={16 / 9} />
        <PatternBg />
      </section>
    </div>
  );
}
