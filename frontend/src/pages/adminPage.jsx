import axios from "axios";
import Navbar from "../components/NavBar";
import { useEffect, useState } from "react";
const AdminPage = () => {
  const [complain, setComplain] = useState([]);
  const getAllComplain = async () => {
    const response = await axios.get("/get-complain");
    const getResponse = response.data.data;
    setComplain(getResponse);
  };
  useEffect(() => {
    getAllComplain();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-5 bg-slate-700">
        {complain.map((e) => {
          return (
            <>
              <div className="mainContainer flex h-[300px] justify-center ">
                <div className=" w-1/2 h-screen">
                  <div className="p-2 text-xl font-bold text-left text-yellow-100">
                    {e.tittle}
                    <hr />
                    <p className="text-gray-500 text-xs p-2 pb-1">
                      <span>
                        Posted By : {e.name}/{e.adress}/{e.phoneNumber}
                      </span>
                    </p>
                    <p className="text-xs text-black p-2 pt-0">{e.createdAt}</p>
                  </div>
                  <div className="p-2 text-center text-sm text-white">
                    {e.description}
                  </div>
                  <hr />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AdminPage;
