import { PatternBg } from "@/components/ui/pattern-bg";
import { src } from "@/app/(pages)/tech/components/page";
import { ImageWithBg } from "@/components/ui/image-with-bg";

export default function ComponentsImagesPage() {
  return (
    <div>
      <section className="grid-cols-[repeat(auto-fit,minmax(400px,auto))] grid gap-2">
        <ImageWithBg src={src} ratio={16 / 9} />
        <ImageWithBg src={src} ratio={16 / 9} />
        <PatternBg />
      </section>
    </div>
  );
}
