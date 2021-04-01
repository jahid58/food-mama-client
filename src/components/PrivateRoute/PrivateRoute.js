import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';


const PrivateRoute = ({children,...rest}) => {
    const [user,setUser] = useContext(UserContext)
    
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;