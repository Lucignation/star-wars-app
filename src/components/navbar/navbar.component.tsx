import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import Account from '../../assets/images/account.svg';
import Threedotted from '../../assets/images/three_dotted.svg';
import Notification from '../../assets/images/notification.svg';

import { IoIosArrowBack } from 'react-icons/io';

import styles from './navbar.module.scss';

type Props = {
  backBtn?: boolean;
};

const Navbar: FC<Props> = ({ backBtn }) => {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };
  return (
    <nav className={styles.navbar_container}>
      {backBtn && (
        <p className={styles.navbar_go_back}>
          <IoIosArrowBack />
          <span className={styles.navbar_go_back_link} onClick={handleBackBtn}>
            Back
          </span>
        </p>
      )}
      <div className={styles.navbar_right_items}>
        <div className={styles.navbar_notification_avatar}>
          <div className={styles.navbar_notification_icon}>
            <img src={Notification} alt='user notification' />
          </div>
          <div className={styles.navbar_avatar_icon}>
            <img src={Account} alt='account profile' />
          </div>
          <p className={styles.navbar_user_name}>John Doe</p>
        </div>

        <div className={styles.navbar_action_icon}>
          <img src={Threedotted} alt='more actions' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
