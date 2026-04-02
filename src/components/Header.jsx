import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-50 px-8 py-2 bg-black/80 backdrop-blur-sm w-screen flex justify-between items-center">
      <img
        className="w-30 "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-03-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix_logo"
      ></img>
      {user && (
        <div className="h-10 w-15 flex p-3 ">
          <img src={user?.photoURL} alt="user_icon" />
          <button
            onClick={handleSignOut}
            className="text-xs font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
