import React from 'react';
import WorkplaceInfo from "./WorkplaceInfo";
import AdminLink from "./links/AdminLink";
import ProductsLink from "./links/ProductsLink";
import Logout from "./links/Logout";

import PropTypes from 'prop-types';
import './Header.css'
import HomeLink from "./links/HomeLink";

Header.propTypes = {
    workplace: PropTypes.object,
    websocket: PropTypes.object
};

Header.defaultProps ={
  workplace: {login:{}}
};

function Header(props) {

    return (
        <header>
            <nav className={"main-menu"}>
                <HomeLink login={props.workplace.login} websocket={props.websocket}/>
                <AdminLink login={props.workplace.login} websocket={props.websocket}/>
                <ProductsLink login={props.workplace.login} websocket={props.websocket}/>
                <Logout login={props.workplace.login} websocket={props.websocket} />
            </nav>
            <WorkplaceInfo workplace={props.workplace}/>
        </header>
    )

}

export default Header;