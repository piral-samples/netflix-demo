import * as React from "react";
import { Link } from "react-router-dom";
import { User } from "../models/types";
import createPersistedState from "use-persisted-state";
import avatars from "../data/avatars";

const useUserState = createPersistedState("user");

interface ProfileProps {
  user: User;
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  const avatar = user.avatarId ? avatars[user.avatarId] : avatars[0];
  const profilepic = user.imageUrl ? (
    <img title={user.avatarId} src={user.imageUrl} />
  ) : (
    avatar
  );

  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">{user.name}</div>
        <div className="image">{profilepic}</div>
      </div>
    </div>
  );
};

export const ProfileExtension: React.FC = () => {
  const [user, _] = useUserState<User>(null);

  if (!user) {
    return <Link to="/profile">Log In</Link>;
  } else {
    return (
      <Link to="/profile">
        <Profile user={user} />
      </Link>
    );
  }
};
