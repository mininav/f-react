import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Websocket from "../middleware/Websocket";

MeasuresPage.propTypes = {
    websocket: PropTypes.instanceOf(Websocket)

};

function MeasuresPage(props) {

    const [measures, setMeasures] = useState({});
    useEffect(() => {

        const remove = [];

        remove.push(props.websocket.addMsgEventListener("measures", measures => {
            setMeasures(measures);
        }));

        remove.push(props.websocket.addMsgEventListener("measureUpdates", updates => {
            Object.keys(updates).forEach(key => {
                if (updates[key].deleted) {
                    delete measures[key];
                } else {
                    measures[key] = updates[key];
                }
            });
            setMeasures(measures);
        }));

        props.websocket.send({
            getMeasures: {}
        });

        return () => {
            remove.forEach(f=>f());
        }
    }, []);

    return (
        <div>

        </div>
    );
}

export default MeasuresPage;