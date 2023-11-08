import userIcon from '../../assets/images/arrow-down.png';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import UserProfile from '../Profile/UserProfile';
import { useStateContext } from '../../Context/ContextApi';

const Header = () => {
  const { mode, toggleMode, toggleProfile, user } = useStateContext();
  return (
    <header className="header section">
      <div>
        <h1
          className={` ${
            mode === 'light-mode' ? 'light-heading' : 'dark-heading'
          }`}
        >
          User Analytics
        </h1>
        <span>{user?.username}</span>
      </div>
      <div>
        <button onClick={toggleMode} className="mode-btn">
          {mode === 'dark-mode' ? (
            <BsFillSunFill className="mode-icon" />
          ) : (
            <BsFillMoonFill className="mode-icon" />
          )}
        </button>
      </div>
      <div>
        <button className="user-button" onClick={toggleProfile}>
          User <img src={userIcon} alt="user-icon" />
        </button>
      </div>
      <UserProfile />
    </header>
  );
};

export default Header;
