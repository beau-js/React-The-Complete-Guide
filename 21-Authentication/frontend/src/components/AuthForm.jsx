/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2022-11-11 13:30:04
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-20 03:49:44
 * @FilePath: \workspace\React-The-Complete-Guide\21-Authentication\frontend\src\components\AuthForm.jsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import {
  Form,
  Link,
  useActionData,
  useSearchParams,
  useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      {data && data.message && <p>{data.message}</p>}
      <p>
        <label htmlFor="email">
          Email
          <input id="email" type="email" name="email" required />
        </label>
      </p>
      <p>
        <label htmlFor="image">
          Password
          <input id="password" type="password" name="password" required />
        </label>
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
          {isLogin ? 'Create new user' : 'Login'}
        </Link>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
