import * as React from "react";
import createPersistedState from "use-persisted-state";
import { FavoriteToggleProps } from "../models/proptypes";
import { FavoritesData, User } from "../models/types";

const useFavoritesState = createPersistedState("favorites");
const useUserState = createPersistedState("user");

export const FavoriteToggle: React.FC<FavoriteToggleProps> = (props) => {
  const [favorites, setFavorites] = useFavoritesState<FavoritesData>({});
  const [user, _] = useUserState<User>(null);

  const toggle = React.useCallback(() => {
    if (!favorites || !user) {
      return;
    }

    const favs = { ...favorites };

    if (user.userId in favs && props.movieId in favs[user.userId]) {
      delete favs[user.userId][props.movieId];
    } else {
      favs[user.userId] = favs?.[user.userId] ?? {};
      favs[user.userId][props.movieId] = props.media_type;
    }

    setFavorites(favs);
  }, [favorites, user]);

  const icons = (
    <div>
      <i className="fa fa-fw fa-heart" />
      <i className="fa fa-fw fa-check" />
    </div>
  );

  if (!user) {
    return <></>;
  } else if (!props.full) {
    return (
      <div
        onClick={toggle}
        data-toggled={`${!!favorites?.[user.userId]?.[props.movieId]}`}
        className="ListToggle"
      >
        {icons}
      </div>
    );
  } else {
    return (
      <div
        onClick={toggle}
        className="Button FavoriteToggleFull"
        data-primary={false}
        data-toggled={`${!!favorites?.[user.userId]?.[props.movieId]}`}
      >
        {icons}
        Add to favorites
      </div>
    );
  }
};
