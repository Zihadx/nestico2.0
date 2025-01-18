import Image from "next/image";
import footerLogo from "../../../../assets/neulogo.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#344763] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 space-y-5">
        <div className="py-4">
          <Link href="/">
            <Image src={footerLogo} alt="footerLogo" width={150} height={150} />
          </Link>
        </div>
        <nav className="flex justify-between md:w-1/2 items-center">
          <a href="#terms" className="hover:text-blue-300">
            Terms of use
          </a>
          <a href="#privacy" className="hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="#cookie" className="hover:text-blue-300">
            Cookie Policy
          </a>
          <a href="#contact" className="hover:text-blue-300">
            Contact us
          </a>
        </nav>
        <div className="text-lg">
          <p>Copyright © {currentYear} Neu Home Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
