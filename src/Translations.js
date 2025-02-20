import React from 'react';
import TranslationsRows from "./TranslationsRows.js";
import JautajumuRows from "./JautajumuRows.js";

const words = [
    { anglu: "Feature", latviesu: "Funkcionālā iezīme" },
    { anglu: "Background", latviesu: "Konteksts" },
    { anglu: "Scenario", latviesu: "Scenārijs" },
    { anglu: "Scenario Outline", latviesu: "Scenārijs pēc parauga" },
    { anglu: "Examples", latviesu: "Piemēri" },
    { anglu: "Given", latviesu: "Kad" },
    { anglu: "When", latviesu: "Ja" },
    { anglu: "Then", latviesu: "Tad" },
    { anglu: "And", latviesu: "Un" },
    { anglu: "But", latviesu: "Bet" },
    { anglu: "Or", latviesu: "Vai" },
  ];

  const jautAtbildes = [
    { jautajums: "Kas un kāpēc ir funkcionālā iezīme?", atbilde: "1" },
    { jautajums: "Kādā formātā veidot lietotājstāstus (angļu v. User Story)?", atbilde: "1" },
    { jautajums: "Kā veidot scenārijus?", atbilde: "1" },
    { jautajums: "Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?", atbilde: "1" },
    { jautajums: "Kas ir veiksmīgā iznākuma scenārijs (angļu v. Happy Path Scenario)?", atbilde: "1" },
  ]

function Translations() {
    const reformattedArray = words.map(({ anglu, latviesu }) => { 
        // console.log(anglu + " " + latviesu)
        return (
            <TranslationsRows key={anglu} angluval={anglu} latviesuval={latviesu} />
        )
    });

    const reformattedArray2 = jautAtbildes.map(({ jautajums, atbilde }) => { 
        // console.log(anglu + " " + latviesu)
        return (
            <JautajumuRows key={jautajums} jautajums={jautajums} atbilde={atbilde} />
        )
    });

    return (
        <>
            <table border="3">
                <h1>Gherkin termini</h1>
                <tr>
                    <th>Angļu valodā</th>
                    <th>Latviešu valodā</th>
                </tr>

                { reformattedArray }

            </table>

            <table border="3">
                <h1>Funkcionālās iezīmes un to veidošana</h1>
                <tr>
                    <th>Jautājums</th>
                    <th>Atbilde</th>
                </tr>

                { reformattedArray2 }
            </table>
        </>
    );
}

export default Translations;