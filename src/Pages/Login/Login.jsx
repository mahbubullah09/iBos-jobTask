import { useContext, useState } from "react";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa6";
import bg from "../../assets/authBg.png";
import icon from "../../assets/icon.png"
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContexApi/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext)

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email.toLowerCase(), password);

        if (result.success) {
            toast.success(result.message);
            navigate('/');
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="w-8xl mx-auto  ">
            <div className="flex  items-center justify-center w-full mx-auto   bg-white">
                <div className="p-0 lg:p-12 w-full lg:w-1/2 ">
                    <div className="flex flex-col md:flex-row bg-gray-100 px-2 py-8 w-full justify-center">

                        {/* Signin Form */}
                        <div className="">
                            <div className="px-4">
                                <h3 className="text-start text-[32px] font-medium text-[#000000]">
                                    Welcome Back
                                </h3>

                                <p className="text-start text-[16px] font-medium text-[#C8C4C4] mb-8">
                                    Enter your Credentials to access your account
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4 px-4">

                                    {/* Email Address */}
                                    <div className="relative">
                                        <input
                                            required
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="lowercase pt-5 px-4 py-1 text-[14px] text-black border rounded-md focus:ring focus:outline-none focus:border-blue-200 w-full"
                                        />
                                        <label className="absolute top-1 left-4 text-[12px] text-[#707070]">
                                            Email address
                                        </label>
                                    </div>

                                    {/* Password */}
                                    <div className="relative">
                                        <input
                                            required
                                            type={show ? "text" : "password"}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pt-5 px-4 py-1 text-[14px] text-black border rounded-md focus:ring focus:outline-none focus:border-blue-200 w-full"
                                        />
                                        <label className="absolute top-1 left-4 text-[12px] text-[#707070]">
                                            Password
                                        </label>
                                        <div
                                            onClick={() => setShow(!show)}
                                            className="cursor-pointer absolute right-2 top-[11px] text-[#707070] text-2xl"
                                        >
                                            {show ? <FaEye /> : <FaEyeSlash />}
                                        </div>

                                        <div>
                                            <h4 className="text-[#1E99F5] text-[14px] font-medium text-right my-2 cursor-pointer">Forgot Password</h4>
                                        </div>
                                    </div>

                                    {/* Terms & Conditions */}
                                    <div className="mb-4 flex items-center font-semibold">
                                        <input required type="checkbox" id="terms" className="mr-2 cursor-pointer" />
                                        <label htmlFor="terms" className="text-sm text-black cursor-pointer">
                                            I agree to the{" "}
                                            <span className="underline">Terms & Policy</span>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-2 rounded-lg font-semibold"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>


                            {/* divider  */}

                            <div className="flex items-center justify-center  gap-4 w-full">
                                <hr className="w-36 h-0.5 my-8 bg-gray-200 border-0 rounded " />
                                <h2 className="font-medium">or</h2>

                                <hr className="w-36 h-0.5 my-8 bg-gray-200 border-0 rounded " />

                            </div>

                            {/* social login  */}


                            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 ">

                                <button className="flex justify-center gap-1  items-center py-2 px-4 border  border-gray-300 rounded-md">

                                    <p className=" text-2xl"> <FcGoogle /></p>

                                    <p className=" text-sm font-semibold">Sign in with Google</p>

                                </button>
                                <button className="flex justify-center gap-1  items-center py-2 px-4 border  border-gray-300 rounded-md">

                                    <p className=" text-2xl"> <FaApple /></p>

                                    <p className=" text-sm font-semibold">Sign in with Apple</p>

                                </button>


                            </div>
                            <p className="text-center text-[14px] font-medium my-6">Have an account? <Link to={'/signup'} className="text-[#0F3DDE]">Sign up</Link></p>



                        </div>
                    </div>
                </div>
                {/* Background Image Section */}
                <div className="hidden lg:flex   relative w-1/2 ">
                    <div className="relative">
                        <img className=" object-cover " src={bg} alt="Background" />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                            <img src={icon} alt="" />
                            <h1 className="text-center text-[40px] font-bold">
                                Furni<span className="text-[#1E99F5]">Flex</span>
                            </h1>
                            <p className="text-[16px] text-[#C8C4C4] font-medium mt-4">
                                Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
