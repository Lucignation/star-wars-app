import { FC, useEffect } from 'react';
import styles from './starship.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStarship } from '../../store/reducer';

import { setStarship } from '../../services/shared.services';

import Cover from '../../assets/images/starship.svg';
import { Store } from '../../types/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';

type Props = {};

const Starship: FC<Props> = () => {
  const dispatch = useDispatch();

  const currentState: any = useSelector((state: Store) => state);

  const { starship } = currentState.items;

  let { id } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        if (id) {
          const data = await setStarship(id);
          dispatch(getStarship(data));
        }
      };

      fetchData();
    } catch (error: any) {
      console.log(error.response);
    }
  }, []);
  return (
    <div className={styles.starship_container}>
      <Sidebar />
      <div className={styles.starship_content}>
        <Navbar backBtn={true} />
        <div className={styles.starship_content_info}>
          <img src={Cover} alt='Cover page' />
          <div>
            <h1 className={styles.starship_title}>{starship?.name}</h1>
            <p className={styles.starship_director}>Model: {starship?.model}</p>
            <p className={styles.starship_producer}>
              Passengers: {starship?.passengers}
            </p>
            <p className={styles.starship_date}>Pilot: {starship?.pilot}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starship;
