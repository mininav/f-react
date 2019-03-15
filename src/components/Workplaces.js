import React from 'react';

/**
 * @return {null}
 */
function Workplaces(props) {

    if(!props.items) {
        return null;
    }

    const items = props.items.map(item => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
    });

    return (

        <div>
            <h2>workplace</h2>
            <ul>
                {items}
            </ul>
        </div>

    );
}

export default Workplaces;