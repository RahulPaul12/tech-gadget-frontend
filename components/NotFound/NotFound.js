import React from 'react';
import notfound from '../../images/error-404-not-found.jpg';
const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" style={{width:"75%", alignItems:'center'}}/>
        </div>
    );
};

export default NotFound;