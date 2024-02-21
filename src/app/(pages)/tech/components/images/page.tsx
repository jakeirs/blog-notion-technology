import { ImageWithSquares } from "@/app/(pages)/tech/components/images/image-with-squares";
import { PatternBg } from "@/components/ui/pattern-bg";

const src =
  "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D";
export default function ComponentsImagesPage() {
  return (
    <div>
      <section className="flex justify-center flex-col p-40">
        <ImageWithSquares src={src} />
        {/*<PatternBg />*/}
      </section>
    </div>
  );
}
