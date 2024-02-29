export const Navbar = () => {
  return (
    <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-4 text-4xl font-bold leading-10 text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1db1d2844e19f22b69217bb88a9855b2a979667b2828ac6460ffa6668f4217?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
          className="my-auto aspect-square w-[27px]"
        />
        <div className="flex-auto">voytech.</div>
      </div>
      <div className="flex gap-5 justify-between self-stretch my-auto text-lg font-semibold leading-7 text-center text-neutral-200">
        <div className="font-bold">ABOUT US</div>
        <div>BLOG</div>
        <div>CONTACT</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c106ecf840bf8487196bcd5037c25011b02a901966e0dc01996bf81de282b5?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
        className="mt-1.5 aspect-[2.17] w-[87px]"
      />
    </div>
  );
};
