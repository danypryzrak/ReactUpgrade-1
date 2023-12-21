import css from './Friends.module.css';

export const FriendsList = ({ children }) => {
  return <ul className={css.friendsList}>{children}</ul>;
};
