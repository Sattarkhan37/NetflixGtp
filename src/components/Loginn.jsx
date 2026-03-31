import { useState } from "react";
import Header from "./Header";

function Loginn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8cc08720-ac1c-4364-bcbd-9495bf0308cd/web/IN-en-20260323-TRIFECTA-perspective_0b8c8e4e-71ee-48bd-8e16-da74f083a838_large.jpg"
          alt="background_img"
        />
      </div>

      <form className="w-80 h-80% rounded-lg absolute p-14 z bg-black/70 my-5 mx-auto right-0 left-0 text-white  ">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-1 my-1 w-full bg-gray-800"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email Address"
          className="p-1 my-1 w-full  bg-gray-800 "
        />
        <input
          type="text"
          placeholder="Password"
          className="p-1 my-1 w-full bg-gray-800"
        />
        {!isSignIn && (
          <input
            type="text"
            placeholder="Conform Password"
            className="p-1 my-1 w-full bg-gray-800"
          />
        )}

        <button className="p-4 my-4 w-full bg-red-700  ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="py-0 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already registered Sign In Now"}
        </h3>
      </form>
    </div>
  );
}

export default Loginn;
