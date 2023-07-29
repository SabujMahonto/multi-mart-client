import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("px-6 py-3 rounded-xl duration-300", {
  variants: {
    color: {
      green: "bg-accent1 text-light hover:bg-accent1/90",
      dark: "bg-dark text-light hover:bg-dark/90",
      light: "bg-light text-dark hover:bg-light/90",
      ghost: "bg-transparent text-dark hover:bg-dark/10",
    },
  },
  defaultVariants: {
    color: "green",
  },
});
const Button = () => {
  return (
    <span className="bg-accent1 text-light px-6 py-3  rounded-xl hover:bg-accent1/90 duration-300">
      <Link href="/login">LogIn</Link>
    </span>
  );
};

export default Button;
