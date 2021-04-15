import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
    const {setUserInfo} = useContext(UserContext)
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
      setUserInfo.email || sessionStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRouter;