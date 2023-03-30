import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  CloudIcon,
  CubeIcon,
  LockClosedIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import { twMerge as tw } from "tailwind-merge";
import type { FeatureCardProps, FeatureItemProps } from "../types/props";
import { cn } from "../utils/misc";

const FeatureItem = (props: FeatureItemProps) => {
  const { heading, content, icon, variant } = props;

  return (
    <>
      <div className="mx-8 my-6 flex flex-row items-center justify-center lg:mx-4 lg:my-10 xl:mx-8">
        <div className="mt-1 self-start">
          <div
            className={tw(
              cn(
                "flex h-14 w-14 items-center justify-center rounded-full",
                "[&>*]:h-6 [&>*]:w-6",
                variant === "light" &&
                  "bg-primary-300/60 text-primary-700 hover:bg-primary-300",
                variant === "dark" &&
                  "bg-primary text-primary-100 hover:bg-primary-400"
              )
            )}
          >
            {icon}
          </div>
        </div>
        <div className="ml-7">
          <h3
            className={clsx(
              "text-lg font-semibold",
              variant === "light" && "text-gray-700",
              variant === "dark" && "text-gray-100"
            )}
          >
            {heading}
          </h3>
          <p
            className={clsx(
              "mt-2 text-sm",
              variant === "light" && "text-gray-500",
              variant === "dark" && "text-gray-400"
            )}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

const FeatureCard = (props: FeatureCardProps) => {
  const { variant } = props;
  return (
    <>
      <div className="flex justify-center lg:-mx-14 xl:mx-0">
        <div
          className={clsx(
            "grid max-w-md grid-cols-none grid-rows-3 rounded-2xl lg:max-w-none lg:grid-cols-3 lg:grid-rows-none",
            variant === "light" && "border border-gray-200 bg-white",
            variant === "dark" && "bg-gray-800"
          )}
        >
          <div
            className={clsx(
              "grid grid-rows-2 border-b lg:border-b-0 lg:border-r",
              variant === "light" && "border-gray-200",
              variant === "dark" && "border-gray-700"
            )}
          >
            <FeatureItem
              heading="Based on web3"
              content="All the notes are stored using the decentralized IPFS protocol"
              icon={<CubeIcon />}
              {...props}
            />
            <FeatureItem
              heading="Enhanced Safety"
              content="All your notes are encrypted using AES-256 encryption"
              icon={<LockClosedIcon />}
              {...props}
            />
          </div>

          <div
            className={clsx(
              "grid grid-rows-2 border-b lg:border-b-0 lg:border-r",
              variant === "light" && "border-gray-200",
              variant === "dark" && "border-gray-700"
            )}
          >
            <FeatureItem
              heading="Fast Uploads"
              content="Our IPFS hosts provide blazing fast uploads and downloads"
              icon={<ArrowUpTrayIcon />}
              {...props}
            />
            <FeatureItem
              heading="On The Cloud"
              content="Everything is stored on the cloud saving you tons of space"
              icon={<CloudIcon />}
              {...props}
            />
          </div>
          <div className="grid grid-rows-2">
            <FeatureItem
              heading="Personalized For You"
              content="We recommend notes based on your interests and likes"
              icon={<ChartBarIcon />}
              {...props}
            />
            <FeatureItem
              heading="Zero Censorship"
              content="We believe in freedom of speech and expression"
              icon={<MegaphoneIcon />}
              {...props}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
