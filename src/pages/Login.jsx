/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import loginAnimation from "../assets/login-animation.json";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
  const {loginWithEmailPass} = useContext(AuthContext)
  const [showHidePass, setShowHidePass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  // handle submit form 
  const onSubmit = (data) => {
    console.log(data)

    const {email, password} = data;

    loginWithEmailPass(email, password)
    .then((result) => {
      const user = result.user;
      navigate('/')
      console.log(user);
    })
    
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={loginAnimation} />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-2xl text-secondary text-center font-bold uppercase bg-base-200 py-3 rounded-lg">
                Login Here
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showHidePass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <div className="flex gap-2 my-2 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setShowHidePass(!showHidePass)}
                    className="p-2 bg-base-200"
                  >
                    {showHidePass ? (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    ) : (
                      <AiFillEye></AiFillEye>
                    )}
                  </button>
                </div>
              </div>
              <label className="label">
                Don't have an account?
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-success"
                >
                  Register Here
                </Link>
              </label>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent">
                  Login
                </button>
              </div>
              <div className="divider">OR LOGIN WITH</div>
              <div className="flex gap-3 justify-center">
                <button className="btn btn-outline text-xl btn-circle">
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-outline text-xl btn-circle">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;