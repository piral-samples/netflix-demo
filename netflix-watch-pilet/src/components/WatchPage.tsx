import * as React from "react";
import { Player } from "./Player";
import { useParams } from "react-router-dom";

const WatchPage: React.FC<any> = () => {
  const params: any = useParams();

  return (
    <div className="WatchPage">
      <Player {...params} />
    </div>
  );
};

export default WatchPage;
