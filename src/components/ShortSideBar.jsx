import {
  HOME_SVG,
  SHORTS_SVG,
  SUBSCRIPTIONS_SVG,
  YOU_SVG,
} from "../contexts/SVGs";
import ShortSideBarButton from "./ShortSideBarButton";

export default function ShortSideBar({ display }) {
  return (
    <div
      className={`w-20 p-2 fixed left-0 h-full ${
        display === "hidden" ? display : "flex"
      } flex-col bg-white`}
    >
      <ShortSideBarButton SVG={HOME_SVG} name="Home" to="/" />
      <ShortSideBarButton SVG={SHORTS_SVG} name="Shorts" to="shorts" />
      <ShortSideBarButton
        SVG={SUBSCRIPTIONS_SVG}
        name="Subscription"
        to="subscriptions"
      />
      <ShortSideBarButton SVG={YOU_SVG} name="You" to="you" />
    </div>
  );
}
