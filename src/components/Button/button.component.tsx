import { FC } from 'react';

import styles from './button.module.scss';

type Props = {
  btnText: string;
};
const Button: FC<Props> = ({ btnText }) => {
  return <button className={styles.btn}>{btnText}</button>;
};

export default Button;
