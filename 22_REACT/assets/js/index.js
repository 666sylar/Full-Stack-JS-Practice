/*
Створіть реакт компонент, який виводить інформацію про користувача:
фото, ім'я, прізвище, ... .
Дані про користувача компонент повинен отримувати у пропсах.

* Додати стилі до картки. Приклад макету прикладено.

* Додати до інформації про користувача gender. На основі гендера в інлайн-стилях визначати колір імені користувача (або тіні картки тощо).
*/

const user = {
  name: "Emma",
  surname: "Watson",
  username: "EmWatson",
  tweets: 1337,
  following: 561,
  followers: 718,
  gender: "female",
  profilePicture: "static/image/Emma-Watson.jpg",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <>
      <UserCard user={user} />
    </>
  );
}

const UserCard = ({ user }) => {
  const cardShadowColor = user.gender === "male" ? "blue" : "pink";

  return (
    <div className="user-card" style={{ boxShadow: `0 0 1.5rem ${cardShadowColor}` }}>
      <UserCardHeader user={user} />
      <UserStats tweets={user.tweets} following={user.following} followers={user.followers} />
      <FollowButton />
    </div>
  );
};

const UserCardHeader = ({ user }) => {
  const { name, surname, username, profilePicture } = user;

  return (
    <div className="user-card-header">
      <img src={profilePicture} alt={`${name} ${surname}`} className="profile-picture" />
      <div className="user-info">
        <h2>
          {name} {surname}
        </h2>
        <p>@{username}</p>
      </div>
    </div>
  );
};

const UserStats = ({ tweets, following, followers }) => {
  return (
    <div className="user-stats">
      <StatItem label="Tweets" value={tweets} />
      <StatItem label="Following" value={following} />
      <StatItem label="Followers" value={followers} />
    </div>
  );
};

const StatItem = ({ label, value }) => {
  return (
    <div>
      <p>{label}</p>
      <h3>{value}</h3>
    </div>
  );
};

const FollowButton = () => {
  return <button className="follow-btn">+</button>;
};
