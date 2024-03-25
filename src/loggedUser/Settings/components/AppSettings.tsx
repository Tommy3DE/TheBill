import { useEffect, useState } from "react";
import SlimNav from "../../../layout/SlimNav";

export interface SettingsData {
  email: string;
  first_name: string;
  last_name: string;
  NIP: string;
  package: string;
}

const AppSettings = () => {
  const [settingData, setSettingData] = useState<SettingsData>();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    fetch("https://api.onebill.com.pl/api/user_data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setSettingData(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <section>
      <SlimNav />
      <div className="mx-auto max-w-[1980px] ">
        <div className="w-full flex justify-center items-center">
          <div className=" flex flex-col justify-center border-2 rounded lg:w-1/2 w-[98%] lg:mt-[10%] mt-[35%] text-2xl">
            <div className="flex flex-row justify-between   p-2">
              <p>Imię</p>
              <p>{settingData ? settingData.first_name : null}</p>
            </div>
            <div className="flex flex-row justify-between bg-slate-200 p-2">
              <p>Nazwisko</p>
              <p>{settingData ? settingData.last_name : null}</p>
            </div>
            <div className="flex flex-row justify-between  p-2">
              <p>NIP</p>
              <p>
                {" "}
                <p>{settingData ? settingData.NIP : null}</p>
              </p>
            </div>
            <div className="flex flex-row justify-between bg-slate-200 p-2">
              <p>Pakiet</p>
              <p>{settingData ? settingData.package : null}</p>
              
            </div>
            <div className="flex flex-row justify-between  p-2">
              <p>Mail</p>
              <p>{settingData ? settingData.email : null}</p>

            </div>
            <div className="flex flex-row justify-between bg-slate-200  p-2">
              <p>Księgowy</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSettings;
