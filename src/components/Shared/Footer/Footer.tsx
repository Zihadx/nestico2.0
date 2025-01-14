
const Footer = () => {
  return (
    <footer className="bg-[#344763] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-5">

        <h1 className="text-3xl font-bold leading-relaxed">
          NEU <br /> HOME SERVICE
        </h1>

        <nav className="flex justify-between md:w-1/2 items-center text-sm">
          <a href="#terms" className="hover:underline">
            Terms of use
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#cookie" className="hover:underline">
            Cookie Policy
          </a>
          <a href="#contact" className="hover:underline">
            Contact us
          </a>
        </nav>

        <div className="text-base">
          <p>Copyright © 2023 Neu Home Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
