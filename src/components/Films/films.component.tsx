import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getFilms } from '../../store/Reducer';

import { IFilm } from '../../common/interfaces/IFilm';

import CategoryHOC from '../../HOC/CategoryHOC';

import styles from './films.module.scss';

import axiosInstance from '../../axio/index';

type props = {
  data: Array<IFilm>;
};

const Film: FC<props> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms(data));
  }, [data]);
  const [checked, setChecked] = useState<boolean>(false);
  console.log(data);

  const handleSelected = (id: number) => {
    navigate(`/film/${id}`);
  };
  const renderedFilms = data
    .map((d: IFilm, index: number) => {
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
          <td>{d.title}</td>
          <td>{d.release_date}</td>
          <td>{d.director}</td>
          <td>{d.producer}</td>
          <td>{d.episode_id}</td>
          <td>{d.characters[0]}</td>
        </tr>
      );
    })
    .splice(0, 10);

  return (
    <div className={styles.films_container}>
      <p className={styles.films_title}>Films</p>
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
              <th scope='col'>Film Title</th>
              <th scope='col'>Release Date</th>
              <th scope='col'>Director</th>
              <th scope='col'>Producer</th>
              <th scope='col'>Episode ID</th>
              <th scope='col'>Character</th>
            </tr>
          </thead>
          <tbody>{renderedFilms}</tbody>
        </table>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

const FilmComponent = CategoryHOC(Film, 'films');

export default FilmComponent;
