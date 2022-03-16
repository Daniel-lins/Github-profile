import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

import { ViewProfile } from "./components/ViewProfile";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewProfile/:login" element={<ViewProfile />} />
      </Routes>
    </BrowserRouter>
  );
};
