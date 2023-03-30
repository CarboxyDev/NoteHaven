import type { ButtonProps } from "../types/props";
import { cva } from "class-variance-authority";
import { cn } from "../utils/misc";

const buttonVariants = cva(
  "rounded-md active:scale-95 text-lg transition-colors delay-100 ease-in",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary-400 text-white shadow-md",
        outline:
          "hover:bg-primary background-transparent border border-primary text-primary hover:text-white",
        "outline-neutral":
          "hover:bg-gray-400 hover:border-gray-400 bg-transparent border border-gray-300 text-gray-400 hover:text-white ",
      },
      size: {
        xl: "py-4 px-8",
        lg: "py-3 px-7",
        md: "text-md py-2 px-5",
        sm: "text-md py-2 px-3",
        xs: "text-sm py-2 px-2",
      },
      font: {
        semibold: "font-semibold",
        bold: "font-bold",
        normal: "font-normal",
        light: "font-light",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      font: "normal",
    },
  }
);

// FIXME: There's a bug where I'm unable to use className as a prop with the component. It causes the styling to go away.

const Button = (props: ButtonProps) => {
  const { size, variant, font, className } = props;

  return (
    <>
      <button
        className={cn(buttonVariants({ size, variant, font, className }))}
        {...props}
      />
    </>
  );
};

export default Button;
