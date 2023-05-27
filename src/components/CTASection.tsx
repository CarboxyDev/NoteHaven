import { cn } from "../utils/misc";
import Link from "next/link";
import type { CTASectionProps } from "../types/props";

const CTASection = (props: CTASectionProps) => {
  const { heading, buttonText, backgroundImage } = props;

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center justify-center py-24 ",
          backgroundImage
        )}
      >
        <div className="mx-3 flex flex-col items-center justify-center">
          <h2 className="text-center font-secondary text-3xl font-semibold text-slate-50 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <Link href={"#get-started"} scroll={false}>
            <button className="text-md mt-16 w-50 rounded-lg bg-white py-4 font-semibold text-[#387aff] hover:bg-slate-200 md:w-60">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CTASection;
