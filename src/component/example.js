import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { useSpring, animated } from "react-spring";
import electronics from "../assets/electronics.svg";
import sports from "../assets/sports.svg";
import outdoor from "../assets/outdoor.svg";
import toys from "../assets/toys.svg";
import arrow1 from "../assets/arrow-1.svg";

const initialButtonsData = [
  {
    label: "Electronics",
    imageSrc: electronics,
  },
  {
    label: "Toys and Games",
    imageSrc: toys,
  },
  {
    label: "Sports",
    imageSrc: sports,
  },
  {
    label: "Outdoor living",
    imageSrc: outdoor,
  },
];

const ButtonCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [buttonsData, setButtonsData] = useState(initialButtonsData);
  const [buttonAddedFlags, setButtonAddedFlags] = useState(
    Array(initialButtonsData.length).fill(false)
  );

  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to the end of the container when a new button is added
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [buttonsData]);

  const handleImageClick = () => {
    const clickedImage = buttonsData[activeIndex].imageSrc;

    // Check if the button for the clicked image has been added
    if (!buttonAddedFlags[activeIndex]) {
      // Add a new button with the same image to the initialButtonsData array
      setButtonsData((prevButtonsData) => [
        ...prevButtonsData,
        { label: buttonsData[activeIndex].label, imageSrc: clickedImage },
      ]);

      setButtonAddedFlags((prevFlags) =>
        prevFlags.map((flag, index) => (index === activeIndex ? true : flag))
      );
    }
    setActiveIndex((prevIndex) => (prevIndex + 1) % initialButtonsData.length);
  };
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
        margin: "auto",
        maxWidth: "960px",
        overflowX: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",
        // background: "black",
        padding: "8px",
        marginTop: "50px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      ref={containerRef}>
      <nav className="p-5 rounded-sm flex " style={{}}>
      {buttonsData.map((button, index) => (
          <animated.button
            key={index}
            type="button"
            style={{
              width: "180px",
              ...fadeIn,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
            className="text-black h-10 bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF]"
          >
            <img src={button.imageSrc} alt="" width={15} className="me-2" />
            {button.label}
          </animated.button>
        ))}
        {buttonAddedFlags[activeIndex] ? null : (
          <img src={arrow1} alt="" width={25} className="me-2" />
        )}
        {buttonAddedFlags[activeIndex] ? null : (
          <div
            onClick={handleImageClick}
            className="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF] cursor-pointer relative top-[-0.75rem]"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
            <img
              src={buttonsData[activeIndex].imageSrc}
              alt=""
              width={15}
              className="me-1"
            />
          </div>
        )}
        {buttonAddedFlags[activeIndex + 1] ? null : (
          <img src={arrow1} alt="" width={15} className="me-2 relative top-[-0.75rem]" />
        )}
        {buttonAddedFlags[activeIndex] ? null : (
          <div
            // onClick={handleImageClick}
            className="text-black bg-[#FFFFFF] hover:bg-[#FFFFFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center inline-flex items-center me-2 dark:bg-[#FFFFFF] dark:hover:bg-[#FFFFFF] relative top-[-1.75rem]"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
            <img
              src={buttonsData[activeIndex + 1].imageSrc}
              alt=""
              width={10}
              className="me-1"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default ButtonCarousel;
