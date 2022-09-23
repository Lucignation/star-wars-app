import { useState } from 'react';
import Sidebar from '../sidebar/sidebar.component';
import styles from './backdrop.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

const Backdrop = () => {
  const [hasShown, setHasShown] = useState<boolean>(false);

  const handleNavbarToggle = () => {
    setHasShown(!hasShown);
  };

  console.log(hasShown);
  return (
    <div>
      <div onClick={handleNavbarToggle} className={`${styles.toggleAction}`}>
        {hasShown ? (
          <div className={styles.close_btn}>
            <VscChromeClose />
          </div>
        ) : (
          <GiHamburgerMenu />
        )}
      </div>

      {hasShown && (
        <div className={styles.mobileView}>
          <Sidebar hideToggle={setHasShown} currentState={hasShown} />
        </div>
      )}

      <div className={styles.DesktopView}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Backdrop;
