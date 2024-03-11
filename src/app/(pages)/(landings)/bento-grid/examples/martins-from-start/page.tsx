import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function MartinsFromStartPage() {
  return (
    <div className="h-screen container bg-purple-900">
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-col h-full w-full">
          <div className="bg-orange-300">Navbar</div>
          <div className="bg-teal-300 h-2/3">HEADER</div>
          <div className="bg-lime-400 grid h-1/3">Technologies</div>
        </div>
        <div className="flex flex-col ">
          <div className="bg-lime-700 h-1/2">Articles</div>
          <div className="bg-blue-300 h-1/2">Bento</div>
        </div>
      </div>
    </div>
  );
}
