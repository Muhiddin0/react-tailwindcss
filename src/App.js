import "./assets/tailwid.css";
import Header from "./components/common/logo";

import { HiOutlineMailOpen } from "react-icons/hi";

function MyApp() {
  return (
    <>
      <Header />
      <section>
        <div className="container flex-col lg:flex-row min-h-[100vh] flex items-center justify-evenly lg:justify-center">
          <div className="w-[100%] lg:w-[50%] text-center lg:text-start">
            <h1 className="font-bold text-3xl">Assalomu Alekum 👋</h1>
            <p>
              Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.
            </p>
          </div>

          <div className="w-[100%] lg:w-[50%] flex items-center justify-center">
            <div className="w-[400px] shadow-lg rounded-md overflow-hidden bg-white">
              <div className="flex items-center text-white justify-center bg-purple-600 p-3">
                <HiOutlineMailOpen size={35} />
              </div>

              <div className="px-3 py-5">
                <p className="text-slate-500 text-center">
                  and get a Homepage thatand get a Homepage that
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyApp;
