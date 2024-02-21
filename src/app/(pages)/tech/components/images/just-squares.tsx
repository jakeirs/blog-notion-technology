/** NOT WORKING
 *
 * */
export const JustSquares = () => {
  return (
    <div className="p-2 not-prose relative bg-gray-50/50 rounded-xl overflow-hidden dark:bg-gray-800/25">
      <div
        className="absolute inset-0 bg-grid-neutral-200/20 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-grid-white/5 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        style={{ backgroundPosition: `10px 10px` }}
      ></div>
      <div className="relative rounded-lg overflow-hidden flex justify-center h-[400px]"></div>
    </div>
  );
};
