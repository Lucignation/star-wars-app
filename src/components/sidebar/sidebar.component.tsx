import { FC } from 'react';
import { ISidebarItems } from '../../common/interfaces/interface';
import styles from './sidebar.module.scss';

import Logo from '../../assets/images/logo2.svg';
import Overview from '../../assets/images/grid_small.svg';
import { NavLink } from 'react-router-dom';

type props = {};
const Sidebar: FC<props> = () => {
  return (
    <aside className={styles.sidebar_container}>
      <div className={styles.logo_avatar}>
        <img src={Logo} alt='company logo' />
      </div>
      <div className={styles.sidebar_overview}>
        <img src={Overview} alt='dashboard overview' />
        <span className={styles.sidebar_overview_text}>Overview</span>
      </div>
      <div className={styles.sidebar_items}>
        <div className={styles.sidebar_item}>
          <span
            className={`${styles.sidebar_item_icon} ${styles.starship}`}
          ></span>
          <span>
            <NavLink to='/starships'>Starships</NavLink>
          </span>
        </div>

        <div className={styles.sidebar_item}>
          <span
            className={`${styles.sidebar_item_icon} ${styles.people}`}
          ></span>
          <NavLink to='/people'>People</NavLink>
        </div>

        <div className={styles.sidebar_item}>
          <span
            className={`${styles.sidebar_item_icon} ${styles.species}`}
          ></span>
          <NavLink to='/species'>Species</NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
