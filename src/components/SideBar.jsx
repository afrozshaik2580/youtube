import { useAppContext } from "../contexts/AppContextProvider";

import ShortSideBar from "./ShortSideBar";
import LongSideBar from "./LongSideBar";

export default function SideBar({ display }) {
  const { isMenuOpen } = useAppContext();

  return (
    <>{!isMenuOpen ? <ShortSideBar display={display} /> : <LongSideBar />}</>
  );
}
