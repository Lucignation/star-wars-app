import React from 'react';
import { ICategory } from '../../common/interfaces/interface';
import Category from '../Category/category.component';
import styles from './categories.module.scss';

const Categories = () => {
  const lists: Array<ICategory> = [
    {
      title: 'Films',
      colorCode: '#A9FFE0',
      total: 200,
      info: '20 More than than yesterday',
    },

    {
      title: 'Starship',
      colorCode: '#A9C1FF',
      total: 200,
      info: '20 More than than yesterday',
    },

    {
      title: 'People',
      colorCode: '#FFA9EC',
      total: 200,
      info: '20 More than than yesterday',
    },

    {
      title: 'Species',
      colorCode: '#FDFFA9',
      total: 200,
      info: '20 More than than yesterday',
    },
  ];
  return (
    <div className={styles.category_grid}>
      {lists.map((item: ICategory, index: number) => (
        <Category category={item} key={index} />
      ))}
    </div>
  );
};

export default Categories;
