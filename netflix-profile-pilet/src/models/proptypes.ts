import { User } from "./types";

export interface ProfileExtensionProps {
  name: string;
  imgUrl: string;
}

export interface AccountProps {
  user: User;
  onClickName(): void;
}
