import {  Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" text-center h-full mt-44">
 <h4 className=" text-6xl font-bold">OOPS! <br />404</h4>
 <p className=" text-2xl font-bold">Not Found</p>
 <p className=" text-lg font-bold w-full md:w-1/3 mx-auto bg-zinc-200 rounded-2xl p-4 my-2 mb-4"><span className="">products, categories,custom and blog routes are not design yet. Please visit home, cart, signup, login routes. signup and login routes can access by clicking the avatar.</span></p>
 <Link to={'/'}><button  className="rounded py-1 px-4 bg-black text-white">Go To Home</button></Link>
 
    </div>
  );
}