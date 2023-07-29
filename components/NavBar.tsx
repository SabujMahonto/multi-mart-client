import Link from "next/link";

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
          <nav>
            <span>
              <Link href="/login">LogIn</Link>
            </span>
          </nav>
        </div>
      </header>
    </>
  );
};
