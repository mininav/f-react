import React from 'react';
import PropTypes from 'prop-types'

HomePage.propTypes = {
    login: PropTypes.object

};

function HomePage(props) {
    return (
        <div>
            {<h1>Welcome, {props.login.name}</h1>}
        </div>
    )
}

export default HomePage;