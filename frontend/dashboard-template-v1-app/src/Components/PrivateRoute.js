import React from 'react';
import {useSelector} from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, props, ...rest }) => {

    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    // const isLoaded = useSelector(state => state.auth.isLoaded);
    // const userRoles = useSelector(state => state.auth.user.roles);

    console.log("Here lies the trouble function of Private Route")
    
    return (
        // !isLoaded
        //     ?
        //     null
        //     :
        //     <Route
        //         {...rest}
        //         render=
        //         {
            //             props => !isAuthenticated
            //                 ? (<Redirect to='/Auth' />)
            //                 // ? null
            //                 : (<Component {...props} />)
            //         }
            //     />
            <Route
            render=
            {
                <Component {...props} />
            }
        />
    );
};

export default PrivateRoute;