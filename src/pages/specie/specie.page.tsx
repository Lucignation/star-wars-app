import { FC, useEffect, useState } from 'react';
import styles from './specie.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecie } from '../../store/Reducer';

import axiosInstance from '../../axio/index';

import Cover from '../../assets/images/species.svg';
import { Store } from '../../common/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { ISpecies } from '../../common/interfaces/ISpecies';

type props = {};

const Specie: FC<props> = () => {
  const dispatch = useDispatch();

  const initialSpecies = {
    average_height: '',
    average_lifespan: '',
    classification: '',
    created: '',
    designation: '',
    edited: '',
    eye_colors: '',
    hair_colors: '',
    homeworld: '',
    language: '',
    name: '',
    people: [],
    films: [],
    skin_colors: '',
    url: '',
  };

  const [species, setSpecies] = useState<ISpecies>(initialSpecies);

  const currentState: any = useSelector((state: Store) => state);

  console.log(currentState.items);

  const { specie } = currentState.items;

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `/species/${id}`;
      const res = await axiosInstance.get(url);
      setSpecies(res.data);
      dispatch(getSpecie(res.data));
    };

    fetchData();

    return () => setSpecies(initialSpecies);
  }, []);

  console.log(id);
  return (
    <div className={styles.specie_container}>
      <Sidebar />
      <div className={styles.specie_content}>
        <Navbar backBtn={true} />
        <div className={styles.specie_content_info}>
          <img src={Cover} alt='Cover page' />
          <div>
            <h1 className={styles.specie_title}>{species?.name}</h1>
            <p className={styles.specie_director}>
              Designation: {species?.designation}
            </p>
            <p className={styles.specie_producer}>
              Language: {species?.language}
            </p>
            <p className={styles.specie_date}>
              Eye Colors: {species?.eye_colors}.
            </p>

            <p className={styles.specie_average_lifespan}>
              Average Lifespan: {species?.average_lifespan}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specie;
