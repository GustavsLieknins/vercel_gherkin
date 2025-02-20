import React from 'react';

function JautajumuRows(props) {
    return (
        <tr key={props}>
            <th>{props.jautajums}</th>
            <th>{props.atbilde}</th>
        </tr>
    );
}

export default JautajumuRows;