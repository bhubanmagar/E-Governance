import { useState } from "react";
import Navbar from "../../components/NavBar";
import axios from "axios";

//function starts....
const MainPage = () => {
  const [tittle, setTittle] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  const [adress, setAdress] = useState();
  const [number, setNumber] = useState();

  const complainHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/complaints", {
        tittle: tittle,
        description: description,
        name: name,
        adress: adress,
        number: number,
      });
      alert("Complaint Registered Sucessfully!");
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container max-h-full max-w-full flex justify-center items-center text-white  bg-slate-800">
        <div className="p-6">
          <header>
            <h1 className="animate-bounce font-bold text-3xl text-green-400 p-4 m-4 ">
              गुनासो पेटिका !!!
            </h1>
          </header>
          <p className="text-red-600 text-xs">कृपया, सबै ठाउँ भर्नुहोस् :</p>
          <form
            onSubmit={complainHandler}
            method="post"
            className="rounded-xl  p-5 "
          >
            <label htmlFor="tittle">शीर्षक *</label>
            <br />
            <br />
            <input
              className="rounded-md p-1 text-black"
              type="text"
              name="tittle"
              onChange={(e) => setTittle(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="description">विवरण *</label>
            <br />
            <br />
            <textarea
              className="rounded-md p-1 text-black"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              cols="50"
              rows="10"
              required
            />
            <br />
            <br />
            <p className="text-sky-300">पेशकर्ताको विवरण:</p>
            <label htmlFor="name">नाम *</label>
            <br />
            <input
              className="rounded-md p-1 text-black"
              type="text"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <br />
            <label htmlFor="adress">ठेगाना *</label>
            <br />
            <input
              className="rounded-md p-1 text-black"
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              name="adress"
            />
            <br />
            <label htmlFor="poneNumber">फोन नम्बर *</label>
            <br />
            <input
              className="rounded-md p-1 text-black"
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              name="number"
            />
            <br />
            <button
              type="submit"
              className="rounded-md bg-lime-500 p-1 text-black m-3"
            >
              पेश गर्नुहोस्
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default MainPage;
