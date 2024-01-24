import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function About() {
  const [toggleAbout, setToggleAbout] = useState(false)
  return(
    <div className="about-page">
          <div className="left-transparent">
            <img src="/assets/chef-4.png" alt="" />
            <div className={toggleAbout?"left-cover":"left-cover left-cover-hide left-cover-transition"}></div>           
          </div>
          <div className="middle-section">
            <section className="history-vision">
              <div className="btn-container">
                <button onClick={() => {
                  if (toggleAbout) {
                    setToggleAbout(!toggleAbout)
                  }
                }} className={toggleAbout ? "left-btn" : "left-btn about-btn-active"}><span>OUR </span>HISTORY</button>
                
                <button onClick={() => {
                  if (!toggleAbout) {
                    setToggleAbout(!toggleAbout)
                  }
                }} className={toggleAbout ? "right-btn about-btn-active" : "right-btn"}><span>OUR </span>VISION</button>
              </div>
              <div className={toggleAbout ? "hide" : "about-text-1"}>
                <p className="p-text">Since its inception in 20XX, born from a shared love for all things culinary, our platform has evolved into a haven for food enthusiasts worldwide. <span className="hide-span-1">For over a decade, we've curated a vast collection of tantalizing recipes, kitchen hacks, and culinary inspiration.</span> <span className="hide-span-2">Join our community and experience the joy of cooking as we continue to shape the future of delicious discoveries.</span></p>
                <div className="divider">
                  <div className="left-div"></div>
                  <i className="fa-regular fa-hourglass-half"></i>
                  <div className="right-div"></div>
                </div>
                <p>In 20XX, we introduced interactive cooking videos, revolutionizing the way home cooks learn new recipes. <span className="hide-span-2">By 20XX, our website had grown into a bustling online community.</span> <span className="hide-span-1">As we venture into the future, we remain committed to empowering passionate cooks with innovative tools and unforgettable culinary experiences.</span> Join us on this flavorful journey!</p>
              </div>
              <div className={toggleAbout ? "about-text-1" : "hide"}>
                <p className="p-text p-text-1">At our recipe website company, our vision is to be the ultimate culinary companion for every aspiring home cook. <span className="hide-span-1">We envision a future where cooking is a joyful and creative experience for all, regardless of skill level.</span> <span className="hide-span-2">By continuously innovating our platform, we aim to provide an immersive and personalized cooking journey.</span></p>
                <div className="divider">
                  <div className="left-div"></div>
                  <i className="fa-solid fa-bullseye"></i>
                  <div className="right-div"></div>
                </div>
                <p>In this vision, we see a world where our website becomes the go-to destination for culinary inspiration. <span className="hide-span-1">Where users can discover new flavors, techniques, and cuisines from around the globe.</span> We imagine a seamless integration of leveraging artificial intelligence. <span className="hide-span-2">Also machine learning to offer personalized recommendations and interactive cooking experiences.</span></p>
              </div>
            </section>
          </div>
          <div className="right-transparent">
            <img src="/assets/chef-3.png" alt="" />
            <div className={!toggleAbout?"right-cover right-cover-transition":"right-cover right-cover-hide"}></div>
          </div>
        </div>
  )
}