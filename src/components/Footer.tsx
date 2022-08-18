import React from "react";

const Footer = () => {
  return (
    <footer className="mb-5 mt-4 p-4 text-xs">
      <div className="container mx-auto">
        <div className="text-labelGrey">
          <div className="">
            More ways to shop: <a href="/">Find an Apple Store</a> or{" "}
            <a href="/">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="">
            <div className="my-1 ">
              Copyright &copy; 2022 Apple Inc. All rights reserved.
            </div>
            <div className="text-[#424545]">
              <ul className="flex gap-2">
                <li className="border-r pr-3">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="border-r pr-3">
                  <a href="/">Terms of Use</a>
                </li>
                <li className="border-r pr-3">
                  <a href="/">Sales and Refunds</a>
                </li>
                <li className="border-r pr-3">
                  <a href="/">Legal</a>
                </li>
                <li className="pr-3">
                  <a href="/">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
