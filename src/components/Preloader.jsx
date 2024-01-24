import "../Preloader.css"
import { useRef } from "react";

function Preloader() {
  // const preTitle = document.querySelector("h1")
  // let counter = 0
  // setInterval(() => {
  //   const drawingDots = setInterval(() => {
  //     if (counter < 3) {
  //       preTitle.innerText += "."
  //     }
  //     counter++
  //     if (counter >= 3) {
  //       preTitle.innerText = "Loading"
  //       counter = 0
  //       clearInterval(drawingDots)
  //     }
  //   }, 1100)
  // }, 4000)

  return (
    <div className="screen">
      {/* <img src="../src/assets/rocket-gif.gif" alt="Loading..." /> */}
      <div className="squares">
        <div className="outer-square">
          <div className="inner-square"></div>
        </div>
        <div className="outer-square">
          <div className="inner-square"></div>
        </div>
        <div className="outer-square">
          <div className="inner-square"></div>
        </div>
      </div>
      
      <h1 className="loading">Loading...</h1>
    </div>
  )
}

export default Preloader;