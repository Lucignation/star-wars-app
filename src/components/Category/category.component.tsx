import { FC } from 'react';
import { ICategory } from '../../common/interfaces/interface';
import styles from './category.module.scss';

type props = {
  category: ICategory;
};
const Category: FC<props> = ({ category }) => {
  const bg = {
    content: '',
    backgroundColor: category.colorCode,
    borderRadius: 5 + `px`,
    width: 27 + `px`,
    height: 26 + `px`,
  };
  return (
    <div className={styles.category_container}>
      <div className={styles.category_top_info}>
        <h2 className={styles.category_title}>{category.title}</h2>
        <p style={bg}></p>
      </div>
      <div className={styles.category_total}>{category.total}</div>
      <p className={styles.category_info}>{category.info}</p>
    </div>
  );
};

export default Category;
