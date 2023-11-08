import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { HiLocationMarker } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import { useStateContext } from '../../Context/ContextApi';

const UserProfile = () => {
  const { toggleProfile, profile, user } = useStateContext();

  return (
    <section className={`user-profile ${profile && 'show'}`}>
      <div className="user-profile-header">
        <h1>User Profile</h1>
        <AiOutlineCloseCircle className="close-icon" onClick={toggleProfile} />
      </div>
      <div className="user-details">
        <CgProfile className="user-photo" />
        <div>
          <span>{user?.name}</span>
          <span>{user?.email}</span>
          <span> {user?.phone}</span>
        </div>
      </div>
      <div className="user-details">
        <HiLocationMarker className="user-photo" />
        <div>
          <span>{user?.address?.street}</span>
          <span> {user?.address?.suite}</span>
          <span>{user?.address?.city}</span>
        </div>
      </div>
      <div className="user-details">
        <MdWork className="user-photo" />
        <div>
          <span>{user?.website}</span>
          <span>{user?.company?.name}</span>
          <span> {user?.company?.catchPhrase}</span>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
