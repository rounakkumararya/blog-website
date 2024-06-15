import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { HiDocumentText } from "react-icons/hi";

export default function DashSidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
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
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={FaUser}
              label={currentUser.isAdmin ? "admin" : "user"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>

          <Sidebar.Item className="cursor-text text-gray-500 ">
            Joined{" "}
            {new Date(currentUser.createdAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Sidebar.Item>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          <Sidebar.Item
            onClick={handleSignout}
            icon={FaSignOutAlt}
            className="cursor-pointer"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
