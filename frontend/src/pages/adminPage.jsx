import axios from "axios";
import { useEffect, useState } from "react";
import ANavbar from "../components/aNavbar";
const AdminPage = () => {
  const [complain, setComplain] = useState([]);
  const check = localStorage.getItem("authorized");
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
      <ANavbar />
      {check ? (
        <>
          {" "}
          <div className="p-5 bg-slate-500">
            {complain.map((e) => {
              return (
                <>
                  <div className="mainContainer flex h-[300px] justify-center  ">
                    <div className=" w-1/2 h-screen">
                      <div className="p-2 text-xl font-bold text-left text-yellow-100">
                        {e.tittle}
                        <hr />
                        <p className="text-white text-xs p-2 pb-1">
                          <span>
                            Posted By : {e.name}/{e.adress}/{e.phoneNumber}
                          </span>
                        </p>
                        <p className="text-xs text-black p-2 pt-0">
                          {e.createdAt}
                        </p>
                      </div>
                      <div className="p-2 text-center text-sm text-white text-wrap h-auto ">
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
      ) : (
        <>
          <h1>Page Not found! 404</h1>
        </>
      )}
    </>
  );
};

export default AdminPage;
