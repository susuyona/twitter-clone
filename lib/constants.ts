export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);
export const PASSWORD_REGEX_ERROR =
  "Password must contain at least one UPPER- and lowercase letter, a number and special characters like #?!@$%^&*-";

export interface Tweet {
  id: number;
  text: string;
  likes: object[];
  createdAt: Date;
  authorId: number;
  author: { username: string };
}

export const TWEET_MAX_LENGTH = 200;