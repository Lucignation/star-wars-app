import { FC, useEffect, useState } from 'react';
import styles from './person.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecie } from '../../store/Reducer';

import axiosInstance from '../../axio/index';

import Cover from '../../assets/images/people.svg';
import { Store } from '../../common/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { ISpecies } from '../../common/interfaces/ISpecies';
import { IPeople } from '../../common/interfaces/IPeople';

type props = {};

const Person: FC<props> = () => {
  const dispatch = useDispatch();

  const initialPerson = {
    name: '',
    mass: '',
    skin_color: '',
    height: '',
    homeworld: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    hair_color: '',
    species: [],
    starships: [],
    vehicles: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  };

  const [species, setSpecies] = useState<IPeople>(initialPerson);

  const currentState: any = useSelector((state: Store) => state);

  console.log(currentState.items);

  const { people } = currentState.items;

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `/people/${id}`;
      const res = await axiosInstance.get(url);
      setSpecies(res.data);
      dispatch(getSpecie(res.data));
    };

    fetchData();

    return () => setSpecies(initialPerson);
  }, []);

  console.log(id);
  return (
    <div className={styles.person_container}>
      <Sidebar />
      <div className={styles.person_content}>
        <Navbar backBtn={true} />
        <div className={styles.person_content_info}>
          <img src={Cover} alt='Cover page' />
          <div>
            <h1 className={styles.person_title}>{species?.name}</h1>
            <p className={styles.person_director}>Gender: {species?.gender}</p>
            <p className={styles.person_producer}>
              Year of birth: {species?.birth_year}
            </p>
            <p className={styles.person_date}>
              Skin Color: {species?.skin_color}.
            </p>

            <p className={styles.person_average_lifespan}>
              Height: {species?.height}CM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
