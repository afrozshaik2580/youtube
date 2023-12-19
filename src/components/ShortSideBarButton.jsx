import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContextProvider";

export default function ShortSideBarButton({ SVG, name, to }) {
  const { dispatch, activeShortSideBarButton } = useAppContext();
  const navigate=useNavigate(); 
  return (
    <div
      id={name}
      onClick={(e) => {
        navigate(to);
        dispatch({ type: "setActiveShortSideBarButton", payload: e.target.id });
      }}
      className="hover:bg-gray-300 rounded-xl"
    >
      <div
        className={`${
          activeShortSideBarButton === name ? "active" : ""
        } flex flex-col items-center m-4 pointer-events-none`}
      >
        {SVG}
        <p
          className={`text-xs ${
            name === activeShortSideBarButton ? "active" : ""
          }`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
