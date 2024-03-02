import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function BentoJSPage() {
  return (
    <div className="h-screen">
      <div className="max-w-[1024px] my-20 mx-auto">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-rows-3 gap-2">
          <div /* BIG SQUARE */ className="bg-teal-400 rounded-2xl"></div>
          <div /* LONG HORIZ */ className="bg-pink-400 rounded-2xl">
            <div className="py-20">asd asd asd asd asd sad asd asdas </div>
          </div>
          <div /* LONG VERT */ className="bg-lime-400 rounded-2xl"></div>
          <div /* LONG VERT */ className="bg-amber-300 rounded-2xl"></div>
          <div /* SMALL SQUARE */ className="bg-amber-900 rounded-2xl"></div>
          <div /* LONG HORIZ */ className="bg-amber-100 rounded-2xl">asd</div>
          <div /* LONG HORIZ */ className="bg-cyan-400 rounded-2xl">asdasd</div>
        </div>
      </div>
    </div>
  );
}
