export const Bento2 = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-5">
        <div className="flex flex-col px-5 py-8 w-full text-base bg-cyan-700 rounded-[30px]">
          <div className="self-center text-5xl font-semibold leading-9 text-zinc-50 max-md:text-4xl">
            newsletter
          </div>
          <div className="self-end mt-11 mr-5 leading-6 text-center text-black max-md:mt-10 max-md:mr-2.5">
            Sign up for the latest news, exclusive offers, and the chance to
            trial new and unreleased products.
          </div>
          <div className="flex gap-1 justify-between px-0.5 mt-4 text-center whitespace-nowrap leading-[153%] text-zinc-800">
            <div className="grow justify-center items-start self-start py-2.5 pr-16 pl-5 bg-white rounded-[35px] max-md:pr-5">
              abc@gmail.com
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a6f9523f606afa256f99f1ab8ae490bc2dafa4565deb50cc277baf7259d826?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
              className="max-w-full aspect-[4] w-[140px]"
            />
          </div>
        </div>
        <div className="flex flex-col px-20 py-9 mt-4 text-white whitespace-nowrap bg-violet-700 leading-[126%] rounded-[30px] max-md:px-5">
          <div className="text-4xl font-extrabold tracking-tighter">
            OUR SOCIALS.
          </div>
          <div className="mt-5 text-2xl italic underline">
            follow us for updates
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61ed1cb4940ddf17a9a8548fde45ab2e7faf0ad8cfe84b55da8cbf44f3e165bf?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
            className="mt-8 w-52 max-w-full aspect-[3.85]"
          />
        </div>
      </div>
    </div>
  );
};
