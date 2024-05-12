import { Footer } from "flowbite-react";
import { GiDrippingHoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCon() {
  return (
    <Footer
      container
      className="border border-t-8 dark:bg-zinc-800 border-yellow-300"
    >
      <div className="w-full mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 ">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold  "
            >
              BLOG
              <span className="px-2 py-1 rounded-lg bg-gradient-to-tr  from-yellow-300  to-orange-400   text-white ">
                Hive
                <GiDrippingHoney className=" inline" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="dark:text-orange-400 " title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  lorem ipsum
                </Footer.Link>
                <Footer.Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  lorem ipsum
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className="dark:text-orange-400 "
                title="Follow Us"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/rounakkumararya"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noreferrer noopener">
                  Discord
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/rounak-kumar-arya"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="dark:text-orange-400 " title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy policy</Footer.Link>
                <Footer.Link href="#">Terms & conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="BlogHive"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              className="hover:text-orange-400 dark:hover:text-white dark:text-orange-400 "
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="hover:text-orange-400 dark:hover:text-white dark:text-orange-400 "
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="hover:text-orange-400 dark:hover:text-white dark:text-orange-400 "
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              className="hover:text-orange-400 dark:hover:text-white dark:text-orange-400 "
              href="#"
              icon={BsGithub}
            />
            <Footer.Icon
              className="hover:text-orange-400 dark:hover:text-white dark:text-orange-400 "
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
