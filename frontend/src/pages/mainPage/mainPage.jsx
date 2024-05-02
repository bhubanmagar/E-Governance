import Navbar from "../../components/NavBar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="main-container max-h-full max-w-full flex justify-center items-center text-white  bg-slate-800">
        <div className="p-6">
          <header>
            <h1 className="font-bold text-3xl text-green-400 p-4 m-4 ">
              गुनासो पेटिका !
            </h1>
          </header>
          <form action="#" type="POST" className="rounded-xl  p-5 ">
            <label htmlFor="tittle">शीर्षक *</label>
            <br />
            <br />
            <input
              className="rounded-md p-2"
              type="text"
              name="tittle"
              required
            />
            <br />
            <br />
            <label htmlFor="content">विवरण *</label>
            <br />
            <br />
            <textarea
              className="rounded-md p-2"
              name="content"
              cols="39"
              rows="10"
              required
            />
            <br />
            <br />
            <p className="text-sky-300">पेशकर्ताको विवरण:</p>
            <label htmlFor="name">नाम *</label>
            <br />
            <input className="rounded-md p-2" type="text" name="name" />
            <br />
            <label htmlFor="adress">ठेगाना *</label>
            <br />
            <input className="rounded-md p-2" type="text" name="adress" />
            <br />
            <label htmlFor="poneNumber">फोन नम्बर *</label>
            <br />
            <input className="rounded-md p-2" type="text" name="number" />
            <br />
            <button
              type="submit"
              className="rounded-md bg-lime-500 p-2 text-black m-3"
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
