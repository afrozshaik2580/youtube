import { AppContextProvider } from "../contexts/AppContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import WatchPage from "./WatchPage";
import MainContainer from "./MainContainer";
import ResultsPage from "./ResultsPage";

export default function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />}></Route>
              <Route path="/watch/:id" element={<WatchPage />}></Route>
              <Route path="/results" element={<ResultsPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}
