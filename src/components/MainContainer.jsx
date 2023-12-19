import ButtonList from "./ButtonList";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
export default function MainContainer() {
  return (
    <div className="ml-auto px-2 w-[calc(100%-5rem)]">
      <SideBar />
      <ButtonList />
      <VideoContainer />
    </div>
  );
}
