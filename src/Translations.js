import React from 'react';

function Translations() {
    return (
        <table border="3">
            <h1>Gherkin termini</h1>
            <tr>
                <th>Angļu valodā</th>
                <th>Latviešu valodā</th>
            </tr>
            <tr>
                <th>Feature</th>
                <th>Funkcionālā iezīme</th>
            </tr>
            <tr>
                <th>Background</th>
                <th>Konteksts</th>
            </tr>
            <tr>
                <th>Scenario</th>
                <th>Scenārijs</th>
            </tr>
            <tr>
                <th>Scenario Outline</th>
                <th>Scenārijs pēc parauga</th>
            </tr>
            <tr>
                <th>Examples</th>
                <th>Piemēri</th>
            </tr>
            <tr>
                <th>Given</th>
                <th>Kad</th>
            </tr>
            <tr>
                <th>When</th>
                <th>Ja</th>
            </tr>
            <tr>
                <th>Then</th>
                <th>Tad</th>
            </tr>
            <tr>
                <th>And</th>
                <th>Un</th>
            </tr>
            <tr>
                <th>But</th>
                <th>Bet</th>
            </tr>
            <tr>
                <th>Or</th>
                <th>Vai</th>
            </tr>
        </table>
    );
}

export default Translations;