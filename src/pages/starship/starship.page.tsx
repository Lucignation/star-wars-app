import { FC, useEffect } from 'react';
import { IFilm } from '../../common/interfaces/IFilm';
import styles from './starship.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStarship } from '../../store/Reducer';

import axiosInstance from '../../axio/index';

import Cover from '../../assets/images/starship.svg';
import { Store } from '../../common/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';

type props = {
  //   filmItem: IFilm;
};

const Starship: FC<props> = () => {
  const dispatch = useDispatch();

  const currentState: any = useSelector((state: Store) => state);

  console.log(currentState.items);

  const { starship } = currentState.items;

  let { id } = useParams();

  console.log(starship);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const url = `/starships/${id}`;
        const res: any = await axiosInstance.get(url);
        console.log(res);
        dispatch(getStarship(res.data));

        console.log(res.data);
        console.log(res.response);
      };

      fetchData();
    } catch (error: any) {
      console.log(error.response);
    }
  }, []);

  console.log(id);
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
