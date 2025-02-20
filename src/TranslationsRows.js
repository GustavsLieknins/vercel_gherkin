import React from 'react';

function Translations(props) {
    return (
        <tr key={props}>
            <th>{props.angluval}</th>
            <th>{props.latviesuval}</th>
        </tr>
    );
}

export default Translations;