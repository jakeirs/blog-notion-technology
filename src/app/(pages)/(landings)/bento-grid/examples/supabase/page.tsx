import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default async function SupabasePage() {
  return (
    <div className="h-screen">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-2 md:h-auto h-1/4">
        <div className="lg:col-span-2 md:col-span-3 bg-blue-900">
          <div>asd asd </div>
          <div>asd asd </div>
          <div>asd asd </div>
          <div>asd asd </div>
        </div>
        <div className="lg:col-span-1 md:col-span-1 bg-purple-900 md:aspect-square lg:aspect-auto">
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
        </div>
        <div className="lg:col-span-1 md:order-1 bg-pink-400 md:aspect-video">
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
        </div>
        <div className="lg:col-span-2 md:col-span-3 md:order-1 lg:order-last bg-blue-900">
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 bg-purple-900 md:aspect-video">
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 bg-pink-400">
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
          <div>asd asd</div>
        </div>
      </div>
    </div>
  );
}
