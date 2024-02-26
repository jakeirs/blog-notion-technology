import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { getDatabase } from "@/lib/notion/utils";
import BlogHomeTemporaryPage from "@/app/(pages)/(blog)/blog/_temporary";
import { ImageWithBg, src } from "@/components/ui/image-with-bg";
import { PageHeadline } from "@/app/(pages)/(blog)/blog/_parts/components/headline";
/** @todo
 * because it's already published blog post, the content should be
 * ISR every 12 hours for example.
 * Content for drafts and stage1 -> every time you hit the page
 *
 * */
export default async function BlogHomePage() {
  const database = await getDatabase();
  const posts = database.results as Array<PageObjectResponse>;

  return (
    <div className="">
      <PageHeadline />
      <div className="grid grid-cols-2">
        <div className=".Block presentation .cards inner-shadow-fading">
          <ImageWithBg src={src} ratio={16 / 9} />
          <div className="LEading">Leading</div>
        </div>
        <div className=".Block presentation .cards">
          <ImageWithBg src={src} ratio={16 / 9} vignette={true} />
          <div className="LEading">Leading</div>
        </div>
      </div>
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
    </div>
  );
}
