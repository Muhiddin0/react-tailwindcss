import "./assets/tailwid.css";

import { useEffect, useState } from "react";

function Loader() {
  return (
    <>
      <h1>Loading....</h1>
    </>
  );
}

function Wather({ data }) {
  console.log(data["weather"]);

  return (
    <div
      className="
      flex items-center justify-center flex-col
      h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100
    "
    >
      <ul>
        <li className="flex gap-3 items-center text-3xl font-semibold">
          <img
            // className="w-[20px]"
            src={
              "https://imkon.uz/images/weather/" +
              data["weather"]["current"]["weather"][0]["icon"].replace(
                "d",
                ""
              ) +
              ".svg"
            }
            alt="icon"
          />
          {(data.weather.current.temp - 273.15).toFixed(2)}
          <span>
            <sup>0</sup>C
          </span>
        </li>
      </ul>

      <h1 className="text-sm mt-3 text-slate-700">Toshkentda obi-havo</h1>
    </div>
  );
}

function MyApp() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://imkon.uz/api/v1/common/weather/?date=05.03.2024&city=1", {
      headers: {
        authority: "imkon.uz",
        accept: "application/json, text/plain, */*",
        "accept-language":
          "uz-UZ,uz;q=0.9,en-GB;q=0.8,en-US;q=0.7,en;q=0.6,pt;q=0.5",
        cookie:
          "_pk_id.1.5d2b=168079ccb1e83763.1707816472.; auth.strategy=local; auth.redirect=%2F",
        referer: "https://imkon.uz/login",
        "sec-ch-ua":
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {data ? <Wather data={data} /> : <Loader />}
    </div>
  );
}

export default MyApp;
