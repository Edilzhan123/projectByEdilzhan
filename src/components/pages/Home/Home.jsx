import React from "react";
import OutNow from "./OutNow";
import WatchAll from "./WatchAll";
import AboutGSl from "./AboutGSl";

const Home = () => {
  return (
    <div>
      <div className="main">
        <video
          preload="auto"
          muted
          loop
          tabIndex="-1"
          autoPlay
          src="https://video.wixstatic.com/video/f2ac30_0a607a47865e44b9bddd4ce458330749/1080p/mp4/file.mp4"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: 1,
          }}
        ></video>
        <OutNow />
        <WatchAll />
        <AboutGSl />
      </div>
    </div>
  );
};

export default Home;
