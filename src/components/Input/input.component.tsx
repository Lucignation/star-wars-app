import { FC, useState, useEffect, ChangeEvent } from 'react';

import styles from './input.module.scss';

type props = {
  formType?: string;
  placeholder?: string;
  value: string | number;
  setValue: any;
  name: string;
};

const Input: FC<props> = ({ formType, placeholder, name, setValue, value }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };

  return (
    <div className={styles.input_container}>
      {formType === 'password' ? (
        <div className={`${styles.singleInput}`}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`${styles.input}`}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <small className={styles.placeholder}>{placeholder}</small>
        </div>
      ) : (
        <div className={`${styles.singleInput}`}>
          <input
            type='text'
            className={`${styles.input}`}
            name={name}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <small className={styles.placeholder}>{placeholder}</small>
        </div>
      )}
    </div>
  );
};

export default Input;
