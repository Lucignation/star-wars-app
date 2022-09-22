import { FC, useEffect } from 'react';
import { IFilm } from '../../common/interfaces/IFilm';
import styles from './film.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../store/Reducer';

import axiosInstance from '../../axio/index';

import Cover from '../../assets/images/film.svg';
import { Store } from '../../common/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';

type props = {
  //   filmItem: IFilm;
};

const Film: FC<props> = () => {
  const dispatch = useDispatch();

  const currentState: any = useSelector((state: Store) => state);

  console.log(currentState.items);

  const { film } = currentState.items;

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `/films/${id}`;
      const res = await axiosInstance.get(url);
      dispatch(getFilm(res.data));
    };

    fetchData();
  }, []);

  console.log(id);
  return (
    <div className={styles.film_container}>
      <Sidebar />
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
