import { Outlet } from "react-router-dom";
import Head from "./Head";
export default function Body() {
  return (
    <div>
      <Head />
      <Outlet />
    </div>
  );
}
