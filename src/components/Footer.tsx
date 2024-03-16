import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              {" "}
              Find an Apple Store
            </span>{" "}
            or
            <span className="underline text-blue cursor-pointer">
              {" "}
              other retailer
            </span>{" "}
            near You!
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call +0000-121-1344{" "}
          </p>
        </div>

        <hr className="bg-neutral-700 my-5 h-[1px] w-full border-none" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <div className="flex items-center gap-1 flex-wrap">
            {footerLinks.map((link, i) => (
              <>
                <p
                  key={link}
                  className="font-semibold cursor-pointer text-gray hover:text-white transition-all text-xs"
                >
                  {link}
                </p>
                <span className="text-gray">
                  {i !== footerLinks.length - 1 && " | "}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
