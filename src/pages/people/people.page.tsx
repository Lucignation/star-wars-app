import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { getAllPeople } from '../../store/Reducer';

import CategoryHOC from '../../HOC/CategoryHOC';

import styles from './people.module.scss';

import axiosInstance from '../../axio/index';
import { IStarship } from '../../common/interfaces/IStarship';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { IPeople } from '../../common/interfaces/IPeople';

type props = {
  data: Array<IPeople>;
};

const People: FC<props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPeople(data));
  }, [data]);
  const [checked, setChecked] = useState<boolean>(false);
  console.log(data);

  const handleSelected = (id: number) => {
    navigate(`/people/${id}`);
  };
  const renderedPeople = data
    .map((d: IPeople, index: number) => {
      const lastDate = moment(d.created).format('l').split('/')[2].slice(2);

      const firstIndex = moment(d.created)
        .format('l')
        .split('/')
        .splice(0, 2)
        .join('/');

      const date = `${firstIndex}/${lastDate}`;

      const gender = d?.gender.charAt(0).toUpperCase() + d?.gender.slice(1);

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
          <td>1900</td>
          <td>{gender}</td>
          <td>{d.hair_color}</td>
          <td>{d.height} CM</td>
          <td>{date}</td>
        </tr>
      );
    })
    .splice(0, 10);

  return (
    <div className={styles.people_container}>
      <Sidebar />
      <div className={styles.people_content}>
        <Navbar />
        <div className={styles.people_main}>
          <p className={styles.people_title}>People</p>
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
                  <th scope='col'>Birth year</th>
                  <th scope='col'>Gender</th>
                  <th scope='col'>Hair Color</th>
                  <th scope='col'>Height</th>
                  <th scope='col'>Created</th>
                </tr>
              </thead>
              <tbody>{renderedPeople}</tbody>
            </table>
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const PeopleComponent = CategoryHOC(People, 'people');

export default PeopleComponent;