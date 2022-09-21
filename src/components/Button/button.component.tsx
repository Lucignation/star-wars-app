import { FC } from 'react';

import styles from './button.module.scss';

type props = {
  btnText: string;
};
const Button: FC<props> = ({ btnText }) => {
  return <button className={styles.btn}>{btnText}</button>;
};

export default Button;
