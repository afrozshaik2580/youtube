import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContextProvider";

export default function LongSideBarButton({ SVG, name, onClickAction, to }) {
  const { activeLongSideBarButton, dispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <div
      id={name}
      onClick={(e) => {
        try {
          onClickAction();
        } catch (err) {
          /* empty */
        }
        navigate(to);
        dispatch({ type: "setActiveShortSideBarButton", payload: e.target.id });
      }}
      className="hover:bg-gray-300 rounded-xl cursor-pointer"
    >
      <div
        className={`${
          activeLongSideBarButton === name ? "active" : ""
        } flex items-center space-x-7 p-2 pointer-events-none`}
      >
        {SVG}
        <p className={`${name === activeLongSideBarButton ? "active" : ""}`}>
          {name}
        </p>
      </div>
    </div>
  );
}
