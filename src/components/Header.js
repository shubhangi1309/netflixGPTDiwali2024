import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        //to-do add error component
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div>
          <img
            className="w-12 h-12 m-2"
            alt="userIcon"
            src={user?.photoURL ?? USER_AVATAR}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;