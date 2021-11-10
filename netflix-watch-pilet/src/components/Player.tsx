import * as React from "react";
import { PlayerProps } from "../models/proptypes";

// This is obviously a dummy player.
// More info on https://bit.ly/3rETEro
export const Player: React.FC<PlayerProps> = (props) => (
  <div>
    <iframe
      className="Player"
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
