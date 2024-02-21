export const PatternBg = () => {
  return (
    <div className="p-2 relative rounded-xl h-[200px] overflow-hidden">
      <div
        className="absolute inset-0
        {/*linear-pattern*/}
        checkerboard-pattern
        {/*grid-pattern*/}
        {/*cross-pattern*/}
        {/*zigzag-pattern*/}
        {/*waves-pattern*/}
        {/*dots-pattern*/}
        {/*radials-corner-pattern*/}
        "
      ></div>
      {/* any component. Component above you can treat as bg */}
    </div>
  );
};
