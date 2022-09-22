import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getStarships } from '../../store/Reducer';

import CategoryHOC from '../../HOC/CategoryHOC';

import styles from './starships.module.scss';

import axiosInstance from '../../axio/index';
import { IStarship } from '../../common/interfaces/IStarship';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';

type props = {
  data: Array<IStarship>;
};

const Starships: FC<props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarships(data));
  }, [data]);
  const [checked, setChecked] = useState<boolean>(false);
  console.log(data);

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
              // checked={checked}
              readOnly
              id='mastercheck'
              //   onChange={(e) =>setChecked(e.target.value)}
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
      <Sidebar />
      <div className={styles.starships_content}>
        <Navbar />
        <div className={styles.starships_main}>
          <p className={styles.starships_title}>Starships</p>
          {data.length > 0 ? (
            <table className={`table table-bordered ${styles.table_container}`}>
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
