import Image from "next/image";
import footerLogo from "../../../../assets/neulogo.png";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#344763] text-white px-2">
      <div className="mx-auto max-w-[1180px] py-4 ">
        <div className="mb-4">
          <Link href="/">
            <Image src='/images/logo_in.svg' alt="footerLogo" width={150} height={150} />
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
        <div className="text-lg mt-10">
          <p>Copyright © {currentYear} Neu Home Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
