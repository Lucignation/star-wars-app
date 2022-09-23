import { FC, useEffect, useState } from 'react';
import styles from './person.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPeople } from '../../store/reducer';

import { setPerson } from '../../services/shared.services';

import Cover from '../../assets/images/people.svg';
import { Store } from '../../types/interfaces/interface';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { IPeople } from '../../types/interfaces/IPeople';

type Props = {};

const Person: FC<Props> = () => {
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

  const { people } = currentState.items;

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await setPerson(id);

        setSpecies(data);
        dispatch(getPeople(data));
      }
    };

    fetchData();

    return () => setSpecies(initialPerson);
  }, []);

  const gender =
    people?.gender.charAt(0).toUpperCase() + people?.gender.slice(1);
  return (
    <div className={styles.person_container}>
      <Sidebar />
      <div className={styles.person_content}>
        <Navbar backBtn={true} />
        <div className={styles.person_content_info}>
          <img src={Cover} alt='Cover page' />
          <div>
            <h1 className={styles.person_title}>{people?.name}</h1>
            <p className={styles.person_director}>Gender: {gender}</p>
            <p className={styles.person_producer}>
              Year of birth: January 24, 1922.
            </p>
            <p className={styles.person_date}>
              Skin Color: {people?.skin_color}.
            </p>

            <p className={styles.person_average_lifespan}>
              Height: {people?.height}CM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
