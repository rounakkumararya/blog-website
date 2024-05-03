import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiDrippingHoney } from "react-icons/gi";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-xl mx-auto flex-col gap-8">
        <div className="flex flex-col justify-center gap-1">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-4xl font-semibold"
          >
            BLOG
            <span className="px-3 py-1 rounded-lg bg-gradient-to-tr  from-yellow-300  to-orange-400   text-white ">
              Hive
              <GiDrippingHoney className=" inline mx-1" />
            </span>
          </Link>
          <p className="text-sm text-center mt-5">
            Welcome to my blog website. You can proceed by signing in with your
            email & password or by using Google accounts.
          </p>
        </div>
        {/* Lower div */}
        <div className="">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="abc@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="bg-gradient-to-tr  from-yellow-300  to-orange-400   text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Sign In"}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-3">
            <span>Newbee in the Hive?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
