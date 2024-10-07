import { useContext } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const SocialMediaLogIn = () => {
  const { logInWithGoogle, logInWithFacebook, logInWithGithub } =
    useContext(AuthContext);

  return (
    <div>
      {/* other login option  */}
      <div className="flex flex-col items-center mt-6 -mx-2 space-y-2">
        {/* sign in with google */}
        <button
          onClick={logInWithGoogle}
          type="button"
          className="flex items-center gap-4 justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-400 focus:bg-green-400 focus:outline-none"
        >
          <span className="text-2xl">
            <FaGoogle />
          </span>
          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>

        {/* sign in with facebook */}
        <button
          onClick={logInWithFacebook}
          type="button"
          className="flex items-center gap-4 justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <span className="text-2xl">
            <FaFacebook />
          </span>
          <span className="hidden mx-2 sm:inline">Sign in with Facebook</span>
        </button>

        {/* sign in with github */}
        <button
          onClick={logInWithGithub}
          type="button"
          className="flex items-center gap-4 justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-black rounded-lg hover:bg-black/50 focus:bg-black/50 focus:outline-none"
        >
          <span className="text-2xl">
            <FaGithub />
          </span>
          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogIn;
