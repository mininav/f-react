import React, {useState, useEffect} from 'react';

function WorkplaceInfo(props) {

    return (
        <div className={"workplace-info"}>
            <div>workplace: {props.workplace ? JSON.stringify(props.workplace.name): ''}</div>
            <div>user: {props.workplace.login ? JSON.stringify(props.workplace.login.name): 'guest'}</div>
        </div>
    )

}

export default WorkplaceInfo;