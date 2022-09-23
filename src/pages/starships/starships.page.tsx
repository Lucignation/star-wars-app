import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getStarships } from '../../store/reducer';

import CategoryHOC from '../../HOC/CategoryHOC';

import styles from './starships.module.scss';

import { IStarship } from '../../types/interfaces/IStarship';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Backdrop from '../../components/backdrop/backdrop.component';

type Props = {
  data: Array<IStarship>;
};

const Starships: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarships(data));
  }, [data]);

  const handleSelected = (id: number) => {
    navigate(`/starships/${id}`);
  };
  const renderedStarships = data
    .map((d: IStarship, index: number) => {
      return (
        <tr key={index} onClick={() => handleSelected(index + 1)}>
          <th scope='row'>
            <input
              type='checkbox'
              className='form-check-input'
              readOnly
              id='mastercheck'
            />
          </th>
          <td>{d.name}</td>
          <td>{d.model}</td>
          <td>{d.starship_class}</td>
          <td>{d.passengers}</td>
          <td>{d.length}</td>
          <td>{d.films[0]}</td>
        </tr>
      );
    })
    .splice(0, 10);

  return (
    <div className={styles.starships_container}>
      <Backdrop />
      <div className={styles.starships_content}>
        <Navbar />
        <div className={styles.starships_main}>
          <p className={styles.starships_title}>Starships</p>
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
                    <th scope='col'>Model</th>
                    <th scope='col'>Class</th>
                    <th scope='col'>Passenger</th>
                    <th scope='col'>Length</th>
                    <th scope='col'>Character</th>
                  </tr>
                </thead>
                <tbody>{renderedStarships}</tbody>
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

const StarshipComponent = CategoryHOC(Starships, 'starships');

export default StarshipComponent;
