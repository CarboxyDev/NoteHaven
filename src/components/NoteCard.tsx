import Link from "next/link";
import { useState } from "react";
import { LoadingAnimatedIcon } from "../utils/icons";
import { cn } from "../utils/misc";

interface NoteCardProps {
  title: string;
  description: string;
  price: number;
  author: string;
  noteid: string;
}

const NoteCard = (props: NoteCardProps) => {
  const { title, description, price, author, noteid } = props;
  const [isRedirecting, setIsRedirecting] = useState(false);

  const clickNoteEvent = () => {
    setIsRedirecting(true);
  };

  return (
    <>
      <div className="max-w-screen-sm:max-w-xs mx-auto w-90 self-start rounded-2xl border border-gray-200 bg-white pb-11 shadow-sm lg:w-96">
        <div className="mt-7 px-5 sm:px-6 md:px-7">
          <div className="mb-9 mt-4">
            <h2 className="font-secondary text-2xl font-semibold text-gray-600">
              {title}
            </h2>
            <div className="mt-4 h-px w-full bg-gray-200" />
            <p className="mt-8 text-gray-500">
              {description.length > 200
                ? description.slice(0, 200) + "..."
                : description}
            </p>
          </div>
          <span className={cn("block", "text-gray-400")}>
            {(price == 0 && "Free") || (price != 0 && "$ " + price)}
          </span>
          <div className="mt-8 h-px w-full bg-gray-200" />
          <div className="mt-6 h-11">
            {!isRedirecting && (
              <Link href={`/note/${noteid}`} onClick={clickNoteEvent}>
                {price == 0 && (
                  <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
                    View note
                  </button>
                )}
                {price != 0 && (
                  <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
                    Get access
                  </button>
                )}
              </Link>
            )}
            {isRedirecting && (
              <button className="flex h-full w-full items-center justify-center rounded-lg bg-primary text-white transition-colors delay-100 ease-in hover:bg-primary-600">
                <LoadingAnimatedIcon className="h-6 w-6 stroke-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
