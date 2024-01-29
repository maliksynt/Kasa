import "./collapse.scss";
import { useRef, useState } from "react";
import Arrow from "../../assets/arrow.svg";

export default function Collapse({ title, description }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <main className="container">
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{title}</p>
          <img src={Arrow} alt="arrow" className={`${setRotate}`} />
        </button>
        <div
          className="accordion__content"
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
    </main>
  );
}
