import * as React from "react";

export const NoFavs: React.FC = () => (
  <div className="Favorites">
    <p style={{ color: "gray", width: "fit-content" }}>
      You have no favorites yet
    </p>
  </div>
);

export const NoUser: React.FC = () => (
  <div className="Favorites">
    <p style={{ color: "gray", width: "fit-content" }}>You are not logged in</p>
  </div>
);
