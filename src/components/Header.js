import React from 'react';
import WorkplaceInfo from "./WorkplaceInfo";
import AdminLink from "./links/AdminLink";
import ProductsLink from "./links/ProductsLink";
import Logout from "./links/Logout";

import PropTypes from 'prop-types';
import './Header.css'
import HomeLink from "./links/HomeLink";
import MeasuresLink from "./links/MeasuresLink";

Header.propTypes = {
    workplace: PropTypes.object.isRequired,
    websocket: PropTypes.object.isRequired
};

Header.defaultProps ={
  workplace: {login:{}}
};

/**
 * @return {null}
 */
function Header({workplace, websocket}) {

    return (
        <header>
            <nav className={"main-menu"}>
                <HomeLink login={workplace.login} websocket={websocket}/>
                <AdminLink login={workplace.login} websocket={websocket}/>
                <ProductsLink login={workplace.login} websocket={websocket}/>
                <MeasuresLink login={workplace.login} websocket={websocket}/>
                <Logout login={workplace.login} websocket={websocket} />
            </nav>
            <WorkplaceInfo workplace={workplace}/>
        </header>
    )

}

export default Header;