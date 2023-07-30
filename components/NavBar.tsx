import Link from "next/link";
import { BsBag } from "react-icons/bs";
import Button from "./Button";

export const NavBar = () => {
  return (
    <>
      <header className="h-20 fixed top-0 left-0 right-0 bg-light/90 border-b backdrop-blur-lg border-dark/10 z-[100] shadow">
        <div className="wrapper w-full h-full flex justify-between items-center">
          {/* NAV LEFT */}
          <nav>
            <span className="text-xl font-semibold link-item">
              <Link href="/">Multi Mart</Link>
            </span>
          </nav>
          {/* NAV MID */}
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link href="/" className="link-item">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="link-item">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/about" className="link-item">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-item">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {/* NAV RIGHT */}
          <nav className="flex items-center gap-5">
            <Link href="/cart" className="relative text-2xl">
              <BsBag />
              <span className="absolute w-5 h-5 flex justify-center items-center  text-xs rounded-full bg-dark text-light -right-2 -bottom-2">
                10
              </span>
            </Link>
            <Button href="/login" placeholder="Login" />
          </nav>
        </div>
      </header>
    </>
  );
};
