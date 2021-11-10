import * as React from "react";

export const ProfilePicture: React.FC<{ imageUrl: string }> = ({
  imageUrl,
}) => (
  <div
    className="profile-icon"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
    }}
  ></div>
);
