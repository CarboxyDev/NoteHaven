import type { FillerProps } from "../types/props";

const Filler = (props: FillerProps) => {
  const { height, width } = props;

  return (
    <>
      {height && <div className={"w-full " + height}></div>}
      {width && <div className={"h-full " + width}></div>}
    </>
  );
};

export default Filler;
