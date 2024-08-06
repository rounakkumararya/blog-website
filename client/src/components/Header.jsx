import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import { signoutSuccess } from "../redux/user/userSlice";
import logoImg from "../assets/logo/logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2 dark:bg-zinc-800 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold  "
      >
        <img className=" w-20 " src={logoImg} alt="logo image" />
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={CiSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden " color="yellow">
        <CiSearch />
      </Button>
      <div className="flex gap-5 md:order-2 ">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            className="dark:bg-zinc-800 dark:shadow-sm-light  "
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" rounded img={currentUser.profilePic}>
                <div className="m-auto text-sm font-medium  dark:text-white">
                  <div>{currentUser.username}</div>
                  <div className="text-xs  text-gray-500 dark:text-gray-400">
                    joined{" "}
                    {new Date(currentUser.createdAt).toLocaleDateString(
                      "en-GB"
                    )}
                  </div>
                </div>
              </Avatar>
            }
          >
            <Dropdown.Header>
              <div className="flex flex-col items-center p-3 gap-1 ">
                <img
                  src={currentUser.profilePic}
                  alt="profile pic"
                  className="rounded-full w-24 border-4 border-[lightgray] shadow-lg"
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
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              className="bg-gradient-to-tr hover:scale-125  from-yellow-300  to-orange-400   text-white"
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
          <Link
            className=" dark:text-orange-400 dark:hover:text-white hover:text-orange-400"
            to="/"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link
            className=" dark:text-orange-400 dark:hover:text-white hover:text-orange-400"
            to="/about"
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link
            className=" dark:text-orange-400 dark:hover:text-white hover:text-orange-400"
            to="/projects"
          >
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
