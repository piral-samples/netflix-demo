import * as React from "react";
import { useParams } from "react-router-dom";
import { Player } from "./Player";

const WatchPage: React.FC = () => {
  const params: any = useParams();

  return (
    <div className="WatchPage">
      <Player {...params} />
    </div>
  );
};

export default WatchPage;
