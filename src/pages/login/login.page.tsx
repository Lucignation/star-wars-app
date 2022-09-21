import { useState } from 'react';

//imports from folders
import Input from '../../components/Input/input.component';
import Button from '../../components/Button/button.component';

import Logo from '../../assets/images/logo.svg';

import styles from './login.module.scss';
import { NavLink } from 'react-router-dom';

import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setErrors] = useState<string>('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const PasswordRegEx = /[a-z][0-9]/;

    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || !password) {
      // return setErrors("Username/Password can't be empty.");
      const notify = () =>
        toast.error("Email/Password can't be empty.", {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      return notify();
    }

    if (!email.match(emailValidation)) {
      const errorNotify = () =>
        toast.error('Please enter a valid email address ', {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      return errorNotify();
    }

    if (!password.match(PasswordRegEx)) {
      const errorNotify = () =>
        toast.error('Password must be a combination of letters and numbers', {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      return errorNotify();
    }

    if (password.length < 6) {
      const errorNotify = () =>
        toast.error('Password must be 6 or more characters long', {
          theme: 'colored',
          hideProgressBar: true,
          position: 'top-center',
        });
      return errorNotify();
    }

    const signinObj = {
      email,
      password,
    };

    const url = 'auth/login';
    console.log(signinObj);

    // const res = await axiosInstance.post(url, signinObj);

    // console.log(res);
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_logo_corner}>
        <img src={Logo} alt='Company logo' />
      </div>
      <div className={styles.login_inputs}>
        <h4 className={styles.login_heading}>Login </h4>
        <p className={styles.login_sub_heading}>
          Kindly enter your details to log in
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            formType='input'
            placeholder='Email Address'
            name='email'
            setValue={setEmail}
            value={email}
          />
          <Input
            formType='password'
            placeholder='Password'
            name='password'
            setValue={setPassword}
            value={password}
          />
          <Button btnText='Log in' />
        </form>

        <div className={styles.forgot_password_link}>
          <NavLink to='/forgot-password'>Forgot your password?</NavLink>
        </div>

        <p className={styles.login_privacy_services}>
          <span className={styles.login_privacy_services_link}>
            Privacy Policy
          </span>{' '}
          and{' '}
          <span className={styles.login_privacy_services_link}>
            Terms of services
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
