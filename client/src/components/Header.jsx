import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiMoonFill } from "react-icons/pi";
import { GiDrippingHoney } from "react-icons/gi";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold  "
      >
        BLOG
        <span className="px-2 py-1 rounded-lg bg-gradient-to-tr  from-yellow-300  to-orange-400   text-white ">
          Hive
          <GiDrippingHoney className=" inline" />
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={CiSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="yellow">
        <CiSearch />
      </Button>
      <div className="flex gap-5 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <PiMoonFill />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.profilePic} />}
          >
            <Dropdown.Header>
              <div className="flex flex-col items-center p-3 gap-1">
                <img
                  src={currentUser.profilePic}
                  alt="profile pic"
                  className="rounded-lg w-24 "
                />
                <span className="block text-sm font-bold">
                  @{currentUser.username}
                </span>
                <span className="block text-sm truncate">
                  {currentUser.email}
                </span>
              </div>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              className="bg-gradient-to-tr  from-yellow-300  to-orange-400   text-white"
              outline
            >
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link className=" hover:text-orange-500" to="/">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link className=" hover:text-orange-500" to="/about">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link className=" hover:text-orange-500" to="/projects">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
