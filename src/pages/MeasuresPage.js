import React, {useEffect} from 'react';
import {connect} from "react-redux";
import MeasureList from "../components/MeasureList";
import Websocket from "../middleware/Websocket";
import PropTypes from 'prop-types';

Meas.propTypes = {
    websocket: PropTypes.instanceOf(Websocket)
};

function Meas({websocket, measures}) {

    console.log(measures);

    useEffect(() => {

        console.log("mount");

        websocket.send({
            getMeasures: {}
        });

    }, []);

    if (measures) {
        return (
            <MeasureList measures={measures}/>
        )
    } else {
        return <div>ml</div>
    }

}

const mapStateToProps = state => {
    return {
        measures: state.measures
    }
}

export default connect(mapStateToProps)(Meas);