import React from "react";

import Header from "./components/header";
import { Outlet } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
