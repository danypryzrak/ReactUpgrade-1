import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';
import { FriendsListItem } from './Friends/FriendsListItem';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        paddingTop: 100,
      }}
    >
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendsList>
        <FriendsListItem friends={friends} />
      </FriendsList>
      <Transactions transactions={transactions} />
    </div>
  );
};
