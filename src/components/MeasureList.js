import React from 'react';

export default function MeasureList(props) {

    console.log(props);

    const items = props.measures.map(measure => {
       return <li key={measure.id}>measure</li>
    });

    return (
        <ul>
            {items}
        </ul>
    )
}