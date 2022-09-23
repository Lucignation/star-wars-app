import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { getSpecies } from '../../store/Reducer';

import CategoryHOC from '../../HOC/CategoryHOC';

import styles from './species.module.scss';

import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { ISpecies } from '../../types/interfaces/ISpecies';
import Backdrop from '../../components/backdrop/backdrop.component';

type Props = {
  data: Array<ISpecies>;
};

const Species: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecies(data));
  }, [data]);

  const handleSelected = (id: number) => {
    navigate(`/species/${id}`);
  };
  const renderedSpecies = data
    .map((d: ISpecies, index: number) => {
      const lastDate = moment(d.created).format('l').split('/')[2].slice(2);

      const firstIndex = moment(d.created)
        .format('l')
        .split('/')
        .splice(0, 2)
        .join('/');

      const date = `${firstIndex}/${lastDate}`;

      return (
        <tr key={index} onClick={() => handleSelected(index + 1)}>
          <th scope='row'>
            <input
              type='checkbox'
              className='form-check-input'
              // checked={checked}
              readOnly
              id='mastercheck'
              //   onChange={(e) =>setChecked(e.target.value)}
            />
          </th>
          <td>{d.name}</td>
          <td>{d.classification}</td>
          <td>{d.eye_colors}</td>
          <td>{d.hair_colors}</td>
          <td>{d.average_height} CM</td>
          <td>{date}</td>
        </tr>
      );
    })
    .splice(0, 10);

  return (
    <div className={styles.species_container}>
      <Backdrop />
      <div className={styles.species_content}>
        <Navbar />
        <div className={styles.species_main}>
          <p className={styles.species_title}>Species</p>
          {data.length > 0 ? (
            <div className={styles.table_main_container}>
              <table
                className={`table table-bordered ${styles.table_container}`}
              >
                <thead className={styles.table_heading}>
                  <tr>
                    <th scope='col'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        // checked={checked}
                        id='mastercheck'
                        // onChange={(e) => setChecked(e.target.checked)}
                        readOnly
                      />
                    </th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Classification</th>
                    <th scope='col'>Eye colors</th>
                    <th scope='col'>Hair Color</th>
                    <th scope='col'>Height</th>
                    <th scope='col'>Created</th>
                  </tr>
                </thead>
                <tbody>{renderedSpecies}</tbody>
              </table>
            </div>
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const SpeciesComponent = CategoryHOC(Species, 'species');

export default SpeciesComponent;
