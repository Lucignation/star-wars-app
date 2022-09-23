import { FC } from 'react';
import styles from './sidebar.module.scss';

import Logo from '../../assets/images/logo2.svg';
import Overview from '../../assets/images/grid_small.svg';
import { NavLink, useLocation, useMatch } from 'react-router-dom';

type Props = {};
const Sidebar: FC<Props> = () => {
  const location = useLocation();

  let filmsMatch = useMatch('/film/:id'); //www.mywebsite.com/films/:id
  let speciesMatch = useMatch('/species/:id'); //www.mywebsite.com/species/:id
  let starshipsMatch = useMatch('/starships/:id'); //www.mywebsite.com/starships/:id
  let peopleMatch = useMatch('/people/:id'); //www.mywebsite.com/people/:id

  const starshipBg = {
    width: 17 + `px`,
    height: 16 + `px`,
    background: '#A9C1FF',
    borderRadius: 5 + `px`,
  };

  const speciesBg = {
    width: 17 + `px`,
    height: 16 + `px`,
    background: '#FDFFA9',
    borderRadius: 5 + `px`,
  };

  const peopleBg = {
    width: 17 + `px`,
    height: 16 + `px`,
    background: '#FFA9EC',
    borderRadius: 5 + `px`,
  };

  return (
    <aside className={styles.sidebar_container}>
      <div className={styles.logo_avatar}>
        <img src={Logo} alt='company logo' />
      </div>
      <div
        className={
          filmsMatch || location.pathname === '/dashboard'
            ? `${styles.sidebar_active} ${styles.sidebar_item} ${styles.sidebar_overview}`
            : `${styles.sidebar_item} ${styles.sidebar_overview}`
        }
      >
        <img src={Overview} alt='dashboard overview' />
        <span className={styles.sidebar_overview_text}>
          <NavLink to='/dashboard'>Overview</NavLink>
        </span>
      </div>
      <div className={styles.sidebar_items}>
        <div
          className={
            starshipsMatch || location.pathname === '/starships'
              ? `${styles.sidebar_active} ${styles.sidebar_item}`
              : `${styles.sidebar_item}`
          }
        >
          <div
            // className={`${styles.sidebar_item_icon} ${styles.starship}`}
            style={starshipBg}
          ></div>
          <span className={`${styles.sidebar_item_link}`}>
            <NavLink to='/starships'>Starships</NavLink>
          </span>
        </div>

        <div
          className={
            peopleMatch || location.pathname === '/people'
              ? `${styles.sidebar_active} ${styles.sidebar_item}`
              : `${styles.sidebar_item}`
          }
        >
          <div
            // className={`${styles.sidebar_item_icon} ${styles.people}`}
            style={peopleBg}
          ></div>
          <span className={`${styles.sidebar_item_link}`}>
            <NavLink to='/people'>People</NavLink>
          </span>
        </div>

        <div
          className={
            speciesMatch || location.pathname === '/species'
              ? `${styles.sidebar_active} ${styles.sidebar_item}`
              : `${styles.sidebar_item}`
          }
        >
          <div
            // className={`${styles.sidebar_item_icon} ${styles.species}`}
            style={speciesBg}
          ></div>
          <span className={`${styles.sidebar_item_link}`}>
            <NavLink to='/species'>Species</NavLink>
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
