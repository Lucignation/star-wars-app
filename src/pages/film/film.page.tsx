import { FC, useEffect } from 'react';
import styles from './film.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../store/reducer';

import axiosInstance from '../../config/axio.config';

import { setFilm } from '../../services/shared.services';

import Cover from '../../assets/images/film.svg';
import { Store } from '../../types/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Backdrop from '../../components/backdrop/backdrop.component';

type Props = {};

const Film: FC<Props> = () => {
  const dispatch = useDispatch();

  const currentState: any = useSelector((state: Store) => state);

  console.log(currentState.items);

  const { film } = currentState.items;

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await setFilm(id);
        dispatch(getFilm(data));
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.film_container}>
      <Backdrop />
      <div className={styles.film_content}>
        <Navbar backBtn={true} />
        <div className={styles.film_content_info}>
          <img src={Cover} alt='Cover page' />
          <div>
            <h1 className={styles.film_title}>{film.title}</h1>
            <p className={styles.film_director}>Director: {film.director}</p>
            <p className={styles.film_producer}>Producer: {film.producer}</p>
            <p className={styles.film_date}>
              Release Date: {film.release_date}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
