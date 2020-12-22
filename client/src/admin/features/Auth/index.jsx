import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function AdminAuthFeature(props) {
  //lấy match thằng thằng route
  const match = useRouteMatch();

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/admin');
    }

    //eslint-disable-next-line
  }, []);


  return (
    <Switch>
      <Route path={`${match.url}/login`} exact component={LoginPage} />
    </Switch>
  );
}

export default AdminAuthFeature;
