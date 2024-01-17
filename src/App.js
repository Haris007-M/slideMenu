import "./App.css";
import ButtonCarousel from "./component/example";

import electronics from "./assets/electronics.svg";
import sports from "./assets/sports.svg";
import outdoor from "./assets/outdoor.svg";
import toys from "./assets/toys.svg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        margin: "auto",
      }}>
      <ButtonCarousel />
      {/* <nav className="p-5 bg-slate-500 rounded-sm">
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={electronics} alt="" width={15} className="me-2" />
          Electronics
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={toys} alt="" width={15} className="me-2" />
          Toys and Games
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={sports} alt="" width={15} className="me-2" />
          Sports
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={outdoor} alt="" width={15} className="me-2" />
          Outdoor living
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={electronics} alt="" width={15} className="me-2" />
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={toys} alt="" width={15} className="me-2" />
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={sports} alt="" width={15} className="me-2" />
        </button>
        <button
          type="button"
          class="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]">
          <img src={outdoor} alt="" width={15} className="me-2" />
        </button>
      </nav> */}
    </div>
  );
}

export default App;
