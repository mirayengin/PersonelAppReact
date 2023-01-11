import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuthCall from "../hook/useAuthCall";
import { Link } from "react-router-dom";

const registerSchema = yup.object().shape({
  username: yup
    .string()
    // .email("Please enter valid email")
    .required("Please enter an email"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter an email"),
  password: yup.string()
    .min(8, "Password must have min 8 chars"),
  // .max(16, "Password must have max 16 chars")
  // .required("Please enter a password")
  // .matches(/\d+/, "Password must have a number")
  // .matches(/[a-z]+/, "Password must have a lowercase")
  // .matches(/[A-Z]+/, "Password must have a uppercase")
  // .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a special chars"),

  // first_name: yup.string().required("Please enter a First Name"),
  // last_name: yup.string().required("Please enter a Last Name"),
});

const Login = () => {
  const { login } = useAuthCall();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "erhan",
      email: "@erhan.com",
      password: "",

    },
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      login(values);
      console.log("values", values);
      action.resetForm();
      
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full ">
        <h1 className="font-bold text-2xl mt-32">Login</h1>
        <div className="flex justify-center p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Username"
                onChange={handleChange}
                value={values.username}
                name="username"
              />
              <p>{errors.username || ""}</p>
            </div>

            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Email address"
                onChange={handleChange}
                value={values.email}
                name="email"
              />
              <p>{errors.email || ""}</p>
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
                className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput126"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                name="password"
              />
              <p>{errors.password || ""}</p>
            </div>

            <button
              type="submit"
              className="
  w-full
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
            >
              Sign In
            </button>
            <div className="mt-5">
              <Link to="/register" >
                Dont you have an account? Sing Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
