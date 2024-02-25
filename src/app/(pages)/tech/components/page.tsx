import PostItem from "@/app/(pages)/tech/components/post-item";
import { src } from "@/components/ui/image-with-bg";

export const title =
  "Architectural Engineering Wonders of the modern era for your Inspiration";
export default function ComponentsPage() {
  return (
    <section className="flex justify-center">
      <div className="max-w-[1260px] w-full mx-6 my-12">
        <div className="text-5xl text-center py-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          This is heading
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <PostItem src={src} title={title} />
          <PostItem src={src} title={title} />
        </div>
      </div>
    </section>
  );
}
