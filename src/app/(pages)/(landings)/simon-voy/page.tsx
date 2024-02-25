import Link from "next/link";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";
export default async function BlogHomePage() {
  return (
    <section className="flex justify-center">
      <div className="max-w-[660px] mx-6 my-12 w-full">
        <div>
          <h1 className="text-5xl max-w-[750px] mx-auto my-6 pb-2 font-bold text-center ">
            Simon Voy
          </h1>
          <h2 className="text-2xl max-w-[750px] mx-auto pb-2 font-bold text-center">
            With what you want to associate me with?
          </h2>
          <div className="text-xl mx-auto pb-2 font-bold">
            My big achievement, cooperation, evidences
          </div>
          <div className="text-xl mx-auto pb-2 font-bold">
            Where I am going (my North Star)
          </div>
          <div className="text-xl mx-auto pb-2 font-bold">Together</div>
          <ImageWithBg src={src} ratio={16 / 7} />
          <div>
            <h2 className="text-2xl max-w-[750px] mx-auto mt-6 pb-2 font-bold ">
              Links:
            </h2>
            <ul className="list-disc pl-8">
              <li>
                <Link className="underline" href="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
