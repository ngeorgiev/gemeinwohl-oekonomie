'use strict';

var Utils = {};

/**
 * Returns the sum of all integers in the given array.
 * a
 * @param intArray the array contain integers of type number and string.
 * @returns {number} the sum of all integers in the array.
 */
Utils.sumIntegersInArray = function (intArray) {

    var sum = 0;
    var arrayLength = intArray.length;
    for (var arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++) {
        sum += parseInt(intArray[arrayIndex], 10);
    }
    return sum;
};

Utils.applyEqualHeightOnResize = function () {
    var currentResizeWidth = $(window).width();
    console.log('applyEqualHeight On Resize');

    // fix for Chrome issue: http://code.google.com/p/chromium/issues/detail?id=133869
    if (currentResizeWidth !== Utils.lastResizeWidth) {
        Utils.lastResizeWidth = currentResizeWidth;
        Utils.applyEqualHeightRecalculate();
    }
};

Utils.applyEqualHeightRecalculate = function () {
//    console.log('Recalculate ...');

    // set height to auto (default) to calculate it again
    Utils.getJsEqualHeightElements().each(function() { // for each element
        $(this).children().each(function () {
            $(this).css({ height: 'auto' });
        });
    });

    // set the max height to all elements
    Utils.applyEqualHeight();
};

Utils.applyEqualHeight = function () {
//    console.log('!!!applyEqualHeight');

    Utils.getJsEqualHeightElements().each(function() { // for each element
        var maxHeight = 0;
        $(this).children().each(function () {
            var curCell = $(this);
            if (curCell.outerHeight() > maxHeight) { // compare heights
                maxHeight = curCell.outerHeight();
//                console.log('maxHeight = ' + maxHeight);
            }
        });
        if (maxHeight !== 0) {
            $(this).children().each(function () {
                $(this).css({ height: maxHeight + 'px' });
            });
        }
    });
};

Utils.getJsEqualHeightElements = function () {
    if (Utils.jsEqualHeightElements === undefined) {
        Utils.jsEqualHeightElements = $('.js-equal-height');
    }
    return Utils.jsEqualHeightElements;
};

'use strict';

var Data = {};
var Template = {};
var Controller = {};

if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) === str;
    };
}

Data.quickTest = {
    name : 'Schnelltest „Gemeinwohl-Ökonomie“',
    structure : {
        testTypes : [
            {
                id : 'calculateOneOfManyAnswers',
                individualAnswer : {
                    evaluationType : 'number',
                    evaluationValues : [
                        {
                            value : 0,
                            text : 'trifft nicht zu'
                        },
                        {
                            value : 1,
                            text : 'trifft in Ansätzen zu'
                        },
                        {
                            value : 2,
                            text : 'trifft mäßig zu'
                        },
                        {
                            value : 3,
                            text : 'trifft überwiegend zu'
                        },
                        {
                            value : 4,
                            text : 'trifft zu'
                        }
                    ]
                },
                participants : [
                    {
                        type : 'company',
                        name : 'Unternehmen'
                    },
                    {
                        type : 'oneperson',
                        name : 'Einzelunternehmen'
                    }
                ],
                result : {
                    operandOnIndividualResults : 'add',
                    finalCalculation : [
                        {
                            participantType : 'company',
                            multiplyBy : 1
                        },
                        {
                            participantType : 'oneperson',
                            multiplyBy : 1.33
                        }
                    ],
                    feedbacks : [
                        {
                            minValue: 0,
                            maxValue: 32,
                            content :
                                '<p>Ihr Unternehmen setzt sich mit gemeinwohlorientierten Aspekten auseinander und ist damit schon mal über dem gesetzlichen Mindeststandards.</p>'+
                                '<p>Allerdings gibt es noch ein sehr hohes Entwicklungspotiential in Richtung Gemeinwohl und Nachhaltigkeit.</p>'+
                                '<p>Der interne Gemeinwohl-Bericht kann helfen, den Status Quo detaillierter zu ermitteln und auf Basis dessen Ziele und Maßnahmen für das nächste Jahr zu setzen.</p>'
                        },
                        {
                            minValue: 33,
                            maxValue: 62,
                            content :
                                '<p>Ihr Unternehmen hat bereits mehr als 25% der Gemeinwohl-Aspekte verwirklicht und befindet sich auf einem „guten“ Weg.</p>'+
                                '<p>Für einen besseren Überblick könnten Sie jetzt eineEinstiegsbilanz erstellen, die ein detailliertere Auseinandersetzung ermöglicht und gleichzeitig weniger Zeit benötigt als eine vollständige Gemeinwohl-Bilanz.</p>'
                        },
                        {
                            minValue: 63,
                            maxValue: 94,
                            content :
                                '<p>Ihr Unternehmen ist überaus nachhaltigkeitsorientiert und legt gesteigerten Wert auf sozial- und umweltgerechtes Wirtschaften. Ihr Unternehmen könnte voraussichtlich bereits einen Gemeinwohl-Bericht erstellen und in den vorbildlichen Bereich der Unternehmen stoßen.</p>'+
                                '<p>Ein Gemeinwohlbericht gibt eine detaillierte Aufschlüsselung ihrer Aktivitäten und hilft weitere Verbesserungen vorzunehmen. Gleichzeitig können Ihre Kunden, Lieferanten und Mitbewerber so mehr über Ihre Aktivitäten erfahren und so sich neue Geschäftsfelder erschließen.</p>'
                        },
                        {
                            minValue: 95,
                            maxValue: 128,
                            content :
                                '<p>Ihr Unternehmen ist bereits vorbildlich nach vielen Kriterien der Gemeinwohlökonomie. Wahrscheinlich sind Sie schon GWÖ-Unternehmen oder  seit Jahren branchenführend in der Nachhaltigkeitsszene. Als Vorreiter und Pionier sind Sie Vorbild für ihre Mitbewerber und Inspiration für andere gemeinwohl-interessierte Unternehmer. Bitte erstellen Sie einen Gemeinwohl-Bericht und geben so ihre Erfahrung weiter!</p>'
                        }
                    ]
                }
            }
        ]
    },
    data : {
        name : 'this is data name',
        tests : [
            {
                type : 'calculateOneOfManyAnswers',
                introduction : {
                    content :
                        '<p>Die Gemeinwohl-Ökonomie ist eine politische Vision,die eine Wirtschaft für die Menschen und die Umwelt schaffen möchte. Dabei soll das wirtschaftliche Ziel nicht mehr allein die Profitmaximierung sein, sondern die Maximierung des „Gemeinwohls".</p>'+
                        '<p>Das Gemeinwohl wird auf Basis der Gemeinwohl-Matrix definiert:</p>'+
                        '<p>Wie lebe ich als Unternehmer fünf Werte (Menschenwürde, Solidarität, Ökologische Nachhaltigkeit, Soziale Gerechtigkeit und Demokratie/Transparenz) im Kontakt mit meinen Berührungsgruppen (LieferantInnen, Geldgeber, Mitarbeiter, Kunden/Mitbewerber und das gesellschaftliche Umfeld)?</p>'+
                        '<p>Konkret gibt es auf Basis der Verbindungen 17 Indikatoren, die das Gemeinwohl messen können. Wie wird z.B. die Menschenwürde innerhalb des Betriebes im Umgang mit den Mitarbeitern gelebt? Genauer haben wir das in dem Indikator C1 „Arbeitsplatzqualität“ beschrieben.</p>'+
                        '<p>Mit Hilfe eines umfassenden Gemeinwohl-Berichtes gibt ein Unternehmen detailliert Auskunft über das Gemeinwohl-Verhalten anhand dieser 17 Indikatoren. Diese Auseinandersetzung braucht Zeit und Engagement, das viele Unternehmen derzeit aufgrund wirtschaftlicher Zwänge nicht haben.</p>'+
                        '<p>Um einen „schnellen“ ersten Einblick zu bekommen, haben wir diesen Schnelltest von Thomas Haderlapp für die Matrix 4.1. modifiziert und neu gestaltet.</p>'+
                        '<p>Innerhalb von einer halben Stunde haben Sie einen Eindruck, worum es in der GWÖ geht und ein erstes sehr grobes Ergebnis, wie gemeinwohlorientiert Sie wirtschaften.</p>'+
                        '<p>Der nächste Schritt danach könnte sein, eine vereinfachte Einstiegsbilanz zu erstellen.</p>'+
                        '<p>Hinter der den Nummer für die Fragen habe ich die Indikatoren der GWÖ-Matrix angefügt, d.h. A1 = A1 Ethisches Beschaffungswesen. So können Sie bei Lust und Laune im Handbuch nähere Hintergründe erfahren.</p>'+
                        '<p>Nähere Informationen dazu erhalten Sie hier: Link GWÖ-Dokumente</p>'
                },
                questions : [
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen berücksichtigt bei allen wesentlichen zugekauften Produkten und Dienstleistungen die besten regionalen, sozialen und ökologischen Alternativen und findet innovative Lösungen zur Vermeidung kritischer Stoffe ohne höherwertige Alternative.'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen kooperiert aktiv mit LieferantInnen, um soziale und ökologische Aspekte besser zu lösen. Es gibt ein nachgewiesenes Controlling, d.h. alle zugekauften P/D sind intern oder extern zertifiziert.'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen zahlt faire Preise, pflegt langfristige Kooperationen mit den LieferantInnen und hat erste innovative Strukturen entwickelt.'
                    },
                    {
                        stakeholders : 'B',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Finanzmanagement',
                        text : 'Mein Unternehmen hat ausschließlich ethisch-ökologische Finanzdienstleister, d.h. Bank/ Vorsorgekasse und veranlagt/finanziert sich dort zu 100 %.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen pflegt eine wertschätzende, offeneOrganisationskultur mit klaren Aufgaben/ Kompetenzen, ausreichender Weiterbildung und einer partizipativen Führungskultur.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen bietet optimale Arbeitsplatzsicherheit für die Mitarbeiter. Es gibt eine Vielzahl von Arbeitszeit-Modellen, die von den MA selbst gewählt werden können. Die Rahmenbedingungen für eine optimale Work-Life-Balance sind vorhanden.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen kümmert sich aktiv um diverse Mitarbeiter und die Gleichbehandlung von Mann/Frau. Es gibt gleiche Bezahlung für Männer/ Frauen, die Führungskräfte auf allen Ebenen sind zu 50% Frauen, es gibt eine besondere Berücksichtigung von älteren Arbeitnehmern, Arbeitnehmern mit Migrationshintergrund, behinderten Arbeitenehmern. Wir zahlen keine Ausgleichstaxe.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '2',
                        indicatorTitle : 'Gerechte Verteilung der Erwerbsarbeit',
                        text : 'Mein Unternehmen hat keine All-incl. Verträge und baut Überstunden ab. Statt neuer Überstunden werden neue MitarbeiterInnen eingestellt. Wir leisten einen Beitrag zur Reduktion der Arbeitslosigkeit.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '3',
                        indicatorTitle : 'Förderung ökologischen Verhaltens der MitarbeiterInnen',
                        text : 'Mein Unternehmen fördert und fordert das ökologische Verhalten der Mitarbeiter durch eine biologisch, regionale, fleischlose Ernährung, umfassende Weiterbildungsmaßnahmen und finanzielle Förderung von schadstoffarmen Verkehrsmitteln.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        indicatorTitle : 'Gerechte Verteilung des Einkommens',
                        text : 'Mein Unternehmen hat eine maximale Einkommensspreizung von 1:3, d.h. der bezahlte Höchstlohn entspricht max. das dreifache des bezahlten Niedrigstlohns.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        indicatorTitle : 'Gerechte Verteilung des Einkommens',
                        text : 'Mein Unternehmen zahlt mind. 1250 Euro monatlich netto und maximal das zehnfache davon an den Höchstverdiener.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        indicatorTitle : 'Innerbetriebliche Demokratie und Transparenz',
                        text : 'Mein Unternehmen hat eine hohe interne Transparenz und alle MitarbeiterInnen können konsensual die Grundsatzentscheidungen in ihrem Team mitbestimmen.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        indicatorTitle : 'Innerbetriebliche Demokratie und Transparenz',
                        text : 'In meinem Unternehmen werden die Führungskräfte von ihren MitarbeiterInnen eingestellt, regelmäßig evaluiert und können auch von ihnen entlassen werden.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '5',
                        indicatorTitle : 'Innerbetriebliche Demokratie und Transparenz',
                        text : 'Unser Unternehmen gehört allen Mitarbeitern oder einer unabhängigen Stiftung. Es gibt keine „Übermacht“ einiger weniger Eigentümer mehr.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethische Kundenbeziehung',
                        text : 'Mein Unternehmen hat ein Gesamtkonzept für Ethik im Verkauf und sorgt für Preistransparenz, faire Preise und beliefert nur ethisch einwandfreie Kunden.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethische Kundenbeziehung',
                        text : 'Mein Unternehmen bezieht die Kunden bei der Produktentwicklung mit ein und lässt die Kunden bestmöglich mitentscheiden.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        indicatorTitle : 'Solidarität mit Mitunternehmen',
                        text : 'Mein Unternehmen gibt das eigene Knowhow, Kalkulationen und Lieferquellen an gleichgesinnte Mitbewerber weiter. Gemeinsam wird an einem Produktinformationssystem gearbeitet, so dass die Kunden optimal informiert sind und Leistungen gut vergleichen können.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        indicatorTitle : 'Solidarität mit Mitunternehmen',
                        text : 'Mein Unternehmen gibt Aufträge an Mitbewerber weiter, wenn sie nicht mehr selbst bedient werden können, unterstützt die Mitbewerber mit eigenen Arbeitskräften bei Engpässen und stellt gleichgesinnten Mitbewerbern auch Fremdkapital zu einem angemessenen Zinssatz zur Verfügung.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        indicatorTitle : 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                        text : 'Die Produkte/Dienstleistungen meines Unternehmens sind im Vergleich zu den Mitbewerbern ökologisch branchenführend z.B. Cradle-to-cradle. Wir sind Vorreiter bei der ökologischen Qualität der P/D',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        indicatorTitle : 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                        text : 'Mein Unternehmen fördert das ökologische Verhalten der Kunden. Preisvorteile & Anreiz-systeme; Reparatur, Wiederverwendung und gemeinschaftliche Nutzung sind wesentliche Bestandteile unseres Geschäftsmodells.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '4',
                        indicatorTitle : 'Soziale Gestaltung der Produkte und Dienstleistungen',
                        text : 'Mein Unternehmen setzt sich aktiv mit den Zugang von Benachteiligten (Geringverdiener, MigrantInnen, älteren Menschen, Behinderte) zu unseren Produkten/ Dienstleistungen auseinander und schafftangemessene Zugangsmöglichkeiten für die Gruppen',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '5',
                        indicatorTitle : 'Erhöhung der sozialen und ökologischen Branchenstandards',
                        text : 'Mein Unternehmen arbeitet mit den Mitbewerbern aktiv an höheren sozialen und ökologischen Branchenstandards und versucht hier ein positives Lobbying.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '1',
                        indicatorTitle : 'Sinn und Gesellschaftliche Wirkung der Produkte / Dienstleistungen',
                        text : 'Mein Unternehmen stellt Produkte/Dienstleistungen her, die einen deutlich positiven Nutzen für die Gesellschaft (nicht primärdie Kunden) haben. 75% bis 100% der P/D decken Grundbedarf oder haben deutlich positive + nachgewiesen Auswirkungen und lösen wesentliche gesellschaftliche Probleme (Social Business).',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '2',
                        indicatorTitle : 'Beitrag zum Gemeinwesen',
                        text : 'Mein Unternehmen gibt mehr als 2,5% des Umsatzes für zusätzliches gesellschaftliches Engagement aus. Dabei haben wir eine umfassende Strategie sowie nachhaltige Wirkungen in mehreren Feldern.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '3',
                        indicatorTitle : 'Reduktion ökologischer Auswirkungen',
                        text : 'Mein Unternehmen kennt seinen ökologischen Fußabdruck und ist im Branchendurchschnitt vorbildlich. Unsere negativen ökologischen Auswirkungen sind sehr gering.',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '4',
                        indicatorTitle : 'Gemeinwohlorientierte Gewinn-Verteilung',
                        text : 'Unsere Gewinne werden zwischen Arbeitnehmern und Kapitalgebern gerecht verteilt, dienen der Erhöhung der Eigenkapitalquoteoder fließt in sozial-ökologische Investitionen (gemeinwohl-orientierte Gewinnverwendung). Es gibt keine Ausschüttung an nicht mitarbeitende Eigentümer.',
                        excludedParticipants : ['oneperson'],
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '5',
                        indicatorTitle : 'Gesellschaftliche Transparenz und Mitbestimmung',
                        text : 'Mein Unternehmen publiziert einen Gemeinwohlbericht oder einen umfassenden Nachhaltigkeitsbericht ala GRI. Darüberhinaus beziehen wir die gesellschaftlichen Berührungsgruppen bei wesentlichen Entscheidungen mit ein.'
                    }
                ]
            }
        ]
    }
};

Data.matrix = {

    valueName: 'Wert',
    stakeholdersName : 'Berührungs&#8203;gruppe',
    negativeCriteriaName : 'Negativ-Kriterien',

    values : [
        'Menschen&#8203;würde',
        'Solidarität',
        'Ökologische Nachhaltigkeit',
        'Soziale Gerechtigkeit',
        'Demokratische Mitbestimmung & Transparenz'
    ],

    stakeholders : [
        {
            shortcode : 'A',
            name: 'Lieferant&#8203;Innen',
            values: [
                {
                    shortcode : 'A1',
                    shortcodeSlug : 'a1',
                    title: 'Ethisches Beschaffungsmanagement',
                    content: 'Aktive Auseinandersetzung mit den Risiken zugekaufter Produkte / Dienstleistungen, Berücksichtigung sozialer und ökologischer Aspekte bei der Auswahl von LieferantInnen und DienstleistungsnehmerInnen.',
                    points: 90
                }
            ]
        },
        {
            shortcode : 'B',
            name: 'Geldgeber&#8203;Innen',
            values: [
                {
                    shortcode : 'B1',
                    shortcodeSlug : 'b1',
                    title: 'Ethisches Finanzmanagement',
                    content: 'Berücksichtigung sozialer und ökologischer Aspekte bei der Auswahl der Finanzdienstleistungen; gemeinwohlorienterte Veranlagung und Finanzierung',
                    points: 30
                }
            ]
        },
        {
            shortcode : 'C',
            name: 'Mitarbeiter&#8203;Innen inklusive Eigentümer&#8203;Innen',
            values: [
                {
                    shortcode : 'C1',
                    shortcodeSlug : 'c1',
                    title: 'Arbeitsplatz&#8203;qualität und Gleichstellung',
                    content: 'Mitarbeiter&#8203;orientierte Organisations-kultur und –strukturen, Faire Beschäftigungs- und Entgeltpolitik, Arbeitsschutz und Gesundheits&#8203;förderung einschließlich Work-Life-Balance/flexible Arbeitszeiten, Gleichstellung und Diversität',
                    points: 90
                },
                {
                    shortcode : 'C2',
                    shortcodeSlug : 'c2',
                    title: 'Gerechte Verteilung der Erwerbsarbeit',
                    content: 'Abbau von Überstunden, Verzicht auf All-inclusive-Verträge, Reduktion der Regelarbeitszeit, Beitrag zur Reduktion der Arbeitslosigkeit',
                    points: 50
                },
                {
                    shortcode : 'C3',
                    shortcodeSlug : 'c3',
                    title: 'Förderung ökologischen Verhaltens der Mitarbeiter&#8203;Innen',
                    content: 'Aktive Förderung eines nachhaltigen Lebensstils der MitarbeiterInnen (Mobilität, Ernährung), Weiterbildung und Bewusstsein schaffende Maßnahmen, nachhaltige Organisationskultur',
                    points: 30
                },
                {
                    shortcode : 'C4',
                    shortcodeSlug : 'c4',
                    title: 'Gerechte Verteilung des Einkommens',
                    content: 'Geringe innerbetriebliche Einkommens&#8203;spreizung (netto), Einhaltung von Mindest&#8203;einkommen und Höchst&#8203;einkommen',
                    points: 60
                },
                {
                    shortcode : 'C5',
                    shortcodeSlug : 'c5',
                    title: 'Inner&#8203;betriebliche Demokratie und Transparenz',
                    content: 'Umfassende innerbetriebliche Transparenz, Wahl der Führungskräfte durch die Mitarbeiter, konsensuale Mitbestimmung bei Grundsatz- und Rahmen&#8203;entscheidungen, Übergabe Eigentum an MitarbeiterInnen. Z.B. Soziokratie',
                    points: 90
                }
            ]
        },
        {
            shortcode : 'D',
            name: 'KundInnen / Produkte / Dienst&#8203;leistungen / Mit&#8203;unternehmen',
            values: [
                {
                    shortcode : 'D1',
                    shortcodeSlug : 'd1',
                    title: 'Ethische Kunden&#8203;beziehung',
                    content: 'Ethischer Umgang mit KundInnen, KundInnen&#8203;orientierung/ - mitbestimmung, gemeinsame Produkt&#8203;entwicklung, hohe Servicequalität, hohe Produkt&#8203;transparenz',
                    points: 50
                },
                {
                    shortcode : 'D2',
                    shortcodeSlug : 'd2',
                    title: 'Solidarität mit Mit&#8203;unternehmen',
                    content: 'Weitergabe von Information, Know-how, Arbeitskräften, Aufträgen, zinsfreien Krediten; Beteiligung an kooperativem Marketing und kooperativer Krisenbewältigung',
                    points: 70
                },
                {
                    shortcode : 'D3',
                    shortcodeSlug : 'd3',
                    title: 'Ökologische Gestaltung der Produkte und Dienst&#8203;leistungen',
                    content: 'Angebot ökologisch höherwertiger Produkte / Dienstleistungen; Bewusstsein schaffende Maßnahmen; Berücksichtigung ökologischer Aspekte bei der KundInnenwahl',
                    points: 90
                },
                {
                    shortcode : 'D4',
                    shortcodeSlug : 'd4',
                    title: 'Soziale Gestaltung der Produkte und Dienst&#8203;leistungen',
                    content: 'Informationen / Produkten / Dienstleistungen für benachteiligte KundInnen-Gruppen. Unterstützung förderungs&#8203;würdiger Marktstrukturen.',
                    points: 30
                },
                {
                    shortcode : 'D5',
                    shortcodeSlug : 'd5',
                    title: 'Erhöhung der sozialen und ökologischen Branchen&#8203;standards',
                    content: 'Vorbildwirkung, Entwicklung von höheren Standards mit MitbewerberInnen, Lobbying',
                    points: 30
                }
            ]
        },
        {
            shortcode : 'E',
            name: 'Gesell&#8203;schaftliches Umfeld:',
            explanation: 'Region, Souverän, zukünftige Generationen, Zivil&#8203;gesellschaft, Mitmenschen und Natur',
            values: [
                {
                    shortcode : 'E1',
                    shortcodeSlug : 'e1',
                    title: 'Sinn und Gesell&#8203;schaftliche Wirkung der Produkte / Dienst&#8203;leistungen',
                    content: 'P/DL decken den Grundbedarf oder dienen der Entwicklung der Menschen / der Gemeinschaft / der Erde und generieren positiven Nutzen.',
                    points: 50
                },
                {
                    shortcode : 'E2',
                    shortcodeSlug : 'e2',
                    title: 'Beitrag zum Gemeinwesen',
                    content: 'Gegenseitige Unterstützung und Kooperation durch Finanzmittel, Dienstleistungen, Produkte, Logistik, Zeit, Know-How, Wissen, Kontakte, Einfluss',
                    points: 40
                },
                {
                    shortcode : 'E3',
                    shortcodeSlug : 'e3',
                    title: 'Reduktion ökologischer Auswirkungen',
                    content: 'Reduktion der Umwelt&#8203;auswirkungen auf ein zukunftsfähiges Niveau: Ressourcen, Energie & Klima, Emissionen, Abfälle etc.',
                    points: 70
                },
                {
                    shortcode : 'E4',
                    shortcodeSlug : 'e4',
                    title: 'Gemeinwohl&#8203;orientierte Gewinn-Verteilung',
                    content: 'Sinkende / keine Gewinn&#8203;ausschüttung an Externe, Ausschüttung an Mitarbeiter, Stärkung des Eigenkapitals, sozial-ökologische Investitionen',
                    points: 60
                },
                {
                    shortcode : 'E5',
                    shortcodeSlug : 'e5',
                    title: 'Gesellschaft&#8203;liche Transparenz und Mitbestimmung',
                    content: 'Gemeinwohl- oder Nachhaltigkeits&#8203;bericht, Mitbestimmung von regionalen und zivilgesell&#8203;schaftlichen Berührungs&#8203;gruppen',
                    points: 30
                }
            ]
        }
    ],

    negativeCriteria : [
        {
            values: [
                {
                    shortcode : 'N1',
                    shortcodeSlug : 'n1',
                    titleShort: 'Verletzung der ILO-Arbeitsnormen / Menschenrechte',
                    points: -200
                },
                {
                    shortcode : 'N2',
                    shortcodeSlug : 'n2',
                    titleShort: 'Menschen&#8203;unwürdige Produkte, z.B. Tretminen, Atomstrom, GMO',
                    title: 'Menschenunwürdige Produkte und Dienstleistungen',
                    points: -200
                },
                {
                    shortcode : 'N3',
                    shortcodeSlug : 'n3',
                    titleShort: 'Beschaffung bei / Kooperation mit Unternehmen, welche die Menschenwürde verletzen',
                    title: 'Menschenunwürdige Produkte und Dienstbeschaffung bei bzt. Kooperation mit Unternehmen, welche die Menschenwürde verletzen',
                    points: -150
                }
            ]
        },
        {
            values: [
                {
                    shortcode : 'N4',
                    shortcodeSlug : 'n4',
                    titleShort: 'Feindliche Übernahme',
                    title: 'Feindliche Übernahme',
                    points: -200
                },
                {
                    shortcode : 'N5',
                    shortcodeSlug : 'n5',
                    titleShort: 'Sperrpatente',
                    title: 'Sperrpatente',
                    points: -100
                },
                {
                    shortcode : 'N6',
                    shortcodeSlug : 'n6',
                    titleShort: 'Dumping&#8203;preise',
                    title: 'Dumpingpreise',
                    points: -200
                }
            ]
        },
        {
            values: [
                {
                    shortcode : 'N7',
                    shortcodeSlug : 'n7',
                    titleShort: 'Illegitime Umweltbelastungen',
                    title: 'Illegitime Umweltbelastungen',
                    points: -200
                },
                {
                    shortcode : 'N8',
                    shortcodeSlug : 'n8',
                    titleShort: 'Verstöße gegen Umweltauflagen',
                    title: 'Verstöße gegen Umweltauflagen',
                    points: -200
                },
                {
                    shortcode : 'N9',
                    shortcodeSlug : 'n9',
                    titleShort: 'Geplante Obsoleszenz (kurze Lebensdauer der Produkte)',
                    title: 'Geplante Obsoleszenz',
                    points: -100
                }
            ]
        },
        {
            values: [
                {
                    shortcode : 'N10',
                    shortcodeSlug : 'n10',
                    titleShort: 'Arbeits&#8203;rechtliches Fehlverhalten seitens des Unternehmens',
                    title: 'Arbeitsrechtliches Fehlverhalten seitens des Unternehmens',
                    points: -200
                },
                {
                    shortcode : 'N11',
                    shortcodeSlug : 'n11',
                    titleShort: 'Arbeitsplatz&#8203;abbau oder Standortverlagerung bei Gewinn',
                    title: 'Arbeitsplatzabbau oder Standortverlagerung trotz Gewinn',
                    points: -150
                },
                {
                    shortcode : 'N12',
                    shortcodeSlug : 'n12',
                    titleShort: 'Umgehung der Steuerpflicht',
                    title: 'Arbeitsplatzabbau oder Standortverlagerung trotz Gewinn',
                    points: -200
                },
                {
                    shortcode : 'N13',
                    shortcodeSlug : 'n13',
                    titleShort: 'Keine unangemessene Verzinsung für nicht mitarbeitende Gesellschafter',
                    title: 'Keine unangemessene Verzinsung für nicht mitarbeitende Gesellschafter',
                    points: -200
                }
            ]
        },
        {
            values: [
                {
                    shortcode : 'N14',
                    shortcodeSlug : 'n14',
                    titleShort: 'Nicht&#8203;offenlegung aller Beteiligungen und Töchter',
                    title: 'Nichtoffenlegung aller Beteiligungen und Töchter',
                    points: -100
                },
                {
                    shortcode : 'N15',
                    shortcodeSlug : 'n15',
                    titleShort: 'Verhinderung eines Betriebsrats',
                    title: 'Verhinderung eines Betriebsrats',
                    points: -150
                },
                {
                    shortcode : 'N16',
                    shortcodeSlug : 'n16',
                    titleShort: 'Nicht&#8203;offenlegung aller Finanzflüsse an Lobbies / Eintragung in das EU-Lobbyregister',
                    title: 'Nichtoffenlegung aller Finanzflüsse an Lobbyisten und Lobby-Organisationen / Nichteintragung ins Lobby-Register der EU',
                    points: -200
                },
                {
                    shortcode : 'N17',
                    shortcodeSlug : 'n17',
                    titleShort: 'Exzessive Einkommensspreizung',
                    title: 'Exzessive Einkommensspreizung',
                    points: -100
                }
            ]
        }
    ]
};

Data.indicators = {

    structure : {
        goals : 'Ziele',
        impulsQuestions : 'Impulsfragen',
        table : 'Bewertungstabelle',
        evaluationDetails : 'Besonderheiten bei der Bewertung',
        definition : 'Definitionen und Hintergrund',
        implementationHelp : 'Umsetzunghilfen',
        moreinfo : 'Mehr Info',

        subindicator : 'Sub-Indikator',
        levels : {
            beginner: {
                title: 'Erste Schritte',
                min: '0',
                max: '10'
            },
            advanced: {
                title: 'Fortgeschritten',
                min: '11',
                max: '30'
            },
            experienced: {
                title: 'Erfahren',
                min: '31',
                max: '60'
            },
            model: {
                title: 'Vorbildlich',
                min: '61',
                max: '100'
            }
        },
        relevance : 'Relevanz',
        relevances : {
            'low': 'niedrig',
            'middle': 'mittel',
            'high': 'hoch'
        }
    },

    data : {
        indicators : [
            {
                shortcode : 'A1',
                shortcodeSlug : 'a1',
                points: 90,
                name: 'Ethisches Beschaffungswesen',
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Regionale, ökologische und soziale Aspekte/höherwertiger Alternativen werden … berücksichtigt',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '… punktuell bei Produkten mit negativen sozialen und/oder ökologischen Auswirkungen'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '… bei einigen wesentlichen P/D'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '… bei einem Großteil an wesentlichen P/D …<br/><br/>+ im Vergleich sehr geringer Verbrauch bzw. klare Reduktion bei kritischen Stoffe ohne höherwertige Alternative (siehe FAQ)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '… allen wesentlichen,  zugekauften P/D …<br/><br/>+ innovative Lösungen zur Vermeidung kritischer Stoffe ohne höherwertige Alternative'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Aktive Auseinandersetzung mit den Auswirkungen zugekaufter P/D und Prozesse zur Sicherstellung sowie Ausmaß und Form der Nachweisführung',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Interne Auseinandersetzung durch aktives Einholen von Informationen zu der Thematik Integration sozialer und ökologischer Aspekte in das Vertragswesen (Code ofConduct/Ethik-Kodex)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Internes Audit bei Risiken und wichtigsten Lieferanten<br/><br/>Schulungen (Seminare, Workshops, Zeitbudgets für ExpertInnengespräche) aller Mitarbeiter im Einkaufsprozess'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Regelmäßige Evaluierung sozialer/ökologischer Auswirkungen und Alternativen<br/><br/>Sicherstellung durch unabhängiges Audit (z.B.: nach soz./ökol. Gütesiegeln zertifizierte P/D, Kooperation mit NGOs)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Multi-Stakeholder-Initiative (z.B.: mit Marktpartnern, NGOs etc.) hinsichtlich sozialer und ökologischer Aspekte'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Strukturelle Rahmenbedingungen zur fairen Preisbildung',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Verzicht auf rein preisgetriebene Beschaffungsprozesse (u.a. Auktionen, Ausschreibungs-verfahren)<br/><br/>Kein vom Einkaufspreis abhängiges Bonussystem für Einkäufer'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Langfristige, kooperative Beziehung werden wechselnden, kostenorientierten vorgezogen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Evaluierung des Verhaltens der Einkäufer durch regelmäßige Mitarbeitergespräche mit Fokus auf die Herausforderungen, die sich durch eine ethische Beschaffung ergeben'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Innovative Strukturen im Beschaffungswesen (z.B.: Partizipation an Alternativwährungskonzepten, ökonomische Ansätze der Solidarischen Landwirtschaft etc.)'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'B1',
                shortcodeSlug : 'b1',
                points: 30,
                name: 'Ethisches Finanzmanagement',
                goals : {},
                impulsQuestions : {},

                table : {
                    subindicators : [
                        {
                            title : 'Institutionalisierung',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Verankerung des ethischen Finanz-managements im Unternehmensleitbild'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung des ethischen Finanzmanagements in einzelnen Unternehmensaktivitäten<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn1" title="" class="external-link" rel="nofollow">[1]</a>'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Umsetzung des ethischen Finanzmanagements in einer Vielzahl von Unternehmensaktivitäten'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Umsetzung des ethischen Finanzmanagements in allen Unternehmensaktivitäten'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Ethisch-nachhaltige Qualität des Finanzdienstleisters',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Konventionelle Bank mit eigenen ethisch-nachhaltigen Finanzprodukten (&lt; 5 % am Kredit- bzw. Sparvolumen) Keine Involvierung in kritische Projekte<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn2" title="" class="external-link" rel="nofollow">[2]</a>'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Konventionelle Bank mit einer breiten Palette ethischer Finanzprodukte (>5 % am Kredit- bzw. Sparvolumen)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Mehrheitlich auf ethisch-nachhaltige Finanzdienstleistungen spezialisierte Bank'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Ausschließlich ethisch-nachhaltiger Finanzdienstleister'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Gemeinwohlorientierte Veranlagung<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn3" title="" class="external-link" rel="nofollow">[3]</a>',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Teilweise Veranlagung in ethisch-nachhaltige Projekte, jedoch <u>nicht</u> nach dem Best-in-Class-Ansatz'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '<p align="center">Mehrheitliche Veranlagung in ethisch-nachhaltige Projekte<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn4" title="" class="external-link" rel="nofollow">[4]</a></p><p align="center">Negativkriterien</p><p align="center">+ Verwendung von Kapitalerträgen für soziale/ökologische Investitionen</p>'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '<p align="center">Ausschließliche Veranlagung in ethisch-nachhaltige Projekte</p><p align="center">Negativkriterien</p><p align="center">+ teilweiser Zins- und/oder&nbsp; &nbsp;Dividendenverzicht bei Veranlagungen</p>'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '<p align="center">Ausschließliche Veranlagung in ethisch-nachhaltige Projekte</p><p align="center">Shareholder Advocacy</p><p align="center">+ vollständiger Zins- und/oder Dividendenverzicht im Fall von Veranlagungen</p>'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Gemeinwohlorientierte Unternehmens-finanzierung',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Keine Eigenkapitalfinanzierung über Kapitalgeber ohne Mitarbeit im Unternehmen<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn5" title="" class="external-link" rel="nofollow">[5]</a>'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Versuch der Finanzierung über Berührungsgruppen<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn6" title="" class="external-link" rel="nofollow">[6]</a> oder aus Bankkredit aus nicht gewinn-ausschüttender Bank',
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Erfolgreicher Beginn der Finanzierung über Berührungsgruppen oder aus Bankkrediten, die zu teilverzichteten Zinsen führen'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Zinsfreie Finanzierung überwiegend mithilfe von Berührungsgruppen oder Bankkrediten, die zu keinen Sparzinsen mehr führen'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            /* ----------------------------------- C1 ----------------------------------- */
            {
                shortcode : 'C1',
                shortcodeSlug : 'c1',
                points: 90,
                name: 'Arbeitsplatzqualität und Gleichstellung',
                goals : {},
                impulsQuestions : {},
                table : {
                    legend : [
                        {
                            short : 'AN',
                            long : 'ArbeitnehmerInnen'
                        },
                        {
                            short : 'BFG',
                            long : 'betriebliche Gesundheitsförderung'
                        },
                        {
                            short : 'BR',
                            long : 'Betriebsrat'
                        },
                        {
                            short : 'FK',
                            long : 'Führungskräfte'
                        },
                        {
                            short : 'GF',
                            long : 'Geschäftsführung'
                        },
                        {
                            short : 'MA',
                            long : 'MitarbeiterInnen'
                        }
                    ],
                    subindicators : [
                        {
                            title : 'Mitarbeiterorientierte Organisationskultur und -strukturen<sup>1</sup>',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Maßnahmen; planung weiterer Maßnahmen (ideal: Einbettung in ein Gesamtkonzept) mit konkretem Umsetzungsplan'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung der Gesamtmaßnahmen; deutliche Maßnahmen zur Anpassung von Strukturen, prozessen und Haltung der Fk'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Gesamtmaßnahmen sind etabliert und werden in Umsetzung und Wirkung evaluiert; Evaluationsergebnisse werden eingearbeitet und umgesetzt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Durch Evaluation abgesichertes Gesamtkonzept ist vollständig umgesetzt und strukturell verankert, alle Fk leben eine MA-orientierte Organisationskultur'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Faire Beschäftigungs- und Entgeltpolitik',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'prekäre Beschäftigungsverhältnisse bestehen nur bei nachweislicher betrieblicher Notwendigkeitvorausschauende, transparente Personalplanung in Abstimmung mit BR'
                                        },
                                        {
                                            levels : ['advanced', 'experienced'],
                                            description : 'Die Möglichkeit einer für den/die AN besseren Vertragsform wird geprüft (interne Prüfroutine) und es gibt ein umgesetztes Konzept zur nachhaltig positiven Arbeitsplatzgestaltung für Arbeitskräfte in kurzzeitverträgen Gesamtkonzept zur Integration aller Beschäftigtengruppen im Unternehmen (z.B. gleiche Rechte auf freiwillige betriebliche Sozialleis-tungen und Förderungen, Abstimmung von Abläufen, Terminen, kommunikationswegen)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'nachhaltige Beschäftigungsangebote/-perspektiven für alle MA, z.B. durch überbetriebliche Kooperationen Chancengleichheit bezüglich Möglichkeiten zur aktiven Teilhabe, Rechte auf unternehmensinterne Sozialleistungen etc.'
                                        }
                                    ]
                                },
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner', 'advanced', 'experienced'],
                                            description : 'Transparentes, verbindliches Gehaltsschema, das im Unternehmen unter Einbeziehung der MitarbeiterInnen (oder deren VertreterInnen) festgelegt wird'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Gehalt wird von den MA als fair empfunden und sichert ein gutes Leben'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Arbeitsschutz und Gesundheitsförderung einschließlich Work-life-Balance/flexible Arbeitszeiten',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erstellung eines Gesamtkonzepts zur BGF inkl. Umsetzungsplan. Verfügbarkeit von flexiblen Arbeitszeiten und Teilzeitmodellen zur Unterstützung einer gesunden Work-Life-Balance der MA Ergonomische Arbeitsplätze, Erfüllung des Arbeitsschutzes'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung des Gesamtkonzepts zur BGF in wesentlichen Teilen (zu mind. 50%) MA können konkrete Angebote wahrnehmen, Inanspruchnahme flexibler Arbeitszeiten und Teilzeitmodelle, die zur Unterstützung der Work-Life-Balance der MA beitragen können, für mind. 50 % der MA möglich'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Umsetzung des Gesamtkonzepts zur BGF bis zu 75 %,und Einführung von Qualitätssicherungsmaßnahmen; MA können vielfältige und innovative Angebote wahrnehmen. Flexible Arbeitszeiten und Teilzeitmodelle für alle MA möglich und strukturell unterstützt, Homeoffice wird nach Möglichkeit unterstützt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'BGF ist vollständig im Unternehmen verankert und in die Strukturen und Abläufe des Unternehmens integriert; Führungskräfte agieren als Multiplikatoren. Die unterschiedlichen Arbeitszeitangebote sind strukturell integriert und kulturell akzeptiert, die organisationsweite Nutzung (auch in hierarchisch höheren positionen, auch bei Männern) wird unterstützt'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Gleichstellung und Diversität',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erhebung qualitativer und quantitativer Informationen im Hinblick auf Diversität und Ableitung von Zielsetzungen zur Förderung von Gleichstellung und Diversität. Beschäftigungsquote<sup>2</sup>*: Gesetzliche Teilerfüllung von mind. 75 %. Aktive Berücksichtigung von Gleichstellung und Diversität bei jeder Stellenbesetzung'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Gesamtkonzept zur Verankerung von Diversität und Gleichstellung im Unternehmen (inkl. konkretem Umsetzungsplan) ist vorhanden Gesetzliche Quote wird zu 100 % erfüllt, Keine Ausgleichszahlungen Angepasste perso-nalsuche und Stellenbesetzung (unterrepräsentierte Gruppen werden bevorzugt)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Gesamtkonzept zur Verankerung von Diversität und Gleichstellung im Unternehmen ist in wesentlichen Teilen umgesetzt. Kompetenz und Motivation von Fk hinsichtlich Diversität und Gleichstellung wird gezielt und nachdrücklich gefördert<sup>3</sup>*. Anzahl der diversen MA (auch in Fach- und Führungspositionen) liegt über dem Branchendurchschnitt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Gesamtkonzept zu 100 % umgesetzt, d.h. es ist strukturell in allen Organisationsbereichen verankert und wird von allen Fk mitgetragen und gelebt Anzahl der diversen MA (auch in Fach- und Führungspositionen) liegt weit über der Branchendurchschnitt'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            /* ----------------------------------- C2 ----------------------------------- */
            {
                shortcode : 'C2',
                shortcodeSlug : 'c2',
                name: 'Gerechte Verteilung der Erwerbsarbeit',
                points: 50,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Senkung der Normalarbeitszeit',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Anteil von Verträgen mit Überstundenpauschale um 50%;<br/><br/> im Jahresschnitt maximal 10 Überstunden pro BeschäftigteR/Monat.<br/><br/> Erste Neueinstellungen aufgrund des Abbaus von Überstunden'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Anteil von Verträgen mit Überstundenpauschale um 75%;<br/><br/> im Jahresschnitt maximal 5 Überstunden pro BeschäftigteR/Monat<br/><br/> Neueinstellungen äquivalent zum Abbau von Überstunden'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Keine Verträge mit Überstundenpauschale mehr;<br/><br/> keine Überstunden im Jahresschnitt je BeschäftigteR<br/><br/> Neueinstellungen äquivalent zum Abbau von Überstunden'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Die durchschnittliche Arbeitszeit je Beschäftigtem ist um 10% niedriger als die Branchenarbeitszeit oder maximal 38,5 Stunden<br/><br/>Neueinstellungen aufgrund allgemeiner Arbeitszeitverkürzung'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Erhöhung des Anteils der Teilzeit-Arbeitsmodelle (bei adäquater Bezahlung)',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'bis 10% der Mit-arbeiterInnen können Teilzeit in Anspruch nehmen<br/><br/>Zeitarbeit nur bei gleichwertiger Bezahlung Anteil <10% aller Mitarbeiter<br/><br/>längstens ein Jahr'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'bis 25% der Mit-arbeiterInnen können Teilzeit in Anspruch nehmen<br/><br/>Zeitarbeit nur bei gleichwertiger Bezahlung Anteil <5% aller Mitarbeiter<br/><br/>längstens ein Jahr'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'bis 50% der Mit-arbeiterInnen können Teilzeit in Anspruch nehmen<br/><br/>Zeitarbeit nur bei gleichwertiger Bezahlung Anteil < 2,5% aller Mitarbeiter<br/><br/>längstens ein halbes Jahr'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'mehr als 50% der MitarbeiterInnen können Teilzeit in Anspruch nehmen<br/><br/>Zeitarbeit nur bei gleichwertiger Bezahlung und betriebsbedingter Begründung<br/><br/>längstens ein halbes Jahr'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Bewusster Umgang mit (Lebens-) Arbeitszeit',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Regelmäßiges Aus- und Weiterbildungsangebot in Selbst- und Zeitmanagement'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Regelmäßige Mitarbeiterbefragung zu “optimaler” Arbeitszeit und Arbeits(zeit)modellen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '4-Tage Woche (bei vollem Lohnausgleich) auf begründete Anfrage möglich'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'MitarbeiterInnen bestimmen eigenverantwortlich ihre Arbeitszeit(-modelle)'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'C3',
                shortcodeSlug : 'c3',
                name: 'Forderung und Förderung ökologischen Verhaltens der MitarbeiterInnen',
                points: 30,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Ernährung während der Arbeitszeit',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Ansätze zur Förderung nachhaltiger Ernährungsmuster (z.B.: Angebot einer vegetarischen Option bzw. Vergünstigungen in biologischen Restaurants)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Klares Bekenntnis im Unternehmen zu nachhaltigen Ernährungsgewohnheiten (deutlich reduzierter Konsum tierischer Produkte in der Betriebskantine)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Ernährung mehrheitlich vegetarisch/vegan<br/><br/>+ Lebensmittel vorwiegend lokal, saisonal und biologisch zertifiziert<br/><br/>+ Fleisch aus lokaler Weidehaltung'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Ernährung überwiegend vegetarisch/vegan<br/><br/>+ Lebensmittel vorwiegend lokal, saisonal, biologisch zertifiziert, wenn möglich aus Community Supported Agriculture (CSA)<br/><br/>+ Fleisch aus lokaler Weidehaltung'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Mobilität zum Arbeitsplatz',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Ansätze einer nachhaltigen Mobilitätspolitik (z.B.: finanzielle Anreizsysteme für die Benutzung ÖPNV; festgeschriebene Dienstwagenpolitik: <130 g CO²/km, Trainings für treibstoffsparendes Fahren)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Konsequente nachhaltige Mobilitätspolitik: (z.B.: wenn keine ÖPNV verfügbar: aktives Car-Sharing-Angebot; Mitarbeiter-Parkplätze nur für Car Sharing, Erreichbarkeit bei Standortwahl wesentliches Entscheidungskriterium, Bereitstellung von Dienstfahrrädern), Partizipation bei externen Fahrradinitiativen<a href="#_edn1" title="" rel="nofollow">[i]</a>'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Durch betriebsinterne Anreizpolitik benutzt die Mehrheit der MitarbeiterInnen ÖPNV/Bus/Zug/Rad/Car Sharing, Teleworking optional'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Durch betriebsinterne Anreizpolitik benutzen nahezu alle MitarbeiterInnen ÖPNV/ Rad/Car Sharing oder Teleworking optional'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Organisationskultur, Sensibilisierung und unternehmensinterne Prozesse',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Punktuelle Thematisierung ökologischer Aspekte (z.B.: Newsletter etc.)<br/><br/>Geschäftsführung lebt ökologisches Verhalten vor (z.B.: kein prestigeträchtiger Dienstwagen bzw. Ausnahmeregelungen wie z.B häufige Flugreisen)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Punktuelle Integration ökologischer Aspekte in Weiterbildungsprogramme<br/><br/>Mitarbeiter werden in ökologische Belange einbezogen (regelmäßige Thematisierung, Info-Veranstaltungen Hinweisschilder in Büroräumlichkeiten  etc.)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Regelmäßige Integration ökologischer Aspekte in Weiterbildungsprogramme<br/><br/>Mitarbeiter werden regelmäßig in ökol. Entscheidungsprozesse einbezogen (z.B.: ökologisches Vorschlagswesen, Budgettopf für externe ökologische Projekte)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Institutionalisierte Awarenessprogramme für jeden Mitarbeiter (z.B.: regelmäßige Erhebung zum/Thematisierung des ökologischen Verhaltens; Footprint-Workshops), Innovative Ansätze: z.B.: „grüne Sozialleistungen“'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'C4',
                shortcodeSlug : 'c4',
                name: 'Gerechte Einkommensverteilung',
                points: 60,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Innerbetriebliche Bruttoeinkommens-spreizung in Unternehmen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Spreizung max:<br/><br/>Bis 20 MA: 1:8<br/><br/>20 bis 200 MA: 1:10<br/><br/>Über 200 MA: 1:12'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Spreizung max:<br/><br/>Bis 20 MA: 1:5<br/><br/>20 bis 200 MA: 1:7<br/><br/>Über 200 MA: 1:9'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Spreizung max:<br/><br/>Bis 20 MA: 1:4<br/><br/>20 bis 200 MA: 1:5<br/><br/>Über 200 MA: 1:6'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Spreizung max:<br/><br/>Bis 20 MA:  1:2<br/><br/>20 bis 200 MA: 1:3<br/><br/>Über 200 MA: 1:4'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Mindesteinkommen',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner', 'advanced', 'experienced', 'model'],
                                            description : 'Die Mindesteinkommen müssen bezogen auf die Lebenserhaltungskosten eines Landes und einer Region auskömmlich sein (living wages). Als Richtwerte gelten für Österreich und Deutschland € 1.330 (netto)<a href="#_ftn9" title="" rel="nofollow">[9]</a> und in der Schweiz CHF 3.500 (netto)<a href="#_ftn10" title="" rel="nofollow">[10]</a>.'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Transparenz und Institutionalisierung',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Innerbetriebliche Transparenz der 10 niedrigsten und 10 höchsten Einkommen'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Living Wages an allen Standorten; zusätzlich öffentliche Transparenz anhand statistischer Ungleichverteilungsmaße<a href="#_ftn11" title="" rel="nofollow">[11]</a>'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Verbindliche Festlegung einer Maximalspreizung in Richtung vorbildlich (siehe oben)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Umsetzung aller Ziele, gemeinsame Festlegung der Gehälter durch die Beschäftigten (siehe Best-Practise-Beispiele),<br/><br/>Veröffentlichung aller Gehälter'
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'C5',
                shortcodeSlug : 'c5',
                name: 'Innerbetriebliche Transparenz und Demokratie',
                points: 90,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Grad der Transparenz',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Maßnahmen zu mehr Transparenz'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Einige kritische Daten*1 transparent'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Wesentliche kritische Daten transparent'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Alle Daten trans-parent, für jeden Mitarbeiter abrufbar'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Legitimierung der Führungskräfte',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Anhörung/ Konsultation bei Bestellung neuer FK'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Vetorecht bei der Bestellung neuer FK, in einer Testphase*2 bis zu 25% gewählt'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '25-75%  der FK regelmäßig gewählt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '76-100% der FK regelmäßig gewählt'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Mitbestimmung bei Grundsatz- und Rahmen- Entscheidungen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Anhörung/ Konsulta-tion + Begründung, Konzept demokrat. Mitbestimmung vorhanden'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Testphase, - 25% der Entscheidungen  demokratisch, teilweise konsensual, inkl. Gewinn'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '25-75% der Entsch. demokratisch, davon mind. 25% konsensual, inkl. Gewinn'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '76-100% der Entsch. demokratisch, davon mind. 50% konsensual, inkl.. Gewinn'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Mit-Eigentum der MitarbeiterInnen',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Gesamtkonzept und Selbst-Verpflichtung der bisherigen Eigentümer, erste Maßnahmen in die Richtung'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Mitarbeiter halten bis zu 25% des Eigentums'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Mitarbeiter halten bis 25,1-75% des Eigentums'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Mitarbeiter halten bis 76-100% des Eigentums'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'D1',
                shortcodeSlug : 'd1',
                name: 'Ethische Kundenbeziehung',
                points: 50,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Gesamtheit der Maßnahmen für eine ethische Kundenbeziehung (ethisches Marketing + Verkauf)',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Gesamtkonzept für ethische Kundenbeziehung und Selbstverpflichtung der Geschäftsführung'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung des Gesamtkonzeptes zu mind. 50 %, deutliche Maßnahmen zur Änderung von Strukturen, Prozessen und Haltung der Mitarbeiter, Gehalt unabhängig von Verkaufszahlen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Umsetzung des Gesamtkonzeptes bis zu 75 %, umfangreiche Maßnahmen zur Änderung von Strukturen, Prozessen und Haltung der MA'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Gesamtkonzept 100%ig umgesetzt und strukturell verankert, alle MA leben die Haltung der ethischen Kundenbeziehung'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Umfang der KundInnen-Mit­bestimmung/gemeinsame Produktentwicklung/Markt-forschung',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Maßnahmen zum Beirat angedacht, + Pilotprojekte gemeinsame Produktentwicklung'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Beirat vorhanden, Transparenz der Ergebnisse + bis 25 % der Produkte gemeinsame Produktentwicklung'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Beirat = Umsetzung der Empfehlungen bis 50 % + bis 50 % gemeinsame Produktentwicklung'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Beirat Umsetzung bis 75 %, mind. monatliche Treffen + bis 75 % gemeinsame Produktentwicklung'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Service-Management ',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Gesamtkonzept für Service-Management + Testphase, mind. Hotline'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Beschwerde­stelle vorhanden, einfaches Reklameprozedere'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '+ umfassende Servicemaßnahmen'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '+ Sanktionsmaß-nahmen bei Beschwerden + trans-parentes Reporting'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Produkttransparenz[1]',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Konzept zur Verbesserung der Produkttransparenz'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Produkttransparenz über dem Branchendurch-schnitt <br/><br/>Preiskalkulation transparent'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Produkttransparenz weit über dem Branchendurchschnitt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '+ Verknüpfung GWÖ-Bericht'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'D2',
                shortcodeSlug : 'd2',
                name: 'Solidarität mit Mitunternehmen',
                points: 70,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Offenlegung von Informationen + Weitergabe von Technologie',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Offenlegung finanzieller und technischer Information'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umfassende Offenlegung von Kostenkalkulation, Bezugsquellen und Technologie'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Zusätzlich: Kostenlose Weitergabe einzelner Technologien'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Vollständige Transparenz und Open-Source-Prinzip'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Weitergabe von Arbeitskräften, Aufträgen und Finanzmitteln; kooperative Marktteilnahme',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Kooperation nur auf Anfrage'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Kooperation in Randbereichen des Geschäfts'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Kooperation im gesamten Geschäftsbereich'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Kooperation im gesamten Geschäftsbereich + Beteiligung an kooperativer Marktteilnahme'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Kooperatives Marketing ',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Verzicht auf Diskreditierung der Konkurrenz'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Verzicht auf massenmediale Werbung (TV, Radio, Plakate)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Mitaufbau eines gemeinsamen Produktinformationssystems (PIS)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Mittragen der Brancheninitiative für ethisch-kooperatives Marketing'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'D3',
                shortcodeSlug : 'd3',
                name: 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                points: 90,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Produkte / Dienstleistungen sind im ökol. Vergleich zu Produkt / Dienstleistungen von MitwerberInnen bzw. Alternativen  von gleichem Nutzen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'sind durch einen im Vergleich  geringeren ökologischen Fußabdruck bzw. durch erste Ansätze einer überdurchschnittlichen, ökol. Gestaltung gekennzeichnet'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Das Unternehmen verfügt über eine klare, nachvollziehbare Strategie und erkennbare Maßnahmen zur Ökologisierung der Produkte / Dienstleistungen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'P / D weit über Branchendurchschnitt (z.B.: BAT = Best Available Technology)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'P / D branchenführend (z.B.: Cradle-to-Cradle)'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'SUFFIZIENZ (siehe Exkurs weiter unten): Aktive Gestaltung für eine ökol. Nutzung und suffizienten Konsum',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Das Unternehmen setzt sich mit nicht-suffizienten / potentiell schädlichen Anwendungsgebieten seiner P / D[3] aktiv auseinander (z.B.: interne Analyse der eigenen Produkte / Dienstleistungen)<br/><br/>Produkte sind nicht widersprüchlich zu einem suffizienten Lebensstil'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Erste Maßnahmen für suffiziente Lebensstile (Anwendung von Ausschlusskriterien, P/D für ökologisch orientierte Absatzmärkte)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Das Unternehmen fördert eine nachhaltige Nutzung aktiv durch bessere Konditionen und Services (z.B.:  (Preisvorteile, Anreizsysteme, längere Gewährleistung, kostengünstige Reparatur)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Umfassende Förderung eines ökologisch suffizienten Kundenverhaltens: (Preisvorteile &  Anreizsysteme Reparatur, Wiederverwendung und gemeinschaftliche Nutzung wesentlicher Bestandteil des Geschäftsmodells)'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'KOMMUNIKATION: Aktive Kommunikation ökologischer Aspekte den KundInnen gegenüber',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Das Unternehmen weist aktiv auf höherwertige Alternativen (auch bei MitwerberInnen) hin<br/><br/>Die in der Kommunikation dargestellten ökologischen Aspekte  sind nicht irreführend (siehe Green-Washing)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Explizite und umfassende Informationen über die ökologischen und Lebensstil-Aspekte der P / D hin'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Von Kunden wird aktiv -Feedback zu ökologischen und Lebensstil-Aspekten eingeholt (z.B.: Nutzungsverhalten, Verbesserungs-potentiale, etc. )'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Ökologische und Lebensstil-Aspekte wesentlicher Inhalt der KundInnen-beziehungen'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'D4',
                shortcodeSlug : 'd4',
                name: 'Soziale Gestaltung der Produkte und Dienstleistungen',
                points: 30,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Erleichterter Zugang zu Informationen/ Produkten/ Dienstleistungen für benachteiligte KundInnen-Gruppen*',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Das Unternehmen hat die relevanten benachteiligten KundInnen-Gruppen identifiziert und Informationszugang für die relevantesten Gruppen besteht'
                                        },
                                        {
                                            levels : ['advanced', 'experienced', 'model'],
                                            description : '<ul><li><span>Vertrieb ist geschult in Umgang/Lösungen für die relevantesten KundInnen-Gruppen und es werden angemessene Ressourcen für Betreuung zur Verfügung gestellt&nbsp;</span></li><li><span>Lösungen für die größten Barrieren für die relevantesten KundInnen-Gruppen bestehen und werden eingesetzt (zum Beispiel gibt es eine soziale Preisstaffelung oder adäquate Zugangserleichterungen für die KundInnen-Gruppe der einkommensschwachen Haushalte)</span></li><li><span>bestehende P/D werden speziell für Anforderungen der relevantesten KundInnen-Gruppen angepasst</span></li></ul>'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Förderungswürdige Strukturen** werden durch Vertriebspolitik unterstützt',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'KundInnen aus förderungswürdigen Strukturen erhalten relativ gleichwertige Konditionen und Serviceleistungen wie Großunternehmen / Großabnehmer'
                                        },
                                        {
                                            levels : ['advanced', 'experienced', 'model'],
                                            description : '+ spezielle Servicemaßnahme(n) unterstützen diese KundInnen<br/><br/>+ spezielle Kondition(en) unterstützen diese KundInnen + sonstige Maßnahme(n) unterstützen diese KundInnen'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'D5',
                shortcodeSlug : 'd5',
                name: 'Erhöhung der sozialen und ökologischen Branchenstandards',
                points: 30,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Kooperation mit MitwerberInnen und Partnern der Wertschöpfungs-kette',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Pilotprojekte zur gemeinsamen Entwicklung höherer Standards mit Marktpartnern (z.B.: F&E-Kooperation)<br/><br/>Keine wesentlichen Konflikte mit Zivilgesellschaft bezügl. der Standards<br/><br/>Aktive Kommunikation höherer Standards nach Außen (z.B.: Webseite)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Regelmäßige, etablierte Mechanismen zur gemeinsamen Entwicklung höherer Standards<br/><br/>Höhere Standards wesentlicher Bestandteil der Kommunikationspolitik des Unternehmens'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Selbstverpflichtung auf Branchenebene'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Sicherstellung und Überprüfbarkeit der höheren Standards  (z.B.: externe Audits und unabhängige Kontrollen; Kooperation mit NGOs)'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Aktiver Beitrag zur Erhöhung legislativer Standards',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Transparente Offenlegung der politischen Aktivitäten<br/><br/>Kein Widerstand gegen höhere soziale und ökologische legislative Standards'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Brancheninternes Engagement für höhere legislative Standards<br/><br/>(z.B.: in Kooperation mit Branchenvertretung)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Über die Branche hinausgehendes Engagement für höhere legislative Standards (z.B.: Kooperation mit NGOs)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Transparente, wesentliche Berührungsgruppen inkludierender Lobbying-Prozess (z.B.: Ausformulierte Gesetzesinitiativen)'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Reichweite, inhaltliche Breite und Tiefe',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Ein sozialer oder ökologischer Randaspekt betroffen'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Ein wesentlicher sozialer oder ökologischer Aspekt betroffen<br/><br/>Tatsächliche Umsetzung höherer Standards betrifft > 25% des Umsatzes'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Mehrere, wesentliche  soziale oder ökologische Aspekte betroffen<br/><br/>Tatsächliche Umsetzung höherer Standards > 50%'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Alle wesentlichen sozialökologischen Aspekte<br/><br/>Erhöhung der Branchenstandards ist inhärenter Bestandteil der Unternehmenspositionierung (> 90%)'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'E1',
                shortcodeSlug : 'e1',
                name: 'Sinn und Gesellschaftliche Wirkung der Produkte / Dienstleistungen',
                points: 50,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Produkte/ Dienstleistungen decken den Grundbedarf oder dienen der Entwicklung der Menschen/der Gemeinschaft/der Erde  und generieren positiven Nutzen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Erste Pilotprojekte zur gemeinsamen Entwicklung höherer Standards mit Marktpartnern Bis zu 25% der P/D decken Grundbedarf oder haben positive + nachgewiesene Auswirkungen auf Menschen/ Gemeinschaft/Erde;<br/><br/>max. 25% der P/D erfüllen hemmenden/pseudo-/ Negativ-Nutzen F&E-Kooperation)<br/><br/>Keine wesentlichen Konflikte mit Zivilgesellschaft bezügl. der Standards<br/><br/>Aktive Kommunikation höherer Standards nach Außen (z.B.: Webseite)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Bis zu 50% der P/D decken Grundbedarf oder haben deutlich positive + nachgewiesene Auswirkungen auf Menschen/ Gesellschaft/Erde;<br/><br/>keine P/D erfüllen hemmenden/ pseudo-/ Negativ-Nutzen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Bis zu 75% der P/D decken Grundbedarf oder haben deutlich positive + nachgewiesene Auswirkungen auf Menschen/ Gesellschaft/ Erde'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Bis zu 100% der P/D decken Grundbedarf oder haben deutlich positive + nachgewiesen Auswirkungen und lösen wesentliche gesellschaftliche Probleme'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Ökologischer und sozialer Vergleich der Produkte/ Dienstleistungen mit Alternativen mit ähnlichem Endnutzen',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Punktuelle Ansätze: z.B. das Unternehmen bietet soziale und ökologische Nischenprodukte an'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Das Unternehmen bietet hinsichtlich sozialer/ ökologischer Aspekte überdurch-schnittliche P/D'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Hinsichtlich sozialer und ökologischer Aspekte wesentlich besser als Branchendurch-schnitt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Im Vergleich zur Alternative sozial und ökologisch hochwertigste P/D, z.B. Energie: Ökostrom; Mobilität: Zug/Bus/Solarantrieb'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'E2',
                shortcodeSlug : 'e2',
                name: 'Beitrag zum Gemeinwesen',
                points: 40,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Leistungen[5]',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '0-0,5 %'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '0,5-1,5 %'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '1,5-2,5 %'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '> 2,5 %'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Wirkungen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Vereinzelt spürbare Wirkungen mit vorwiegendem Symptom-charakter'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Vertiefte Wirkungen ohne Nachhaltigkeit oder erste breitenwirksame Maßnahmen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Vertiefte und nachhaltige Wirkung in einzelnen Feldern'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Nachhaltige Wirkung in mehreren Feldern'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Intensität',
                            relevance : 'low',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Vereinzelte Maßnahmen, nicht institutionalisiert, geringe Verantwortungs-übernahme'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Regelmäßig einzelne Maßnahmen, erste Strategie erkennbar, Verantwortlichkeit erkennbar'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Umfassende Strategie, institutionalisierte Umsetzung, weitgehende Verantwortungs-übernahme'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Dementsprechende Praxis seit mind. drei Jahren'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'E3',
                shortcodeSlug : 'e3',
                name: 'Reduktion ökologischer Auswirkungen',
                points: 70,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : '1. Absolute Auswirkungen1<br/><br/>Das Unternehmen ...',
                            relevance : 'middle',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '... kennt die Nutzung seiner P/D und die Herkunft seiner Hilfsstoffe und Produktionsmittel'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '+ kennt seine Ressourcennutzung und seine Emissionen<br/><br/>(OEF1-Guide Punkte 4 und 5 oder äquivalent)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '+ führt regelmäßig eine OEF–Analyse durch (OEF-Guide Punkte 6-9 oder äquivalent)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '+ veröffentlicht die Daten und tritt mit den Ergebnissen in Kooperation zu anderen Unternehmen der Branche'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : '2. Relative Auswirkungen:<br/><br/>Im Branchenvergleich liegt das Unternehmen bzgl. Stand der Technik und Gesetzesvorgaben ...',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '… hinsichtlich einiger ökolog. Auswirkungen über dem Branchendurchschnitt'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '… hinsichtlich einiger ökolog. Auswirkungen über dem Branchendurchschnitt mit klar erkennbaren Maßnahmen zur Verbesserung'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '… hinsichtlich wesentlicher ökolog. Auswirkungen über dem Branchendurchschnitt mit klar erkennbaren Maßnahmen zur Verbesserung'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '… hinsichtlich wesentlicher ökolog. Auswirkungen weit über dem Durchschnitt (Innovationsführer, Branchenleader, etc.)'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : '3. Management und Strategie<br/><br/>Das Unternehmen …',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '… setzt erste Schritte zur Identifikation der wesentlichen ökologischen Auswirkungen und Risiken (klare Verantwortlichkeiten, institutionalisierte Prozesse, identifizierte Umweltkonten)'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '+ … erhebt zu seinen Umweltkonten entsprechend Kennzahlen und verfügt über Optimierungs-Strategien'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '+ …<br/><br/>wie neben, nur: langfristige Reduktions- bzw. Substitutions-strategien'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'wie neben + eindeutige Beurteilung des „Quartetts der Nachhaltigkeit“ bzgl. der Umweltkonten'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'E4',
                shortcodeSlug : 'e4',
                name: 'Gemeinwohlorientierte Gewinn-Verteilung',
                points: 60,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : 'Außen-Ausschüttung',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '5-Jahresschnitt: Dividende nicht höher als Inflation plus 5%'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '+ kennt seine Ressourcennutzung und seine Emissionen<br/>5-Jahresschnitt: Dividende nicht höher als Inflation plus 2,5%(OEF1-Guide Punkte 4 und 5 oder äquivalent)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '5-Jahresschnitt: Dividende nicht höher als Inflation'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Keine Gewinnausschüttung an externe EigentümerInnen'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : 'Gemeinwohl-orientierte Gewinnverwendung: Ausschüttung and Arbeit-Gebende“, Stärkung des Eigenkapitals sowie ökosoziale Reinvestitionen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : '50-70% des Gewinnes (davon mind. 50% sozial-ökologische Investitionen) '
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : '71-80% des Gewinnes (davon mind. 50% sozial-ökologische Investitionen) '
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : '81-90% des Gewinnes (davon mind. 50% sozial-ökologische Investitionen)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '91-100% des Gewinnes (davon mind. 50% sozial-ökologische Investitionen)'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            },
            {
                shortcode : 'E5',
                shortcodeSlug : 'e5',
                name: 'Gesellschaftliche Transparenz und Mitbestimmung',
                points: 30,
                goals : {},
                impulsQuestions : {},
                table : {
                    subindicators : [
                        {
                            title : '1. Transparenz -<br/>Umfang GWÖ- Bericht (hoch)',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'GWÖ-Bericht mit weniger als drei aussagekräftigen Sätzen zu jedem Subindikator'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'GWÖ-Bericht mit drei aussagekräftigen Sätzen zu jedem Subindikator'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Detaillierte Beschreibung jedes Subindikators, direkter Link von der Startseite'
                                        },
                                        {
                                            levels : ['model'],
                                            description : '+ alle kritischen[2] Aspekte genannt, direkter Link von der Startseite, aktive Werbung für den GWÖ-Bericht'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : '1. Transparenz -<br/>GRI Level[3]<br/>(wenn kein GWÖ-Bericht)',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'GRI Level C'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'GRI Level B'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'GRI Level A'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'GRI Level A und Sector Supplement'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : '1. Transparenz -<br/>Verifizierung<br/>(wenn kein GWÖ-Bericht)',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Punktuell, indirekt extern verifiziert'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Externe Evaluation der Risiken'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Externe Verifikation aller wesentl. Kriterien, „low level of assurance“ niedriges Niveau'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Externe Verifikation aller wesentlicher Kriterien, „high level of assurance“ +  + umfassende Kooperation mit NGOs'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : '2. Mitbestimmung -<br/>Art der Mit-bestimmung + Dokumentation',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Reaktiv:<br/>Anhörung von Beschwerden + Reaktion'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Aktiv:<br/>Dialog mit den relevanten EntscheidungsträgerInnen des Unter-nehmens + umfassende Dokumentation'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Aktiv +:<br/>Konsensorientierte Entscheidungen, Dokumentation mit Konsequenzen öffentlich zugänglich'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Innovativ:<br/>mind. 50% Konsensuale Entscheidungen'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title : '2. Mitbestimmung -<br/>Umfang der Mitbestimmg + einbezogener Berührungsgruppen',
                            relevance : 'high',
                            developmentTracks : [
                                {
                                    developmentDetails : [
                                        {
                                            levels : ['beginner'],
                                            description : 'Einzelne Maßnahmen/ Projekte über begrenzte Zeit<br/><br/>Einige Berührungsgruppen'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Immer wieder um­fassende Mitbestimmungsprozesse<br/><br/>Die wichtigsten Berührungsgruppen'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Regelmäßige Einbeziehung bei wichtigen Themen/ strategischen Entscheidungen<br/><br/>Alle Berührungsgruppen'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Permanenter Dialog und Mitbestimmung bei wesentlichen Themen/ strategischen Entsch.<br/><br/>Alle Berührungsgruppen'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                details : {},
                definition : {},
                bestPractices : {},
                implementationHelp : {},
                moreinfo : {},
                footnotes : {}
            }
        ],
        negativeCriteria : [
            {
                shortcode : 'N1',
                shortcodeSlug : 'n1',
                name: 'Verletzung der ILO-Arbeitsrechte / Normen / Menschenrechte',
                points: -200,
                content : ''
            },
            {
                shortcode : 'N2',
                shortcodeSlug : 'n2',
                name: 'Menschenunwürdige Produkte und Dienstleistungen',
                points: -200
            },
            {
                shortcode : 'N3',
                shortcodeSlug : 'n3',
                name: 'Menschenunwürdige Produkte und Dienstbeschaffung bei bzt. Kooperation mit Unternehmen, welche die Menschenwürde verletzen',
                points: -150
            },
            {
                shortcode : 'N4',
                shortcodeSlug : 'n4',
                name: 'Feindliche Übernahme',
                points: -200
            },
            {
                shortcode : 'N5',
                shortcodeSlug : 'n5',
                name: 'Sperrpatente',
                points: -100
            },
            {
                shortcode : 'N6',
                shortcodeSlug : 'n6',
                name: 'Dumpingpreise',
                points: -200
            },
            {
                shortcode : 'N7',
                shortcodeSlug : 'n7',
                name: 'Illegitime Umweltbelastungen',
                points: -200
            },
            {
                shortcode : 'N8',
                shortcodeSlug : 'n8',
                name: 'Verstöße gegen Umweltauflagen',
                points: -200
            },
            {
                shortcode : 'N9',
                shortcodeSlug : 'n9',
                name: 'Geplante Obsoleszenz',
                points: -100
            },
            {
                shortcode : 'N10',
                shortcodeSlug : 'n10',
                name: 'Arbeitsrechtliches Fehlverhalten seitens des Unternehmens',
                points: -200
            },
            {
                shortcode : 'N11',
                shortcodeSlug : 'n11',
                name: 'Arbeitsplatzabbau oder Standortverlagerung trotz Gewinn',
                points: -150
            },
            {
                shortcode : 'N12',
                shortcodeSlug : 'n12',
                name: 'Arbeitsplatzabbau oder Standortverlagerung trotz Gewinn',
                points: -200
            },
            {
                shortcode : 'N13',
                shortcodeSlug : 'n13',
                name: 'Keine unangemessene Verzinsung für nicht mitarbeitende Gesellschafter',
                points: -200
            },
            {
                shortcode : 'N14',
                shortcodeSlug : 'n14',
                name: 'Nichtoffenlegung aller Beteiligungen und Töchter',
                points: -100
            },
            {
                shortcode : 'N15',
                shortcodeSlug : 'n15',
                name: 'Verhinderung eines Betriebsrats',
                points: -100
            },
            {
                shortcode : 'N16',
                shortcodeSlug : 'n16',
                name: 'Nichtoffenlegung aller Finanzflüsse an Lobbyisten und Lobby-Organisationen / Nichteintragung ins Lobby-Register der EU',
                points: -200
            },
            {
                shortcode : 'N17',
                shortcodeSlug : 'n17',
                name: 'Exzessive Einkommensspreizung',
                points: -100
            }
        ]
    }
};

var indicators = Data.indicators.data.indicators;
var negativeCriteria = Data.indicators.data.negativeCriteria;

indicators[0].definition.content = '<p>Der Umgang mit und die Auswahl von Lieferanten und ihren Produkten/Dienstleistungen stellt für viele Unternehmen eine    bedeutende Einflusssphäre zur Steigerung des Gemeinwohles dar. Das Spektrum der zu berücksichtigenden Aspekte reicht    hierbei von positiven Elementen (u.a. Kooperation, langfristige Zusammenarbeit, gemeinsame Erarbeitung von    Lösungsstrategien für soziale und ökologische Aspekte) hin zu sozialen und ökologischen Risiken (z.B.:    Arbeitnehmerrechte, Umweltbelastung), welche – teils aufgrund eines Preiskampfes – in den vorgelagerten    Wertschöpfungsketten aufzufinden sind.</p><p>Die mit der Globalisierung und Spezialisierung einhergehende    Arbeitsteilung hat komplexe Strukturen in den Wertschöpfungsketten der Weltwirtschaft zur Folge (siehe    beispielsweise Südwind-Studie: Die Wertschöpfungskette bei Handys).</p><p>Deshalb ist es wichtig, dass jede AkteurIn    die vorgelagerten WertschöpferInnen kennt bzw. Informationen aktiv einholt, um nach ethischen Prinzipien auswählen    zu können. Jede/r ist für die gesamte Supply Chain (mit)verantwortlich. Derzeit wird diese Sichtweise nur bei    bestimmten kritischen Produktsparten (etwa Kaffee und Kakao) berücksichtigt. Zunehmend geraten spezifische Rohstoffe    (z.B.: Coltan) und komplexere Produkte (z.B. Elektronikprodukte) ins Blickfeld wirtschaftsethischer Diskussionen.    Derartige Risiken können nicht, wie der erste Blick vermuten lässt, auf Länder mit niedrigen gesetzlichen und/oder    gelebten Standards reduziert werden, da sie auch oftin westlichen Ländern (z.B.: prekäre Arbeitsbedingungen im    Handel, bei Reinigungsdienstleistern, im produzierenden Gewerbe, in der Baubranche etc.) aufzufinden sind. Bisher    sind Maßnahmen vielfach erst durch Druck seitens unterschiedlicher Stakeholder-Gruppen (u.a. Zivilgesellschaft,    KonsumentInnen, Gewerkschaften) als reaktiver Prozess eingeleitet worden bzw. bleibt ein aktiver Zugang zu ethischen    Aspekten im Beschaffungswesen auf Nischenanbieter beschränkt.</p><p>Neben sozialen und ökologischen Aspekten werden    Beschaffungsverfahren vielfach von kompetitiven, preisgetriebenen Einkaufsprozessen begleitet. MitarbeiterInnen des    Beschaffungswesens werden durch variable Entlohnungskomponenten zur Minimierung der Einkaufspreise angeregt –    Rahmenbedingungen (z.B. diesbezügliche Weiterbildung) und Anreizstiftung für ein ethisches Beschaffungswesen sind    derzeit nur bedingt auffindbar.</p><p><strong>Video: </strong><a href="https://www.youtube.com/watch?v=UCQLgACc6fQ"                                                                     class="external-link" rel="nofollow">Story of    Stuff</a> (allgemeineAwareness-Info über den Lebenszyklus von Produkten mit vielen Aspekten zur Wertschöpfungskette)</p>';

indicators[0].details.content = '<p align="left"><strong>Marktmacht:</strong> mit zunehmender Marktmacht (korreliert oftmals mit Unternehmensgröße)    steigt die Bedeutung der fairen Preisbildung, da dies mit einem stärkeren Einfluss auf die Gestaltung des Prozesses    einhergeht.</p><p align="left"><strong>Unternehmensgröße:</strong> Mit zunehmender Größe des Unternehmens steigt der    Anspruch an Institutionalisierung und Qualität des Managements</p><p align="left"><strong>Regionale    Risiken:</strong> Ökologische Aspekte sind tendenziell von höherer Bedeutung. Je höher der Bezug aus    Ländern/Branchen mit niedrigen sozialen Standards ist, desto stärker sind soziale Aspekte zu gewichten.</p><p        align="left"><strong>Branchenaspekte: </strong></p><p align="left">Auch wenn es sich nicht verallgemeinern    lässt, ist die Herangehensweise von Produktionsunternehmen, Handel und Dienstleistungsunternehmen zu unterscheiden.    Die Aufteilung hängt mit den unterschiedlichen Schwerpunkten in der Beschaffung zusammen: klassische Roh- und    Hilfsstoffe (z.B.: bei einem Stahlerzeuger Erz, Kohle, bei einem Laptophersteller eine Vielzahl an Bauteilen),    Handel und Vertrieb verarbeiteter Produkte im Handel (z.B.: im Lebensmitteleinzelhandel die vertriebenen    Lebensmittel, in einer Handelskette die elektronischen Geräte) sowie sonstige Betriebsmittel (IT; Büroausstattung,    Betriebsgebäude, Maschinen etc.). Darüber hinaus sind für alle Unternehmen die jeweiligen Investitionsgüter (Fabrik,    Firmenwagen, IT-Hardware etc.) relevant.</p><p align="left">—&nbsp;&nbsp; Produktionsunternehmen:    Produktionsunternehmen sind oft durch eine enge Zusammenarbeit mit den Lieferanten ihrer wesentlichen Rohstoffe    gekennzeichnet. Die Existenz von zertifizierten Produkten ist im Vergleich zum Endkonsumentenmarkt geringer und    Möglichkeiten zur Verbesserung je nach Rohstoff unterschiedlich (direkte Kooperation mit den LieferantInnen    bezüglich sozialer und ökologischer Aspekte; Ethik-Audits durch Dritte etc.).</p><p align="left">—&nbsp;&nbsp;    Handel: Der Handel verfügt zumeist über ein breites Sortiment unterschiedlichster Produkte und bezieht diese    mehrheitlich von einer großen Anzahl an LieferantInnen. Aufgrund dessen ist gerade für den Handel eine systematische    Herangehensweise von sehr hoher Bedeutung (bei der Auswahl welcher Handelsgüter werden soziale/ökologische Kriterien    angewandt und überprüft?). Orientierungspunkte sind von der Branche abhängig. Im Lebensmittelbereich kann    beispielsweise bereits auf eine Vielzahl bestehender Labelprozesse zurückgegriffen werden (Bio, Demeter, Fair Trade    etc.), in anderen Bereichen ist eine individuelle Herangehensweise zielführender (Kriterienkatalog, Audits    etc.).</p><p align="left">—&nbsp;&nbsp; Dienstleistungsunternehmen (z.B. Architekturbüro): Nachstehend einige    Beispiele für das typische Beschaffungswesen eines Dienstleistungsunternehmens und mögliche Orientierungspunkte:    Raumnutzung (z.B.: Energieeffizienz anhand des Energieausweises oder Energiekennzahlen kwh/m²), Strom (Ökostrom),    Wärme (ökologische Qualität des Energieträgers), soziale Risiken (z.B.: ein wesentlicher Anteil des Erdgases in    Österreich und Deutschland wird vom aus ethischer Perspektive durchaus kritisch zu beurteilenden Gazprom-Konzern    bereitgestellt – damit ist auch ein kleines Büro in Wien oder Berlin Teil der Wertschöpfungskette einer sehr    kritischen Branche), IT-Hardware (gebraucht &gt; Neukauf, überdurchschnittliche Nutzungsdauer, Energieeffizienz),    Reinigungs- und sonstige Personaldienstleistungen (Arbeitsbedingungen des Anbieters, u.a. Entlohnung), IT-Services    (GreenHosting), Mobilitätsdienstleistungen (Vermeidung &gt; Auswahl sanfter Transportmittel), Papier (Umweltzeichen,    Recycling, FSC etc.), Einrichtung (gebraucht &gt; Neukauf); Fuhrpark (Vermeidung &gt; CarSharing &gt; Kauf eines    energieeffizienten Fahrzeuges).</p><p align="left">&nbsp;</p><p align="left"><u><strong>Abgrenzungen zu anderen    Indiaktoren</strong></u></p><p align="left"><strong>A1 zu D3/D4/E1: </strong>Eine Abgrenzung des ethischen    Beschaffungswesens zu den Indikatoren der Produktgestaltung und -wirkung &nbsp;ist nicht sinnvoll, da die    beschafften Produkte/Dienstleistungen Teil des gesamten Lebenszyklus sind. Der Effekt von A1 auf diese Indikatoren    ist abhängig von der Relevanz der vorgelagerten Wertschöpfungsschritte (z.B.: bei einem reinen Handelsunternehmen    sehr hoch, da die Effekte mehrheitlich bei den LieferantInnen entstehen, bei einem Architekten niedriger, da die    eingesetzten Güter – klassischer Bürobedarf – nur ein Hilfsmittel der geplanten Häuser sind).</p><p align="left">    <strong>A1 zu E3:</strong> Die Abgrenzung hierbei hängt von davon ab, welche ökologischen Effekte wo in der    Wertschöpfungskette durch ethisches Beschaffen erzielt werden (siehe FAQ: Geschäftswagen).</p><p align="left">    <strong>A1 zu C3/D3/E3:</strong> Eine grafische Darstellung wird in den kommenden Wochen ins WIKI gestellt.</p><p        align="left">&nbsp;</p><p align="left"><strong><u>FAQ zur Bewertung</u></strong></p><p align="left"><strong>Informationsbeschaffung:</strong>    Wo kann man Informationen über die ethische Qualität eines Lieferanten bekommen? Nach welchen    Kriterien/Zertifikaten/Siegeln kann man unterscheiden, ob der jeweilige Zulieferer sauber ist?    <strong>Antwort: </strong>Dies hängt jeweils von den spezifischen Produkten bzw. Dienstleistungen ab. Generelle    Hintergrundinformationen zu Produkten/Dienstleistungen lassen sich zumeist relativ schnell im Internet recherchieren    (z.B.: ökologische Aspekte auf Seiten von Umwelt-NGOs). Für die Beurteilung der Label kann es hilfreich sein, auf    Informationen unabhängiger Initiativen zurückzugreifen&nbsp; (z.B.: <a href="http://www.label-online.de/"                                                                           class="external-link" rel="nofollow">http://www.label-online.de/</a>:    Label-Datenbank mit Hintergrundinfos und Bewertung; Ökotest etc.). Bei einer intensiven Beziehung zu den    LieferantInnen kann auch die direkte Erhebung bei diesen zielführend sein.</p><p align="left"><strong>Rolle    monetärer Aspekte in der GWÖ:</strong>Eine monetäre Bewertung kann den GWÖ Zweck umkehren. Ein nur nach Preisen    orientiertes Einkaufsverhalten kann zu einer besseren Bewertung führen. Wäre es hier nicht sinnvoller, die GWÖ    komplett von monetären Elementen zu lösen? (Anfrage aus einem Peer-Group-Treffen in Stuttgart)    <strong>Antwort:</strong> Die monetäre Ebene wird hier nur aus „pragmatischen“ Gründen angewandt, um so die Relevanz    der beschafften Güter bzw. das Ausmaß, in welchen Bereichen gehandelt wird, grob einschätzen zu können. Alternativ    könnte man eine physische Maßeinheit wählen (z.B. Gewicht, wie beispielsweise in Material und Stoffstromanalysen).    Wichtig ist eine grobe „Quantifizierung“, um die wesentlichen beschafften Güter herauszufiltern. (Ob 1 Euro für    Bleistifte in einem Jahr ausgegeben werden oder 500 Euro für Papier lässt meist auch Rückschlüsse darauf zu, bei    welchem der beiden Güter die Berücksichtigung sozialer oder ökologischer Aspekte in der Beschaffung einen größeren    Effekt hat). Monetär sind diese Daten vorhanden (Bilanz, Buchhaltung) und können für eine erste Auseinandersetzung    mit dem Thema genutzt werden. Es sollte selbstverständlich nicht so verstanden werden, dass dies nur auf eine    einzige Einheit (sei es monetär, physisch etc.) heruntergebrochen werden soll, sondern auch auf die Branche bzw. die    Rahmenbedingungen des Unternehmens eingegangen werden kann. Die Gefahr eines rein nach Preisen orientierten    Einkaufsverhaltens sollte bei der Beurteilung aufgrund der expliziten sozialen und ökologischen    Beschaffungskriterien keine positive Bewertung nach sich ziehen können.</p><p align="left">    <strong>Wesentlichkeit:</strong> Ab welcher Summe/welchem Anteil am Gesamtvolumen ist ein P/D wesentlich? (Bäckerei:    Getreide oder Backöfen etc.) Wo fängt die Wesentlichkeit an? <strong>Antwort:</strong> Eine allgemeine Antwort zu    dieser Frageist schwierig, die Letztverantwortung liegt bei den AuditorInnen bzw. ProzessbegleiterInnen. Vielfach    existieren sehr kleine (sowohl monetär als auch physisch) Güterflüsse, die von hoher Relevanz geprägt sind (z.B.:    Tantal in der Telekommunikationsindustrie; viele seltene Metalle und nicht-metallische Rohstoffe). Eine    „reduktionistische Variante“ rein auf eine monetäre Größe ist folglich kritisch zu beurteilen. Die monetäre Basis    ist lediglich eine Ausgangsbasis, wobei man sich an der Strukturierung in ABC-Güter orientieren könnte (bei der    ABC-Analyse wird oft 80&nbsp;%, 15&nbsp;%, 5&nbsp;% oder ähnliches vorgeschlagen). Ergänzt werden sollte dies um    eine Analyse potentieller Risikogüter (insbesondere beim verschwindenden Rest).</p><p align="left"><strong>Gewichtung    der einzelnen Sub-Indikatoren:</strong> Unterscheidung zwischen ökologisch und sozial ist hier nicht messbar und    einteilbar, da die beiden Schwerpunkte **innerhalb** eines Kriteriums liegen. Wie gehen wir mit der Gewichtung um?    Kann ein Auditor die Gewichtung ändern? Nach welcher Grundlage sollte das Unternehmen die Gewichtung vornehmen?    <strong>Antwort:</strong> Der/Die AuditorIn sollte sich mit dem Beschaffungsportfolio des Unternehmens    auseinandersetzen und im Rahmen der vorgeschlagenen Schranken die Gewichtung nach seinem/ihrem Ermessen durchführen,    orientiert daran, ob entweder soziale oder ökologische Aspekte im jeweiligen Fall von höheren Risiken gekennzeichnet    sind (siehe auch weiter oben).</p><p align="left"><strong>Regionalität: </strong>Unser Unternehmen bezieht fast    ausschließlich von regionalen Lieferanten und Dienstleistungsunternehmen. Es gibt kaum Risiken. Ist dieser Aspekt    für unser Unternehmen relevant? (Rückmeldung von Pionierunternehmen) <strong>Antwort:</strong> Auch regional    bezogene Produkte und Dienstleistungen beruhen auf Vorleistungen (z.B.: auch der regionale Tischler bezieht seine    Rohstoffe von irgendwo), die potentiellen Auswirkungen liegen oftmals nur weiter hinten in der Wertschöpfungskette.    Darüber hinaus gibt es auch im deutschsprachigen Raum noch viele Branchen mit prekären Arbeitsbedingungen, weshalb    sich negative Auswirkungen nicht per se aufgrund der Region ausschließen lassen (z.B. Baugewerbe,    Personaldienstleistungen, Handel etc.).</p><p align="left"><strong>Anlagevermögen (Anschaffungsjahr –    Abschreibungen):</strong> Wie wird das Anlagevermögen bewertet? Auch hier stellen sich durchaus GWÖ-Aspekte. So    führt die Nutzung von Maschinen über ihre steuerliche AFA-Dauer hinaus zu Abfallvermeidung. Auch sollten bei der    Anschaffung die sozialen/ökologischen Auswirkungen entscheidungsrelevant sein. Wie werden Anschaffungen    berücksichtigt: nur im Anschaffungsjahr, auf die Jahre abgeschrieben oder gar nicht? (Anfrage aus einem    Peer-Group-Treffen in Stuttgart). <strong>Antwort:</strong> Anschaffungen werden selbstverständlich als Teil der    „beschafften Betriebsmittel“ mitberücksichtigt. Für die Fragen nach Anschaffungsjahr bzw. Abschreibungen gibt es    noch keine festgeschriebene Regel. Es ist schwierig, sich für A oder B zu entscheiden. Im Jahr des    Anschaffungsprozesses fällt die Entscheidung für das Produkt und den Lieferant, folglich ist zu diesem Zeitpunkt die    Möglichkeit am größten, soziale und ökologische Aspekte bei der Beschaffung zu berücksichtigen. Eine reine    Fokussierung auf den Anschaffungszeitraum verfälscht jedoch das Bild der „Betriebsmittel“ eines Unternehmens.    Abschreibungen liefern hierbei ein ausgewogeneres Bild des „sozialen und ökologischen Rucksackes“ vergangener    Beschaffungsprozesse.&nbsp;</p><p align="left"><strong>Reduktion bei kritischen Stoffen ohne höherwertige    Alternative: </strong>Was ist unter „höherwertige Alternative“ zu verstehen? Antwort: Damit sind Stoffe gemeint, die    nicht (technisch oder ökonomisch sinnvoll) durch andere– ökologisch/sozial/ethisch nachhaltigere – Stoffe ersetzt    werden können. Nehmen wir zum Beispiel Tantal, einen Konfliktrohstoff, der in der Telekommunikationsindustrie von    hoher Bedeutung und nicht ersetzbar ist; es existiert keine ökologisch/sozial höherwertige stoffliche Alternative.    Die Branche hat sich zusammengesetzt und versucht als ersten Schritt durch Prozesse in der Beschaffungskette    „Conflict-Free“ Tantal sicherzustellen. Das Dilemma ist jedoch, dass wir als Gesellschaft Tantal in einem extrem    hohen Ausmaß benötigen. Am besten wäre es, wenn die notwendigen Mengen des Stoffes verringert würden (z.B.:    forcierte Verlängerung der tatsächlichen Nutzungsdauer von Mobiltelefonen, Forschung zur Nutzung von    Sekundärrohstoffen).Dies wäre aus ethischer Perspektive zielführender als die reine Sicherstellung konfliktfreier    Rohstoffe.</p><p align="left"><strong>Geschäftswagen:</strong> Wo gehört die Bewertung des Geschäftswagens hin, in    A1, in C3? <strong>Antwort:</strong> Diese würde sowohl unter die Kriterien A1 (mit dem Fokus auf die Effekte der    vorgelagerten Prozesse, z.B. Herstellung) als auch D3 (mit dem Fokus auf die Nutzungsaspekte, z.B. Verbrauchsdaten)    fallen. In C3 ist ausschließlich der Arbeitsweg und nicht Dienstreisen und ähnliches berücksichtigt, folglich würde    er nur dann im geringem Maße miteinfließen, wenn der Kauf im konkreten Zusammenhang mit dem Arbeitsweg steht (z.B.:    Geschäftswagen wird für Car Sharing und Mitfahrgelegenheiten für die MitarbeiterInnen genutzt).</p>';

indicators[0].footnotes.content = '<p><a href="https://wiki.gwoe.net/display/Redaktion/A1+Ethisches+Beschaffungswesen#_ftnref1" title=""      rel="nofollow">[1]</a> ETI Self-Assessment-Tool: <a        href="http://www.ethicaltrade.org/sites/default/files/resources/ETI%20Management%20benchmarks.pdf"        class="external-link" rel="nofollow">www.ethicaltrade.org/sites/default/files/resources/ETI%20Management%20benchmarks.pdf</a></p><p><a href="https://wiki.gwoe.net/display/Redaktion/A1+Ethisches+Beschaffungswesen#_ftnref2" title=""          rel="nofollow">[2]</a> Loew (2006): CSR in der Supply Chain; <a        href="http://www.4sustainability.de/fileadmin/redakteur/bilder/Publikationen/Loew_2006_CSR_in_der_Supply-Chain.pdf"        class="external-link" rel="nofollow">http://www.4sustainability.de/fileadmin/redakteur/bilder/Publikationen/Loew_2006_CSR_in_der_Supply-Chain.pdf</a></p>';

indicators[0].goals.content = '<p>Zielsetzung dieses Indikators ist es, dass die Unternehmen ihre Verantwortung für die vorgelagerten    Wertschöpfungsschritte voll wahrnehmen und nur gemeinwohlorientierte Zulieferer auswählen. Ein    gemeinwohlorientiertes Unternehmen setzt sich aktiv mit den Problemstellungen bezogener Produkte/Dienstleistungen    auseinander und versucht den Ressourcenverbrauch insgesamt sowie dessen soziale und ökologischen Folgewirkungen    durch aktive Maßnahmen „bis zur Wiege“ zurück zu minimieren. Je nach beschafftem Gut können sehr unterschiedliche    Aspekte von Relevanz sein (siehe Hintergrund sowie Umsetzung). Mit seinen Lieferanten und Dienstleistungspartnern    strebt es eine langfristige und faire Zusammenarbeit an, wobei das Gemeinwohl betreffende Aspekte in einem möglichst    kooperativen Prozess aktiv adressiert werden. In diese Prozesse können auch MitwerberInnen und externe    Stakeholder/Berührungsgruppen (z.B. NGOs, Multi-Stakeholder-Initiativen) eingebunden werden (siehe auch D2 und D5).    Belohnt wird sowohl die aktive Auseinandersetzung als auch der tatsächliche Bezug sozial und ökologisch    höherwertiger Produkte und Dienstleistungen (=P/D). Zu berücksichtigende Aspekte können vielfältiger Natur sein:</p><ul>    <li><strong>Arbeitsbedingungen:</strong> existenzsicherndes Einkommen, Gesundheit und Sicherheit,        ArbeitnehmerInnenrechte etc.    </li>    <li><strong>Ökologische Aspekte:</strong> ökologische Qualität der eingesetzten Inputstoffe im Vergleich zu        Alternativen, Einsatz der besten verfügbaren Technologie, in der Produktion eingesetzte Energieträger,        Vermeidung von Risikostoffen, Emissionen in Luft/Boden/Wasser etc.    </li>    <li><strong>Soziale Auswirkungen auf andere Berührungsgruppen:</strong> direkte Belastung der AnrainerInnen durch        Schadstoffe, Konflikte um Rohstoffe, Korruption, Menschenrechtsverstöße, Verstöße gegen geltendes Recht,        kontroverse Unternehmenspolitik, Ausnutzen der Marktmacht etc.    </li>    <li><strong>Verfügbarkeit und Existenz von Alternativen:</strong> Vermeidung, lange Gebrauchsdauer        bzw.wiederverwendete Güter, Alternativrohstoffe, nach sozialen oder ökologischen Kriterien zertifizierte        Produkte/Dienstleistungen etc.    </li></ul><p>Die reine Einhaltung der ILO-Kernarbeitsnormen (siehe: <a rel="nofollow" class="external-link"                                                             href="http://de.wikipedia.org/wiki/Kernarbeitsnorm">http://de.wikipedia.org/wiki/Kernarbeitsnorm</a>),    wenngleich diese in vielen Branchen und Regionen noch immer laufend verletzt werden, ist als Anspruch an eine sozial    und ökologisch zukunftsfähige Wirtschaft zu wenig. Über negative Auswirkungen hinausgehend können die Inhalte der    Gemeinwohl-Matrix als gutes Hilfsmittel für eine umfassende Auseinandersetzung mit positiven Elementen der Beziehung    zu den LieferantInnen herangezogen werden. Der Bio-Apfel aus einem regionalen, solidarischen Landwirtschaftsbetrieb    ist voraussichtlich konsistenter mitden gesellschaftlichen Vorstellungen einer zukunftsfähigen Wirtschaft (faire    Aufteilung der Wertschöpfung, Arbeitsbedingungen etc.) als der Bio-Apfel einer LEH (Lebensmitteleinzelhandel)-Kette.    Ein Gut gemeinschaftlich zu nutzen, wiederzuverwenden bzw. gar nicht zu benötigen ist in vielen Fällen über die    Auswahl eines effizienten Neuproduktes zu stellen.</p>';

indicators[0].implementationHelp.content = '<p>Für die Auseinandersetzung mit dem ethischen Beschaffungswesen braucht es zunächst eine systematische Auflistung    aller bezogenen Produkte/Dienstleistungen gemäß ihrem monetären Anteil am gesamten Beschaffungsvolumen sowie ihrer    Herkunft nach Region und Unternehmen. Dann werden die sozialen und ökologischen Auswirkungen evaluiert und    Handlungsalternativen ermittelt. Dabei hilft eine Einstufung der Produkte/Dienstleistungen nach ihren    positiven/negativen sozialen und ökologischen Auswirkungen und Risiken. Nachfolgende Tabelle soll nur eine der    vielen möglichen Darstellungsformen skizzieren:</p><p><strong>Darstellung der Beschaffungsausgaben</strong>    (Rohstoffe, Hilfsstoffe, Miete, Strom, fossile Energieträger etc.):</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="left"><strong>Bezogene/s Produkt/Dienstleistung</strong> (% der gesamten                Beschaffungsausgaben)</p></td>            <td class="confluenceTd"><p align="left"><strong>Relevante soziale und ökologische Risiken </strong></p>            </td>            <td class="confluenceTd"><p align="left"><strong>Status Quo + Zielsetzungen (berücksichtigte                Faktoren)</strong></p></td>            <td class="confluenceTd"><p align="left">&nbsp;<strong>Potentiale (höherwertige Alternativen,                Einflussmöglichkeiten etc.)</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left">Rohstoffe A1 (rd. x % der Ausgaben) von Unternehmen XY</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left">Rohstoffe A2 (rd. x % der Ausgaben) von Unternehmen XY</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left">Strom B1 (rd. x % der Ausgaben) von Unternehmen XY</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p><strong>Auflistung der wichtigsten Investitionsgüter</strong> der letzten Jahren (Maschinen,    Fuhrpark, Gebäude, Ausstattung, IT-Hardware etc.) und ethischer Aspekte,diebei der Beschaffung berücksichtigt    wurden.</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="left"><strong>Investitionsgüter</strong> (% der gesamten Investitionen)            </p></td>            <td class="confluenceTd"><p align="left"><strong>Relevante soziale und ökologische Risiken </strong></p>            </td>            <td class="confluenceTd"><p align="left"><strong>Status Quo + Zielsetzungen (berücksichtigte                Faktoren)</strong></p></td>            <td class="confluenceTd"><p align="left">&nbsp;<strong>Potentiale (höherwertige Alternativen,                Einflussmöglichkeiten etc.)</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left">Anschaffungskosten</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left">Investitionsgut A1 (rd. x % der Investitionsausgaben) von                Unternehmen XY</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left">Investitionsgut A1 (rd. x % der Investitionsausgaben) von                Unternehmen XY</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>            <td class="confluenceTd"><p align="left">&nbsp;</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p>Beispielhaft sollen nachfolgend einige potentiell kritische Branchen detaillierter dargestellt    werden um das Bewusstsein für relevante Aspekte zu schärfen:</p><ul>    <li><strong>Rohstoffgewinnung</strong>: massive Verletzung von Arbeitnehmer- und Menschenrechten,&nbsp; Emissionen        von Schwermetallen und Chemikalien in Wasser und Boden, Schwächung der Kontrolle der Kommunen über Land und        Ressourcen, Verlust der traditionellen Lebensgrundlagen ansässiger Bevölkerung etc.    </li>    <li><strong>Lebensmittelindustrie</strong>: Folgewirkungen konventioneller Landwirtschaft (Bodenerosion,        Folgewirkungen von Pestizideinsatz, Landnutzungswandel, Verlust der Artenvielfalt etc.), Arbeitsbedingungen        (Entlohnung, Kinderarbeit, Zeitarbeit, gesundheitliche Schäden durch Pestizideinsatz etc.)    </li>    <li><strong>Fossile Energieträger</strong>: politische Konflikte um Ressourcen, Korruption, massive Belastung von        Ökosystemen durch Austritt fossiler Stoffe bei Exploration und Transport etc.    </li>    <li><strong>Elektronikindustrie</strong>: massive Verletzung von Arbeitnehmer- und Menschenrechten (u.a.        Wanderarbeiter), gefährliche Inhaltsstoffe (u.a. Polyvinylchorid, bromierte Flammschutzmittel, Phthalate),        Konflikt-Rohstoffe (z.B.: Coltan) etc.    </li></ul>';

indicators[0].impulsQuestions.content = '<ul>    <li>Welche wesentlichen Produkte und Dienstleistungen werden seitens des Unternehmens bezogen (Energie, Rohstoffe,        Materialien, Komponenten, Investitionsgüter, Dienstleistungen, Handelswaren etc.) und wie hoch ist deren        ungefährer Anteil an der gesamten Beschaffung? Welcher regionalen Herkunft sind die wesentlichen Lieferanten        bzw. wer sind diese?    </li>    <li>Welche sozialen und ökologischen Risiken (Arbeitsbedingungen, ökologische Auswirkungen) werden in der gesamten        Supply Chain systematisch evaluiert? Welche sozialen und ökologischen Kriterien (Arbeitsstandards, ökologische        Kennzahlen etc.) werden für Auswahl angewandt? Wie erfolgt die Erhebung und Überprüfung dieser Kriterien        (Zertifizierung, Fragebogen, internes/externes Audit)? Gibt es Kooperationsprogramme mit Lieferanten, die        soziale und ökologische Aspekte beinhalten?    </li>    <li>Welcher Anteil der Güter und Dienstleistungen erfolgt unter Berücksichtigung welcher sozialen/ökologischen        Kriterien? In welchem Ausmaß wird auf welche Label mit sozial- und/oder ökologisch-orientierten Inhalten oder        vergleichbare externe Zertifizierungen zurückgegriffen? Existieren höherwertige Alternativen? Wenn ja, welche?    </li></ul>';

indicators[0].moreinfo.content = '<li>Einen übersichtlichen Einstieg in die Thematik bietet das <a        href="http://www.ethicaltrade.org/sites/default/files/resources/ETI%20Management%20benchmarks.pdf"        class="external-link" rel="nofollow">Self-Assessment-Tool</a><a        href="https://wiki.gwoe.net/display/Redaktion/A1+Ethisches+Beschaffungswesen#_ftn1" rel="nofollow">[1]</a> der    Ethical-Trading-Initiative &nbsp;sowie die Publikation <a            href="http://www.4sustainability.de/fileadmin/redakteur/bilder/Publikationen/Loew_2006_CSR_in_der_Supply-Chain.pdf"            class="external-link" rel="nofollow">„CSR in der Supply Chain“</a><a            href="https://wiki.gwoe.net/display/Redaktion/A1+Ethisches+Beschaffungswesen#_ftn2" rel="nofollow">[2]</a>.    Weitere Hintergrundinformationen zu ethischen Aspekten konzentrieren sich in den meisten Fällen auf    branchenspezifische Problemfelder und verfügen demnach über einen oftmals spezifischen Fokus. Beispielsweise regelt    das Eco Label der EU für Papier neben der ökologischen Qualität der Rohstoffe unter anderemden Einsatz umwelt- und    gesundheitsschädlicher Stoffe, jedoch nicht, welche Art der Energie (erneuerbare Energie oder Strom aus Kohle- oder    Atomkraftwerken) beim&nbsp; energieintensiven Produktionsprozess eingesetzt wird. Jedoch auch bei Labels und    sonstigen Zertifizierungen gilt es zu berücksichtigen, dass oftmals nur ethische Teilaspekte berücksichtigt werden    und Anspruchsniveau und inhaltliche Breite stark variieren können. Bei der zukünftigen Weiterentwicklung der Matrix    bzw. der Aufbereitung von Hintergrundinformation gilt es auf Branchenebene differenziert auf etwaige Potentiale und    Risiken einzugehen.</li><li>Übersicht über sozial- und/oder ökologisch orientierte Label: <a        href="http://www.bewusstkaufen.at/label-kategorien.php" class="external-link" rel="nofollow">http://www.bewusstkaufen.at/label-kategorien.php</a>    sowie <a href="http://www.label-online.de/" class="external-link" rel="nofollow">http://www.label-online.de/</a></li><li>Label-Datenbank: Eine Übersicht über Labels inklusive Hindergrundinfos und Bewertung ist in folgender    Label-Datenbank zu <a rel="nofollow">finden:http://www.label-online.de/</a></li><li>Broschüre der Werkstatt Ökonomie Heidelberg: <a        href="http://www.woek.de/web/cms/upload/pdf/woek/publikationen/kda_2010_sozial_verantwortliche_beschaffung_wegweiser.pdf"        class="external-link" rel="nofollow">Sozialverantwortliche Beschaffung: Wegweiser für den Einstieg</a>&nbsp;</li><li>BS8903: die Britische Norm „SustainableProcurement“ – jedoch kostenpflichtig</li><li>Sonstige Zertifizierungsprozesse: z.B.: SA8000, AA1000</li><li>&nbsp;Südwind-Kampagne Clean-IT: <a href="http://www.clean-it.at/" class="external-link" rel="nofollow">http://www.clean-it.at</a></li><li>Greenpeace Green IT: <a        href="http://www.greenpeace.org/international/en/campaigns/climate-change/cool-it/Guide-to-Greener-Electronics/"        class="external-link" rel="nofollow">http://www.greenpeace.org/international/en/campaigns/climate-change/cool-it/Guide-to-Greener-Electronics/</a></li><li>Greenpeace Marktcheck: <a href="http://marktcheck.greenpeace.at/" class="external-link" rel="nofollow">http://marktcheck.greenpeace.at/</a></li><li>Clean Clothes: <a href="http://www.cleanclothes.at/" class="external-link" rel="nofollow">http://www.cleanclothes.at/</a></li>';

indicators[1].bestPractices.content = '<p>Zuerst werden für einige europäische Länder ethisch-nachhaltige Banken genannt,</p><p>die als Finanzdienstleister    vorbildlich und bei der Veranlagung fortgeschritten zu</p><p>bewerten sind.</p><p align="left">Anschließend werden    einige innovative Projekte und Ideen vorgestellt.</p><p><strong>Ethisch-nachhaltig orientierte Banken</strong></p><p><u>Deutschland:</u></p><ul>    <li>Umweltbank: <a href="http://www.umweltbank.de/" class="external-link" rel="nofollow">www.umweltbank.de</a></li>    <li>GLS Bank: <a href="http://www.gls.de/" class="external-link" rel="nofollow">www.gls.de/</a></li>    <li>Ethikbank:<u> </u><a href="http://www.ethikbank.de/" class="external-link" rel="nofollow">www.ethikbank.de/</a>    </li>    <li>Triodos Bank: <a href="http://www.triodos.de/de/privatkunden/" class="external-link" rel="nofollow">www.triodos.de/de/privatkunden/</a><u> </u>    </li>    <li>Steyler Bank: <a href="http://www.steyler-bank.de/" class="external-link" rel="nofollow">www.steyler-bank.de</a>    </li></ul><p><u>Österreich:</u></p><ul>    <li>Schellhammer &amp; Schattera: <a href="http://www.schelhammer.at/" class="external-link" rel="nofollow">www.schelhammer.at/</a>    </li>    <li>Steyler Bank: <a href="http://www.steyler-bank.at/" class="external-link" rel="nofollow">www.steyler-bank.at</a>        (derzeit nur Geldanlage, Girokonto ab 2013)    </li>    <li>Oikokredit – Veranlagung in Mikrokredite: <a href="http://www.oikocredit.org/" class="external-link"                                                     rel="nofollow">www.oikocredit.org</a></li></ul><p><u>Schweiz:</u></p><ul>    <li>Alternative Bank Schweiz:<u> </u><a href="http://www.abs.ch/" class="external-link" rel="nofollow">http://www.abs.ch/</a>    </li>    <li>Freie Gemeinschaftsbank Schweiz:<u> </u><a href="http://www.gemeinschaftsbank.ch/" class="external-link"                                                   rel="nofollow">http://www.gemeinschaftsbank.ch/</a></li></ul><p><u>Italien: </u></p><ul>    <li>Banca Etica: <a href="http://www.bancaetica.com/" class="external-link" rel="nofollow">www.bancaetica.com/</a>    </li>    <li>Banca Popolare Etica: <a href="http://zoes.it/bancaetica/git" class="external-link" rel="nofollow">http://zoes.it/bancaetica/git</a>&nbsp;&nbsp;    </li></ul><p><u>Spanien:</u></p><ul>    <li>Banca ética y sostenible/Triodos Bank: <a href="http://www.triodos.es/es/particulares/" class="external-link"                                                  rel="nofollow">www.triodos.es/es/particulares/</a></li>    <li>Caixa de la Colonya/Colonya Caixa Pollença <a href="http://www.colonya.es/" class="external-link"                                                      rel="nofollow">www.colonya.es</a><u> </u>&nbsp;</li>    <li>Caixa de Ontinyent: <a href="http://www.caixaontinyet.es/" class="external-link" rel="nofollow">www.caixaontinyet.es</a>&nbsp;    </li>    <li>Projekt ähnlich der Demokratischen Bank: <a            href="http://www.casx.cat/es/2012/03/13/casx-cooperativa-dautofinancament-social-en-xarxa/"            class="external-link" rel="nofollow">Cooperativa de Autofinanciación Social en Red</a></li></ul><p><u>Positiv- und Negativkriterien für ethisch-orientiere Geldanlage/Finanzierung</u></p><ul>    <li>        <a href="http://www.ethikbank.de/privatkunden/investmentfonds/ausschlusskriterien/ausschlusskriterien-sarasin-fonds.html"           class="external-link" rel="nofollow">Ethikbank-</a><a            href="http://www.ethikbank.de/privatkunden/investmentfonds/ausschlusskriterien/ausschlusskriterien-sarasin-fonds.html"            class="external-link" rel="nofollow">Sarazin</a><a            href="http://www.ethikbank.de/privatkunden/investmentfonds/ausschlusskriterien/ausschlusskriterien-sarasin-fonds.html"            class="external-link" rel="nofollow">-Fond</a><a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn20"            title="" class="external-link" rel="nofollow"><u>[20]</u></a></li>    <li><a href="https://www.steyler-bank.de/mb606/Ethische_Geldanlagen.pdf" class="external-link" rel="nofollow">Steyler</a><a            href="https://www.steyler-bank.de/mb606/Ethische_Geldanlagen.pdf" class="external-link"            rel="nofollow">-Bank</a></li>    <li><a href="http://www.cric-online.org/images/individual_upload/div_infos/fhl-d-05.pdf" class="external-link"           rel="nofollow">Frankfurt-Hohenheim-Leitfaden</a>: Der FHL basiert auf 800 Kriterien der Kultur- Sozial- und        Naturverträglichkeit. Er stellt einen Leitfaden zur Auswahl von Nachhaltigkeitskriterien für ethisch-orientierte        Fonds dar.    </li>    <li>Bewegungsstiftung Deutschland</li>    <li>Die <a href="http://www.sparda-m.de/" class="external-link" rel="nofollow">Sparda Bank München</a> ist der erste        Finanzdienstleister mit einem extern geprüften <a                href="https://www.sparda-m.de/pdf/sparda-m/sparda_muenchen_gemeinwohlbericht_2011_09.pdf"                class="external-link" rel="nofollow">Gemeinwohlbericht 2011</a> und damit Pionier-Unternehmen. Erzielte        332 Gemeinwohl-Punkte.    </li>    <li>In Österreich gibt es seit drei Jahren das Projekt <a href="http://www.demokratische-bank.at/"                                                              class="external-link" rel="nofollow">Demokratische        Bank</a>. Christian Felber hat das Projekt angestoßen. Es gilt als eine geistige Schwester der        Gemeinwohl-Ökonomie.    </li></ul>';

indicators[1].details.content = '<p>Belohnt werden drei unterschiedliche Aspekte des Finanzmanagements eines Unternehmens:</p><p>—&nbsp;&nbsp;    Institutionalisierung, Relevanz: mittel</p><p>—&nbsp;&nbsp; Gemeinwohlorientierte Veranlagung (u.a. Tagesgeldkonto,    Veranlagung von Rückstellungen), Relevanz: hoch</p><p>—&nbsp;&nbsp; Ethisch-ökologische Qualität des    Finanzdienstleisters, Relevanz: niedrig</p><p>Gemeinwohlorientierte Unternehmensfinanzierung, Relevanz: niedrig</p><p><strong>FAQ zur Bewertung</strong></p><p><strong><em>Welche Auswahlstrategien gibt es für gemeinwohlorientierte    Veranlagung? </em></strong></p><p><em>In der Regel wird zwischen zwei Ansätzen unterschieden, um ethisch-nachhaltige    – pro futuro – auch gemeinwohlorientierte Aspekte in Kapitalanlagen zu berücksichtigen.</em></p><p><em>Die passiven    Ansätze umfassen </em></p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Positivkriterien (Best-in-Class-Ansatz): kann    auch ethisch-nachhaltig problematische Branchen inkludieren (z.B. den ethisch-nachhaltig „besten“ Atomkraftbetreiber    der Branche). Diese Anlagevariante erzielt keine Gemeinwohl-Punkte.</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Negativkriterien: schließt ethisch-nachhaltige Branchen komplett aus dem Anlageportfolio aus. Diese Anlagevariante    wird positiv berücksichtigt (fortgeschritten bzw. erfahren).</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shareholder    Advocacy: konstruktiver Dialog der AktionärInnen mit der Unternehmensleitung im Rahmen der Jahreshauptversammlung.    Diese Anlagevariante erzielt die höchste Kategorie an Gemeinwohl-Punkten (vorbildlich).</p><p>&nbsp;</p><p>    <strong><em>Gegenwärtig existiert kein Angebot für die von meinem Unternehmen benötigten Finanzdienstleistungen.        Wieso werde ich für das fehlende Angebot bei der Bewertung bestraft?</em></strong></p><p>Die Gemeinwohl-Ökonomie    sieht keine „Bestrafung“ vor. Bei fehlendem Angebot insbesondere in Österreich ist lediglich mit einem Punkteabzug    zu rechnen bzw. bei Vorliegen eines Negativkriteriums mit Negativpunkten.</p><p>Der Indikator „Ethisches    Finanzmanagement“ soll primär der Bewusstseinsbildung dienen, dass die von Unternehmen in Anspruch genommenen    Finanzdienstleistungen teils desaströse Auswirkungen auf die Umwelt, die Finanzmärkte und schließlich auf die    Lebensqualität direkt und indirekt Betroffener haben können. Ferner versteht sich dieser Indikator als    Anreizinstrument, sich für ethisches und nachhaltiges Banking einzusetzen, indem etwa ethisch-nachhaltige    Finanzprodukte bei der Hausbank des Unternehmens nachgefragt werden. Durch diese und ähnliche Initiativen kann das    Angebot ethischer Finanzdienstleistungen stetig wachsen.</p><p>&nbsp;</p><p><strong><em>Manche Unternehmen ziehen    die Unternehmensfinanzierung über Mitunternehmen der Finanzierung über ethische Banken vor. Ist diese Form der    Finanzierung sinnvoll bzw. realistisch? Wie wird sie bewertet?</em></strong></p><p>Beide der hier angesprochenen    Formen der Unternehmensfinanzierung sind gegenwärtig Randerscheinungen. Unternehmensfinanzierung über Mitunternehmen    basiert primär auf einem Vertrauensverhältnis und wird unter befreundeten UnternehmerInnen praktiziert.    Unternehmensfinanzierung über Ethik-Banken ist ebenfalls schwierig zu praktizieren, da in Österreich das    entsprechende Angebot weitgehend fehlt. Eine ausländische Ethik-Bank wird einem österreichischen Unternehmen nur    unter erschwerten Bedingungen einen Kredit gewähren. (Stichwort: Besicherung des Kredits. Ausländische Banken haben    in der Regel keine Möglichkeit der Ranganmerkung im Grundbuch od. Firmenbuch). Zudem wird die ausbezahlte    Kreditsumme geringer ausfallen, da ein erhöhtes Zahlungsausfallrisiko angenommen wird, und die Kreditkosten werden    für das Unternehmen höher sein als bei einer österreichischen Bank.</p><p>Die Zielvorstellung der    Gemeinwohl-Ökonomie geht davon aus, dass Unternehmensfinanzierung über Mitunternehmen höher beurteilt wird als    Unternehmensfinanzierung über Ethik-Banken, weil erstere Finanzierungsform dem Grundgedanken der GWÖ – nämlich    Kooperation zu leben – näher liegt. Zur Frage, ob dies realistisch ist: nicht weniger realistisch, als dass die GWÖ    eines Tages Wirklichkeit wird.</p><p><strong>&nbsp;</strong></p><p><strong><em>Wie steht die Gemeinwohl-Ökonomie zur    Unternehmensfinanzierung über Kleindarlehen durch Privatpersonen?</em></strong></p><p>Diese Form der    Unternehmensfinanzierung ist bislang rechtlich ungeklärt. Die Finanzmarktaufsichtsbehörden in Österreich (FMA) und    Deutschland (BaFin) stehen dem Thema skeptisch bis ablehnend gegenüber, weil die Unternehmensfinanzierung über    private Anleger in Form von Kleindarlehen ein den Banken vorbehaltenes konzessionspflichtiges Einlagengeschäft    darstellen kann.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn7"            title="" class="external-link" rel="nofollow">[7]</a></p><p>Nach derzeitiger Gesetzeslage (Stand Februar    2013) empfiehlt es sich, entweder eine Genossenschaft zu gründen oder die Ausnahmeetatbestände zur Prospektpflicht    des österreichischen Kapitalmarktgesetzes bzw. des deutschen Verkaufsprospektgesetzes zu nutzen. Beide Gesetze sehen    Ausnahmen von der kostenintensiven Prospekterstellung und Prospektveröffentlichung vor.</p><ul>    <li><a href="http://www.oegv.info/ware/genossenschaft_und_buergergesellschaft" class="external-link" rel="nofollow">Österreichischer        Genossenschaftsverband</a></li>    <li>Österreichisches <a            href="http://www.ris.bka.gv.at/Ergebnis.wxe?Abfrage=Bundesnormen&amp;Kundmachungsorgan=&amp;Index=&amp;Titel=kmg&amp;Gesetzesnummer=&amp;VonArtikel=&amp;BisArtikel=&amp;VonParagraf=&amp;BisParagraf=&amp;VonAnlage=&amp;BisAnlage=&amp;Typ=&amp;Kundmachungsnummer=&amp;Unterzeichnungsdatum=&amp;FassungVom=01.02.2013&amp;NormabschnittnummerKombination=Und&amp;ImRisSeit=Undefined&amp;ResultPageSize=100&amp;Suchworte=&amp;Position=1"            class="external-link" rel="nofollow">Kapitalmarktgesetz</a></li></ul><p>Sowohl die Gründung einer Genossenschaft als auch die Begebung von Wertpapieren wird für viele kleine und    mittlere Unternehmen (KMU) keine gangbare Alternative darstellen. Im Wesentlichen gilt es zunächst festzustellen, ob    sich die Finanzierung über ein Bankdarlehen oder einen Förderkredit z.B. des Austria Wirtschaftsservice für KMU in    den letzten Jahren tatsächlich dahingehend verschlechtert hat, dass diese Gefahr laufen in die Kreditklemme zu    tappen. Wenn diese Frage mit einem Ja zu beantworten ist, gilt es als nächsten Schritt die entsprechenden    gesetzlichen Änderungen anzuregen. Münden die Anregungen in ein Gesetz, dann wäre es im Sinne des Gemeinwohls,    Rechtssicherheit für KMU in Hinblick auf alternative Finanzierung zu geben.</p><p>&nbsp;</p><p><strong><em>Welche    weiteren Möglichkeiten der alternativen Unternehmensfinanzierung gibt es?</em></strong></p><p>Eine weitere    Finanzierungsmöglichkeit liegt in einem (atypischen) Darlehensvertrag.</p><p>Einem Unternehmen wird eine bestimmte    Summe überlassen, die es zu einem vereinbarten Zeitpunkt in Sachwerten, beispielsweise Lebensmittel oder    Gebrauchsgüter, zurückerstattet.</p><p>Ferner können Genussscheine Einsatz finden. Das Genussrecht ist die    Beteiligungsform an einem Unternehmen. Es handelt sich um eine zeitlich befristete Beteiligung (meist 7 bis 10    Jahre) mit einem geringen Betrag (meist 500 bis 2.000 €). Ein Unternehmen verkauft Genussscheine an KundInnen.    Herkömmliche &nbsp;Genussscheine sind verzinst. Die Zinszahlung erfolgt einmal jährlich in Form eines    Warengutscheins des jeweiligen Unternehmens. Am Ende der Laufzeit erhalten die AnlegerInnen ihr Kapital in voller    Höhe zurück.</p><ul>    <li>Bürgerbeteiligungsmodell der MCE Gruppe: <a href="http://www.mce-gruppe.at/" class="external-link"                                                    rel="nofollow">http://www.mce-gruppe.at/</a></li></ul><p align="left"><strong><em>Was ist Crowdfunding?</em></strong></p><p>Unter Crowdfunding (crowd = Menge, Masse)    versteht man die Finanzierung einer Geschäftsidee oder eines Projektes durch eine Vielzahl von meist unbekannten    Geldgebern. Crowdfunding wird in der Regel über das Internet abgewickelt.</p><p>Bisher ist das Crowdfunding aber vor    allem im Bereich der Finanzierung künstlerischer und zivilgesellschaftlicher Projekte und im Social Business    verbreitet.</p><p>Anzumerken ist, dass in Österreich das Thema Crowdfunding einen rechtlichen Graubereich darstellt.    Prüfende Behörde ist die FMA.</p><ul>    <li><a href="http://www.startnext.at/" class="external-link" rel="nofollow">Start-Next</a> (Crowdfunding Plattform        in Deutschland)    </li>    <li><a href="http://www.respekt.net/" class="external-link" rel="nofollow">Respekt.net</a> (Crowdfunding Plattform        in Österreich)    </li>    <li><a href="http://www.myc4.com/" class="external-link" rel="nofollow">Myc4</a> (Crowdfunding für afrikanische        Kleinunternehmen)<a                href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn8"                title="" class="external-link" rel="nofollow">[8]</a></li></ul><p><strong>&nbsp;</strong></p><p><strong><em>Wie wird eine Genossenschaft unter dem Gesichtspunkt der    gemeinwohlorientierten Unternehmensfinanzierung beurteilt?</em></strong></p><p>Die Genossenschaft hat ihren Ursprung    im Gedanken der Selbsthilfe. Wirtschaftlich Schwache vereinigen sich zur gemeinsamen Erfüllung eines bestimmten    Zwecks. Im Modell der Gemeinwohl-Ökonomie stellt dies eine willkommene Form der direkten Unternehmensfinanzierung    dar. Sofern es die Satzung nicht anders vorsieht, sind alle Mitglieder der Genossenschaft gleichberechtigt. Sie    haben unabhängig von der Höhe des Geschäftsanteils eine Stimme.</p><p>Ein Blick auf die Unternehmenslandschaft    zeigt, dass in Österreich lediglich 0,2 % der Unternehmen in der Rechtsform einer Genossenschaft organisiert sind.    Den Großteil machen Einzelunternehmen (72 %) und GmbHs (19 %) aus.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn9"            title="" class="external-link" rel="nofollow">[9]</a></p><p>Im Gegensatz zu einer GmbH oder    Aktiengesellschaft kennt die Genossenschaft keine Stammkapitalvorschriften. Die Kapitalaufbringung erfolgt im Zuge    der Übernahme von Geschäftsanteilen durch die Mitglieder der Genossenschaft. Eine Veräußerung des Anteils ist nicht    möglich. Die Mitgliedschaft erlischt durch Austritt unter Rückzahlung des Anteils. Die Tatsache, dass    Genossenschaftsanteile nicht handelbar sind, ist positiv zu bewerten, weil dadurch ein personalistisches (und kein    kapitalistisches) Element in den Vordergrund tritt.</p><p>Ein weiteres – soziales – Merkmal der Genossenschaft ist    der Förderauftrag. Daraus ist abzuleiten, dass die Genossenschaft nicht in erster Linie auf Gewinnerzielung    ausgerichtet ist. Gewinnstreben ist nicht Hauptzweck, sondern ein (wichtiger) Nebenzweck. Insgesamt ist auf ein    ausgewogenes Verhältnis zwischen Gewinnerzielung und Förderung der Mitglieder zu achten. Überschüsse können an    Mitglieder jährlich rückvergütet werden.</p><p>Die Rechtsform eines Unternehmens ist nicht ausschlaggebend für eine    bestimmte Anzahl an Gemeinwohl-Punkten. Tendenziell wird sie positiv bewertet.</p><p><strong><em>    &nbsp;</em></strong></p><p><strong><em>Kann eine Genossenschaft das Eigenkapital durch KundInnen/MitarbeiterInnen    erhöhen?</em></strong></p><p>Zunächst kennt die Genossenschaft kein gesetzlich vorgeschriebenes Stamm- oder    Grundkapital. Sohin fehlen gesetzliche Vorschriften zur Kapitalerhöhung und es gelten die Regeln aus der Satzung der    Genossenschaft. Diese müssen die Nachschusspflicht vorsehen.</p><p>Ferner kann jede Genossenschaft ihre Anteile an    Kunden und Mitarbeiter verkaufen und damit die Eigenkapitalquote erhöhen. Je vertrauenswürdiger ein Unternehmen ist,    je sinnstiftender die Produkte und Dienstleistungen sind (vgl. E2), desto höher ist die Wahrscheinlichkeit, dass    KundInnen und MitarbeiterInnen Genossenschaftsanteile übernehmen und sich aktiv am Unternehmen beteiligen.</p><p>    Beispiele sind die TAZ Berlin<a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn10"        title="" class="external-link" rel="nofollow">[10]</a>, die GLS-Bank<a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn11"        title="" class="external-link" rel="nofollow">[11]</a> oder Sparda Bank München<a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn12"        title="" class="external-link" rel="nofollow">[12]</a> und andere.</p><p><strong>&nbsp;</strong></p><p>    <strong><em>Wie kann die Eigenkapitalausstattung bewertet werden?</em></strong></p><p>Die Eigenkapitalquote wird    beim Subindikator Finanzierung positiv bewertet. Sie spiegelt die Höhe des Eigenkapitals im Verhältnis zum    Fremdkapital wider. Somit ist sie eine der wichtigsten Bilanzkennzahlen und gibt Aufschluss über die Stabilität und    die Krisenfestigkeit<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn13"            title="" class="external-link" rel="nofollow">[13]</a> eines Unternehmens. Die Matrix 4.1. berücksichtigt    und bewertet erstmals die Eigenkapitalausstattung. Die Unternehmensgröße und ein Branchenvergleich zur    Eigenkapitalausstattung wird in zukünftigen Versionen der Matrix Eingang finden.</p><p>&nbsp;</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="center"><strong>Sub-Indikator</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Erste Schritte</strong></p>                <p align="center"><strong>(1 bis 10 %)</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Fortgeschritten</strong></p>                <p align="center"><strong>(11 bis 30 %)</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Erfahren</strong></p>                <p align="center"><strong>(31 bis 60 %)</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Vorbildlich</strong></p>                <p align="center"><strong>(61 bis 100 %)</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="center">Ergänzender Aspekt bei der Unternehmens-finanzierung</p></td>            <td class="confluenceTd"><p align="center">Eigenkapitalquote im Branchen- und Größenvergleich bis 50&nbsp;%                höher</p></td>            <td class="confluenceTd"><p align="center">Eigenkapitalquote im Branchen- und Größenvergleich 50–100&nbsp;%                höher</p></td>            <td class="confluenceTd"><p align="center">Eigenkapitalquote im Branchen- und Größenvergleich bis 100–200 %                höher</p></td>            <td class="confluenceTd"><p align="center">Eigenkapitalquote im Branchen- und Größenvergleich 200–400&nbsp;%                höher</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p>Laut Wirtschaftsblatt Wien wiesen 2012 kleine Unternehmen eine durchschnittliche Eigenkapitalquote    von 19,5&nbsp;% auf und mittelgroße Unternehmen 32&nbsp;%.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn14"            title="" class="external-link" rel="nofollow">[14]</a> Für die Jahre 2003/4 gibt es eine sehr detaillierte    Aufschlüsselung der Eigenkapitalquoten in Österreich nach Branchen. Auffällig ist hierbei, dass die    Eigenkapitalquote tendenziell mit der Umsatzhöhe korreliert, d.h. je höher der Umsatz, desto höher ist die    Eigenkapitalquote.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn15"            title="" class="external-link" rel="nofollow">[15]</a></p><p>Laut Wirtschaftswoche ist die Eigenkapitalquote    bei deutschen mittelständischen Unternehmen in einem Jahr von 2010 auf 2011 von 15,1&nbsp;% auf 18,3&nbsp;%    gestiegen.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn16"            title="" class="external-link" rel="nofollow">[16]</a></p><p align="left"><strong>&nbsp;</strong></p><p>    <strong><em>Kann ich den Gewinnfreibetrag gemeinwohlorientiert nutzen?</em></strong></p><p>Ja. Die Entscheidung    obliegt dem Unternehmen. Herkömmlich wird der Gewinnfreibetrag meist in Wertpapieren veranlagt. Eine Investition in    das Unternehmen als solches, wie etwa der Kauf nachhaltig erzeugter Büromöbel, wird positiv bewertet.</p><p><em>    &nbsp;</em></p><p><strong><em>Kann ich den erzielten Gewinn gemeinwohlorientiert investieren?</em></strong> <a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn17"        title="" class="external-link" rel="nofollow">[17]</a></p><p>Siehe hierzu die Ausführungen beim Indikator E    4.</p><p><em>&nbsp;</em></p><p><strong><em>Wie sieht das Verhältnis von Aktiengesellschaft und    Gemeinwohlorientierung aus? </em></strong></p><p>Der Gesetzeswortlaut des österreichischen Aktiengesetzes kennt den    Begriff des „öffentlichen Interesses“, unter welchem im Sinne eines volkswirtschaftlichen Gesamtinteresses das    Gemeinwohl verstanden wird. Ein Haftbarmachen von Vorstandsmitgliedern für gemeinwohlschädigendes Verhalten kann aus    dieser Bestimmung jedoch nicht abgeleitet werden.</p><p>Das österreichische Aktiengesetz und das    Arbeitsverfassungsgesetz kennen, ebenso wie das deutsche Recht, den Begriff der betrieblichen Mitbestimmung. In    Österreich hat der Vorstand die Interessen der Arbeitnehmer von Gesetzeswegen zu berücksichtigen. Beide    Rechtsordnungen sehen die Entsendung von ArbeitnehmervertreterInnen zur Wahrung ihrer Interessen in den Aufsichtsrat    vor.<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn18"           title="" class="external-link" rel="nofollow">[18]</a></p><p>&nbsp;</p><p><strong><em>Kann ein Aktionär auf    den Gewinnanspruch (Dividende) zur Förderung des Gemeinwohls verzichten?</em></strong></p><p>Siehe hierzu die    Ausführungen beim Indikator E 4.</p><p>&nbsp;</p><p><strong><em>Welchem Subindikator sind Mitarbeitervorsorgekassen    (Pensionskassen, Versicherungen) zuzuordnen und wie erfolgt die Bewertung?</em></strong></p><p>Die Auswahl der    Vorsorgekasse und anderer anlagerelevanten Versicherungen wird bei dem Subindikator Veranlagung berücksichtigt.</p><p>Eines der zentralen Problemfelder, das sich in Zusammenhang mit Mitarbeitervorsorgekassen auftut, ist die Frage nach    der RisikoträgerIn für die betriebliche Altersvorsorge. Potenzielle RisikoträgerInnen können die ArbeitgeberIn, die    ArbeitnehmerIn oder die Vorsorgekasse sein. Die zu tragenden Risiken sind das Kapitalmarkt-, das Inflations- und das    „Langlebigkeitsrisiko“.</p><p>Die Volatilität der Finanzmärkte zeigt Auswirkungen auf die Veranlagung von    Pensionsbeiträgen. Im Jahr 2008 (Finanzkrise) waren etliche BezieherInnen von Pensionskassenpensionen mit Kürzungen    von über 20 % konfrontiert.</p><p>In Österreich gibt es keine explizite Verpflichtung des Staates etwa in Form einer    Ausfallhaftung bei Verlusten in der betrieblichen Altersvorsorge. Auch der ArbeitgeberIn kommt gesetzlich keine    Verantwortung zu, etwa in Form der Übernahme von Finanzierungsverantwortung bei Unterdeckung. Sohin obliegt das    Risiko der Kapitalveranlagung und der versicherungstechnischen Risiken allein den Anwartschafts- bzw. den    Pensionsberechtigten.</p><p>Positiv bewertet wird die Übernahme bzw. das Teilen von Verantwortung (z.B.    Finanzierungsverantwortung bei Unterdeckung) und die qualitative Beschränkung auf ethisch-nachhaltige und risikoarme    Finanztitel sowie die Auswahl einer Vorsorgekasse, die mehrheitlich ethisch-nachhaltig veranlagt. <a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftn19"            title="" class="external-link" rel="nofollow">[19]</a> In die Auswahl der Vorsorgekasse kann der Betriebsrat    eingebunden werden (vgl. auch C5, innerbetriebliche Mitbestimmung).</p><p><strong>&nbsp;</strong></p><p><strong><em>Wie    wird die Mitwirkung in Tauschkreisen bewertet?</em></strong></p><p>Historisch hat sich der Kaufvertrag aus dem    Tauschvertrag entwickelt. Dieser geht wiederum auf die Schenkung zurück. Gemischte Verträge, die Elemente des Kaufs    und des Tauschs enthalten od. Tauschverträge werden positiv berücksichtigt. Ebenso die Schenkung.</p><p        align="left"><strong>&nbsp;</strong></p><p align="left"><strong>Wieso ist ein totaler Zinsverzicht vorbildlich    und nicht ein Inflationsausgleich?</strong></p><p>Siehe hierzu die Ausführungen beim Indikator E 4.</p>';

indicators[1].footnotes.content = '<div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref1"        title="" class="external-link" rel="nofollow">[1]</a>&nbsp; Z.B. Ethik-Schulung der Mitarbeiter im    Finanzcontrolling; themenbezogene Informationsveranstaltung für Mitarbeiter etc.</p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref2"        title="" class="external-link" rel="nofollow">[2]</a>&nbsp; Als Quelle zur Recherche zu großen Finanzinstituten    kann u.a. Banktrack (<a href="http://www.banktrack.org/" class="external-link" rel="nofollow">www.banktrack.org</a>)    dienen.</p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref3"        title="" class="external-link" rel="nofollow">[3]</a>&nbsp; Z.B. durch transparente Finanzierungspolitik der    Bank, Definition klarer Ausschlusskriterien etwa anhand des Frankfurt-Hohenheimer-Leitfadens, Mitunternehmen,    KundInnnen, LieferantInnnen, keine Verwendung spekulativer Finanzderivate etc.</p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref4"        title="" class="external-link" rel="nofollow">[4]</a>&nbsp; Z.B. Kredite für ethisch-ökologische Projekte,    Investition in erneuerbare Energien, thermische Sanierung, gemeinwohlorientierte Forschung und Entwicklung,</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref5"        title="" class="external-link" rel="nofollow">[5]</a> Z.B. Begebung von handelbaren Aktien, Beteiligung stiller    GesellschafterInnen mit Intention der Vorbereitung einer Aktienemission.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref6"        title="" class="external-link" rel="nofollow">[6]</a>&nbsp; Mitarbeiter- und Bürgerbeteiligung (z.B. lokale    Bürgerbeteiligungen im Bereich nachhaltiger Energie).</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref7"        title="" class="external-link" rel="nofollow">[7]</a> Auf den Einlagenbegriff nach österreichischem    Bankwesengesetz kann in diesem Rahmen nicht eingegangen werden.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref8"        title="" class="external-link" rel="nofollow">[8]</a> Vgl. den Artikel in Brand eins 07/2009 von Johannes    Dieterich: <a href="http://www.brandeins.de/magazin/bewegt-euch/geschaefte-statt-geschenke.html"                  class="external-link" rel="nofollow">Geschäfte statt Geschenke</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref9"        title="" class="external-link" rel="nofollow">[9]</a> <a href="http://portal.wko.at/" class="external-link"                                                                 rel="nofollow">http://portal.wko.at</a></p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref10"        title="" class="external-link" rel="nofollow">[10]</a> Infos zur Taz-Genossenschaft: <a        href="http://www.taz.de/zeitung/genossenschaft/" class="external-link" rel="nofollow">http://www.taz.de/zeitung/genossenschaft/</a>    vgl. die Taz-Panter-Stiftung, die auch über Gelder der Berührungsgruppen finanziert wird: <a            href="http://www.taz.de/zeitung/taz-panter-stiftung/" class="external-link" rel="nofollow">http://www.taz.de/zeitung/taz-panter-stiftung/</a></p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref11"        title="" class="external-link" rel="nofollow">[11]</a> Vgl. kritische Info über stille Gesellschafter bei der    GLS Bank <a href="http://www.sakida.de/der-schwarze-fleck-der-gls-bank/" class="external-link" rel="nofollow">http://www.sakida.de/der-schwarze-fleck-der-gls-bank/</a>    sowie die kritische Betrachtung der Ausschüttung von Dividenden an die Genossen: <a href="http://www.taz.de/!83829/"                                                                                        class="external-link"                                                                                        rel="nofollow">http://www.taz.de/!83829/</a>.    Hingegen positive Berichterstattung bei Brand eins: <a            href="http://www.brandeins.de/magazin/eine-frage-der-haltung/die-bank-die-geld-verschenkt.html"            class="external-link" rel="nofollow">http://www.brandeins.de/magazin/eine-frage-der-haltung/die-bank-die-geld-verschenkt.html</a></p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref12"        title="" class="external-link" rel="nofollow">[12]</a> <a href="https://www.sparda-m.de/" class="external-link"                                                                  rel="nofollow">https://www.sparda-m.de/</a>.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref13"        title="" class="external-link" rel="nofollow">[13]</a> Siehe auch den Exkurs zur ökonomischen Resilienz.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref14"        title="" class="external-link" rel="nofollow">[14]</a><a        href="http://wirtschaftsblatt.at/home/nachrichten/oesterreich/1291297/Kleinund-Mittelbetriebe-steigern-Eigenkapital-quote"        class="external-link" rel="nofollow">http://wirtschaftsblatt.at/home/nachrichten/oesterreich/1291297/Kleinund-Mittelbetriebe-steigern-Eigenkapital-quote</a>    (26.01.2013)</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref15"        title="" class="external-link" rel="nofollow">[15]</a> Vgl. <a        href="http://www.wko.at/uns/dokumente/hb_ratingkennz_gewerbe_industrie.pdf" class="external-link"        rel="nofollow">http://www.wko.at/uns/dokumente/hb_ratingkennz_gewerbe_industrie.pdf</a></p></div><div><p align="left"><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref16"        title="" class="external-link" rel="nofollow">[16]</a> <a        href="http://www.wiwo.de/unternehmen/mittelstand/kapitalreserve-mittelstand-hat-2011-die-eigenkapital-quote-stark-erhoeht/6090500.html"        class="external-link" rel="nofollow">http://www.wiwo.de/unternehmen/mittelstand/kapitalreserve-mittelstand-hat-2011-die-eigenkapital-quote-stark-erhoeht/6090500.html</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref17"        title="" class="external-link" rel="nofollow">[17]</a> Heindl, Wenn Gewinn Sinn und Leben stiftet in ypsilon    6/2012, S. 14f.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref18"        title="" class="external-link" rel="nofollow">[18]</a> Ähnlich: Gesetzesentwurf der europäischen Kommission vom    November 2012 für eine Frauenquote in Aufsichtsräten.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref19"        title="" class="external-link" rel="nofollow">[19]</a> Problematisch: Gemäß der EU-Pensionsfonds-Richtlinie muss    der nationale Gesetzgeber einen bis zu 70%igen Aktienanteil erlauben. &nbsp;</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/B1-Ethisches-Finanzmanagement-GH/B1_4_1_Endversion_nach%20Korrektur.docx#_ftnref20"        title="" class="external-link" rel="nofollow">[20]</a> <a        href="http://www.ethikbank.de/privatkunden/investmentfonds/ausschlusskriterien/ausschlusskriterien-sarasin-fonds.html"        class="external-link" rel="nofollow">http://www.ethikbank.de/privatkunden/investmentfonds/ausschlusskriterien/ausschlusskriterien-sarasin-fonds.html</a></p></div>';

indicators[1].goals.content = '<p>Dem Finanzsystem kommt hinsichtlich des Gemeinwohls eine besondere Bedeutung zu. Das heute weit verbreitete    Renditedenken, die Annahme, dass systemisch „aus Geld mehr Geld“ gemacht werden könnte sowie damit einhergehende    riskante Anlageverhalten gefährden nicht nur die systemische Stabilität des Finanzsystems und die Staatsfinanzen,    sondern stehen auch den Werten Gerechtigkeit, Nachhaltigkeit, Menschenwürde oder Demokratie entgegen.</p><p>    Unternehmen können den Wandel der Finanzmärkte in Richtung Gemeinwohlorientierung mitgestalten. Der Wechsel zu einer    nicht gewinnorientierten Bank und die Inanspruchnahme ethisch-nachhaltiger Finanzdienstleistungen (z.B. bei    Rückstellungen für Pensionen) fördert Verteilungsgerechtigkeit sowie den sinnstiftenden und nachhaltigen Einsatz    finanzieller Ressourcen. Überdies können finanzmarktferne Formen der Finanzierung ins Auge gefasst werden: Leihe,    Schenkung, Erbschaft (im Sinne einer demokratischen Mitgift), die Gewährung eines (zinslosen) Darlehens zwischen    Unternehmen auch über Kreditplattformen oder die Finanzierung des Unternehmens über KundInnen und regionale    AnlegerInnen, soweit es die nationalen Gesetze erlauben. Gesetzesänderungen können aber auch angeregt werden.</p><p>    Wesentliche Elemente eines gemeinwohlorientierten Finanzmanagements sind einerseits der teilweise oder vollständige    Zins- oder Dividendenverzicht sowie die Investition in gemeinwohlorientierte Projekte und Unternehmen.</p><p>Das    Geld soll der Erde und dem Menschen dienen, nicht umgekehrt.</p><h2 id="B1EthischesFinanzmanagementMatrix41-AbgrenzungVerhältniszuanderenIndikatoren">Abgrenzung/Verhältnis zu    anderen Indikatoren</h2><p>Bei einer Finanzierung über Berührungsgruppen kann es Überschneidungen mit folgenden    Indikatoren geben:</p><ul>    <li>A1 LieferantInnenkredite</li>    <li>D1 Finanzierungsmodelle, die KundInnen miteinbeziehen</li>    <li>D2 Kooperation mit MitunternehmerInnen</li>    <li>E2 Kooperation durch Finanzmittel</li>    <li>E5 transparente Finanzberichterstattung</li>    <li>Gerechte Gewinnverteilung Private-Equity-Firmen, Venture Capital und Business Angels wird in E4 beschrieben.    </li></ul>';

indicators[1].impulsQuestions.content = '<li>Welche Finanzdienstleistungen werden durch Ihr Unternehmen von welchem Finanzdienstleister in Anspruch genommen    (Firmenkonto, Kredite, Veranlagung von Rückstellungen etc.)? Werden bei der Veranlagung bzw. bei der Auswahl des    Finanzdienstleisters explizit soziale oder ökologische Kriterien berücksichtigt (Anwendung von Ausschlusskriterien    bei der Veranlagung, sonstige Kriterien der nachhaltigen Veranlagung, Unternehmenspolitik etc.)? Wofür werden    etwaige Zinserträge verwendet?</li><li>Initiiert oder beteiligt sich das Unternehmen an Finanzierungsinitiativen mit Berührungsgruppen (Mitarbeiter,    Kunden, Lieferanten etc.)?</li><li>Durch welche Maßnahmen wird die finanzielle Stabilität (insbesondere bei stagnierenden bzw. schrumpfenden Umsätzen)    gewährleistet? Werden soziale oder ökologische Folgewirkungen (etwaiger) wirtschaftlicher Krisen durch pro-aktive    Herangehensweise bereits im Vorfeld evaluiert und versucht zu adressieren (z.B. Erhaltung der Arbeitsplätze)?</li><li>Wie erfolgt die Finanzierung des Unternehmens (Eigenkapitalfinanzierung, Kredite etc.)? In welcher Rechtsform ist    das Unternehmen organisiert? Fördert die gewählte Rechtsform das Gemeinwohl?</li><li>Welchen Stellenwert hat ethisches Finanzmanagement in Ihrem Unternehmen?</li>';

indicators[1].moreinfo.content = '<p><u>Beispiele für Alternativ-Banken:</u></p><ul>    <li>Global Alliance for Banking on Values: <a href="http://www.gabv.org/" class="external-link" rel="nofollow">www.gabv.org/</a>    </li></ul><p><u>Hintergrundinformationen Finanzsystem</u></p><ul>    <li>Erklärung von Bern: Hintergrundinformationen <a href="http://www.evb.ch/geld" class="external-link"                                                        rel="nofollow">www.evb.ch/geld</a>&nbsp;</li>    <li>Weltwirtschaft, Ökologie und Entwicklung: Finanzsystem und Finanzmarktregulierung <a            href="http://www.weed-online.org/themen/finanzen/index.html" class="external-link" rel="nofollow">http://www.weed-online.org/themen/finanzen/index.html</a>&nbsp;    </li>    <li>Bankentrack: <a href="http://www.banktrack.org/" class="external-link" rel="nofollow">www.banktrack.org</a> –        Informations-Plattform zu kritischen Finanzierungsprojekten.&nbsp;</li></ul><p>Übersicht Anlageformen</p><ul>    <li><a href="http://www.bewegungsstiftung.de/portfolio0.html?&amp;L=0" class="external-link" rel="nofollow">http://www.bewegungsstiftung.de/portfolio0.html?&amp;L=0</a>    </li></ul><p><strong>Bücher</strong></p><ul>    <li><em>Aßländer (Hrsg), </em>Handbuch Wirtschaftsethik, Metzler, Stuttgart, 2011.</li>    <li><em>Bernau, </em>Wir gründen eine Bank –<em> </em>Das Salzburger Modell. Dokumentation zur Urauführung am        Salzburger Landestheater, 2012.    </li>    <li><em>Dohmen</em>, Good Bank – Das Modell der GLS Bank, Orange Press, Freiburg, 2011.</li>    <li><em>Felber</em>, Neue Werte für die Wirtschaft: Eine Alternative zu Kommunismus und Kapitalismus, Deuticke,        Wien, 2008. (Insbesondere Kapitel 9: S. 242/243; 266–270).    </li>    <li><em>Felber, </em>Retten wir den Euro!, Deuticke, Wien, 2012.</li>    <li><em>Gabriel</em>, Nachhaltigkeit am Finanzmarkt. Mit ökologisch und sozial verantwortlichen Geldanlagen die        Wirtschaft gestalten, München, 2007.    </li>    <li><em>Holzinger</em>, Neuer Wohlstand: Leben und Wirtschaften auf einem begrenzten Planeten, JBZ, Salzburg, 2012.    </li>    <li><em>Huber, </em>Welche Bedeutung hat die Rechtsform der Unternehmen für die Transferzeit zwischen Veränderungen        gesellschaftlicher Wertvorstellungen und der Änderung unternehmerischer Ziele, Duncker, Berlin, 1975<em>.</em>    </li>    <li><em>Koslowski</em>, Ethik der Banken und der Börse, Mohr Siebeck, Tübingen,1997.</li>    <li><em>Reifer/Ford</em>, Banking for People, de Gruyter, Berlin, 1992.</li>    <li><em>Schumacher</em>, Die Rückkehr zum menschlichen Maß: Alternativen für Wirtschaft und Technik, Rowohlt,        Hamburg, 1977.    </li></ul><p><strong>Zeitschriften</strong></p><ul>    <li><em>Brien</em>, Reconsidering the Common Good in a Business Context in Journal for Business Ethics, 2009.</li>    <li><em>Emunds</em>, Renditedruck der Finanzmärkte in zfwu, Heft 2, 2011.</li>    <li><em>Heindl</em>, Wenn Gewinn Sinn und Leben stiftet in ypsilon Heft 6, 2012.</li>    <li><em>Jannsen</em>, <a            href="http://www.brandeins.de/magazin/beziehungswirtschaft/unternehmertum-statt-ehrenamt.html"            class="external-link" rel="nofollow">Unternehmertum statt Ehrenamt</a> in Brand eins Heft 7, 2010.        (Alternative Finanzierungsformen für Sozialunternehmen).    </li>    <li><em>Pennekamp</em>, Der Utopist in Brand eins, Heft 8, 2011. (Portrait des Vorstandsvorsitzenden der Sparda Bank        München).    </li>    <li><em>Pfeiffer</em>, <a href="http://www.brandeins.de/magazin/selbststaendig-werden/start-kapital.html"                              class="external-link" rel="nofollow">Start Kapital</a> in Brand eins Heft, 2002. (Artikel        über Risiko-Kapital-Firmen und Jungunternehmer).    </li>    <li><em>Walcher</em>, Interview mit Gerd Walger: <a            href="http://www.brandeins.de/magazin/-744dc669da/kapital-gegen-unternehmer.html" class="external-link"            rel="nofollow">Kapital gegen Unternehmer</a> in Brand eins, Heft 1, 2010.    </li>    <li><em>Willenbrock</em>, Bauern, schlau! Genussgemeinschaften in Brand eins, Heft 12, 2012. (Alternative Formen der        Unternehmensfinanzierung, wenn dem Landwirt das Kapital fehlt, dem Städter das Land, dann bringen        Genussgemeinschaften beide zusammen).    </li></ul><p><strong>Experten</strong></p><ul>    <li><span>Xaver Diermayr <a href="mailto:xaver.diermayr@gmx.de" class="external-link" rel="nofollow">xaver.diermayr@gmx.de</a> </span>    </li></ul><div><h5        id="B1EthischesFinanzmanagementMatrix41-RedakteurInGiselaHeindlgiselaheindlgemeinwohl-oekonomieorgMitarbeitChristianFelberChristianLoyChristianRüther">    RedakteurIn: Gisela Heindl: <a href="mailto:gisela.heindl@gemeinwohl-oekonomie.org" class="external-link"                                   rel="nofollow">gisela.heindl@gemeinwohl-oekonomie.org</a>, Mitarbeit: Christian    Felber, Christian Loy, Christian Rüther</h5></div>';

indicators[2].definition.content = '<p>Gleichstellung und Diversität wird in den folgenden Ausführungen nur zur Wahrung besserer Übersichtlichkeit in einem    eigenen Abschnitt erläutert. Im Sinne der Chancengleichheit müssen jedoch alle Maßnahmen zur Wahrung und Steigerung    der Arbeitsplatzqualität auch darauf hin überprüft werden, ob sie (tatsächlich) allen MitarbeiterInnen gleichermaßen    zur Verfügung stehen.</p><p><strong>Arbeitsplatzqualität</strong></p><p>Hohe Arbeitsplatzqualität und die damit    einhergehende Arbeitszufriedenheit sind nicht allein wegen ihrer positiven Auswirkungen auf Leistung, sondern auch    „aufgrund der hohen Korrelation zur Lebenszufriedenheit und zur psychischen und physischen Gesundheit (Stress)    erstrebenswert.“<a href="#_ftn9" title="" rel="nofollow">[9]</a> Schlechte Arbeitsbedingungen hingegen können zu    Leistungsminderung, Krankheit sowie psychischen wie physischen Störungen führen.<a href="#_ftn10" title=""                                                                                       rel="nofollow">[10]</a></p><p>Für    die Beschreibung von Arbeitsplatzqualität sind sowohl Zufriedenheitsmaße als auch allgemein gültige    Qualitätsmerkmale relevant<a href="#_ftn11" title="" rel="nofollow">[11]</a>. Erstere spiegeln dabei das subjektive    Erleben wider, die letzteren stellen die strukturelle Dimension der Arbeit in den Vordergrund. Für eine Einschätzung    der Höhe von Arbeitsplatzqualität sind Zufriedenheitsmaße wegen ihrer mangelnden Eindeutigkeit und Stabilität    weniger gut geeignet. Die Bewertungstabelle bezieht sich daher auf folgende konkrete Teilaspekte von    Arbeitsplatzqualität<a href="#_ftn12" title="" rel="nofollow">[12]</a>:</p><p>1)&nbsp;&nbsp;&nbsp; Arbeitsinhalt,    Arbeitsorganisation und Führungsstil</p><p>2)&nbsp;&nbsp;&nbsp; Ausbildung und Weiterbildung („Disponibilität und    Lernen“)</p><p>3)&nbsp;&nbsp;&nbsp; Handlungsspielraum: Tätigkeitsspielraum und Entscheidungs- und    Kontrollspielraum, Klarheit</p><p>4)&nbsp;&nbsp;&nbsp; Betriebsklima: Kommunikation und Kooperation</p><p>Diese    Teilaspekte (1–4) wurden zusammengefasst im Sub-Indikator <em>Mitarbeiterorientierte Organisationskultur und        -strukturen</em>.</p><p>Das Betriebsklima ist Ausdruck subjektiver Zufriedenheit und kann daher nur aus der    Sicht der Mitarbeitenden beurteilt werden<a href="#_ftn13" title="" rel="nofollow">[13]</a>. Eine    mitarbeiterorientierte Organisationskultur ist in diesem Sinn geprägt von einer generellen Orientierung sowie    entsprechenden konkreten Maßnahmen zur Steigerung der Arbeitszufriedenheit.</p><p>Positiv auf das Betriebsklima    wirken einerseits zunehmende Dauer und Regelmäßigkeit des gegenseitigen Kontakts (hoher Grad an Kommunikation und    Kooperation), Aufgabenklarheit und individuelle Entwicklungs- sowie Mitgestaltungsmöglichkeiten. Ein umfassendes    Konzept, das diese Aspekte behandelt, beinhaltet notwendig<a href="#_ftn14" title="" rel="nofollow">[14]</a></p><ul>    <li>Maßnahmen zur positiven Gestaltung von Arbeitsinhalten<a href="#_ftn15" title="" rel="nofollow">[15]</a></li>    <li>Maßnahmen zur sozialen und organisatorischen Integration neuer Mitarbeitender in die Arbeitsgruppe und in das        Gesamtunternehmen (Personaleinführung)    </li>    <li>Maßnahmen zur Personalentwicklung, die über die klassische Aus- und Weiterbildung hinausgehen, indem sie auch        Elemente der Mitarbeitermotivation und -führung (z.B. Coaching, Mentoring) enthalten sowie zusätzlich        Karriereplanung und -entwicklung miteinschließen.    </li></ul><p>Anreizsysteme hingegen können mitunter einen negativen Einfluss auf das Betriebsklima haben, wenn sie auf    individuelle Nutzenmaximierung ausgerichtet sind und zu Konkurrenzsteigerung und opportunistischem Verhalten führen.<a            href="#_ftn16" title="" rel="nofollow">[16]</a></p><p>5)&nbsp;&nbsp;&nbsp; Entlohnung</p><p>6)&nbsp;&nbsp;&nbsp;    Organisatorische Rahmenbedingungen</p><p>7)&nbsp;&nbsp;&nbsp; Soziales Umfeld und Rückkoppelung</p><p>Diese    Teilaspekte (5–7) finden sich im Sub-Indikator <em>Faire Entgelt- und Beschäftigungspolitik</em>.</p><p>Im Fokus    dieses Sub-Indikators steht die innerbetriebliche Entgelt- und Beschäftigungspolitik. Entwicklungsmöglichkeiten,    Fairness und Transparenz bilden in diesem Bereich die wesentlichen Eckpfeiler für hohe Arbeitsplatzqualität.</p><p>    So ist eine nachhaltige Beschäftigungsstrategie geprägt von Sicherheit im Sinne langfristiger Perspektiven durch    unbefristete Beschäftigungsverhältnisse (im Gegensatz zu Temporär- oder Leiharbeit), ideal in Verbindung mit    Entwicklungs- und Aufstiegsmöglichkeiten für die MitarbeiterInnen. Im Bereich der Entgeltpolitik ist zusätzlich zu    transparenten und verbindlichen Richtlinien (gleiche Entgelthöhe für gleiche Arbeit) das Erbringen freiwilliger    betrieblicher Sozialleistungen eine Möglichkeit zur Verbesserung der Arbeitsplatzqualität. Auch in diesem Bereich    soll Fairness bestehen, indem alle MitarbeiterInnen – unabhängig von Beschäftigungsausmaß, Art des    Vertragsverhältnisses, Beschäftigtengruppe etc. – gleichermaßen Anspruch auf diese Leistungen haben.</p><p>8)&nbsp;&nbsp;&nbsp;    Arbeitszeit- und Pausengestaltung</p><p>9)&nbsp;&nbsp;&nbsp; Arbeitsplatzgestaltung</p><p>10)    Arbeitsplatztechnologie, Arbeitsumfeld und Arbeitssicherheit</p><p align="left">Diese Teilaspekte (8–10) werden    abgebildet im Sub-Indikator <em>Arbeitsschutz und Gesundheitsförderung einschließlich Work-Life-Balance/flexible        Arbeitszeiten</em>.</p><p align="left">Im Rahmen der Arbeitsplatzgestaltung sollen für die MitarbeiterInnen    optimale Arbeitsbedingungen geschaffen werden, indem die Arbeit und die Arbeitsbedingungen an den Mitarbeitenden    angepasst werden (Ergonomie). Dazu werden zusätzlich zu Maßnahmen zum Ausbau der Arbeitssicherheit (z.B. durch    Schulungen) auch Arbeitsabläufe, Arbeitsmittel, Arbeitsplätze, das unmittelbare und erweiterte Arbeitsumfeld und    Arbeitszeiten auf ihre Auswirkungen auf die umfassende und dauerhafte Gesundheitserhaltung der MitarbeiterInnen    geprüft und weiterentwickelt. Im Bereich Arbeitszeit geht es dabei sowohl um eine angemessene Arbeitszeit- und    Pausengestaltung als auch um Maßnahmen zur Arbeitszeitflexibilisierung<a href="#_ftn17" title=""                                                                             rel="nofollow">[17]</a> als Beitrag zu    einer gesunden und damit gesundheitserhaltenden Work-Life-Balance. In Gesamtkonzepten zur betrieblichen    Gesundheitsförderung werden sämtliche Themen, die die Gesunderhaltung der MitarbeiterInnen betreffen berücksichtigt.    Das Hauptarbeitsfeld der Schaffung gesundheitsgerechter Arbeitsbedingungen (= bedingungsbezogene Interventionen)    wird dabei durch die Verbesserung des individuellen Gesundheitsverhaltens der MitarbeiterInnen (= verhaltensbezogene    Interventionen) ergänzt.<a href="#_ftn18" title="" rel="nofollow">[18]</a></p><p><strong>Gleichstellung</strong></p><p>Das Recht aller Menschen auf Gleichberechtigung bedeutet zunächst, dass Diskriminierung verboten ist. Zugleich    umfasst es aber auch eine Verpflichtung dazu, bestehende Nachteile zu beseitigen<a href="#_ftn19" title=""                                                                                       rel="nofollow">[19]</a>.    Organisationen, die in diesem Sinn aktive Gleichstellungsarbeit leisten,</p><ul>    <li>erkennen bestehende diskriminierende oder gleichstellungshinderliche Gegebenheiten,</li>    <li>sind sich ihrer verantwortlichen Rolle zur Realisierung von Chancengleichheit bewusst und</li>    <li>nutzen ihre Gestaltungsmacht gezielt zur aktiven Förderung von Chancengleichheit. Diese proaktive Gestaltung        zugunsten von Vielfalt erfordert die Schaffung eines kultursensiblen Arbeitsumfeldes, das alle MitarbeiterInnen        gleichermaßen schätzt und ihnen so ermöglicht, sich voll in der Organisation einzubringen<a href="#_ftn20"                                                                                                    title=""                                                                                                    rel="nofollow">[20]</a>.        Dazu gilt es        <ul>            <li>Stereotypen und Stigmatisierung zu verhindern, indem statt der Errichtung neuer Programme für                „Minderheiten“ oder „Benachteiltigte“, bestehende Privilegien und Bevorzugung in Frage gestellt werden.            </li>            <li>das Commitment und das Engagement von einflussreichen Akteuren und Akteurinnen in der Organisation zu                gewinnen und zu sichern, sowie deren Gleichstellungskompetenz zu erhöhen.            </li>            <li>das Denken in Mehrheiten und Minderheiten zu überwinden und zu erreichen, dass sozio-kulturelle Faktoren                keine Rolle mehr für Lebens-, Arbeits- und Karrierechancen spielen.            </li>            <li>Chancengleichheit beim Zugang zu und in Fach- und Führungspositionen zu realisieren.<a href="#_ftn21"                                                                                                       title=""                                                                                                       rel="nofollow">[21]</a>            </li>        </ul>    </li></ul><p>Für wirksame Gleichstellungsarbeit im Unternehmen müssen diese Grundsätze in allen Unternehmensstrukturen und    -prozessen berücksichtigt sein, das heißt Gleichstellung ist eine Dimension bei der Gestaltung sämtlicher Praktiken    im Unternehmen<a href="#_ftn22" title="" rel="nofollow">[22]</a>. Dies gilt insbesondere für Maßnahmen im Bereich    der Personalarbeit (z.B. Rekrutierung, Personalentwicklung, Arbeitszeitregelungen) und Organisationsstrukturen.</p><p>Betriebe, die diese Ziele durchgängig in ihren Strukturen, Praktiken und Handlungen leben, leisten einen wichtigen    Beitrag zu Fairness und Chancengleichheit, nicht nur am Arbeitsmarkt, sondern auch darüber hinaus<a href="#_ftn23"                                                                                                        rel="nofollow">[23]</a>.</p>';

indicators[2].details.content = '<p>Folgende Aspekte sind (neben Mitbestimmung, die in C5 behandelt wird) für <strong>mitarbeiterorientierte    Organisationskultur und -strukturen</strong> zentral:</p><ul>    <li>Klarheit über Aufgabe und Verantwortung (und deren Grenzen)</li>    <li>Wertschätzungskultur, d.h. Prozesse und Strukturen der betrieblichen Wertschätzung auch jenseits von        Geldzahlungen    </li>    <li>Führungskultur der Klarheit und offenen Rückmeldungen, Möglichkeit zu regelmäßigen Feedback- und        Entwicklungsgesprächen    </li>    <li>Unabhängige Beratungsangebote bzw. Anlaufstelle für Anliegen oder bei Problemen &ndash; z.B. Supervision,        Coaching, Teamentwicklung    </li>    <li>Kommunikationskultur: klare Kommunikationswege, Mitarbeiterbefragungen werden regelmäßig durchgeführt und die        Ergebnisse umgesetzt        <ul>            <li>Vorbildlich: jährliche Mitarbeiterbefragungen, die von Externen durchgeführt und über den Betriebsrat                abgewickelt werden; die Rückmeldungen der MitarbeiterInnen münden in konkrete Maßnahmen            </li>            <li>Umfassende, qualitativ hochwertige Aus- und Weiterbildung                <ul>                    <li>Vorbildlich: Auswahl von Fortbildungen erfolgt in Absprache, die tatsächliche Nutzung ist in                        hohem Ausmaß in allen Organisationsbereichen gegeben                    </li>                </ul>            </li>        </ul>    </li></ul><p align="left">Wesentliche Aspekte für eine erfolgreiche <strong>betriebliche Gesundheitsförderung</strong> sind    (wiederum neben Partizipation, die in C5 behandelt wird) die folgenden<a rel="nofollow" title=""                                                                             href="#_ftn7">[7]</a>:</p><ul>    <li>Ganzheitlichkeit: Betriebliche Gesundheitsförderung umfasst verhaltens- und verhältnisorientierte Maßnahmen        (erstere sind auf die MitarbeiterInnen, zweitere auf die Arbeitsbedingungen bezogen). Neben der Verminderung von        Gesundheitsrisiken werden gleichzeitig Schutzfaktoren und Gesundheitsressourcen gesteigert. Es geht sowohl um        physische als auch um psychische Gesundheit.    </li>    <li>Integration: Betriebliche Gesundheitsförderung muss bei allen bedeutenden Entscheidungen in allen Bereichen des        Unternehmens Berücksichtigung finden.    </li>    <li>Projektmanagement: systematische Umsetzung aller Maßnahmen</li></ul><p><strong>Einschränkung für Einpersonenunternehmen</strong></p><p>Für Einpersonenunternehmen gilt der Sub-Indikator Gleichstellung und Diversität nicht.</p><p><strong>Abgrenzungen zu anderen Indikatoren</strong></p><p>Der Indikator C1 behandelt mit Gleichstellung ein Thema, das sich als Querschnittsmaterie durch sämtliche    unternehmerische Aktivitäten erstreckt.</p><p>Umgekehrt werden für den Indikator C1 relevante Aspekte auch in den Indikatoren C2, C3, C4 und C5 behandelt:</p><p>Das gemeinsame Thema mit dem Indikator C2 ist die <em>Arbeitszeit</em>, wobei der Fokus in C2 auf der gerechten    Verteilung der vorhandenen Arbeit liegt, während in C1 die Arbeitszeiten und die zur Verfügung stehenden    Arbeitszeitmodelle für die bereits im Unternehmen beschäftigten Personen im Zentrum stehen.</p><p>Eine Überschneidung mit dem Indikator C3 besteht im Bereich der <em>gesundheitsförderlichen Aspekte</em>, die Teil    umweltbewusstseinssteigernder Maßnahmen und Handlungen (z.B. Rad fahren, verringerte Arbeitslast und mehr Zeit für    Erholung, biologische Nahrungsmittel) sein können.</p><p>Auch C4, die <em>gerechte Verteilung des Einkommens,</em> kann sich indirekt auf die Arbeitsplatzqualität auswirken.    Es gibt eine Reihe von Untersuchungen<a rel="nofollow" title="" href="#_ftn8">[8]</a>, die auf positive Effekte    hinweisen, wenn die Differenz zwischen den unteren Einkommen/Vermögen und oberen Einkommen/Vermögen gering ist. Je    gleicher das Einkommen/ Vermögen, desto positivere Auswirkungen hat das auf die Gesellschaft. Diese Ergebnisse    können durchaus auch auf die Arbeitswelt übertragen werden.</p><p><em>Mitbestimmung </em>als ein wesentlicher Aspekt positiver Arbeitsplatzqualität wird allein im Indikator C5    behandelt.</p>';

indicators[2].footnotes.content = '<div><p><a href="#_ftnref1" title="" rel="nofollow">[1]</a> Die angeführten Kennzahlen können so dazu verwendet werden,    um die Wirksamkeit von Interventionen zu prüfen.</p></div><div><p><a href="#_ftnref2" title="" rel="nofollow">[2]</a> Um von einer tatsächlichen Rückkehr sprechen zu können, muss    die gesetzlich vorgeschriebene Behaltefrist nach der Karenz deutlich überschritten sein und sich die Vereinbarkeit    im Arbeitsalltag soweit bewährt haben, dass die Stelle nicht innerhalb eines Jahres nach der Rückkehr aufgegeben    wurde.</p></div><div><p><a href="#_ftnref3" title="" rel="nofollow">[3]</a> Die zwei goldenen Regeln für Mitarbeiterbefragungen werden    von Erich Laminger (Managing Partner <em>Great Place to Work</em>) benannt mit a) Befragung an Externe vergeben und    b) Ergebnisse intern diskutieren. (<a            href="http://derstandard.at/1358303910774/Mitarbeiterbefragung-Nur-gut-von-extern" class="external-link"            rel="nofollow">http://derstandard.at/1358303910774/Mitarbeiterbefragung-Nur-gut-von-extern</a>)</p></div><div><p><a href="#_ftnref4" title="" rel="nofollow">[4]</a> Konkret in den Dimensionen: Klarheit über Aufgaben und    Verantwortlichkeiten (und ihre Grenzen), Wertschätzungskultur, Führungskultur, konstruktiver Umgang mit Problemen,    Kommunikationskultur inkl. MA-Befragungen und Aus- und Weiterbildung.</p></div><div><p><a href="#_ftnref5" title="" rel="nofollow">[5]</a> In Österreich und Deutschland gibt es Mindestquoten für die    Beschäftigung von Menschen mit Behinderung. Wenn diese unterschritten werden, müssen relativ geringe    Ausgleichsabgaben geleistet werden, was die Nichterfüllung leicht macht. Daher bewerten wir hier bei ersten    Schritten schon Quoten unterhalb der gesetzlichen Vorschrift positiv.</p></div><div><p><a href="#_ftnref6" title="" rel="nofollow">[6]</a> Z.B. in Form von umfassenden Fortbildungsmaßnahmen    (Diversity-Trainings, Gleichstellungsworkshops, Gender-Trainings), die die Sensibilisierung für Diversität und den    Aufbau von Gleichstellungskompetenzen zum Ergebnis haben.</p></div><div><p align="left"><a href="#_ftnref7" title="" rel="nofollow">[7]</a> Siehe ENWHP (Hrsg.) (2007): Die Luxemburger    Deklaration zur betrieblichen Gesundheitsförderung in der Europäischen Union. ENWHP. Verfügbar unter: <a            href="http://www.netzwerkbgf.at/mediaDB/677704_Luxemburger%20Deklaration%20Fassung%202007%20deutsch.pdf"            class="external-link" rel="nofollow">http://www.netzwerkbgf.at/mediaDB/677704_Luxemburger%20Deklaration%20Fassung%202007%20deutsch.pdf</a></p></div><div><p><a href="#_ftnref8" title="" rel="nofollow">[8]</a> Vgl. Pickett, Kate/Wilkinson, Richard: Gleichheit ist Glück.    Warum gerechte Gesellschaften für alle besser sind, Zweitausendeins, 2010 + Websites zu dem Thema: <a            href="http://www.equalitytrust.org.uk/" class="external-link" rel="nofollow">http://www.equalitytrust.org.uk/</a>    + <a href="http://inequalitywatch.eu/?lang=en" class="external-link" rel="nofollow">http://inequalitywatch.eu/?lang=en</a></p></div><div><p><a href="#_ftnref9" title="" rel="nofollow">[9]</a> Thommen, Jean-Paul (2004): Lexikon der Betriebswirtschaft.    Managementkompetenz von A bis Z. 3., überarbeitete und erweiterte Auflage. Zürich: Versus Verlag AG, S. 47</p></div><div><p><a href="#_ftnref10" title="" rel="nofollow">[10]</a> Ebd., S. 40</p></div><div><p><a href="#_ftnref11" title="" rel="nofollow">[11]</a> Vgl. Schreyögg, Georg (2006): Arbeitsqualität. In:    Handelsblatt (Hrsg.): Wirtschaftslexikon. Das Wissen der Betriebswirtschaftslehre. Stuttgart: Schäffer-Poeschel    Verlag.2006, S.420f.</p></div><div><p><a href="#_ftnref12" title="" rel="nofollow">[12]</a> Alle angeführten Dimensionen von Arbeitsplatzqualität sind    Teil der Ausführungen zum Thema Arbeitsplatzqualität und zugeordneter Schlagworte (z.B. Arbeitsbedingungen) im    Handelsblatt Wirtschaftslexikon des Schäffer-Poeschel Verlages (2006) und im Lexikon der Betriebswirtschaft des    Versus Verlages (2004).</p></div><div><p><a href="#_ftnref13" title="" rel="nofollow">[13]</a> Thommen, Jean-Paul (2004): Lexikon der Betriebswirtschaft.    Managementkompetenz von A bis Z. 3., überarbeitete und erweiterte Auflage. Zürich: Versus Verlag AG, S. 94</p></div><div><p><a href="#_ftnref14" title="" rel="nofollow">[14]</a> Ebd., S. 94 und S. 484</p></div><div><p><a href="#_ftnref15" title="" rel="nofollow">[15]</a> Z.B. entlang der Dimensionen: Handlungsspielraum    (Tätigkeitsspielraum und Entscheidungs- und Kontrollspielraum), Aufgabenvielfalt, Ganzheitscharakter der Aufgabe,    Bedeutungsgehalt der Aufgabe, Autonomie des Handelns, Rückkoppelung, Vermeidung von Über- bzw. Unterforderung. (nach    Hackman, J. &amp; Oldham, G. (1980): <em>Work redesign. </em>Reading, MA: Addison-Wesley)</p></div><div><p><a href="#_ftnref16" title="" rel="nofollow">[16]</a> Wolff, Brigitta &amp; Lucas, Sven (2006): Anreizsysteme.    In: Handelsblatt (Hrsg.): Wirtschaftslexikon. Das Wissen der Betriebswirtschaftslehre. Stuttgart: Schäffer-Poeschel    Verlag. S.242ff.</p></div><div><p><a href="#_ftnref17" title="" rel="nofollow">[17]</a> „Unter Arbeitszeitflexibilisierung versteht man eine    differenzierte Regelung der Arbeitszeit, die […] die Optimierung des individuellen, betrieblichen und    gesellschaftlichen Gesamtnutzens aus der Arbeit zum Ziel hat. Durch eine solche Regelung wird eine starre und    einheitliche Gestaltung der Arbeitszeit vermieden, und es können die Bedürfnisse von Arbeitnehmern und Arbeitgebern    berücksichtigt werden.“ (Thommen, Jean-Paul (2004): Lexikon der Betriebswirtschaft. Managementkompetenz von A bis Z.    3., überarbeitete und erweiterte Auflage. Zürich: Versus Verlag AG, S. 46) Dazu zählen unter anderem gleitende    Arbeitszeiten, gleitende und flexible Pensionierung, zeitlich begrenzte Freistellungen von der Arbeit (Sabbatical),    Teilzeitarbeit, Job Sharing, Bandbreitenmodelle und Teilzeit à la carte.</p></div><div><p><a href="#_ftnref18" title="" rel="nofollow">[18]</a> Kohlbacher, M. &amp; Meggeneder, O. (2006): Zehn Jahre    Betriebliche Gesundheitsförderung in Österreich. In: Meggeneder &amp; Hirtenlehner (Hrsg.): Zehn Jahre Betriebliche    Gesundheitsförderung in Österreich. Forschungsstand – Strukturen – Entwicklungen. Frankfurt am Main: Mabuse-Verlag.    S.&nbsp;17–36.</p></div><div><p><a href="#_ftnref19" title="" rel="nofollow">[19]</a> So umfasst beispielsweise der Artikel 3 im Deutschen    Grundgesetz – das Recht auf Gleichheit aller Menschen – explizit die Selbstverpflichtung des deutschen Staates zur    Förderung der Beseitigung bestehender Nachteile {Art.3 (2)}.</p></div><div><p><a href="#_ftnref20" title="" rel="nofollow">[20]</a> Vgl. Danowitz, Mary Ann; Hanappi-Egger, Edeltraud &amp;    Mensi-Klarbach, Heike (2012): Diversity in Organizations: Concepts and Practices. Palgrave Macmillan. S. 26.</p></div><div><p><a href="#_ftnref21" title="" rel="nofollow">[21]</a> In Ergänzung zu Danowitz, Mary Ann et al. (2012): Krell,    Gertraude (2011): Grundlegend: Ecksteine, Gleichstellungscontrolling, Verständnis und Verhältnis von Gender und    Diversity. In: Krell, Gertraude et al. (Hrsg.): Chancengleichheit durch Personalpolitik. Gleichstellung von Frauen    und Männern. Wiesbaden: Gabler. S. 1–24.</p></div><div><p><a href="#_ftnref22" title="" rel="nofollow">[22]</a> Thommen, Jean-Paul (2004): Lexikon der Betriebswirtschaft.    Managementkompetenz von A bis Z. 3., überarbeitete und erweiterte Auflage. Zürich: Versus Verlag AG, S. 234f.</p></div><div><p><a href="#_ftnref23" title="" rel="nofollow">[23]</a> Neben betriebswirtschaftlichen Zielen stehen auch    gesamtwirtschaftliche Ziele im Zentrum unternehmerischen Handelns. Letztere „stehen im Dienst allgemeiner    gesellschaftlicher Ziele“, wofür „ein respektvoller Umgang mit anderen Menschen, Lebensformen und Kulturen […] eine    Grundmaxime“ ist. (Vgl. Thommen, Jean-Paul (2004): Lexikon der Betriebswirtschaft. Managementkompetenz von A bis Z.    3., überarbeitete und erweiterte Auflage. Zürich: Versus Verlag AG,S.&nbsp;235 und 692)</p></div>';

indicators[2].goals.content = '<p>Von den Grundrechten ist kein Lebensbereich ausgenommen. Die in ihnen festgeschriebenen Werte der Unantastbarkeit der    Menschenwürde, das Recht auf Unversehrtheit, Freiheit und freie Entfaltung der Persönlichkeit sowie auf    Gleichberechtigung gelten somit uneingeschränkt auch für das Arbeitsleben.</p><p>Am Arbeitsplatz (im Arbeitsverhältnis) zeigt sich Menschenwürde durch die Gleichwertigkeit und Chancengleichheit    aller im Unternehmen arbeitenden Personen und dem Ziel möglichst gesunder, freier und kooperativer    Arbeitsbedingungen. Das Gegenteil sind Ausbeutung zugunsten des Gewinns Einzelner, Verweigerung von Mitbestimmung,    Diskriminierung oder Schädigung der Gesundheit.</p><p align="center"><em>Insgesamt ist ein Arbeitsplatz in seiner Qualität vorbildlich, wenn er dauerhaft und umfassend in    größtmöglichem Ausmaß den Bedürfnissen aller im Unternehmen Arbeitenden, auch in ihrer individuellen    Verschiedenheit, gerecht wird.</em></p><p>Hohe Arbeitsplatzqualität in diesem Sinn schafft die Grundlage dafür, dass sich die MitarbeiterInnen gleichermaßen    als Individuen weiterentwickeln und gesundheitserhaltend, sinnerfüllt, kompetent, selbstverantwortlich und in    Abstimmung mit anderen Organisationsmitgliedern einen aus der Sicht aller wertvollen Beitrag zur Entwicklung des    Unternehmens leisten können.</p><p>Aufgrund der aktuell noch ganz wesentlich bestehenden Benachteiligung von Personen, die nicht der    gesamtgesellschaftlich dominanten Gruppe angehören, spielen betriebliche Gleichstellungsmaßnahmen im Unternehmen,    die die Realisierung von Chancengleichheit zum Ziel haben, sowie die proaktive Förderung von Heterogenität eine    besonders wichtige Rolle für hohe Arbeitsplatzqualität im obigen Sinn.</p>';

indicators[2].implementationHelp.content = '<p>Die Durchführung von <strong>MitarbeiterInnenbefragungen </strong>kann wesentliche Anhaltspunkte für die    Identifikation von Handlungsfeldern liefern, insbesondere wenn die Befragung organisationsextern durchgeführt und    intern über den Betriebsrat abgewickelt wird.</p><p>Besonders wichtig für Gleichstellungsarbeit im Unternehmen ist    die <strong>gezielte Auswertung von Daten </strong>(z.B. Fluktuation, Krankenstandstage, Langzeitkrankenstände, Höhe    des Entgelts) nach verschiedenen Kriterien (z.B. Geschlecht, Art des Beschäftigungsverhältnisses, Arbeitsbereich im    Unternehmen). Eine solche Auswertung ist eine wichtige Grundlage für das Erkennen eventuell bestehender Privilegien,    Bevorzugungen und Benachteiligungen innerhalb des Betriebes.</p><p>Grundsätzlich hilfreich für positive    Entwicklungen im Bereich Arbeitsplatzqualität und Gleichstellung ist eine durchgängige, gute und offene <strong>Kooperation        mit verschiedenen MitarbeiterInnenvertreterInnen</strong> (z.B. BetriebsrätInnen, Gleichbehandlungsbeauftragte,    TeamleiterInnen, Vertrauenspersonen).</p><p>Ergebnisse sollten im Sinne von Transparenz und Verbindlichkeit    festgehalten und den MitarbeiterInnen kommuniziert werden – beispielsweise in Form einer Betriebsvereinbarung.</p>';

indicators[2].impulsQuestions.content = '<p><strong>Impulsfragen zur Erhebung und Reflexion</strong></p><p>Fragen zu <em>mitarbeiterorientierter Organisationskultur und -strukturen </em>(Aus- und Weiterbildung,    Arbeitsinhalt, Arbeitsorganisation und Führungsstil, Aufgabenklarheit, Aufgabenvielfalt, Handlungsspielraum und    Autonomie, Wertschätzung, Umgang mit Fehlern, Kommunikation und Kooperation)</p><ul>    <li>Wie werden MitarbeiterInnen bei internem Wechsel oder Neueinstieg eingeschult?</li>    <li>Inwiefern können die MitarbeiterInnen bei Belangen der täglichen Arbeit mitbestimmen? Welche        Entscheidungsbefugnisse haben sie? Wie hoch ist der Grad der Selbstorganisation? Was können die MitarbeiterInnen        selbst entscheiden?    </li>    <li>Wie sieht die Beziehung zwischen MitarbeiterInnen und deren Vorgesetzen im Unternehmen idealtypisch aus?</li>    <li>Welche Angebote gibt es für MitarbeiterInnen im Hinblick auf gezielte berufliche Weiterbildung einerseits und        allgemeine berufliche Weiterentwicklung (z.B. Karriereentwicklungsprogramme, Mentoring etc.) andererseits?    </li>    <li>Welche Aus- und Weiterbildungsprogramme (einschließlich Lehrlingsausbildung) gibt es im Unternehmen und wodurch        zeichnen sie sich aus?    </li>    <li>Haben MitarbeiterInnen die Möglichkeit, ihre Situation im Unternehmen, ihre Entwicklungsmöglichkeiten etc. zu        besprechen, Feedback zu geben und zu bekommen (z.B. in Form von Mitarbeitergesprächen)?    </li>    <li>Wie hierarchisch ist das Unternehmen strukturiert? Wie ist die Führungsstruktur? Welche Möglichkeiten haben        MitarbeiterInnen, ihre Anliegen, Wünsche und Beschwerden im Unternehmen einzubringen?    </li>    <li>Gibt es Mitarbeiterbefragungen? Wie und durch wen werden diese organisiert und durchgeführt? Wie und nach        welchen Kriterien wird mit den Ergebnissen verfahren?    </li>    <li>Wie ist der Ablauf, wenn Probleme auftreten? Welche vertraulichen Anlaufstellen gibt es? Welche        Beratungsmöglichkeiten wie Supervision, Mediation und Coaching gibt es?    </li>    <li>Wie sieht die interne Kommunikationsstruktur und Informationspolitik aus?</li></ul><p>Fragen zu <em>Fairer Entgelt- und Beschäftigungspolitik </em>(sicheres und faires Entgelt, faire    Beschäftigungspolitik, Zukunftsperspektiven)</p><ul>    <li>Gibt es ein transparentes, verbindliches Entgeltschema? Wie kommt dieses zustande? (In welcher Form) werden        ArbeitnehmervertreterInnen bei der Festlegung des Entgelts eingebunden?    </li>    <li>Von welchen Leitlinien ist die Beschäftigungspolitik des Unternehmens geprägt? Welche Rolle spielt die interne        Qualifizierung von MitarbeiterInnen (Lehrlinge, Facharbeiter, aber auch Aufstiegsmöglichkeiten)?    </li>    <li>Wird die Personalplanung des Unternehmens an die MitarbeiterInnen kommuniziert? Welche Maßnahmen sind im Falle        einer Verschlechterung der wirtschaftlichen Situation des Unternehmens vorgesehen, insbesondere im Hinblick auf        die Beschäftigten?    </li>    <li>Welche freiwilligen Sozialleistungen gibt es im Unternehmen? Stehen diese allen ArbeitnehmerInnen gleichermaßen,        unabhängig von der Art ihres Beschäftigungsverhältnisses und ihrer Tätigkeit im Unternehmen, zur Verfügung?    </li></ul><p>Fragen zu <em>Arbeitsschutz und Gesundheitsförderung, einschließlich Work-Life-Balance/flexible Arbeitszeiten </em>(Flexibilität    hinsichtlich Arbeitszeit und -ort, Sicherheit am Arbeitsplatz und gesundheitssensible Arbeitsgestaltung,    betriebliche Gesundheitsförderung)</p><ul>    <li>Wie werden die Arbeitszeiten eingeteilt? Gibt es flexible Arbeitszeitmodelle? Welche? Wer entscheidet, wann und        wie viel er/sie arbeitet? Wie hoch ist der Grad der Selbstorganisation? Besteht die Möglichkeit zur Nutzung von        Homeoffice?    </li>    <li>Wie viele Tage pro Mitarbeiter pro Jahr können zur psychischen und physischen Gesundheitsvorsorge genutzt        werden? Welche Angebote stehen zur Auswahl?    </li>    <li>Wie sicher und ergonomisch sind die Arbeitsplätze gestaltet? Durch welche Maßnahmen und Abläufe wird die        Erreichung und Erhaltung optimaler Arbeitsplatzsicherheit und -ergonomie gesichert?    </li>    <li>Sind die Arbeitsplätze barrierefreie zugänglich?</li>    <li>Gibt es zusätzliche Entspannungsräume für die MitarbeiterInnen?</li>    <li>Welche Maßnahmen zur physischen Gesundheit gibt es? Gibt es ein Programm zur betrieblichen Gesundheitsvorsorge        und was umfasst es?    </li></ul><p>Fragen zu <em>Gleichstellung und Diversität</em> (Vielfalt als Querschnittsthema und konkrete Maßnahmen zur Förderung    und Sicherung von Chancengleichheit)</p><ul>    <li>Welche Bedeutung kommt der Verschiedenheit von MitarbeiterInnen (Diversität) im Unternehmen zu? Gibt es        Maßnahmen zur Förderung von Verschiedenheit, insbesondere im Recruiting-Bereich (z.B. anonymisierte Bewerbung)?        Gibt es spezifische Fördermaßnahmen für MitarbeiterInnen mit speziellen Bedürfnissen (z.B. Patenprogramm,        Sprachförderung)?    </li>    <li>Welche Maßnahmen zur Gleichstellung von Männern und Frauen gibt es im Unternehmen? Wird für gleiche Leistung in        allen Unternehmensbereichen und auf allen Hierarchieebenen Männern und Frauen derselbe Lohn bezahlt? Gibt es        eine/n Gleichstellungsbeauftragte/n, einen Gleichstellungsbericht, Gender-Budgeting? Wie hoch ist der Anteil an        Männern/Frauen im gesamten Betrieb, wie hoch bei den Führungskräften? Welche Weiterbildungsmaßnahmen in welchem        Umfang gibt es zu Genderfragen?    </li>    <li>Welche Maßnahmen zur Beschäftigung von Menschen mit Behinderung sind geplant und umgesetzt? Inwieweit wird die        gesetzliche Quote erfüllt?    </li>    <li>Gibt es Schulungen zu Anti-Diskriminierung und Bewusstseinsbildung in diesem Bereich?</li></ul><p><strong>Relevante Kennzahlen</strong></p><p>Folgende Kennzahlen sollten sowohl absolut in Relation zum erwünschten Zielzustand als auch im unternehmensinternen    Vergleich (z.B. nach Beschäftigtengruppen oder Betriebssparten), im unternehmensinternen Entwicklungsvergleich<a            rel="nofollow" title="" href="#_ftn1">[1]</a> in Bezug zu den Vorjahren und im (wenn möglich regionalen)    Branchenvergleich interpretiert werden:</p><ul>    <li>Aufschlüsselung aller Beschäftigten nach Beschäftigtengruppe, Beschäftigungsverhältnis (Art des        Arbeitsvertrages) und nach Geschlecht    </li>    <li>Fehlzeiten nach Beschäftigtengruppen und &ndash; wenn anwendbar &ndash; Standort, im Branchenvergleich</li>    <li>Fluktuation nach Altersgruppe, Geschlecht, sowie weiteren Diversitätskriterien (gegebenenfalls auch nach        Niederlassung)    </li>    <li>Durchschnittlich in Anspruch genommene Fortbildungszeit pro MitarbeiterIn pro Jahr, nach Geschlecht und        Beschäftigtengruppe (Grobeinteilung nach Position im Unternehmen)    </li>    <li>Durchschnittlicher Zeitumfang der in Anspruch genommenen Angebote zur freiwilligen, betrieblichen physischen und        psychischen Gesundheitsvorsorge pro MitarbeiterIn pro Jahr, nach Geschlecht und Beschäftigtengruppe    </li>    <li>Rückkehrquote (ab 12 Monate nach Wiedereinstieg)<a rel="nofollow" title="" href="#_ftn2">[2]</a> nach        Elternkarenz nach Geschlecht    </li>    <li>Anteil von Frauen im gebärfähigen Alter bei Beförderungen</li>    <li>Anzahl der Arbeitsunfälle, Langzeitkrankenstände und Frühpensionierungen infolge Arbeitsunfähigkeit nach        Beschäftigtengruppe    </li></ul><p><strong>Hinweise zur Erhebung </strong></p><p>Zusätzlich zu den genannten statistischen Daten, die im Unternehmen verfügbar sind, können folgende Quellen die    Einschätzung von Arbeitsplatzqualität und Gleichstellung ergänzen:</p><ul>    <li>Mitarbeiterbefragungen, wenn sie zumindest in enger Abstimmung mit oder durch ArbeitnehmervertreterInnen        organisiert und durchgeführt wurden<a rel="nofollow" title="" href="#_ftn3">[3]</a></li>    <li>Berichte von ArbeitnehmervertreterInnen und Gleichbehandlungsbeauftragten</li>    <li>Betriebsvereinbarungen</li></ul><p>Optimal wäre es darüber hinaus, den MitarbeiterInnen und deren VertreterInnen die Möglichkeit von anonymen    Stellungnahmen zum Selbstbericht des Unternehmens einzuräumen.</p>';

indicators[2].moreinfo.content = '<p><strong>Allgemein</strong></p><ul>    <li>Arbeitsplatzqualität bei Semco + DM + Google + Zappos</li>    <li>New economic foundation: <a href="http://www.well-beingatwork.net/index.html" class="external-link"                                    rel="nofollow">Well </a><a href="http://www.well-beingatwork.net/index.html"                                                               class="external-link" rel="nofollow">being</a><a            href="http://www.well-beingatwork.net/index.html" class="external-link" rel="nofollow"></a><a            href="http://www.well-beingatwork.net/index.html" class="external-link" rel="nofollow">at</a><a            href="http://www.well-beingatwork.net/index.html" class="external-link" rel="nofollow"></a><a            href="http://www.well-beingatwork.net/index.html" class="external-link" rel="nofollow">work</a>        (Selbstevaluation + Infos)    </li>    <li><a href="http://sfbb.berlin-brandenburg.de/sixcms/media.php/5488/Vortrag%20U.%20Kall%2004.pdf"           class="external-link" rel="nofollow">Mitarbeitermotivation + Arbeitgebervergleichsstudien</a>        (PPT-Präsentation)    </li>    <li><a href="http://www.gallup.com/strategicconsulting/158162/gallup-engagement-index.aspx" class="external-link"           rel="nofollow">Gallup-Engagement-Index</a></li>    <li><a href="http://towerswatson.com/assets/pdf/2012-Towers-Watson-Global-Workforce-Study.pdf" class="external-link"           rel="nofollow">Tower-Watson-Global </a><a            href="http://towerswatson.com/assets/pdf/2012-Towers-Watson-Global-Workforce-Study.pdf"            class="external-link" rel="nofollow">Workforce</a><a            href="http://towerswatson.com/assets/pdf/2012-Towers-Watson-Global-Workforce-Study.pdf"            class="external-link" rel="nofollow"> Study</a></li>    <li><a href="http://www.dgb-index-gute-arbeit.de/" class="external-link" rel="nofollow">DGB-Index Gute Arbeit</a>    </li>    <li><a href="http://www.gfk-compact.de/index.php?article_id=228&amp;clang=0" class="external-link" rel="nofollow">GfK-Studie        zu Leben und Arbeiten</a></li>    <li><a href="http://www.wiki-gute-arbeit.de/index.php/Hauptseite" class="external-link" rel="nofollow">Wiki Gute        Arbeit </a>(gewerkschaftlicher Hintergrund)    </li>    <li><a href="http://www.boeckler.de/pdf/wsimit_2005_04_siebern.pdf" class="external-link" rel="nofollow">Sieben        Dimensionen der Arbeitsplatzqualität</a></li>    <li>Die Zukunft der Arbeit – <a href="http://www.youtube.com/watch?v=M4qF77vy0tc" class="external-link"                                    rel="nofollow">Audio-Sendung von SWR</a>&nbsp;</li></ul><p><strong>Arbeitsplatzsicherheit</strong></p><ul>    <li>brand eins-Artikel: <a href="http://www.brandeins.de/magazin/loyalitaet/halten.html" class="external-link"                               rel="nofollow">Mitarbeiter in Krisenzeiten zu feuern ist out </a>(05/2012)    </li>    <li>FAZ-Artikel: <a            href="http://www.faz.net/aktuell/wirtschaft/studie-arbeitsplatzsicherheit-wird-wichtiger-11816978.html"            class="external-link" rel="nofollow">Arbeitsplatzsicherheit wird immer wichtiger</a><strong> </strong></li></ul><p><strong>Arbeitszeit</strong></p><ul>    <li>brand eins-Artikel: <a href="http://www.brandeins.de/magazin/harmonie-verbloedet/neue-arbeits-zeit.html"                               class="external-link" rel="nofollow">Neue Arbeits-Zeit </a>(01/2004)    </li>    <li>brand eins-Artikel: <a href="http://www.brandeins.de/magazin/-afc796490a/die-freiheit-und-ihr-preis.html"                               class="external-link" rel="nofollow">Die Freiheit und ihr Preis </a>(01/2009)    </li>    <li>brand eins-Artikel: <a href="http://www.brandeins.de/magazin/warenwelt/im-takt-des-kalenders.html"                               class="external-link" rel="nofollow">Im Takt des Kalenders </a>(12/2011 – Microsoft)    </li>    <li>brand eins-Artikel: <a href="http://www.brandeins.de/magazin/schwerpunkt-ideenwirtschaft/grosse-freiheit.html"                               class="external-link" rel="nofollow">Die große Freiheit</a> (05/2007 – Rowe Prinzip)    </li>    <li><a href="http://de.wikipedia.org/wiki/Vertrauensarbeitszeit" class="external-link"           rel="nofollow">Wiki-Eintrag</a> zur Vertrauensarbeitszeit    </li>    <li>Markus Albers: Morgen komm ich später rein, Campus, 2012 (Buch mit Beispielen)</li></ul><p><strong>Familie und Beruf</strong><a href="http://de.wikipedia.org/wiki/Vertrauensarbeitszeit"                                             class="external-link" rel="nofollow"></a></p><ul>    <li><a href="http://www.familieundberuf.at/home/" class="external-link" rel="nofollow">Familie und Beruf –        Management GmbH Österreich</a>&nbsp;</li>    <li>vgl. <a href="http://www.familienfreundlichsterbetrieb.at/2012/" class="external-link" rel="nofollow">Staatspreis        „Familienfreundlichster Betrieb“</a></li>    <li>brand eins-Artikel: <a            href="http://www.brandeins.de/magazin/unberechenbar-die-oekonomie-der-familie/gleichung-mit-unbekannten.html"            class="external-link" rel="nofollow">Gleichung mit Unbekannten</a> (12/2010)    </li>    <li>brand eins-Artikel: <a            href="http://www.brandeins.de/magazin/unberechenbar-die-oekonomie-der-familie/spielraeume.html"            class="external-link" rel="nofollow">Spielräume</a> (12/2010)    </li></ul><p><strong>Work-Life-Balance</strong></p><ul>    <li>Wikipedia-Eintrag zur <a href="http://de.wikipedia.org/wiki/Work-Life-Balance" class="external-link"                                 rel="nofollow">Work-Life-Balance</a></li>    <li>        <a href="https://www.google.at/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;ved=0CDUQFjAA&amp;url=http%3A%2F%2Fwww.rwth-aachen.de%2Fglobal%2Fshow_document.asp%3Fid%3Daaaaaaaaaaagxqg%26download%3D1&amp;ei=aXMCUfKRPMjXtAafsoGYCg&amp;usg=AFQjCNFmBf03qZvyU1Hj6DG590QYobDTFA&amp;sig2=mJwskW"           class="external-link" rel="nofollow">Broschüre Work-Life-Balance </a>BMFSF BRD    </li>    <li><a href="http://www.news-service.admin.ch/NSBSubscriber/message/attachments/6871.pdf" class="external-link"           rel="nofollow">KMU-Handbuch Familie und Beruf</a></li>    <li><a href="http://www.btq-kassel.de/upload/Work_Life_Balance_BTQ.pdf" class="external-link" rel="nofollow">Broschüre        Work-</a><a href="http://www.btq-kassel.de/upload/Work_Life_Balance_BTQ.pdf" class="external-link"                    rel="nofollow">Life+Gesundheit</a> (gewerkschaftsnah<a            href="http://www.perwiss.de/links-zu-work-life-balance.html" class="external-link" rel="nofollow">)</a></li>    <li><a href="http://www.perwiss.de/links-zu-work-life-balance.html" class="external-link" rel="nofollow">Umfassende        Link-Sammlung zu Work-Life-Balance</a></li></ul><p><strong>Sinnstiftung/Organisationskultur/MA-Befragungen</strong></p><ul>    <li>Initiative von Gerald Hüthers Sinnstiftung für einen<a href="http://www.kulturwandel.org/" class="external-link"                                                               rel="nofollow"> Kulturwandel in Organisationen</a></li>    <li>Wikipedia-Eintrag zur <a href="http://de.wikipedia.org/wiki/Mitarbeiterbefragung" class="external-link"                                 rel="nofollow">Mitarbeiter-Befragung</a></li>    <li><a href="http://groups.uni-paderborn.de/psychologie/scha_Gruppen-Teams_Mitarbeiterbefragung.pdf"           class="external-link" rel="nofollow">PPT-</a><a            href="http://groups.uni-paderborn.de/psychologie/scha_Gruppen-Teams_Mitarbeiterbefragung.pdf"            class="external-link" rel="nofollow">Präsenationen</a><a            href="http://groups.uni-paderborn.de/psychologie/scha_Gruppen-Teams_Mitarbeiterbefragung.pdf"            class="external-link" rel="nofollow"> zu Mitarbeiter-Befragungen</a> (Uni Paderborn)    </li>    <li>Surveymonkey <a href="https://www.surveymonkey.com/s/65MGCBJ" class="external-link" rel="nofollow">Musterumfrage        Mitarbeiterzufriedenheit</a></li></ul><p><strong>Gesundheitsmanagement</strong></p><ul>    <li>Oppholder, Alfred: Gesundheitsmanagement im Betrieb. Integration und Koordination menschengerechter Gestaltung        der Arbeit, Hamburg: VSA-Verlag, 2006    </li>    <li>Schneider, Cornelia: Gesundheitsförderung am Arbeitsplatz. Nebenwirkung Gesundheit, Bern: Hans Huber, 2012</li>    <li>Gesundheit: <a href="http://www.fgoe.org/" class="external-link" rel="nofollow">Fond Gesundes Österreich </a>+        <a href="http://www.netzwerk-bgf.at/portal27/portal/bgfportal/start/startWindow?action=2&amp;p_menuid=64784&amp;p_tabid=1"           class="external-link" rel="nofollow">Netzwerk Gesundes Österreich</a></li>    <li>Broschüre <a href="http://www.fgoe.org/hidden/BGF_Broschuere.pdf" class="external-link" rel="nofollow">Gesundes        Unternehmen für KMUs</a></li>    <li><a href="http://www.gesundheitsfoerderung.ch/pages/Betriebliche_Gesundheitsfoerderung/Allgemeines/index.php"           class="external-link" rel="nofollow">Gesundheitsförderung Schweiz</a>&nbsp;        <ul>            <li><a href="http://www.chance4change.eu/images/AT-NEWS/eu27.pdf" class="external-link"                   rel="nofollow">Best </a><a href="http://www.chance4change.eu/images/AT-NEWS/eu27.pdf"                                              class="external-link" rel="nofollow">practises</a><a                    href="http://www.chance4change.eu/images/AT-NEWS/eu27.pdf" class="external-link" rel="nofollow"> EU                Stressreduktion + Gesundheit am Arbeitsplatz</a><a href="http://www.youtube.com/watch?v=tY9ag9PfAQU"                                                                   class="external-link" rel="nofollow"></a></li>            <li><a href="http://www.youtube.com/watch?v=tY9ag9PfAQU" class="external-link" rel="nofollow">Kurzfilm über                Gesundheitsförderung am Arbeitsplatz</a>&nbsp; (ITG Salzburg)<a                    href="http://www.youtube.com/watch?v=zRVkLvHzU8M" class="external-link" rel="nofollow"></a></li>            <li><a href="http://www.youtube.com/watch?v=zRVkLvHzU8M" class="external-link" rel="nofollow">Gesundheit am                Arbeitsplatz</a> – Beispiele aus Baden (SWR)            </li>            <li><a href="http://www.youtube.com/watch?v=fOFvCzl2GOo" class="external-link" rel="nofollow">Beispiel                der </a><a href="http://www.youtube.com/watch?v=fOFvCzl2GOo" class="external-link"                           rel="nofollow">Sparda</a><a href="http://www.youtube.com/watch?v=fOFvCzl2GOo"                                                       class="external-link" rel="nofollow"> Bank München</a> (Pionier                der GWÖ)            </li>            <li><a href="http://www.youtube.com/watch?v=Jegs6wV0Jiw" class="external-link" rel="nofollow">Nutzen der                betrieblichen Gesundheitsförderung</a> (AOK)            </li>        </ul>    </li></ul><p><strong>Diversität – Gleichstellung und Umgang mit Benachteiligten</strong></p><ul>    <li>Bendl, Regina/Hanappi-Egger, Edeltraud/Hofmann, Roswitha: Diversität und Diversitätsmanagement, Wien: Facultas,        2012    </li>    <li>Krell, Getraude/Ortlieb, Renate/Sieben, Barbara [Hrsg]:<strong> </strong>Chancengleichheit durch        Personalpolitik: Gleichstellung von Frauen und Männern in Unternehmen und Verwaltungen. Rechtliche Regelungen –        Problemanalysen – Lösungen, Gabler, 2011    </li>    <li>Pauser, Norbert/Wondrak, Manfred [Hrsg]: Praxisbuch Diversity Management, Wien: Facultas, 2011</li>    <li><a href="http://portal.wko.at/wk/startseite_dst.wk?dstid=9502" class="external-link" rel="nofollow">WKO Charta        der Vielfalt</a></li>    <li>Norbert Pauser: <a            href="http://portal.wko.at/wk/dok_detail_file.wk?angid=1&amp;docid=1865183&amp;conid=631609&amp;stid=673435&amp;titel=Leitfaden%2c%22Diversity%2cManagement%22"            class="external-link" rel="nofollow">Leitfaden </a><a            href="http://portal.wko.at/wk/dok_detail_file.wk?angid=1&amp;docid=1865183&amp;conid=631609&amp;stid=673435&amp;titel=Leitfaden%2c%22Diversity%2cManagement%22"            class="external-link" rel="nofollow">Diversity</a><a            href="http://portal.wko.at/wk/dok_detail_file.wk?angid=1&amp;docid=1865183&amp;conid=631609&amp;stid=673435&amp;titel=Leitfaden%2c%22Diversity%2cManagement%22"            class="external-link" rel="nofollow"> Management</a></li>    <li><a href="http://ec.europa.eu/social/BlobServlet?docId=3976&amp;langId=de" class="external-link" rel="nofollow">Broschüre        Vielfalt am Arbeitsplatz für EPUs/KMUs</a></li>    <li>        <a href="http://www.pe-system-berlin.de/index.php/projektinformationen/downloads?download=67%3Astudie_diversity_management-in_kleinen_und_mittleren_unternehmen_erfolgreiche_umsetzungsbeispiele"           class="external-link" rel="nofollow">Studie: </a><a            href="http://www.pe-system-berlin.de/index.php/projektinformationen/downloads?download=67%3Astudie_diversity_management-in_kleinen_und_mittleren_unternehmen_erfolgreiche_umsetzungsbeispiele"            class="external-link" rel="nofollow">Diversity</a><a            href="http://www.pe-system-berlin.de/index.php/projektinformationen/downloads?download=67%3Astudie_diversity_management-in_kleinen_und_mittleren_unternehmen_erfolgreiche_umsetzungsbeispiele"            class="external-link" rel="nofollow">-Management in KMUs – positive Umsetzungsbeispiele</a></li>    <li>brand eins-Artikel: <a            href="http://www.brandeins.de/magazin/nie-wieder-vollbeschaeftigung/wirtschaftsfaktor-frau.html"            class="external-link" rel="nofollow">Wirtschaftsfaktor Frau </a>(07/2005)    </li>    <li>brand eins-Aritkel: <a            href="http://www.brandeins.de/magazin/wann-es-des-guten-zu-viel-ist-und-was-nuetzt/heller-wahnsinn.html"            class="external-link" rel="nofollow">Heller Wahnsinn</a> (12/2005 – Deutschlands größte        Behindertenwerkstatt)    </li>    <li><a href="http://www.arbeitundbehinderung.at/de/best-practice/index.php" class="external-link" rel="nofollow">Best </a><a            href="http://www.arbeitundbehinderung.at/de/best-practice/index.php" class="external-link" rel="nofollow">practises</a><a            href="http://www.arbeitundbehinderung.at/de/best-practice/index.php" class="external-link" rel="nofollow">        zur Integration von Menschen mit Behinderung am Arbeitsplatz</a></li></ul><p>&nbsp;</p><div><p>RedakteurIn: Gabriela Edlinger <a href="mailto:gabriela@abcd.co.at" class="external-link" rel="nofollow">gabriela@abcd.co.at</a>    auf Basis der Vorarbeiten von Christian Rüther und Christine Amon</p></div>';

indicators[3].bestPractices.content = '<span>Es gibt bisher erst wenige Beispiele, bei denen Unternehmen in ihrer Vorbildfunktion zu diesem Thema wahrgenommen werden. Ein viel zitiertes (daher stellenweise problematisches) Beispiel ist die brasilianische Firma SEMCO, die ihren MitarbeiterInnen das Vertrauen entgegen bringt, dass sie nebst dem verantwortungsvollen Ausführen ihres Tätigkeitsbereiches auch verantwortungsvoll mit ihrer Zeiteinteilung umgehen.</span>';

indicators[3].definition.content = '<p class="western"><span>Arbeit im allgemeinen und Erwerbsarbeit im besonderen erfüllt verschiedene menschliche Bedürfnisse. Zum einen ermöglicht sie es (gedankliche) Vorstellungen zu verwirklichen und damit einen direkten Beitrag für unser eigenes Wohlbefinden (Selbstwertgefühl, Anerkennung, Erfolg) zu leisten. Zum anderen dient sie unseren Mitmenschen, denen wir mit den produzierten Gütern oder Dienstleistung helfen ihrerseits ihre Bedürfnisse zu befriedigen. Nicht zuletzt ist Arbeit ein wichtiges Kommunikationsinstrument (sozialer Austausch) und dient durch die Teilnahme am Wirtschaftsleben (Gestaltungsspielräume) auch der gesellschaftlichen Teilhabe.</span></p><p class="western"><span>Erwerbsarbeit kann bei einseitiger Fokussierung auf das Erwerbsleben aber auch dazu beitragen, ein Ungleichgewicht zwischen den Lebensbereichen herbeizuführen/aufrechtzuerhalten und gesellschaftliche, wie soziale Teilhabe zu erschweren. Dann bleiben Funktionen in außerbetrieblichen Lebensbereichen unbesetzt oder sind nur unter hohem zeitlichen Druck ausführbar. Es sind Aufgaben, die sehr wohl eine gesellschaftliche Relevanz haben können und zudem dazu beitragen, dass sich Mitarbeiter in ihrer Persönlichkeit entwickeln und in weiterer Folge die außerhalb erworbenen Fähigkeiten, Erfahrungen und Qualifikationen wieder in den Betrieb einbringen.</span></p><p class="western"><span>Der Indikator geht auf die derzeitige Arbeitssituation ein und versucht zu einem bewussteren Umgang mit Lebens-Arbeitszeit zu kommen. In Österreich werden jährlich 330 Millionen Überstunden geleistet, das sind 8,2 Überstunden pro Woche je Überstunden leistender Person. Würden die Überstunden in zusätzliche Arbeitsplätze umgewandelt, könnten dadurch bis zu 200.000 Vollzeitarbeitsplätze geschaffen werden.<sup><a        href="http://wiki.gwoe.net#ref_3" class="external-link" rel="nofollow">[3]</a></sup></span></p><p        class="western"><span>Gegenwärtig wird der „systemische Wachstumszwang“ unter anderem mit der Notwendigkeit von Wachstum zur Schaffung von Arbeitsplätzen gerechtfertigt.</span></p><p class="western"><span>Aus ökologischer Sicht ist problematisch, dass die Nichtverkürzung der Arbeitszeit bei weiter steigender gesamtwirtschaftlicher Produktivität (technischer Fortschritt, verbesserte Organisationsstruktur, gesteigerte Arbeitsqualität...) ihr Abbild in weiterem Wirtschaftswachstum findet. Statistische Auswertungen zeigen, dass kürzere Arbeitszeiten bis zum Erreichen eines Optimums eine höhere Produktivität der Mitarbeiter zur Folge haben (Teilkompensation der Produktivitätseinbußen), während die gesamtwirtschaftliche Produktion dabei abnimmt (kürzere Betriebszeiten</span><span>,...).</span><sup><span><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref4">[4]</a></span></sup><span>&nbsp;Längere Arbeitszeiten führen selten zu besseren Ergebnissen, dafür oftmals zu Zeitverschwendung.<sup><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref5">[5]</a><span style="font-size: 11.0px;">&nbsp;</span></sup></span></p><p class="western"><span>Um bei einer stagnierenden Wirtschaftsleistung bei gleichzeitig steigender Produktivität Arbeitsplätze zu erhalten (so fern dies weiterhin als oberstes Ziel angesehen wird), muss als logische Folge die Arbeitszeit verkürzt werden. Schon in den 1970er Jahren gab es hierzu einen Vorstoß des IAB (Institut für Arbeitsmarkt- und Berufsforschung) der eine </span><span><em>produktivitätsorientierte    Arbeitszeitverkürzung</em></span><span> vorsah.</span><a class="sdfootnoteanc" href="#sdfootnote4sym"                                                             name="sdfootnote4anc" rel="nofollow"></a><sup><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref6">[6]</a></sup></p><p class="western"><span>Eine zentrale und offen diskutierte Frage ist die Frage des Optimums der Arbeitszeit. Unterschiedliche Studien belegen, dass eine Verringerung hin zu einer optimalen Ausgestaltung der Arbeitszeit zu einer Verbesserung der Arbeitsqualität (produktiver) führt, während eine Erhöhung der Arbeitszeit durch zusätzliche Belastung zu einer geringeren Arbeitsqualität (unproduktiver) führt. Aus der Biologie sind sogenannte Optimumskurven (auch Toleranzkurven) bekannt. Sie geben den Bereich an, in dem eine Art oder ein (Öko-)System lebensfähig ist. Wichtige Faktoren, die bei der Bestimmung des Betriebsoptimums zu berücksichtigen sind, sind dabei Alter, Geschlecht, familiäre Situation und gesellschaftliches Engagement.</span></p><p class="western"><span>Wenig Beachtung fand im Kontext der Arbeitszeitgestaltung bisher der Einbezug von gesundheitlichen Folgen von Mehrarbeit (Produktivitätssteigerung auf Kosten der Gesundheit der Mitarbeiter (unproduktiver) und den Folgekosten für das Gesundheitswesen.<sup><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref">[</a><a class="unresolved" href="#">7</a><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref">]</a></sup><span        style="font-size: 11.0px;">&nbsp;</span></span></p><p class="western">&nbsp;</p><p class="western">    <span><strong>Bewertung von Zeitarbeit</strong></span></p><p class="western"><span>Zeitarbeit ist für Unternehmen ein reizvolles Instrument. Sie bietet den Unternehmen die Möglichkeit saisonale/temporäre Effekte leichter zu überbrücken ohne langfristige Nachteile durch Bindung von Beschäftigten einzugehen (Flexibilität). Dieser Vorteil wird in der Regel nicht entsprechend entlohnt. Eine gleichwertige Entlohnung sollte daher mindestens dem eines vergleichbaren Mitarbeiters entsprechen (inkl. höheres Risiko, soziale Absicherung, Gewinnbeteiligung). Werden ZeitmitarbeiterInnen länger als ein Jahr beschäftigt oder übersteigt der prozentuale Anteil mehr als 10%, so sollte eine Festanstellung erfolgen. </span></p><p class="western">&nbsp;</p><p class="western"><span><strong>Definition „Bewusster Umgang mit (Lebens-)    Arbeitszeit“</strong></span></p><p class="western"><span>Dieser Punkt ist zum Teil auch in C1 abgebildet, wird aber im Kontext von C2 bzgl. dem Zeitaspekt konkretisiert. </span></p><ul>    <li><p class="western"><span>Selbst- und Zeitmanagement dient den Mitarbeitern besser und eigenverantwortlicher mit der Ressource Zeit umzugehen</span>    </p></li>    <li><p class="western"><span>Mitarbeitererhebungen dienen der Ist-Analyse und ermöglichen es, langfristig attraktive Lösungen für und mit den Mitarbeitern zu erarbeiten</span>    </p></li>    <li><p class="western"><span>Die 4-Tage Woche ist eine vergleichsweise einfach umzusetzende Möglichkeit, die Arbeitszeit (bei gleichem Lohn) zu reduzieren. Sie bedarf einem erhöhten organisatorischen Aufwand (zu Beginn). Sie kann im ersten Schritt dazu genutzt werden, MitarbeiterInnen, die einen erhöhten Arbeitsaufwand außerhalb ihres Berufes wahrnehmen (Kindererziehung, Ehrenamt), diese nicht-entlohnte Arbeit anzuerkennen. Die MitarbeiterInnen können dies nach Nachweiserbringung (bei ihren Vorgesetzten beantragen). Zudem bietet sie die Möglichkeit Teilzeit und Vollzeitberufe einander anzunähern.</span>    </p></li>    <li><p class="western"><span>MitarbeiterInnen bestimmen eigenverantwortlich die Arbeitszeit, die sie zur Erreichung ihrer Arbeitstätigkeit oder ihrer Projektziele benötigen.</span>    </p></li></ul>';

indicators[3].details.content = '<p class="western"><span>Der Indikator gilt für alle Branchen und Unternehmensgrößen, eine weitere Typisierung erfolgt nicht.</span></p><p class="western"><span>Ausnahme: Für EPU treffen nicht alle Kriterien voll zu (vgl. auch EPU-Leitfaden). </span></p><p class="western"><span>Für Unternehmen in Neugründung (Start-Ups) und mit saisonalem Geschäft (Tourismus, Baubranche) gelten besondere Hinweise.</span></p><p class="western">&nbsp;</p><p class="western"><strong>Einschränkung für EPU</strong></p><p class="western">Das Kriterium „Senkung der Normalarbeitszeit“ (62,5%) bezieht sich hier ausschließlich auf die Wochenarbeitszeit (inkl. Überstunden) des Selbstständigen. Er/Sie ist vorbildlich, wenn seine/ihre durchschnittliche Arbeitszeit um 10% niedriger ist als die Branchenarbeitszeit oder maximal 38,5 Stunden beträgt. Besonderes Augenmerk sollte hier auf die Erfassung der Arbeitszeit/Überstunden gelegt werden. Bei Arbeiten darüber hinaus sollten Mitarbeiter eingestellt oder Aufträge an Kollegen weitergereicht werden. Das Kriterium bietet für EinzelunternehmerInnen zudem einen guten Zugang, ob Selbstausbeutung (Burn-Out Gefahr) vorliegt.</p><p class="western"><span>Das Kriterium „Erhöhung des Anteils der Teilzeit-Arbeitsmodelle“ trifft nicht zu. Die Bewertung (25%) wird zu je 12,5% den beiden anderen Kriterien hinzugefügt.</span></p><p class="western"><span>Das Kriterium „Bewusster Umgang mit (Lebens-) Arbeitszeit“ (37,5%) trifft in Anlehnung an das Selbstverständnis (vorliegende Konzeptualisierung?) des Selbstständigen zu.</span></p><p class="western">&nbsp;</p><p class="western"><strong>Hinweise für saisonal abhängige Unternehmen</strong></p><p class="western">(Bsp. Gastgewerbe, Bauwesen)</p><p class="western">Bei einer saisonalen Abhängigkeit eines Betriebes werden die saisonalen MitarbeiterInnen abhängig vom Arbeitsvolumen im Verhältnis zu Vollbeschäftigter/m als Voll- oder Teilzeitmitarbeiter eingestuft nicht jedoch als Zeitarbeitskraft. Zudem ist die Quote der selbstständig (auf eigene Rechnung wirtschaftenden) “beschäftigten” Service-/Aushilfskräfte zu erheben und anzugeben.</p><p class="western">&nbsp;</p><p class="western"><span><strong>Hinweise für neu gegründete Unternehmen</strong></span></p><p><span>(Bsp. Start-Up, SelbstständigeR)</span></p><p class="western"><span>Als besonderes Ereignis in der Historie eines Unternehmens kann die Gründungsphase gelten. Sollte es in einem neu gegründeten EPU oder einvernehmlich mit den Mitarbeitern in einem Start-Up zu einer temporären Mehrbelastung über einen längeren Zeitraum (3 Jahre nicht überschreitend) kommen, führt dies zu einem vorübergehend schlechteren abschneiden dieser Unternehmen bei dem Kriterium „Senkung der Normalarbeitszeit“. Der Mehraufwand am Beginn einer Unternehmung ist natürlich (vgl. Reaktionsenthalpie = Anfangsenergie, die notwendig ist um eine chemische Reaktion in Gang zusetzen). Eine Kompensation (bessere Bewertung) dafür erfolgt nicht, um die Wichtigkeit langfristig geordneter Arbeitszeiten zu unterstreichen. Sollten umfassende Weiterbildungen zum Thema Selbst– und Zeitmanagement erfolgen, so gibt dies einen Hinweis darauf, dass sich das neu gegründete Unternehmen intensiv mit der zugrunde liegenden Fragestellung auseinandersetzt.</span></p><p class="western">&nbsp;</p><p class="western"><strong>Abgrenzung zu anderen Indikatoren</strong></p><p class="western"><span>Der Indikator ist eng gekoppelt an den Indikator C1 (Arbeitsplatzqualität) und C4 (Gerechte Einkommensverteilung). Weder Indikator C1 noch C4 können losgelöst von C2 betrachtet werden.</span></p><p class="western"><span>Die Indikatoren C2 und C4 versuchen sich der Wert-Problematik eines gerechten „Arbeits-Zeit-Lohns“ von zwei verschiedenen Seiten anzunähern. C2 legt den Fokus auf die zeitliche Ausgestaltung eines Arbeitsverhältnisses, während C4 auf eine entsprechende Entlohnung für die geleistete Arbeitszeit abzielt. Im Besonderen bei EPU ergibt sich hier ein Sonderfall, da ein geringes Einkommen durch erhöhten Zeitaufwand aufgebessert werden kann. In diesem Fall wäre zu überprüfen, ob eine gerechte Entlohnung stattfindet (Stundenlohn vs. Gesamtlohn). Lösungen liegen hier zum einen im individuellen Empfinden und Wertverständnis (z.B. frei verfügbare Zeit hat höheren Stellen-Wert als abhängige Erwerbsarbeitszeit) was in einem angepassten Lebensstil resultiert oder in einem entsprechend höheren Einkommen (bedürfnisorientierte Gespräche mit Auftraggebern als ein möglicher Ansatzpunkt). Sollte beides nicht möglich sein, muss ehrlich und ggf. unter Zuhilfenahme externer Betrachtung das Geschäftsmodell analysiert und ggf. angepasst werden.</span></p><p class="western"><span>Die Indikatoren C2 und C1 haben als Überschneidungsbereich die Life-Balance, die stark von der zeitlichen Ausgestaltung eines Arbeitsvertrages abhängt. Der Indikator C2 führt dies nicht in der Breite aus (wie C1), sondern betrachtet lediglich die Seite der Erwerbs-Arbeitszeit.</span></p>';

indicators[3].goals.content = '<p class="western"><span>Erwerbsarbeit ist ein wertvolles Gut und ein wichtiges Element gesellschaftlicher Teilhabe. Dennoch arbeiten derzeit die einen zu viel („leben um zu arbeiten“) und andere gar nicht („arbeitslos“). </span><span>Vorrangiges Ziel des Indikators ist deshalb die gerechte Verteilung des Arbeitsvolumens auf alle erwerbsfähigen Menschen. Die Unternehmen sorgen ihrerseits gemeinsam dafür, dass alle Menschen einen gerechten Anteil am Erwerbsarbeitskuchen bekommen – niemand zu wenig und niemand zu viel. Sie bauen dazu sukzessive Überstunden ab und danach sogar „Unterstunden“ auf und nehmen damit eine weitere Verkürzung der gesetzlichen Regelarbeitszeit vorweg.</span></p><p><span>Laut Umfragen wünschen sich Menschen in ganz Europa, für die Erwerbsarbeit pro Woche nur 26 - 39 Wochenstunden aufzuwenden.<sup><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref1">[1]</a></sup>&nbsp;</span><span>&nbsp;</span>Der    britische Think Tank „nef“ (new economics foundation) geht sogar noch weiter. Er skizziert in einem Paper das Bild    einer 21 Stunden Woche. Die Autoren versprechen sich von einem stückweisen Übergang hin zu dieser neuen „Norm“, eine    Reihe von drängenden und zusammenhängenden Problemen zu lösen. Darunter: Überstunden und Arbeitslosigkeit,    Massen-Konsum und CO2-Emissionen, geringes Wohlbefinden und Ungleichheiten. Das bringt mehr Zeit für einen    nachhaltigen Lebensstil und sozialen Austausch Umgang und bietet die Möglichkeiten an der Diversität des Lebens    teilzuhaben.<sup><a href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref2">[2]</a></sup></p>';

indicators[3].implementationHelp.content = '<li><p class="western"><span>Direkte Einbindung von MitarbeiterInnen und Beschäftigten-VertreterInnen in die Organisation der Arbeitszeit. (Sie wissen selbst am besten, welche Tätigkeiten welche Zeit beanspruchen).</span></p></li><li><p class="western"><span>Selbst- und Zeitmanagementfortbildungen (Inspiration und Tatkraft; Effektivität und Effizienz)</span></p></li><li><p class="western">Regelmäßige Mitarbeiterbefragungen zum Thema Arbeitszeit und Arbeitszeitmodellen</p></li><li><p class="western">Erstellung einer individuellen (je MitarbeiterIn) und einer gesamtbetrieblichen Optimumskurve der    Arbeitszeit (Einflussreiche Faktoren:    <span>Alter, Geschlecht, familiäre Situation, gesellschaftliches Engagement)</span></p></li><li><p class="western">Wie wollen Sie mit ihrer Produktivitätssteigerung umgehen? (Arbeitszeitverkürzung,    Lohnsteigerung, Produkt- und Servicequalität (Investition), Kostenreduktion, Gewinn auszahlen)</p></li>';

indicators[3].impulsQuestions.content = '<ul><li><p class="western"><span>Wie wird Arbeitszeit bzw. arbeitsfreie Zeit im Unternehmen erfasst? (im speziellen in EPU)</span></p></li><li><p class="western"><span>Gibt es Transparenz bzgl. möglicher Arbeitszeitmodelle im Unternehmen?</span></p></li><li><p class="western"><span>Welche Vorstellung haben die Mitarbeiter eines sinnvollen Einsatzes ihrer Arbeitszeit? Welche Arbeitszeitgestaltung wäre aus ihrer Sicht in Zukunft erstrebenswert?</span></p></li><li><p class="western"><span>Gilt bei Ihnen im Unternehmen überwiegend die Formel „Arbeitszeit = Lebenszeit“?</span></p></li><li><p class="western"><span>Werden Weiterbildungen zu Selbst- und Zeitmanagement angeboten?</span></p></li><li><p class="western"><span>Trauen Sie ihren Mitarbeitern zu, eigenverantwortlich mit Arbeitszeit umzugehen?</span></p></li><li><p class="western"><span>Beschäftigen Sie Zeitarbeiter? Wenn ja, mit welcher Begründung?</span></p></li><li><p class="western"><span>Welchen Wert hat „nicht-entlohnte“ Arbeit für Sie?</span></p></li></ul><p class="western"><span><strong>Relevante Daten</strong></span></p><ul><li><p class="western"><span>Quote der All-Inclusive Arbeitsverträge</span></p></li><li><p class="western"><span>Geleistete Überstunden je Mitarbeiter</span></p></li><li><p class="western"><span>Zeitarbeitsquote</span></p></li><li><p class="western"><span>Teilzeitquote</span></p></li><li><p class="western"><span>Neueinstellungen</span></p></li><li><p class="western"><span>Mitarbeiterbefragung zu Arbeitszeit und Arbeitszeitmodellen</span></p></li></ul>';

indicators[3].moreinfo.content = '<p class="western"><span><a href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref1">[1]</a>&nbsp;Böckler Impuls. 03/2011: Gleichstellung. Eltern in der Traditionalisierungsfalle. </span><span><u><a        class="external-link" href="http://www.boeckler.de/pdf/impuls_2011_03_4-5.pdf" rel="nofollow">http://www.boeckler.de/pdf/impuls_2011_03_4-5.pdf</a></u></span></p><p class="western"><span><u><span><a href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref2">[2]</a>&nbsp;nef (new economics foundation): 21 Hours. Why a shorter working week can help us all to flourish in the 21st century. London 2010.&nbsp;</span><u><span><a        class="external-link" href="http://www.neweconomics.org/sites/neweconomics.org/files/21_Hours.pdf"        rel="nofollow">http://www.neweconomics.org/sites/neweconomics.org/files/21_Hours.pdf</a></span></u></u></span></p><p class="western"><a href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref3">[3]</a>&nbsp;Der Standard    (10.11.2011): "Eine völlig entgleisende Arbeitszeitkultur".&nbsp;<u            style="font-size: 10.0pt;line-height: 13.0pt;"><a class="external-link"                                                              href="http://derstandard.at/1304554218427/Zeit-fuer-Familie-Eine-voellig-entgleisende-Arbeitszeitkultur"                                                              rel="nofollow">http://derstandard.at/1304554218427/Zeit-fuer-Familie-Eine-voellig-entgleisende-Arbeitszeitkultur</a></u></p><p class="western"><u style="font-size: 10.0pt;line-height: 13.0pt;"><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref4">[4]</a>&nbsp;Böckler Impuls 17/2007: Arbeitszeiten.    Kurze Arbeitszeit, hohe Produktivität.&nbsp;<u><a class="external-link"                                                      href="http://www.boeckler.de/pdf/impuls_2007_17_6.pdf"                                                      rel="nofollow">http://www.boeckler.de/pdf/impuls_2007_17_6.pdf</a></u></u></p><p class="western"><u style="font-size: 10.0pt;line-height: 13.0pt;"><u><span><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref5">[5]</a>&nbsp;Lehndorff, Steffen: Wie lange sind die Arbeitszeiten in Deutschland? IAT Report. Wuppertal 2003.&nbsp;</span><u><a        class="external-link" href="http://iat-info.iatge.de/iat-report/2003/report2003-07.pdf" rel="nofollow">http://iat-info.iatge.de/iat-report/2003/report2003-07.pdf</a></u></u></u></p><p class="western"><u style="font-size: 10.0pt;line-height: 13.0pt;"><u><u><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref6">[6]</a>&nbsp;Kunz, Dieter u. Müller, Wolfgang G.:    Produktivitätsorientierte Arbeitszeitverkürzung als beschäftigungspolitisches Instrument. Mitteilungen aus der    Arbeitsmarkt- und Berufsforschung. IAB. Nürnberg 1977.&nbsp;<u><a class="external-link"                                                                      href="http://doku.iab.de/mittab/1977/1977_4_MittAB_Kunz_Mueller.pdf"                                                                      rel="nofollow">http://doku.iab.de/mittab/1977/1977_4_MittAB_Kunz_Mueller.pdf</a></u></u></u></u></p><p class="western"><u style="font-size: 10.0pt;line-height: 13.0pt;"><u><u><u><span><a        href="#C2GerechteVerteilungderErwerbsarbeitMatrix41-ref7">[7]</a>&nbsp;Wirtz, Anna: Gesundheitliche und soziale Auswirkungen langer Arbeitszeiten. Bundesanstalt für Arbeitsschutz und Arbeitsmedizin. Dortmund 2010.&nbsp;</span><span><u><a        class="external-link"        href="http://www.baua.de/de/Publikationen/Fachbeitraege/Gd59.pdf;jsessionid=B737F2202A66E01C5616230FC8A861E7.1_cid253?__blob=publicationFile&amp;v=4"        rel="nofollow">http://www.baua.de/de/Publikationen/Fachbeitraege/Gd59.pdf;jsessionid=B737F2202A66E01C5616230FC8A861E7.1_cid253?__blob=publicationFile&amp;v=4</a></u></span></u></u></u></u></p><p class="western"><span><br></span></p><p class="western">    <span>Haug, Frigga : Die Vier-in-einem-Perspektive. </span><span><u><a class="external-link"                                                                           href="http://www.friggahaug.inkrit.de/documents/DA291_fh.pdf"                                                                           rel="nofollow">http://www.friggahaug.inkrit.de/documents/DA291_fh.pdf</a></u></span></p><p class="western">Kretschmer, Tobias et al.:Wachstum und Produktivität. Ein Gutachten im Auftrag der    Enquete-Kommission „Wachstum, Wohlstand, Lebensqualität“, Projektgruppe 1. München 2011.&nbsp;<u            style="font-size: 10.0pt;line-height: 13.0pt;"><a class="external-link"                                                              href="http://www.bundestag.de/bundestag/gremien/enquete/wachstum/gutachten/m17-26-14.pdf"                                                              rel="nofollow">http://www.bundestag.de/bundestag/gremien/enquete/wachstum/gutachten/m17-26-14.pdf</a></u></p><p class="western"><span><span>Seifert, Hartmut: </span></span><span>Konfliktfeld Arbeitszeitpolitik. Friedrich Ebert Stiftung. Düsseldorf 2006.&nbsp;</span><u        style="font-size: 10.0pt;line-height: 13.0pt;"><a class="external-link"                                                          href="http://library.fes.de/pdf-files/asfo/04303.pdf"                                                          rel="nofollow">http://library.fes.de/pdf-files/asfo/04303.pdf</a></u></p><p class="western">The Proudfoot Report. Produktivitätsstudie 2006. Eine internationale Untersuchung der    Produktivität auf Unternehmensebene.&nbsp;<u style="font-size: 10.0pt;line-height: 13.0pt;"><a class="external-link"                                                                                                   href="http://www.optimal-office-management.de/downloads/Productivity_Report_Proudfoot_06.pdf"                                                                                                   rel="nofollow">http://www.optimal-office-management.de/downloads/Productivity_Report_Proudfoot_06.pdf</a></u></p><h2 id="C2GerechteVerteilungderErwerbsarbeitMatrix41-RedakteurDominikSennes&nbsp;dominiksennesgmailcom"        class="western">Redakteur: Dominik Sennes,&nbsp;<a class="external-link" href="mailto:dominik.sennes@gmail.com"                                                           rel="nofollow">dominik.sennes@gmail.com</a></h2>';

indicators[4].bestPractices.content = '<strong>Swiss Re:</strong> „The COYou2 Reduce and Gain Programme“ als Beispiel für grüne Sozialleistungen <a href="http://www.swissre.com/corporate_responsibility/coyou2_programme.html" class="external-link" rel="nofollow">http://www.swissre.com/corporate_responsibility/coyou2_programme.html</a>';

indicators[4].definition.content = '<p>Die Beurteilung des Indikators erfolgt hinsichtlich mehrerer Aspekte. Neben spezifischen Themenfeldern, welche durch    einen hohen ökologischen Einfluss gekennzeichnet sind (Ernährung am Arbeitsplatz; Wegstrecke zum Arbeitsplatz) soll    auch der Umgang und die Integration auf Organisationsebene (Weiterbildung &amp; Awareness, Organisationskultur)    beurteilt werden.</p><ul>    <li><strong>Ernährung während der Arbeitszeit</strong>: Etwa ein Drittel des durchschnittlichen ökologischen        Fußabdruckes ist auf Nahrungsmittel zurückzuführen.<a href="#_ftn7" title="" rel="nofollow">[7]</a> Eine        ökologische Wende ohne Veränderung der Ernährungsgewohnheiten ist äußerst unwahrscheinlich. Auch wenn keine        Betriebsküche vorhanden ist, können positive Anreizfaktoren gesetzt werden (z.B. Kooperation mit        bio-vegetarischen Lokalen oder lokalen Reformhäusern etc.). Dies wirkt sich positiv im Sinne einer betrieblichen        Gesundheitsvorsorge aus.    </li>    <li><strong>Mobilität zum/am Arbeitsplatz</strong>: Rund ein Fünftel des ökologischen Fußabdruckes ist dem        Personenverkehr zuzuordnen, wovon mehr als 90&nbsp;% auf Flugverkehr und Auto fallen. Die Mobilität zum        Arbeitsplatz stellt einen Einflussfaktor zur Reduktion der hieraus entstandenen Emissionen dar. Je nach        Rahmenbedingungen (Produktionsstandort am Stadtrand, Büro im urbanen Zentrum, abgelegener Standort etc.)        bestehen unterschiedlichste Möglichkeiten, Anreizfaktoren zu setzen bzw. sanfte Mobilität zu forcieren        (ÖPNV-Tickets, Substitution durch Infotechnik, Teleworking, Werklinienverkehr, Begünstigung von        Fahrgemeinschaften, Bereitstellung von Dienstfahrrädern und überdachten, geschützten Fahrradparkplätzen,        Vermeidung von Dienstwägen etc.).    </li>    <li><strong>Organisationskultur, Sensibilisierung und unternehmensinterne Prozesse</strong>: Dies kann auf        unterschiedlichsten Ebenen erfolgen und lässt großen Freiraum für Kreativität und Innovationsfähigkeit: z.B.        Integration ökologischer Aspekte in das betriebliche Vorschlagswesen, Budgettopf für externe ökologische        Projekt(vorschläge) der MitarbeiterInnen, „grüne Sozialleistungen“ (z.B. finanzielle Unterstützung privater        Aktivitäten – Wärmedämmung, Eigenheim statt Dienstwagen). Für eine Umsetzung im Unternehmen ist die Bereitschaft        der MitarbeiterInnen von entscheidender Bedeutung. Bewusstsein für und Kenntnisse von ökologischen Auswirkungen        gilt es durch gezielte Maßnahmen zu fördern, u.a. Integration ökologischer Aspekte in die Weiterbildung,        Footprint-Workshops für Mitarbeiter. Während größere Unternehmen v.a. bei Ernährung und Mobilität durch einen        höheren Ausdifferenzierungsgrad (z.B. Kantine, Shuttle-Busse) höhere Einflussnahme verzeichnen können, ist        dieser Punkt für Unternehmen größenunabhängig gleichwertig zugänglich.    </li></ul>';

indicators[4].details.content = '<p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Unternehmensgröße:</strong></p><ul>    <li><strong>Unternehmensgröße:</strong> Während bei KleinstunternehmerInnen durchaus der individuelle Lebensstil        integriert werden kann, steigt mit zunehmender Größe des Unternehmen die institutionelle Einflussmöglichkeit des        Management, z.B. durch eine vorhandene Kantine oder die Möglichkeit eines Shuttle-Busses. <strong>            &nbsp;</strong></li>    <li><strong>Regionale Risiken:</strong> Das Stadt/Landgefälle muss berücksichtigt werden, da Unternehmen im urbanen        Raum durch öffentliche Infrastruktur (ÖPNV) tendenziell über bessere Ausgangsmöglichkeiten verfügen. Kreativität        bei der &nbsp;Gestaltung umweltschonender Mobilität (z.B. Forcieren von Fahrgemeinschaften, Ladestationen für        E-Bikes mit Ökostrom) sollte bei Firmen im ländlichen Gebiet besonders berücksichtigt werden.    </li></ul><p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Abgrenzungen zu anderen Indikatoren</strong></p><p>Es    besteht eine Überschneidung mit Punkt C1/Physische Gesundheit und Sicherheit, ergo verstärkte Aufmerksamkeit auf    Mobilität und Ernährung wirkt sich tendenziell positiv auf die physische Gesundheit der Mitarbeiter aus.</p><p>    Betriebsinterne Mobilität (Geschäftsreisen) wird unter E3 behandelt.</p><p>&nbsp;</p><h5        id="C3ForderungundFörderungökologischenVerhaltensderMitarbeiterInnenMatrix41-FAQ">FAQ</h5><p><strong>Ein    Eingriff in die Ernährung des Einzelnen stellt einen massiven Übergriff in puncto individueller Privatsphäre    dar! </strong></p><p align="left">Essen ist Privatsache. Niemand lässt sich gerne vorschreiben, was und wie viel sie    oder er wovon verspeisen darf. Auch nicht beim Fleisch. Da vielleicht am allerwenigsten. Aber ist Essen tatsächlich    eine rein private Angelegenheit?<a href="#_ftn1" title="" rel="nofollow">[1]</a></p><p align="left">Der    Jahresverbrauch des Durchschnittsösterreichers an Fleisch stieg von ca. 25 kg im Jahr 1950 auf fast 67 kg Fleisch<a            href="#_ftn2" title="" rel="nofollow">[2]</a>, während der Fleischverbrauch eines Bewohners eines    Entwicklungslandes durchschnittlich 32,7 kg Fleisch beträgt.<a href="#_ftn3" title="" rel="nofollow">[3]</a> Auch    heute noch wird auf die regionale Herkunft von Fleisch und anderen tierischen Produkten Wert gelegt, wobei jedoch    vergessen wird, dass die Fläche Österreichs nicht mehr ausreicht, um den immensen Futtermittelbedarf für die    Nutztierhaltung decken zu können.</p><p align="left">Die industrielle Massentierhaltung hat sich (im Gegensatz zu    konsequenter Weidehaltung) weitgehend von der unmittelbar verfügbaren Fläche eines Landes entkoppelt, Futtermittel    werden großteils am Weltmarkt zugekauft. Laut der FAO werden bereits 40 % der Getreideproduktion sowie ⅓ der    verfügbaren Landfläche für die Produktion von tierischen Proteinen aufgewendet.<a href="#_ftn4" title=""                                                                                      rel="nofollow">[4]</a></p><p        align="left">Weitere Informationen finden Sie unter I) Exkurs.</p><p align="left">&nbsp;</p><p><strong>Was ist    der ökologische Fußabdruck? </strong></p><p>Der ökologische Fußabdruck gibt an, wie viel Hektar an Globalfläche    jeder Mensch durch sein tägliches Handeln (Wohnen, Mobilität, Essen, Konsumverhalten) verbraucht.</p><p>Obwohl nur    theoretischer Natur und sehr komplex in der Datenerhebung gilt der ökologische Fußabdruck als ein leicht    verständliches Instrument, um Routinen neu zu überdenken und in eine ökologisch schonendere Herangehensweise zu    verändern. Je größer der Fußabdruck, desto intensiver wird die Umwelt belastet.</p><p>„Die Fläche des Fußabdrucks    wird in ‚globalen Hektar‘ (gha) angegeben. Das globale Hektar ist ein Maß, das die unterschiedliche Fruchtbarkeit    von Böden und ihre Fähigkeit, Rohstoffe auf- und Schadstoffe abzubauen, berücksichtigt. Das globale Hektar ist also    ein Durchschnittswert, der aus der unterschiedlichen ‚Biokapazität‘ von Böden errechnet wird. So ist es möglich, den    Umweltverbrauch verschiedener Länder bzw. deren Einwohner miteinander zu vergleichen.“<a href="#_ftn5" title=""                                                                                             rel="nofollow">[5]</a></p><p>Der durchschnittliche Österreicher beansprucht momentan 4,9 Global Hektar, während der indische Mitmensch 0,8 Global    Hektar zur Verfügung hat. Tragbar, zukunftsfähig und fair wären 1,8 Global Hektar für jeden Weltenbürger.</p><p>    Durch die Vielzahl an Footprintrechnern kommt es häufig zu Verzerrungen. Footprintrechner sollten mit den    internationalen Ecological Footprint Standards von 2006 abgestimmt sein. Dies lässt sich vor allem durch die    Transparenz der Methodologie sowie auch durch das Sicherstellen, dass der Rechner von einem <a        href="http://www.footprintnetwork.org/gfn_sub.php?content=our_partners" class="external-link" rel="nofollow">Global    Footprint Network Partner</a> erstellt wurde, gewährleisten.<a href="#_ftn6" title="" rel="nofollow">[6]</a></p>';

indicators[4].footnotes.content = '<div><p align="left"><a href="#_ftnref1" title="" rel="nofollow">[1]</a> Erklärung von Bern (2010), Fleisch – Weniger ist mehr, <a href="http://www.evb.ch/cm_data/2010_2_Doku-Fleisch_def.pdf" class="external-link" rel="nofollow">http://www.evb.ch/cm_data/2010_2_Doku-Fleisch_def.pdf</a></p></div><div><p align="left"><a href="#_ftnref2" title="" rel="nofollow">[2]</a> <a href="http://www.nutrititionecology.org" class="external-link" rel="nofollow">www.nutrititionecology.org</a></p></div><div><p align="left"><a href="#_ftnref3" title="" rel="nofollow">[3]</a> Bund für Umwelt- und Naturschutz, Le Monde diplomatique (2013), Fleischatlas – Daten und Fakten über Tiere als Nahrungsmittel, <a href="http://www.bund.net/fileadmin/bundnet/publikationen/landwirtschaft/" class="external-link" rel="nofollow">www.bund.net/fileadmin/bundnet/publikationen/landwirtschaft/</a> 130108_bund_landwirtschaft_fleischatlas.pdf</p></div><div><p align="left"><a href="#_ftnref4" title="" rel="nofollow">[4]</a> FAO (2006), Livestock’s Long Shadow, <a href="http://www.fao.org/docrep/010/a0701e/a0701e00.HTM" class="external-link" rel="nofollow">http://www.fao.org/docrep/010/a0701e/a0701e00.HTM</a></p></div><div><p align="left"><a href="#_ftnref5" title="" rel="nofollow">[5]</a> <a href="http://www.footprintrechner.at/footprint/faq" class="external-link" rel="nofollow">http://www.footprintrechner.at/footprint/faq</a></p></div><div><p><a href="#_ftnref6" title="" rel="nofollow">[6]</a> <a href="http://www.footprintnetwork.org" class="external-link" rel="nofollow">http://www.footprintnetwork.org</a></p></div><div><p align="left"><a href="#_ftnref7" title="" rel="nofollow">[7]</a> Eine vegetarische Ernährung (3 x wöchentlich Milch und Milchprodukte) hat im Vergleich zu derzeitigen Ernährungsgewohnheiten (5 x wöchentlich Fleisch, Milch und Milchprodukte) einen um ⅔ niedrigeren ökologischen Fußabdruck, eine vegane Ernährung in etwa um ¾.</p><p>&nbsp;</p></div><div><p><a href="#_ftnref8" title="" rel="nofollow">[8]</a> Die Emissionen beinhalten Fahrzeug-, Kraftstoff-, Stromherstellung, direkte Emissionen, Entsorgung und Infrastruktur und beziehen sich auf Durchschnittsfahrzeuge.</p><p><a href="#_ftnref8" title="" rel="nofollow">[9]</a>&nbsp;<a href="http://www.fairmove.at" class="external-link" rel="nofollow">www.fairmove.at</a></p></div><div><p>&nbsp;</p></div><div><p><a href="#_ftnref10" title="" rel="nofollow">[10]</a> Von Witzke, Harald; Noleppa, Stefan; Zhirkova, Inga (2011), Fleisch frisst Land, WWF, <a href="http://www.wwf.de/fileadmin/fm-wwf/Publikationen-PDF/WWF_Fleischkonsum_web.pdf" class="external-link" rel="nofollow">http://www.wwf.de/fileadmin/fm-wwf/Publikationen-PDF/WWF_Fleischkonsum_web.pdf</a></p></div><div><p><a href="#_ftnref11" title="" rel="nofollow">[11]</a> <a href="http://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf" class="external-link" rel="nofollow">http://www.cdc.gov/nceh/ehs/docs/understanding_cafos_nalboh.pdf</a></p></div>';

indicators[4].goals.content = 'Zielsetzung eines gemeinwohlorientierten Unternehmens ist es, das ökologische Bewusstsein zu forcieren bzw. ökologisches Verhalten innerhalb des Betriebes zu ermöglichen, u.a. Rahmenbedingungen zu schaffen, Vorbilder zu finden, Projekte auszuloben etc. Zu wesentlichen ökologischen Aspekten werden aktiv Maßnahmen gesetzt, Unternehmenskultur und interne Prozesse tragen zu einer tatsächlichen Umsetzung bei.';

indicators[4].implementationHelp.content = '<p> Nachfolgend finden Sie Hintergrundinfos zu betriebsökologischen Themen:</p><p>&nbsp;— <strong>Plattform    Footprint:</strong> Vielfältigste Informationen rund um den ökologischen Fußabdruck <a        href="http://www.footprint.at/" class="external-link" rel="nofollow">http://www.footprint.at/</a></p><p>&nbsp;—    <strong>Fairmove</strong>: U.a. ist eine Übersicht über den CO<sub>2</sub>-Ausstoß aller Verkehrsmittel zu finden.    Folgende Angaben sind pro Personenkilometer mit Besetzungsgrad 1,17 (bei Pkw). Wenn die Person immer alleine fährt,    wird der Wert entsprechend höher, wenn immer zu zweit, entsprechend niedriger.<a href="#_ftn8" title=""                                                                                     rel="nofollow">[8]</a> <a            href="http://www.fairmove.at" class="external-link" rel="nofollow">www.fairmove.at</a></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Verkehrsmittel </strong></p></td>            <td class="confluenceTd"><p><strong>gCO<sub>2</sub>/pkm (Personenkilometer)</strong><a href="#_ftn9"                                                                                                   title=""                                                                                                   rel="nofollow"><strong><strong>[9]</strong></strong></a>            </p></td>        </tr>        <tr>            <td class="confluenceTd"><p>PKW</p></td>            <td class="confluenceTd"><p>208,4</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Motorrad</p></td>            <td class="confluenceTd"><p>187,7</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Mofa</p></td>            <td class="confluenceTd"><p>79,8</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Bahn (Ö.)</p></td>            <td class="confluenceTd"><p>23,9</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>ÖV</p></td>            <td class="confluenceTd"><p>etwa 40</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>E-Pkw</p></td>            <td class="confluenceTd"><p>118</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>E-Pkw mit Ökostrom</p></td>            <td class="confluenceTd"><p>60,4</p></td>        </tr>        </tbody>    </table></div>';

indicators[4].impulsQuestions.content = '<p><strong>Ernährung während der Arbeitszeit</strong></p><ul><li>Welchen Wert legen Mitarbeiter auf die ökologisch-regionale Herkunft ihrer Lebensmittel am Arbeitsplatz und wie sieht das in der tatsächlichen Ausgestaltung aus?</li><li>Welche Angebote gibt es (wenn vorhanden) in der Kantine/Küche (Kochmöglichkeit)/Belieferung (Catering z.B. direkt vom Bauernhof)?</li></ul><p><strong>Mobilität zum Arbeitsplatz</strong></p><ul><li>Welche Verkehrsmittel benützen Mitarbeiter um zu ihrem Arbeitsplatz zu gelangen?</li><li>Welche Möglichkeiten gibt es für Mitarbeiter, ihren Arbeitsweg umweltschonender zurückzulegen?</li><li>Welche Anreize für umweltbewussteres Mobilitätsverhalten stellt das Unternehmen bereit?</li></ul><p><strong>Organisationskultur, Sensibilisierung und unternehmerische Prozesse </strong></p><ul><li>Inwieweit spielen ökologische Aspekte in Weiterbildungsangeboten eine Rolle?</li><li>Welche Sensibilisierungshandlungen finden innerhalb dieses Rahmens statt?</li><li>Welche Strategie verfolgt das Unternehmen im Hinblick auf das ökologische Verhalten der Mitarbeiter?</li></ul>';

indicators[4].moreinfo.content = '<p>&nbsp;— <strong>Nachhaltig handeln im beruflichen und privaten Alltag: </strong>Leitfaden für Unternehmen des    Institutes für sozial-ökologische Forschung: <a            href="http://www.isoe.de/fileadmin/redaktion/Downloads/Corporate_Sustainability/naha-handbuch-2011.pdf"            class="external-link" rel="nofollow">http://www.isoe.de/fileadmin/redaktion/Downloads/Corporate_Sustainability/naha-handbuch-2011.pdf</a></p><p>— <strong>Mobitool:</strong> Schweizer Plattform zur nachhaltigen Mobilität in Unternehmen inkl. Tools zur    Berechnung vom mobilitätsbezogenen Emissionen: <a href="http://www.mobitool.ch" class="external-link"                                                      rel="nofollow">http://www.mobitool.ch</a></p><p>—    <strong>Mimona: </strong>Mitarbeitermotivation zu Nachhaltigkeit (Datenbank mit Praxisbeispielen) - <a            href="http://www.mimona.de" class="external-link" rel="nofollow">http://www.mimona.de</a></p><p>— <strong>Mitarbeitermotivation    für umweltbewusstes Verhalten:</strong> Ein Leitfaden für Umweltbeauftragte in Unternehmen des Bayrischen    Landesamtes für Umwelt: <a            href="http://www.bestellen.bayern.de/application/applstarter?APPL=STMUG&amp;DIR=stmug&amp;ACTIONxSETVAL%28index.htm,APGxNODENR:16564,USERxBODYURL:artdtl.htm,AARTxNR:lfu_agd_00058%29=X"            class="external-link" rel="nofollow">http://www.bestellen.bayern.de/application/applstarter?APPL=STMUG&amp;DIR=stmug&amp;ACTIONxSETVAL%28index.htm,APGxNODENR:16564,USERxBODYURL:artdtl.htm,AARTxNR:lfu_agd_00058%29=X</a></p>Redakteurin: Julia Grosinger, <a href="mailto:julia_gros@yahoo.de" class="external-link" rel="nofollow">julia_gros@yahoo.de</a>';

indicators[5].bestPractices.content = '<p align="left"><strong style="font-size: 10.0pt;line-height: 13.0pt;">Beispiele für innerbetriebliche Gehaltsdemokratie</strong></p><ul><li>Bezüglich einer gemeinsamen Festlegung von Gehältern ist das Beispiel Ökofrost interessant: <a href="http://www.kulturwandel.org/projekte/die-belegschaft-erarbeitet-eigene-gehaltsstruktur/index.html" class="external-link" rel="nofollow">http://www.kulturwandel.org/projekte/die-belegschaft-erarbeitet-eigene-gehaltsstruktur/index.html</a></li><li>Weitere Beispiele finden sich vor allem für Unternehmen unter 100 Mitarbeitern. Eine kritische Übersicht: <a href="http://www.manager-magazin.de/unternehmen/karriere/0,2828,879451,00.html" class="external-link" rel="nofollow">http://www.manager-magazin.de/unternehmen/karriere/0,2828,879451,00.html</a> &nbsp;</li></ul><p align="left"><strong style="font-size: 10.0pt;line-height: 13.0pt;">Beispiele für vorbildliche innerbetriebliche Gehaltsspreizung</strong></p><ul><li>Gea/Waldviertler 1:2 <br> (2011 Umsatz 15,5 Mio €/ 120 MA bei Waldviertler)</li><li>Gugler&nbsp; Cross Media 1:4 <br> (2010 – Umsatz 6,8 Mio €/ 76 MA Äquivalent)</li><li>Sonnentor 1:4<br> (2011 – Umsatz 24,7 Mio €/ 170 MA Kopfzahl)</li></ul><p align="left"><strong>Öffentlicher Dienst als positives Beispiel</strong></p><p align="left">Die Gehälter der öffentlich Bediensteten sind weitgehend transparent und die innerbetriebliche Einkommensspreizung vergleichsweise gering. Vgl. etwa <a href="https://wiki.gwoe.net/(http:/de.wikipedia.org/wiki/Tarifvertrag_f%C3%BCr_den_%C3%B6ffentlichen_Dienst_der_L%C3%A4nder" rel="nofollow">link</a></p>';

indicators[5].definition.content = '<p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Definition Mindesteinkommen und living wages</strong></p><p>    Nachdem die Lebenserhaltungskosten in einzelnen Ländern und Regionen stark variieren ist es nicht sinnvoll, einen    einheitlichen Betrag festzulegen. Zur Orientierung dient ein Mindestlohn von € 1.330,– (netto) monatlich in    Deutschland und Österreich. Dieser orientiert sich an den Referenzbudgets für notwendige Ausgaben für soziale    Teilhabe. Referenzbudgets berechnen für ein jeweiliges Land, wie hoch das verfügbare Einkommen sein muss, um einen    menschenwürdigen Lebensstandard sicherzustellen und alle wichtigen Grundbedürfnisse zu decken. Hierzu zählt unter    anderem eine Wohnmöglichkeit, Wärme, Essen, Transport, Gesundheitsversorgung. Für Österreich ergeben sich für eine    Person im Alter von 25 bis 51 in einem Ein-Personen-Haushalt zur Deckung der Grundbedürfnisse bei voller Anstellung    im Jahr 2012 netto € 1.330,–, für einen Haushalt mit einem Erwachsenen und einem Kind (8) € 1.840,– <a        href="#_ftn12" title="" rel="nofollow">[12]</a></p><p>In Regionen mit abweichenden Lebenshaltungskosten ist ein    entsprechend angepasster Wert heranzuziehen bzw. die gültigen Mindestlöhne, wo diese höher liegen.<a href="#_ftn13"                                                                                                         title=""                                                                                                         rel="nofollow">[13]</a></p><p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Definition Einkommen</strong></p><p>Im Hinblick auf die    Einkommensverteilung sind unter Einkommen nur jene Geld- und Sachwertflüsse zu verstehen, die zu einem endgültigen    Abfluss beim Unternehmen und einem Zufluss in der Privatsphäre des/der MitarbeiterIn führen. Gezählt werden dabei    alle Einkommensbestandteile: fixe und variable Entlohnung, Zulagen, Boni, Gewinnausschüttungen. Wo nicht anders    vermerkt, handelt es sich bei allen Gehaltsangaben um 12 Netto-Monatseinkommen. In Ländern/Unternehmen in denen ein    13. oder 14. Gehalt ausbezahlt wird, muss dieses aliquot den 12 Monatsgehältern hinzugerechnet werden.</p>';

indicators[5].footnotes.content = '<div><p><a href="#_ftnref1" title="" rel="nofollow">[1]</a> Felber, Christian: „Gemeinwohl-Ökonomie“, Neuausgabe,    Deuticke, Wien 2012.</p></div><div><p align="left"><a href="#_ftnref2" title="" rel="nofollow">[2]</a> Quelle: <a        href="http://www.berliner-zeitung.de/wirtschaft/manager-wie-viel-gehalt-ist-auch-verdient-,10808230,21520006.html"        class="external-link" rel="nofollow">link</a>&nbsp; vgl. zu Österreich auch Wieser, Christina/Oberrauter,    Markus: Vorstandsvergütung und Ausschüttungspolitik der ATX Unternehmen 2008. Studie der AK Wien 2009, S. 1.    Abrufbar im Internet: <a href="http://www.arbeiterkammer.at/bilder/d96/StudieATX.pdf" class="external-link"                             rel="nofollow">link</a> Stand: 07.0 2.2012.</p>    <p align="left">Weitere Beispiele exzessiver Gehaltsspreizung:</p>    <ul>        <li><a href="http://derstandard.at/1304552024822/Portraet-Andreas-Treichl-Oesterreichs-frechster-Banker"               class="external-link" rel="nofollow">Jahreseinkommen Andreas Treichl/ Erste Bank 2010 </a>– 2,8 Mio Euro,            d.h. etwa 150-fache des vorgeschlagenen Mindesteinkommens von € 1.330.-        </li>        <li>            <a href="http://www.berliner-zeitung.de/wirtschaft/manager-wie-viel-gehalt-ist-auch-verdient-,10808230,21520006.html"               class="external-link" rel="nofollow">Jahreseinkommen Peter Löscher/Siemens 2011</a> -&nbsp; 8,74 Mio            Euro, d.h. das 336 fache des geringsten Jahrestariflohns in der Metall- und Elektroindustrie        </li>        <li><a href="http://www.spiegel.de/wirtschaft/unternehmen/dax-top-verdiener-ackermann-rutscht-ab-a-751040.html"               class="external-link" rel="nofollow">Jahreseinkommen Josef Ackermann/ Deutsche Bank 2010 </a>– 9 Mio            Euro, d.h. das 483-fache des vorgeschlagenen Mindesteinkommens        </li>        <li>            <a href="http://www.spiegel.de/wirtschaft/unternehmen/fuenf-milliarden-dollar-hedgefonds-manager-sprengt-verdienstrekord-a-742268.html"               class="external-link" rel="nofollow">Jahreseinkommen John Paulson/ </a><a                href="http://www.spiegel.de/wirtschaft/unternehmen/fuenf-milliarden-dollar-hedgefonds-manager-sprengt-verdienstrekord-a-742268.html"                class="external-link" rel="nofollow">Hedgefond</a><a                href="http://www.spiegel.de/wirtschaft/unternehmen/fuenf-milliarden-dollar-hedgefonds-manager-sprengt-verdienstrekord-a-742268.html"                class="external-link" rel="nofollow">-Manager 2010</a> – 2,5 Mrd $, d.h. 134.264-fache des            vorgeschlagenen Mindesteinkommens (bei $ Kurs 0,75 €)        </li>    </ul></div><div><p><a href="#_ftnref3" title="" rel="nofollow">[3]</a> Wilkinson, Richard/Pickett, Kate: „Gleichheit ist Glück.    Warum gerechte Gesellschaften für alle besser sind“, Tolkemitt Verlag, Berlin 2009.</p></div><div><p align="left"><a href="#_ftnref4" title="" rel="nofollow">[4]</a> Brenke, Karl/Grabka, Markus M.: Schwache    Lohnentwicklung im letzten Jahrzehnt. In: DIW Wochenbericht. Reallöhne 2000–2010: Ein Jahrzehnt ohne Zuwachs.    Bericht 45/2011, S. 3–15. Abrufbar im Internet: <a            href="http://www.diw.de/documents/publikationen/73/diw_01.c.388565.de/11-45.pdf" class="external-link"            rel="nofollow">link</a> Stand: 07.02.2012.</p></div><div><p><a href="#_ftnref5" title="" rel="nofollow">[5]</a> Siehe <a        href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/VerdiensteArbeitskosten/VerdienstunterschiedeMaennerFrauen/Aktuell_Verdienstunterschied.html?nn=50690"        class="external-link" rel="nofollow">link</a></p></div><div><p><a href="#_ftnref6" title="" rel="nofollow">[6]</a> Siehe: <a href="http://www.youtube.com/watch?v=cZ7LzE3u7Bw"                                                                      class="external-link" rel="nofollow">link</a> od.    Wilkinson, Richard / Pickett, Kate: „Gleichheit ist Glück. Warum gerechte Gesellschaften für alle besser sind“,    Tolkemitt Verlag, Berlin 2009.</p></div><div><p><a href="#_ftnref7" title="" rel="nofollow">[7]</a> Hinz, Thomas/Liebig, Stefan, et al.: „Bericht zur Studie.    Einkommensgerechtigkeit in Deutschland“, 2010, S. 5. Abrufbar im Internet. URL: <a            href="http://www.uni-bielefeld.de/soz/personen/liebig/pdf/Studie-Einkommensgerechtigkeit-2010.pdf"            class="external-link" rel="nofollow">link</a> Stand: 14.02.2012.</p></div><div><p align="left"><a href="#_ftnref8" title="" rel="nofollow">[8]</a> So forderte beispielsweise der Gründer des    Weltwirtschaftsforums, Klaus Schwab, die <a            href="http://www.berliner-zeitung.de/wirtschaft/manager-wie-viel-gehalt-ist-auch-verdient-,10808230,21520006.html"            class="external-link" rel="nofollow">Beschränkung von Vorstandsbezügen auf ein 20- bis 40-Faches der        Mindestlöhne</a> im jeweiligen Unternehmen. In der <a            href="http://www.reuters.com/article/2013/01/21/reutersmagazine-davos-swiss-rich-idUSL1E9CHHA220130121"            class="external-link" rel="nofollow">Schweiz</a> und <a            href="http://www.handelsblatt.com/unternehmen/management/koepfe/vorstandsgehaelter-zum-teufel-mit-den-millionen-boni/6613938.html"            class="external-link" rel="nofollow">Deutschland</a> werden Möglichkeiten zur Beschränkung von    Vorstandsbezügen diskutiert.</p></div><div><p class="fu"><a href="#_ftnref9" title="" rel="nofollow">[9]</a> Bezogen auf einen Ein-Personen-Haushalt. Der Wert    eines monatlichen Nettoeinkommens von € 1.330,– orientiert sich an den Referenzbudgets (bzw. „living-wages“), welche    z.B. von der ASB (Dachorganisation der staatlich anerkannten Schuldnerberatungen) erstellt wurden (siehe    ausführliche Definition weiter unten).</p></div><div><p><a href="#_ftnref10" title="" rel="nofollow">[10]</a> Der Wert wurde von den Schweizer Pionier-Unternehmen    vorgeschlagen. Berücksichtigt wurde dabei, dass etwa der Migros-Genossenschaftsbund als einer der größten    Arbeitgeber in der Schweiz einen Minimallohn von CHF 3.500,– einführt. Im Weiteren ist eine Volksabstimmung für die    gesetzliche Verankerung eines Minimallohnes von CHF 4.000,– in Vorbereitung. Vergleiche dazu die ausführliche    Argumentation der Mindestlohn Initiative Schweiz: <a            href="http://www.mindestlohn-initiative.ch/category/aktuell/fragen_und_antworten/" class="external-link"            rel="nofollow">link</a></p></div><div><p><a href="#_ftnref11" title="" rel="nofollow">[11]</a> Wie Höchst-, Niedrigsteinkommen, Median, Anteil der    Einkommen der 10&nbsp;% der höchsten Einkommen und der 10&nbsp;% der niedrigsten Einkommen. Eine Berechnung des    Gini-Koeffizienten erschien uns nach genauer Prüfung als zu aufwändig.</p></div><div><p align="left"><a href="#_ftnref12" title="" rel="nofollow">[12]</a> Für eine genaue Aufschlüsselung für    Österreich siehe: <a href="http://www.referencebudgets.eu/budgets/images/conference09/austria_poster-handout.pdf"                         class="external-link" rel="nofollow">link</a> sowie allgemein: <a            href="http://en.wikipedia.org/wiki/Living_wage" class="external-link" rel="nofollow">link</a> Diese    ursprünglich für 2008/09 errechneten Werte wurden mit 2&nbsp;% p.a. gesteigert. Regional unterschiedliche    Lebenserhaltungskosten werden dabei noch nicht berücksichtigt.</p></div><div><p><a href="#_ftnref13" title="" rel="nofollow">[13]</a> Über höhere Mindestlöhne verfügt Luxemburg (€    1.800/Monat), Belgien, Irland, Niederlande und Frankreich (Daten Eurostat, Juli 2012). In der Schweiz existieren    unterschiedliche Mindestlöhne für einzelne Branchen. 2011 wurde im Kanton Neunburg erstmals ein Mindestlohn in einer    Verfassung verankert. Für eine gute Übersicht siehe: <a rel="nofollow">link</a></p></div>';

indicators[5].goals.content = 'Das Ziel ist eine gerechte Einkommensverteilung. Die Entlohnung soll sich an Leistung (= gleiche Anstrengung pro Arbeitszeit), Verantwortung, Risiko und Bedarf orientieren.<h2 id="C4GerechteEinkommensverteilungMatrix41-Hintergrund">Hintergrund</h2><p>Die Einkommensschere geht immer weiter    auf. In Österreich beträgt die Einkommensspreizung zwischen dem Höchst- und Mindesteinkommen 1:800, in Deutschland    1: 5000 und in den USA das 350.000-fache des dortigen gesetzlichen Mindestlohnes.<a href="#_ftn1" title=""                                                                                        rel="nofollow">[1]</a> Auch    innerbetrieblich geht die Schere immer weiter auf: Im Jahr 2011 betrug die durchschnittliche Vorstandsvergütung    eines DAX-Unternehmens das 54-fache des durchschnittlichen Bruttobezugs eines Beschäftigten dieser Unternehmen.<a            href="#_ftn2" title="" rel="nofollow">[2]</a> Mit Leistung oder Verantwortung haben diese Unterschiede    nichts mehr zu tun.</p><p>Zahlreiche sozialmedizinische Studien belegen, dass Gesellschaften umso „kränker“,    unsicherer und krimineller werden, je größer die Ungleichheit ist.<a href="#_ftn3" title="" rel="nofollow">[3]</a>    Während Wertschöpfung und BIP kräftig gewachsen sind, stagnieren in Deutschland und Österreich die    durchschnittlichen Nettoeinkommen.<a href="#_ftn4" title="" rel="nofollow">[4]</a></p><p>Mindestens sieben weitere    Gründe sprechen gegen eine übermäßige Ungleichheit bei den Einkommen:</p><ul>    <li><strong>Leistung. </strong>Der Leistungsgedanke ist in der Wirtschaft ein zentrales Bewertungskriterium.        Einkommensunterschiede in tausendfacher Höhe sind jedoch nicht mehr durch Leistung zu rechtfertigen.    </li>    <li><strong>Chancengleichheit. </strong>Wenn Einzelpersonen Multimilliarden akkumulieren oder erben und 50&nbsp;%        der Jugendlichen arbeitslos sind, wie in Spanien, oder 37&nbsp;% in Hartz-IV-Haushalten aufwachsen, wie in        Berlin, dann ist es mit dem liberalen Prinzip der gleichen Chancen aller vorbei. Von 30 DAX-CEOs ist einer ein        Arbeiterkind.    </li>    <li><strong>Demokratie. </strong>Ökonomische Macht spiegelt sich auch in politischer Einflussnahme wieder. Die        politischen Teilhabe- und Mitgestaltungsmöglichkeiten aller geht verloren, wenn wenige das Vieltausendfache der        anderen verdienen.    </li>    <li><strong>Gender. </strong>Das statistische Bundesamt (Destatis) gibt an, dass Frauen bei gleicher Ausgestaltung        der Arbeitsverhältnisse und gleichem Bildungsgrad im Schnitt acht Prozent weniger Gehalt beziehen als ihre        männlichen Kollegen.<a href="#_ftn5" title="" rel="nofollow">[5]</a></li>    <li><strong>Gesundheit. </strong>Wenn die Ungleichheit ein gewisses Maß übersteigt, nehmen in allen Bereichen der        Gesellschaft Erkrankungen, Depressionen, Selbstmorde, Drogenkonsum und Kriminalität sprunghaft zu und die        Lebenserwartung ab. Richard Wilkinson hat beeindruckendes statistisches Material publiziert, wie ein Übermaß an        Ungleichheit die Lebensqualität aller senkt.<a href="#_ftn6" title="" rel="nofollow">[6]</a></li>    <li><strong>Glück. </strong>Ab einem gewissen Grad des materiellen Wohlstandes bringt ein noch höheres Einkommen        keinen weiteren Zuwachs an Lebenszufriedenheit. Mehr vom Vielen macht unfrei und trennt uns von den        dahinterliegenden Bedürfnissen, die wir damit zu befriedigen versuchen.    </li>    <li><strong>Ökologie.</strong> Extreme Ungleichheit treibt eine Spirale des Immer-mehr-Wollens voran, doch die        ökologische Tragfähigkeit des Planeten ist begrenzt. Wenn wir allen Menschen ein gleiches Daseinsrecht        zugestehen, können die einen nicht das Vieltausendfache anderer kassieren, besitzen und verkonsumieren.    </li></ul><p>Umfragen zufolge empfinden rund 90&nbsp;% der Menschen in Österreich, Deutschland oder Großbritannien die    gegenwärtige soziale Ungleichheit als zu groß.<a href="#_ftn7" title="" rel="nofollow">[7]</a> Auch in der    Wirtschaft wird der Ruf nach einer Begrenzung von exzessiven Gehältern immer lauter.<a href="#_ftn8" title=""                                                                                           rel="nofollow">[8]</a></p>';

indicators[5].impulsQuestions.content = '<li>Was ist der niedrigste bzw. höchste Lohn im Unternehmen?</li><li>Wie hoch ist das Medianeinkommen?</li><li>Gibt es ein innerbetrieblich transparentes Entgeltsystem?</li>';

indicators[5].moreinfo.content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">Wilkinson, Richard/Pickett, Kate: „Gleichheit ist Glück. Warum gerechte Gesellschaften für alle besser sind“, Tolkemitt Verlag, Berlin 2009. Siehe auch </span><a        href="http://haffmans-tolkemitt.de/programm/gleichheit-ist-gluck/"        style="font-size: 10.0pt;line-height: 13.0pt;" class="external-link" rel="nofollow">link</a><span        style="font-size: 10.0pt;line-height: 13.0pt;"> und </span><a        href="http://www.faz.net/artikel/C30405/richard-wilkinson-und-kate-pickett-gleichheit-ist-glueck-es%20schwankt-das-fundament-des-gluecks-30083252.html"        style="font-size: 10.0pt;line-height: 13.0pt;" class="external-link" rel="nofollow">link</a></p><p><strong        style="font-size: 10.0pt;line-height: 13.0pt;">Negativbeispiele und Hintergrundinfos</strong></p><ul>    <li><a href="http://www.politischebildung.com/pdfs/33_t5.pdf" class="external-link" rel="nofollow">Zweiseitige        Übersicht über die Vermögens- und Einkommenssituation in Österreich</a></li>    <li><a href="http://pro-gsiberger.blogspot.co.at/2009/09/rezept-gegen-die-krise-gerechte.html" class="external-link"           rel="nofollow">Blogartikel mit wissenschaftlichen Hintergrund zur gerechten Einkommensverteilung </a></li>    <li><a href="http://library.fes.de/pdf-files/iez/08577.pdf" class="external-link" rel="nofollow">Gonzalo Daniel </a><a            href="http://library.fes.de/pdf-files/iez/08577.pdf" class="external-link" rel="nofollow">Martner</a><a            href="http://library.fes.de/pdf-files/iez/08577.pdf" class="external-link" rel="nofollow">: Ist eine bessere        Einkommens-</a><a href="http://library.fes.de/pdf-files/iez/08577.pdf" class="external-link" rel="nofollow">verteilung</a><a            href="http://library.fes.de/pdf-files/iez/08577.pdf" class="external-link" rel="nofollow"> möglich?</a></li>    <li>Frontal: <a href="http://www.youtube.com/watch?v=vn6YC_VcUN4" class="external-link" rel="nofollow">Was Manager        verdienen</a></li>    <li>Präsentation <a href="http://www.youtube.com/watch?v=qO88WbzbvQI" class="external-link" rel="nofollow">Studie        Managementgehälter 2012</a></li>    <li>brand eins-Artikel: <a href="http://www.brandeins.de/magazin/kapitalismus/billig-kommt-teuer.html"                               class="external-link" rel="nofollow">Billig kommt teuer </a>(04/2012) – Lohngefüge bei        einem privaten Postdienstleister    </li>    <li>ARD Panorama: <a href="http://www.youtube.com/watch?v=b9sB4jqI0LM" class="external-link" rel="nofollow">Lohndumping</a>    </li>    <li>SWR-Report Mainz: <a href="http://www.youtube.com/watch?v=Zt6kL1Uq15c" class="external-link" rel="nofollow">Lohndumping        dank Zeitarbeit</a></li>    <li>ZDF 37 Grad: <a href="http://www.youtube.com/watch?v=DqCOXjUQJpM" class="external-link" rel="nofollow">Schuften        und doch kein Geld</a></li>    <li>Böckler Stiftung: <a href="http://www.boeckler.de/pdf/impuls_2009_13_2.pdf" class="external-link"                             rel="nofollow">Schwächung der Wirtschaft durch Einkommenskluft</a></li></ul><p>&nbsp;</p><p><strong>RedakteurInnen: Nonno Breuss,&nbsp;<a href="mailto:nonno.breuss@gmail.com"                                                                   class="external-link" rel="nofollow">nonno.breuss@gmail.com</a>,    Mitarbeit: Christian Felber, Christian Rüther, Otto Galehr, Jan Hunnius, Dominik Sennes</strong></p>';

indicators[6].bestPractices.content = '<p>Bei den Best Practises wurden ein erfolgreiches Demokratie-Modell sowie zwei Unternehmen angeführt, die die    demokratische Mitbestimmung auf ihre spezielle Weise verwirklicht haben. Alle eint eine umfassende innerbetriebliche    Transparenz, weil das erst die Voraussetzung für wirkliche demokratische Mitbestimmung ist. Sowohl bei Endenburg    Elektrotechniek, das Pionier-Unternehmen der Soziokratie als auch bei Semco gehört zu der Transparenz die Schulung    der MitarbeiterInnen, damit sie die Unternehmenszahlen auch lesen und verstehen können.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn10"            title="" class="external-link" rel="nofollow">[10]</a>&nbsp;&nbsp;</p><p>Mit Wagner &amp; Co Solartechnik    haben wir einen Solar-Pionier aus Deutschland als „Good practise“, der schon auf eine mehr als 30jährige    demokratische Geschichte zurückblicken kann.</p><p><strong>Soziokratie</strong></p><p>Soziokratie ist ein    Organisationsmodell, bei dem die Mitarbeiter alle Grundsatz- und Rahmenentscheidungen auf gleichwertiger Ebene mit    den Führungskräften im Konsent treffen. Konsent heißt, dass keiner im jeweiligen Team (auch Kreis genannt) einen    schwerwiegenden Einwand gegen einen Vorschlag im Hinblick auf das gemeinsame Ziel hat.</p><p>Grundsatz- und    Rahmenentscheidungen sind z.B. Budget, Einstellungen, Entlassungen, Strategie, Aufgabenverteilung etc. Diese    Entscheidungen werden nicht mehr von der Führungskraft alleine getroffen, sondern gemeinsam im jeweiligen Team auf    Basis der Gleichwertigkeit. Jeder kann “Nein” sagen und Argumente für das Nein geben, damit eine machbare andere    Lösung gefunden wird, die jeder ausführen kann.</p><p>Die Führungskräfte werden nach offener Aussprache gewählt und    können ebenso wieder abgesetzt werden. Für jede höhere Hierarchiestufe gibt es gewählte Delegierte, so dass in einem    möglichen Vorstand drei Vorstandsvorsitzende und drei gewählte Delegierte sitzen und auf der Basis vom Konsent    entscheiden.</p><p>Die Soziokratie wurde Ende der 1960er in Holland entwickelt und ist dort und in Teilen der USA    recht verbreitet, vor allem in NPOs und KMUs. In den Niederlanden braucht ein 100% soziokratisches Unternehmen    keinen Betriebsrat mehr stellen.</p><p>Je nachdem wie weit die Implementierung der Soziokratie ist, können die    Abstufun-gen wie folgt bewertet werden:</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="center"><strong>Kategorie</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Erste Schritte</strong></p>                <p align="center"><strong>(0-10%)</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Fortgeschritten<br> (11-30%)</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Erfahren<br> (31-60%)</strong></p></td>            <td class="confluenceTd"><p align="center"><strong>Vorbildlich<br> (61-100%)</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="center"><strong>Bsp. Soziokratie</strong></p></td>            <td class="confluenceTd"><p align="center">Pilotkreis Soziokratie</p></td>            <td class="confluenceTd"><p align="center">Bis 100% Kreis-struktur<a                    href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn11"                    title="" class="external-link" rel="nofollow">[11]</a></p></td>            <td class="confluenceTd"><p align="center">Vollständige Kreis-<br>struktur Soziokratie seit 2-3 Jahren</p>            </td>            <td class="confluenceTd"><p align="center">Soziokratie ist rechtlich <br>verankert, institutionalisiert</p>            </td>        </tr>        </tbody>    </table></div><p>Aus der Soziokratie ist in den letzten Jahren der Ansatz der Holacracy hervor-gegangen, der in vielen Bereichen    ähnlich ist. Dieser Ansatz geht in Richtung demokratischer Mitbestimmung, allerdings nicht in der Qualität der    Soziokratie. In der Soziokratie entscheidet allein das Kreismitglied, ob ein schwerwiegender Einwand vorliegt oder    nicht. In der Holacracy kann der Moderator oder die Gruppe entscheiden, ob der Einwand valide ist oder nicht.</p><p>    Letztendlich müsste im Einzelfall geprüft werden, inwieweit ein holakratisches Unternehmen in die obige Abstufung    hineinpasst und wie es zu bewerten ist. <a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn12"        title="" class="external-link" rel="nofollow">[12]</a></p><p><u>Weitere Ressourcen zur Soziokratie</u></p><ul>    <li>Umfassendes Skript zur Soziokratie (mit einer Liste von soziokratischen Unternehmen weltweit) <a            href="http://soziokratie.org/wp-content/uploads/2011/06/soziokratie-skript2.7.pdf" class="external-link"            rel="nofollow">http://soziokratie.org/wp-content/uploads/2011/06/soziokratie-skript2.7.pdf</a></li>    <li class="LinklisteListen">Portrait von Endenburg Elektronics (Skript/ Buch)<a            href="http://books.google.at/books?id=zc_jw8hsoFIC&amp;printsec=frontcover#v=onepage&amp;q&amp;f=false"            class="external-link" rel="nofollow">http://books.google.at/books?id=zc_jw8hsoFIC&amp;printsec=frontcover#v=onepage&amp;q&amp;f=false</a>    </li>    <li>Brandeins-Artikel (Endenburg/ Reykx) <a href="http://www.brandeins.de/magazin/-afc796490a/die-ideale-welt.html"                                                class="external-link" rel="nofollow">http://www.brandeins.de/magazin/-afc796490a/die-ideale-welt.html</a>    </li>    <li>Umfassende Materialsammlung zur Soziokratie <a href="http://soziokratie.org/was-ist-soziokratie/"                                                       class="external-link" rel="nofollow">http://soziokratie.org/was-ist-soziokratie/</a>    </li></ul><p><strong><br>Semco<strong><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn13"        title="" class="external-link" rel="nofollow">[13]</a></strong></strong></p><p>Semco ist ein brasilianischer    Mischkonzern, der eine einmalige Unternehmenskultur hat. 2003 gibt es ca. 3000 Mitarbeiter, die meist in kleinen    Einheiten zusammen­arbeiten. Es gibt keine Richtlinien, nur ein bebildertes Überlebensbuch, viel Selbstorganisation    und hohe Mitbestimmung der Mitarbeiter. Sie &nbsp;können ihre Führungskräfte selbst auswählen, bestimmen ihre    Arbeitszeiten und Gehälter selbst, jeder kann an allen Meetings teilnehmen und mitentscheiden. Als wesentliches    Regula­tiv gelten Transparenz und Ergebnisorientierung in den Teams. Gehälter müssen vor den Kollegen gerechtfertigt    und selbst erwirtschaftet werden. Es gibt eine hohe Transparenz von Zahlen, Fakten und Entscheidungen und ein höchst    innovatives Arbeitsklima.<span style="color: rgb(0,0,0);font-size: 1.8em;font-weight: bold;line-height: normal;">&nbsp;</span></p><p>Daneben gibt es eine halbjährliche Führungskräftebefragung vom jeweiligen Team. Bei einem Abschneiden unter 70%    müssen sie sich innerhalb eines Jahres deutlich verbessern. Normalerweise erhalten die Manager 80-85%.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn14"            title="" class="external-link" rel="nofollow">[14]</a><span            style="color: rgb(0,0,0);font-size: 1.8em;font-weight: bold;line-height: normal;">&nbsp;</span></p><p>Semco    ist wirtschaftlich sehr erfolgreich: Die jährlichen Wachstumsraten liegen zwischen 25% und 40%, der Gewinn ist von    1993 - 2004 von 35 auf 160 Millionen US-Dollar gestiegen.</p><p>Alle Entscheidungen bei Semco werden demokratisch    getroffen. Dabei kann jeder einen Entscheidungsprozess anregen. Einfach eine Email an die Mitarbeiter, ein    Treffpunkt und los geht’s. Wenn Leute auftauchen, ist das Thema von Interesse und die Gruppe arbeitet solange, wie    Energie da ist und der Entscheidungsprozess fortschreitet. Dabei kann sich die Gruppe immer wieder neu    zusammensetzen. Am Ende wird von den Anwesenden demokratisch mit einfacher Mehrheit (eine Person = eine Stimme)    entschieden. Auch Ricardo Semler, der Haupteigentümer von Semco, hat nur eine Stimme und wurde mehrfach überstimmt.    Zwar hat er formell ein Vetorecht, hat aber bisher laut Eigenauskunft nie davon Gebrauch gemacht, weil dann das    gesamte System für ihn gefährdet scheint. Es könnte sonst bei den Mitarbeitern eine Haltung entstehen wie: „Wir    können abstimmen was wir wollen, der Chef entscheidet eh nach seinen Wünschen.“</p><p>Das Besondere an dieser Form    der Mitbestimmung ist, dass sie sehr einfach und flexibel ist. Jeder, der Interesse an dem Thema hat, kann    mitentscheiden. Wer sich nicht einbringt, der stimmt zu. So entstehen recht schnell Entscheidungen, die jeweils von    den Involvierten/ Interessierten getragen werden.</p><p>Im höchsten Gremium von Semco sitzen insgesamt acht    Mitglieder. Einer ist für Ricardo Semler, drei sind permanent besetzt mit Vorstandsvorsitzenden von Teilfirmen, auf    zwei Plätzen rotieren hochrangige Manager unterhalb der Vorstandsebene und zwei können von jedem Mitarbeiter nach    dem „Wer-zuerst-kommt,-mahlt-zuerst-Prinzip“ besetzt werden. Diese einmaligen Mitglieder haben das gleiche    Stimmrecht, wie die permanenten Mitglieder in dem Gremium. Die Protokolle können von jedem eingesehen werden,    allerdings im Vorstands-Büro und nicht via Intranet.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn15"            title="" class="external-link" rel="nofollow">[15]</a></p><p align="left"><u>Weitere Ressoucen über    Semco</u></p><ul>    <li><u><strong> </strong></u>Umfassender Artikel mit Materialsammlung &nbsp;<a            href="http://christianruether.com/2011/03/ricardo-semler-und-semco-behandle-deine-mitarbeiter-wie-erwachsene/"            class="external-link" rel="nofollow">http://christianruether.com/2011/03/ricardo-semler-und-semco-behandle-deine-mitarbeiter-wie-erwachsene/</a>    </li>    <li>Artikel im Brandeins <a href="http://www.brandeins.de/magazin/nachfolge/mach-es-zu-deinem-projekt.html"                                class="external-link" rel="nofollow">http://www.brandeins.de/magazin/nachfolge/mach-es-zu-deinem-projekt.html</a>    </li>    <li>Artikel in Sein <a            href="http://www.sein.de/gesellschaft/neue-wirtschaft/2010/die-befreiung-der-arbeit-das-7-tage-wochenende.html"            class="external-link" rel="nofollow">http://www.sein.de/gesellschaft/neue-wirtschaft/2010/die-befreiung-der-arbeit-das-7-tage-wochenende.html</a>    </li>    <li>Homepage von Semco <a href="http://www.semco.com.br/en/content.asp?content=3&amp;contentID=605"                              class="external-link" rel="nofollow">http://www.semco.com.br/en/content.asp?content=3&amp;contentID=605</a>    </li></ul><p><strong><br>Wagner Solar</strong><span        style="color: rgb(0,0,0);font-size: 1.8em;font-weight: bold;line-height: normal;">&nbsp;</span></p><p>Wagner    &amp; Co Solartechnik ist ein Pionier auf dem Gebiet der Solartechnologie, da sie schon seit gut 30 Jahren aus einer    Umweltinitiative heraus gegründet auf dem Markt sind.</p><p>Wagner &amp; Co besteht aus zwei Gesellschaften:</p><ul>    <li>Solartechnik GmbH, die den Vertrieb, die Entwicklung und Produktion von Anlagen für Solarwärme, Solarstrom und        Pellet Heiztechnik (effektive Holzverbrennung) organisiert    </li>    <li>Immobilien GmbH, die die Firmengrundstücke – und gebäude besitzt.</li></ul><p>Daneben gibt es Niederlassungen in Spanien, Frankreich, Italien, Großbritannien und den USA.</p><p>Wagner &amp;    Co ist seit seiner Gründung ein MitarbeiterInnenunternehmen, d.h.</p><ul>    <li>das Unternehmen gehört nur MitarbeiterInnen, es gibt keine externen Eigentümer.</li>    <li>das Unternehmen ist demokratisch organisiert, d.h. die Führungskräfte werden demokratisch gewählt und die        Entscheidungen werden in den Teams so dezentral wie möglich getroffen.    </li></ul><p>Derzeit gibt es 400 MitarbeiterInnen und 100 GesellschafterInnen. Nach zwei Jahren Betriebszugehörigkeit kann    ein Mitarbeiter einen Antrag bei der Aufnahmekommission stellen, die aus neun gewählten GesellschafterInnen und dem    Personalbeauftragten besteht.</p><p>Die Gesellschaftsanteile wachsen genau wie die Gewinnbeteiligung mit steigender    Dauer der Betriebszughörigkeit.</p><p>Es gibt also eine enge Verzahnung von Mitarbeit, Eigentum und    Gewinnbeteiligung.</p><p><img class="confluence-embedded-image"                                  src="/download/attachments/1540274/Wagner-Solar-Uebersicht.jpg?version=1&amp;modificationDate=1355582719000"                                  data-image-src="/download/attachments/1540274/Wagner-Solar-Uebersicht.jpg?version=1&amp;modificationDate=1355582719000">&nbsp;</p><p>(Abbildung aus: Wagner &amp; Co – Eine kleine Unternehmensgeschichte, S. 3.)</p><p>Das oberste    Entscheidungsgremium ist die Gesellschafterversammlung, die mindestens zweimal im Jahr tagt und die Grundsatz- und    Richtungsentscheidungen trifft. Dazu gehören auch die Entscheidungen nach dem Gesellschaftsvertrag wie z.B. die    Gewinnverwendung, weitreichende Finanzentscheidungen sowie Änderung von Strukturen. Die Stimmabgabe erfolgt nach    Köpfen und unabhängig von Kapitalanteilen.</p><p>GesellschafterInnen und MitarbeiterInnen wählen alle zwei Jahre    einen zwölfköpfigen Aufsichtsrat. Dieser wird zu 2/3 von den GesellschafterInnen und zu 1/3 von den MitarbeiterInnen    gewählt. Der Aufsichtsrat benennt und kontrolliert die siebenköpfige Geschäftsleitung. Die einzelnen Mitglieder der    Geschäftsleitung werden vom Aufsichtsrat vorgeschlagen und mit einfacher Mehrheit der GesellschafterInnen bestätigt.    Die Geschäftsleitung führt die Geschäfte der Firma Wagner &amp; Co und erarbeitet die Strategien. Drei Mitglieder    treten nach außen als Geschäftsführer auf. <br> Neben der Geschäftsleitung und dem Aufsichtsrat gibt es die    Mitarbeitervertretung, die sich um die Belange der MitarbeiterInnen kümmert und bei Personalfragen hinzugezogen    wird. Sie MitarbertervertreterInnen werden auf einer mind. einmal jährlichen Mitarbeiterversammlung von den    festangestellten MitarbeiterInnen ohne Funktion im Aufsichtsrat oder Geschäftsleitung gewählt.</p><p>Unterhalb der    Geschäftsleitung und den einzelnen GeschäftsleiterInnen zugeordnet gibt es 22 Abteilungen. Die jeweiligen    AbteilungsleiterInnen werden von ihren MitarbeiterInnen gewählt.</p><p>Auf Abteilungs- und Teamebene gibt es eine    Kultur der demokratischen Entschei­dungs­­findung. Allerdings ist das nicht genau festgelegt und der    Abtei­lungsleiter/die Abteilungsleiterin könnte auch autokratisch entscheiden. Die Frage ist dann, ob er dann von    den MitarbeiterInnen wiedergewählt wird.</p><p>Über die Gewinnverteilung wird jährlich von den GesellschafterInnen    entschieden. Nach einer festen Regel werden abhängig von der Umsatzrendite ein 13., 14. und ggf. auch weitere    Monatsgehälter an die MitarbeiterInnen gezahlt. Der Gewinn selbst wird so aufgeteilt, dass alle GesellschafterInnen    mit zehn Jahren oder mehr Gesellschafterzugehörigkeit einen `Vollanteil´ erhalten und wer kürzer dabei ist    entsprechend weniger, z.B. wer seit vier Jahren Gesellschafter ist, erhält 4/10 vom Vollanteil.</p><p><u>Weitere    Ressourcen über Wagner Solar</u><strong><strong><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn16"        title="" class="external-link" rel="nofollow">[16]</a></strong></strong></p><ul>    <li>Homepage: <a href="http://www.wagner-solar.com" class="external-link" rel="nofollow">www.wagner-solar.com</a>    </li>    <li>Kleine Unternehmensgeschichte von Wagner-Solar <a            href="http://www.gemeinwohl-oekonomie.org/wp-content/uploads/2011/08/4-WS-Kleine-Unternehmensgeschichte.pdf"            class="external-link" rel="nofollow">http://www.gemeinwohl-oekonomie.org/wp-content/uploads/2011/08/4-WS-Kleine-Unternehmensgeschichte.pdf</a>    </li>    <li>Auszug Mitarbeiterbefragung 2010 <a            href="http://www.gemeinwohl-oekonomie.org/wp-content/uploads/2011/08/3-WS-Auszug-Mitarbeiterbefragung-2010.pdf"            class="external-link" rel="nofollow">http://www.gemeinwohl-oekonomie.org/wp-content/uploads/2011/08/3-WS-Auszug-Mitarbeiterbefragung-2010.pdf</a>    </li>    <li>Kleine Geschichte von Unternehmensstrukturen <a            href="http://www.gemeinwohl-oekonomie.org/wp-content/uploads/2011/08/2-WS-KleineGeschichtevonUnternehmensstrukturen.pdf"            class="external-link" rel="nofollow">http://www.gemeinwohl-oekonomie.org/wp-content/uploads/2011/08/2-WS-KleineGeschichtevonUnternehmensstrukturen.pdf</a>    </li></ul>';

indicators[6].definition.content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">MitarbeiterInnenbeteiligung bedeutet, dass die Mit-ArbeiterInnen mit-entscheiden können und nicht nur informiert oder gehört werden, sondern auch eine Möglichkeit zur Einflussnahme besitzen. Qualitativ zu unterscheiden sind unterschiedliche Formen der demokratischen Mitbestimmung. Diese reichen von Mehrheits- bis hin zu konsensualen Entscheidungen.</span></p><p><span style="font-size: 10.0pt;line-height: 13.0pt;">Leider ist das Feld der Wirtschaftsdemokratie kaum bekannt und wenig erforscht. Oftmals wird Demokratie mit Basisdemokratie gleichgesetzt, bei der alle MitarbeiterInnen bei allen Entscheidungen mitwirken und die Organisation so lähmen. Es gibt aber Mittel und Wege die MitarbeiterInnen demokratisch mit einzubinden und gleichzeitig produktiv den Unternehmenszweck zu erfüllen. Beispiele dafür sind in den „Good Practises“ zu finden. .</span></p><p><span style="font-size: 10.0pt;line-height: 13.0pt;">Wir glauben, dass es mehrfach positive Effekte einer starken Mitarbeiter­Innenbeteiligung gibt</span><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn4"        style="font-size: 10.0pt;line-height: 13.0pt;" title="" class="external-link" rel="nofollow">[4]</a><span        style="font-size: 10.0pt;line-height: 13.0pt;">:</span></p><ul>    <li>Empowerment und dadurch höhere Motivation der MitarbeiterInnen</li>    <li>Mehr Identifikation mit dem Unternehmen und folglich geringere MitarbeiterInnen-Fluktuation</li>    <li>Menschliches Korrektiv zu dem Shareholder-Value Ansatz</li>    <li>Wandel der Unternehmenskultur in Richtung partnerschaftliche Aufgabenteilung</li>    <li>Kreativere Lösungen, weil die Sichtweise aller Beteiligten gehört wird</li>    <li>Engagiertere Mitarbeiter und bessere Ergebnisse.</li></ul><p>Wolfgang Georg Weber hat im Forschungsprojekt ODEM mit anderen Kollegen mehrere demokratische Organisationen    untersucht und ist zu folgenden Ergebnissen gekommen:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn5"            title="" class="external-link" rel="nofollow">[5]</a></p><p>„Je demokratischer die Organisationsstrukturen    in einem Unternehmen sind,</p><ul>    <li>umso bereiter sind die Mitarbeiter/innen, hilfsbereit, solidarisch und gesellschaftlich verantwortlich zu        handeln,    </li>    <li>umso stärker tendiert das Ethikbewusstsein der Mitarbeiter/innen in Richtung humanistischer        Wertorientierungen,    </li>    <li>umso stärker ist deren Bereitschaft zu demokratischem und gesellschaftlichem Engagement,</li>    <li>umso stärker ist die gefühlsmäßige Bindung der Mitarbeiter/innen an den Betrieb.“</li></ul><p>Dabei kann die innerbetriebliche Demokratie strukturell oder bei einzelnen Entscheidungen verwirklicht werden.    Von Tannenbaum/ Schmidt<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn6"            title="" class="external-link" rel="nofollow">[6]</a> wurde ein Führungs-Kontinuum entwickelt, das    verschiedene Abstufungen von autoritär bis partizipativ unterscheidet:</p><p><img class="confluence-embedded-image"                                                                                      src="/"                                                                                      data-image-src="/"></p><p>In dieser Übersicht liegt die Entscheidungsmacht bei der Führungskraft. Er/Sie entscheidet, welche Form der    Beteiligung der MitarbeiterInnen er zulässt oder ermöglicht.</p><p>Wolfgang G. Weber sowie das internationale    Forschungsnetzwerk OPEN<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn7"            title="" class="external-link" rel="nofollow">[7]</a> zitieren folgende Abstufungen der    MitarbeiterInnenbeteiligung, die eine gute Groborientierung geben:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn8"            title="" class="external-link" rel="nofollow">[8]</a></p><ol>    <li>Keine Partizipation</li>    <li>Information</li>    <li>Anhörung ( = Konsultation)</li>    <li>Mitwirkung</li>    <li>Mitbestimmung, Mitentscheidung</li>    <li>Selbstbestimmung<strong style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</strong></li></ol><p>Bereiche der Mitbestimmung</p><ol>    <li>Operationale Entscheidungen(Tagesgeschäft, Einzelfälle innerhalb der Vorgaben)</li>    <li>Taktische Entscheidungen (z.B. Einstellung/ Entlassungen)</li>    <li>Strategische Entscheidungen (z.B. Budgets, gravierende Umstrukturierungen)</li></ol><p>Lewin, Lippit und White untersuchte bei jungen Schülern drei Führungsstile: „autoritär“, „laissez-faire“ und    „demokratisch“. Die Ergebnisse zeigten, dass die Ar­beits­leistungen bei der autoritär und der demokratisch    geführten Gruppe ungefähr gleich hoch waren, während sie in der Laissez-Faire-Gruppe absanken.</p><p>Allerdings gab    es unterschiedliche Verhaltensweisen bei den beiden Gruppen:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn9"            title="" class="external-link" rel="nofollow">[9]</a></p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Autoritär geführte Gruppe</strong></p></td>            <td class="confluenceTd"><p><strong>Demokratisch geführte Gruppe</strong></p></td>        </tr>        <tr>            <td class="confluenceTd">                <ul>                    <li>Hohe Spannung, Ausdruck von Feindselig­keiten</li>                    <li>Unterwürfiges, gehorsames Gruppenverhal­ten</li>                    <li>Hohe Arbeitsintensität</li>                    <li>Arbeitsunterbrechung bei Abwesenheit des Führers</li>                </ul>            </td>            <td class="confluenceTd">                <ul>                    <li><span style="font-size: 10.0pt;line-height: 13.0pt;">Entspannte, freundschaftliche Arbeitsatmos­phäre</span>                    </li>                    <li>Hohe Kohäsion, geringe Austritte</li>                    <li>Höheres Interesse an der Aufgabe</li>                    <li>Hohe Originalität der Arbeitsergebnisse</li>                    <li>Weiterarbeit auch bei Abwesenheit des Führers</li>                </ul>            </td>        </tr>        </tbody>    </table></div><p>Marshall Rosenberg, Begründer der Gewaltfreien Kommunikation, stellt gerne folgende zwei Fragen:</p><p>1) Was    möchte ich, dass mein Gegenüber tut?</p><p>2) Aus welcher Motiviation möchte ich, dass mein Gegenüber das tut?</p><p>Ein autoritärer Führungsstil basiert meistens auf Angst, Bestrafungen und Kontrolle und motiviert extrinsisch, ein    demokratischer Führungsstil basiert auf Kooperation, Inklusion, Gemeinschaft und motiviert intrinsisch.</p>';

indicators[6].details.content = '<p>*1:<u> </u>Kritische Daten sind die Protokolle der Führungsgremien, Gehälter, Interne Kostenrechnung, Entscheidungen    über Einstellungen/ Entlassungen</p><p>*2: Testphase = Zeit, in der demokratische Entscheidungsformen „getestet“    werden, d.h. die Führungskraft verzichtet in dieser Zeit auf ihre alleine Entscheidungsmacht zugunsten einer    gemeinsamen Entscheidungsform</p><p>&nbsp;</p><p><u>Weitere Einzel-Maßnahmen (demokratische Mitbestimmung)</u></p><ul>    <li>Team wählt/ entscheidet über Einstellung der eigenen Führungskraft</li>    <li>Anonyme Führungskräfte-Beurteilung, alle Ergebnisse sind online lesbar (Semco)</li>    <li>Großgruppenmeeting für Strategie-Entscheidungen, die dann auch in der Großgruppe entschieden werden (in Richtung        Basisdemokratie).    </li>    <li>Einzelne Methoden für Meeting/ Treffen, die auf hohe Mitarbeit/ Gleichwertigkeit Wert legen wie z.B. World-Cafe,        Openspace, Dynamic facilitation.    </li>    <li>Hohe Selbstorganisation am Arbeitsplatz (vgl. C1 Arbeitsplatzqualität)</li>    <li>Systemisches Konsensieren<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn2"            title="" class="external-link" rel="nofollow">[2]</a> oder andere Formen der Gruppenentscheidung bei        einzelnen Themen/ Fragen    </li>    <li>Präventive Konfliktberatung/ -klärung mit konsensualen Lösungen</li></ul><p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Abgrenzung zu anderen Indikatoren</strong></p><p>In der Matrix    4.0. gab es noch Überschneidungen von C1 und C5, die jetzt minimiert wurden.<br><span            style="font-size: 10.0pt;line-height: 13.0pt;">Die Mitbestimmung/Transparenz den Kunden gegenüber findet sich in D1 wieder, gegenüber Mit-Unternehmen in D2 und D5, gegenüber dem gesellschaftlichen Umfeld in E5.</span><span            style="color: rgb(0,0,0);font-size: 1.8em;font-weight: bold;line-height: normal;">&nbsp;<br></span><strong            style="font-size: 10.0pt;line-height: 13.0pt;">Unternehmensspezifische Besonderheiten</strong><span            style="color: rgb(0,0,0);font-size: 1.8em;font-weight: bold;line-height: normal;">&nbsp;</span></p><p        align="left">Je kleiner das Unternehmen, desto leichter lassen sich innerbetriebliche Transparenz und Demokratie    leben.</p><p align="left">Innerbetriebliche Demokratie ist wesentlich mehr als die Mitbestimmung durch den    Betriebsrat und umfasst vor allem die Entscheidungen im eigenen Team und zumindest dort die Grundsatz- und    Rahmenentscheidungen, das heißt grundsätzliche Unternehmensentscheidungen.</p><p align="left"><strong>Genossenschaften</strong></p><p align="left">Bei den meisten Genossenschaften sind die Kunden auch Genossen. Damit kann das Verhältnis Kunden/    Mitarbeiter bei den Genossenschaftsmitgliedern sehr unterschiedlich sein. Hier wird gewertet, wie viel % der    stimmberechtigten Anteile die Mitarbeiter haben. Gemäß dieser Prozentzahl erfolgt die Bewertung in der Tabelle, z.B.    35% der stimmberechtigen Genossen sind Mitarbeiter = fortgeschritten.</p><p align="left">Genossenschaften sind    Organisationsformen, die von der Eigentümerstruktur sehr gemeinwohl-orientiert sind. Der Anteil der stimmberechtigen    Kunden in % kann bei D1 Kundenmitbestimmung positiv gewertet werden.</p><p align="left"><strong>Fehlender    Betriebsrat</strong></p><p>Wenn es keinen Betriebsrat gibt, sollte man immer skeptisch sein und hinterfragen, ob und    wie eine Betriebsratsgründung aktiv gefördert wird. Wird sie nicht aktiv gefördert oder gab es schon Bestrebungen im    Unternehmen, die nicht unterstützt wurden, kann der erste Schritt in Richtung Verhinderung erfolgt sein. Semco z.B.    hat in seiner Geschichte gewerkschaftliche Betätigung begrüßt, aktiv mit einem Betriebsrat zusammengearbeitet und    diese Form der Zusammenarbeit als einen wichti­gen Firmengrundsatz etabliert.</p><p>Wenn es keinen Betriebsrat gibt,    sollten als Ausgangslage die möglichen Mitbestimmungsrechte herangezogen werden, die existieren würden, wenn es    einen Betriebsrat gäbe und jeweils überprüft werden, inwieweit diese in der jetzigen Form vorliegen oder    gewährleistet sind.&nbsp;</p><p>Prinzipiell kann ein fehlender Betriebsrat auch mit einem Abzug von 10-20% bewertet    werden</p><p>Sind die Mitwirkungsrechte der Mitarbeiter geringer als die im jeweiligen Gesetz zugesicherten Rechte,    kann der Aspekt „Mitbestimmung bei Entscheidungen“ nicht mehr als „Erste Schritte“ sein. Sollten wesentliche Rechte    nicht vorliegen, ist kritisch zu prüfen, ob eine Verhinderung des Betriebsrates vorliegt.</p><p>Vgl.    Mitbestimmungsrechte des Betriebsrates in Österreich<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn3"            title="" class="external-link" rel="nofollow">[3]</a>:</p><p><img class="confluence-embedded-image"                                                                              src="/"                                                                              data-image-src="/"></p><p>Natürlich kann es länderspezifisch unterschiedliche Regelungen für den Betriebsrat geben. Prinzipiell wird der    gesetzliche Standard mit 0 Punkten bewertet.</p><p>In der EU sind entsprechende EU-Rechte als gesetzlicher Standard    für alle anzusehen.</p><p>Übersicht für Deutschland:&nbsp;</p><p><a        href="http://www.precht.wiso.uni-erlangen.de/download/ar/uebung/ar2_02_Beteiligungsrechte_BR.pdf"        class="external-link" rel="nofollow">http://www.precht.wiso.uni-erlangen.de/download/ar/uebung/ar2_02_Beteiligungsrechte_BR.pdf</a></p><p>Allgemein Wikipedia-Artikel zur Betriebsverfassung:</p><p><a        href="http://de.wikipedia.org/wiki/Betriebsverfassung" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Betriebsverfassung</a></p>';

indicators[6].footnotes.content = '<div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref1"        title="" class="external-link" rel="nofollow">[1]</a> Konsent = Es gibt keinen schwerwiegenden Einwand gegen    einen Vorschlag im Hinblick auf das gemeinsame Ziel, Konsens = Zustimmung</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref2"        title="" class="external-link" rel="nofollow">[2]</a> Vgl. <a href="http://www.sk-prinzip.eu/"                                                                      class="external-link" rel="nofollow">http://www.sk-prinzip.eu/</a>    und <a href="http://www.konsensieren.eu/" class="external-link" rel="nofollow">http://www.konsensieren.eu/</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref3"        title="" class="external-link" rel="nofollow">[3]</a> <a        href="http://netzwerke.oegb.at/fladnitz/data/upload/ppt_Mitbestimmungsrechte_Betriebsrats.pdf"        class="external-link" rel="nofollow">http://netzwerke.oegb.at/fladnitz/data/upload/ppt_Mitbestimmungsrechte_Betriebsrats.pdf</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref4"        title="" class="external-link" rel="nofollow">[4]</a>&nbsp;Vgl. Wegge, Jürgen [u.a.]: Work Motivation, 2010,    S.162ff.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref5"        title="" class="external-link" rel="nofollow">[5]</a> Weber, Wolfgang G. [u.a.]: Handeln, 2007, S.34/5</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref6"        title="" class="external-link" rel="nofollow">[6]</a> R. Tannenbaum, W.H. Schmidt (1958):&nbsp;<em>How to choose    a leadership pattern</em>. In: "Harvard Business Review". 36/1958, pg. 95-102</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref7"        title="" class="external-link" rel="nofollow">[7]</a> Organizational Participation in Europe Network (OPEN)</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref8"        title="" class="external-link" rel="nofollow">[8]</a> Vgl. Weber, Wolfgang: Demokratie, 1994, S.272; Wegge,    Jürgen: Motivation, 2010, S. 159.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref9"        title="" class="external-link" rel="nofollow">[9]</a> Vgl. Manfred Becker: Personalentwicklung, S. 226, Tabelle    wörtlich übernommen.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref10"        title="" class="external-link" rel="nofollow">[10]</a> Vgl. Semler, Ricardo: Maverick, 1993, Kap. 17, S.128-129.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref11"        title="" class="external-link" rel="nofollow">[11]</a> Die Kreisstruktur überlagert die lineare Struktur. Auf    der Kreisebene sind alle Mitarbeiter gleichwertig in der Beschlussfassung, auf Augenhöhe. Hier werden die Grundsatz-    und Rahmenentscheidungen getroffen. Daneben existiert weiterhin die lineare Struktur für das Tagesgeschäft oder die    operationalen Entscheidungen. Hier kann es weiterhin Vorgesetzte geben, die ohne Absprache innerhalb von bestimmten    Vorgaben entscheiden können.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref12"        title="" class="external-link" rel="nofollow">[12]</a> Vgl. die Unterschiede zwischen Soziokratie und Holacracy    <a href="http://soziokratie.org/wp-content/uploads/2012/11/Vergleich-Soziokratie-Holakratie1.1.pdf"       class="external-link" rel="nofollow">http://soziokratie.org/wp-content/uploads/2012/11/Vergleich-Soziokratie-Holakratie1.1.pdf</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref13"        title="" class="external-link" rel="nofollow">[13]</a> Die Quellen über Semco beziehen sich auf die beiden    Bücher von Ricardo Semler, wobei das letzte 2003 erschienen ist. Es ist stark zu vermuten, dass Semco auch in den    letzten Krisenzeiten Schwierigkeiten hatten. Inwieweit diese durch das demokratische Miteinander abgefedert werden    konnten oder diese Elemente in der Krise heruntergefahren wurden, dazu fehlen mir im Moment die Quellen.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref14"        title="" class="external-link" rel="nofollow">[14]</a> Vgl. Semler, Ricardo: Maverick, 1992, Kap.22, S.160-63    und Semler, Ricardo: 7day, 2003, S. 212/3.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref15"        title="" class="external-link" rel="nofollow">[15]</a> Vgl. Semler, Ricardo: 7day, 2003, S.223.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftnref16"        title="" class="external-link" rel="nofollow">[16]</a> Ältere DVD über Wagner Solar mit dem Titel:    Organisationale Demokratie im Unternehmen. Wie Mitbestimmung zu wirtschaftlichen Erfolg beitragen kann (Bm:bwk) kann    bei Wolfgang Weber kostenlos bestellt werden: <a href="mailto:wolfgang.weber@uibk.ac.at" class="external-link"                                                     rel="nofollow">wolfgang.weber@uibk.ac.at</a>&nbsp;</p></div>';

indicators[6].goals.content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">Rechtlich gesehen leben wir in einer Demokratie, tatsächlich sind die Mitwirkungs­möglichkeiten der BürgerInnen jenseits der Wahlen alle 4-5 Jahre sehr begrenzt oder kaum bekannt.<br></span><span        style="font-size: 10.0pt;line-height: 13.0pt;">In der Wirtschaft kommen die demokratischen Prinzipien noch weniger zum Tragen. Die Führungskräfte entscheiden, während die MitarbeiterInnen nur sehr eingeschränkte Rechte zur betrieblichen Mitsprache und Mitbestimmung haben. Diese besteht im Kern im Recht der Arbeit­nehmer­Innen sich gewerkschaftlich zu organisieren und einen Betriebsrat zu wählen, der die Interessen der Beschäftigten vor dem Arbeitgeber vertritt (repräsentative Mitbestimmung).<br></span><span        style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></p><p><span        style="font-size: 10.0pt;line-height: 13.0pt;">Faktisch gleicht das System Wirtschaft einer Monarchie, die je nach Führungskraft unterschied­liche Formen der Einflussnahme zulässt.<br></span><span        style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></p><p><span        style="font-size: 10.0pt;line-height: 13.0pt;">Unser Ideal ist eine möglichst hohe Form der MitarbeiterInnen-Mitbestimmung bei allen wesentlichen Entscheidungen (zumindest im eigenen Arbeitsbereich) und eine Legitimation der Führungskräfte durch eine Wahl von den MitarbeiterInnen.<br></span><span        style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></p><p><span        style="font-size: 10.0pt;line-height: 13.0pt;">Eine wesentliche Voraussetzung für jede Form der Demokratie ist eine um­fas­sen­de Transparenz innerhalb des Unternehmens, damit die MitarbeiterInnen fundierte Entscheidungen für das Unternehmen und die Erreichung des gemeinsamen Zieles treffen können.<br></span><span        style="font-size: 10.0pt;line-height: 13.0pt;">Innerbetriebliche Demokratie heißt nicht unbedingt Basisdemokratie. Es muss eine Form gefunden werden, die einerseits effektives und effizientes Arbeitern ermöglicht und andererseits eine Mit-Entscheidung zumindest auf der jeweiligen Ebene/ im eigenen Team ermöglicht. Dafür gibt es genügend Beispiele – siehe Good practises.</span></p><p><span style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span><span        style="font-size: 10.0pt;line-height: 13.0pt;">Studien belegen, dass in wirklich demokratisch organisierten Unternehmen die MitarbeiterInnen zufriedener, engagierter, innovativer und pro­duktiver als in traditionellen Organisationsstrukturen sind.&nbsp;</span></p>';

indicators[6].implementationHelp.content = '<p>Es gibt das Modell der Soziokratie, das einen nachvollziehbaren Ablauf vom Erstgespräch über die Installierung eines    Pilotkreises bis hin zur völligen Transformation der Organisation hat.</p><p>Ansonsten bräuchte es einen umfassenden    Prozess der Klärung, welche demokratischen Elemente wo und wie eingeführt werden können. Am besten ist dieser    Prozess schon demokra­tisch organisiert.</p><p>Wichtig ist bei der Einführung, dass EigentümerIn/ oberste    Führungsspitze voll dahinter steht und den Prozess über einen Zeitraum von fünf bis zehn Jahren begleitet/    unterstützt.</p><p>Zuerst bildet sich eine Steuerungsgruppe aus externen BeraterInnen/ ExpertInnen, Mitgliedern des    Vorstandes sowie weiteren Schlüssel- Mitgliedern der Organisation, die den Prozess der Implementierung    begleitet:</p><ul>    <li>Welche Form der demokratischen Mitbestimmung passt zu uns?</li>    <li>Wie können wir den Prozess selbst demokratisch gestalten?</li>    <li>Was könnte ein Prototyp sein, wo könnten wir innerhalb des Betriebes experimentieren und dann auswerten, ob es        erfolgreich war?    </li>    <li>Was macht den Erfolg demokratischer Mitbestimmung für uns aus – auch jenseits der Gewinn-und-Verlust- Rechnung?        Wie können wir das messen?    </li>    <li>Wie kann der Einstieg gut kommuniziert werden?</li>    <li>Welche Unterstützung brauchen wir von wem innerhalb des Unternehmens?</li></ul><p>Prinzipiell geht es entweder radikal mit einem Schritt (a la Semco) oder besser nach und nach über einzelne    Kreise/ Teilbereiche des Unternehmens (a la Soziokratie).</p>';

indicators[6].impulsQuestions.content = '<ul><li>Wieviel % vor allem der kritischen Daten (Vorstandsprotokolle, Gehälter, interne Kostenrechnung, Entscheidungen über Entlassungen/Einstellungen) sind unternehmensintern von allen Mitarbeitern einsehbar?</li><li>Welche EDV-Unterstützung gibt es betriebsintern zum Thema Transparenz? Wer hat online welchen Zugriff auf welche Informationen?</li><li>Wie werden Führungskräfte legitimiert? Wer entscheidet über die Einstellung/ Beförderung? Welchen Anteil haben die neuen Mitarbeiter an der Entscheidung? Wie transparent ist der Entscheidungsprozess?</li><li>Wie läuft der Prozess bei der Einstellung neuer Mitarbeiter ab? Wie hoch ist die Mitbestimmung des jeweiligen Teams dabei?</li><li>Bei welchen Entscheidungen werden die MitarbeiterInnen gehört, bei welchen können sie bei der Entscheidungsfindung mitwirken, bei welchen mitentscheiden und welche Entscheidungen werden ausschließlich von den MitarbeiterInnen getroffen?</li><li>Wie werden gemeinsame Entscheidungen getroffen? Welchen Entscheidungs-prozess und welche Entscheidungsform gibt es (Mehrheitsbeschluss, Systemisches Konsensieren, Konsent, Konsens<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/Handbuch/Handbuch%20Word-Dateien/C5%20Innerbetriebliche%20Demokratie%20(4.1.0%20-%20mit-PDF-Update).docx#_ftn1" title="" class="external-link" rel="nofollow">[1]</a>)?</li><li>Welchen Anteil der Mitbestimmung haben die Mitarbeiter bei der Gewinnverteilung?</li><li>Wie viel Prozent des Eigentums liegt in MitarbeiterInnenhand? Welche mit-arbeiternahe Rechtsform gibt es (z.B. MitarbeiterInnenstiftung, Genossenschaft)? Unter welchen Bedingungen kann jeder Mitarbeiter Gesellschafter werden? Welche Bemühungen werden unternommen, aus Mitarbeitern EigentümerInnen zu machen?</li></ul>';

indicators[6].moreinfo.content = '<ul><li>Bontrup, Heinz: Wirtschaftsdemokratie statt shareholder value <a href="http://www.linksnet.de/de/artikel/19818"                                                                     class="external-link" rel="nofollow">http://www.linksnet.de/de/artikel/19818</a></li><li>Demokratie in Organisationen: Wiki-Seite der Soziologischen Fakultät der Uni München <a        href="http://wiki.soziologie.uni-muenchen.de/organisation/dokuwiki/doku.php" class="external-link"        rel="nofollow">http://wiki.soziologie.uni-muenchen.de/organisation/dokuwiki/doku.php</a></li><li>    <a href="mailto:R%C3%BCther,%20Christian:%20Soziokratie.%20Ein%20Organisationsmodell.%20Grundlagen,%20Methoden%20und%20Praxis,%202.korrigierte%20Auflage,%202010%20%E2%80%93%20als%20PDF%20kostenlos%20erh%C3%A4ltlich%20bei%20chrisruether@gmail.com"       class="external-link" rel="nofollow">Fenton, Traci: The democratic Company. Four Organizations Transforming our        Workplace and our World, 2002</a> – (kostenloses PDF)</li><li>Naphtali, Fritz: Wirtschaftsdemokratie: ihr Wesen, Weg und Ziel (1928), Frankfurt/M 1966</li><li>Rüther, Christian: Soziokratie. Ein Organisationsmodell. Grundlagen, Methoden und Praxis, 2. korrigierte Auflage,    2010 – <a href="http://soziokratie.org/wp-content/uploads/2011/06/soziokratie-skript2.7.pdf" class="external-link"              rel="nofollow">http://soziokratie.org/wp-content/uploads/2011/06/soziokratie-skript2.7.pdf</a></li><li>Semler, Ricardo: [7 day, 2003] The Seven-Day Weekend. A better way towork in thr 21st century, 2003</li><li>Semler, Ricardo: [Maverick, 1993] Maverick! The success story behind the world´s most unusuals workplace, 1993</li><li>Tannenbaum/Schmidt: How to choose a leadership pattern – Review 1973</li><li><a href="http://www.expert2business.com/itson/Tannenbaum.pdf" class="external-link" rel="nofollow">http://www.expert2business.com/itson/Tannenbaum.pdf</a></li><li>Ungericht, Bernhard-Mark: [Wirtschaft, 2011] Wirtschaft und Demokratie – eine Illusion. Vorlesungsskript, &nbsp;<a        href="http://christianruether.com/wp-content/uploads/2012/02/Bernhard-Mark-Ungericht-WirtschaftundDemokratie.pdf"        class="external-link" rel="nofollow">http://christianruether.com/wp-content/uploads/2012/02/Bernhard-Mark-Ungericht-WirtschaftundDemokratie.pdf</a></li><li>Weber, Wolfgang G.: [Demokratie, 1999] Organisationale Demokratie. Anregungen für innovative Arbeitsformen jenseits    bloßer Partizipation, in Zeitschrift für Arbeitswissenschaft 53 (25 NF) 1999/4, <a            href="http://www.uibk.ac.at/psychologie/mitarbeiter/weber/docs/organisationale_demokratie.pdf"            class="external-link" rel="nofollow">http://www.uibk.ac.at/psychologie/mitarbeiter/weber/docs/organisationale_demokratie.pdf</a></li><li><span style="font-size: 10.0pt;line-height: 13.0pt;">Wolfgang Weber G.: Wirtschaftsdemokratie von Unten (Powerpoint-Präsentation) </span><a        href="http://de.slideshare.net/AUGE/wirtschaftsdemokratie-von-unten"        style="font-size: 10.0pt;line-height: 13.0pt;" class="external-link" rel="nofollow">http://de.slideshare.net/AUGE/wirtschaftsdemokratie-von-unten</a></li><li><span style="font-size: 10.0pt;line-height: 13.0pt;">Wegge, J (u.a.): [Motivation, 2010] Promoting Work Motivation in Organizations: Should Employee Involvement in Organizational Leadership Become a New Tool in the Organizational Psychologist&apos;s Kit? Journal of Personnel Psychology, 9 (4), 154-171.</span></li><ul>Redakteur: Christian Rüther <a href="mailto:chrisruether@gmail.com" class="external-link" rel="nofollow">chrisruether@gmail.com</a>,&nbsp; Experten: Wolfgang Weber, Bernhard Mark-Ungericht<span style="font-size: 1.8em;"></span>';

indicators[7].bestPractices.content = '<h2 id="D1EthischeKundenbeziehung-Matrix41-Kundenorientierung">Kundenorientierung</h2><p>Neben Zappos ist z.B. auch    Soutwest Airlines ein Betrieb, der sich durch eine sehr positive Kundenorientierung auszeichnet. Beide Beispiele    stammen aus dem US-amerikanischen Raum und sind durchaus kritisch zu bewerten. Die Flugindustrie ist ein großer CO2    Produzent und ein Online-Schuh-Versandhandel ist nicht mehr als ein konventioneller Handelsbetrieb mit tw. negativen    Randerscheinungen<a href="#_ftn12" title="" rel="nofollow">[12]</a></p><p>Wir suchen noch positive Beispiele aus dem    deutschsprachigen/ europäischen Raum und sachdienliche Hinweise sind sehr willommen <img            class="emoticon emoticon-smile" src="/s/de_DE/3129/6/_/images/icons/emoticons/smile.png"            data-emoticon-name="smile" alt="(Lächeln)">.</p><p>&nbsp;</p><p><strong>Zappos</strong></p><p>Zappos ist ein    Schuhversand aus den USA, der im letzten Jahr von Amazon aufgekauft wurde, aber rechtlich eine hohe    Selbstständigkeit beibehält. Zappos legt den Hauptschwerpunkt auf exzellenten Kundenservice und hat folgende    Maßnahmen/Leitsätze installiert:</p><p>1)&nbsp;Mache Kundenservice zu einer Hauptpriorität für das gesamte    Unternehmen, nicht nur für eine Abteilung. Diese Einstellung zum Kundenservice muss von oben kommen.</p><p>2)&nbsp;Mache    „Wow“ zu einem Wort im täglichen Sprachgebrauch in deinem Unternehmen.</p><p>3)&nbsp;Ermächtige/ermutige deine    Kundenservice-RepräsentantInnen und vertraue ihnen. Vertrau, dass sie großartigen Service bieten werden, weil sie es    auch wirklich tun.</p><p>4)&nbsp;Es ist auch in Ordnung, Kunden zu verlieren, die nie zufrieden sind oder deine    Mitarbeiter missbrauchen.</p><p>5)&nbsp;Überwache die Anrufzeiten nicht, zwinge deine Mitarbeiter nicht, zusätzlich    zu verkaufen, und benutze keine Skripten.</p><p>6)&nbsp;Verstecke deine kostenlose Hotline nicht. Das sendet eine    Botschaft – nicht nur an deine Kunden, sondern auch an deine Mitarbeiter.</p><p>7)&nbsp;Betrachte jeden Anruf als    Investment in Kundenzufriedenheit, nicht als Kostenfaktor, den man zu minimieren sucht.</p><p>8.)&nbsp;Lass das    gesamte Unternehmen guten Service feiern. Erzähle allen im Unternehmen Geschichten von Wow-Erfahrungen.</p><p>9)&nbsp;Stelle    die Mitarbeiter ein, die sich jetzt schon leidenschaftlich für guten Kundenservice engagieren</p><p>10)&nbsp;Biete    allen großartiges Service: Kunden, Mitarbeitern und Zulieferern.<a href="#_ftn13" title="" rel="nofollow">[13]</a>&nbsp;</p><p><em>&nbsp;</em></p><p><em>Weiterführende Ressourcen</em></p><p><a href="http://www.zappos.com"                                                                         class="external-link" rel="nofollow">www.zappos.com</a></p><p>Tony Hsieh: Delivering happiness, 2010</p><p>Internetplattform zu dem Buch: <a        href="http://www.deliveringhappiness.com/" class="external-link" rel="nofollow">www.deliveringhappiness.com/</a></p><p>Artikel zu Zappos und weiterführende Links: <a        href="http://christianruether.com/2010/12/%20zappos-fun-and-family-2/" class="external-link" rel="nofollow">http://christianruether.com/2010/12/    zappos-fun-and-family-2/</a></p><p>&nbsp;</p><p><strong>Southwest Airlines (SWA)</strong></p><p>Ich zitiere hier    einfach die Mission von SWA:</p><p align="left"><u>„Die Mission von Southwest Airlines</u></p><p align="left">Die    Mission von Southwest Airlines ist die Hingabe/Verpflichtung zur höchster Qualtität beim Kundenservice, der mit    Wärme, Freundlichkeit, individuellem Stolz und im Spirit/Geist des Unternehmens gelebt wird.“</p><p align="left">„An    unsere MitarbeiterInnen</p><p align="left">Wir fühlen uns verpflichtet unseren Mitarbeitern eine stabile    Arbeitsumgebung sicherzustellen mit gleicher Möglichkeit, zu lernen und sich persönlich weiterzuentwickeln.    Kreativität und Innovation werden sehr erwünscht, um die Effektivität von Southwest Airlines zu verbessern. Über    allem steht: MitarbeiterInnen erhalten die gleiche Unterstützung, Fürsorge und Respekt innerhalb der Organisation,    die von ihnen gegenüber jedem Kunden von Southwest Airlines erwartet wird.“<a href="#_ftn14" title=""                                                                                  rel="nofollow">[14]</a></p><p>In    einigen Publikationen<a href="#_ftn15" title="" rel="nofollow">[15]</a> wird immer wieder auf den gelebten    Kundenservice von SWA hingewiesen, sodass hier offensichtlich Worte und Taten übereinstimmen. Genauer ausgeführt    wird dieser Kundenservice in dem Buch <em>Nuts!</em> und einen kleinen Einblick kann man in vielen Youtube-Videos    bekommen, wie z.B. dem Flugbegleiter-Rap.</p><p>SWA würde bei einer Gemeinwohl-Bilanz für den Wert <em>Ökologie</em>    sicherlich wenige Punkte bekommen, dafür im Vergleich zu anderen Fluglinien bei verschiedenen anderen Werten besser    abschneiden. Deshalb ist das Beispiel vielleicht nicht optimal, aber kaum ein Unternehmen schafft es derzeit, in    allen Wertspalten hohe Ausprägungen zu erhalten.</p><p>&nbsp;</p><p><em>Weiterführende Ressourcen</em></p><p>    Freiberg, Kevin &amp; Jackie: Nuts! Southwest Airlines Crazy recipe for Business and personal success, Bard Press,    1996</p><p>Kleine Fallstudie über SWA: <a href="http://www.echeat.com/essay.php?t=27535" class="external-link"                                              rel="nofollow">http://www.echeat.com/essay.php?t=27535</a></p><p>Bücher    über SWA: <a href="http://www.southwest.com/about_swa/press/bibliography.pdf" class="external-link" rel="nofollow">http://www.southwest.com/about_swa/press/bibliography.pdf</a></p><p>Flugbegleiter-Rap bei SWA: <a href="http://www.youtube.com/watch?v=tnOxvbGOTbM" class="external-link"                                     rel="nofollow">http://www.youtube.com/watch?v=tnOxvbGOTbM</a></p><h2        id="D1EthischeKundenbeziehung-Matrix41-KundInnenmitbestimmung">KundInnenmitbestimmung</h2><p>Neben SMUD sind uns    jetzt keine so umfassende Mitbestimmungmöglichkeiten bekannt mit Ausnahme der CSA/ Solidarischen Landwirtschaft,    auch hier bitten wir um Inspirationen und good practices.</p><p>Im deutschsprachigen Raum gibt es schon einzelne    Erfahrungen mit KundInnenbeiräten, die allerdings alle nur eingeschränkte Transparenz und Auswirkungen auf die    Entscheidungen im Unternehmen hatten. Natürlich ist das Genossenschaftswesen und die Mitbestimmung der Kunden als    Genossen hier positiv zu bewerten.</p><p><strong>&nbsp;</strong></p><p><strong>SMUD</strong></p><p>SMUD (sacramento    municipal utility district, <a href="http://www.smud.org" class="external-link" rel="nofollow">www.smud.org</a>) ist    ein lokaler Energieanbieter in Sacramento/Kalifornien mit ca. 600.000 Kunden und 2.000 Mitarbeitern, der sich mehr    und mehr auf erneuerbare Energien konzentriert.</p><p>SMUD bezieht die Kunden, die in der Region leben, bei    wesentlichen Entscheidungen mit ein. Sie können den Vorstand wählen und es gibt vielfältige Mitsprachemöglichkeiten    über Workshops und Feedback. Die Sitzungen des Vorstandes sind öffentlich und finden alle zwei Wochen statt.<a            href="#_ftn16" title="" rel="nofollow">[16]</a></p><p>„Als eine kundenorientierte, nicht nur auf Profit    ausgerichtete Institution versucht SMUD, seine Geschäftstätigkeit als offenen öffentlichen Prozess zu gestalten, und    ermutigt alle Kunden, Workshops zu besuchen oder schriftliches Feedback zu geben.“<a href="#_ftn17" title=""                                                                                         rel="nofollow">[17]</a></p><p>    Die Kundenzufriedenheit ist dadurch sehr hoch: „In jedem der letzten acht Jahre ist SMUD die Nummer eins bei der    Kundenzufriedenheit im Staat Kalifornien auf Basis des Ratings von J.D. Power and Associates. Und SMUD hat 2010    US-weit den zweiten Rang bei der Kundenzufriedenheit im kommerziellen Sektor belegt.“<a href="#_ftn18" title=""                                                                                            rel="nofollow">[18]</a></p><p><strong>&nbsp;</strong></p><p><strong>Community supported Agriculture (CSA) – Solidarische Landwirtschaft</strong></p><p>„Als&nbsp;Solidarische Landwirtschaft&nbsp;[…] wird der Zusammenschluss einer Gruppe von&nbsp;Verbrauchern&nbsp;mit    einem Partner-Landwirt bezeichnet. <br> Die Verbraucher geben eine Abnahmegarantie (für 6 Monate oder ein Jahr) für    die Produktion des Landwirtes und erhalten im Gegenzug Einblick und Einfluss auf die Produktion (zumeist&nbsp;biodynamisch&nbsp;oder    anderweitig&nbsp;ökologisch). In einigen Fällen geben die Verbraucher dem Landwirt auch ein zinsgünstiges Darlehen,    um den Aufbau des Hofes oder die Umstellung auf ökologische Produktion zu ermöglichen. Diese Partnerschaft    unterstützt eine lokale Produktion und eine lokale Ernährung.“<a href="#_ftn19" title="" rel="nofollow">[19]</a></p><p>Hier verschwimmen die Rollen, da Kunden zum einen Investoren, Finanzier, Eigentümer und auch Mitarbeiter sein    können.</p><p>Dabei gibt es eine Vielzahl von Varianten und Einflussmöglichkeiten, die von der konkreten Mitarbeit    im Hof (Ochsenherz) bis zum einfachen Kundendasein und dem Bezug von z.B. Biokisten geht.</p><p>&nbsp;</p><p><em>Beispiele    + weiterführende Ressourcen</em></p><p>Ochsenherz in Wien, <a href="http://www.ochsenherz.at/csa.html"                                                                  class="external-link" rel="nofollow">http://www.ochsenherz.at/csa.html</a></p><p><a href="http://www.solidarische-landwirtschaft.org/" class="external-link" rel="nofollow">http://www.solidarische-landwirtschaft.org/</a></p><p><a href="http://www.kritischer-agrarbericht.de/fileadmin/Daten-KAB/KAB-2012/vanElsen_Kraiss.pdf"          class="external-link" rel="nofollow">Überblicksartikel über CSA-Betriebe in Deutschland</a>: <a        href="http://www.kritischer-agrarbericht.de/fileadmin/Daten-KAB/KAB-2012/vanElsen_Kraiss.pdf"        class="external-link" rel="nofollow">http://www.kritischer-agrarbericht.de/fileadmin/Daten-KAB/KAB-2012/vanElsen_Kraiss.pdf</a></p>';

indicators[7].definition.content = '<p><strong>Ethische Kundenbeziehung</strong></p><p>Der Begriff „Ethische Kundenbeziehung“ soll ganz umfassend alle    Maßnahmen im Kontakt mit einem Kunden bezeichnen und ein Überbegriff für diesen Indikator sein. Dieser Begriff ist    neu und nicht verbreitet.</p><p>Ethische Kundenbeziehung umfasst den gesamten Verkaufsprozess vom Marketing, Verkauf    und Servicemanagement, also den Kontakt mit dem Kunden im Produktlebenslauf.</p><p>Dabei steht der wirkliche    Kundennutzen über dem Verkauf, d.h. als Anbieter verkaufe ich dem Kunden nur dann etwas, wenn er es wirklich braucht    und es wirklich einen Mehrwert für ihn bringt und wenn mein Produkt auch am besten zu den Kundenbedürfnissen    passt.</p><p>Als Verkäufer wecke ich keine „unnötigen“ Kundenbedürfnisse, mache keine Lockangebote und verweise ggf.    auf bessere und passendere Produkte meiner Mitbewerber.</p><p>Die langfristige Kundenbeziehung und das optimale    Erfüllen der Kundenbedürfnisse stehen im Vordergrund. Über die Vor- und Nachteile meiner Angebote informiere ich    umfassend und gewähre umfangreiche Servicemaßnahmen.</p><p>Langfristig wird das mehr Erfolg bringen als jede andere    Maßnahme.</p><p>&nbsp;</p><p>Die folgenden drei Tabellen sollen einen Überblick für die Unterscheidung zwischen    ethischer Kundenbeziehung und unethischer Kundenbeziehung geben. „Marketing“ bitte jeweils gedanklich mit    „Kundenbeziehung“ ersetzen.</p><p>&nbsp;</p><p>Philip Kotler unterscheidet drei verschieden Formen von Marketing:<a        href="#_ftn2" title="" rel="nofollow">[2]</a></p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="left"><strong>&nbsp;</strong></p></td>            <td class="confluenceTd"><p align="left"><strong>Marketing 1.0 <br> Produktorientiertes Marketing</strong>            </p></td>            <td class="confluenceTd"><p align="left"><strong>Marketing 2.0. <br> Verbraucherorientiertes                Marketing</strong></p></td>            <td class="confluenceTd"><p align="left"><strong>Marketing 3.0<br> Wertorientiertes Marketing</strong></p>            </td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Ziel</strong></p></td>            <td class="confluenceTd"><p align="left">Produkte verkaufen</p></td>            <td class="confluenceTd"><p align="left">Verbraucher zufriedenstellen und binden</p></td>            <td class="confluenceTd"><p align="left">Die Welt verbessern</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Triebkräfte</strong></p></td>            <td class="confluenceTd"><p align="left">Industrielle Revolution</p></td>            <td class="confluenceTd"><p align="left">Informationstechnologie</p></td>            <td class="confluenceTd"><p align="left">New-Wave-Technologie</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Wie Unternehm. den Markt sehen</strong></p></td>            <td class="confluenceTd"><p align="left">Massenkäufer mit physischen Bedürfnissen</p></td>            <td class="confluenceTd"><p align="left">Klügere Konsumenten mit Herz und Verstand</p></td>            <td class="confluenceTd"><p align="left">Ganze Menschen mit Kopf, Herz und Human Spirit</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Zentrales Mark­eting-Konzept</strong></p></td>            <td class="confluenceTd"><p align="left">Produktentwicklung</p></td>            <td class="confluenceTd"><p align="left">Differenzierung</p></td>            <td class="confluenceTd"><p align="left">Werte</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Marketingpolitik der Unternehm.</strong></p></td>            <td class="confluenceTd"><p align="left">Produktspezifizierung</p></td>            <td class="confluenceTd"><p align="left">Positionierung von Unternehmen und Produkten</p></td>            <td class="confluenceTd"><p align="left">Mission, Vision und Werte des Unternehmens</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Wertangebot</strong></p></td>            <td class="confluenceTd"><p align="left">Funktional</p></td>            <td class="confluenceTd"><p align="left">Funktional und emotional</p></td>            <td class="confluenceTd"><p align="left">Funktional, emotional und spirituell</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Interaktion mit dem Verbrauch.</strong></p></td>            <td class="confluenceTd"><p align="left">One-to-Many-Transaktion (Massenabfertigung)</p></td>            <td class="confluenceTd"><p align="left">One-to-one-Beziehung (individuelle Betreuung)</p></td>            <td class="confluenceTd"><p align="left">Many-to-many-Kooperation (von der Masse für die Masse)</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p align="left">Ein Beispiel für die „Weltverbesserung“ als Ziel im Marketing könnten die Aktivitäten    der Bio-Branche sein, die mit ihrem Zugang und Produkten positiv das ökologische Bewusstsein der Verbraucher zu    schulen hilft.</p><p align="left">&nbsp;</p><p>Thomas Maak/Peter Ulrich unterscheiden zwischen manipulativem und    integrem (ethischem) Marketing:<a href="#_ftn3" title="" rel="nofollow">[3]</a></p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Dimension</strong></p></td>            <td class="confluenceTd"><p><strong>Manipulatives Marketing</strong></p></td>            <td class="confluenceTd"><p><strong>Integres Marketing</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Grundverständnis</strong></p></td>            <td class="confluenceTd"><p>Beeinflussung mit (fast) allen Mitteln</p></td>            <td class="confluenceTd"><p>Legitime und sinnvolle Bedürfnisbefriedigung</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Menschenbild</strong></p></td>            <td class="confluenceTd"><p align="left">Instrumentalistisch: „unmündiger Konsument“</p></td>            <td class="confluenceTd"><p>Humanorientiert: „mündiger Bürger“</p></td>        </tr>        <tr>            <td colspan="3" class="confluenceTd"><p><strong>Marketinginstrumente</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Produkt</strong></p></td>            <td class="confluenceTd"><p>Mittel zur Umsatzgenerierung</p></td>            <td class="confluenceTd"><p>Mittel zur Bedürfnisbefriedigung</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Preis</strong></p></td>            <td class="confluenceTd"><p>Gewinnmaximierung</p></td>            <td class="confluenceTd"><p>Adäquate Differenzierung</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Placement</strong></p></td>            <td class="confluenceTd"><p>Effizienzorientiert</p></td>            <td class="confluenceTd"><p>Integritätsbewusst</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Promotion</strong></p></td>            <td class="confluenceTd"><p>Überreden</p></td>            <td class="confluenceTd"><p>Überzeugen</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Motto</strong></p></td>            <td class="confluenceTd"><p>„Umsatz um jeden Preis“</p></td>            <td class="confluenceTd"><p>„Ist es sinnvoll?“</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p>Eine weitere Übersicht von Maak und Ulrich beschreibt Werte/Tugenden und ihre konkrete Bedeutung    für das Marketing:<a href="#_ftn4" title="" rel="nofollow">[4]</a></p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Tugend</strong></p></td>            <td class="confluenceTd"><p><strong>Beschreibung</strong></p></td>            <td class="confluenceTd"><p><strong>Bedeutung für das Marketing (Bsp.)</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Respekt</strong></p></td>            <td class="confluenceTd"><p align="left">Respektvoller Umgang mit dem Anderen als Mensch und mündiger                Bürger; Respekt vor Glaube, Herkunft, Hautfarbe und Geschlecht</p></td>            <td class="confluenceTd">                <ul>                    <li>Keine diskriminierende Werbung, oder solche, die kulturelle oder religiöse Gefühlen verletzen                        könnte                    </li>                    <li>Keine sexistische Werbung</li>                    <li>Kein Verkauf von mangelhaften oder unsicheren Produkten</li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Empathie</strong></p></td>            <td class="confluenceTd"><p align="left">Den Wünschen, Bedürfnissen und Sorgen anderer bewusst begegnen</p>            </td>            <td class="confluenceTd">                <ul>                    <li>Eingehen auf die wirklichen Bedürfnisse von Kunden</li>                    <li>Eingehen auf die Bedürfnisse von Konsumenten im jeweiligen Kulturkreis</li>                    <li>Abstandnehmen vom Verkauf teurer Produkte oder Kleinkrediten an Kunden, die überschuldet oder in                        Gefahr der Überschuldung sind                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Ehrlichkeit/Transpa-renz</strong></p></td>            <td class="confluenceTd"><p align="left">Sagen, was man meint, und meinen, was man sagt<br> Offenheit über                die eigenen Absichten, das eigene Ange-bot und dessen Herkunft</p></td>            <td class="confluenceTd">                <ul>                    <li>Nachvollziehbarkeit von Herkunft und Spezifika des Produkts</li>                    <li>Kunden korrekte und vollständige Informationen vermitteln, auch solche die nachteilig sein                        könnten (z.B. Nebenwirkun-gen von Arzneimitteln)                    </li>                    <li>Kein „KidNabbing“</li>                    <li>Keine Irreführung der Verbraucher</li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Fairness</strong></p></td>            <td class="confluenceTd"><p align="left">Handeln auf der Grundlage von Freiheit, Gleichheit und                Gerechtigkeit (frei von Vorurteilen und Begünstigung)</p></td>            <td class="confluenceTd">                <ul>                    <li>Keine Übervorteilung von Verbrauchern</li>                    <li>Sicherstellung von Preiswertigkeit,d.h. eines adäquaten Preis-Qualitäts-Verhältnisses</li>                    <li>Preisgerechtigkeit, z.B. zwischen nationalen Märkten</li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd"><p align="left"><strong>Verant-wortung</strong></p></td>            <td class="confluenceTd"><p align="left">Sich für das eigene Handeln (und Nicht-Handeln) gegenüber allen                Betroffenen (oder möglicherweise Betroffenen) verantworten</p></td>            <td class="confluenceTd">                <ul>                    <li>Marketing-Verantwortung als integralen Bestandteil der Unternehmensintegrität begreifen</li>                    <li>Prinzipiengeleitetes Handeln</li>                    <li>Verantwortung für Produkte und Dienstleistungen gegenüber Kunden muss Priorität genießen</li>                </ul>            </td>        </tr>        </tbody>    </table></div><p><strong>&nbsp;</strong></p><p><strong>Ethisches Marketing und ethischer Verkauf (Wege zum Kunden)</strong></p><p>Beide Begriffe sind nicht klar voneinander zu trennen und unterscheiden. Tendenziell ist Marketing der umfassendere    Begriff, der die Gesamtstrategie umfasst, ergänzende Maßnahmen, Produktentwicklung, während der Verkauf meistens    alle direkten Kundenkontakte bezeichnet. Hier werden beide unter dem Begriff „Ethische Kundenbeziehung“ zusamm    <del>g</del>    engefasst.</p><p><u>Marketing:</u></p><ul>    <li>Schriftliche Werbeunterlagen, wie Flyer, Infobroschüren, Postkarten, Visitenkarten, Imagebroschüren, Mailings        etc.    </li>    <li>Online-Medien, wie Webseite, Blogs, Onlineportale, Newsletter (mit leichter Abmeldefunktion)</li>    <li>PR-Maßnahmen, wie Fachartikel, redaktionelle Beiträge, Imagemaßnahmen, Pressekonferenzen</li>    <li>Empfehlungsmarketing – „Mund-zu-Mund-Propaganda“</li></ul><p><u>Verkauf/ Vertrieb: </u></p><ul>    <li>Schriftliche Unterlagen per Brief/ Email (soweit gesetzlich erlaubt)</li>    <li>Persönlicher Kontakt durch vereinbarte Haus-/Vertreterbesuche, Netzwerkver­anstaltungen, Messen</li>    <li>Telefonische Kontaktanbahnung im B2B-Bereich (soweit gesetzlich erlaubt)</li>    <li>Kostenlose Infoveranstaltungen mit Mehrwert für die Kunden</li></ul><p>Unethisch sind zum einen alle Werbemaßnahmen, die gesetzlich verboten sind. Im Graubereich liegen    „aufdringliche“ Formen, die für den Kunden belästigend wirken oder denen er sich nicht leicht entziehen kann, wie    z.B.:</p><ul>    <li>Ansprachen auf der Straße</li>    <li>Unangemeldete Vertreter-/Hausbesuche</li>    <li>Werbung im Radio/ Fernsehen oder Printmedien</li></ul><p>In Sao Paulo/Braslien gibt es nach einer Volksabstimmung seit 2007 keine Werbung mehr im öffentlichen Raum – das    ist für uns ein interessantes positives Beispiel!<a href="#_ftn5" title="" rel="nofollow">[5]</a></p><p>&nbsp;</p><p><strong>Produkttransparenz, fairer Preis und ethische Auswahl der KundInnen/ Bewusstseinsbildung bei den    Kunden</strong></p><p>Wir wünschen eine umfassende Produkttransparenz bei der alle Inhaltsstoffe deutlich    gekennzeichnet sind und auch die wesentliche Hintergründe bei der Preisfestsetzung und Kalkulation preis-gegeben    werden. So lässt sich leicht ein „fairer“ Preis feststellen. Die Produkttransparenz gilt natürlich auch für    Dienstleistungen, soweit sie durchführbar sind.</p><p>Der faire Preis ist nicht leicht zu bestimmen. Als ersten    Schritt setzten wir auf Kostentransparenz, eine kritische Selbsteinschätzung, einen Branchenvergleich und die    Einschätzung durch einen möglichen KundInnen-Beirat/ Verbraucherschutz.</p><p>Die ethische Auswahl der KundInnen    verlangt eine Auseinandersetzung mit den eigenen Kunden und wie meine Produkte/ Dienstleistungen weiter verwendet    werden. Das wird sicherlich nicht bei jedem Produkt/Dienstleistung notwendig sein, dennoch möchten wir diesen Aspekt    auch im Verantwortungsbereich eines Unternehmens berücksichtigt sehen. Dabei ist diese Auswahl vor allem im    B2B-Bereich also mit Firmen als Kunden relevant.</p><p>Ein Positiv-Beispiel dafür ist der LieferantInnen-Boykott von    der Bio-Supermarktkette Basis, als Lidl als Großaktionär einstieg.<a href="#_ftn6" title="" rel="nofollow">[6]</a></p><p>&nbsp;</p><p><strong>Gemeinsame Produktentwicklung, Marktforschung und KundInnen-Mitbestim­mung</strong></p><p>    Diese Aspekte können noch weiter dreigeteilt werden in</p><ul>    <li>gemeinsame Produktentwicklung</li>    <li>Marktforschung</li>    <li>KundInnen-Mitbestimmung</li></ul><p><u>Gemeinsame Produktentwicklung = Co-Creation/Prosumption/Lead-User</u></p><p>Co-Creation, Prosumption und das    Lead-User-Modell<a href="#_ftn7" title="" rel="nofollow">[7]</a> beschreiben eine enge Zusammenarbeit zwischen    Unternehmen und (bestimmten) Kunden. In einem gemeinsamen Prozess werden Produkte und Dienstleistungen gestaltet,    getestet und verbessert. Die Kunden bringen sich aktiv ein und tragen so zu Innovationen bei und identifizieren sich    mehr mit dem Unternehmen und den Produkten. Daneben führt es zu Mundpropaganda und damit sehr preiswerter und    nachhaltiger Werbung. Die Grenzen zwischen intern und extern verschwimmen dabei etwas.</p><p><u>Marktforschung</u></p><p>Gesamtheit aller Maßnahmen, die dem Unternehmen dienen, um Aufschluss über Kundenbedürfnisse und das    Kaufverhalten ihrer Zielgruppen zu erhalten. Unter ethischen Gesichtspunkten dient die Marktforschung vor allem dem    Zweck, die Bedürfniserfüllung zu optimieren.</p><p>Marktforschung dient dazu, herauszufinden, wie sich Märkte    verhalten, welche Kundenbedürfnisse es gibt und wie sich diese beeinflussen lassen. Marketingmaßnahmen werden auf    ihrer Grundlage gesetzt.</p><p>Marktforschung unter ethischen Aspekten müsste auf die Optimierung der    Kundenbedürfnisse abzielen und die manipulativen Elemente so weit reduzieren, dass durch die geschaffene Transparenz    der Kunde eine eigenständige Entscheidung treffen kann.</p><p>Der Versuch, Manipulation vollkommen abzuschaffen, ist    zwecklos – dazu müsste man Werbung komplett unterlassen.</p><p>Der Umgang mit den erhobenen Daten sollte einem    höchstmöglichen Schutz für den Kunden unterliegen und mindestens den rechtlichen Datenschutzkriterien    entsprechen.</p><p><u>KundInnen-Mitbestimmung</u></p><p>Wolfgang G. Weber sowie das internationale    Forschungsnetzwerk OPEN<a href="#_ftn8" title="" rel="nofollow">[8]</a> zitiert folgende Grade der    MitarbeiterInnenbeteiligung, die auch für die KundInnenmitbestimmung gelten können:<a href="#_ftn9" title=""                                                                                          rel="nofollow">[9]</a></p><ol>    <li>Keine Partizipation</li>    <li>Information</li>    <li>Anhörung ( = Konsultation)</li>    <li>Mitwirkung</li>    <li>Mitbestimmung, Mitentscheidung</li>    <li>Selbstbestimmung</li></ol><p>Bisher ist mir kein Instrument bekannt, dass das gesamte Feld von KundInnendemokratie/-beirat abdeckt. Dennoch    gibt es einzelne Maßnahmen mit unterschiedlichen Beteiligungs­qualitäten:</p><ul>    <li>KundInnenbeirat, der bei allen/bestimmten Unternehmensentscheidungen gehört wird oder zustimmen muss        (Vetorecht)    </li>    <li>KundInnendelegierte, die in unterschiedlichen Gremien sitzen und aktiv mitarbeiten und mitentscheiden        (Mehrheitsabstimmung, Konsent-Entscheidungen)    </li>    <li>Wahl des Beirates/Delegierten öffentlich per Internet; wahlberechtigt sind langfristige KundInnen, die        mindestens 0,5 Mal so lange KundIn sind, wie die Wahlperiode dauert    </li>    <li>Kundenvertreter als Teil eines Stakeholderdialogs, bei dem die Geschäftsleitung zusammen mit den Stakeholdern        Konsent/Konsens-Entscheidungen trifft, die auch im Unternehmen ausgeführt werden    </li>    <li>Öffentliche Vorstandssitzungen mit Kundendelegierten oder Frage-/Mitsprachemöglichkeiten aus dem        KundInnenpublikum    </li></ul><p>&nbsp;</p><p><strong>Service-Management</strong></p><p>Umfasst alle Maßnahmen zur Kundenbetreuung ab dem Kauf    eines Produktes oder einer Dienstleistung. Je nach Angebot kann dieses folgende Punkte umfassen:</p><ul>    <li>Gute Erreichbarkeit</li>    <li>Individuelles Eingehen auf Wünsche und Bedürfnisse</li>    <li>Kompetenter und serviceorientierter Umgang mit Reklamationen</li>    <li>Auftragsabwicklung erfolgt so, wie im Verkaufsprozesse vereinbart</li>    <li>Lieferfristen werden eingehalten</li>    <li>Versprochene Qualität wird geliefert</li>    <li>Sorgsamer Umgang mit Kundendaten</li>    <li>Bei Verzögerungen oder Problemen wird der Kunde schnell und aktiv informiert</li>    <li>Streitigkeiten werden idealerweise im Dialog gelöst, sollte dies nicht möglich sein, über ein        Mediationsverfahren und erst im letzten Schritt vor Gericht    </li>    <li>Respektvoller Umgang in der gesamten Kommunikation</li></ul>';

indicators[7].details.content = '[1] Damit sind Angaben über Inhaltstoffe, Schadstoffe, Gefahren und Benutzerhinweise nach den höchsten verfügbaren Standards gemeint.<p><strong>Unternehmensspezifische Besonderheiten</strong></p><p>In dieser Tabelle wird jetzt nicht unterschieden, ob es    sich um Produkte oder Dienstleistungen handelt, ob der Kunde Endverbraucher oder gewerblicher Abnehmer ist, ob es    sich um ein kleines Unternehmen handelt oder einen multi­nationalen Konzern.</p><p>Daher müssen die jeweiligen    Aspekte konkret auf Angebot, Unternehmensgröße und Zielgruppe angewandt und argumentiert werden. Sollte ein    Kriterium nicht zutreffen, wird es einfach aus der Bewertung gestrichen.</p><p>Prinzipiell gelten    Empfehlungsmarketing und Werbung über eine rechtlich einwandfreie Homepage als vorbildlich, solange sie ohne    Provisionszahlungen erfolgen (kein Mult-Level-Marketing). Jeder ungefragte Kundenkontakt sowie Maßnahmen, die nicht    den gesetzlichen Bestimmungen entsprechen gelten als unethisch und können zu Prozent-Abzügen bei dem jeweiligen    Sub-Indikator führen.</p><p>Der KundInnenbeirat gilt vor allem für Unternehmen mit Produkten für Endverbraucher,    während die gemeinsame Produktgestaltung auch schon bei Kleinstunternehmen bedeutsam werden kann (und in der Regel    zum Normalfall gehört).</p><p>Werden mehr als 75&nbsp;% der Produkte gemeinsam entwickelt, gibt es hauptsächlich    Empfehlungsmarketing und Werbung über Homepage, Infoveranstaltungen sowie geringen Printmedieneinsatz, dann können    Kleinstunternehmen schon nah an die Stufe „vorbildlich“ heran­kommen. </p><p>Bei vielen Genossenschaften haben    Kunden als Genossen auch Mitbestimmungs-rechte. Das kann beim Subindikator „Kundenmitbestimmung/ gemeisame    Produktentwicklung/Marktforschung“ positiv mitbewertet werden</p><p>&nbsp;</p><p><strong>Abgrenzung/ Verhältnis zu    anderen Indikatoren</strong></p><p>Die ethische Kundenbeziehung im weiteren Sinne umfasst mehr Aspekte als über    diesen Indikator behandelt werden können, wobei einige schon oben genannt wurden:</p><ul>    <li>Qualität und Lebensdauer eines Produktes (D3)</li>    <li>Faire Preisgestaltung und Transparenz im Markt, d.h. möglichst vergleichbare Angebote erstellen (D2)</li>    <li>Sinnhaftigkeit und gesellschaftliche Wirkung (E1)</li></ul><p>Dazu kommen noch</p><ul>    <li>Kooperatives Marketing – Zusammenarbeit mit Mitbewerbern – Transparenz in Richtung MitbewerberInnen (D2)</li>    <li>Soziale Preisgestaltung und barrierefreier Zugang zu den Produkten/Dienstleistungen (D4)</li></ul><p>Der Wert <em>Transparenz und Mitbestimmung</em> ist auch in D1 gerückt, weil D5 sich vor allem auf die    Zusammenarbeit in Richtung besserer Branchenstandards bezieht.</p><p>Es wird als die Transparenz/Mitbestimmung im    Bezug zur Berührungsgruppe Kunde behandelt. In D2 wird die Transparenz/Mitbestimmung in Richtung    Mit-Unternehmen/Konkurrenz behandelt. Weitere Stakeholder werden in anderen Indikatoren berücksichtigt: Lieferanten    (A1), Finanzgeber (B1), Mitarbeiter (C5), restliche Berührungsgruppen (E5).</p>';

indicators[7].footnotes.content = '<div>    <pre><a href="#_ftnref1" title="" rel="nofollow"></a><ins><a href="#_ftnref1" title="" rel="nofollow">[1]</a></ins><ins>        Damit sind Angaben über Inhaltstoffe, Schadstoffe, Gefahren und Benutzerhinweise nach den höchsten verfügbaren        Standards gemeint.    </ins></pre></div><div><p><a href="#_ftnref2" title="" rel="nofollow">[2]</a> Kotler, Philip/Kartajaya, Haermanawan/Setiwan, Iwan:    Dimension, 2010, S.24.</p></div><div><p><a href="#_ftnref3" title="" rel="nofollow">[3]</a> Maak, Thomas/Ulrich, Peter: Unternehmensführung, 2007,&nbsp;    S. 288.</p></div><div><p><a href="#_ftnref4" title="" rel="nofollow">[4]</a> Maak, Thomas/Ulrich, Peter: Unternehmensführung, 2007, S.    290 (etwas zusammengefasst).</p></div><div>    <p><a href="#_ftnref5" title="" rel="nofollow"></a>        <ins><a href="#_ftnref5" title="" rel="nofollow"></a>            <ins><a href="#_ftnref5" title="" rel="nofollow">[5]</a></ins>        </ins>        <ins></ins>        Vgl.: Artikel in der Wirtschaftswoche <a                href="http://www.wiwo.de/unternehmen/dienstleister/werbefreies-so-paulo-rueckkehr-der-nacht/5341932.html"                class="external-link" rel="nofollow">http://www.wiwo.de/unternehmen/dienstleister/werbefreies-so-paulo-rueckkehr-der-nacht/5341932.html</a>        und in einem privaten Blog mit weiteren Links <a                href="http://rolfgeneratedcontent.com/2012/02/09/sao-paulo-stadt-mit-werbeverbot-im-offentlichen-raum/"                class="external-link" rel="nofollow">http://rolfgeneratedcontent.com/2012/02/09/sao-paulo-stadt-mit-werbeverbot-im-offentlichen-raum/</a>    </p></div><div><p><a href="#_ftnref6" title="" rel="nofollow">[6]</a> Vgl. Artikel in der Welt: <a        href="http://www.welt.de/wirtschaft/article1356851/Machtkampf-bei-Basic-nach-Lidl-Ausstieg.html"        class="external-link" rel="nofollow">http://www.welt.de/wirtschaft/article1356851/Machtkampf-bei-Basic-nach-Lidl-Ausstieg.html</a></p></div><div><p><a href="#_ftnref7" title="" rel="nofollow">[7]</a> Vgl. Kap. 5 „Die Prosumenten“ in Tapscot, Don/William,    Anthony D: Wikinomics, S. 123–148, für Lead-User Eric van Hippel: Democratizing innovation, ebs. die    Wikipedia-Artikel zu den Themen.</p></div><div><p><a href="#_ftnref8" title="" rel="nofollow">[8]</a> Organizational Participation in Europe Network (OPEN).</p></div><div><p><a href="#_ftnref9" title="" rel="nofollow">[9]</a> Vgl. Weber, Wolfgang: Demokratie, 1994, S.&nbsp;272; Wegge,    Jürgen: Motivation, 2010, S. 159.</p></div><div><p><a href="#_ftnref10" title="" rel="nofollow">[10]</a> Maak, Thomas/Ulrich, Peter: Unternehmensführung, 2007, S.    300/01 – diese Fragen könnten für viele ethische Entscheidungen im Unternehmen herangezogen werden. Bei diesen    Leitfragen werden auch weitere Kriterien der Gemeinwohl-Matrix angesprochen, ein gutes Beispiel dafür, wie die    einzelnen Bereiche ethisch zusammenhängen.</p></div><div>    <p><a href="#_ftnref11" title="" rel="nofollow"></a>        <ins><a href="#_ftnref11" title="" rel="nofollow"></a>            <ins><a href="#_ftnref11" title="" rel="nofollow">[11]</a></ins>        </ins>        <ins></ins>        Zu finden auf: <a href="http://www.marketingpower.com/AboutAMA/Pages/Statement%20of%20Ethics.aspx"                          class="external-link" rel="nofollow">http://www.marketingpower.com/AboutAMA/Pages/Statement%20of%20Ethics.aspx</a>    </p></div><div>    <p><a href="#_ftnref12" title="" rel="nofollow"></a>        <ins><a href="#_ftnref12" title="" rel="nofollow"></a>            <ins><a href="#_ftnref12" title="" rel="nofollow">[12]</a></ins>        </ins>        <ins></ins>        Vgl. die Leiharbeiter-Problematik bei Amazon in Deutschland, ARD: Ausgeliefert, Leiharbeiter bei Amazon auf <a                href="http://www.youtube.com/watch?v=lylInWGaPaE" class="external-link" rel="nofollow">http://www.youtube.com/watch?v=lylInWGaPaE</a>    </p></div><div><p><a href="#_ftnref13" title="" rel="nofollow">[13]</a> Übersetzung von mir aus Tony Hsieh: Delivering happyness,    2010, S. 147.</p></div><div><p align="left"><a href="#_ftnref14" title="" rel="nofollow">[14]</a> <a        href="http://www.southwest.com/html/about-southwest/index.html" class="external-link" rel="nofollow">http://www.southwest.com/html/about-southwest/index.html</a>    (abgerufen 10.08.2011, übersetzt von mir:<br> <u>The Mission of Southwest Airlines: </u>The mission of Southwest    Airlines is dedication to the highest quality of Customer Service delivered with a sense of warmth, friendliness,    individual pride, and Company Spirit.</p>    <p align="left"><u>To Our Employees: </u>We&nbsp;are committed to provide our Employees a stable work environment        with equal opportunity for learning and personal growth. Creativity and innovation are encouraged for improving        the effectiveness of Southwest Airlines. Above all, Employees will be provided the same concern, respect, and        caring attitude within the organization that they are expected to share externally with every Southwest        Customer.)</p></div><div><p><a href="#_ftnref15" title="" rel="nofollow">[15]</a> Vgl. Niels Pfläging/Förster &amp; Kreuz und im besonderen    Freiberg, Kevin &amp; Jackie: Nuts! Southwest Airlines Crazy recipe for Business and personal success, Bard Press,    1996</p></div><div><p><a href="#_ftnref16" title="" rel="nofollow">[16]</a> <a        href="http://www.smud.org/en/community-environment/Pages/index.aspx" class="external-link" rel="nofollow">http://www.smud.org/en/community-environment/Pages/index.aspx</a>    (abgerufen 25.05.2011)</p></div><div><p align="left"><a href="#_ftnref17" title="" rel="nofollow">[17]</a> <a        href="http://www.smud.org/en/about/connections/Documents/ConnectionsMay2011.pdf" class="external-link"        rel="nofollow">http://www.smud.org/en/about/connections/Documents/ConnectionsMay2011.pdf</a> (abgerufen    25.05.2011, übersetzt von Christian Rüther, „As a customer-owned not-for-profit utility, SMUD seeks to&nbsp; conduct    business in an open&nbsp; public process and encourages&nbsp; all customers to attend a workshop or hearing or to    provide written feedback.“)</p></div><div><p align="left"><a href="#_ftnref18" title="" rel="nofollow">[18]</a> <a        href="http://www.smud.org/en/about/Pages/index.aspx" class="external-link" rel="nofollow">http://www.smud.org/en/about/Pages/index.aspx</a>    (abgerufen am 24.05.2011, übersetzt von Christian Rüther: „For each of the last eight years, SMUD has received the    highest customer satisfaction ratings of any utility in the state in the J.D. Power and Associates survey. SMUD    received the second-highest score in the nation for commercial customer satisfaction in 2010.“</p></div><div><p><a href="#_ftnref19" title="" rel="nofollow">[19]</a> Direktzitat aus Wikipedia: <a        href="http://de.wikipedia.org/wiki/Solidarische_Landwirtschaft" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Solidarische_Landwirtschaft</a></p></div>';

indicators[7].goals.content = '<p>In der Beziehung zu Kunden klaffen Anspruch und Wirklichkeit häufig auseinander. Der Kunde, der im Mittelpunkt der    Bemühungen eines Unternehmens steht, wird nicht als „König“ behandelt, sondern als „Melkkuh“ (im Verkaufsprozess)    oder als Vorgang, der abgearbeitet werden soll (im Reklamationsmanagement oder bei der Projektabwicklung). Außerdem    gibt es ein breites Spektrum an Werbemaßnahmen, die vermehrt auf Manipulation und das Setzen permanenter    Kaufanreize, statt auf Sinnhaftigkeit oder Nachhaltigkeit.</p><p>Verkauf und Marketing sind notwendig, um die    eigenen Produkte und Dienstleistungen an den Mann und die Frau zu bringen. Ohne diese Aktivitäten gibt es keinen    oder wenig Umsatz. Es ist also keine Frage des „ob“, sondern nur des „wie“. Und da sollen die Hinweise hier in dem    Handbuch eine Orientierung geben, wie das „wie“ ethisch ausschauen kann. Insbesondere sinnvolle/ nachhalte Produkte    und Dienstleistungen (vgl. E1) sollen möglichst häufig verkauft werden, insofern ist es auch für ein GWÖ-Unternehmen    wichtig, da wirksam zu werden.</p><p>Es geht bei diesem Indikator allerdings nicht nur ums „Verkaufen“, sondern die    gesamte Kundenbeziehung. KundInnen werden als gleichwertige PartnerInnen angesehen, es wird ein Kontakt auf    Augenhöhe gestaltet und die Hauptintention ist das Wohlergehen und die optimale Bedürfniserfüllung der KundInnen –    und zwar in allen Phasen der Kundenbeziehung und notfalls auch gegen die eigenen Geschäftsinteressen.</p><p>Dieser    Indikator setzt eine umfassende Auseinandersetzung mit dem Thema voraus und ermöglicht einen gewissen Spielraum in    der individuellen Ausgestaltung. Grundlegend ist ein eigenes Konzept, eine eigene Ethik im Umgang mit den    Kunden:</p><ul>    <li>Was sind unsere Werte/ Prinzipien in der Kundenbeziehung?</li>    <li>Wie leben wir diese Werte/ Prinzipien in den unterschiedlichen Phasen des Verkaufs?        (Produktentwicklung/Marketing-Verkauf/Service nach dem Verkauf)    </li>    <li>Wie sinnvoll sind unsere Produkte/ Dienstleistungen? Erfüllen sie wesentliche Bedürfnisse und dienen dem        Menschen/ Planeten oder sind es Ersatzbefriedigungen? (E1)    </li>    <li>Wie transparent sind wir bei unseren Produkten/ Dienstleistungen?</li>    <li>Wie hoch ist unsere Qualität und Lebensdauer unserer Produkte/ Dienstleistungen? (D3)</li>    <li>Wie fair ist unsere Preisgestaltung? (D2)</li></ul><p>Bei diesen Fragen wird schon deutlich, dass nicht alle Aspekte der ethischen Kundenbeziehung in D1 abgehandelt    werden, sondern es Überschneidungen zu den anderen Indikatoren der Matrix gibt. Die Aspekte Qualität und Lebensdauer    werden in D3 behandelt, die soziale Preisstafflung in D4 und die Sinnhaftigkeit/ gesellschaftliche Wirkung in    E1.</p><p>Der Indikator „Ethische Kundenbeziehung“ kann wie folgt näher unterteilt werden:</p><ul>    <li>Gesamtheit der Maßnahmen/ Institutionalsierung/ Gesamkonzept/ Prinzipien</li>    <li>Produkttransparenz, Fairer Preis und ethische Auswahl von KundInnen</li>    <li>KundInnen-Mitbestimmung/ Marktforschung/ gemeinsame Produktentwicklung</li>    <li>Servicequalität</li></ul><p>Diese Unterteilung ist ein Versuch, die verschiedenen Aspekte deutlich zu machen und soll eine klare Bewertung    möglich machen. In der Praxis liegen die Bereiche eng zusammen und können nicht immer getrennt betrachtet    werden.</p>';

indicators[7].implementationHelp.content = '<p><strong>Kurzhilfe:</strong></p><ul>    <li>Ist-Zustand erheben (Welche Marketingformen benutzen wir? Womit sind wir wie erfolgreich? Bewertung nach        ethischen Gesichtspunkten)    </li>    <li>Soll-Zustand bestimmen (Vision/Ziel)</li>    <li>Strategie, wie dieser Sollzustand erreicht werden soll – klare Maßnahmen + Monitoring</li></ul><p>&nbsp;</p><p>Maak und Ulrich schlagen für die Umsetzung eines integren Marketings eine Auseinandersetzung und    Reflexion ethischer Leitfragen, regelmäßige Dialogforen mit Stakeholdern (vgl. E5: Mitbestimmung der Gesellschaft)    und die Festlegung eines „Code of Marketing Ethics“ vor.</p><p>Leitfragen und Tests für Marketing-Entscheidungen    sind demnach:<a href="#_ftn10" title="" rel="nofollow">[10]</a></p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Dimension</strong></p></td>            <td class="confluenceTd"><p><strong>Leitfragen</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Compliance Test</strong></p></td>            <td class="confluenceTd"><p>Verletzt die beabsichtige Marketing-Aktivität rechtliche Normen, z.B.                Konsumentenrechte, oder unternehmensinterne Richtlinien (insb. Code of Marketing Ethics, Reihe                unten)?</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Konsequenzen-Test</strong></p></td>            <td class="confluenceTd"><p>Könnte das Handeln bzw. Produkt in irgendeiner Weise Stakeholder gefährden?                Könnten moralische Gefühle von Stakeholdern verletzt werden oder könnte das Handeln bzw. Produkt                diskriminierende Folgen haben?</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Verpflichtungs-Test</strong></p></td>            <td class="confluenceTd"><p>Könnte das Handeln bzw. Produkt spezielle (moralische) Verpflichtungen                verletzen, die wir unseren Kunden bzw. Stakeholdern gegenüber haben (z.B. hinsichtlich der                Nebenwirkungen von Medikamenten oder der Unbedenklichkeit von Spielzeug)?</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Gerechtigkeits-Test</strong></p></td>            <td class="confluenceTd"><p>Führen Herstellung oder Gebrauch des Produktes zur Ungleichverteilung von Lasten                oder werden dabei die Rechte von Stakeholdern (z.B. Lohngerechtigkeit in der Supply Chain, Recht auf                intakte Umwelt, Informationsrechte) verletzt?</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Common Decency-Test</strong></p></td>            <td class="confluenceTd"><p>Könnte unser Handeln bzw. Produkt Prinzipien allgemein anständigen Verhaltens                verletzen (z.B. Treu und Glauben, Wohlwollen, Ehrlichkeit)?</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Tugend-Test</strong></p></td>            <td class="confluenceTd"><p>Entspricht unser beabsichtigtes Handeln den elementaren Marketing-Tugenden                (Respekt, Ehrlichkeit, Offenheit, Verantwortung etc.) und stimmt es mit unseren Werten überein?</p></td>        </tr>        <tr>            <td class="confluenceTd"><p><strong>Integritäts-Test</strong></p></td>            <td class="confluenceTd"><p>Gefährden unsere Absichten unsere Integrität, indem sie von den Prinzipien                unserer Geschäftsethik „abgespalten“ sind?</p></td>        </tr>        </tbody>    </table></div><p>Neben diesen Leitfragen zur eigenen Reflexion gehören Dialogforen mit betroffenen Stakeholdern und NPOs sowie    die Formulierung, Implementierung und Sanktio-nierung eines allgemeinen Code of Marketing Ethics. Dabei führen sie    als Beispiel den <a href="http://www.marketingpower.com/AboutAMA/Pages/Statement%20of%20Ethics.aspx"                        class="external-link" rel="nofollow">Code of Ethics der American Marketing Association</a><a            href="#_ftn11" title="" rel="nofollow">[11]</a> an und verweisen auch darauf, dass dieser in praktische    Prozesse überführt und sanktioniert gehört, damit Talk und Walk übereinstimmen.</p><p>Prinzipiell kann für jedes der    Themen ein eigenes Projekt oder ein OE-Prozess aufgesetzt werden, wobei es hilfreich ist, vorhandene ExpertInnen zu    finden und einzubinden.</p><p>Der Vorteil des Pioniers ist es auch, damit Standards zu setzen und Vorbildfunktion    für die Wirtschaft zu werden. Der Nachteil ist, dass es viel Ausdauer und Fehlertoleranz bedarf, um in den Gebieten    weiter voranzuschreiten.</p>';

indicators[7].impulsQuestions.content = '<p>Die Grundfragen wurden schon oben behandelt, jetzt versuchen wir sie etwas differenzierter zu betrachten:</p><p>    <strong>Gesamtheit der Maßnahmen</strong></p><ul>    <li>Was sind unsere Werte/Prinzipien in der Kundenbeziehung?</li>    <li>Was ist das Grundkonzept der ethischen Kundenbeziehung? Und wie versuchen wir es im Unternehmen in        Strukturen/Prozessen/bei der Haltung der MitarbeiterInnen zu verankern?    </li>    <li>Wie leben wir diese Werte/Prinzipien in den unterschiedlichen Phasen des Verkaufs?        (Produktentwicklung/Marketing-Verkauf/Service nach dem Verkauf)    </li></ul><p><strong>Produkttransparenz, Fairer Preis und ethische Auswahl der KundInnen</strong></p><ul>    <li>Wie transparent sind wir bei unseren Produkten/ Dienstleistungen?</li>    <li>Welche Angaben zu den Produkten/ Dienstleistungen sind nicht transparent und aus welchem Grund?</li>    <li>Wie kalkulieren wir die Preise und was davon können wir transparent machen – Preistransparenz?</li>    <li>Was ist ein fairer Preis für unsere Produkte mit angemessener Berücksichtigung der Rücklagen/ Investitionen und        des Gesamtportfolios? Wie würden Kunden/ Mitbewerber das beurteilen, wenn alle Zahlen offen gelegt werden        würden?    </li>    <li>Was sind mögliche unethische Kunden? Wie können wir sie feststellen und sie von unseren        Produkten/Dienstleistungen ausschließen? (Nicht-Kooperation)    </li></ul><p><strong>KundInnen-Mitbestimmung/ Marktforschung/ gemeinsame Produktentwicklung</strong></p><ul>    <li>Wie binden wir unsere Kunden bei der Produktentwicklung mit ein?</li>    <li>Welche konkreten Mitsprachemöglichkeiten haben unsere Kunden?</li>    <li>Wo können wir durch die Zusammenarbeit mit unseren Kunden unsere Produkte/ Dienstleistungen verbessern? Welche        Potentiale gibt es dort und wie können wir das konkret umsetzen?    </li></ul><p><strong>Servicequalität</strong></p><ul>    <li>Was ist unser Servicekonzept? Was sind unsere Werte da?</li>    <li>Wie sichern wir eine optimale Servicequalität dem Kunden gegenüber?</li>    <li>Wie binden wir Kunden möglichst langfristig an uns und fördern Empfehlungsmarketing?</li></ul>';

indicators[7].moreinfo.content = '<ul>    <li>Arnold, Chris: [Ethical Marketing, 2009] Ethical Marketing and the new consumer. Marketing in a new ethical        community, John Wiley &amp; Sons, 2009 [bestellt]    </li>    <li>Code of Ethics der Amercan Marketing Association, <a            href="http://www.marketingpower.com/AboutAMA/Pages/Statement%20of%20Ethics.aspx" class="external-link"            rel="nofollow">http://www.marketingpower.com/AboutAMA/Pages/Statement%20of%20Ethics.aspx</a></li>    <li>Dietl, Claudia [verkaufen, 2010] Ethisch handeln – Erfolgreich verkaufen. Mit Mut zu neuen Verkaufsstrategien,        Hamburg: Acabus, 2010    </li>    <li>DIN ISO 10002:2004 „Qualitätsmanagement – Kundenzufriedenheit. Leitfaden für die Behandlung von Reklamationen in        Organisationen“    </li>    <li>Gutman, Paul: Good economy auf <a href="http://www.good-economy.com/" class="external-link" rel="nofollow">http://www.good-economy.com/</a>    </li>    <li>Hippel, Eric von: Democratizing innovation, MIT [WU TB… Lead-User-Modell]</li>    <li>Kernstock-Redl, Helga/Florian Schultheiss, Florian/Stühlinger, Eva: Ethisches Marketing, Springer (erscheint        Frühjahr 2012)&nbsp;</li>    <li>Kotler, Philip/Kartajaya, Hermawan/Setiwan, Iwan: [Dimension, 2010] Die neue Dimension des Marketings. Vom        Kunden zum Menschen, Frankfurt a.M./New York: Campus Verlag, 2010 [eigen]    </li>    <li>Maak, Thomas/Ulrich, Peter: [Unternehmensführung, 2007] Integre Unternehmensführung. Ethisches        Orientierungswissen für die Wirtschaftspraxis, Stuttgart: Schäffer Poeschel, 2007 [eigen]    </li>    <li>Morgen, Sharon Drew: [Integrity, 1999] Selling with integrity. Reinventing Sales through collaboration, respect,        and serving, New York: Berkley books, 1999 [eigen]    </li>    <li>Murphy, P.E./Laczzniak, G.R.: Marketing Ethics. Cases and Readings, 2006</li>    <li>Prahalad, C.K.: [Zukunft, 2003] Die Zukunft des Wettbewerbs. Einzigartige Werte mit dem Kunden gemeinsam        schaffen, Wien: Linde, 2003 [eigen]    </li>    <li>Ramaswamy, Venkat: [Co-Creation, 2010] The Power of Co-Creation: Build It with Them to Boost Growth,        Productivity, and Profits, NY (u.a.): Free Press, 2010 [eigen]    </li>    <li>Rupprecht, Susanne/Parlow, Georg: Ethisches Marketing. Nachhaltige Strategien für Klein- und Mikro-Unternehmen,        Wien: Festland-Verlag, 2008. [eher für EPUs und Kleinstunternehmen]    </li>    <li>Strauss, Bernd/Seidel, Wolfgang: Beschwerdemanagement. Unzufriedene Kunden als profitable Zielgruppe, 4.        Vollständig überarbeitete Auflage, München: Hanser, 2007 [UL]    </li>    <li>Tapscott, Don – Interview in brand eins, <a            href="http://www.brandeins.de/archiv/magazin/jetzt-geht-es-erst-richtig-los/artikel/nackt-und-fit.html"            class="external-link" rel="nofollow">http://www.brandeins.de/archiv/magazin/jetzt-geht-es-erst-richtig-los/artikel/nackt-und-fit.html</a>    </li>    <li>Umfassender Artikel zum KundInnenbeirat auf Business-Wissen.de, <a            href="http://www.business-wissen.de/marketing/kundenbeirat-die-meinung-und-ideen-der-kunden-aktiv-einbeziehen/"            class="external-link" rel="nofollow">http://www.business-wissen.de/marketing/kundenbeirat-die-meinung-und-ideen-der-kunden-aktiv-einbeziehen/</a>    </li>    <li>Verschiedene Formen des KundInnendialogs, <a href="http://www.stakeholder-dialog.com/Kundendialog.html"                                                     class="external-link" rel="nofollow">http://www.stakeholder-dialog.com/Kundendialog.html</a>    </li>    <li>Willingham, Ron: [Integrity, 2003] Integrity selling for the 21st century. How to sell the way people want to        buy, Currency/Doubleday, 2003    </li></ul><p>&nbsp;</p><div><h4        id="D1EthischeKundenbeziehung-Matrix41-RedakteurClaudiaDietlinfoclaudia-dietldeund&nbsp;ChristianRüther&nbsp;chrisruethergmailcom&nbsp;">    Redakteur: Claudia Dietl, <a href="mailto:info@claudia-dietl.de" class="external-link" rel="nofollow">info@claudia-dietl.de</a>,    und &nbsp;Christian Rüther:&nbsp;<a href="mailto:chrisruether@gmail.com" class="external-link" rel="nofollow">chrisruether@gmail.com</a>&nbsp;</h4></div>';

indicators[8].bestPractices.content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">1) </span><strong        style="font-size: 10.0pt;line-height: 13.0pt;">Werbung/Marketing</strong><span        style="font-size: 10.0pt;line-height: 13.0pt;">: Die Berliner Bäckerei Märkisches Landbrot spricht nicht von Konkurrenz, sondern von Bäckerkollegen, mit denen sie kooperieren. Auf Werbung im klassischen Sinne wird vollständig verzichtet: Marketing (etwa 3 % des Umsatzes) beschränkt sich auf den Versuch zur Transparenz.&nbsp;</span></p><p>2) <strong>Transparente Kostenkalkulation: </strong>Märkisches Landbrot beteiligt sich an dem    Produktinformationssystem „<a href="http://www.bio-mit-gesicht.de/" class="external-link" rel="nofollow">Bio mit        Gesicht</a>“ und bietet transparente Informationen und Details zur regionalen Lieferkette sowie zur Herkunft der    verwendeten ökologischen Rohstoffe: Informationen über Lieferanten sind hier ersichtlich und dadurch auch die    Zulieferquellen von Märkisches Landbrot offengelegt. Die am „Runden Tisch Getreide“ gemeinsam mit den Bauern    verhandelten Preise werden auf der Website genannt. Auch das Ergebnisprotokoll vom „Runden Tisch Getreide“ wird auf    der Website veröffentlicht.</p><p>3) <strong>Know-how:</strong> Open Source, free software und free hardware, z.B.    Internet-Browser Firefox, E-Mail-Programm Thunderbird, Betriebssystem Ubuntu/Linux, Online-Enzyklopädie Wikipedia.    Der Erfinder der Impfung gegen Kinderlähmung, Dr. Jonas, schenkte das Patent der UNO. Rhomberg Bau GmbH in    Vorarlberg hat das Patent für seine Holz-Hochhäuser freigegeben. Die Bäckerei Märkisches Landbrot stellt ihr Wissen    interessierten Laien sowie Menschen vom Fach zur Verfügung. Das geschieht in Form von Betriebsführungen, beim    jährlichen Bäckerwandern gemeinsam mit anderen Öko-Bäckern, in der AG „Gutes Brot“, bei Demeter-Bäckertreffen und in    der Runde der Bäcker des Märkischen Wirtschaftsverbunds fair &amp; regional. Auch wissenschaftliche Ergebnisse    werden frei zur Verfügung gestellt. So auch die Ergebnisse einer gemeinsam mit dem Forschungsinstitut biologischer    Landbau (FibL) durchgeführten Studie zu Verarbeitungsprozessen von Keimlingen oder die detaillierte Methodik zur    Berechnung des Product Carbon Footprint für die eigenen Brote, die in einem Buch veröffentlicht wurden. Märkisches    Landbrot nimmt zum Austausch von Wissen und Erfahrungen regelmäßig Bäcker aus anderen Bäckereien als Gastbäcker auf,    ebenso tauschen sie Lehrlinge mit der auf dem gleichen Betriebsgelände ansässigen Konditorei. So haben die    Auszubildenden die Möglichkeit, sowohl die Bio-Bäckerei als auch die Bio-Konditorei kennenzulernen.</p><p>4)    <strong>Arbeitskräfte: </strong>Im Baskenland sind derzeit (April 2012) 21 Unternehmen in der Gruppe NER („Nuevo    estilo de relaciones“, „Neuer Beziehungsstil“) zusammengeschlossen. Sie unterstützen einander in der derzeitigen    Krise in Spanien mit unterschiedlichsten Mitteln. Die Unternehmen überlassen einander Arbeitskräfte, weshalb diese    weder gekündigt werden müssen noch das Unternehmen in Finanznöte gerät.</p><p>5) <strong>Aufträge:</strong> Die    sechs AAP-Architekten bearbeiten Aufträge kooperativ. Märkisches Landbrot empfiehlt regelmäßig andere ökologische    Bäcker-Kollegen bei überregionalen Anfragen, die nicht auf den eigenen Touren liegen – denn das Firmenziel ist nach    Möglichkeit der regionale Vertrieb in Berlin-Brandenburg.</p><p>6) <strong>Finanzmittel:</strong> Einige der im    „Blumauer Manifest“ zusammengeschlossenen Familienunternehmen praktizieren einen Liquiditätsausgleich: Die    Waldviertler Schuhwerkstatt GEA verkauft im Winter viele Schuhe und Thoma Holz im Sommer viele Holzhäuser, in der    jeweiligen Nebensaison stützen sie sich mit Liquidität. Märkisches Landbrot gewährt Bauern aus der fair&amp;regional-Gruppe    zinslose Kredite in Bedarfssituationen, z.B. bei Ernteausfällen. Weiters wurden an Mitunternehmer, wie den    Fuhrunternehmer und den Elektroinstallateur, zinsvergünstigte Kredite vergeben. Eine Kollegen-Bäckerei erhielt einen    zinsvergünstigten Kredit für den Kauf eines Backofens.</p><p>7) <strong>Kooperative Krisenbewältigung:</strong> In    der größten Genossenschaft der Welt, Mondragón, fließt in „fetten“ Jahren ein Teil der Überschüsse in einen    Krisenfonds, aus dem Unternehmen, denen es schlecht geht, gestützt werden.</p>';

indicators[8].definition.content = '<p>Konkurrenz (Definition: „einander ausschließende Zielerreichung“, z.B. wenn ein Unternehmen Marktanteile erhöht, muss    ein anderes Unternehmen zwingend Marktanteile abgeben) ist im gegenwärtigen Wirtschaftssystem einer der höchsten    Werte. Im Koalitionsvertrag der deutschen Bundesregierung (geschlossen 2009) kommt das Wort „Wettbewerb“ 81-mal vor,    der Wert Menschenwürde dreimal und der Wert Solidarität viermal.[1]</p><p>Konkurrenz führe zu mehr Leistung,    Effizienz, Innovation und Wohlstand, so das herrschende Verständnis. Zahlreiche Studien bestätigen das Gegenteil:    Das Gegeneinander ist weniger effizient als ein Miteinander. 87&nbsp;% von fast 500 ausgewerteten Studien kommen zum    Ergebnis, dass Kooperation Menschen stärker motiviert und zu höheren Leistungen führt als Konkurrenz (s. KOHN,    205).</p><p>Die stärksten Motive im Rahmen der Kooperation sind Wertschätzung, Anerkennung und das Gelingen von    Beziehungen; in Rahmen der Konkurrenz ist das stärkste Motiv die Angst (s. KOHN).</p><p>In der Gemeinwohl-Ökonomie    wird Konkurrenz keineswegs abgeschafft: Alle dürfen frei in den Markt eintreten und ebenso frei ausscheiden. Das ist    sogar eine „liberalere“ Marktwirtschaft als heute, wo a) die marktbeherrschenden Unternehmen allerlei Tricks    anwenden, um Start-ups vom Markteintritt abzuhalten und vor allem b) als „systemrelevant“ eingestufte Banken und    Industriebetriebe gar nicht aus dem Markt ausscheiden können. In der Gemeinwohl-Ökonomie haben alle die <em>gleiche        Freiheit</em>, in den Markt einzutreten und aus dem Markt auszuscheiden. Der entscheidende Unterschied wird der    sein, dass <em>im Markt </em>Unternehmen einerseits für aggressives Wettbewerbsverhalten, das die Schädigung anderer    oder das alleinige Triumphieren des eigenen Unternehmens zum Ziel hat, durch Negativkriterien (z.B. feindliche    Übernahme, Dumpingpreise oder Sperrpatente) stark benachteiligt werden und sich so in Konkursgefahr begeben, und    dass sie andererseits umso stärker belohnt werden, je mehr sie sich gegenseitig helfen und solidarisch verhalten.    Wer anderen hilft, dessen Gemeinwohl-Bilanz verbessert sich.<span style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></p>';

indicators[8].details.content = '<p><strong>Belohnt werden</strong>:</p><p>1) kooperatives Marketing, z.B. Aufbau eines gemeinsamen    Produktinformationssystems</p><p>2) die Offenlegung relevanter Information (z.B. Kostenkalkulation,    Zulieferquellen)</p><p>3) die Weitergabe von Know-how (Open-Source-Prinzip)</p><p>4) die Überlassung von    Arbeitskräften bei schwacher Auftragslage</p><p>5) die Weiterreichung von Aufträgen</p><p>6) die Unterstützung mit    kostenlosen Krediten</p><p>7) die Beteiligung an einer kooperativen Krisenbewältigung („Branchentisch“)<span        style="color: rgb(0,0,0);font-size: 1.8em;font-weight: bold;line-height: normal;"></span></p><p class="NoSpacing">Der Indikator gilt für alle Branchen und Unternehmensgrößen, eine weitere Typisierung erfolgt    nicht.</p><p class="NoSpacing">Bei der Bewertung ist zu berücksichtigen, dass die Umsetzung der Ideen umso    schwieriger wird, je branchennäher und je näher die Unternehmen einander in Angebot und Preis sind. Es ist ein    großer Unterschied, ob ein Hotel bei Überbuchung seine Gäste in ein anderes Hotel schickt (das könnte man noch unter    Kundenservice einordnen) oder ob ein Einzelhändler seine Kunden zum nächsten Einzelhändler schickt.</p><p        class="NoSpacing">Bei der Weitergabe von Technologie und Know-how ist zwischen technischem Know-how bzw.    Patenten und Soft Skills zu unterscheiden. Es ist leichter, eine Schulung für Gewaltfreie Kommunikation umzusetzen    als Produktformeln oder ähnliches zu veröffentlichen. Letzteres kann ein Unternehmen sehr verwundbar machen, vor    allem in der Übergangszeit vom jetzigen Wirtschaftssystem hin zu einer echten Kultur des Gemeinwohls. Dies ist in    der Bewertung zu berücksichtigen.</p><p>Bei der Weitergabe von Aufträgen an Mitunternehmen werden als Ausgleich    bisweilen Provisionen bezahlt, um angefallene Akquisekosten abzudecken. Eine Provision bis zu 10&nbsp;% des    Auftragsvolumens ist denkbar. Dies wird geringer bewertet als die Weitergabe von Aufträgen ohne Provision, weil es    nicht dazu führt, dass der Auftrag zur ProduzentIn/DienstleisterIn mit der besten Qualität bzw. Gemeinwohlbilanz    kommt.</p><p><strong>Abgrenzungen zu anderen Indikatoren </strong></p><p>Der Indikator ist verbunden mit dem    Indikator D1 (Ethischer Verkauf) – Mittragen der Brancheninitiative für ethisch-kooperatives Marketing.</p>';

indicators[8].footnotes.content = '<pre><a rel="nofollow" title="" href="https://wiki.gwoe.net/#_ftnref1">[1]</a> <a rel="nofollow" class="external-link" href="http://www.cdu.de/doc/pdfc/091026-koalitionsvertrag-cducsu-fdp.pdf">http://www.cdu.de/doc/pdfc/091026-koalitionsvertrag-cducsu-fdp.pdf</a></pre>';

indicators[8].goals.content = 'Die Gemeinwohl-Ökonomie baut auf systemischer Kooperation auf, der Kooperation mit Menschen und mit der Natur. Daraus ergibt sich die Solidarität mit Mitunternehmen als ein grundlegender Wert für unternehmerisches Handeln. Das Ziel sind überlebensfähige Verhaltensweisen, die Krisen, anstatt sie zu produzieren, solidarisch abfedern helfen. Wir brauchen einander. Mit dem Wahrnehmen der Verbundenheit aller und der daraus resultierenden Kooperation werden Unternehmen ihre Kreativität besser entfalten, am Markt neue Möglichkeiten und mehr Chancen erfahren sowie Krisen besser abfedern können als in einer konkurrierenden Ellbogengesellschaft. Unternehmen werden für kooperatives und solidarisches Verhalten belohnt. Aus Kontrakurrenz wird eine Lern-, Entwicklungs- und Solidargemeinschaft der Unternehmen.';

indicators[8].implementationHelp.content = '<p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Allgemein:</strong></p><p>Kooperationswissen und die    theoretischen Grundlagen zu Konkurrenz und Kooperation sollten von allen Menschen im Betrieb angeboten werden.    Anbieten würde sich eine Kooperationsbeauftragte oder besser ein Team für Kooperationsfragen und Solidarität: im    Unternehmen, innerhalb der Branche, in der Zulieferkette und in der gesamten Wirtschaft.</p><p><strong>Zu den    einzelnen Aspekten:</strong></p><p>1) <strong>Werbung/Marketing:</strong> Die Pionier-Unternehmen der    Gemeinwohl-Ökonomie könnten den Beginn machen und über die IT-Gruppe und später die IT-Unternehmen unter den    PionierInnen erste Prototypen in Auftrag geben. Diese Prototypen können für alle Branchen entwickelt und    ausdifferenziert werden. Denkbar ist sogar eine gesetzliche Grundlage, jedenfalls aber Branchenvereinbarungen.</p><p>2) <strong>Transparente Kostenkalkulation: </strong>Sämtliche Bezugsquellen und die bezahlten Einkaufspreise werden    offengelegt.</p><p>3) <strong>Know-how:</strong> Offenlegung des Quellcodes sowie der technischen Grundlagen von    Innovationen, auch von sozialen Technologien. Wer die anderen gar einschult, von Betriebsführungen und    brancheninternen Fortbildungen bis hin zu Gewaltfreier Kommunikation und Soziokratie, erhält Gemeinwohl-Punkte.</p><p>4) <strong>Arbeitskräfte:</strong> Je nach Auftragslage überlassen sich befreundete Unternehmen gegenseitig    Arbeitskräfte. Auf diese Weise lernen einander die Mitunternehmen auch besser kennen.</p><p>5)    <strong>Aufträge:</strong> Ein einfaches Beispiel: Die meisten Hotels einer Stadt sind ausgebucht. Anstatt den    anfragenden KundInnen zu sagen „Wir sind voll“, wird das nächstgelegene Hotel mit einem freien Zimmer genannt. Wenn    Unternehmen für einen Auftrag nicht so kurzfristig zusätzliche Arbeitskräfte einstellen können, wissen sie stets,    welches befreundete Unternehmen den Auftrag stattdessen übernehmen könnte, oder – „höchste Stufe“ – Unternehmen    könnten zwar weitere Arbeitskräfte einstellen und wachsen, wollen dies aber nicht, weil sie ihre „optimale Größe“    erreicht haben. Sie geben zusätzliche Aufträge lieber an Mitunternehmen weiter.</p><p>6)    <strong>Finanzmittel:</strong> Bei saisonal schwankender Liquidität können sich Unternehmen gegenseitig stützen und    über das Jahr einen Liquiditätsausgleich praktizieren; bei konstant hoher Liquidität können an Mitunternehmen auch    zinsfreie Kredite vergeben werden oder AnteilseignerInnen (ohne Dividendenanspruch), was die Abhängigkeit der    Unternehmen von Banken und Börsen und damit die Kapitalkosten verringert.</p><p>7) <strong>Kooperative    Krisenbewältigung:</strong> Bricht der Markt ein (Nachfragerückgang) oder treten plötzlich mehrere neue Anbieter auf    (Angebotsschwemme), reagieren Unternehmen heute mit einer Verschärfung des Wettbewerbs. In Zukunft könnten sie sich    an einem Branchentisch versammeln und gemeinsam nach Lösungen suchen, wie zum Beispiel: a) Reduktion der Arbeitszeit    aller, b) Abbau einzelner Arbeitsplätze bei allen, c) solidarische Umschulung eines Teils der Beschäftigten, d)    solidarische Spezialisierung eines Betriebes, e) unterstützte Schließung eines Betriebes, …<span            style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></p>';

indicators[8].impulsQuestions.content = '<ul><li>In welchen Bereichen arbeiten wir mit anderen Unternehmen zusammen? In der eigenen Branche, in anderen Branchen?</li><li>Was bedeutet es für unser Unternehmen, vom herrschenden Konkurrenzdenken abzuweichen und in möglichen Kooperationen zu denken?</li><li>Welche Beispiele für solidarisches Handeln mit Mitunternehmen gibt es bei uns? Wie stehen wir zu kooperativer Krisenbewältigung?</li><li>Welche Möglichkeiten der gegenseitigen finanziellen Unterstützung mit Mitunternehmen werden praktiziert?</li><li>Wie weit werden finanzielle und technische Informationen offengelegt? In welcher Form?</li><li>Welche Überlegungen gibt es zu kooperativem Marketing mit anderen Unternehmen?</li><li>In welchen Bereichen wird Wissen weitergegeben, um gegenseitiges Lernen zu unterstützen?</li></ul>';

indicators[8].moreinfo.content = '<p><strong>Bücher zu Grundlagen:</strong></p><ul><li>Alfie Kohn: „No Contest. The Case against Competition. Why we lose in our race to win“, Houghton Mifflin Company, Boston/New York.</li><li>Joachim Bauer: „Das Prinzip Menschlichkeit“, Hoffmann und Campe, Hamburg.</li><li>Joachim Bauer (2008): „Das kooperative Gen. Abschied vom Darwinismus“, Hoffmann und Campe, Hamburg.</li><li>Gerald Hüther (2009): „Was wir sind und was wir sein könnten“, S. Fischer, Frankfurt a. Main.</li><li>Richard Sennett (2012): "Zusammenarbeit: Was unsere Gesellschaft zusammenhält", Carl Hanser Verlag, München</li></ul><p>&nbsp;</p><p><strong>Bücher zu Solidarischer Ökonomie:</strong></p><ul><li>Sven Giegold/Dagmar Embshoff (Hg) (2009): „Solidarische Ökonomie im globalisierten Kapitalismus“, VSA, Hamburg.<span style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></li><li>Elisabeth Voß/Netz für Selbstverwaltung und Selbstorganisation (Hg.) (2010): „Wegweiser Solidarische Ökonomie. Anders Wirtschaften ist möglich“, AG Spak, Wasserburg.</li></ul><p>&nbsp;</p><p><strong>Links</strong>:</p><ul><li>Solidarische Ökonomie:<a href="http://de.wikipedia.org/wiki/Solidarische_%C3%96konomie" class="external-link" rel="nofollow"> http://de.wikipedia.org/wiki/Solidarische_%C3%96konomie</a></li></ul><ul><li>Multi-Kooperative Mondragón: <a href="http://www.mondragon-corporation.com/" class="external-link" rel="nofollow">http://www.mondragon-corporation.com</a></li><li>Blumauer Manifest: <a href="http://www.blumau.com/manifest.html" class="external-link" rel="nofollow">http://www.blumau.com/manifest.html</a></li></ul><p>&nbsp;</p><br><div><p><em>Redakteurin</em>: Eva Nagl-Pölzer <a href="mailto:consulting@nagl-poelzer.ocm" class="external-link" rel="nofollow">consulting@nagl-poelzer.com</a> (basierend auf der Vorarbeit von Christian Felber). <em>ExpertInnen</em>: Elisabeth Voß, Dagmar Embshoff, Sven Giegold, Paul Singer</p></div>';

indicators[9].bestPractices.content = '<strong>Cradle to Cradle:</strong> Artikel zum Konzept <a href="http://reset.to/knowledge/cradle-cradle-recycling-rund-gemacht" class="external-link" rel="nofollow">http://reset.to/knowledge/cradle-cradle-recycling-rund-gemacht</a>';

indicators[9].definition.content = '<p>Die derzeit global angebotenen und nachgefragten Produkte und Dienstleistungen übersteigen die vorhandenen Ressourcen    und die ökologische Tragkraft und Regenerierbarkeit der Erde. Bisher auf Effizienz und Teilaspekte (z.B.: Einsatz    nachwachsender Rohstoffe) abzielende Maßnahmen zeigen bisher nur kosmetische Effekte, welche unter anderem auf den    sogenannten Rebound-Effekt<a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540174#_ftn1" rel="nofollow">[1]</a>    zurückzuführen sind. Die notwendige Trendwende im Sinne einer massiven und absoluten Reduktion von    Ressourcenverbrauch, Emissionen und Rückständen findet nicht statt.</p><p>Ökologische Aspekte spielen zur Zeit in    der globalisierten Wirtschaft aufgrund von Konkurrenzdruck, mangelnder Nachfrage seitens der KonsumentInnen, noch    nicht &nbsp;&nbsp;vorhandenem Bewusstsein sowie begrenzten ökonomischen und zeitlichen Ressourcen eine sekundäre    Rolle in der Gestaltung von Produkten und Dienstleistungen. Eine reine „Ökologisierung“ des gegenwärtig konsumierten    Ausmaßes an Gütern und Dienstleistungen alleine würde das Problem des globalen Überkonsums nicht lösen. Ein Wandel    hin zu einer ökologisch tragfähigen Wirtschaft muss auch in der KundInnensphäre &nbsp;liegende Aspekte im Sinne    einer maß- und sinnvollen Nutzung (siehe auch E1) sowie eine absolute Reduktion der konsumierten Gütern mit    einschließen.</p><p><strong>Belastungsgrenzen des Planeten:</strong> Studie des Stockholm Resilienz Centre und der    Australian National University - <a href="http://en.wikipedia.org/wiki/Planetary_boundaries" class="external-link"                                        rel="nofollow">wikipedia-Eintrag</a> ;<a            href="http://www.ted.com/talks/lang/en/johan_rockstrom_let_the_environment_guide_our_development.html"            class="external-link" rel="nofollow">TED-Talk mit Johan Rockstrom</a></p>';

indicators[9].details.content = '<div class="wiki-content">    <ul>        <li>B2B (Business to Business) / B2C (Business to Customer): Die Kommunikation ökologischer Aspekte den            KundInnen ist im B2C Bereich tendenziell von höherer Relevanz als im B2B.        </li>    </ul></div><p><strong>Branchenspezifische Aspekte</strong></p><p align="left">Es ist - trotz der hohen Relevanz - sehr    schwierig Produkte / Dienstleistungen im Branchenvergleich zu beurteilen und belegbare Informationen hierzu zu    erlangen. Nachfolgende Tabelle, welche einen ersten Versuch darstellt, das Thema für &nbsp;einzelne Branchen zu    spezifizieren. Zug um Zug sollen bewertungsrelevante Aspekte, Branchenspezifika und Hintergrundinformationen ergänzt    werden und können fürs erste keinen Anspruch auf Vollständigkeit erheben. Die angeführten Studien beziehen sich oft    nur auf einen Aspekt und dürften nicht als alleiniges Kriterium verstanden werden. In den nächsten Jahren sollen    durch die Integration vieler Akteure wesentliche Studien gesammelt und wesentliche Erkenntnisse zusammengetragen    werden:</p><p>&nbsp;</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <th colspan="2" class="confluenceTh"><p>&nbsp;</p>                <p>Branche</p></th>            <th colspan="1" class="confluenceTh">Anmerkungen für die Bewertung / wesentliche ökologische Themenfelder                der Branche sowie deren Produkte und Dienstleistungen über den gesamten Lebenszyklus (Genese, Nutzung,                Entsorgung)            </th>            <th colspan="1" class="confluenceTh">Links zu Studien (Lebenszyklusanalysen, Produktvergleich, etc. )</th>        </tr>        <tr>            <td class="confluenceTd">A</td>            <td class="confluenceTd">Land- und Forstwirtschaft, Fischerei</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li>Deutsches Umweltministerium: <a                            href="http://www.bmu.de/themen/wirtschaft-produkte-ressourcen/produkte-und-umwelt/produktbereiche/lebensmittel/"                            class="external-link" rel="nofollow">CO²-Footprint von Lebensmittel </a> (inkl. Vergleich                        konventionell biologisch)                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd">B</td>            <td class="confluenceTd">Bergbau und Gewinnung von Steinen und Erden</td>            <td colspan="1" class="confluenceTd">Rezyklierung statt Exploration (Quellen folgen)</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>        </tr>        <tr>            <td class="confluenceTd">C</td>            <td class="confluenceTd">Verarbeitendes Gewerbe / Herstellung von Waren</td>            <td colspan="2" class="confluenceTd">auf dieser allgemeinen Ebenen können keine Aspekte hervorgehoben                werden, spezifischere Differenzierung in einzelnen Subbranchen notwendig - nachstehend eine Auswahl                einiger:            </td>        </tr>        <tr>            <td class="confluenceTd">&nbsp;</td>            <td class="confluenceTd">C10 Herstellung von Nahrungs- und Futtermitteln</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">Bundesverband Naturkost Naturwaren: <a                    href="http://www.n-bnn.de/cms/website.php?id=/de/projekte/nachhaltigkeit/bnn-nachhaltigkeitsmonitor.html&amp;sid=7fc94fb11f661d2e21b475a8c4192599"                    class="external-link" rel="nofollow">Nachhaltigkeitsmonitor</a></td>        </tr>        <tr>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">C13 Herstellung von Textilien / C14 Herstellung von Bekleidung</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>        </tr>        <tr>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">C18 Herstellung von Druckerzeugnissen; Vervielfältigung von bespielten                Ton-, Bild- und Datenträgern            </td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li>                        <a href="http://www.umweltbundesamt.de/produkte/beschaffung/buero/bueromaterial/papierprodukte.html"                           class="external-link" rel="nofollow">Informationen </a>des deutschen Umweltbundesamtes                    </li>                </ul>            </td>        </tr>        <tr>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">C21 Herstellung von pharmazeutischen Erzeugnissen</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li><strong>Janusinfo:</strong> <a href="http://www.janusinfo.se/environment" class="external-link"                                                       rel="nofollow">Evaluierung ökologischer Aspekte</a> von einer                        Vielzahl an Pharmazeutika                    </li>                </ul>            </td>        </tr>        <tr>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">C26 Herstellung von Datenverarbeitungsgeräten, elektronischen und                optischen Erzeugnissen            </td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd"><p><strong>Greenpeace:</strong> <a                    href="https://www.google.com/#hl=de&amp;tbo=d&amp;sclient=psy-ab&amp;q=greenpeace+green+it&amp;oq=greenpeace+green+it&amp;gs_l=hp.3..0l2j0i30l2.1613.6505.0.7194.19.16.0.3.3.0.366.2451.1j13j1j1.16.0...0.0...1c.1.2.hp.nEfvn-XnwFc&amp;pbx=1&amp;bav=on.2,or.r_gc.r_pw.r_qf.&amp;bvm=bv.41867550,d.Yms&amp;fp=e26f27df507c2910&amp;biw=1024&amp;bih=532"                    class="external-link" rel="nofollow">Guide for Greener Electronics</a></p>                <p>&nbsp;</p></td>        </tr>        <tr>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">C31 Herstellung von Möbeln</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li>                        <a href="http://www.umweltbundesamt.de/produkte/beschaffung/gebaeudeinnenausstattung/moebel.html"                           class="external-link" rel="nofollow">Informationen</a> des deutschen Umweltbundesamtes                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd">D</td>            <td class="confluenceTd">Energieversorgung</td>            <td colspan="1" class="confluenceTd"><p><strong>Strom:</strong> Treibhausgasemissionen (in Gramm) /                bereitgesteller Energie (kwh) - europäischer Durchschnitt (UCTE-MIX 2009: 431 g / kwh =                Branchendurchschnitt; Bewertung abgeleitet aus Metastudie Lebenszyklusanalysen - siehe rechts; mögliche                Herangehensweise z.b::</p>                <ul>                    <li>Vorbildlich &lt;30g</li>                    <li>Erfahren&lt;100 g</li>                    <li>Fortgeschritten&lt;200g</li>                    <li>Erste Schritte&nbsp; &lt; 431 g )</li>                </ul>            </td>            <td colspan="1" class="confluenceTd">                <ul>                    <li>                        <a href="http://www.vdi.de/fileadmin/vdi_de/redakteur_dateien/geu_dateien/FB4-Internetseiten/CO2-Emissionen%20der%20Stromerzeugung_01.pdf"                           class="external-link" rel="nofollow">VDI-Studie: CO²-Emissionen in der Stromerzeugung</a>                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd">E</td>            <td class="confluenceTd">Wasserversorgung, Abwasser und Abfallentsorgung und Beseitigung von                Umweltverschmutzung            </td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd"><strong>Wasser- und Abwasserversorgung:</strong> Vergleichende <a                    href="http://www.waterbenchmark.org/content/pdf/EBC_IB2010_external_report.pdf"                    class="external-link" rel="nofollow">Studie</a> der "European Benchmarking Co-operation" zu            </td>        </tr>        <tr>            <td class="confluenceTd">F</td>            <td class="confluenceTd">Baugewerbe / Bau</td>            <td colspan="1" class="confluenceTd"><p><strong>Bewertung Heizwärmeverbrauch Immobilien (in kwh /                m2): </strong>Hier gilt es natürlich das Immobilien-Portfolio eines Unternehmen mitzubedenken (ein                Unternehmen, welches Altbestand saniert sollte besser beurteilt werden, als ein Unternehmen das nach                Bauvorschrift neue Gebäude baut). Folglich ist bei reinem Altbaubestande eine Orientierung am                durchschnittsverbrauch möglicherweise sinnvoller als am Energieausweiss. Nachfolgendes dienst als erste                Orientierung und nicht als alleinig ausschlaggebender ökologischer Aspekte:</p>                <ul>                    <li>Vorbildlich:&nbsp;Plusenergiehaus, Nullenergiehaus; Passivhaus (&lt;10 kwh / m²)</li>                    <li>Erfahren: Niedrigstenergiehaus (&lt;25 kwh / m²)</li>                    <li>Fortgeschritten: Niedrigenergiehaus (&lt;50 kwh / m²)</li>                    <li>Erste Schritte: über Bauvorschrift (rd. 80 kwh / m²)</li>                </ul>            </td>            <td colspan="1" class="confluenceTd"><strong>Gebäudelabel-Studie:</strong> longlife comparision of worldwide                certification systems&nbsp; for sustainable buildings - <a                        href="http://www.longlife-world.eu/res/dnl/en/TT18.149.pdf" class="external-link"                        rel="nofollow">englisch</a></td>        </tr>        <tr>            <td class="confluenceTd">G</td>            <td class="confluenceTd">Handel / Instandhaltung und Reparatur von Kraftfahrzeugen</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd"><a href="http://www.vcd.org/vcd_auto_umweltliste.html"                                                    class="external-link" rel="nofollow">Auto-Umweltliste</a> des VCD            </td>        </tr>        <tr>            <td class="confluenceTd">H</td>            <td class="confluenceTd">Verkehr und Lagerei</td>            <td colspan="1" class="confluenceTd">Bewertung kann zumindest zu Teilaspekten von Studie rechts abgeleitet                werden            </td>            <td colspan="1" class="confluenceTd">                <ul>                    <li><a href="http://www.ecotransit.org/index.de.html" class="external-link" rel="nofollow">EcoTransit-Rechner</a>                        zur Ermittlung des Energieverbrauchs und der Emissionsdaten einer weltweiten Transportkette;                    </li>                    <li><strong>EcoTransit-Studie:</strong><a                            href="http://www.ecotransit.org/download/ecotransit_background_report.pdf"                            class="external-link" rel="nofollow"> "Ecological Transport Information Tool for Worldwide                        Transports</a> (ab S.36 Ergebnisse im Detail)                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd">I</td>            <td class="confluenceTd">Gastgewerbe / Beherbergung und Gastronomie</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li><a href="http://www.oegut.at/downloads/pdf/e_kennzahlen-ev-dlg_zb.pdf" class="external-link"                           rel="nofollow">ÖGUT-Studie "Kennzahlen zum Energieverbrauch in Dienstleistungsgebäuden"</a>                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd">J</td>            <td class="confluenceTd">Information und Kommunikation</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>        </tr>        <tr>            <td class="confluenceTd">K</td>            <td class="confluenceTd">Erbringung von Finanz- und Versicherungsdienstleistungen</td>            <td colspan="1" class="confluenceTd">siehe Indikator B1</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li>                        <a href="http://ethsi.net/web/index.php?option=com_content&amp;task=view&amp;id=17&amp;Itemid=31"                           class="external-link" rel="nofollow">EthSi</a> (spanisches Indikatorenset für Versicherungen)                    </li>                </ul>            </td>        </tr>        <tr>            <td class="confluenceTd">L</td>            <td class="confluenceTd">Grundstücks und Wohnungswesen</td>            <td class="fs20 ff2 cf3 confluenceTd" colspan="1">siehe F</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>        </tr>        <tr>            <td class="confluenceTd">M</td>            <td class="confluenceTd">Erbringung von freiberuflichen, wissenschaftlichen und technischen                Dienstleistungen            </td>            <td colspan="1" class="confluenceTd">in erster Linie büroökologische Aspekte (Strom, Wärme, Mobilität,                etc.)            </td>            <td colspan="1" class="confluenceTd">Beratungsdienstleistungen: neben büroökologischen Aspekten auch erste                Orientierung beispielsweise am <a                        href="http://www.greenmeetings.umweltzeichen.at/userfiles/files/UZ62_R2a_Green%20Meetings%20und%20Green%20Events_2012.pdf"                        class="external-link" rel="nofollow">Umweltzeichen Green Meetings - Green Events</a> möglich            </td>        </tr>        <tr>            <td class="confluenceTd">O</td>            <td class="confluenceTd">Öffentliche Verwaltung, Verteidigung, Sozialversicherung</td>            <td colspan="1" class="confluenceTd">Leitfaden für Gemeinden ist in Ausarbeitung</td>            <td colspan="1" class="confluenceTd">-</td>        </tr>        <tr>            <td class="confluenceTd">P</td>            <td class="confluenceTd">Erziehung und Unterricht</td>            <td colspan="1" class="confluenceTd">Leitfaden für Universität ist in Ausarbeitung</td>            <td colspan="1" class="confluenceTd">-</td>        </tr>        <tr>            <td class="confluenceTd">Q</td>            <td class="confluenceTd">Gesundheits und Sozialwesen</td>            <td colspan="1" class="confluenceTd">gegenwärtig von geringerer Bedeutung</td>            <td colspan="1" class="confluenceTd">&nbsp;</td>        </tr>        <tr>            <td class="confluenceTd">R</td>            <td class="confluenceTd">Kunst, Unterhaltung und Erholung</td>            <td colspan="1" class="confluenceTd">gegenwärtig von geringerer Bedeutung</td>            <td colspan="1" class="confluenceTd">Erste Orientierung beispielsweise am <a                    href="http://www.greenmeetings.umweltzeichen.at/userfiles/files/UZ62_R2a_Green%20Meetings%20und%20Green%20Events_2012.pdf"                    class="external-link" rel="nofollow">Umweltzeichen Green Meetings - Green Events</a> möglich            </td>        </tr>        <tr>            <td class="confluenceTd">S</td>            <td class="confluenceTd">Erbringung von sonstigen Dienstleistungen</td>            <td colspan="1" class="confluenceTd">siehe M</td>            <td colspan="1" class="confluenceTd">-</td>        </tr>        <tr>            <td class="confluenceTd">T</td>            <td class="confluenceTd">Private Haushalte</td>            <td colspan="1" class="confluenceTd">für Matrix sind Privathaushalte gegenwärtig nicht relevant - eine                Annäherung des ökologischen Auswirkungen - siehe&nbsp;<a href="http://www.footprint.at"                                                                         class="external-link" rel="nofollow">www.footprint.at</a>&nbsp;            </td>            <td colspan="1" class="confluenceTd">&nbsp;</td>        </tr>        <tr>            <td class="confluenceTd">U</td>            <td class="confluenceTd">Exterritoriale Organisationen und Einrichtungen</td>            <td colspan="1" class="confluenceTd">derzeit geringe Bedeutung</td>            <td colspan="1" class="confluenceTd">-</td>        </tr>        <tr>            <td class="confluenceTd">V</td>            <td class="confluenceTd">Logistik und Transport</td>            <td colspan="1" class="confluenceTd">siehe H</td>            <td colspan="1" class="confluenceTd">-</td>        </tr>        <tr>            <td class="confluenceTd">W</td>            <td class="confluenceTd">Konsumgüter (Produktion und Vertrieb)</td>            <td colspan="1" class="confluenceTd">von jeweiligem Gut abhängig - weitere Differenzierung notwendig</td>            <td colspan="1" class="confluenceTd">                <ul>                    <li><strong>Label-Datenbank:</strong> Übersicht über <a href="http://www.label-online.de/"                                                                            class="external-link"                                                                            rel="nofollow">Labels</a> inklusive                        Hindergrundinfos und Bewertung                    </li>                </ul>            </td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p><strong><u>Abgrenzung zu anderen Indikatoren</u><br></strong></p><p align="left"><strong>D3 zu C3    /&nbsp; E3 / A1: </strong>Eine grafische Darstellung wird in den kommenden Wochen ins WIKI gestellt</p>';

indicators[9].footnotes.content = '<p><a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540174#_ftnref1" rel="nofollow">[1]</a> Madlener, R; Alcott, B. 2007: Steigerung der Effizienz: Problem oder Lösung; Energiewirtschaftliche Tagesfragen 57. Jg, Heft 10; <a href="http://www.blakealcott.org/pdf/et-problem-oder-loesung.pdf" class="external-link" rel="nofollow">http://www.blakealcott.org/pdf/et-problem-oder-loesung.pdf</a></p><p><a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540174#_ftnref2" rel="nofollow">[2]</a>Produktwerbung zwischen Wahrheit und Täuschung &nbsp;&nbsp;&nbsp;<a href="http://www.verbraucherfuersklima.de/cps/rde/xchg/projektklima/hs.xsl/blicken_sie_noch_durch.htm" class="external-link" rel="nofollow">http://www.verbraucherfuersklima.de/cps/rde/xchg/projektklima/hs.xsl/blicken_sie_noch_durch.htm</a></p><p><a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540174#_ftnref3" rel="nofollow">[3]</a> P / D = Produkte und Dienstleistungen</p>';

indicators[9].goals.content = '<p>„Es gilt zumindest ein Quartett von Bedingungen der ökologischen Nachhaltigkeit zu beachten: Konsistenz, Effizienz,    Suffizienz und Resilienz. Unter Konsistenz-Bedingung wird die Notwendigkeit verstanden, alle (wirtschaftlichen)    Tätigkeiten so zu gestalten, dass sie sich mittelfristig in natürliche Kreisläufe einfügen können, also ungiftig,    erneuerbar, abbaubar,… sind. (Kreislaufwirtschaft, Cyclonomy oder das „cradle to cradle-Konzept“ (C2C) konzentrieren    sich auf diese Aspekte.) Unter Effizienz-Bedingung wird die Notwendigkeit verstanden, Energie, Material, Flächen    (und Geld-Mittel) effizient einzusetzen, d.h. möglichst viel Nutzung pro eingesetztem Gut zu erzielen, da diese    begrenzt sind. Unter Suffizienz-Bedingung (siehe Exkurs weiter unten) wird die Notwendigkeit verstanden, mit dem    physisch Vorhandenen auszukommen. Dies kann pro Haushalt, pro Nationalstaat, aber am sinnvollsten natürlich pro    Planet betrachtet werden. Unter Resilienz–Bedingung wird die Notwendigkeit verstanden, das Puffervermögen unserer    Systeme (natürliche wie technische oder wirtschaftliche) soweit zu festigen, dass die Systeme auch bei Störungen    halbwegs stabil bleiben können. Zur Resilienz der Ökosysteme tragen ganz entscheidend Artenvielfalt, Boden- und    Wasserqualität bei. Auch bei technischen und wirtschaftlichen Systemen ist Vielfalt ein stabilisierender Faktor,    ebenso wie Transparenz und der Grad der Beteiligung aller Betroffenen.“ (Plattform Footprint: Die vier Säulen -    Zukunftsfähig statt nachhaltig!; <a href="http://www.footprint.at/index.php?id=8032" class="external-link"                                        rel="nofollow">http://www.footprint.at/index.php?id=8032</a>)</p><p>Das Produkt    / Dienstleistungsportfolio eines Unternehmens sollte folglich diesen Anforderungen mit folgender grober Zielsetzung    entsprechen: Unternehmen bieten im Branchenvergleich ökologisch hochwertige Produkte / Dienstleistungen an und    ermöglichen und fördern eine möglichst suffiziente, maßvolle Nutzung sowie sinnvolle Anwendung Ihrer Produkte und    Dienstleistungen. Belohnt wird eine aktive Herangehensweise in Bezug auf alle drei Kriterien, wobei Unternehmens-    und Branchenspezifika große Bedeutung für die Relevanz der einzelnen Aspekte haben (siehe weiter unten).</p><ul>    <li><strong>Hinsichtlich ökologischer Aspekte überdurchschnittliche Produkte / Dienstleistungen im Vergleich zu        anderen MitwerberInnen bzw. alternative Möglichkeiten mit vergleichbarer Bedürfnisbefriedigung (Effizienz und        Konsistenz):</strong> Zu berücksichtigende Aspekte reichen von Ressourcen- und Energieverbrauch, der Vermeidung        kritischer Substanzen, Rezyklierbarkeit &nbsp;bis hin zur Schließung von Produktions-Stoffkreisläufen, etc. Hier        gilt es, diese Produkte immer im Vergleich zu sämtlichen Alternativen, die auf eine ähnliche        Bedürfnisbefriedigung &nbsp;abzielen zu bewerten Ein Sprit sparender SUV kann folglich nicht mit schonenderen        Mobilitätsvarianten konkurrieren (z.B.: Zug, Bahn öffentliche Verkehrsmittel, Zug und Bahn ist mEA das Gleiche        ). Gewisse Produkte und Dienstleistungen können unter diesem Gesichtspunkt auch bei entsprechender Gestaltung        aufgrund den Produkten / Dienstleistungen inhärenten ökologischen Folgewirkungen kaum eine positive Beurteilung        nach sich ziehen (z.B.: Fernreisen). Demgegenüber sind Produkte und Dienstleistungen mit einer per se        ökologischen Grundausrichtung dementsprechend hoch zu bewerten (Erzeugnisse aus biologischer Landwirtschaft,        Erneuerbare Energien, Null-Energiehäuser, Umweltforschung- und beratung; etc.)    </li>    <li><strong>Aktive Gestaltung der Rahmenbedingungen für suffiziente Konsummuster (Suffizienz):</strong> Hierunter        fallen Aspekte, welche eine suffiziente Bedürfnisbefriedigung in den Vordergrund rücken (Verlängerung der        Produktnutzung, Forcierung gemeinschaftliche Produktnutzung, Integration der Kunden in Re- und        Upcycling-Prozesse, Vermeidung kritischer Einsatzgebiete der Produkte und Dienstleistungen). Produkte /        Dienstleistungen, die in den Absatzmärkten des Unternehmens durch eine Übernutzung charakterisiert sind (z.B.:        fossile Energieträger, tierische Produkte) können demnach nur &nbsp;mit einer geringen Punktezahl bewertet        werden. Umgekehrt sind Produkte und Dienstleistungen, denen eine &nbsp;&nbsp;suffiziente Nutzung inhärent &nbsp;ist,        positiv zu beurteilen (z.B.: Geschäftsmodelle, welche auf gemeinschaftlicher Nutzung, Re- und Upcycling und        ähnlichem basieren)    </li>    <li><strong>Aktive Kommunikation ökologischer Aspekte:</strong> Bewusstsein über ökologische Aspekte von Produkten        und Dienstleistungen den KundInnen gegenüber ist gegenwärtig schwach ausgeprägt. Eine aktive        Kommunikationspolitik, die die KundInnen mit einbezieht, kann einen kulturellen Wandel zusätzlich stimulieren.        Die transportierten Informationen sollten jedoch konsistent mit der ökologischen Qualität der Produkte /        Dienstleistungen sein und sich klar von Methoden des Green Washing[2] distanzieren.    </li></ul><p>Je nach Branche können hierbei unterschiedliche Aspekte in ihrer Gewichtung von Bedeutung sein: Bei Produkten    beispielsweise die Reduktion der ökologischen Auswirkungen in der Herstellung und Nutzung (Energieverbrauch,    Emissionen) oder die Erhöhung der Lebensdauer durch langlebige Konstruktionen sowie umfassende    Reparaturdienstleistungen. Dienstleister verfügen, wenngleich durch einen geringeren direkten Ressourcenverbrauch    gekennzeichnet, über eine großes ökologisches Gestaltungspotential. Bei einer Bank beispielsweise über das „was“    finanziert wird, bei einem Unternehmensberater darüber , „wer“ in „welchen inhaltlichen Fragestellungen“ beraten    wird, bei Weiterbildungsprogrammen und Veranstaltungen etwa über die Mobilitätsauswirkungen der TeilnehmerInnen oder    die konkreten Bildungsinhalte. Zukünftig gilt es die relativ vage umschriebenen Messkriterien auf Branchen- und    Produktebene näher zu definieren.</p>';

indicators[9].implementationHelp.content = 'Auseinandersetzung und Umsetzung müssen an die Unternehmensdeterminanten angepasst werden: Für einen produzierenden Betrieb stehen andere Fragestellungen im Vordergrund als für ein Dienstleistungsunternehmen. Ansätze zur Evaluierung produktökologischer Aspekte sind breitgefächert. Eine Übersicht bietet das Handbuch "Produktbezogene Umweltinformationssysteme (PUIS) in Theorie und Praxis" des Programmes „Fabrik der Zukunft“ des österreichischen BMVIT (<a href="http://www.fabrikderzukunft.at/puis/" class="external-link"   rel="nofollow">http://www.fabrikderzukunft.at/puis/</a>). Jedes Unternehmen sollte sich mit den ökologischen Aspekten seiner Produkte / Dienstleistungen auseinandersetzen und wesentliche Schwerpunkte identifizieren.';

indicators[9].impulsQuestions.content = '<ul><li>Welche ökologischen Aspekte sind bei den Produkten / Dienstleistungen von hoher Relevanz?</li><li>Welche Maßnahmen werden gesetzt, um die ökologischen Auswirkungen der Produkte (Energie, Ressourcenverbrauch, Emissionen, Biodiversität, Langlebigkeit, etc.) über den gesamten Lebenszyklus zu reduzieren?</li><li>Welche ökologischen Aspekte werden bei der Gestaltung der Dienstleistung berücksichtigt (ökologische Inhalte, ökologische Aspekte in der Kundensphäre, etc)?</li><li>Inwiefern unterscheiden sich die Produkte / Dienstleistungen hinsichtlich ökologischer Aspekte von MitwerberInnen?</li><li>In welchem Zusammenhang stehen die Produkte &nbsp;und Dienstleistungen mit nachhaltiger Nutzung und suffizientem Konsum?</li></ul>';

indicators[9].moreinfo.content = '<p>In der Weiterentwicklung wird insbesondere zu &nbsp;&nbsp;diesen Indikatoren eine Differenzierung auf Branchenebene    angestrebt – siehe weiter oben. Weiters können ökologische Branchenstandards (Label, etc.) zu einer Orientierung    hilfreich sein: u.a.&nbsp; <a href="http://www.bewusstkaufen.at/label-kategorien.php" class="external-link"                                  rel="nofollow">http://www.bewusstkaufen.at/label-kategorien.php</a> <a            href="http://www.label-online.de/" class="external-link" rel="nofollow">http://www.label-online.de/</a> <a            href="http://www.buy-smart.info/downloads/downloads4" class="external-link" rel="nofollow">http://www.buy-smart.info/downloads/downloads4</a>    (für weitere siehe A1 - Ethisches Beschaffungswesen)</p><ul>    <li>Webportal ProBas: Bibliothek für Lebenszyklusdaten des deutschen Umweltbundesamtes &nbsp;<a            href="http://www.probas.umweltbundesamt.de/php/index.php" class="external-link" rel="nofollow">http://www.probas.umweltbundesamt.de/php/index.php</a>&nbsp;    </li>    <li>Business Ressource Intensity Index des SERI <a href="http://www.brix-index.net/brix-lca-software.php"                                                       class="external-link" rel="nofollow">http://www.brix-index.net/brix-lca-software.php</a>    </li></ul>';

indicators[10].bestPractices.content = '';

indicators[10].definition.content = '<p><span><strong>Zum Kriterium: Zugang zu Informationen, Produkten, Dienstleistungen</strong></span></p><p><span>Generell geht es darum</span></p><ul>    <li><span>&nbsp;</span><span>die KundInnen-Gruppen, die es schwerer haben, einen Zugang zu für sie nützlichen Informations-, Produkt- und Leistungsangeboten zu erhalten, überhaupt kennenzulernen.&nbsp;</span>    </li>    <li><span>&nbsp;</span><span>die KundInnen-Gruppen zu identifizieren, für die das Angebot besonders nützlich sein könnte.</span>    </li>    <li><span>&nbsp;</span><span>und für diese KundInnen-Gruppen Zugangserleichterungen zu schaffen.</span></li></ul><p><span>Das kann in der Praxis auf sehr unterschiedliche Art und Weise passieren:&nbsp;</span></p><p><span>Beispiel 1: Sind meine Produkte bspw. für Menschen mit Sehschwäche besonders nützlich, dann ist eine Website mit skalierbarer Schrift und gut strukturiertem Text wichtig und die Angabe von Verkaufsstellen, die für Menschen mit Sehschwäche besonders geeignet sind. Ggf. kann ich durch Modifikationen an meinem Produkt / an der Verpackung eine noch bessere Bedienbarkeit für diese KundInnen-Gruppe erreichen. Und all das ist idealerweise im Vertrieb geschult worden und die Betreuung dieser KundInnen-Gruppen ist gelebter Alltag, dem auch angemessene Ressourcen zur Verfügung stehen.</span></p><p><span>Beispiel 2: Biete ich einen besonders stromsparenden Kühlschrank an, der für einkommensschwache Haushalte attraktiv ist, dann kann ich für diese KundInnen ein Finanzierungsmodell entwickeln, wie die eingesparten Stromkosten zur Finanzierung des Kühlschrankes genutzt werden können. &nbsp;</span></p><p>Die KundInnen-Gruppe einkommensschwacher Haushalte ist für die meisten Anbieter von Produkten und    Dienstleistungen für Konsumenten relevant und muss daher in besonderem Maße bedacht werden. Im Sinne eines    gemeinwohlorientierten Wirtschaftens ist es nicht zielführend, ein Billigangebot zu kreieren, das andere    Nachhaltigkeitsaspekte über Bord wirft. Vielmehr geht es darum, einen intelligenten Zugang zu guten Produkten zu    bieten.</p><p>&nbsp;</p><p><span><strong>Zu den vier Dimensionen von Barrierefreiheit:</strong></span></p><p><span>Generell betrifft die Barrierefreiheit den Zugang zu Informationen, den Ort und Vorgang des Kaufs und die Nutz- und Bedienbarkeit des Produktes/der Dienstleistung.</span></p><ul>    <li><span>&nbsp;</span><span>physische Dimension</span></li>    <li><span>&nbsp;</span><span>relevant für KundInnen mit Mobilitätseinschränkungen / körperlichen Behinderungen. Fragen dazu: ist mein Ladenlokal rollstuhlgerecht? Kann ein Mensch mit Bewegungseinschränkungen das Produkt uneingeschränkt bedienen und nutzen (und die Verpackung öffnen)?</span>    </li>    <li><span>&nbsp;</span><span>visuelle Dimension</span></li>    <li><span>&nbsp;</span><span>relevant für KundInnen mit Sehschwäche. Fragen dazu: Kann ein Mensch mit Sehschwäche sich gut über mein Produkt informieren? Kann er das Produkt uneingeschränkt bedienen und nutzen?</span>    </li>    <li><span>&nbsp;</span><span>sprachliche Dimension</span></li>    <li><span>&nbsp;</span><span>relevant für KundInnen mit eingeschränktem Sprech- und Hörvermögen. Relevant auch für Menschen mit Migrationshintergrund. Fragen dazu: Biete ich Menschen, die sich nur über Gebärdensprache oder schriftlich verständigen können, die Möglichkeit, sich gut über meine Produkte zu informieren und einen guten Service im Verkauf? Ebenso Menschen, die nicht die Landessprache sprechen?</span>    </li>    <li><span>&nbsp;</span><span>intellektuelle Dimension</span></li>    <li><span>&nbsp;</span><span>relevant für KundInnen mit Lernschwierigkeiten. Frage dazu: sind die Informationen zu meinen Produkten so aufbereitet, dass sie von Menschen mit Lernschwierigkeiten verstanden werden können?</span>    </li></ul><p><span>Hinsichtlich der aufstrebenden Form des „Social Entrepreneurship“<sup>4</sup>&nbsp;</span>gibt es einige    Überschneidungen. Produkte und Dienstleistungen, welche oben angesprochene Barrieren reduzieren sind vielfach im    Geschäftsmodell von Social Entrepreneurs verankert und erfüllen somit wesentliche Teilaspekte. Dennoch kann und soll    dieser Indikator nicht generell mit Social Entrepreneurship gleichgesetzt werden, da derartige Geschäftsmodelle    oftmals auch auf sozialen oder ökologischen Aspekten abseits der KundInnensphäre beruhen bzw. generalisierend auf    sämtliche Branchen übertragbar sind / übertragen werden sollen.</p>';

indicators[10].details.content = 'Jedes zusätzlich erfüllte Kriterium führt zu einer Höherstufung des Unternehmens in dem entsprechenden Sub-Indikator.<br/><br/>* Benachteiligte KundInnen-Gruppen: beispielsweise einkommensschwache Haushalte, Menschen mit Lernschwierigkeiten, Menschen mit körperlichen Beeinträchtigungen, ältere Menschen, MigrantInnen, queere Menschen. Und auch: NGOs, gemeinnützige Einrichtungen, zivilgesellschaftliche Projekte und Initiativen. Und auch: nichtkommerzielle Einrichtungen aus den Bereichen Bildung, Gesundheits- und Sozialwesen.<br/><br/>** Förderungswürdige Strukturen: kleine und mittelständische Unternehmen (KMU), regionale Unternehmen und Unternehmen, die sich besonders für das Gemeinwohl engagieren<br/><p><span><strong>Anwendung/Relevanz</strong></span></p><p><span>Das <strong>erste Kriterium (Zugang zu Informationen,    Produkten, Dienstleistungen)</strong></span></p><p><span>&nbsp;gilt für alle Unternehmen,</span></p><ul>    <li><span>&nbsp;</span><span>mit einem direkten Kontakt zu VerbraucherInnen</span></li>    <li><span>&nbsp;</span><span>die Konsumgüter in Verkehr bringen / Dienstleistungen anbieten, die direkt von VerbraucherInnen genutzt werden können, die aber über Zwischenhändler verkauft werden und daher keinen direkten Kontakt zu VerbraucherInnen haben</span>    </li>    <li><span>&nbsp;</span><span>die Produktionsgüter / reine B2B-Dienstleistungen anbieten, die auch von NGOs, gemeinnützigen Einrichtungen, zivilgesellschaftlichen Projekten und Initiativen, und nicht-kommerziellen Einrichtungen aus den Bereichen Bildung, Gesundheits- und Sozialwesen genutzt werden können.</span>    </li></ul><p><span>Entsprechend hat das Kriterium eine geringere Relevanz in reinen B2B-Branchen.</span></p><p>&nbsp;</p><p>    <span>Die Anwendung des <strong>zweiten Kriteriums (Unterstützung förderungswürdiger Strukturen)</strong> findet in allen B2B-Bereichen Anwendung, auch</span></p><ul>    <li><span>bei Unternehmen, die ihre P/D über Zwischenhändler verkaufen</span></li>    <li><span>bei Vorlieferanten oligopolisierter Märkte.</span></li></ul><p><span>Der Aspekt „gleichwertige Konditionen für KundInnen aus förderungswürdigen Strukturen“ meint, dass diese KundInnen das gleiche prozentuale Vertriebsergebnis liefern wie Großunternehmen. Somit soll sichergestellt werden, dass Großkunden nicht überproportional gefördert werden.</span></p><p>&nbsp;</p><p><span><strong>Branchenbesonderheiten</strong></span></p><p><span>Eine besondere Bedeutung hat dieser Indikator beim Einzelhandel, der naturgemäß die gesamte Breite der benachteiligten und nicht-benachteiligten Konsumentengruppen bedient. Für Einzelhandelsunternehmen gilt es, sich aktiv mit der Frage auseinanderzusetzen, für welche benachteiligte KundInnen-Gruppe sind die von mir angebotenen Waren besonders nützlich und wie kann ich dieser KundInnen-Gruppe einen einfacheren Zugang bieten: Wie kann ich also beispielsweise mein Ladenlokal so gestalten, dass sich Menschen mit körperlichen Beeinträchtigungen gut darin bewegen können.</span></p><p><span>Für Anbieter wichtiger Dienstleistungen (Banken, Energie, technische Kommunikationslösungen) ist der Indikator gleichermaßen von hoher Relevanz.</span></p><p><span><br></span></p><p><span><strong>Abgrenzung zu anderen Indikatoren</strong></span></p><ul>    <li><span>&nbsp;</span><span>Ethische Aspekte in den KundInnenbeziehungen (D1)</span></li>    <li><span>&nbsp;</span><span>Umgang mit ethisch bedenklichen KundInnen (D1)</span></li>    <li><span>&nbsp;</span><span>Informationen und Warnhinweise zur Verwendung der Produkte (D1)</span></li>    <li><span>&nbsp;</span><span>Ethische Aspekte des Produktlebenszyklus (E1)</span></li>    <li><span>&nbsp;</span><span>gesundheitliche Auswirkungen der angebotenen Leistungen (E1)</span></li>    <li><span>&nbsp;</span><span>Ethische Aspekte der Produktgenese (A1 - Lieferanten) (C1, C2, C4 - Mitarbeiter)</span>    </li>    <li><span>&nbsp;</span><span>Engagement in sozialen/zivilgesellschaftlichen Bewegungen, auch Spenden (E2)</span>    </li></ul><p>&nbsp;</p>';

indicators[10].footnotes.content = '<p><span><sup>1</sup></span><span> Der von SelbstvertreterInnen gewünschte Begriff für „Menschen mit geistiger Behinderung“</span></p><p><span><span style="text-decoration: underline;">&nbsp;</span></span></p><p><span><sup>2</sup></span><span> Begriffsklärung „queer“ siehe: <a        href="http://queer-lexikon.net/queer/queer" class="external-link" rel="nofollow">http://queer-lexikon.net/queer/queer</a></span></p><p><span><span style="text-decoration: underline;">&nbsp;</span></span></p><p><span><sup>3</sup></span><span> positive Skaleneffekte liegen dann vor, wenn mit steigender Menge die Grenzkosten sinken. Mehr dazu siehe: <a        href="http://de.wikipedia.org/wiki/Skaleneffekt" class="external-link" rel="nofollow"><span        style="text-decoration: underline;">http://de.wikipedia.org/wiki/Skaleneffekt</span></a></span></p><p>    <span><span style="text-decoration: underline;">&nbsp;</span></span></p><p><span><sup>4</sup></span><span> social entrepreneurship: Unternehmen, die sich durch ihr Tun für einen positiven sozialen und/oder ökologischen Wandel der Gesellschaft einsetzen. Bei ihrem unternehmerischen Handeln steht das Gewinnstreben gleichrangig zu den gesetzten gesellschaftlichen Zielen. Mehr dazu: <a        href="http://de.wikipedia.org/wiki/Social_Entrepreneurship" class="external-link" rel="nofollow"><span        style="text-decoration: underline;">http://de.wikipedia.org/wiki/Social_Entrepreneurship</span></a>&nbsp;</span></p>';

indicators[10].goals.content = '<p><span>In diesem Indikator wird dargestellt, wie sehr sich ein Unternehmen in sozialen Aspekten seiner KundenInnensphäre engagiert. Abgebildet wird die Übernahme sozialer Verantwortung in der Vertriebspolitik eines Unternehmens.</span></p><p><span>Maßgebend sind dabei diese beiden Fragestellungen:</span></p><p><span><br></span></p><p><span><strong>1.)    V.a. für Unternehmen im B2C-Bereich:&nbsp;<br></strong></span><br><strong>Biete ich benachteiligten    KundInnen-Gruppen einen vereinfachten und passenden Zugang zu den von mir angebotenen Informationen, Produkten und    Dienstleistungen?</strong></p><p><span>Benachteiligte KundInnen-Gruppen sind im Verbraucherbereich beispielsweise einkommensschwache Haushalte, Menschen mit Lernschwierigkeiten<sup>1</sup></span>,    Menschen mit körperlichen Beeinträchtigungen, ältere Menschen, MigrantInnen, queere Menschen<sup>2</sup>.&nbsp;Sonstige    benachteiligte KundInnen-Gruppen sind beispielsweise NGOs, gemeinnützige Einrichtungen, zivilgesellschaftlichen    Projekte und Initiativen. Und in einem erweiterten Sinne geht es um jegliche Arten von nichtkommerziellen    Einrichtungen aus den Bereichen Bildung, Gesundheits- und Sozialwesen.</p><p><strong><br></strong></p><p><strong>2.)    Für Unternehmen im B2B-Bereich:<br></strong><br><strong>Unterstütze ich durch meine Vertriebspolitik    förderungswürdige Strukturen?&nbsp;</strong></p><p>Die Vertriebspraxis in vielen Unternehmen ist, dass Großkunden    Konditionen eingeräumt bekommen und Serviceleistungen erhalten, die über die positiven    Skaleneffekte<sup>3&nbsp;</sup>hinausgehen Damit erhalten diese großen Strukturen einen weiteren Wettbewerbsvorteil    gegenüber den kleinen und mittelständischen Abnehmern. Förderungswürdige Marktstrukturen im Sinne der    Gemeinwohl-Ökonomie sind kleine und mittelständische Unternehmen (KMU), regionale Unternehmen und Unternehmen, die    sich besonders für das Gemeinwohl engagieren.</p>';

indicators[10].implementationHelp.content = '<ul>    <li><span>&nbsp;</span><span>In den Dialog mit den Interessengruppen treten und so eine Sensibilisierung der internen Kontaktstellen schaffen und mit den Interessengruppen gemeinsam an einer Verbesserung des Zugangs arbeiten. Dazu könnten Veranstaltungen mit den KundInnen-Gruppen dienen.</span>    </li>    <li><span>&nbsp;</span><span>Eine Sensibilisierung in den internen Kontaktstellen zum Markt (Vertrieb, Marketing, PR) für diese KundInnen-Gruppen zu schaffen</span>    </li></ul>';

indicators[10].impulsQuestions.content = '<p><span><strong>Vor allem für B2C</strong></span></p><ul>    <li><span>&nbsp;</span><span>Wie gelangen (potentielle) KundInnen ohne Barrieren an Informationen, Produkte und Dienstleistungen meines Unternehmens? (In den 4 Dimensionen: physisch, visuell, sprachlich und intellektuell)</span>    </li>    <li><span>&nbsp;</span><span>Welche benachteiligten KundInnen-Gruppen könnten von meinen Produkten und Dienstleistungen profitieren? Und für welche davon ist mein Angebot sehr relevant?</span>    </li>    <li><span>&nbsp;</span><span>Sind meine Produkte/Dienstleistungen für die speziellen Belange dieser relevanten KundInnen-Gruppen angepasst worden?&nbsp;</span>    </li>    <li><span>&nbsp;</span><span>Welche Maßnahmen werden umgesetzt, um dieser relevanten KundInnen-Gruppe einen einfacheren Zugang zu meinen Produkten und Leistungen zu ermöglichen?&nbsp;</span>    </li>    <li><span>&nbsp;</span><span>Welchen vereinfachten Zugang biete ich einkommensschwachen Haushalten? Gibt es eine soziale Preisstaffelung oder ein adäquates Angebot? &nbsp;</span>    </li>    <li><span>&nbsp;</span><span>Wie hoch ist der Anteil an Ressourcen im Vertrieb, Marketing und im Produktmanagement, der für benachteiligte KundInnen-Gruppen generell eingesetzt wird? Liegt der Anteil höher als der Umsatzanteil, der mit diesen KundInnen getätigt wird?</span>    </li></ul><p>&nbsp;</p><p><span><strong>Ausschließlich für B2B&nbsp;</strong></span></p><ul>    <li><span>&nbsp;</span><span>Erhalten förderungswürdige Marktstrukturen (KMU) und gemeinwohl-engagierte Unternehmen mindestens gleichwertige Konditionen wie Großunternehmen? (Messbarkeit durch Vertriebsergebnisrechnung: Kunden in Konzernstrukturen/Großabnehmer bringen dem Unternehmen ein gleichgutes Ergebnis als Kunden aus dem Bereich der KMU / der Gemeinwohl engagierten Unternehmen?)</span>    </li>    <li><span>&nbsp;</span><span>Erhalten diese Unternehmen einen Service (inkl. Kundenbetreuung), der mindestens gleichwertig ist, wie der für Großunternehmen in der KundInnensphäre?</span>    </li></ul>';

indicators[10].moreinfo.content = '<p><span>Barrierefreiheit: generell</span></p><ul>    <li><span>&nbsp;</span><span>German UPA, Arbeitskreis Barrierefreiheit: <a            href="http://www.germanupa.de/aktivitaeten/arbeitskreise/barrierefreiheit/" class="external-link"            rel="nofollow"><span style="text-decoration: underline;">http://www.germanupa.de/aktivitaeten/arbeitskreise/barrierefreiheit/</span></a>&nbsp;</span>    </li>    <li><span>&nbsp;</span><span>Initiative barrierefreies Internet <a href="http://www.einfach-fuer-alle.de"                                                                       class="external-link" rel="nofollow"><span            style="text-decoration: underline;">http://www.einfach-fuer-alle.de</span></a>/</span></li></ul><p>&nbsp;</p><p><span>Barrierefreiheit: intellektuelle Dimension</span></p><ul>    <li><span>&nbsp;</span><span>Wörterbuch der leichten Sprache: <a href="http://www.hurraki.de" class="external-link"                                                                     rel="nofollow"><span            style="text-decoration: underline;">http://www.hurraki.de</span></a></span></li>    <li><span>&nbsp;</span><span>Studie zum Projekt „EasyWeb“ <a            href="http://www.ki-i.at/fileadmin/pdf/Studie%20Easy-Web%20final.pdf" class="external-link"            rel="nofollow"><span style="text-decoration: underline;">http://www.ki-i.at/fileadmin/pdf/Studie%20Easy-Web%20final.pdf</span></a></span>    </li>    <li><span>&nbsp;</span><span>Infoseite der Plattform „Inclusion Europe“ zum Thema „Menschen mit geistiger Behinderung als Kunden von Hilfeangeboten“: <a            href="http://inclusion-europe.org/images/stories/documents/Project_Consumers/DE/index.htm"            class="external-link" rel="nofollow"><span style="text-decoration: underline;">http://inclusion-europe.org/images/stories/documents/Project_Consumers/DE/index.htm</span></a>&nbsp;</span>    </li></ul><p>&nbsp;</p><p><span>Dialog-Veranstaltungen mit den identifizierten Kundengruppen</span></p><ul>    <li><span>&nbsp;</span><span>Das Prinzip von „Living Books“ bietet hierzu spannende Anregungen: <a            href="http://www.livingbooks.at" class="external-link" rel="nofollow"><span            style="text-decoration: underline;">http://www.livingbooks.at</span></a>&nbsp;</span></li></ul>';

indicators[11].bestPractices.content = '<p>Hier könnten viele kleine Initiativen, Unternehmen, Kooperationsprojekte angeführt werden. Nachfolgende drei sind nur    beispielhaft:</p><ul>    <li>Finanzbranche: <a href="http://www.gabv.org/" class="external-link" rel="nofollow">Global Alliance for Banking        on Values</a> - globaler Zusammenschluss unterschiedlicher Ethikbanken    </li>    <li>Gugler Cross Media: Kooperation bei der Entwicklung eines Cradle-to-Cradle-Produktes - <a            href="http://csr-blog.at/2012/03/27/cradle-to-cradle-innovated-by-gugler-so-wurde-die-natur-drucken/"            class="external-link" rel="nofollow">Artikel</a></li>    <li><a href="http://de.wikipedia.org/wiki/Interface_Inc." class="external-link" rel="nofollow">Interface Inc.</a>:        der amerikanische Teppichproduzent wird oftmals als positives Beispiel für das Verhalten von börsennotierten        Konzern angeführt. -<strong> <a                href="http://grist.org/article/2009-10-19-ray-anderson-sustainability-interview-book/"                class="external-link" rel="nofollow">Interview mit Ray Anderson</a> </strong></li></ul>';

indicators[11].definition.content = 'Viele Faktoren erschweren eine Umsetzung höherer sozialer und ökologischer Branchenstandards, wobei meist die Wettbewerbsfähigkeit des Standortes - im Falle lokaler, nationaler oder supranationaler Regelungen - bzw. die ökonomischen Restriktionen bei Unternehmen - im Falle von Branchenstandards - eine wesentliche Rolle spielen. Die Erhöhung von Standards benachteiligt oftmals jene AkteurInnen, welche im Wettbewerbsumfeld Bereitschaft zeigen, höhere ökologische oder soziale Standards umsetzen zu wollen. Ein Entgegenwirken kann hierbei durch Kooperation der Marktpartner untereinander im Rahmen freiwillig höherer Standards erfolgen. Dass derartige Prozesse vielfach auch massiver Kritik ausgesetzt sind, wird am Beispiel des „Roundtable on Sustainable Palm Oil“ ersichtlich[1]. Bei Konflikten rund um derartige und ähnliche Initiativen gilt es gegebenenfalls die Meinung von Experten und Vertretern der Zivilgesellschaft einzuholen, um die inhaltliche Qualität beurteilen zu können. Der Entstehungsprozess legislativer Rahmenbedingungen wird durch Unternehmen sowie Branchenvertretungen, welche gegenwärtig Regulierung vielfach entgegenstehen, mitgeprägt. Transparentes, aktives Eintreten für die Etablierung höherer Standard auf legislativer Ebene, insbesondere durch größere Branchenvertreter, kann dieser Dynamik entgegenwirken.';

indicators[11].details.content = '<ul>    <li><strong>Unternehmensgröße / Marktmacht des Unternehmen:</strong> Mit zunehmender Unternehmensgröße und        zunehmendem -einfluss gewinnt der aktive Beitrag zur Erhöhung legislativer Standards bzw. der Einsatz für        branchenweit höhere Standards über die Branchenvertretung an Gewichtung. Vice versa, je kleiner das Unternehmen        bzw. je geringer die Marktmacht ausgeprägt ist, desto geringer ist die Bedeutung der positiven Beeinflussung        legislativer Aspekte (insbesondere für EPUs und KMUs sind die Einflussmöglichkeiten sehr eingeschränkt möglich).    </li>    <li><strong>Abgrenzung zu D2:</strong> Bei der Erhöhung der sozialen und ökologischen Branchenstandards ist die        Kooperation mit anderen Marktteilnehmern, worunter neben LieferantInnen, KundInnen und NGOs vor allem auch        Unternehmen derselben Branchen fallen, von Bedeutung. Folglich sind Redundanzen bei den Indikatoren D2 und D5        möglich. D5 fokussiert auch jene Aspekte der Kooperation, welche zu einer tatsächlichen Erhöhung der sozialen        und ökologischen Branchenstandards führen.    </li>    <li><strong>Anspruchsniveau und Effektivität der Initiativen:</strong> Bei der Bewertung gilt es, die Qualität der        Prozesse und das Anspruchsniveau freiwilliger höherer Standards kritisch zu reflektieren. Einige gegenwärtige        Initiativen sind stark von der Industrie beeinflusst, beziehen nur eingeschränkt zivilgesellschaftliche Akteure        mit ein und sind durch geringe Effektivität bei der Adressierung an ethische &nbsp;Herausforderungen der Branche        gekennzeichnet (siehe beispielhaft: Roundtable on Sustainable Palm Oil - <a                href="http://de.wikipedia.org/wiki/Roundtable_on_Sustainable_Palm_Oil#Kritik" class="external-link"                rel="nofollow">http://de.wikipedia.org/wiki/Roundtable_on_Sustainable_Palm_Oil#Kritik</a> bzw. Global        Compact: <a href="http://de.wikipedia.org/wiki/Global_Compact#Kritik" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Global_Compact#Kritik</a>).        Hier spielt die Effektivität eine wesentliche Rolle. Inwiefern trägt die Initiative zu einem tatsächlichen        Wandel bei den Herausforderungen (der Branchen) bei. Unternehmensgetriebene Initiativen sind hierbei        Multistakeholder-Initiativen meist vom inhaltlichen Anspruchsniveau, der Zielsetzung und der Effektivität der        Umsetzung unterlegen.    </li></ul>';

indicators[11].footnotes.content = '<div><p><a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540178#_ftnref1" rel="nofollow" title="">[1]</a><a        class="external-link" href="http://de.wikipedia.org/wiki/Roundtable_on_Sustainable_Palm_Oil#Kritik"        rel="nofollow">http://de.wikipedia.org/wiki/Roundtable_on_Sustainable_Palm_Oil#Kritik</a></p></div><div><p><a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540178#_ftnref2" rel="nofollow" title="">[2]</a>    Beispielweise Label Prozesse, welche den Anspruchkriterien der ISEAL Alliance entsprechen: <a class="external-link"                                                                                                  href="http://www.isealalliance.org"                                                                                                  rel="nofollow">http://www.isealalliance.org</a></p></div><p><a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540178#_ftnref3" rel="nofollow"                title="">[3]</a> Dossier Responsible Lobbying&nbsp;– CSR Weltweit:<a class="external-link"                                                                                     href="http://www.csr-weltweit.de/im-fokus/dossiers/responsible-lobbying/index.nc.html"                                                                                     rel="nofollow">http://www.csr-weltweit.de/im-fokus/dossiers/responsible-lobbying/index.nc.html</a></p>';

indicators[11].goals.content = '<p>Ziel ist, dass Unternehmen einer Branche bezüglich der für sie relevanten sozialen und ökologischen Aspekte    kooperieren, innovative Lösungen finden bzw. bereits bestehenden Initiativen (z.B.: Label, freiwillige    Branchenstandards) beitreten und diesbezügliche Informationen transparent anderen MitwerberInnen zugänglich machen,    um hiermit zu einer Erhöhung der Standards beizutragen. Auf politischer Ebene setzen sie sich mit Massnahmen, die    ihrer Größe und Gewichtigkeit entsprechen, transparent für höhere und feinere gesetzliche Rahmenbedingungen ein.</p><p>Zwei unterschiedliche Ansätze finden hinsichtlich der Erhöhung der sozialen und ökologischen Branchenstandards    Berücksichtigung: Die Zielerreichung kann über a) Kooperationen mit MitwerberInnen und Wertschöpfungspartnern sowie    die b) aktive, transparente Partizipation am politischen Prozess erfolgen.</p><p><strong>a) Kooperation mit    MitwerberInnen und Wertschöpfungspartnern:</strong> Zu einer Erhöhung der sozialen und ökologischen Standards    innerhalb der Branche können unterschiedlichste Maßnahmen beitragen, u.a. gemeinsame Verpflichtung zu höheren    Standards mit anderen Marktpartnern, Partizipation an qualitativen Label-Prozessen<a            href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540178#_ftn2" rel="nofollow">[2]</a>, Forschung&amp;Entwicklung.    Aktive Kommunikation dieser Aktivitäten, hohe Transparenz sowie Sicherstellung der Einhaltung, beispielsweise durch    Kooperationen mit zivilgesellschaftlichen Initiativen, spielen eine wesentliche Rolle. Die Kooperation beschränkt    sich hierbei nicht allein auf direkte MitwerberInnen, sondern kann und soll ebenfalls vor- und nachgelagerte    Wertschöpfungsstufen mit einbeziehen (potentielle Überscheidung mit A1, D1, D4). Sind die höheren Standards    inhärenter Bestandteil des Geschäftsmodells (z.B.: Nischenanbieter sozial / ökologisch führender Produkte /    Dienstleistungen), ist dies ebenfalls positiv anzurechnen, wenn ein weit über dem Standard liegendes Angebot    geschaffen wurde.&nbsp;</p><p><strong>b) Aktiver Beitrag zur Erhöhung legislativer Standards (Responsible    Lobbying):</strong> Je nach Unternehmensgröße und Branchencharakteristika können unterschiedliche Wege erfolgreich    auf eine Erhöhung der legislativen Standards auf kommunaler, staatlicher oder supranationaler Ebene wirken.    „Responsible Lobbying“ unterscheidet sich von der klassischen Form des Lobbyismus vor allem dadurch, WIE mit    politischen Entscheidungsträgern kooperiert wird (Prozess) und WAS Inhalt der Lobbyarbeit ist (Inhalte).    Verantwortliche Lobbyarbeit erfüllt zwei Kriterien:</p><ul>    <li>Prozesse: Die politische Kommunikation eines Unternehmens muss transparent und konsistent sein. Die Ziele, die        ein Unternehmen mit der Lobbyarbeit verfolgt, und die genutzten Werkzeuge müssen klar erkennbar sein. Allen        Gesprächspartnern gegenüber muss die gleiche Botschaft kommuniziert werden.    </li>    <li>Inhalte: Die Ziele der Lobbyarbeit müssen mit gesamtgesellschaftlichen Zielen vereinbar sein und dürfen nicht        dem Erwerb von Privilegien dienen. Sie müssen mit der Nachhaltigkeitsstrategie des Unternehmens im Einklang        stehen.“<a href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540178#_ftn3" rel="nofollow">[3]</a></li></ul><p>Unternehmensgröße sowie Größe und Fragmentierung der Branche, vom Oligopol hin zum Polypol, spielen eine    wesentliche Rolle bei der Beurteilung, welche Strategie sinnvoll und durchführbar ist. Weiters sind Initiativen zur    Erhöhung der Branchenstandards, sowohl hinsichtlich ihrer unternehmensinternen Reichweite, als auch ihrer    inhaltlichen Qualität zu beurteilen. Reichweite ist hierbei im Sinne des Umsatz-,&nbsp; Produktions- oder    Leistungsanteils der Produkte / Dienstleistungen, für welche die höheren Standards tatsächlich gelten, zu verstehen.    Hinsichtlich der inhaltlichen Qualität geht es um Breite und Tiefe beinhaltende Aspekte – handelt es sich nur um    einzelne soziale und / oder ökologische Randaspekte der Branche oder werden mehrere, branchenrelevante Risiken durch    die Standarderhöhung adressiert.</p>';

indicators[11].implementationHelp.content = '<p>Je nach Unternehmensgröße,&nbsp; Branchegröße / -struktur können sehr unterschiedliche Wege zu dieser&nbsp;    Zielsetzung beitragen. In stark fragmentierten Branchen beispielsweise durch die aktive Suche gleichgesinnter    MitwerberInnen und das Schaffen einer gemeinsamen Plattform, in hochkonzentrierten Branchen ein die legislativen    Rahmenbedingungen betreffender transparenter, branchenübergreifender Prozess in Kooperation mit NGOs und    zivilgesellschaftlichen Initiativen.</p><p>Auf inhaltlicher Ebene kann neben der Definition höherer Standards auch    ein <strong>Austausch von Wissen und Know-How</strong> zu Aspekten der Nachhaltigkeit, als auch ein <strong>Benchmarking</strong>    mit anderen Marktteilnehmern (z.B.: ökologischer Kennzahlen) hilfreich sein, um die eigenen Aktivitäten im    Branchenkontext zu vergleichen und besser einschätzen zu können.&nbsp;</p><p>Auf Ebene von Großunternehmen kann auch    die Partizipation an sogenannten <strong>"Draft Norms"</strong> zu Erhöhung legislativer Standards beitragen.</p>';

indicators[11].impulsQuestions.content = '<ul><li>Welche Aktivitäten setzt das Unternehmen zur Erhöhung der sozialen und ökologischen Branchenstandards (z.B.: Kooperation mit Marktpartner; Partizipation an Labelprozessen)? Welche konkreten Inhalte betreffen diese Maßnahmen?</li><li>Welche Aktivitäten setzt das Unternehmen zur Erhöhung legislativer Standards sozialer und ökologischer Natur (z.B.: Kooperation mit NGOs; Lobbying)? Welche konkreten Inhalte betreffen diese Maßnahmen?</li></ul>';

indicators[11].moreinfo.content = 'Dossier „Responsible Lobbying“ von CSR Weltweit: http://www.csr-weltweit.de/im-fokus/dossiers/responsible-lobbying/index.nc.html';

indicators[12].bestPractices.content = '<p><a href="http://www.grameen-info.org/" style="font-size: 10.0pt;line-height: 13.0pt;" class="external-link"      rel="nofollow"><strong>Grameen Bank</strong></a><strong style="font-size: 10.0pt;line-height: 13.0pt;"> –    Mikrokredite für die Armen</strong></p><p>Eine solidarische Wirtschaftsinitiative entstand in einem der ärmsten    Länder der Welt. Die Grameen Bank (bengalisch etwa: dörfliche Bank) wurde 1983 von dem Ökonomen Muhammad Yunus    gegründet, um der armen Bevölkerung eine Startfinanzierung für kleine Unternehmungen zu geben. Dabei gehen ca. 97%    der Kredite an Frauen, und ca. 98% werden zurückgezahlt. Gleichzeitig werden KreditnehmerInnen Mitglieder – also    MiteigentümerInnen – der Bank. Die Grameen Bank gehört zu 94% ihren KundInnen und zu sechs Prozent dem Staat. Das    Konzept der Bank wird heute in sechzig Entwicklungsländern kopiert und angewandt.</p><p>Allerdings gibt es zur    Grameen Bank selbst und zu ähnlichen Mikrokredit-Modellen auch kritische Stimmen, die sagen, dass nur ein Fünftel    der Schuldner der Sprung in den wirtschaftlichen Erfolg gelinge, während der Rest im Kreislauf der    Schuldknechtschaft gefangen bleibe. Dazu würden Kreditvermittler teilweise provisionsbezogen arbeiten und Kunden so    zu Mikrokrediten drängen.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn9"            title="" class="external-link" rel="nofollow">[9]</a></p><p><a href="http://www.rusz.at/"                                                                           class="external-link" rel="nofollow"><strong>R.U.S.Z.&nbsp;    - Reparatur- und Servicezentrum</strong></a></p><p>In Wien gegründetes Sozialunternehmen mit dem Zweck,    Langzeitarbeitslose in den Arbeitsprozess zu reintegrieren. Die unternehmerische Tätigkeit, Reparatur von    Elektrogeräten, dient lediglich dazu, den sozialen Zweck zu erfüllen, und bietet zusätzliche positive ökologische    Effekte, da Elektrogeräte länger genutzt werden können und weniger Neugeräte gekauft werden müssen.</p><p>    <strong><u>Gabarage - upcycling</u></strong></p><p>Kooperation mit dem Geschäftszweck, aus alten, scheinbar    wertlosen Gegenständen neue Designprodukte zu gestalten, wie beispielsweise aus alten Bücher einen Schreibtisch.    Ziel sind einerseits die Müllvermeidung und Wiederverwertung, andererseits&nbsp; Arbeitsplätze für und    Qualifizierung von benachteiligten Menschen.</p><p><strong><u>Göttin des Glücks - Modedesign</u></strong></p><p>Mode    wird gefertigt aus 100% afrikanischer Baumwolle zu 100% unter sozial fairen Arbeitsbedingungen und guten Löhnen in    Mauritius. Ziel ist die Schaffung von adäquat bezahlten Arbeitsplätzen unter Einhaltung der Sozialstandards in einem    Entwicklungsland, Verwendung reiner, giftfreier Naturmaterialien, Bezahlung fairer Preise entlang der gesamten    Wertschöpfungskette mit Modedesign, das in der anspruchsvollen westlichen Welt gefragt ist.</p><p><strong>Gemeinschaftsbüros    – </strong><a href="http://vienna.the-hub.net/" class="external-link" rel="nofollow"><strong>The Hub-Vienna</strong></a></p><p>Es gibt eine wachsende Anzahl von Einzel-Unternehmen, cultural creatives, die meistens nur&nbsp; alleine oder in    Netzwerken arbeiten. Um einer Vereinzelung vorzubeugen und Ressourcen bei der Anmietung von Büroräumlichkeiten zu    sparen, haben sich weltweit Gemeinschaftsbüros entwickelt. In Wien ist die Mutter der Co-Working-Spaces die <a            href="http://www.schraubenfabrik.at/Home/" class="external-link" rel="nofollow">Schraubenfabrik</a>, die    seit 2002 besteht. Im Jahr 2010 wurde das HUB-Vienna gegründet als lokaler Zweig der weltweiten HUB-Bewegung, die    zusätzlich zu den Gemeinschaftsbüros auch einen kreativen Raum für Social Entrepreneurs schaffen möchte. Der    Großteil der Mitglieder sind Social-Business-Unternehmen, und es werden umfassende Schulungen und    Vernetzungsmöglichkeiten angeboten.</p>';

indicators[12].definition.content = '<p>Um der Komplexität dieses Indikators gerecht zu werden, gilt es, die Produkte und Dienstleistungen aus    unterschiedlichen Perspektiven zu betrachten:</p><p><strong><br> Befriedigung</strong><strong> </strong><strong>menschlicher</strong><strong> </strong><strong>Grundbedürfnisse: </strong>Der<strong> </strong>Sinn    eines Produkts oder einer Dienstleistung kann darin erkannt werden, ob ein P/D zur Deckung menschlicher    Grundbedürfnisse dient und in welcher Form Nutzen gestiftet wird. Max-Neef’s Human-Scale-Development-Ansatz<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn2"            title="" class="external-link" rel="nofollow">[2]</a> gibt Hilfestellung zur Messung von neun    Grundbedürfnissen des Menschen sowie zur Klassifizierung unterschiedlicher Arten von Nutzen (Details siehe unten).</p><p><strong>Relation zu negativen Folgewirkungen: </strong>Der Grad der Bedürfnisbefriedigung ist in Relation zu den    negativen Folgewirkungen zu sehen, die durch Produktion, Transport, Konsumverhalten bis zur Entsorgung bzw.    Endlagerung entstehen. Hier ist andererseits die    <strong>Sozial-</strong><strong> </strong><strong>und</strong><strong> </strong><strong>Kulturverträglichkeit</strong>    zu beachten, wie beispielsweise Einsatzbereich, Gesundheitswirkung, Suchtgefahr oder nutzungsfremde Statusfunktion.    Andererseits die <strong>Naturverträglichkeit, </strong>d.h. die<strong> </strong>ökologischen Auswirkungen wie    Klimawandel, Nutzung knapper Ressourcen, Schädigung der Gesundheit,&nbsp; ökologischer Fußabdruck etc. Viele    Produkte und Dienstleistungen entfalten erst durch die gegenwärtige Nutzungsintensität ihre destruktive Kraft (z.B.    fossile Energieträger, tierische Nahrungsmittel).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Berechnung: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>% positive Wirkung eines    Produkts/einer Dienstleistung </u></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; % negative Folgewirkungen</p><p>Ob Grundbedürfnisse erfüllt werden und welche    negativen Folgewirkungen daraus entstehen, ist nur eine Seite der Medaille. Darüber hinaus ist bei der Erfüllung der    Grundbedürfnisse auch die <strong>angesprochene Kundengruppe</strong> von Bedeutung. Unternehmen, die die Erfüllung    von Grundbedürfnissen für die unterste, benachteiligte Schicht der Bevölkerung anbieten, sind hinsichtlich der    gesellschaftlichen Wirkung höher zu bewerten als solche mit Kunden an der Spitze der Bevölkerungspyramide.</p><p>    Darüber hinaus ist zu bewerten, ob soziale Anliegen unterstützt oder<strong> aktuelle soziale Herausforderungen    gelöst</strong> werden, wie z.B. gesunde Ernährung von Kindern, Lösung von Flüchtlingsproblemen, Integration von    Arbeitslosen, Bildung für Benachteiligte, soziale Gerechtigkeit, Datenschutz. Die höchste Stufe der    gesellschaftlichen Wirkung ist erreicht, wenn das Angebot des Unternehmens zu einem hohen Anteil den    sozio-kulturellen Wandel&nbsp; unterstützt und vorantreibt (Sozial Business Enterprise). Dies gelingt durch wirksame    Problemlösungen für die unteren, benachteiligten sozialen Schichten.<a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn3"        title="" class="external-link" rel="nofollow">[3]</a></p><p><strong>Persönliches Wachstum/Entwicklung der    Menschen</strong>: Vermehrung an Bildung, Wissen und Berufschancen für möglichst viele Menschen ist für ein    friedliches Miteinander auf unserem Planeten unter der Bedingung stark wachsender Weltbevölkerung und knapp    werdender Ressourcen eine Grundvoraussetzung. Gemessen wird, welche Breitenwirkung das P/D für die Entwicklung der    Menschen hat und ob sich das P/D an bislang benachteiligte Menschen richtet, z.B. P/D zur Integration von    Langzeitarbeitslosen etc.</p><p><strong>Entwicklung der Gemeinschaft</strong>: Produkte oder Dienstleistungen, die    das Zusammenleben bzw. die Zusammenarbeit der Menschen positiv beeinflussen, z.B Architektur, die Sozialkontakte    fördert; Führungssysteme, die besseres Zusammenarbeiten von Abteilungen innerhalb von Unternehmen ermöglichen etc.</p><p><strong>Regenerieren des Ökosystems und Natur/Ressourcen schonen</strong>: P/D, die ressourceneffizienter    produziert oder genutzt werden als vergleichbare Produkte, z.B. Nullenergie-Haus, giftfreie Druckprodukte etc.</p><p><strong>Indirek</strong><strong>t</strong><strong>e</strong><strong> </strong><strong>Bedürfnisbefriedigung und    Auswirkungen</strong><strong> </strong>im B2B-Bereich<strong>: </strong>Eine an sich sinnvolle Dienstleistung kann    sowohl eine/n am Gemeinwohl orientierten als auch für eine/n das Gemeinwohl verletzende/n Kunden/in erbracht werden.    Hier sind&nbsp; direkte und indirekte Wirkung zu unterscheiden. Einerseits befriedigen Anbieter direkt ein Bedürfnis    der AbnehmerInnen, andererseits tragen diese indirekt zur Leistung des Unternehmens und damit indirekt zur Wirkung    seiner Produkte/Dienstleistungen bei.</p><p>&nbsp;</p><p><strong>Grundbedürfnisse </strong></p><p>Lt. Max-Neef sind    <strong>folgende neun Grundbedürfnisse </strong>der Menschen weltweit feststellbar und werden beispielsweise    befriedigt durch:</p><ol>    <li><strong>Lebensgrundlage</strong>: z.B. Nahrung, Wohnen, Arbeiten</li>    <li><strong>Schutz, Sicherheit</strong>: z.B. soziale Sicherheit, Gesundheitssystem, Arbeitsplatzsicherheit</li>    <li>&nbsp;<strong>Beziehung</strong>: z.B. Partnerschaft, Familie, Naturverbundenheit</li>    <li><strong>&nbsp;Bildung:</strong> z.B. Literatur, Bildungssystem, Kommunikation</li>    <li>&nbsp;<strong>Mitwirkung</strong>: z.B. Rechte, Verantwortung, Arbeit</li>    <li><strong>&nbsp;Freizeit, Entspannung</strong>: z.B. Spiele, Sport, Clubs</li>    <li>&nbsp;<strong>Kunst, Gestaltung</strong>: z.B. Fähigkeiten, Know-how</li>    <li>&nbsp;<strong>Identität:</strong> z.B. Sprache, Religion, Tradition, Werte</li>    <li>&nbsp;<strong>Freiheit, Menschenwürde</strong>: z.B. Gleichberechtigung</li></ol><p><strong>&nbsp;</strong></p><p><strong>Art der Nutzenstiftung</strong></p><p>Nach Max-Neef können wir über die    Bedürfniserfüllung hinaus fünf grundsätzliche Wirkungen bzw. Nutzenstiftungen von Produkten und Dienstleistungen    unterscheiden:</p><p>a)&nbsp;&nbsp;&nbsp; Das Produkt/die Dienstleistung erfüllt mehrfachen Nutzen, z.B. das Stillen    eines Babys erfüllt nicht nur das Grundbedürfnis nach Nahrung, sondern auch das Bedürfnis nach Zuwendung, Nähe und    Geborgenheit.</p><p>b)&nbsp;&nbsp;&nbsp; Das Produkt/die Dienstleistung erfüllt einen einfachen Nutzen, z.B. eine    Sport-veranstaltung erfüllt NUR den Nutzen einer Freizeitgestaltung.</p><p>c)&nbsp;&nbsp;&nbsp; Hemmender Nutzen,    z.B. TV-Sendungen erfüllen das Bedürfnis nach Freizeitgestaltung, können aber die Kreativität und das eigenständige    Schaffen hemmen.</p><p>d)&nbsp;&nbsp;&nbsp; Pseudo-Nutzen, z.B. Mechanische Medizin: „Für jede Krankheit eine    Tablette" löst das Problem häufig nicht vom Grunde, sondern bekämpft teilweise nur die Symptome und kann    schlimmstenfalls zur Symptomverschiebung führen.</p><p>e)&nbsp;&nbsp;&nbsp; Negativnutzen von    Produkten/Dienstleistungen, die sogar die Erfüllung von Grundbedürfnissen behindern, wie z.B. Atomkraftwerke,    Waffen, Spielautomaten oder Zensuren.</p><p><strong>&nbsp;</strong></p><p><strong>Negative Folgewirkungen</strong></p><p>Die negativen Folgewirkungen sind ein möglicher erster Filter für die Bewertung der gesellschaftlichen    Produktwirkung.</p><p>Folgende mögliche und tatsächliche negativen Auswirkungen des Leistungsangebotes sind zu    bewerten:</p><ul>    <li>Produktion/Ressourcenverbrauch</li>    <li>Transport/Ressourcenverbrauch</li>    <li>Übermäßiges Konsumverhalten</li>    <li>Benachteiligung niedriger sozialer Schichten</li>    <li>Gesundheitliche Risiken/Schädigungen</li>    <li>Schädigung Ökosystem</li>    <li>Hohe Nutzungsintensität - entspricht nicht suffizientem Lebensstil</li>    <li>Übermäßiger Energieverbrauch</li>    <li>Hemmender Nutzen, wie Suchtgefahr, Abhängigkeit etc.</li>    <li>Pseudo-Nutzen, keine Problemlösung, sondern Symptombekämpfung</li></ul><p>&nbsp;</p><p><strong>Weitere Unterscheidungsformen</strong></p><p>Ergänzend dazu können die folgenden drei    Kategorien unterschieden werden:</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Kategorie 1</strong></p></td>            <td class="confluenceTd"><p><strong>Kategorie 2</strong></p></td>            <td class="confluenceTd"><p><strong>Kategorie 3</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Suffizienz</p></td>            <td class="confluenceTd"><p>Wohlstand</p></td>            <td class="confluenceTd"><p>Luxus</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Einfaches Leben</p></td>            <td class="confluenceTd"><p>Gutes Leben</p></td>            <td class="confluenceTd"><p>Überfluss</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Grundbedürfnisse</p></td>            <td class="confluenceTd"><p>Wahlbedürfnisse<a                    href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn4"                    title="" class="external-link" rel="nofollow">[4]</a></p></td>            <td class="confluenceTd"><p>Statussymbole</p></td>        </tr>        </tbody>    </table></div><p>Folgende Impulsfragen können helfen, die eigenen Produkte in die drei Kategorien einzuteilen:</p><ul>    <li>Handelt es sich um Produkte/Dienstleistungen für ein suffizientes oder „einfaches“ Leben? Sind sie        lebensnotwendig oder gehören sie zur Lebensgrundlage? (siehe neun Grundbedürfnisse)    </li>    <li>Sichern die Produkte/Dienstleistungen ein „gutes Leben“, d.h. sie sind nicht in der Form lebensnotwendig, aber        vereinfachen, erleichtern oder bereichern das „einfache“ Leben? (Wahlbedürfnisse)    </li>    <li>Handelt es sich um Luxusprodukte, die meistens „nur“ dem eigenen Status dienen und durch preiswertere, weniger        ressourcenschädliche Produkte des einfachen oder guten Lebens ersetzt werden können?    </li></ul><p>Zur besseren Unterscheidung wurden für alle drei Kategorien konkrete Beispiele gefunden. Diese Aufzählung ist    ein „erster Aufschlag“ und gehört in den weiteren Matrix-Versionen ergänzt und überarbeitet.</p><p>Suffiziente    Produkte/Dienstleistungen sind:</p><ul>    <li>Einfache, selbstgekochte, frische, vorwiegend vegetarische Ernährung</li>    <li>Wohnung inklusive Wasser/Wärme/Strom (ein Wohn-/Schlafzimmer von ca. 20qm pro Person)</li>    <li>Einfache Kleidung in ausreichender Menge</li>    <li>(Aus)Bildung: Schulbildung bis zur Matura, eine Berufsausbildung</li>    <li>Telekommunikation/Internet<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn5"            title="" class="external-link" rel="nofollow">[5]</a> und Computer    </li>    <li>Ärztliche Grundversorgung und Krankenversicherung</li>    <li>Mobilität und Teilnahme am sozialen Leben</li>    <li>Freie und unabhängige Presse/Medien</li></ul><p>Alle diese Produkte/Dienstleistungen können in einer Variante des „guten Lebens“ oder des „Luxus-Lebens“ bezogen    werden. Die Grenzen sind nicht immer leicht zu ziehen. Bei Wohnraum kann beispielsweise unterschieden werden    zwischen einer Sozialwohnung mit weniger Zimmern als Personen, einer repräsentativen Wohnung in einer beliebten    Wohngegend mit mehr als 20qm pro Person („gutes Leben“) bis hin zu der Vorort-Villa und dem Zweitwohnsitz auf dem    Lande („Luxus-Leben“). Vor allem die Grenze zwischen gutem Leben und Luxus ist nicht immer klar zu definieren.</p><p>Luxusprodukte sind auf jeden Fall Produkte/Dienstleistungen, die entweder mehr als das Dreifache der suffizienten    Variante kosten oder der Ressourcen verbrauchen.</p><p><strong>Ein Social-Business-Unternehmen&nbsp; – was ist    das?<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn6"           title="" class="external-link" rel="nofollow"><strong>[6]</strong></a></strong></p><p>Der Begriff „Social    Business Enterprise (SBE)“ wurde von Muhammad Yunus geprägt für ein Unternehmen, das Geld verdient und dabei die    Gesellschaft verändert, in der es tätig ist. Es handelt sich dabei weder um eine NGO noch um eine gemeinnützige    Stiftung. Ein SBE wird zwar von Anfang an mit einem sozialen Gedanken im Hinterkopf aufgebaut (soziale Mission),    doch es ist auch möglich, etablierte Unternehmen in SBEs umzuwandeln. Maßgeblich bei der Bezeichnung eines    Unternehmens als SBE ist, ob die soziale Mission ein primäres geschäftliches Ziel ist und sich klar in seinen    Entscheidungen niederschlägt.</p><p><strong>Globale Probleme lösen</strong></p><p>Um sich zu einem Sozialunternehmen    zu entwickeln, ist es zweckmäßig, die acht Millenniums-Entwicklungsziele der Vereinten Nationen aufzugreifen und für    die größten Herausforderungen unseres Planeten Lösungen anzubieten.</p><p>Die Millenniums-Entwicklungsziele sind<a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn7"        title="" class="external-link" rel="nofollow">[7]</a>:</p><ol>    <li>Bekämpfung von extremer Armut und Hunger</li>    <li>Primärschulbildung für alle</li>    <li>Gleichstellung der Geschlechter, Stärkung der Rolle der Frau</li>    <li>Senkung der Kindersterblichkeit</li>    <li>Verbesserung der Gesundheitsversorgung der Mütter</li>    <li>Bekämpfung von HIV/AIDS, Malaria und anderen Krankheiten</li>    <li>Ökologische Nachhaltigkeit</li>    <li>Aufbau einer globalen Partnerschaft und Entwicklung</li></ol><p><strong>Probleme/Herausforderungen der westlichen Welt lösen</strong></p><p>Innerhalb europäischer/westlicher    Gesellschaften gibt es auch eine Reihe von gesellschaftlichen Problemen, die entweder von den staatlichen    Einrichtungen gelöst werden oder von NGOs bzw. Social-Business-Unternehmen angegangen werden können. Hier wird    versucht, eine nicht vollständige Auflistung wesentlicher gesellschaftlicher Probleme anzuführen, um eine gute    Grundlage für die Bewertung von E1 zu erhalten:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn8"            title="" class="external-link" rel="nofollow">[8]</a></p><ul>    <li>Ressourcenschonende Ernährung (Bio-Landwirtschaft, keine Gen-Technik)</li>    <li>Preiswerter und ökologischer Wohnraum, ressourcenschonende Wärme/ Energieeffizienz</li>    <li>Preiswertes und qualitätsvolles Gesundheitswesen (über die westliche Medizin hinaus)</li>    <li>Umfassende Aus- und Weiterbildung (über das klassische Schulwesen hinaus)</li>    <li>Armutsbekämpfung und Grundeinkommen</li>    <li>Migration, Zuwanderung und Nationalismus</li>    <li>Abfallvermeidung / Recycling / Upcycling</li>    <li>Ersatz konventioneller Produkte durch nachwachsende Rohstoffe</li>    <li>Ressourcenschonende Mobilität (weg vom PKW hin zu alternativen Möglichkeiten)</li>    <li>Demografischer Wandel: Arbeits- und Wohnsituation für ältere Menschen</li>    <li>Landflucht: Abwanderung aus ländlichen Gebieten</li>    <li>Regionale Stärkung – als Gegengewicht zur Globalisierung</li></ul>';

indicators[12].details.content = '<p><strong>Abgrenzung zu anderen Indikatoren</strong></p><p>Die gesellschaftliche Wirkung der Produkte und    Dienstleistungen bezieht sich auf die gesamthafte Wirkung der unternehmerischen Tätigkeit (Geschäftsmodell) auf die    Menschheit/Gesellschaft bzw. Weiterentwicklung der Menschen zu mehr Mitgefühl bzw. menschlichen Werten und    überschneidet sich mit den Indikatoren der ökologischen Nachhaltigkeit (A1/D3/E3) sowie sozialen Indikatoren    (D4/E2). Die Sinnhaftigkeit kann speziell bewertet werden durch&nbsp;</p><ul>    <li>den sozialen Vergleich (Sozial- und Kulturverträglichkeit) und</li>    <li>den ökologischen Vergleich (Naturverträglichkeit, Suffizienz, Genügsamkeit)</li></ul><p>zu Alternativen mit ähnlichem Endnutzen. Beispielsweise ist ein Auto nicht nur im Vergleich zu anderen Autos zu    sehen, sondern mit sämtlichen Alternativen hinsichtlich Mobilität (Zug, Bus, Bahn etc.). Betrachtet werden hierbei    der gesamte Lebenszyklus/die gesamte Wertschöpfungskette „vom Rohstoff bis zur Entsorgung bzw. Wiederverwertung“    sowie die soziale und kulturelle Wirkung des Produkts.</p><p>Deutlich muss E1 von D1 getrennt werden. Häufig sagen    die PionierInnen: „Aber mein Produkt bringt den Kunden doch folgende Vorteile …!“</p><p>Das beschreibt den    Kundennutzen, der in D1 bewertet werden kann. Bei E1 geht es um den gesellschaftlichen Mehrwert.</p><p><strong>    &nbsp;</strong></p><p><strong>Bewertungshilfe</strong></p><p>Zur Bewertung der wichtigsten Produkte/Dienstleistungen    des Unternehmens kann folgende Struktur helfen:</p><p>&nbsp;</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="center">Top 5 angebotene Produkte/ Dienstleistungen</p>                <p align="center">(in % des Umsatzes)</p></td>            <td class="confluenceTd"><p align="center">Deckt das P/D einen Grundbedarf (suffizient) und ist                lebensnotwendig?<br> (Dient es dem einfachen Leben, einem guten Leben, oder ist es Luxus?)</p></td>            <td class="confluenceTd"><p align="center">Positive Wirkung auf Mensch/ Gemeinschaft/Erde</p></td>            <td class="confluenceTd"><p align="center">Negative mögliche/ tatsächliche Folgewirkung des P/D</p>                <p align="center">&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>&nbsp;</p>                <p>&nbsp;</p>                <p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>&nbsp;</p>                <p>&nbsp;</p>                <p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>&nbsp;</p>                <p>&nbsp;</p>                <p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>&nbsp;</p>                <p>&nbsp;</p>                <p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>&nbsp;</p>                <p>&nbsp;</p>                <p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>            <td class="confluenceTd"><p>&nbsp;</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>';

indicators[12].footnotes.content = '<div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref1"        title="" class="external-link" rel="nofollow">[1]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    John Croft: The Great Turning and Deep Ecology, Workshop Wien 2012</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref2"        title="" class="external-link" rel="nofollow">[2]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Max-Neef, Manfred A.: Human Scale Development: Conception, application and further reflections: <a            href="http://www.max-neef.cl/download/Max-neef_Human_Scale_development.pdf" class="external-link"            rel="nofollow">http://www.max-neef.cl/download/Max-neef_Human_Scale_development.pdf</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref3"        title="" class="external-link" rel="nofollow">[3]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;Kotler, Philip u.a.: Die neue Dimension des Marketings, Vom Kunden zum Menschen, Campus, 2010</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref4"        title="" class="external-link" rel="nofollow">[4]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Vgl. die Unterscheidung Grundbedürfnisse/Wahlbedürfnisse auf <a            href="http://www.verlag-fuchs.ch/_dokumente/VW_Kapitel1_4_locked.pdf" class="external-link" rel="nofollow">http://www.verlag-fuchs.ch/_dokumente/VW_Kapitel1_4_locked.pdf</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref5"        title="" class="external-link" rel="nofollow">[5]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Vgl. Urteil des deutschen BGH, dass Internet zur Lebensgrundlage gehört: <a            href="http://www.spiegel.de/%20netzwelt/netzpolitik/bgh-urteil-schadensersatz-bei-internet-ausfall-vom-provider-a-879481.html"            class="external-link" rel="nofollow">http://www.spiegel.de/        netzwelt/netzpolitik/bgh-urteil-schadensersatz-bei-internet-ausfall-vom-provider-a-879481.html</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref6"        title="" class="external-link" rel="nofollow">[6]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Vgl. Wikipedia-Eintrag für Social Business: <a href="http://de.wikipedia.org/wiki/Social_Business"                                                   class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Social_Business</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref7"        title="" class="external-link" rel="nofollow">[7]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Vgl. Wikipedia-Eintrag zu den Millenniumszielen: <a href="http://de.wikipedia.org/wiki/Millennium-Entwicklungsziele"                                                        class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Millennium-Entwicklungsziele</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref8"        title="" class="external-link" rel="nofollow">[8]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Vgl. die Liste der suffizienter Produkte/Dienstleistungen</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftnref9"        title="" class="external-link" rel="nofollow">[9]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Vgl. kritische Stimmen im Artikel vom Südwind-Magazin <a            href="http://www.suedwind-magazin.at/start.asp?%20ID=242237&amp;rubrik=7&amp;ausg=201012"            class="external-link" rel="nofollow">http://www.suedwind-magazin.at/start.asp? ID=242237&amp;rubrik=7&amp;ausg=201012</a>    , im Wikipedia-Artikel <a href="http://de.wikipedia.org/wiki/Grameen_Bank" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Grameen_Bank</a>    sowie die Buchrezension in Spiegel Online zu einem kritischen Mikrokredit-Buch: <a            href="http://www.spiegel.de/%20wirtschaft/unternehmen/mikrokredite-hugh-sinclair-rechnet-in-seinem-buch-mit-der-branche-ab-a-841303.html"            class="external-link" rel="nofollow">www.spiegel.de/        wirtschaft/unternehmen/mikrokredite-hugh-sinclair-rechnet-in-seinem-buch-mit-der-branche-ab-a-841303.html</a></p></div>';

indicators[12].goals.content = '<p>Produkte und Dienstleistungen stiften bis dato primär für Kunden und Kundinnen Nutzen. Bei Betrachtung des    Gesamtsystems unseres Planeten kann eine reine Nachfragebefriedigung nicht einziges Ziel gemeinwohlorientierter    Unternehmen sein. Es gilt, die gesellschaftliche Wirkung sowie die Sinnhaftigkeit der Produkte und Dienstleistungen    zu bewerten.</p><p>Zielsetzung der Gemeinwohl-Ökonomie ists, dass global nur noch das produziert wird, was die    Menschen für eine suffiziente (genügsame) Lebensführung wirklich benötigen, und das auf so ökologisch schonende    Weise wie möglich. Unternehmen sollen Impulse erhalten, sinnvolle und sozial wie ökologisch schonende Produkte und    Dienstleistungen zu entwickeln und anzubieten. Zweck der Gemeinwohl-Unternehmen ist es, sämtliche Mitglieder der    Gesellschaft mit dem rechten Maß an nützlichen, d.h. für ein physisch und psychisch gesundes und suffizientes Leben    nötigen Produkten und Dienstleistungen zu versorgen und diese so sozial und ökologisch wie möglich zu erzeugen.</p><p>Darüber hinaus bewirken Gemeinwohl-Unternehmen mit ihrem Angebot einen sozio-kulturellen Wandel zur Lösung der    größten Herausforderungen der Menschheit wie Armutsbekämpfung, Ernährung für alle Menschen, Bildung, Gesundheit und    Lösungen für soziale Missstände.</p><p>Die konkrete Sinnhaftigkeit von Produkten und Dienstleistungen kann mit der    allgemeinen Frage beantwortet werden, welches Grundbedürfnis ein Produkt/eine Dienstleistung direkt und indirekt    befriedigt und welche möglichen und tatsächlichen negativen Folgewirkungen bei der Herstellung, Verwendung oder    Entsorgung entstehen.</p><p>Ebenso ist zu berücksichtigen, an welche Kundengruppe in der Bevölkerungs­pyramide das    Produkt oder die Dienstleistung gerichtet ist. Günstige Angebote zur Deckung des Grundbedarfs für benachteiligte,    untere soziale Gruppen, sind von der gesellschaftlichen Wirkung höher zu bewerten als ein Angebot für die gehobene    soziale Schicht mit dem Motiv „nice to have“.</p><p>Bei der Bewertung der gesellschaftlichen Wirkung von Produkten    und Dienstleistungen sind nach John Croft drei Ebenen zu berücksichtigen<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E1-Sinn-und-gesellschaftliche-Wirkung-der-Produkte-Dienstleistungen-AD/E1-Sinn%20und%20gesellschaftliche-Wirkung-der-PD-lektoriert%20final.docx#_ftn1"            title="" class="external-link" rel="nofollow">[1]</a>:</p><ol>    <li>Persönliches Wachstum der Menschen</li>    <li>Stärken der Gemeinschaft</li>    <li>Lebensgrundlage der Erde</li></ol><p>Heutige Konsummuster, Produktnutzungen und Energiebedarf sind unter dem Aspekt limitierter Ressourcen, sozialer    persönlicher und globaler Auswirkungen sowie ökologischer Folgewirkungen zu betrachten. Neben dem grundsätzlichen    Produktsinn kommt hierbei der sinnvollen und der maßvollen Nutzung (Suffizienz) eine wesentliche Bedeutung zu.</p><p>Bei der Bewertung und Neuentwicklung von Produkten und Dienstleistungen sind Unternehmen gefordert, Lösungen für    zukunftsfähige Produktions- und Lebensweisen zu finden, um die notwendige soziale und ökologische Transformation zu    bewältigen.</p>';

indicators[12].implementationHelp.content = '';

indicators[12].impulsQuestions.content = '<p>Für eine systematische Auseinandersetzung können folgende Fragestellungen den Diskurs im Unternehmen unterstützen:</p><ul><li>Welche Bedürfnisse erfüllen die Produkte/Dienstleistungen (P/D) bei KundInnen?</li><li>Welche der <strong>neun Grundbedürfnisse &nbsp;</strong>(nach Manfred A. &nbsp;Max-Neef, siehe weiter unten)<strong> </strong>werden vom jeweiligen P/D positiv, mehrfach positiv oder negativ erfüllt?</li><li>Welche <strong>Art der Nutzenstiftung </strong>erfolgt durch die P/D des Unternehmens? (siehe weiter unten)</li><li>Zu welcher Bedürfnisbefriedigung tragen die P/D angesichts der Kundenstruktur indirekt bei?</li><li>In welcher Form dient das P/D dem persönlichen Wachstum der Menschen?</li><li>In welcher Form hilft das P/D, die Gemeinschaft im Privat- und Berufsleben der Menschen zu fördern?</li><li>In welcher Relation stehen die Produkte zu Wachstumsgrenzen auf unserem Planeten?</li><li>Wie ist die gesamte Wertschöpfungskette sozial und ökologisch zu bewerten?</li></ul>';

indicators[12].moreinfo.content = '<ul>    <li><a href="http://austria.ashoka.org/ashoka-fellows-0" class="external-link" rel="nofollow">Ashoka Fellows</a> –        2000 Social Entrepreneurs, die von Ashoka ausgezeichnet und unterstützt wurden    </li>    <li>Bornstein, David: Die Welt verändern. Social Entrepreneurs und die Kraft neuer Ideen, Klett Cotta, 2005</li>    <li>Feige, Achim: Good Business. Das Denken der Gewinner von morgen, Murmann, 2010</li>    <li>Spiegel, Peter: Eine bessere Welt unternehmen. Wirtschaften im Dienst der Menschheit, Herder, 2011</li>    <li>Yunus, Muhammad: Die Armut besiegen. Hanser, 2008</li>    <li>Yunus, Muhammad: Social Business. Von der Vision zur Tat, Hanser, 2010</li>    <li>Kotler, Philip u.a.: Vom Kunden zum Menschen, Die neue Dimension des Marketings, Campus, 2010</li>    <li>Senge, Peter M: Die Fünfte Disziplin, Kunst und Praxis der Lernenden Organisation, Schaeffer-Poeschl, 2011</li>    <li>Randers, Jorgen: 2052 – der neue Bericht an den Club of Rome, Oekom, 2012</li>    <li><a href="http://www.well-beingindex.com/methodology.asp" class="external-link" rel="nofollow">Wellbeing-Index        für England und Deutschland</a></li></ul><p>&nbsp;</p><h5        id="E1SinnundgesellschaftlicheWirkungderProdukteundDienstleistungen-Matrix41-RedakteurinAngelaDrosg-PlöckingeradrosgmehrwerteatVorarbeitChristianLoyMitarbeitChristianRüther"        class="Stand">Redakteurin: Angela Drosg-Plöckinger: <a href="mailto:a.drosg@mehrwerte.at" class="external-link"                                                               rel="nofollow">a.drosg@mehrwerte.at</a>, Vorarbeit:    Christian Loy, Mitarbeit: Christian Rüther</h5>';

indicators[13].bestPractices.content = '<p>Good Practises, also vor allem größere Unternehmen, die sich vorbildlich mit einem angemessen hohen Beitrag und    umfassender Institutionalisierung am Gemeinwesen beteiligen, sind derzeit kaum bekannt. Hingegen gibt es vor allem    bei Kleinstunternehmen (und hier besonders bei EPU) Einzelfälle, in denen das gesellschaftliche Engagement die    wirtschaftliche Eigenleistung bei Weitem übersteigt.</p><p>Ein Einzelbeispiel dazu: Patagonia ist ein    US-amerikanischer Outdoor-Ausrüster, der seit 1985 jährlich 1% des Umsatzes an die Initiative „1% for the planet“    (<a href="http://www.onepercentfortheplanet.org" class="external-link"        rel="nofollow">www.onepercentfortheplanet.org</a>) spendet. Diese vereint Unternehmen, welche ihre Verantwortung    für die natürliche Umwelt als integralen Bestandteil ihrer Geschäftstätigkeit betrachten.<a href="#_ftn18" title=""                                                                                                rel="nofollow">[18]</a></p><p>Gleichzeitig wird Patagonia bei der Beurteilung sozialer Standards in der Zuliefererkette und Produktion nur als    durchschnittlich eingestuft. Hier wird deutlich, dass Unternehmen in einzelnen Bereichen vorbildlich sein können und    in anderen nur erfahren oder fortgeschritten.<a href="#_ftn19" title="" rel="nofollow">[19]</a></p><p align="left">    Good Practices von Kooperationen zwischen gewinnorientierten Unternehmen und Non-Profit-Organisationen aus    Österreich werden jährlich beim Austrian Social Business Day präsentiert. Siehe dazu z.B.: <a        href="http://www.socialbusinessday.org/blog/blog-asbd2012/66-goodpractice.html" class="external-link"        rel="nofollow">http://www.socialbusinessday.org/blog/blog-asbd2012/66-goodpractice.html</a> sowie weiterführende    Informationen auf den Homepages der jeweiligen Unternehmen bzw. Non-Profit-Organisationen.</p><p>Ein Beispiel für    gelungenes Corporate Citizenship ist die Firma Betapharm. Siehe dazu <a            href="http://www.brandeins.de/magazin/vom-modebegriff-zum-wirtschaftsfaktor/profit-mit-non-profit.html"            class="external-link" rel="nofollow">http://www.brandeins.de/magazin/vom-modebegriff-zum-wirtschaftsfaktor/profit-mit-non-profit.html</a>    und den Leitfaden für gelungenes CSR: <a            href="http://www.betapharm.de/unternehmen/unser-engagement/pionierarbeit-csr.html" class="external-link"            rel="nofollow">http://www.betapharm.de/unternehmen/unser-engagement/pionierarbeit-csr.html</a>.</p>';

indicators[13].definition.content = '<p>In der wirtschaftsethischen Debatte hat sich der Begriff „Unternehmensbürgerschaft“ etabliert, der das aktive    Engagement des Unternehmens als Bürger für das Gemeinwesen beschreibt. Ähnlich wie ein normaler Bürger sich    ehrenamtlich engagieren kann, kann auch eine Organisation einen (nicht profitorientierten) Beitrag zum Gemeinwesen    leisten.</p><p>Eng mit dem Begriff des Gemeinwesens verbunden erscheint der Begriff des „Sozialkapitals“, der    unmittelbar nach der Jahrtausendwende von Weltbank und OECD näher untersucht wurde. Hintergrund war die Erkenntnis,    dass das Wohlergehen und der wirtschaftliche Erfolg von Nationen nicht nur von klassischen wirtschaftlichen    Kenngrößen abhängig erscheint, sondern auch auf der individuellen Ausbildung einer breiteren Gruppe der Bevölkerung    („Humankapital“) sowie dem gesellschaftlichen Zusammenhalt der Gemeinschaft („Sozialkapital“) beruht. Den    verfügbaren Erkenntnissen zufolge können Human- und Sozialkapital einen entscheidenden Beitrag zu einer ganzen Reihe    positiver Ergebnisse leisten, die von höheren Einkommen über stärkeren sozialen Zusammenhalt bis hin zu größerer    Lebenszufriedenheit reichen.<a href="#_ftn6" title="" rel="nofollow">[6]</a></p><p>Unter Sozialkapital versteht die    Weltbank alle Institutionen, Beziehungen und Normen, die die Qualität und Quantität der sozialen Interaktion    ausmachen. Diese Beziehungen und Netzwerke erlauben den Handelnden, auf größere Ressourcen zurückzugreifen und    gemeinsame Ziele leichter zu erreichen. Soziales Kapital ist der soziale Zusammenhalt einer Gemeinschaft, welcher    sich entscheidend auf eine nachhaltige wirtschaftliche und soziale Entwicklung auswirkt.<a href="#_ftn7" title=""                                                                                               rel="nofollow">[7]</a>    Jegliche (staatliche oder private) Investition in diese „Kapitalien“ lässt sich daher als Beitrag zum persönlichen    Wohlbefinden und zum wirtschaftlichen Überleben der Mitglieder einer Gemeinschaft verstehen.</p><p>Als Bestandteil    des Gemeinwesens müssen wohl aber auch die Gemeingüter verstanden werden, die allen Mitgliedern einer Gemeinschaft    zur freien Nutzung zur Verfügung stehen (frei von privaten Nutzungs- oder Besitzrechten). Eine spezielle Form    stellen öffentliche Güter dar, bei denen keine Rivalität der Nutzung besteht, d.h. die von mehreren Mitgliedern    gleichzeitig ohne gegenseitige Behinderung verwendet werden können. Darunter fällt auch die sogenannte    „Wissensallmende“, die das gesamt frei verfügbare Wissen einer Gesellschaft umfasst. Dazu kann man auch gemeinsam    und frei nutzbare Ressourcen zählen, die unter einer kollektiven Nutzungsvereinbarung („Commons“) zugänglich sind,    wie z.B. Open Software.</p><p>Beiträge mit Nutzen für die Gemeinschaft können in unterschiedlichen Formen erfolgen.    Judith Polerauer unterscheidet z.B. bei der Betrachtung des Corporate-Citizenship-Engagements eines Unternehmens    folgende Bereiche:<a href="#_ftn8" title="" rel="nofollow">[8]</a></p><p><u>Engagementformen</u></p><ul>    <li>Instrumente: Spenden, Freistellungen, weitere Instrumente</li>    <li>Kooperationen</li>    <li>Merkmale: Kontinuität und Institutionalisierung</li></ul><p><u>Unternehmensinterne Umsetzung</u></p><ul>    <li>Organisatorische Verankerung und Verantwortlichkeit</li>    <li>Planung und Umsetzung</li>    <li>Geldwerte Aufwandsquote</li></ul><p><u>Gegenstandsbereich</u></p><ul>    <li>Engagementbereiche</li>    <li>Auswahlprozesse</li>    <li>Einflussfaktoren</li></ul><p align="left">&nbsp;</p><p>Neben den tatsächlichen Leistungen (Engagementformen) werden also auch die Verankerung    in der Organisation und der Prozess der Auswahl der Engagementbereiche betrachtet, um zu einer umfassenden Bewertung    zu kommen.</p><p align="left">&nbsp;</p><p><u>Leistungen</u> sind z.B.</p><ul>    <li>finanzielle Mittel</li></ul><p align="left">Geldspenden, z.B. an Organisationen, in denen MitarbeiterInnen sich engagieren</p><p align="left">    Freistellungen von MitarbeiterInnen in der Arbeitszeit</p><p align="left">Sponsoring (allerdings nur unter    bestimmten Bedingungen, siehe unten)</p><p align="left">Zinslose oder zinsgünstige Kredite</p><p align="left">    Förderpreise</p><p align="left">Beteiligung an Bürgerstiftungen, Förderfonds, Spendenparlamenten, NPOs</p><ul>    <li>Bereitstellung sonstiger materieller Ressourcen</li></ul><p align="left">Kostenlose oder -günstige Dienstleistungen, Produkte und Logistik</p><p align="left">Kostenlose    oder -günstige Bereitstellung von Produkten und Sachmitteln</p><p align="left">Nutzung von Räumen, Gelände und    Büroeinrichtungen</p><ul>    <li>Bereitstellung immaterieller Ressourcen</li></ul><p align="left">Zeit, Know-how, Wissen</p><p align="left">Unterstützung des Engagements von MitarbeiterInnen in    deren Freizeit</p><p align="left">Engagement- Einsätze von Teams oder der gesamten Belegschaft</p><p align="left">    Entsenden von Führungskräften in Vorstände gemeinnütziger und Förder-Vereine etc.</p><p align="left">    Beratung/Schulung/ Qualifizierung sozialer Organisationen z.B. im Bereich PR, IT, Controlling, strategische Planung,    Finanzierung</p><p align="left">Zurverfügungstellung von Kontakten und Netzwerk, z.B. Lieferanten, Kunden, Service    Clubs, Experten</p><p align="left">Lobbyarbeit für Gemeinwesen-Organisationen bzw. Anliegen im Gemeinwesen</p><p        align="left">Fundraising für die Organisation</p><p>&nbsp;</p><p align="left">Leistungen werden über den Umfang    des Geldwerts aller Maßnahmen (% vom Jahresumsatz bzw. Anteil am eigenen immateriellen Vermögen) bewertet.</p><p>Der    klassische Beitrag zum Gemeinwesen besteht üblicherweise in der Bezahlung von Steuern.<a href="#_ftn9" title=""                                                                                             rel="nofollow">[9]</a>    Nachdem die Steuerleistung im Normalfall den gesetzlichen Grundlagen entsprechend erfolgen sollte, wird diese    Leistung hier nicht betrachtet. Der Beitrag zum Gemeinwesen ist allerdings auch KEIN Sponsoring, das primär aus    Marketing- oder PR-Gründen betrieben wird (z.B. für Profi-Sport oder Großveranstaltungen), wobei die Trennlinie    nicht immer leicht zu ziehen ist. Dies wird vor allem bei der Betrachtung der beabsichtigten und tatsächlich    erzielten Wirkungen deutlich.</p><p><u>&nbsp;</u></p><p><u>Wirkungen</u> (für die Gemeinschaft) sind z.B.</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    die Verbesserung individuellen Wohlbefindens, der Gesundheit und Beschäftigungsfähigkeit (siehe z.B. UN Human    Development Goals)</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; die Reduktion sozialer Kosten, die z.B. als    Folge wirtschaftlicher Tätigkeit entstehen (z.B. Kosten durch Rehabilitationsmaßnahmen, Beseitigung ökologischer    Schäden)</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; die Steigerung der Leistungsfähigkeit gesellschaftlicher    Einrichtungen oder die bessere Verfügbarkeit kollektiver Güter wie Raum, Kapital oder Wissen für die    Allgemeinheit</p><p>&nbsp;</p><p>Zusätzlich werden dabei das Wirkungsspektrum der Maßnahmen (Einzeleffekt oder    Breitenwirkung, strukturelle Änderung oder Symptomwirkung) und die zeitliche Wirkung (kurzfristig und/oder    nachhaltig) bewertet. Spezifische Maßnahmen in gesellschaftlich wenig beachteten Problembereichen sind höher zu    bewerten als unspezifische Spendentätigkeit.</p><p>Neben den Wirkungen für die Allgemeinheit entstehen aber    üblicherweise auch positive Wirkungen für das Unternehmen selbst. Dresewski beschreibt folgenden Nutzen von    Corporate Citizenship für das Unternehmen und meint bei allen Punkten eine jeweilige positive Steigerung oder    Entwicklung: <a href="#_ftn10" title="" rel="nofollow">[10]</a></p><p><u>Personalentwicklung</u></p><ul>    <li>Mitarbeiterzufriedenheit und -bindung</li>    <li>Werbung von MitarbeiterInnen</li>    <li>Qualifikationen        <ul>            <li>Sozial- und Führungskompetenz</li>            <li>Kommunikation und Teamfähigkeit</li>            <li>Zielorientierung, Eigenaktivität, Kreativität</li>        </ul>    </li>    <li>Work-Life-Balance</li></ul><p><u>Marketing und Vertrieb</u></p><ul>    <li>Produktinnovationen</li>    <li>Zugang zu neuen Märkten</li>    <li>Kundenbindung</li>    <li>Zugang zu wichtigen und neuen Kunden</li>    <li>Verkaufsförderung mit sozialem Engagement</li></ul><p><u>Unternehmenskommunikation</u></p><ul>    <li>Bekanntheitsgrad</li>    <li>Reputation</li>    <li>Differenzierung im Markt</li>    <li>Markenaufbau</li></ul><p><u>Standort- und Regionalentwicklung</u></p><ul>    <li>Intaktes Umfeld</li>    <li>Lebensbedingungen von MitarbeiterInnen</li>    <li>Weiche Standortfaktoren</li>    <li>Kontakte zum direkten Umfeld</li></ul><p>Im optimalen Fall entsteht ein ausgewogenes Verhältnis von Wirkungen für die Gemeinschaft und Wirkungen für die    Organisation. Steht bei einem Unternehmen jedoch der Eigennutzen deutlich im Vordergrund, werden bei der Bewertung    Abstriche zu machen sein. Ebenso kritisch wäre zu beurteilen, wenn durch den Erhalt von Spenden eine Abhängigkeit    des Empfängers von einem einzelnen Geldgeber entstehen würde.</p><p>Die Orientierung der Bewertung der Leistungen am    Geldwert der Maßnahmen beruht auf mehreren Quellen (zitiert nach Judith Polterauer<a href="#_ftn11" title=""                                                                                         rel="nofollow">[11]</a>):</p><p>Einmal hat Bernhard Seitz 2002 die beschäftigungsstärksten Unternehmen untersucht und eine Aufwandsquote von 0,4    Promille vom Umsatz errechnet.</p><p>Frank Maaß und Reinhard Clemens konstatieren, „dass kleine und mittlere    Unternehmen (bis 99 Beschäftigte) sich gemessen am Umsatz deutlich stärker engagieren als größere und große    Unternehmen (mehr als 100 bzw. 500 Beschäftigte)“.</p><p>Das wird in einer Forsa-Studie<a href="#_ftn12" title=""                                                                                              rel="nofollow">[12]</a>    bestätigt, die eine detailliertere Auflistung macht:</p><p>&nbsp;</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Umsatz der Unternehmen</strong></p></td>            <td class="confluenceTd"><p><strong>Anteil des finanziellen/geldwerten Aufwands am Jahresumsatz im                Durchschnitt</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Unter 250.000 Euro</p></td>            <td class="confluenceTd"><p align="center">3,1%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>250.000 – 500.000 Euro</p></td>            <td class="confluenceTd"><p align="center">1,9%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>500.000 – 1 Mio. Euro</p></td>            <td class="confluenceTd"><p align="center">0,9%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>1 Mio. bis 5 Mio. Euro</p></td>            <td class="confluenceTd"><p align="center">0,5%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>5 Mio. bis 50 Mio. Euro</p></td>            <td class="confluenceTd"><p align="center">0,4%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>50 Mio. Euro und mehr</p></td>            <td class="confluenceTd"><p align="center">0,1%</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p>Andere Zahlen liefert Dresewski. Demnach investieren Unternehmen mit mehr als 500 Mitarbeitern ca.    0,05% des Umsatzes für ihr soziales Engagement und kleine und mittelständische Unternehmen mit bis zu 100    Mitarbeitern ca. 0,2% für ihr bürgerschaftliches Engagement.<a href="#_ftn13" title="" rel="nofollow">[13]</a></p><p>Wichtig erscheint auch die Unterscheidung, ob es sich um ein Unternehmen aus dem amerikanischen oder europäischen    Raum handelt. Bei den amerikanischen Organisationen gibt es eine ausgeprägtere Kultur des Gebens, weil auch der    Staat deutlich weniger Aufgaben wahrnimmt. Allerdings handelt es sich hierbei um eine sehr allgemeine Vermutung, die    (noch) nicht in konkreten Zahlen belegt werden kann.</p><p>Die aktuelle Festlegung der konkreten Zahlen für die    geldwerten Leistungen orientiert sich an der Forsa-Studie. Im Laufe der ersten Bilanzjahre sollen die Rückmeldungen    der Pioniere in diese Kategorie einbezogen werden.</p><p align="left">Noch schwieriger erscheint die Bewertung der    Wirkungen der Maßnahmen. Eine erste Orientierung liefert die Weltbank mit ihren Bewertungsansätzen zum    Sozialkapital. Hier wurden in Bezug auf sechs Erhebungskategorien konkrete Fragen formuliert, die einen Gradmesser    für gesellschaftliches Engagement von Individuen darstellen.<a href="#_ftn14" title="" rel="nofollow">[14]</a> Je    höher das Sozialkapital einer Gesellschaft ist, desto stärker sollte auch das soziale Engagement ausgeprägt sein:</p><ul>    <li>Gruppen und Netzwerke: Mitwirkung von Individuen in verschiedenen Typen sozialer Organisationen und informeller        Netzwerke. Berücksichtigt wird dabei das Ausmaß der jeweilig eigenen Beiträge in Relation zu den erhaltenen        Vergünstigungen, aber auch die Vielfalt des Engagements sowie die Veränderung des Engagements über die Zeit    </li>    <li>Vertrauen und Solidarität: beinhaltet Vertrauen gegenüber Nachbarn, wichtigen öffentlichen Dienstleistern und        Fremden sowie die Entwicklung dieser Wahrnehmung über die Zeit    </li>    <li>Gemeinschaftliche Tätigkeiten und Kooperation: Mitarbeit bei Gemeinschaftsprojekten und gemeinschaftlicher        Krisenbewältigung. Betrachtet wird auch die gesellschaftliche Reaktion auf die Verweigerung der Kooperation    </li>    <li>Information und Kommunikation: Art und Weise, wie auch ärmere Haushalte Zugang zu Information erhalten, z.B.        über Märkte und öffentliche Services. Ausmaß des Zugangs zu Kommunikationsmitteln und -infrastruktur    </li>    <li>Soziale Kohäsion und Nichtausgrenzung: Beinhaltet eine Betrachtung von gesellschaftlichen Differenzen, deren        Charakter und die Art und Weise wie damit umgegangen wird    </li>    <li>Befähigung von Individuen zur politischen Aktivität: Möglichkeiten der Kontrolle von Institutionen und        Prozessen, die direkte Auswirkungen auf das eigene, individuelle Wohlbefinden haben    </li></ul><p>Der Subindikator „Intensität“ bewertet</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; die Ausgewogenheit    zwischen den faktischen Möglichkeiten des Unternehmens (die im Normalfall mit der Unternehmensgröße steigen) und den    tatsächlich erbrachten Leistungen</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; die „Stimmigkeit“ der    angestrebten Wirkungen mit der Gesamtstrategie und den wirtschaftlichen Aktivitäten des Unternehmens (z.B. regional    spezifische Maßnahmen an allen Unternehmensstandorten)</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; die    Übernahme konkreter Verantwortung und die Nachhaltigkeit des Engagements (z.B. ist der dauerhafte Betrieb einer    Ausbildungsstätte für arbeitslose Jugendliche höher zu bewerten als eine einmalige Spende an eine    Finanzstiftung)</p><p>&nbsp;</p><p>Das BITC (Unternehmensnetzwerk in England) entwickelt derzeit zwei    Messinstrumente, den Community Mark und Community Footprint. Beide sind noch in der Entwicklungsphase und derzeit    noch nicht im deutschsprachigen Raum angekommen, könnten aber interessante Messmethoden werden (vgl. den    ökologischen Fußabdruck).<a href="#_ftn15" title="" rel="nofollow">[15]</a></p>';

indicators[13].details.content = '<p>Bei KMU und Großunternehmen wird im Normalfall der Geldwert der Leistungen zu berücksichtigen sein. Bei    Kleinstunternehmen (EPU, ZPU), bei denen im Wesentlichen persönliche Arbeitsleistungen erbracht werden, kann auch    die Relation der Arbeitszeit zur Bewertung herangezogen werden. Wenn es aber durch diese Leistung zu einem    Verdienstentgang kommt, muss unter Umständen ein höherer Anteil berücksichtigt werden.</p><p>Beispiel:</p><p>Ein EPU    hat einen Jahresumsatz von € 32.000,-. Bei 40 Stunden ehrenamtlichem Engagement pro Jahr entspricht das einem    Arbeitszeitanteil von ca. 2,5%. In Bezug auf den verkaufbaren Anteil seiner Arbeitszeit (z.B. 40%) macht die    Äquivalentsumme (2.000,- für 40 verkaufte Stunden à 50,-) bereits etwa 6% aus. Im Normalfall ist der kleinere Wert    zu berücksichtigen, wenn es aber durch die Gemeinwohlleistung zu einer Einkommensschmälerung kommt (z.B. weil andere    Aufträge nicht angenommen werden können), kann auch ein höherer Anteil berücksichtigt werden.</p><p>Je größer der    Gewinn eines Unternehmens ist, desto leichter fällt es, einen Bruchteil davon als Spende für soziale Zwecke zu    leisten. Spenden sind für viele Aktivitäten (vor allem im Sozialbereich) wichtig, aber es ist damit weder ein    besonderes Risiko verbunden, noch wird auch wirklich Verantwortung für das soziale Engagement übernommen. Anders ist    hingegen der Einsatz von Know-how und persönlicher Arbeitskraft zu bewerten. Kleinstunternehmen setzen sehr oft    einen erheblichen Anteil ihrer Arbeitsleistung nicht zur Gewinnerwirtschaftung ein, sondern widmen sie    Gemeinschaftsleistungen. Damit wird eine professionelle Leistung gratis erbracht, die in dieser Form maximalen    Nutzen stiften kann, und für das Unternehmen selbst ist damit in den meisten Fällen auch verbunden, dass andere    Aufträge nicht im vollen Ausmaß übernommen werden können. Diese Unterschiede sind vor allem beim Subindikator    „Intensität“ zu berücksichtigen.</p><p>&nbsp;</p><p><strong>Abgrenzungen zu anderen Indikatoren</strong></p><p>Der    Indikator E2 berücksichtigt nur Leistungen für das Gemeinwesen, die nicht mit dem unmittelbaren Unternehmenszweck zu    tun haben. Insofern ist die Abgrenzung zu anderen Indikatoren einfach zu treffen, da dort das wirtschaftliche Tun    der Unternehmen im Vordergrund steht.</p><p>Z.B. betrifft die soziale Preisstaffelung primär den Verkauf von    Produkten und Dienstleistungen und ist daher nicht als Beitrag zum Gemeinwesen zu verstehen.</p><p>&nbsp;</p><p>    <strong>FAQ</strong></p><p><em>Wie ist der Geldwert einer Arbeitsstunde zu bewerten?</em></p><p>Grundsätzlich sollte    hier der realistische Gegenwert der erbrachten Leistung in die Berechnung einfließen (was würde diese Leistung am    Markt kosten?) und nicht der Gegenwert des Verdienstentgangs der Person (ansonsten wäre die Arbeitsstunde eines CEO    eines multinationalen Konzerns, der sich als Hilfskraft im Sozialbereich engagiert, extrem überbewertet).</p><p><em>Ich    leiste doch umfassendes Sponsoring, wieso wird das nicht berücksichtigt?</em></p><p>Wir möchten den Beitrag zum    Gemeinwesen deutlich von allen Sponsoring- und Marketingmaß­nahmen (Kunst/Kultur und Sport) trennen, weil sie    vornehmlich einem Eigeninteresse dienen und meistens aus dem Marketing-Budget bezahlt werden.</p><p>Aktivitäten zur    Förderung von Nachwuchskünstlern oder im Bereich Breitensport haben aber jedenfalls einen höheren Anteil an    Allgemeinnutzen und sind daher höher zu bewerten.</p><p>Bei KMUs und regionalem Sponsoring, die einen deutlichen    sozialen Bezug haben, können bei der Selbsteinschätzung und Bewertung ebenfalls Ausnahmen gemacht werden.</p><p><em>Wie    ist Engagement im Rahmen politischer Bewegungen zu bewerten?</em></p><p>Hier sollte das Wirkungsprinzip im    Vordergrund stehen. Sind mit der Tätigkeit auch konkrete, positive Auswirkungen für die Gesellschaft verbunden oder    wird primär an der Durchsetzung einer politischen Idee gearbeitet? Auch wenn hinter der Idee die besten Absichten    stehen (siehe z.B. auch das Engagement in der Gemeinwohlökonomie-Bewegung), aber damit noch kein spürbarer Nutzen    entsteht, ist dieses Engagement hier (noch) nicht zu berücksichtigen.</p><p><em>Wir sind ein social business, warum    sollen wir noch zusätzlich Beiträge zum Gemeinwesen leisten?</em></p><p>Auch für ein social business gilt, dass beim    Indikator E2 nur freiwillige Aktivitäten bewertet werden, die nicht zum Kerngeschäft des Unternehmens zählen. Die    fehlende Gewinnorientierung alleine ist noch kein Beitrag zum Gemeinwesen, die Sinnhaftigkeit und der Nutzen der    Leistungen sind beim Indikator E1 zu bewerten.</p>';

indicators[13].footnotes.content = '<div><p><a href="#_ftnref1" title="" rel="nofollow">[1]</a> Quelle: Wikipedia</p></div><div><p><a href="#_ftnref2" title="" rel="nofollow">[2]</a> In manchen Diskursen wird allerdings neben dem Staat auch    der Markt oder die Zivilgesellschaft als Gemeinwesen betrachtet.</p></div><div><p><a href="#_ftnref3" title="" rel="nofollow">[3]</a> Boulet, Jaak J./ Krauss, Jürgen E./ Oelschlägel, Dieter:    Gemeinwesenarbeit als Arbeitsprinzip. Eine Grundlegung. Bielefeld, 1980, S. 156</p></div><div><p><a href="#_ftnref4" title="" rel="nofollow">[4]</a> Darunter werden heute üblicherweise Boden, Kapital, Arbeit    und Wissen verstanden.</p></div><div><p align="left"><a href="#_ftnref5" title="" rel="nofollow"><sup><sup>[5]</sup></sup></a>Geldwerter Umfang aller    Maßnahmen (% vom Jahresumsatz bzw. der bezahlten oder verrechenbaren Jahresarbeitszeit)</p></div><div><p><a href="#_ftnref6" title="" rel="nofollow">[6]</a> OECD [2004]</p></div><div><p><a href="#_ftnref7" title="" rel="nofollow">[7]</a> Weltbank [2002]</p></div><div><p><a href="#_ftnref8" title="" rel="nofollow">[8]</a> Polterauer, Judith: Unternehmensengagement, 2010, S. 212/13.</p></div><div><p><a href="#_ftnref9" title="" rel="nofollow">[9]</a> In der Schweiz wird unter dem Begriff des Gemeinwesens    offenbar überhaupt primär das Steuersystem subsumiert.</p></div><div><p><a href="#_ftnref10" title="" rel="nofollow">[10]</a> Dresewski [Citizenship 2004-1], S.499-508 (mit konkreten    Beispielen aus der Praxis).</p></div><div><p><a href="#_ftnref11" title="" rel="nofollow">[11]</a> Teilweise direkt und indirekt zitiert aus: Polterauer    2010, S. 222/23.</p></div><div><p><a href="#_ftnref12" title="" rel="nofollow">[12]</a> Forsa: „Corporate Social Responsibility“ in Deutschland,    2005, Download z.B. unter: <a            href="http://www.aktive-buergerschaft.de/fp_files/StudienBerichte/bg_forsa_csr_in_deutschland_2005.pdf"            class="external-link" rel="nofollow">http://www.aktive-buergerschaft.de/fp_files/StudienBerichte/bg_forsa_csr_in_deutschland_2005.pdf</a></p></div><div><p><a href="#_ftnref13" title="" rel="nofollow">[13]</a> &nbsp;Dresewski [Citizenship 2004-1], S.492, wobei die    eine Studie von Großunternehmen aus dem Jahr 1988 stammt und soziales Engagement und bürgerschaftliches Engagement    sich wahrscheinlich in ihrem Umfang unterscheiden.</p></div><div><p><a href="#_ftnref14" title="" rel="nofollow">[14]</a> Weltbank: Measuring Social Capital (2004)</p></div><div><p align="left"><a href="#_ftnref15" title="" rel="nofollow">[15]</a> &nbsp;Mehr Infos hier: <a        href="http://www.bitc.org.uk/community/communitymark/about_the_communitymark/about_the.html"        class="external-link" rel="nofollow">http://www.bitc.org.uk/community/communitymark/about_the_communitymark/about_the.html</a>    und <a href="http://www.bitc.org.uk/community/community_footprint/index.html" class="external-link" rel="nofollow">http://www.bitc.org.uk/community/community_footprint/index.html</a></p></div><div><p><a href="#_ftnref16" title="" rel="nofollow">[16]</a> &nbsp;Vgl. Dresewski [Citizenship 2004-1], S. 509-514 mit    detaillierterer Beschreibung</p></div><div><p><a href="#_ftnref17" title="" rel="nofollow">[17]</a> Quelle: Dresewski [Citizenship 2004-2], S. 21f</p></div><div><p><a href="#_ftnref18" title="" rel="nofollow">[18]</a> Vgl. Maak, Thomas/ Ulrich, Peter: Unternehmensführung,    2007, S. 299.</p></div><div><p><a href="#_ftnref19" title="" rel="nofollow">[19]</a> Vgl. Artikel im Schweizer Tagesanzeiger vom 14.11.2010:    Hippe Label – unfaire Produktion: <a            href="http://www.tagesanzeiger.ch/wirtschaft/unternehmen-und-konjunktur/Hippe-Label--unfaire-Produktion/story/23511741"            class="external-link" rel="nofollow">http://www.tagesanzeiger.ch/wirtschaft/unternehmen-und-konjunktur/Hippe-Label--unfaire-Produktion/story/23511741</a>    &nbsp;(08.August 2011)</p></div>';

indicators[13].goals.content = '<p>Vereinfacht betrachtet versteht man unter Gemeinwesen alle Organisationsformen des menschlichen Zusammenlebens in    allgemeiner, öffentlicher <a href="http://de.wikipedia.org/wiki/Gemeinschaft" title="Gemeinschaft"                                 class="external-link" rel="nofollow">Gemeinschaft</a>, die über den <a            href="http://de.wikipedia.org/wiki/Sippe" title="Sippe" class="external-link"            rel="nofollow">Familienverband</a> hinausgehen. In der Gegenwart ist der <a            href="http://de.wikipedia.org/wiki/Staat" title="Staat" class="external-link" rel="nofollow">Staat</a> die    primär wahrgenommene Form des Gemeinwesens. Aber auch die <a            href="http://de.wikipedia.org/wiki/Kommune_%28Lebensgemeinschaft%29" title="Kommune (Lebensgemeinschaft)"            class="external-link" rel="nofollow">Kommunen</a> als seine elementaren Teilsysteme können als Gemeinwesen    aufgefasst werden. Ein Gemeinwesen bildet den Raum für <a href="http://de.wikipedia.org/wiki/Politik"                                                              title="Politik" class="external-link" rel="nofollow">politisches        Handeln</a>.<a href="#_ftn1" title="" rel="nofollow">[1]</a><sup>,<a href="#_ftn2" title=""                                                                             rel="nofollow">[2]</a></sup></p><p>Im    Detail betrachtet wird darunter oftmals ein territorial abgegrenztes Gebiet (Stadtteil, Dorf, Region) verstanden    oder ein homogenes Gesamtganzes, das gemeinsame Interessen vertritt und aktive Mitgliedschaften voraussetzt    (funktionales Gemeinwesen). Der Begriff bezieht sich aber auf unterschiedlichste Dimensionen sozialen Lebens: auf    die persönlichen Bezugspersonen und ihre sozialen Netze, auf örtliche Gegebenheiten wie Infrastruktur und Einbettung    in die Region, auf Bebauungsstrukturen und deren Besitzverhältnisse usw.</p><p>Das Gemeinwesen ist gleichzeitig    „Wesen des Menschen als ’Ensemble der gesellschaftlichen Verhältnisse’ als die Vielzahl gemeinsamer    Lebensbedürfnisse wie auch die Manifestation solcher Bedürfnisse in der ’gegenständlichen Praxis’ in    Erscheinungsformen wie Stadtteil, Verein, Institution.“<a href="#_ftn3" title="" rel="nofollow">[3]</a></p><p>    Innerhalb des Gemeinwesens entsteht ein „Sozialraum“ kollektiver Prozesse, in dem sich Individuen (aber auch    Organisationen) entsprechend ihrer jeweiligen Möglichkeiten ihre jeweilige „Lebenswelt“ gestalten können. Jeglicher    Beitrag zum Gemeinwesen ist daher sowohl Gestaltung individueller Lebensbedingungen als auch Formung sozialer    Prozesse.</p><p>Jedes Unternehmen soll seine gesellschaftliche Verantwortung wahrnehmen und im Rahmen seiner    Möglichkeiten einen angemessenen Beitrag leisten, um die Fähigkeiten der Gesellschaft (<em>des jeweiligen        Gemeinwesens</em>) insgesamt und die Chancen bzw. Entwicklungsmöglichkeiten der Individuen innerhalb der    Gemeinschaft zu steigern. Dies kann z.B. durch die Stärkung des gesellschaftlichen Zusammenhalts, durch die    Entwicklung gesellschaftlicher Strukturen, durch Maßnahmen zur Steigerung der Chancen Benachteiligter bzw. zum    Ausgleich gesellschaftlicher Defizite oder durch Schaffung von Gemeingütern erfolgen.</p><p>Jeder Mensch und jede    Organisation profitiert vom Gemeinwesen, z.B. durch Leistungen kommunaler Einrichtungen und die vorhandene    Infrastruktur. Zur Finanzierung dieser Leistungen werden Steuern und Sozialabgaben eingehoben. Darüber hinaus    leisten sehr viele Personen oder Organisationen freiwillige Beiträge, entweder in Form von finanziellen Spenden,    Sachmitteln oder durch Arbeitsleistung.</p><p>Dieser Beitrag ist umso höher einzuschätzen, je mehr von den    individuell vorhandenen Produktivfaktoren<a href="#_ftn4" title="" rel="nofollow">[4]</a> nicht zur privaten    Wertschöpfung, sondern zur Stärkung des Gemeinwesens eingesetzt werden. Neben den von den Unternehmen erbrachten    Leistungen soll in verstärktem Ausmaß auch die Wirkung dieser Maßnahmen (der „gesellschaftliche Footprint“) bewertet    werden.</p><p>Ziel ist es, durch den Einsatz dieser Produktivfaktoren möglichst umfassend spürbare Wirkungen zu    erreichen. Während <em>Leistung</em> eine Anstrengung bezeichnet, die unabhängig vom erzielten Erfolg bereits    bemerkenswert erscheint, zielt der Begriff der <em>Wirkung</em> auf real spürbare Veränderungen, die durch diese    Anstrengungen erreicht werden. Allerdings sind Leistungen wesentlich einfacher zu quantifizieren und damit zu    bewerten als Wirkungen, daher fließt beides in die Bewertung ein. Der Faktor <em>Intensität</em> schließlich    bewertet Tiefe und Nachhaltigkeit des Engagements des Unternehmens sowie die konkrete Art der    Verantwortungsübernahme.</p>';

indicators[13].implementationHelp.content = '<p>Dresewski sieht drei Einstiegsmöglichkeiten für die Umsetzung:<a href="#_ftn16" title="" rel="nofollow">[16]</a></p><p align="left">1)&nbsp;&nbsp;&nbsp; Neue Formen sozialen Engagements ausprobieren</p><p align="left">2)&nbsp;&nbsp;&nbsp;    Aufbau langfristig ausgerichteter Kooperationsprojekte</p><p align="left">3)&nbsp;&nbsp;&nbsp; Entwicklung einer    Corporate-Citizenship-Strategie</p><p>Eine weitere Orientierung für die Umsetzung kann der Corporate Citizenship-Mix    geben:<a href="#_ftn17" title="" rel="nofollow">[17]</a> Er beschreibt neun Instrumente, die Unternehmen aller    Größen in der Praxis bereits einsetzen und ist - ähnlich wie der Marketing-Mix - eine Art Baukasten, aus dem sich    ein Unternehmen im Rahmen seiner Corporate Citizenship-Strategie passende Instrumente aussuchen und diese umsetzen    kann. Die Unternehmensgröße und der damit unter Umständen verbundene Umfang der eingesetzten Ressourcen spielt dabei    keine Rolle. Mittelständische Unternehmen können grundsätzlich alle neun Instrumente einsetzen.</p><ol>    <li><strong>Unternehmensspenden</strong> (Corporate Giving) ist der Oberbegriff für ethisch motiviertes selbstloses        Überlassen, Spenden oder Stiften von Geld oder Sachmitteln, sowie für das kostenlose Überlassen oder Spenden von        Unternehmensleistungen, -produkten und -logistik.    </li>    <li><strong>Sozialsponsoring</strong>&nbsp;(Social Sponsoring) ist die Übertragung der gängigen Marketingmaßnahme        Sponsoring - als ein Geschäft auf Gegenseitigkeit - auf den sozialen Bereich, womit dem Unternehmen neue        Kommunikationskanäle und der gemeinnützigen Organisation neue Finanzierungswege eröffnet werden.    </li>    <li><strong>Zweckgebundenes Marketing</strong>&nbsp;(Cause Related Marketing) ist ein Marketinginstrument, bei dem        der Kauf eines Produkts/einer Dienstleistung damit beworben wird, dass das Unternehmen einen Teil der Erlöse        einem sozialen Zweck oder einer Organisation als „Spende“ zukommen lässt.    </li>    <li><strong>Unternehmensstiftungen</strong>&nbsp;(Corporate Foundations) bezeichnet das Gründen von Stiftungen durch        Unternehmen - eine Art des Engagements, die auch von mittelständischen Unternehmen immer häufiger benutzt wird.    </li>    <li><strong>Gemeinnütziges Arbeitnehmerengagement</strong>&nbsp;(Corporate Volunteering) bezeichnet das        gesellschaftliche Engagement von Unternehmen durch die Investition der Zeit, des Know-hows und Wissens ihrer        Mitarbeiterinnen und Mitarbeiter und die Unterstützung des ehrenamtlichen Engagements von Mitarbeiterinnen und        Mitarbeitern in und außerhalb der Arbeitszeit.    </li>    <li><strong>Auftragsvergabe an soziale Organisationen </strong>(Social Commissioning) bezeichnet die gezielte        geschäftliche Partnerschaft mit gemeinnützigen Organisationen, die z. B. behinderte und sozial benachteiligte        Menschen beschäftigen, als (gleichfalls kompetente und konkurrenzfähige) Dienstleister und Zuliefererbetriebe,        mit der Absicht, die Organisationen durch die Auftragsvergabe zu unterstützen.    </li>    <li><strong>Gemeinwesen Joint-Venture</strong>&nbsp;(Community Joint-Venture) bezeichnet eine gemeinsame        Unternehmung von einer gemeinnützigen Organisation und einem Unternehmen, in die beide Partner Ressourcen und        Know-how einbringen und die keiner allein durchführen könnte.    </li>    <li><strong>Lobbying für soziale Anliegen</strong>&nbsp;(Social Lobbying) bezeichnet den Einsatz von Kontakten und        Einfluss des Unternehmens für die Ziele gemeinnütziger Organisationen oder für Anliegen spezieller Gruppen im        Gemeinwesen.    </li>    <li><strong>Soziales Risiko-Kapital</strong>&nbsp;(Venture Philanthropy) bezeichnet unternehmerisch agierende        Risiko-Kapitalgeber, die für eine begrenzte Zeit und ein bestimmtes Vorhaben sowohl Geld als auch Know-how in        gemeinnützige Organisationen investieren.    </li></ol><p align="left">&nbsp;</p><p>Typische Beispiele für erste Schritte sind zum Beispiel Verzicht auf    Weihnachtsgeschenke oder -post zugunsten von Spenden für Sozialinitiativen, Förderung von sozialen    Mitarbeiterprojekten, Unterstützung von Lehrlingen beim Einstieg in den Arbeitsmarkt durch Mentoring,    Lebensmittelspenden von Supermärkten oder auch die Öffnung des eigenen Kundennetzwerks für Sozialinitiativen.</p>';

indicators[13].impulsQuestions.content = '<li>Welche Form des gesellschaftlichen Engagements betreiben wir? Wie viel an Geld, Ressourcen und konkreter    Arbeitsleistung wird dafür aufgewendet? (Erstellung einer Liste aller Aktivitäten mit geldwertem Umfang)</li><li>Betreiben wir Kooperationen mit Non-Profit-Organisationen?</li><li>Wie hoch ist unser Eigeninteresse an diesen Aktivitäten? Haben wir durch unser Engagement einen (bewusst geplanten)    Zusatznutzen? Welche Maßnahmen schaffen es in die Medien oder werden medial vermarktet?</li><li>Was sind die Auswirkungen unseres Tuns? Welche gesellschaftlichen Effekte erzielen wir (individuell, strukturell)?    Bewirken unsere Aktivitäten nachhaltige Veränderungen oder lindern sie vorwiegend Symptome?</li><li>Wie gut sind diese Themen bei uns verankert? Wer kümmert sich um die Gesamtkoordination und welchem    Unternehmensbereich ist sie zugeordnet (Marketing, Stabsstelle Vorstand)? Wer entscheidet über die Mittelvergabe?    Wie viel an Erfahrung haben wir damit bereits gesammelt? Wie stabil ist unser Engagement?</li><li>Gibt es eine Gesamtstrategie oder Vision für unser ehrenamtliches Engagement? Was sind da unsere Grundsätze und    Besonderheiten?</li>';

indicators[13].moreinfo.content = '<ul><li>BITC – Business in the community – UK-Netzwerk: <a href="http://www.bitc.org.uk/" class="external-link"                                                       rel="nofollow">http://www.bitc.org.uk/</a></li><li>Dresewski, Felix/ Kromminga, Peter/ von Mutius, Bernhard: [Citizenship, 2004-1] Corporate Citizenship oder: Mit    sozialer Verantwortung gewinnen. Ein Leitfaden für die praktische Arbeit, in Wieland, Josef: Handbuch Werte    Management, Erfolgsstrategien einer modernen Corporate Governance, Muhrmann, 2004, S. 489-525</li><li>Dresewski, Felix: [Citizenship, 2004-2] Corporate Citizenship. Ein Leitfaden für das soziale Engagement    mittelständischer Unternehmen. Berlin 2004</li><li>Dresniewski, Felix/ Lang, Reinhard: <a        href="http://www.diskutiere.de/diskutiere_wp/wp-content/uploads/maecenata-artikel-05-v2.pdf"        class="external-link" rel="nofollow">Corporate </a><a        href="http://www.diskutiere.de/diskutiere_wp/wp-content/uploads/maecenata-artikel-05-v2.pdf"        class="external-link" rel="nofollow">Citizenship</a>: [Citizenship, 2005] Über den Nutzen von Sozialen    Kooperationen für Unternehmen, gemeinnützige Organisationen und das Gemeinwesen in Sabine Reimer, Sabine/Strachwitz,    Rupert (Hg.): Corporate Citizenship. Diskussionsbeiträge. Arbeitshefte des Maecenata Instituts für Philanthropie und    Zivilgesellschaft. Heft 16. Maecenata Verlag. Berlin 2005</li><li><a href="http://upjo.s9.systematrix.de/fileadmin/user_upload/MAIN-dateien/Infopool/Forschung/pommerening_thilo.pdf"       class="external-link" rel="nofollow">Pommerening, Thilo: Die gesellschaftliche Verantwortung von Unternehmen –    Vergleich CSR und Corporate </a><a        href="http://upjo.s9.systematrix.de/fileadmin/user_upload/MAIN-dateien/Infopool/Forschung/pommerening_thilo.pdf"        class="external-link" rel="nofollow">Citizenship</a>, Download unter: <a        href="http://upjo.s9.systematrix.de/fileadmin/user_upload/MAIN-dateien/Infopool/Forschung/pommerening_thilo.pdf"        class="external-link" rel="nofollow">http://upjo.s9.systematrix.de/fileadmin/user_upload/MAIN-dateien/Infopool/Forschung/pommerening_thilo.pdf</a></li><li>&nbsp;Maak, Thomas/ Ulrich, Peter: [Unternehmensführung, 2007] Integre Unternehmensführung. Ethisches    Orientierungswissen für die Wirtschaftspraxis, Stuttgart: Schäffer-Poeschel, 2007</li><li>Polterauer, Judith: [Unternehmensengagement, 2010] Unternehmensengagement als „Corporate Citizen“. Zum Stand der    empirischen Corporate Citizenship-Forschung in Deutschland, in: Backhaus-Maul, Holger u.a.: Corporate Cititzenship    in Deutschland. Gesellschaftliches Engagement von Unternehmen, 2. aktualisierte und erweiterte Auflage, Wiesbaden:    VS Verlag für Sozialwissenschaften, 2010, S. 203-240</li><li>Boulet Jaak J./ Krauss Jürgen E./ Oelschlägel Dieter: Gemeinwesenarbeit als Arbeitsprinzip. Eine Grundlegung.    Bielefeld, 1980</li><li>Projekt „1% for the Planet”: <a href="http://www.onepercentfortheplanet.org" class="external-link" rel="nofollow">www.onepercentfortheplanet.org</a>&nbsp;</li><li>UPJ – deutsches Corporate-Citizenship-Netzwerk: <a href="http://www.upj.de/" class="external-link" rel="nofollow">http://www.upj.de/</a></li><li>OECD [2004]: Vom Wohlergehen der Nationen, gratis Download unter <a        href="http://www.oecdbookshop.org/oecd/display.asp?sf1=identifiers&amp;st1=962001015E1" class="external-link"        rel="nofollow">http://www.oecdbookshop.org/oecd/display.asp?sf1=identifiers&amp;st1=962001015E1</a></li><li>Weltbank [2002]: Understanding and measuring social capital, gratis Download unter <a        href="http://go.worldbank.org/957SH3NOC0" class="external-link" rel="nofollow">http://go.worldbank.org/957SH3NOC0</a></li><li>UN Human Development Goals: <a href="http://www.un.org/millenniumgoals/bkgd.shtml" class="external-link"                                   rel="nofollow">http://www.un.org/millenniumgoals/bkgd.shtml</a></li></ul>';

indicators[14].bestPractices.content = '';

indicators[14].definition.content = '<p>Sowohl auf globaler als auch regionaler Ebene haben gesellschaftliche Aktivitäten zur Störung und zum Teil zur    Degradation von Ökosystemen beigetragen.<a href="#_ftn2" title="" rel="nofollow">[2]</a> Um dem nachhaltig    entgegenzuwirken, müssen Maßnahmen ergriffen werden, die eine Reduktion von Ressourcenverbrauch und Emissionen    (insbesondere Treibhausgase<a href="#_ftn3" title="" rel="nofollow">[3]</a>) sowie eine Einschränkung der Nutzung    gefährlicher Substanzen, Technologien, Prozesse und Tätigkeiten zum Ziel haben.</p><p>Für eine Transformation vom    jetzigen Zustand zu einer ökologisch nachhaltigen Ökonomie ist deswegen jede Branche und jedes Unternehmen    gefordert, seine ökologischen Auswirkungen zu kennen und im Sinne des Gemeinwohls Verbesserungen zu realisieren.<a            href="#_ftn4" title="" rel="nofollow">[4]</a></p><p>Schädigende Umweltwirkungen („Umweltverschmutzungen“)    sind z.B.: Gewässerverschmutzung, Luftverschmutzung, Bodenverschmutzung, Lichtverschmutzung, Akustische    Verschmutzung. Beispiele für umweltverschmutzende Stoffe sind: Chemikalien (allgemein), Schwermetale, Mineralstoffe    wie Asbest, Öl, Dünger und Pflanzenschutzmittel bei unsachgemäßer Anwendung, Abgase, Arzneimittel, Antibiotica …<a            href="#_ftn5" title="" rel="nofollow">[5]</a>,<a href="#_ftn6" title="" rel="nofollow">[6]</a></p>';

indicators[14].details.content = '1 Die Beurteilung folgt dem ökologischen Fußabdruck für Unternehmen oder äquivalenten Umweltkonten, OEF=Ökologischer Fußabdruck für Unternehmen.<br/><br/>Auf EU-Ebene (http://ec.europa.eu/environment/eussd/corporate_footprint.htm) ist ein EOF-Guide (Leitfaden zur Bestimmung eines Umwelt-Fußabdrucks für Unternehmen) veröffentlicht: http://ec.europa.eu/environment/eussd/pdf/footprint/OEF%20Guide_final_July%202012_clean%20version.pdf<p>Für die Bewertung sind sowohl die absoluten Umweltauswirkungen als auch die relativen (im Branchenvergleich bzw. im    Vergleich zum Nutzen für die Gesellschaft) zu beachten.</p><ul>    <li>Ressourcen: Absoluter Materialeinsatz (Rohstoffe, Vorprodukte, Papier etc.), Einsatz Sekundärrohstoffe,        Substitution durch ökologisch höherwertige Rohstoffe, Wasserverbrauch, Recycling und stoffliche Wiederverwendung        etc.    </li>    <li>Energie &amp; Klima: Treibhausgas-Emissionen im Branchenvergleich; %-<u>Satz</u> erneuerbarer Energieträger;        Reduktion Energieverbrauch pro Mitarbeiter; <br> Mobilitätsstatistiken    </li>    <li>Sonstige Emissionen in Luft, Wasser und Boden: SO<sub>2</sub>; NO<sub>x</sub>, VOC, PM, Schwermetalle,        Kanzerogene/Mutagene/Radioaktive Stoffe, Allergene, <br> Dioxine, Furane etc.    </li>    <li>Abfälle wie Restmüll, Bioabfall, Altglas, Altpapier, Verpackungen, Elektronikschrott, Sondermüll, Schadstoffe,        radioaktiver Abfall, Produktionsabfälle, Schlachtabfälle etc.    </li></ul><p>Der jeweilige Branchenhintergrund, der Stand der Technik sowie die jeweilige Gesetzeslage vor Ort werden    herangezogen und führen zu den Einstufungen bei den Bewertungen. Die Beurteilung der absoluten Auswirkung folgt dem    ökologischen Fußabdruck für Unternehmen (OEF, die Methode steckt jedoch noch in den Kinderschuhen) oder äquivalenten    Umweltkonten.</p><p>&nbsp;</p><p><strong>Branchen-/Größenbesonderheiten:</strong></p><p>Größere Unternehmen haben im    Allgemeinen eine höhere Umweltwirkung, auch die Art der P/D „wirken“ anders. Letzter Aspekt ist Gegenstand von D3,    und von großen Unternehmen kann man sicherlich auch eher erwarten, an höherwertigen Standards mitzuarbeiten    (D5).</p><p>Mit E3 geht es hauptsächlich darum, die Unternehmen zu „öko-effizienteren“ Herstellprozessen zu bewegen    – Vergleichsbasis ist stets der Branchenstandard und natürlich die Branche (das P/D) selbst.</p><p>Bei der absoluten    Wirkung (SI1) kann man ein „Pro-Kopf-Äquivalent“ heranziehen, um Unternehmen verschiedener Größe miteinander zu    vergleichen. SI2 und SI3 orientieren sich größenunabhängig am technischen (Branchen-)Standard.</p><p>Richtig ist,    dass Unternehmen in unterschiedlichen Branchen unterschiedlich „leicht“ zu GWÖ-Punkten kommen können, innerhalb    einer Branche sollte das jedoch Beachtung finden, ggf. müssen sich Auditoren abstimmen.</p><p>&nbsp;</p><p><strong>Abgrenzungen    zu anderen Indikatoren</strong></p><p><u>C3 Förderung ökologischen Verhaltens der MitarbeiterInnen</u></p><p>C3    betrifft das ökologische Verhalten der MitarbeiterInnen. Hierbei überschneiden sich das Mobilitätsverhalten für die    An- und Abreise zur Arbeitsstelle - eine Doppelbewertung sollte vermieden werden. Das ökologische Verhalten (z.B.    Ernährungsverhalten) der Mitarbeiter ist durch Weiterbildungsmaßnahmen in Richtung ökologischer Bewusstseinsbildung    beeinflussbar.</p><p><u>D3 Ökologische Gestaltung der Produkte und Dienstleistungen</u></p><p>D3 betrachtet die    jeweilige Produktebene im gesamten Lebenszyklus, während E3 das gesamte Unternehmen als Produktionsort betrachtet.    Hier gibt es Überschneidungen. Zudem ist das Quartett der Nachhaltigkeit auch Orientierungsschema für E3.</p><p><u>E1    gesellschaftliche Wirkung der Produkte/Dienstleistungen</u><u> </u></p><p>E1 bewertet hauptsächlich die Produktebene    und den gesamten Lebenszyklus im Branchenvergleich,&nbsp; berücksichtigt jedoch auch die Herstellmethoden – hier    gibt es Überschneidungen.</p><p><u>D5 Erhöhung der sozialen und ökologischen Branchenstandards</u></p><p>In E3 ist    nicht der Standard das Entwicklungsziel, sondern die Reduzierung von <br> Umweltwirkungen.</p>';

indicators[14].footnotes.content = '';

indicators[14].goals.content = '<p>Ein gemeinwohlorientiertes Unternehmen setzt sich</p><p>a)&nbsp;&nbsp;&nbsp; aktiv mit seinen ökologischen    Auswirkungen auseinander</p><p>b)&nbsp;&nbsp;&nbsp; erhebt und dokumentiert seine direkten und indirekten    Umweltauswirkungen der Unternehmensgröße/-aktivitäten angemessen</p><p>c)&nbsp;&nbsp;&nbsp; hat ein Programm, um    seine negativen Auswirkungen kontinuierlich zu reduzieren</p><p>d)&nbsp;&nbsp;&nbsp; hat ein Programm, um seine    positiven Auswirkungen zu verstärken und bekannt zu machen</p><p>&nbsp;</p><p>Die Unternehmensaktivitäten sollen dem    „Quartett der Nachhaltigkeit“ <a href="#_ftn1" title="" rel="nofollow">[1]</a> folgen:</p><ul>    <li><strong>Konsistenz</strong> ist die Notwendigkeit, alle (wirtschaftlichen) Tätigkeiten so zu gestalten, dass sie        sich in natürliche Kreisläufe einfügen können (Einsatz von naturverträglichen Technologien).    </li>    <li><strong>Effizienz</strong> ist die bessere Nutzung der Ressourcen wie z.B. Energie, Material, Flächen oder auch        Geld (Ressourcenproduktivität).    </li>    <li><strong>Suffizienz</strong> zielt auf einen geringeren Verbrauch von Ressourcen durch eine verringerte Nachfrage        nach Gütern.    </li>    <li><strong>Resilienz </strong>bedeutet, das Puffervermögen unserer Systeme (natürliche wie technische oder        wirtschaftliche) soweit zu festigen, dass die Systeme auch bei Störungen halbwegs stabil bleiben können.    </li></ul>';

indicators[14].implementationHelp.content = '<p>„You can’t manage what you don’t measure.” Zur Evaluierung und Reduktion der ökologischen Auswirkungen des    Unternehmens ist eine prozessorientierte Herangehensweise in Form eines an Größe und Branche angepassten    Umweltmanagementsystems sinnvoll. Hier kann auf etablierte Standards zurückgegriffen werden. Nachfolgend eine    Auflistung der wichtigsten Umweltmanagementsysteme:</p><ul>    <li><strong>ISO 14001:</strong> Information des ÖkoBusinessPlan Wien zu ISO14001 - <a            href="http://www.wien.gv.at/umweltschutz/oekobusiness/modul-iso.html" class="external-link" rel="nofollow">http://www.wien.gv.at/umweltschutz/oekobusiness/modul-iso.html</a>    </li>    <li><strong>EMAS (eco-management and audit scheme)</strong></li></ul><p align="left">Informationen des österreichischen Lebensministeriums zu EMAS <a        href="http://www.emas.gv.at/article/articleview/52454/1/16769" class="external-link" rel="nofollow">http://www.emas.gv.at/article/articleview/52454/1/16769</a></p><p align="left">Die Deutsche Webseite zu EMAS: <a href="http://www.emas.de/" class="external-link" rel="nofollow">http://www.emas.de/</a></p><p align="left">Die EMAS-Richtlinie (enthält ISO 14001:2004):&nbsp; <a        href="http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:342:0001:0001:EN:PDF"        class="external-link" rel="nofollow">http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:342:0001:0001:EN:PDF</a></p><ul>    <li><strong>easyEMAS</strong>: ein auf die Bedürfnisse von KMUs zugeschnittenes, an EMAS orientiertes        Umweltmanagement: <a href="http://www.emaseasy.eu/" class="external-link" rel="nofollow">www.emaseasy.eu</a>    </li></ul><p>Für EPUs und Kleinstunternehmen ohne wesentliche Produktionsprozesse (z.B.: Beratungsunternehmen) ist der    Informationsbedarf geringer ausgeprägt, für eine Beurteilung sollten zumindest quantitative Angaben zum    Energieverbrauch (Strom, Gas), Mobilitätsaufwand (ungefähre km, Verkehrsmittel), Ressourcenverbrauch (siehe E1)    herangezogen werden.</p><p>&nbsp;</p><p align="left">Nachfolgend einige HintergrundiInformationen zu wesentlichen    Standards</p><p align="left"><strong>Beste Verfügbare Technik</strong> (Best Available Technology): EU BAT - <a        href="http://eippcb.jrc.es/reference/" class="external-link" rel="nofollow">http://eippcb.jrc.es/reference/</a>&nbsp;    <a href="http://www.bvt.umweltbundesamt.de/" class="external-link"       rel="nofollow">http://www.bvt.umweltbundesamt.de/</a></p><p align="left"><strong>CO<sub>2</sub>-Rechner:</strong>Tools zur Berechnung betrieblicher CO<sub>2</sub> Emissionen <a        href="http://www.izu.bayern.de/praxis/detail_praxis.php?pid=0203010100217" class="external-link" rel="nofollow">http://www.izu.bayern.de/praxis/detail_praxis.php?pid=0203010100217</a></p><p align="left"><strong>Öko-Business-Plan der Stadt Wien:</strong> <a        href="http://www.wien.gv.at/umweltschutz/oekobusiness/" class="external-link" rel="nofollow">http://www.wien.gv.at/umweltschutz/oekobusiness/</a></p><p align="left"><a href="http://www.umweltbundesamt.at/umweltsituation/abfall/vermeidung/" class="external-link"                       rel="nofollow">Abfallvermeidung</a> (<a href="http://www.umweltbundesamt.at"                                                               class="external-link" rel="nofollow">www.umweltbundesamt.at</a>)</p>';

indicators[14].impulsQuestions.content = '<li>Wie werden potenziell schädliche Umweltwirkungen erkannt und vermieden?</li><li>Welche konkreten ökologischen Zielsetzungen und Strategien existieren?</li><li>Welche ökologischen Aspekte werden aktiv gesteuert?</li><li>Welche Maßnahmen werden gesetzt, um die ökologischen Auswirkungen zu <br> reduzieren?</li><li>Zu welchen ökologischen Aspekten liegen Kennzahlen vor, und wie ist deren Trend über die vergangenen Jahre    (Materialeinsatz, Energie- und Wasserverbrauch, Emissionen, Abfall, Mobilitätskennzahlen)? Gelten diese für das    gesamte Unternehmen oder nur für Teilbereiche?</li><li>Welche Energieformen werden genutzt?</li><li>Besteht eine Zertifizierung nach ISO 14001, EMAS oder Vergleichbarem?</li><li>Werden Umweltdaten erfasst und veröffentlicht?</li><li>Gibt es ein System, mit dem ökologische Fußabdrücke ermittelt werden?</li>';

indicators[14].moreinfo.content = '<p><strong>ökologischer Fußabdruck: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></p><ul>    <li>ARTE: <a href="http://www.youtube.com/watch?v=uK9vv-0-iPE" class="external-link" rel="nofollow">Mit offenen        Karten – der ökologische Fußabdruck</a></li>    <li><a href="http://www.footprint.at/fileadmin/zf/dokumente/footprint_brosch_v3LM.pdf" class="external-link"           rel="nofollow">Broschüre zum Ökologischen Footprint</a></li>    <li><a href="http://www.footprint.at/index.php?id=rechner" class="external-link" rel="nofollow">verschiedene meist        private Footprint-Rechner für Österreich</a> (für EPUs)    </li></ul><p>&nbsp;</p><p><strong>Webseiten zu Wasseräquivalenten</strong></p><ul>    <li><a href="http://www.wasserfussabdruck.org/?page=files/home" class="external-link" rel="nofollow">http://www.wasserfussabdruck.org/?page=files/home</a>    </li>    <li><a href="http://www.waterfootprint.org/?page=files/home" class="external-link" rel="nofollow">http://www.waterfootprint.org/?page=files/home</a>    </li></ul><p>&nbsp;</p><p><strong>Redakteur: Lutz Knakrügge, <a href="mailto:lutz@mail.pcom.de" class="external-link"                                                           rel="nofollow">lutz@mail.pcom.de</a>, Vorarbeit: Christian    Loy, Mitarbeit: Christian Rüther</strong></p>';

indicators[15].bestPractices.content = '<p>Die in Gründung befindliche Demokratische Bank will „grundsätzlich keine Gewinne ausschütten“ (Auszug aus der    Vision): <a href="http://www.demba.at/" class="external-link" rel="nofollow">http://www.demba.at</a></p><p>Die    Regionalwert AG weist eine Fülle nichtmonetärer Gewinnaspekte aus: <a            href="http://www.regionalwertag.de/index.php?option=com_content&amp;view=article&amp;id=15:gewinn&amp;catid=29:aktie&amp;Itemid=15"            class="external-link" rel="nofollow">http://www.regionalwertag.de/index.php?option=com_content&amp;view=article&amp;id=15:gewinn&amp;catid=29:aktie&amp;Itemid=15</a></p><p>Düsselsolar: <a href="http://www.buefem.de/duessel-solar" class="external-link" rel="nofollow">http://www.buefem.de/duessel-solar</a></p>';

indicators[15].definition.content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">Drei Gründe lassen Kapitaleinkommen i. d. S., dass „aus Geld mehr Geld wird“ (ohne Arbeit) grundsätzlich in Frage stellen:</span></p><ul>    <li><strong>Wachsende Ungleichheit: </strong>Ein wachsender Anteil des Volkseinkommens stammt aus (arbeitslosen)        Kapitaleinkommen und ein sinkender Anteil aus Arbeitseinkommen (Löhne, Gehälter). Da das Finanzvermögen in den        Händen einer Minderheit konzentriert ist (zwanzig Prozent besitzen in Österreich rund 80 Prozent des        Finanzvermögens), bezieht diese Minderheit den Großteil aller Kapitaleinkommen. Die Mehrheit wird zu Gunsten der        KapitalbesitzerInnen strukturell enteignet – über Zinsen, Dividenden und Kursgewinne. Das gilt auch schon für        den „Inflationsausgleich“ auf Sparbüchern. Dieser muss finanziert werden – systemisch ist es die Gesamtheit der        KonsumentInnen, welche die Kreditkosten über den Kauf von Produkten und Dienstleistungen finanzieren; aus den        Kreditzinsen bezahlen Banken die Sparzinsen. 80 – 90 Prozent der Bevölkerung bezahlen jedoch mehr Kreditzinsen,        als sie an Sparzinsen erhalten – uns sei es auch nur der „Inflationsausgleich“. Bei 10 – 20 Prozent der        Bevölkerung ist es umgekehrt. Sie profitieren umso mehr, je höher die Sparzinsen sind. Der Zins ist ab dem        ersten Prozentpunkt ein Umverteilungsmechanismus von der großen Mehrheit zu einer kleinen Minderheit.    </li>    <li><strong>Wachstumszwang: </strong>Wenn Kapital verzinst werden muss, entsteht ein – systemischer –        Wachstumszwang. Doch die Wirtschaft kann nicht ewig wachsen. Von daher ist es sinnvoll, aus der Wachstumsspirale        auszusteigen, indem Kapital grundsätzlich nicht verzinst wird.    </li>    <li><strong>Mathematik:</strong> Langfristig ist eine Verzinsung des gesamten Finanzvermögens mathematisch gar nicht        möglich, wenn dieses ein immer größeres Vielfaches der Wirtschaftsleistung (BIP) ausmacht; denn Finanzvermögen        können nur vermehrt werden, wenn sie in die „reale“ Wirtschaft investiert werden und der Kapitalertrag von der        real erbrachten Wertschöpfung abgezweigt wird. Übersteigt jedoch das Finanzvermögen die reale Wirtschaft um ein        Vielfaches, kann das gesamte Finanzvermögen gar nicht mehr investiert – und verzinst – werden.<span                style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></li></ul>';

indicators[15].details.content = '<div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p align="center"><strong>Ausnahme: „GründerInnen-Rente“**</strong></p></td>            <td class="confluenceTd"><p align="center">Maximal das 3-fache des Durchschnittslohnes/-gehaltes</p></td>            <td class="confluenceTd"><p align="center">Maximal das 2-fache des Durchschnittslohnes/-gehaltes</p></td>            <td class="confluenceTd"><p align="center">Maximal das 1,5-fache des Durchschnittslohnes/-gehaltes</p></td>            <td class="confluenceTd"><p align="center">Maximal der Durchschnittslohn/-gehalt</p></td>        </tr>        <tr>            <td class="confluenceTd"><p align="center"><strong>Ausnahme: PE-/Venture-Kapital</strong></p></td>            <td class="confluenceTd"><p align="center">Ausnahmen: PE-/Venture-Kapital, Business Angels*</p></td>            <td class="confluenceTd"><p align="center">5-Jahresschnitt: Dividende nicht höher als Inflation plus 5%</p>            </td>            <td class="confluenceTd"><p align="center">5-Jahresschnitt: Dividende nicht höher als Inflation plus                2,5%</p></td>            <td class="confluenceTd"><p align="center">5-Jahresschnitt: Dividende nicht höher als Inflation</p></td>        </tr>        </tbody>    </table></div><p>&nbsp;</p><p>* <u>Begründung:</u> Manche Unternehmen sind noch zu jung oder klein, um an der Börse Kapial zu    erhalten oder von den Banken Kredit zu bekommen. Auf den „Risikokapitalmärkten“ sind hohe Kapitalrenten üblich; das    Redaktionsteam möchte Start-ups und Unternehmen, die keinen Zugang zu Banken haben, entgegen kommen, das Thema aber    gut im Auge behalten.</p><p>** <u>Begründung:</u> Manche GründerInnen nehmen sich jahre- oder jahrzehntelang nur ein    geringes Einkommen aus dem Unternehmen heraus (UnternehmerInnenlohn), damit sich dieses gut entwickeln kann und    damit sie später an den Früchten teilhaben wollen, manchmal auch zum Zweck der Renten-/Pensionsvorsorge. Der    Geltungszeitraum ist derselbe, in dem sie das Unternehmen aktiv aufgebaut haben. Wer von jung auf ein Unternehmen    aufgebaut hat, erhält eine Rente bis zum Tod. Wer das Unternehmen erst fünf Jahre vor Pensionsantritt gegründet hat,    eben nur fünf Jahre lang.</p><h4 id="E4Gemeinwohl-orientierteGewinnverteilung-Matrix41-häufigefragenzurBewertung">    häufige fragen zur Bewertung:</h4><p><strong style="font-size: 10.0pt;line-height: 13.0pt;"><em>Wie sieht das    Verhältnis von Aktiengesellschaft und Gemeinwohl-Orientierung aus?</em></strong></p><p>Der Gesetzeswortlaut des    österreichischen Aktiengesetzes kennt den Begriff des „öffentlichen Interesses“, unter welchem im Sinne eines    volkswirtschaftlichen Gesamtinteresses das Gemeinwohl verstanden wird. Ein Haftbarmachen von Vorstandsmitgliedern    für gemeinwohl-schädigendes Verhalten kann aus dieser Bestimmung jedoch nicht abgeleitet werden.</p><p>Das    österreichische Aktiengesetz und das Arbeitsverfassungsgesetz kennt, ebenso wie das deutsche Recht, den Begriff der    betrieblichen Mitbestimmung. In Österreich hat der Vorstand die Interessen der Arbeitnehmer von Gesetzeswegen zu    berücksichtigen. Beide Rechtsordnungen sehen die Entsendung von Arbeitnehmervertretern zur Wahrung ihrer Interessen    in den Aufsichtsrat vor.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E4-Minimierung-der-Gewinnausschuettung-an-Externe-CF/E4_4.1_Endversion%20nach%20Lektorat-1.docx#_ftn1"            title="" class="external-link" rel="nofollow">[1]</a></p><p>&nbsp;</p><p><strong><em>Kann ein Aktionär auf    den Gewinnanspruch (Dividende) zur Förderung des Gemeinwohls verzichten?</em></strong></p><p>Das österreichische und    deutsche Aktienrecht entbehren einer Regelung zur Zulässigkeit und zur Umsetzung des Verzichts auf den    Gewinnanspruch. Ein Dividendenverzicht müsste in der Satzung der Aktiengesellschaft verankert werden. Dies kann    weitere rechtliche Fragestellungen aufwerfen, wie etwa ob der Verzicht dem Wesen der Aktiengesellschaft zuwider    läuft.</p><p>&nbsp;</p><h4 id="E4Gemeinwohl-orientierteGewinnverteilung-Matrix41-abgrenzungzuanderenindikatoren">    abgrenzung zu anderen indikatoren:</h4><p><span style="font-size: 10.0pt;line-height: 13.0pt;">GläubigerInnen: Ethisches Finanzmanagement B1</span></p><p>„Arbeit-Gebende“: Innerbetriebliche Demokratie und Transparenz E5</p><p>Demokratisches    Gemeinwesen/Zivilgesellschaft: Beitrag zum Gemeinwesen E2</p>';

indicators[15].footnotes.content = '<a href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E4-Minimierung-der-Gewinnausschuettung-an-Externe-CF/E4_4.1_Endversion%20nach%20Lektorat-1.docx#_ftnref1"   title="" class="external-link"   rel="nofollow">[1]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Abarahnlich: Gesetzesentwurf der europäischen Kommission vom November 2012 für eine Frauenquote in Aufsichtsräten. Dieser Vorschlag findet sich auch bei C.Felber, Gemeinwohl-Ökonomie, 2. Auflage.';

indicators[15].goals.content = '<p>Die Verwendung der Gewinne von Unternehmen ist einer der heißesten Diskussionspunkte in der Wirtschaft. Die Debatte    entzündet sich an den steigenden Ausschüttungsquoten börsennotierter Aktiengesellschaften – auf Druck der    globalisierten Finazmärkte. 2010 schütteten sieben der dreißig DAX-Konzerne mehr Geld an die AktionärInnen aus, als    sie im Vorjahr Gewinn gemacht hatten. Auch kleinere Unternehmen können einen Teil oder sogar ein Vielfaches des    Gewinnes an die EigentümerInnen ausschütten, selbst wenn diese gar nicht (mehr) mitarbeiten.</p><p>Ziel ist, dass    die Gewinne eines Unternehmens so gerecht, sinnstiftend und gemeinwohlfördernd wie möglich verteilt/reinvestiert    werden. Einkommen sollen grundsätzlich an Arbeitsleistungen gekoppelt werden. Kapitalbesitz soll nicht mehr zu einem    Anspruch auf ein Einkommen führen. (Ausnahme: GründerInnen, die eine „GründerInnen-Rente“/“GründerInnen-Pension“ für    eine gleich lange Zeitspanne erhalten, in der sie das Unternehmen durch ihre aktive Arbeit aufgebaut haben.)</p>';

indicators[15].implementationHelp.content = '<p align="left">Studium von Bürgerbeteiligungsmodellen wie der Regionalwert AG in Freiburg, der taz („tageszeitung“),    diverser Energiegenossenschaften oder des Projekts Demokratische Bank.</p><p align="left">Neugestaltung der    Investor-Relations-Beziehungen in Richtung Sensibilisierung für die Auswirkungen von Kapitalrenditen und des    Zinssystems.</p>';

indicators[15].impulsQuestions.content = '<ul>    <li>Was ist das Ziel eines Unternehmens?</li>    <li>Was&nbsp; bedeutet „Leistung“ für uns?</li>    <li>Soll Kapital grundsätzlich einen Vermehrungsanspruch stellen dürfen?</li>    <li>Welche systemischen Folgen haben Kapitalrenditen (aus Geld wird mehr Geld ohne Arbeitsleistung)?</li>    <li>Sehen wir einen Zusammenhang zwischen der Gewohnheit von Kapitalrenditen und Wachstumszwang in der        Wirtschaft?<span style="font-size: 10.0pt;line-height: 13.0pt;">&nbsp;</span></li></ul>';

indicators[15].moreinfo.content = '<h5 id="E4Gemeinwohl-orientierteGewinnverteilung-Matrix41-ZumThemaWachstumszwang">Zum Thema Wachstumszwang:</h5><ul>    <li>De-growth-Bewegung: <a href="http://www.demokratische-bank.at/" class="external-link" rel="nofollow">http://www.degrowth.net</a>    </li>    <li>Casse: <a href="http://www.demokratische-bank.at/" class="external-link"                  rel="nofollow">http://steadystate.org</a></li>    <li>Nico Paech: „Befreiung vom Überfluss. Auf dem Weg in die Postwachstumsökonomie“, oekom 2012.</li>    <li>Irmi Seidl / Angelika Zahrnt (Hg): „Postwachstumsgesellschaft. Konzepte für die Zukunft“, Metropolis 2010.</li>    <li>Tim Jackson: „Wohlstand ohne Wachstum. Leben und wirtschaften in einer endlichen Welt“, oekom 2011.</li></ul><h5 id="E4Gemeinwohl-orientierteGewinnverteilung-Matrix41-ZumThemaFinanzvermögen">Zum Thema Finanzvermögen:</h5><ul>    <li>World Wealth Report:</li>    <li>        <a href="http://www.capgemini.com/services-and-solutions/by-industry/financial-services/solutions/wealth/worldwealthreport/"           class="external-link" rel="nofollow">http://www.capgemini.com/services-and-solutions/by-industry/financial-services/solutions/wealth/worldwealthreport/</a>    </li>    <li>Global Wealth Report:</li>    <li>        <a href="https://infocus.credit-suisse.com/app/article/index.cfm?fuseaction=OpenArticle&amp;aoid=368967&amp;lang=EN"           class="external-link" rel="nofollow">https://infocus.credit-suisse.com/app/article/index.cfm?fuseaction=OpenArticle&amp;aoid=368967&amp;lang=EN</a>    </li></ul><p>&nbsp;</p><div><p>RedakteurIn: Christian Felber: <a href="mailto:info@christian-felber.at" class="external-link" rel="nofollow">info@christian-felber.at</a>;    Mitarbeit: Nonno Breuss, Harro Colshorn, Angela Drosg-Plöckinger, Gisela Heindl, Christian Loy, Christian Rüther.</p></div>';

indicators[16].bestPractices.content = '<h6 id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-TheBodyShop"><strong>The Body Shop </strong></h6><p>The    Body Shop ist sicherlich ein sehr glaubwürdiges Beispiel für die Involvierung der Berührungsgruppen. Im Indikator D1    „Ethisches Verkaufen“ wird unter KundInnenmitbestimmung SMUD, ein regionaler Energieanbieter aus Kalifornien    angeführt, der auch Pionier in dem Bereich der Einbindung seiner Berührungsgruppen ist.</p><p>Maak und Ullricht    führen Anita Roddicks „Body Shop“ als ein Fallbeispiel für einen Pionier im Stakeholdermanagement an, das ich hier    wörtlich zitieren möchte:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn13"            title="" class="external-link" rel="nofollow">[13]</a></p><p>„Anita Roddick gründete das Kosmetikunternehmen    `The Body Shop` zunächst als `Ein-Frau-Geschäft` 1976 in Brighton (UK). Abgestoßen von Tierversuchen,    Verpackungsmüll und falschen Versprechungen der Kosmetikindustrie setze sie von Begin an auf eine integrative    Wertschöpfung, d.h. nicht nur auf ökonomische Performance, sondern auch und vor allem auf soziale und ökologische    Kriterien. Von ihren zahlreichen Reisen inspiriert, erdachte sie eine Vielzahl an Naturkosmetikprodukten und setzte    auf möglichst einfache und umweltfreundliche Verpackungen. Im später definierten Mission-Statement des Unternehmens    heißt es: […] mit der Geschäftstätigkeit streben wir nach sozialem und ökologischem Wandel.</p><p>Für soziale und    gesellschaftliche Herausforderungen sensibilisiert, versuchte das Unternehmen früh, das integrative    Wertschöpfungsmodell auch in geeignete Instrumente der Geschäftsführung zu übersetzen. Anita Roddick wusste als    politisch aktive Unternehmerin, dass die Öffentlichkeit ein Recht auf Transparenz auch jenseits finanzieller    Kennzahlen hatte. The Body Shop führte in den 90er-Jahren als Pionierunternehmen das Konzept des `Ethical Auditing´    ein und erkannte, dass der Dialog mit den Anspruchsgruppen des Unternehmens eine wichtige Funktion haben würde. In    den drei Hauptbereichen `Ökologische Aspekte´, `Soziale Aspekte´ und `Tierversuche’ sollte gemeinsam mit den    Stakeholdern beraten werden. Doch wer waren diese Stakeholder – wen sollte man zu Gesprächen einladen und wie diesen    Diskurs vorbereiten?</p><p>Man wollte den Dialog von Beginn an so inklusiv wie nur möglich gestalten. Einen globalen    Dialog anzustoßen - das Unternehmen war mittlerweise auch international sehr erfolgreich - hätte aber die    Kapazitäten des Unternehmens gesprengt, und so einigte man sich darauf, zunächst im Heimatland Großbritannien zu    beginnen. Als erstes wurden relevante Anspruchsgruppen aufgefordert, ihren Standpunkt zu der Unternehmenspolitik zu    formulieren. Zu den identifizierten Stakeholdern gehörten: Angestellte, Franchise-Nehmer, Kunden, Zulieferer,    Aktionäre, Vertreter lokaler Gemeinschaften und Nichtregierungsorganisationen. Nachdem die offensichtlichsten    Probleme ermittelt waren, versandte The Body Shop Fragebögen mit dem Ziel, die Unternehmensleistung in Anbetracht    der Stakeholderansprüche und der gesetzten Vorgaben (Mission Statement) zu evaluieren. Die Ergebnisse wurden von    einer unabhängigen Organisation ausgewertet und schließlich publiziert. Anschließend wurde der Report an alle    Beteiligten versandt mit der Bitte, Feedback zu den Ergebnissen abzugeben, welche dann in einem Folgetreffen    diskutiert wurden.</p><p>&nbsp;Anschaulich wird dieser Prozess im Werte-Bericht 1997 von The Body Shop dargestellt,    wobei sich die nachfolgende Abbildung 5-1 exemplarisch auf den Bereich `Soziale Aspekte´ beschränkt. Eine ähnliche    Methodik wurde in den Bereichen `Ökologische Aspekte’ sowie `Tierversuche’ angewendet. Innerhalb des Reports wurden    die verschiedenen Stakeholder dazu aufgefordert, zu folgenden Punkten Stellung zu nehmen:</p><p>(1)&nbsp; Das    Vorgehen von The Body Shop im Dialog</p><p>(2)&nbsp; Informationen der jeweiligen Stakeholder</p><p>(3)&nbsp; Die    Methodik der Konsultation</p><p>(4)&nbsp; Die Ergebnisse des Konsultationsprozesses, sowie</p><p>(5)&nbsp;    Qualitative und quantitative Standards der Evaluation.</p><p>Um gemeinsam nächste Schritte zu kommunizieren,    antwortete auf jede dieser Sektionen ein Mitglied der Geschäftsführung von The Body Shop.</p><p>Eine Verifikation    der Ergebnisse wurde am Ende des Reports von führenden Audit-Institutionen in jedem der drei Hauptgebiete    vorgenommen […]. In einigen lokalen Gebiete wurden zudem Advisory Panels eingeführt. Lokalen Stakeholdern wurde    darin die Möglichkeit geboten, als Berater vor Ort dem Unternehmen ihre Sichtweisen dazulegen und dafür zu sorgen,    dass lokales Engagement des Unternehmens möglichst effektiv ist, sowie den Stakeholderdialog insgesamt zu    verbessern.“</p><h1 id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-"><img        class="confluence-embedded-image"        src="/download/attachments/1540290/Bodyshop-Kreis.jpg?version=1&amp;modificationDate=1355674751000"        data-image-src="/download/attachments/1540290/Bodyshop-Kreis.jpg?version=1&amp;modificationDate=1355674751000"></h1><p>&nbsp;</p><h6 id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-Premium-Cola">    <strong>Premium-Cola</strong></h6><p>Bei „Premium-Cola“ sollen &nbsp;alle Beteiligten, auch die Endkunden,    mitbestimmen können wie das Unternehmen geführt wird. Damit soll sichergestellt werden, dass alle Beteiligten fair    behandelt werden. Die Ziele sind:</p><ul>    <li>Auftragnehmer werden zu Stakeholdern</li>    <li>Umweltwirkungen werden besser berücksichtigt</li>    <li>Gute Lösungen können sich durchsetzen - fast unabhängig davon, von wem sie eingebracht werden.&nbsp;</li></ul><p>Die besondere Arbeitsweise nach der Premium-Cola (und Premium-Bier) betrieben werden wird von den Machern    <strong>"Betriebssystem"&nbsp;</strong><a            href="http://www.premium-cola.de/betriebssystem/159-premium-betriebssystem" class="external-link"            rel="nofollow">http://www.premium-cola.de/betriebssystem/159-premium-betriebssystem</a> genannt: Sie steuern    die „Hardware“ (Flaschen, Kisten, LKW, ... ) mit einer gedanklichen Software aus vielen kleinen Programmen zur oben    dargelegten Grundidee, wie Unternehmen arbeiten sollten.</p><p>Wie jede Software soll auch diese laufend    weiterentwickelt werden. Deshalb gibt es ein <strong>Wiki</strong> (dem diese Informationen entnommen sind), das von    allen Kunden und Beteiligten bearbeitet und erweitert werden kann <a            href="http://wiki.premium-cola.de/index.php?title=Hauptseite" class="external-link" rel="nofollow">http://wiki.premium-cola.de/index.php?title=Hauptseite</a>.    Premium Cola wünscht sich, dass andere Unternehmen die einzelnen Teile oder das ganze System kopieren und es dadurch    verbreiten und verbessern - deshalb kosten die Inhalte nichts. Es muss nur die Herkunft genannt werden und es wird    der Wunsch geäußert, dass Weiterentwicklungen z.B. aus anderen Branchen zu Premium Cola zurückgespiegelt werden.    Dies nennt Premium Cola „<strong>Open Franchise</strong>“.</p><p>&nbsp;</p><h6        id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-REWEGroup&nbsp;"><strong>REWE Group </strong>&nbsp;</h6><p>In Kooperation von Global 2000 (E5-Stakeholder) &amp; Caritas (E5-Stakeholder) wurde 2010 mit der REWE Group das    „Pro Planet Siegel“ für konventionelle Land-wirtschaftsprodukte entwickelt, um diese Produkte umweltfreundlicher und    sozial verträglicher weiter zu verändern.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn14"            title="" class="external-link" rel="nofollow">[14]</a></p><p>Dies ist ein erster Ansatz, bei dem die E5-    Stakeholder nicht nur um ihre Meinung gefragt werden sondern auch Mitentwickeln.</p><p>Kritisch zu hinterfragen sind    hier allerdings, wieso nicht stattdessen Bio-Landwirtschaft noch mehr gefördert wird, ob ein weiteres Siegel nicht    zu mehr Verwirrung bei den Verbrauchern führt und was die konkreten, nachweisbaren Erfolge sind.</p>';

indicators[16].definition.content = '<p>Wolfgang G. Weber sowie das internationale Forschungsnetzwerk OPEN<a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn4"        title="" class="external-link" rel="nofollow">[4]</a> zitiert folgende Abstufung der (MitarbeiterInnen)    Beteiligung, die auch für diesen Indikator angewandt werden kann:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn5"            title="" class="external-link" rel="nofollow">[5]</a></p><ol>    <li>Keine Partizipation</li>    <li>Information</li>    <li>Anhörung ( = Konsultation)</li>    <li>Mitwirkung</li>    <li>Mitbestimmung, Mitentscheidung</li>    <li>Selbstbestimmung</li></ol><p>Je höher der Grad der Mitbestimmung ist, desto positiver wird dies in diesem Indikator bewertet. Dabei geht es    nicht nur darum, den Wert der „Demokratie“ auf möglichst viele gesellschaftliche Bereiche zu erweitern    (Demokratisierung), sondern auch um das Einbeziehen der kollektiven Intelligenz. Diese Form der Mitbestimmung trägt    dazu bei, dass die unterschiedlichen Tätigkeiten eines Unternehmens weiser, nachhaltiger und „besser“ werden.</p><p>    Es gibt zwei Hauptmotive für die Einbeziehung der Berührungsgruppen:</p><p>1)&nbsp;&nbsp;&nbsp; <strong>Eigeninteresse    des Unternehmens:</strong>&nbsp;Unternehmerische Ziele können mit höherer Bestimmtheit erreicht werden, wenn die    Berührungsgruppen adäquat und effektiv eingebunden werden. Auch gegen mögliche juristische Spätfolgen (wie Klagen    oder Schadenersatzansprüche von Anwohnern oder Geldgebern) wirkt Stakeholderpartizipation präventiv.</p><p>2)&nbsp;&nbsp;&nbsp;    <strong>Verpflichtung gegenüber der Gemeinschaft:</strong>&nbsp;<span            style="line-height: 13.0pt;font-size: 10.0pt;">Mitbestimmung wird als Wert an sich betrachtet und daher wird ein relevanter Anteil der Unternehmensentscheidungen öffentlich diskutiert und so umfassend und effektiv wie möglich konsensual entschieden.</span></p><p>Voraussetzung für eine Mitwirkung des gesellschaftlichen Umfeldes ist eine umfassende Transparenz über interne    Entscheidungsprozesse und deren mögliche Auswirkungen sowie ein leichter Zugang zu diesen Informationen.</p><p>Auf    der Ebene der Unternehmenstransparenz hat sich im Rahmen der Nachhaltigkeits­berichterstattung der Standard der    Global Reporting Initiative (GRI) etabliert. Trotz stetig steigen­den Anforderungen des GRI-Standards sind dennoch    Themen von ethischer Relevanz nur lückenhaft adressiert.</p><p>Der Gemeinwohl-Bericht der GWÖ ist eine weitere    Möglichkeit, diese gesellschaft­liche Transparenz herzustellen.</p><p>Ein detaillierter Vergleich zwischen    GWÖ-Indikatoren und GRI-Standards ermöglicht es Unternehmen, die bisher ihre Nachhaltigkeitsberichte nach GRI-Normen    geschrieben haben, leichter auf die GWÖ-Berichte umzusteigen.<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn6"            title="" class="external-link" rel="nofollow">[6]</a></p><p>GWÖ-Berichte werden bei diesem Indikator für das    Kriterium Transparenz höher bewertet, weil sie uns umfassender erscheinen und zudem immer von unabhängigen    AuditorInnen überprüft werden.</p><p></p><h1 id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-MitbestimmungStakeholder-partizipation">    Mitbestimmung/ Stakeholder-partizipation</h1><p>Maack/ Ulrich unterscheiden von der Motivation und Ausprägung her    zwei Formen des Stakeholder-Engagements:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn7"            title="" class="external-link" rel="nofollow">[7]</a></p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>„Altertümliches“ Stakeholder Management</strong></p></td>            <td class="confluenceTd"><p><strong>„Modernes“ Stakeholder Management</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Strategisch motiviert (Primat der `Erfolgs-rationalität´)</p></td>            <td class="confluenceTd"><p>Ethisch-reflektiert (Primat der Legitimität)</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Technokratisch-manipulativ</p></td>            <td class="confluenceTd"><p>Verständigungsorientiert</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Management von Einflusspotenzialen</p></td>            <td class="confluenceTd"><p>Beziehungsgestaltung</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Immunisierung gegen Kritik machtvoller Stakeholder (`Schutzschild-Ansatz)</p>            </td>            <td class="confluenceTd"><p>Aufbau von Vertrauen und Erschließung von Kooperationsmöglichkeiten</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>`Kurz- &amp; mittelfristige Gewinne´</p></td>            <td class="confluenceTd"><p>Langfristigkeitsperspektive</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Motto: `… weil es gefordert wird – oder sich rechnet…´</p></td>            <td class="confluenceTd"><p>Motto: `weil es das Richtige ist´ und unserem Verständnis als                verantwortungsbewussten Bürgers entspricht</p></td>        </tr>        </tbody>    </table></div><p>Diese Übersicht gibt eine erste Hilfe für die Unterscheidung, ob das Stakeholder Management nachhaltig und    beziehungsorientiert ist oder ob es nur eine weitere Maßnahme für die Steigerung des „Shareholder-Values“ &nbsp;ist.    Die Mitbestimmung nach unserem Verständnis geht noch deutlich über das „Moderne Stakeholder Management“ hinaus.</p><p>Ein erster Schritt in die Richtung mehr Mitbestimmung sind Stakeholder-Dialoge, wobei für die Bewertung derselben    wesentlich ist, inwieweit die Berührungsgruppen wirklich mitentscheiden können bzw. deren Anregungen umgesetzt    werden. Reden ohne zu Handeln wird maximal als „Erste Schritte“ bewertet.</p><p>Für den Stakeholder-Dialog gibt es    laut Maak/Ulrich folgende Leitideen, die auch für andere Maßnahmen als Orientierung gelten könnten:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn8"            title="" class="external-link" rel="nofollow">[8]</a></p><ul>    <li>Wechselseitige Achtung und Anerkennung</li>    <li>Verständigungsbereitschaft</li>    <li>Inklusion aller Betroffenen</li>    <li>Chancengleichheit</li>    <li>Begründungsorientierung – Auseinandersetzung auf Basis von Argumenten</li>    <li>Aufrichtigkeit und Ehrlichkeit</li>    <li>Reflexionsbereitschaft</li>    <li>Zuhören – Argumentationszugänglichkeit</li>    <li>Zwanglosigkeit der Gesprächssituation</li></ul><p><strong>Mögliche Vor- und Nachteile von Stakeholder-Dialogen/ Management</strong></p><p>Maak/Ulrich formulieren    folgende Vorteile für ein aktives Stakeholder-Management:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn9"            title="" class="external-link" rel="nofollow">[9]</a></p><ul>    <li>Risikominimierung</li>    <li>Verbesserte Entscheidungsqualität</li>    <li>Wechselseitiges Verständnis</li>    <li>Tragfähige Beziehungen</li>    <li>Verdiente Reputation</li>    <li>Vertrauen</li></ul><p>Natürlich gibt es auch mögliche Nachteile, wie z.B.:</p><ul>    <li>Längere Dauer von Entscheidungsprozessen</li>    <li>Erhöhter Aufwand an interner/externer Kommunikation</li>    <li>Problematik der Auswahl der Themen, über die mitbestimmt werden kann</li>    <li>Aufwand für den Prozess an sich<span style="line-height: 13.0pt;font-size: 10.0pt;">&nbsp;</span></li></ul><p>Etwas umfassender werden die Vorteile in einem Manual zur Durchführung von Stakeholder-Dialogen dargestellt, das    vom Bundesministerium für wirtschaftliche Entwicklung und Zusammenarbeit in Deutschland in Auftrag gegeben    wurde:</p><ul>    <li>„Kompetenzen werden gebündelt. Die Herausforderungen, beispielsweise durch wachsende Armut, Klimawandel,        HIV/AIDS, Korruption und Globalisierung, erfordern eine Bündelung der Expertise verschiedener Akteure.    </li>    <li>Die Zusammenarbeit in Stakeholder-Dialogen fördert eine effizientere Nutzung von Mitteln und Ressourcen, da        diese gemeinsam eingesetzt werden.    </li>    <li>Die in Kooperation erreichten Ergebnisse sind oft belastbarer, tragfähiger und nachhaltiger als Einzellösungen        und werden daher von den beteiligten Stakeholdern eher angenommen. Auch das Umfeld der Stakeholder akzeptiert        sie eher. Dies fördert die Akzeptanz und Reputation der Zusammenarbeit.    </li>    <li>Stakeholder-Dialoge steigern die Kapazität von komplexen Systemen, Lösungen zu finden. Das Zusammenführen        unterschiedlicher Kompetenzen und eine gemeinsame Gestaltung erhöhen die Lernfähigkeit im Vergleich zu        Aktivitäten nur in einer Institution oder nur in einem Sektor.    </li>    <li>Die Qualität und Glaubwürdigkeit von Meinungsbildungsprozessen steigt, wenn vielseitige Sichtweisen integriert        und Interessen ausbalanciert werden. Die Kenntnis verschiedener Argumente verhindert starre Positionen.        Allerdings fällt es häufig schwerer, Entscheidungen praktisch umzusetzen.    </li>    <li>Gemeinsam vereinbarte Strategien sind leichter umzusetzen, wenn sie in einem gleich­berechtigten, transparenten        Dialog entwickelt wurden. Dann müssen Stakeholder von den Beschlüssen nicht erst überzeugt werden, sondern        identifizieren sich sofort mit den erarbeiteten Ergebnissen.    </li>    <li>Stakeholder-Dialoge erhöhen die Bereitschaft zur Selbstverpflichtung, da die beteiligten Akteure die        Zukunftsgestaltung beeinflussen können. Sie fühlen sich mitverantwortlich, sind daher interessiert am        gemeinsamen Erfolg und multiplizieren die Ergebnisse.    </li>    <li>Stakeholder-Dialoge lösen gesellschaftliche Starre und Konflikte. Aktive Beteiligung an Stakeholder-Dialogen        fördert ein gemeinsames Ausloten von Zukunftsmöglichkeiten. Dies erweitert die Perspektiven der Beteiligten und        eröffnet neue Handlungsmöglichkeiten für alle.“<a                href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn10"                title="" class="external-link" rel="nofollow">[10]</a></li></ul><p>Prinzipiell stehen einem höheren Aufwand für die Organisation und eine längere Zeit bis zur Umsetzung deutliche    Vorteile gegenüber. Gemeinwohlorientiertes Verhalten kann auch wirtschaftlich erfolgreich sein!</p><h1        id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-Widerstände-Fragen">Widerstände - Fragen</h1><p>    Ähnlich wie bei der Innerbetrieblichen Mitbestimmung gibt es vielfache Einwände gegen die gesellschaftliche    Mitwirkung. Hier sind einige Einwände aufgelistet und ein paar Antworten aus Sicht der Gemeinwohl-Ökonomie    gegeben.</p><p align="left"><strong>„Wieso soll es überhaupt eine Mitbestimmung von außen geben, warum sollen    Externe über Interna entscheiden?“</strong></p><p align="left">Demokratiepolitisch scheint es nachvollziehbar, dass    die von einem Unternehmen betroffenen Umwelten eine direkte Mitsprachemöglichkeit haben. Indirekt funktioniert das    über die lokalen und nationalen Regierungen, direkt ist es derzeit kaum möglich. Wirtschaften findet nicht im    luftleeren Raum statt, sondern hat ökologische, ökonomische und soziale Auswirkungen.</p><p align="left">Sinnvoll    können Stakeholder-Dialoge sein, wenn:</p><ul>    <li>"ein Anliegen nur mit Unterstützung verschiedener Akteursgruppen und Entscheidungsträger umgesetzt werden        kann,    </li>    <li>die nachhaltige Umsetzung die Akzeptanz bestimmter Anspruchsgruppen (Betroffene und Beteiligte) voraussetzt        oder    </li>    <li>eine Veränderung des Status Quo angestrebt wird, die relevanten Akteure sich jedoch in Bezug auf Richtung, Ziel        und Umsetzungsmodalitäten der Veränderung nicht einig sind.“<a                href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn11"                title="" class="external-link" rel="nofollow">[11]</a></li></ul><p align="left">Für den einzelnen Unternehmer ist es ein Experimentierfeld, das derzeit nur dann erfolgreich sein    kann, wenn das Unternehmen hinter den Grundgedanken der Demokratie steht und diese Mitbestimmungsprozesse auch    positive Auswirkungen auf die Organisation selbst haben.</p><p align="left"><strong>„Derzeit gibt es kaum eine    gesellschaftliche Mitbestimmung in Unternehmen, wieso soll ich damit anfangen?“ </strong></p><p align="left">Für    alle wesentlichen Neuerungen in der Gesellschaft braucht es Pioniere, die anfangen. Ohne diese „Anfänger“ gibt es    keinen Wandel. Und so ein „Anfängerdasein“ ist oftmals mühselig, schwierig und ungewiss im Ausgang, gleichzeitig    kann es sehr erfüllend sein, wenn der Pionier nach zehn Jahren zurückblickt und sagen kann: „Ich bin mir meinen    Werten treu geblieben und habe trotz des Aufwandes einiges erreicht!“.</p><p align="left">Und dieses Pionier-Denken    ist prinzipiell unabhängig in welchem Bereich es verwirklicht wird.</p><p><strong>„Bei welchen Entscheidungen dürfen    welche Berührungsgruppen mitentschei­den?“</strong></p><p>Bei der Analyse der Stakeholder gibt es drei Kriterien,    die eine erste Auswahl treffen helfen:<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn12"            title="" class="external-link" rel="nofollow">[12]</a></p><ul>    <li>Die Betroffenheit/ das Interesse der Stakeholder: niedrig, mittel, hoch.</li>    <li>Die vermutete/ wirkliche Reaktion auf die Maßnahmen/ das Projekt: positiv, neutral, negativ</li>    <li>Die reale Macht der Stakeholder: niedrig, mittel, hoch.</li></ul><p>Auf Basis dieser Kriterien kann das Unternehmen eine Matrix erstellen und so eine erste Differenzierung    vornehmen. Letztendlich entscheidet das Unternehmen nach ihren Ressourcen und Interessen, welche Stakeholder es im    Vorfeld einbezieht. Strategisch sollten die eingebunden werden, die durch ihren Widerstand einen negativen Einfluss    auf das Unternehmen sowie das Image haben. Idealerweise sollten alle interessierten und betroffenen    Berührungsgruppen eingebunden werden.</p>';

indicators[16].details.content = '<p><strong>Transparenz</strong></p><p>Die Transparenz wird im wesentlichen über einen GWÖ-Bericht oder    Nachhaltigkeitsbericht erfüllt. Wenn es andere Veröffentlichungen gibt (Homepage/Broschüren), dann gelten die    Bewertungsmaßstäbe analog zu dem GWÖ- und Nachhaltigkeitsbericht (Umfang/Tiefe)</p><p>Sollte im letzten Jahr kein GWÖ-Bericht erstellt worden sein, dann kann es für einen Nachhaltigkeits­bericht folgende    Bewertung geben:</p><p>Prinzipiell gilt: Je größer das Unternehmen ist, desto höher ist die Bewertung der wirklichen Mitbestimmung im    Vergleich zur Transparenz.</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Mitarbeiterzahl</strong></p></td>            <td class="confluenceTd"><p><strong>Gewichtung Transparenz</strong></p></td>            <td class="confluenceTd"><p><strong>Gewichtung Mitbestimmung</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p>1-2</p></td>            <td class="confluenceTd"><p>80 -100%</p></td>            <td class="confluenceTd"><p>0-20%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>3-10</p></td>            <td class="confluenceTd"><p>70-90%</p></td>            <td class="confluenceTd"><p>10-30%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>11-50</p></td>            <td class="confluenceTd"><p>60-80%</p></td>            <td class="confluenceTd"><p>20-40%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>51-250</p></td>            <td class="confluenceTd"><p>50-70%</p></td>            <td class="confluenceTd"><p>30-50%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>251-1.000</p></td>            <td class="confluenceTd"><p>40-60%</p></td>            <td class="confluenceTd"><p>40-60%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Über 1.000</p></td>            <td class="confluenceTd"><p>30-50%</p></td>            <td class="confluenceTd"><p>50-70%</p></td>        </tr>        </tbody>    </table></div><p>Auch hier wäre noch detaillierter zu differenzieren, ob es sich um Dienstleistungs- oder Produktionsbetriebe handelt.    Dienstleistungsunternehmen haben prinzipiell eher geringere Auswirkungen auf die Umwelt als Produktionsunternehmen.    Ausnahmen sind z.B. Architekten, Banken und PR-Agenturen.</p><p>Auch muss bei jedem Unternehmen konkret geschaut    werden, welche Entscheidungen mögliche Stakeholder beeinflussen könnten und bei wie vielen davon welche Art von    Mitbestimmungsmög­lich­keit angewendet wurde.</p><p>&nbsp;</p><p><strong><u>Kritische Daten/    Entscheidungen</u></strong></p><p>Hier folgt eine Liste von kritischen Daten/ Entscheidungen, bei denen Transparenz    und Mitbestimmung höchst erwünscht sind:</p><ul>    <li>Bauvorhaben aller Art; Umweltverträglichkeitsprüfungen</li>    <li>Produktionsprozesse mit Risikostoffen sowie potentiellen Beeinträchtigungen der Anrainer durch Emissionen (in        Luft, Wasser, Boden), Lärm, Geruch, Lichtverschmutzung etc.    </li>    <li>Eingriffe in die Natur</li>    <li>Standortverlagerungen und der damit im Zusammenhang stehende Arbeitsplatzabbau</li>    <li>Beteiligungen an anderen Unternehmen und Tochtergesellschaften in Steueroasen</li>    <li>Lobbyingzahlungen an politische Entscheidungsträger/ - institutionen (Parteien/ Verbände)</li></ul><p><strong>&nbsp;</strong></p><p><strong>Unternehmensspezifische Besonderheiten</strong></p><p>Sowohl für EPUs    (Einpersonenunternehmen) als auch für alle anderen Unternehmen kann ein umfassend ausgefüllter Gemeinwohl-Bericht    bis zu 100% des Transparenz-Anteiles ausmachen.</p><p>Für EPUs kommt der Aspekt der Mitbestimmung kaum in Betracht,    weil die Auswirkungen von EPUs sehr gering sind. Je kleiner ein Unternehmen, desto unwesentlicher ist der Aspekt der    gesellschaftlichen Mitbestimmung.</p><p>Der GWÖ-Bericht kann entweder in einen GRI-Nachhaltigkeitsbericht integriert    werden, wobei die GWÖ-spezifischen Indikatoren konkret ausgearbeitet werden sollten, oder der GWÖ-Bericht kann    anstelle eines Nachhaltigkeitsberichts stehen.</p><p>Fehlende Website gibt 20% Minus in der Gesamtpunktzahl.</p><p>    Gibt es weder einen GWÖ-Bericht noch einen Nachhaltigkeitsbericht aus dem letzten Jahr, dann können es max. erste    Schritte sein. Es sei denn, es liegen Dokumentationen/ eine Homepage vor, die inhaltlich/ vom Umfang/ der Tiefe her    mit beiden Berichten vergleichbar sind.&nbsp;</p>';

indicators[16].footnotes.content = '<div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref1"        title="" class="external-link" rel="nofollow">[1]</a> Mit Stakeholder sind die relevanten Berühungsgruppen    gemeint, hier die regionalen oder zivilgesellschaftlichen Berührungsgruppen</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref2"        title="" class="external-link" rel="nofollow">[2]</a> &nbsp;Kritische Daten sind z.B. Beteiligungen an anderen    Unternehmen und Tochtergesellschaften in Steueroasen, Lobbyingzahlungen an politische Entscheidungsträger/ -    institutionen (Parteien/ Verbände)</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref3"        title="" class="external-link" rel="nofollow">[3]</a> Auf Basis der Vorgaben des GRI = Global Reporting    Initiative – derzeitiger Standard in der Nachhaltigkeitsberichterstattung, siehe auch <a            href="http://www.globalreporting.org/" class="external-link" rel="nofollow">www.globalreporting.org</a></p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref4"        title="" class="external-link" rel="nofollow">[4]</a> Organizational Participation in Europe Network (OPEN)</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref5"        title="" class="external-link" rel="nofollow">[5]</a> Vgl. Weber, Wolfgang: Demokratie, 1994, S.272; Wegge,    Jürgen: Motivation, 2010, S. 159.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref6"        title="" class="external-link" rel="nofollow">[6]</a> Dieser Vergleich ist auf unseren Wiki abrufbar: <a        href="https://wiki.gwoe.net/pages/viewpage.action?pageId=1540419" rel="nofollow">https://wiki.gwoe.net/pages/viewpage.action?pageId=1540419</a>    &nbsp;</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref7"        title="" class="external-link" rel="nofollow">[7]</a> Maak, Thomas/ Ulrich, Peter: Unternehmensführung, 2007, S.    177.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref8"        title="" class="external-link" rel="nofollow">[8]</a> Vgl. Maak, Thomas/ Ulrich, Peter: Unternehmensführung,    2007, S. 184-5.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref9"        title="" class="external-link" rel="nofollow">[9]</a> Vgl. Maak, Thomas/Ulrich, Peter: Unternehmensführung,    2007, S. 178-80.</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref10"        title="" class="external-link" rel="nofollow">[10]</a> GIZ: Manual, S.5+6</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref11"        title="" class="external-link" rel="nofollow">[11]</a> GIZ: Stakeholderdialoge. Ein Manual, gefunden auf: <a        href="http://www2.gtz.de/dokumente/bib-2011/giz2011-0182de-stakeholder-dialoge.pdf" class="external-link"        rel="nofollow">http://www2.gtz.de/dokumente/bib-2011/giz2011-0182de-stakeholder-dialoge.pdf</a>, S. 7.    (03.08.2011)</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref12"        title="" class="external-link" rel="nofollow">[12]</a> Vgl. 9:pm: Stakeholdermanangement. Ein    Best-Practise-Ansatz, auf <br> <a            href="http://www.virtualuniversity.ch/%20autor/weilacher/stakeholdermanagement.pdf" class="external-link"            rel="nofollow">http://www.virtualuniversity.ch/ autor/weilacher/stakeholdermanagement.pdf</a>&nbsp; S.3+4    (03.08.2011)</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref13"        title="" class="external-link" rel="nofollow">[13]</a> Maak, Thomas/Ulrich, Peter:Unternehmensführung, 2007,    S.173/4. Die Quellen von der Case-Study sind: „Centre for Stakeolding and Sustainiable Enterprise (2002): `The Body    Shop – Local Community Consultation`, Reserach Report Kingston University (UK); The Body Shop 1997 `Value Report`;    The Body Shop Website (Quelle: <a href="http://www.thebodyshopinternational.com/" class="external-link"                                      rel="nofollow">www.thebodyshopinternational.com</a>, abgerufen am 16.12.2004)“</p></div><div><p><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftnref14"        title="" class="external-link" rel="nofollow">[14]</a> Vgl. <a        href="http://www.global2000.at/site/de/magazin/umweltmagazin/konventionellelandwirtschaft/article-konventionellelandwirtschaft.htm"        class="external-link" rel="nofollow">http://www.global2000.at/site/de/magazin/umweltmagazin/konventionellelandwirtschaft/article-konventionellelandwirtschaft.htm</a>,    kritisch dazu: <a            href="http://www.handelsblatt.com/unternehmen/handel-dienstleister/zoff-nach-ard-markencheck-rewe-weist-vorwuerfe-gegen-oeko-siegel-zurueck/7616568.html"            class="external-link" rel="nofollow">http://www.handelsblatt.com/unternehmen/handel-dienstleister/zoff-nach-ard-markencheck-rewe-weist-vorwuerfe-gegen-oeko-siegel-zurueck/7616568.html</a>    und&nbsp; die Sendung <a href="http://www.youtube.com/watch?v=fNG8u0Aovwc" class="external-link" rel="nofollow">Markencheck        Rewe</a> (ARD) – ab 29:30 Minuten</p></div>';

indicators[16].goals.content = 'Unternehmen existieren nicht im luftleeren Raum, sondern wirken durch ihr wirtschaftliches Tun auf das gesellschaftliche Umfeld der Region. Interne Unternehmensentscheidungen können einen nach­haltigen Einfluss auf externe Berührungsgruppen haben, wie z.B. die Anrainer/ Menschen der Region, die Zivilgesellschaft, zukünftige Generationen sowie die Natur (Tier- und Pflanzenwelt). Sie sind betroffen von den Standort- und Produktentscheidungen und sollten als Betroffene auch mitentscheiden können.<br/><br/>Für eine stärkere Mitbestimmung ist eine umfassende Transparenz eine unerlässliche Grund­voraus­setzung. Zwar gibt es eine steigende Nachhaltigkeits-berichterstattung, meistens werden aber wesentlichen Aspekte ausgeblendet oder nur teilweise berücksichtigt. Eine externe Verifizierung der publizierten Daten bleibt in den sensiblen Bereichen (z.B. Standorte in kritischen Ländern etc.) häufig aus.<br/><br/>Ein gemeinwohlorientiertes Unternehmen informiert umfassend und aktiv die Öffentlichkeit über alle wesentlichen Aspekte ihrer geschäftlichen Tätigkeiten. Damit haben alle Berührungsgruppen (Zivilgesellschaft, Anrainer, etc.) einen Einblick ins Unternehmen und können ihre Interessen einbringen und das Unternehmen im Sinne des Gemeinwohls positiv beeinflussen. Die Glaubwürdigkeit dieser Transparenz steigt, wenn die Angaben extern verifiziert werden können oder unabhängige Institutionen einen uneingeschränkten Zugang zu den Informationen haben.<br/><br/>Die Mitbestimmung des gesellschaftlichen Umfeldes ist bei allen wesentlichen Grundsatz- und Rahmenentscheidungen notwendig, die massive Auswirkungen auf die Berührungsgruppen haben. Dabei geht das Unternehmen aktiv vor der Entscheidungsfindung auf die betroffenen Berührungsgruppen zu und bindet sie konsensual ein. Eine breite Beteiligung bei alltäglichen, operativen Entscheidungen erscheint uns weder praktikabel noch zielführend.<p class="wiki-content">Die Einbindung von Berührungsgruppen geschieht in unterschiedlichen Indikatoren</p><div class="wiki-content">    <ul>        <li>A1 = Lieferanten</li>        <li>B1 = Geldgeber</li>        <li>C5 = Mitarbeiter</li>        <li>D1 = Kunden</li>        <li>D2 = Mitbewerber</li>    </ul></div><p class="wiki-content">Für E5 bleiben dann noch folgende Gruppen übrig:</p><div class="wiki-content">    <ul>        <li>Regionale Berührungsgruppen (Anrainer/ Gemeinde/ Staat)</li>        <li>Zivilgesellschaftlich betroffene NGOs, wobei diese auch die zukünftigen Generationen sowie Umwelt und Natur            vertreten.        </li>    </ul></div>';

indicators[16].implementationHelp.content = '<p><strong>Kurzhilfe:</strong></p><ul>    <li><span style="color: rgb(0,0,0);">Ist-Zustand erheben (wie transparent sind wir zurzeit? Bei welchen Entscheidungen&nbsp;werden&nbsp;die Berührungsgruppen wie eingebunden?)</span>    </li>    <li><span style="color: rgb(0,0,0);">Soll-Zustand bestimmen (Vision/ Ziel)&nbsp;–&nbsp;nach Möglichkeit auf Basis einiger/aller Indikatoren</span>    </li>    <li><span style="color: rgb(0,0,0);">Strategie wie dieser Sollzustand erreicht&nbsp;werden&nbsp;soll – klare Maßnahmen</span>    </li>    <li><span style="color: rgb(0,0,0);">Durchführung erster Beteiligungsmaßnahmen und Bewertung an Hand der aufgestellten Indikatoren (Monitoring)</span>    </li></ul>';

indicators[16].impulsQuestions.content = '<p><strong>Impulsfragen Transparenz</strong></p><ul>    <li>Welche Form der Berichterstattung haben wir? Welche wesentlichen und kritischen Daten geben wir wie an die        Öffentlichkeit?    </li>    <li>Was sind die kritischen Informationen für die gesellschaftlichen Berührungs­gruppen? Wie hoch ist da unsere        Transparenz? Welche Gründe gibt es für ein transparentes/ intransparentes Vorgehen?    </li></ul><p><strong>&nbsp;</strong></p><p><strong>Impulsfragen Mitbestimmung</strong></p><ul>    <li>Welche Berührungsgruppen haben bei welchen Unternehmensentscheidungen welche Auswirkungen zu spüren? Wie wird        das beurteilt?    </li>    <li>Welche Formen der Stakeholder<a            href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/E5-Gesellschaftliche-Transparenz-und-Mitbestimmung-HR/E5-Gesellschaftliche-Transparenz-Handbuch-Endversion.docx#_ftn1"            title="" class="external-link" rel="nofollow">[1]</a>-Einbindung haben wir? Wie viele Stakeholder-Gespräche        haben wir im Berichtszeitraum geführt? Wie sind sie dokumentiert? Und aus welchen Gründen machen wir welche Form        der Berührungsgruppen-Mitbestimmung?    </li>    <li>Bei welchen Entscheidungen ist es sinnvoll, eine Außensicht einzuholen oder die Stakeholder einzubeziehen? Bei        welchen Entscheidungen ist es notwendig?    </li>    <li>Welchen Grad der Mitbestimmung haben wir? Was hindert uns daran, die Stakeholder intensiver einzubinden? Welche        positiven Erfahrungen gibt es in unserer Branche? Was sind die Hinderungsgründe für eine vermehrte Einbindung        der Berührungsgruppen?    </li>    <li>Wie kann eine Einbindung einerseits konsensual sein, schon im Vorfeld starten und gleichzeitig effektiv und        möglichst wenig Ressourcen binden?    </li></ul>';

indicators[16].moreinfo.content = '<ul>    <li>        <a href="http://circa.europa.eu/irc/empl/csr_eu_multi_stakeholder_forum/info/data/en/CSR%20Forum%20roundtables.htm"           class="external-link" rel="nofollow">EU-Multistakeholder-Forum</a> (Tipps für die Durchführung)    </li>    <li>Freeman, R. Edward: Strategic Management. A stakeholder approach, 2010</li>    <li>Freeman, R. Edward: Managing for Stakeholders: Survival, Reputation, and Success (Business Roundtable Institute        for Corporate Ethics Series in), 2007    </li>    <li>GIZ: [Manual, 2011] Stakeholder-Dialoge. Ein Manual, 2011, online verfügbar auf: <a            href="http://www2.gtz.de/dokumente/bib-2011/giz2011-0182de-stakeholder-dialoge.pdf" class="external-link"            rel="nofollow">http://www2.gtz.de/dokumente/bib-2011/giz2011-0182de-stakeholder-dialoge.pdf</a> (03.08.2011)    </li>    <li>Hansmann, Klaus-Peter (u.a.): Der Erfolg von Nachhaltigkeitsmanagment, Hamburg, 2003</li>    <li><a href="http://www.hc-sc.gc.ca/ahc-asc/pubs/_public-consult/2000decision/index-eng.php" class="external-link"           rel="nofollow">Health Canada Policy Toolkit for public Involvement in decision making</a></li>    <li>Julia Löhr (CSR-Forum): <a href="http://www.csrforum.eu/basis/referate/Fo10_Loehr.pdf" class="external-link"                                   rel="nofollow">Leitfaden für einen Stakeholder-Dialog</a></li>    <li><a href="http://www.glocalist.com/nachhaltigkeitsberichte/" class="external-link" rel="nofollow">Liste von        Nachhaltigkeitsberichten aus DACH</a> (Glocalist, unvollständig)    </li>    <li>Maak, Thomas/ Ulrich, Peter: [Unternehmensführung, 2007] Integre Unternehmensführung. Ethisches        Orientierungswissen für die Wirtschaftspraxis, Stuttgart: Schäffer/ Poeschel, 2007    </li>    <li>Wikipedia-Eintrag zu <a href="http://en.wikipedia.org/wiki/Open_business" class="external-link" rel="nofollow">Openbusiness</a>    </li>    <li><a href="http://www.gelena.uni-oldenburg.de/download/WP-04-01.pdf" class="external-link" rel="nofollow">Osmers,        Henning: Stakeholderdialoge und Unternehmenserfolg</a>,&nbsp;</li>    <li><a href="http://www.partizipation.at/" class="external-link" rel="nofollow">www.partizipation.at</a> (Umfassende        Datenbank zur BürgerInnenbeteiligung mit erprobten Methoden und Ansätzen, die auch für die        Stakeholder-Mitbestimmung eingesetzt werden können)    </li>    <li><a href="http://www.stakeholderforum.org/sf/" class="external-link" rel="nofollow">Stakeholder-Forum</a>        (weltweite Organisation, die sich für mehr Stakeholder-Demokratie einsetzt)    </li>    <li><a href="http://www.projekt-marketing.ch/marketingwissen/pdf/02_Stakeholder.pdf" class="external-link"           rel="nofollow">Überblick zum Stakeholdermanagement</a> (15seitige Präsentation der SPOL AG)    </li>    <li><a href="http://www.corporateregister.com/" class="external-link" rel="nofollow">Umfassende internationale        Datenbank von Nachhaltigkeitsberichten</a> (Corporate Register, Registrierung notwendig)    </li>    <li>WU Inst. für Unternehmensführung: <a            href="http://www.wu.ac.at/vw4/ifu/studium/diplom/spez/vk1/projektseminare/ss03_exe_unilever"            class="external-link" rel="nofollow">Wettbewerbsvorteil Stakeholdermanagement</a></li>    <li>Wieland, Josef: Die Stakeholder-Gesellschaft und ihre Governance. Manangement, Netzwerke, Diskurse. Marburg:        Metropolis Verlag, 2008    </li></ul><p>&nbsp;</p><div><h4        id="E5GesellschaftlicheTransparenzundMitbestimmung-Matrix41-RedakteurHaraldBenderhfbenderwebde&nbsp;Vorarbeit&nbsp;ChristianRütherchrisruethergmailcom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">    Redakteur: Harald Bender: <a href="mailto:hfbender@web.de" class="external-link" rel="nofollow">hfbender@web.de</a>&nbsp;,    Vorarbeit:&nbsp;Christian Rüther <a href="mailto:chrisruether@gmail.com" class="external-link" rel="nofollow">chrisruether@gmail.com</a></h4></div>';

negativeCriteria[0].content = '<h5 id="NegativkriterienMatrix41-MenschenrechteunddieKernarbeitsnormenderILOInternationalLabourOrganizationbildenwesentlichegesellschaftlicheGrundpfeilerdesglobalenZusammenlebensEineglobaleRatifizierungistebensowieeinegelebteUmsetzunginvielenStaatenbisheutenichtg">    <span style="color: rgb(51,51,51);font-size: 10.0pt;font-weight: normal;line-height: 13.0pt;">Menschenrechte und die Kernarbeitsnormen der ILO (International Labour Organization) bilden wesentliche gesellschaftliche Grundpfeiler des globalen Zusammenlebens. Eine globale Ratifizierung ist ebenso wie eine gelebte Umsetzung in vielen Staaten bis heute nicht gegeben.</span></h5><p>In Staaten ohne Ratifizierung der Kernnormen (z.B. China, USA) ist demnach ein proaktiver Zugang des    Unternehmens im Rahmen der lokalen Möglichkeiten notwendig, um deren Einhaltung sicherzustellen. Auch mögliche    menschenrechtsverletzende Auswirkungen und Effekte von Produkten und Dienstleistungen eines Unternehmens sind zu    berücksichtigen.</p><p>In jedem Fall&nbsp; sind die Beachtung des Grundsatzes „gleicher Lohn für gleiche Arbeit“    sowie die Einhaltung der Anti-Diskriminierungsnorm zu überprüfen. Nachweisliche Benachteiligungen auf Grundlage von    ethnischer Abstammung, Hautfarbe, Geschlecht, Glaubensbekenntnis, politischer Meinung, nationaler Abstammung,    sozialer Herkunft, Alter, sowie „jede andere Unterscheidung, Ausschließung oder Bevorzugung“ (ILO Übereinkommen 111,    Artikel 1, Absatz 1b) sind ein gravierendes Negativkriterium.</p><p>Kernarbeitsnormen: <a        href="http://www.ilo.org/public/german/region/eurpro/bonn/kernarbeitsnormen/index.htm" class="external-link"        rel="nofollow">http://www.ilo.org/public/german/region/eurpro/bonn/kernarbeitsnormen/index.htm</a></p><p>    <strong>RedakteurIn: Gabriela Edlinger <a href="mailto:gabriela@abcd.co.at" class="external-link" rel="nofollow">gabriela@abcd.co.at</a></strong></p>';

negativeCriteria[9].content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">Die Rechte und Pflichten von ArbeitgeberInnen gegenüber ihren MitarbeiterInnen sind umfassend geregelt. Aufzeichnungen der Arbeiterkammer belegen aber, dass diese Regelungen häufig – zum Schaden der ArbeitnehmerInnen – missachtet werden.</span></p><p>Durch die Anwendung dieses Negativkriteriums schlagen sich Verletzungen des Arbeitsrechtes, insbesondere des    ArbeitnehmerInnenschutzgesetzes (ASchuG), durch das Unternehmen in der Gemeinwohlbilanz negativ nieder. Die    Gemeinwohlbilanz will hier den Gesetzgeber nicht ersetzen, sondern ergänzen und verstärken.</p><p>In diesem Sinn ist    arbeitsrechtliches Fehlverhalten seitens des Unternehmens belegbar durch:</p><ul>    <li>rechtskräftige Verurteilung des Unternehmens wegen Verletzungen des Arbeitsrechts.</li>    <li>(wiederholte) Arbeitnehmerklagen vor dem Arbeitsgericht, die in einem Vergleich enden.</li>    <li>mehrere dokumentierte Fälle von arbeitsrechtlichen Beschwerden, auch wenn diese außergerichtlich geeinigt werden        konnten.    </li></ul><p>Insgesamt ist für die Beurteilung dieses Negativkriteriums in Österreich die Arbeiterkammer als gesetzliche    Vertretung der ArbeitnehmerInnen eine wichtige Informationsquelle. Sie führt genaue Aufzeichnungen über    arbeitsrechtlich relevante Vergehen (z.B. Übersicht der AK Oberösterreich für das Jahr 2011: <a            href="http://www.arbeiterkammer.com/bilder/d136/Schwarzbuch_20111.pdf" class="external-link" rel="nofollow">http://www.arbeiterkammer.com/bilder/d136/Schwarzbuch_20111.pdf</a>    ).</p><p><strong>RedakteurIn: Gabriela Edlinger <a href="mailto:gabriela@abcd.co.at" class="external-link"                                                       rel="nofollow">gabriela@abcd.co.at</a></strong></p>';

negativeCriteria[10].content = '<p align="left"><u>BESCHREIBUNG:</u></p><p align="left">Ein Unternehmen, das dem Gemeinwohl dient, wird bei stabiler    Gewinnlage in Zeiten, in denen es eine signifikante Zahl von Arbeitssuchenden gibt, weder Arbeitsplätze abbauen noch    Standorte schließen. Bei rein gewinnorientierten Unternehmen stehen solche Maßnahmen auf der Tagesordnung. Ein    Beispiel von vielen: Das Semperit-Werk in Traiskirchen wurde 113 Jahre nach der Gründung geschlossen, obwohl es    schwarze Zahlen schrieb – aber nicht die vom Mutterkonzern Conti angestrebte höhere Finanzrendite abwarf. Das Wohl    der EigentümerInnen wird über das Wohl aller anderen Berührungsgruppen gestellt. Das sollte nicht sein, weil ein    Unternehmen nicht dazu da ist, nur das Wohl einer bestimmten „Anspruchsgruppe“ zu maximieren.</p><p align="left"><u>MESSMETHODE:</u></p><p align="left">Wird ein Standort trotz Gewinnlage verlagert oder geschlossen?</p><p align="left">Werden im    Unternehmen trotz stabiler Gewinne Arbeitsplätze abgebaut?</p><p align="left"><strong>Redakteur: Christian Felber,    <a href="mailto:info@christian-felber.at" class="external-link" rel="nofollow">info@christian-felber.at</a></strong></p>';

negativeCriteria[11].content = '<p><strong>Beschreibung Negativ-Kriterium</strong></p><p>Während der Indikator E2 freiwillige Leistungen von Unternehmen    beschreibt, die über die Pflicht der Leistung von Steuern und Sozialabgaben hinausgehen, beschreibt das    Negativkriterium N12 alle Aspekte des Handelns von Unternehmen, die auf die Umgehung dieser Verpflichtungen    hinauslaufen.</p><p>Infolge der Globalisierung entstand ein Steuerwettbewerb zwischen verschiedenen Ländern. Die    OECD listet eine Reihe von „harmful tax practices“ auf, die auf globaler Ebene dazu führen, dass Steuern in großen    Stil hinterzogen werden und Korruption sich verbreitet (<a            href="http://www.oecd.org/tax/harmfultaxpractices/1904184.pdf" class="external-link" rel="nofollow">http://www.oecd.org/tax/harmfultaxpractices/1904184.pdf</a>).    Es gibt mehrere Auflistungen von Ländern, die solche Praktiken zumindest dulden oder sogar aktiv fördern, z.B.    seitens der OECD (<a href="http://www.oecd.org/document/57/0,3343,en_2649_33745_30578809_1_1_1_37427,00.html"                         class="external-link" rel="nofollow">http://www.oecd.org/document/57/0,3343,en_2649_33745_30578809_1_1_1_37427,00.html</a>)    oder den Finanzschattenindex des „Global Tax Justice Networks“ (<a href="http://www.taxjustice.net/"                                                                       class="external-link" rel="nofollow">http://www.taxjustice.net</a>,    <a href="http://www.financialsecrecyindex.com/2011results.html" class="external-link" rel="nofollow">http://www.financialsecrecyindex.com/2011results.html</a>).</p><p>Finanzschattenplätze zeichnen sich aus durch:</p><ul>    <li>Keine oder marginale Einkommens- bzw. Gewinnsteuern</li>    <li>Nicht verfügbare Information oder fehlender Zugang zu Information</li>    <li>Mangelhafter Informationsaustausch mit Behörden anderer Länder</li>    <li>Fehlende Transparenz</li></ul><p>Unternehmen, die diesen Wettbewerb nutzen, nehmen zwar die Leistungen des Gemeinwesens in Anspruch (z.B.    Bildung, Infrastruktur, Gesundheitsdienste, Verwaltung, Rechtssystem), leisten aber keinen adäquaten Beitrag zum    Aufbau und zur Aufrechterhaltung dieser Gemeinschaftsleistungen.</p><p>Die Praktiken von Unternehmen, die als    schädlich für das Gemeinwohl zu betrachten sind, umfassen unter anderem:</p><ol>    <li>Die Verschiebung von Gewinnen innerhalb eines Konzerns in Länder mit geringeren Gewinnsteuern</li>    <li>Die Veranlagung von Geldern in Ländern mit niedrigeren Kapitalsteuern</li>    <li>Die Nutzung der Möglichkeiten von „Finanzschattenplätzen“ um Gewinne zu verschleiern</li>    <li>Die Verlagerung von Konzernzentralen, Zweigstellen oder sogar Gründung von „Briefkastenfirmen“ in        „Finanzschattenplätzen“, auch um niedrige Ertragssteuern zu nutzen    </li></ol><p><strong>Bewertung + Abstufung</strong></p><p>Die Bewertung sollte sich am Anteil der tatsächlich geleisteten    Steuern in einem Land in Relation zur theoretischen Steuerleistung, die sich aufgrund der Wertschöpfung ergeben    würde, orientieren.</p><p>Da diese Daten im Normalfall aber nicht öffentlich zugänglich sind, müssen alle    Aktivitäten eines Unternehmens, die zur Steuervermeidung geeignet erscheinen, kritisch geprüft werden. Für alle oben    genannten Praktiken sollten jeweils 50 Punkte in Abzug gebracht werden (maximal -200).</p><p><strong>Redakteur:    Manfred Kofranek, <a href="mailto:manfred.kofranek@inode.at" class="external-link" rel="nofollow">manfred.kofranek@inode.at</a></strong></p>';

negativeCriteria[12].content = '<p><strong style="font-size: 10.0pt;line-height: 13.0pt;">Beschreibung Negativ-Kriterium</strong></p><p>Kapitaleinkommen    sind per se problematisch (s. Indikator E4), weil</p><ol>    <li>sie die Wirtschaft zum Wachstum zwingen: Jede Erwartung für ein zur Verfügung gestelltes Kapital ein Einkommen        zu erzielen, sei es auch nur im Ausmaß der Inflation zwingt, die Wirtschaft zum Wachstum; und    </li>    <li>sich rund 80 Prozent des Finanzvermögens in den Händen von 20% der Bevölkerung befinden. Folglich strömen auch        mindestens vier Fünftel der Kapitaleinkommen nur einem Fünftel der Bevölkerung zu. Es ist sogar ein höherer        Anteil, weil die Kapitaleinkommen umso höher sind, je reicher jemand ist. Der Kapitalismus ist ein „positiv        rückgekoppeltes System“: Je reicher jemand ist, desto leichter wird das weitere Reichwerden, auch wenn keine        Arbeitsleistung erbracht wird. Die Mehrheit der Großvermögen wurde ererbt, nicht erarbeitet; und    </li>    <li>je einseitiger Kapital nach dem Anreiz "Kapitalrendite" eingesetzt wird, desto weiter entfernt es sich vom        eigentlichen Zweck des Wirtschaftens: der Befriedigung von Bedürfnissen, Schaffung von Lebensqualität und Sinn,        Mehrung des Gemeinwohls. Das ist eine systemische Fehllenkung von Kapital, die auch in Widerspruch zu mancher        Verfassung steht, z. B. in der Bayerischen: "Kapitalbildung ist nicht Selbstzweck, sondern Mittel zur Entfaltung        der Volkswirtschaft." (Art. 157 (1))    </li></ol><p>Der Wachstumszwang wird umso größer und die Verteilung umso ungerechter, je höher die Kapitaleinkommen sind. Im    Durchschnitt können bei einem realen zweiprozentigen Wirtschaftswachstum alle Einkommen um zwei Prozent wachsen.    Höhere Zuwachsraten sind in nur Ausnahmeunternehmen und -branchen möglich, aber nicht in Durchschnittsunternehmen    und -branchen. Alle Unternehmen können einen Beitrag zur Lösung dieser Probleme leisten, indem sie das    Kapitaleinkommen minimieren.</p><p class="FreieForm">Extremes Zuwiderhandeln, wie etwa durch die dauerhafte    Ausschüttung zweistelliger Renditen auf Eigen- und Fremdkapital nicht im Unternehmen tätiger GesellschafterInnen    über einen Zeitraum von fünf Jahren, ist als Negativkriterium zu werten.</p><p><strong>Bewertung +    Abstufung</strong></p><p class="FreieForm">Berücksichtigt wird alles eingebrachte Kapital (Eigen- und Fremdkapital)    nicht im Unternehmen tätiger Gesellschafter. Als Ausschüttung gilt die Summe der ausgezahlten fixen und variablen    Zinsen und der ausgeschütteten Gewinnanteile.</p><p class="FreieForm">Übersteigt im Durchschnitt der letzten fünf    Jahre für einen oder mehrere nicht tätige Gesellschafter die Ausschüttung auf das eingebrachte Kapital die    nachstehenden Renditen, so werden entsprechende Negativpunkt vergeben:</p><ul>    <li>Rendite auf eingebrachtes Kapital 10 - 12,5% = - minus 100 Punkte</li>    <li>Rendite auf eingebrachtes Kapital 12,5 - 15% = - minus 150 Punkte</li>    <li>Rendite auf eingebrachtes Kapital &gt;15% = - minus 200 Punkte</li></ul><p><strong>Redakteur: Christian Felber <a href="mailto:info@christian-felber.at" class="external-link"                                               rel="nofollow">info@christian-felber.at</a> unter tatkräftiger Mitarbeit    von Christoph Spahn</strong></p>';

negativeCriteria[13].content = '<p>Transparenz ist eine Grundvoraussetzung für Vertrauen, Kontrolle, Demokratie und die Verhinderung von    Machtkonzentration. Unternehmenseigentum ist nicht reine Privatsache, sondern betrifft auch die Allgemeinheit. Es    sollte offengelegt werden, welche Sub-Firmen überhaupt bestehen und wer (Mit-) Eigentümer welchen Unternehmens ist.    Gibt es hier keine Transparenz, werden Steuerhinterziehung (z. B. anonyme Trusts oder Briefkastenfirmen in    Steueroasen), Umweltzerstörung (z. B. Tankschiffe von EU-Unternehmen fahren unter panamesischer Flagge),    Kriminalität (z. B. Korruption über Scheinfirmen) und Demokratieuntergrabung (z. B. versteckte Parteispenden) Tür    und Tor geöffnet. Auch Unternehmen sind soziale Gebilde und an deren Regeln (Lizenzvergabe, Rechtsgrundlage für    „juristische Personen“) gebunden - deshalb müssen sie sich transparent zeigen und deklarieren. Der Datenschutz hat    hier Nachrang. Auch „natürliche Personen“ müssen ganz selbstverständlich ihren jeweiligen Wohnsitz den Behörden    melden.</p><p><strong>Redakteur: Christian Rüther <a href="mailto:chrisruether@gmail.com" class="external-link"                                                         rel="nofollow">chrisruether@gmail.com</a>, Vorarbeit: Christian    Felber</strong></p>';

negativeCriteria[14].content = '<p>Voraussetzung für die Errichtung eines Betriebsrats ist, dass in&nbsp; einem Betrieb (im Sinne des § 34 Abs. 1 ArbVG)    mindestens fünf ArbeitnehmerInnen dauernd beschäftigt sind.</p><p>Eine Verhinderung des Betriebsrates liegt vor,    wenn die Geschäftsführung durch unterschiedliche Maßnahmen der Konstituierung bzw. Wahl eines Betriebsrates    entgegenwirkt.</p><p>Belegbar ist die Verhinderung nur teilweise:</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Hilfreich könnte eine anonyme MitarbeiterInnenbefragung sein, in der abgefragt wird, wer sich einen Betriebsrat    wünscht, ob es Maßnahmen zur Verhinderung gab und wie mit MitarbeiterInnen umgegangen wurde, die sich dafür    eingesetzt haben.</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ebenso hilfreich sind Äußerungen von    gekündigten MitarbeiterInnen, wenn sie in einem Zusammenhang mit einer Betriebsratsgründung sehen.</p><p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Auch könnte man sich bei der Arbeiterkammer oder den jeweiligen Gewerkschaften informieren, ob gegen den Betrieb    Beschwerden vorliegen oder einschlägige negative Erfahrungen dokumentiert sind.</p><p>Die Beweislast könnte aber    auch umgekehrt werden, dass die Geschäftsführung beweisen muss, dass es keine Verhinderungen gab.</p><p>Letztendlich    obliegt es dem Auditor, ein ausgewogenes Urteil zu fällen.</p><p><a        href="http://www.voegb.at/servlet/ContentServer?pagename=S08/Page/Index&amp;n=S08_2.7.5" class="external-link"        rel="nofollow">Skripten zum Arbeitsrecht/ Betriebsrat (VOEGB)</a></p><p>Infoplattform des OEGB: <a        href="http://www.betriebsraete.at/" class="external-link" rel="nofollow">www.betriebsraete.at</a></p><p><strong>Redakteur:    Christian Rüther <a href="mailto:chrisruether@gmail.com" class="external-link"                        rel="nofollow">chrisruether@gmail.com</a></strong></p>';

negativeCriteria[15].content = '<p>Lobbying im Eigeninteresse – und nicht im Allgemeininteresse – ist eine der größten Bedrohungen der Demokratie. Ein    wichtiger Schritt zur Offenlegung sämtlicher Lobbying-Aktivitäten ist die Offenlegung aller Finanzflüsse eines    Unternehmens an Lobby-AkteuerInnen. Wer dies nicht tut, unterstützt hier eine Praxis der Intransparenz zum Schaden    der Demokratie. Unternehmen in der EU können diese Intransparenz beenden, indem sie sich in das EU-Lobbyregister    eintragen. Falls dieses Register nicht zutreffen sollte, können – insbesondere kleinere Unternehmen – alternativ    sämtliche Finanzflüsse offenlegen.</p><p><strong>Redakteur: Christian Rüther <a href="mailto:chrisruether@gmail.com"                                                                                    class="external-link"                                                                                    rel="nofollow">chrisruether@gmail.com</a>,    Vorarbeit Christian Felber</strong></p>';

negativeCriteria[16].content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">Kein Einkommen bei voller Arbeitszeit überschreitet das Zwanzigfache des vorgeschlagenen Mindestlohnes des jeweiligen Landes (Siehe Indikator E4)</span></p><p>Konkret bedeutet dies für Österreich und Deutschland: kein Einkommen übersteigt € 26.600.- (netto) bzw. in der    Schweiz € 70.000.- (netto).</p><p><span style="font-size: 10.0pt;line-height: 13.0pt;">Für Details zu Begründung von Maximaleinkommen siehe Indikator E4.</span></p><p><strong>Redakteur: Nonno Breuss, <a href="mailto:nonno.breuss@gmail.com" class="external-link" rel="nofollow">nonno.breuss@gmail.com</a></strong></p>';

negativeCriteria[1].content = '<p>Wir bezeichnen P/D als menschenunwürdig, wenn sie negative direkte oder indirekte Auswirkungen haben auf:</p><ul>    <li>das Leben</li>    <li>die Gesundheit von Lebewesen, sowohl physisch als auch psychisch</li>    <li>die Freiheit von Menschen</li>    <li>die Natur</li></ul><p>Eine Orientierung bieten die Leitfäden für ein Ethisches Investment von Banken, z.B.</p><ul>    <li>        <a href="http://www.ethikbank.de/privatkunden/investmentfonds/ausschlusskriterien/ausschlusskriterien-sarasin-fonds.html"           class="external-link" rel="nofollow">Ethikbank-Ausschlusskriterien Sarasin-Fond</a></li>    <li><a href="https://www.steyler-bank.de/mb606/Ethische_Geldanlagen.pdf" class="external-link" rel="nofollow">Steyler-Bank        –Prinzipien der ethischen Geldanlage</a></li>    <li><a href="http://www.umweltbank.de/umweltbank/index_kriterien.html" class="external-link" rel="nofollow">Umweltbank        – Index-Kriterien</a></li>    <li><a href="http://www.gls.de/die-gls-bank/ueber-uns/arbeitsweisen/ausschlusskriterien/" class="external-link"           rel="nofollow">GLS-Bank – Ausschlusskriterien </a>&nbsp;</li></ul><p>Auf Basis dieser Vergleichquellen haben wir uns für folgende Ausschlusskriterien entschieden, wobei die    Null-Toleranzgrenze beim Umsatz gilt.&nbsp; Sobald diese Güter einen Teil des Umsatzes ausmachen, werden folgende    %-Zahlen der Gesamtminuspunkte abgezogen</p><div class="table-wrap">    <table class="confluenceTable">        <tbody>        <tr>            <td class="confluenceTd"><p><strong>Umsatzanteil der P/D</strong></p></td>            <td class="confluenceTd"><p><strong>Abzug</strong></p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Bis 1% des Umsatzes</p></td>            <td class="confluenceTd"><p>50%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Bis 2% des Umsatzes</p></td>            <td class="confluenceTd"><p>75%</p></td>        </tr>        <tr>            <td class="confluenceTd"><p>Über 2% des Umsatzes</p></td>            <td class="confluenceTd"><p>100%</p></td>        </tr>        </tbody>    </table></div><p><strong>Folgende Produkte und Dienstleistungen sind für uns menschenunwürdig</strong><a        href="file:///C:/Users/chrisruether/Dropbox/Redaktionsteam/Matrix4.1-Indikatoren/ENDVERSIONEN/Negativkriterien-4.1.Endversion-gesamt1.1.docx#_ftn1"        title="" class="external-link" rel="nofollow"><strong><strong>[1]</strong></strong></a><strong>:</strong></p><ul>    <li>Produkten und Dienstleistungen für das&nbsp;Militär insbesondere&nbsp; Hersteller geächteter Rüstungsgüter (lt.        UN-Deklaration), CBRN-Waffen: chemisch, biologisch, radiologisch und Nuklear-, Streumunition (Clusterbomben),        Antipersonenminen, Waffen mit Ausnahme von mehr als 90% ziviler oder polizeilicher Verwendung&nbsp;</li>    <li>Bau und Betrieb von Kernkraftwerken, atomaren Wiederaufbereitungsanlagen oder atomaren Endlagern, Verbrennung        von radioaktivem Material sowie Uranabbau    </li>    <li>Freisetzen von gentechnisch veränderten Organismen&nbsp;(Tiere und Pflanzen)</li>    <li>Herstellen von&nbsp;Chlor, chlororganischen Grundstoffen und mit Hilfe von Chlor hergestellten Grundstoffen,        besonders im Bereich Kunststoffe    </li>    <li>Herstellen von Agrochemikalien (Pestizide, Fungizide, Herbizide)</li>    <li>Alkohol / Drogen / Tabak- und &nbsp;Rauchwaren: Hersteller dieser Produkte ausgenommen Wein, Bier sowie        medizinisch genutzte Drogen    </li>    <li>Herstellen und Vertrieb von&nbsp;pornografischen Produkten</li>    <li>Betrieb von&nbsp;Personen- oder Frachttransport auf dem Luftweg (wenn mehr als 10% des Geschäftes ausmachen)    </li>    <li>Produkte auf Basis von Tierversuchen, die nicht gesetzlich vorgeschrieben sind (z.B. Kosmetika, Waschmittel)    </li>    <li>Glücksspiel: Hersteller und Handel von Glücksspielen und -geräten sowie Wetten,<span            style="font-size: 10.0pt;line-height: 13.0pt;">bei denen Geld verloren werden kann</span></li>    <li>Embryonenforschung</li>    <li>Medien, deren Inhalt mit mehr als 75% NICHT der Weiterbildung/ kulturverträglichen/gewaltfreien Unterhaltung        dienen    </li>    <li>Rohstoffproduktion mit zweifelhaften/ kontroversen Umweltauswirkungen, z.B. Schiefergas und Ölsande (N7/8)</li>    <li>Herstellung oder Betrieb von Anlagen mit Emissionen von Giftstoffen oder Elektosmogs, z.B. Handymastbetreiber    </li>    <li>Konventionelle Produktion und Handel von Tierprodukten (Ausnahme: artgerechte und tierwürdige Haltung mind. nach        EU-Bio-Standard).    </li></ul><p><strong>Redakteurin Angela Drosg-Plöckinger: <a href="mailto:a.drosg@mehrwerte.at" class="external-link"                                                        rel="nofollow">a.drosg@mehrwerte.at</a></strong></p><br/>[1] Zusammengestellt aus den Ausschlusskriterien der Ethik-Bank und Steyler-Bank';

negativeCriteria[2].content = '<p><span style="font-size: 10.0pt;line-height: 13.0pt;">Die Produktion vieler Güter des täglichen Gebrauchs ist mit großen sozialen und ökologischen Problemen verbunden (z.B.: fossile Energieträger, agrarische Erzeugnisse, Telekommunikation und Elektronik). Folglich ist es für fast kein Unternehmen möglich, Verletzungen der Menschenwürde in der Lieferantensphäre auszuschließen.</span></p><p>Wann dieses Negativ-Kriterium als erfüllt gilt, ist von mehreren Faktoren und teilweise auch vom Einzelfall    abhängig. Grundsätzlich gilt, dass dieses Negativ-Kriterium schlagend ist, sobald das Ausmaß an potentiell    kritischen Gütern relativ (&gt;5&nbsp;% der Ausgaben,z.B.: die Auswahl des Kaffees ist bei einem Kaffeehaus von    größerer Bedeutung als bei einem Beratungsunternehmen) oder absolut (hoher Einfluss des Unternehmens auf die    vorhandenen Probleme) signifikant ist&nbsp; und eine Auseinandersetzung mit den Folgewirkungen nicht erkennbar ist    bzw. Alternativen nicht wahrgenommen werden (z.B.: zertifizierte Rohstoffe, Teilnahme an    Multi-Stakeholder-Initiativen). Mit hohen ethischen Risiken verbundene Güter und Dienstleistungen (Gas, Benzin,    Laptop, Drucker, Handy), die in einem büro- bzw. haushaltstypischen Ausmaß konsumiert werden ist noch keine    Erfüllung des Kriterium gegeben, da dies nahezu alle Unternehmen betrifft und eine Abgrenzung zu schwerwiegerenden    „Tatbeständen“ sichergestellt werden soll. Das Negativ-Kriterium gilt ebenfalls als erfüllt, wenn die Existenz    menschenunwürdiger Bedingungen in der Wertschöpfungskette bekannt ist (z.B.: Konflikte mit Anrainern und    zivilgesellschaftlichen Initiativen) und das Unternehmen (insbesondere bei hoher Marktmacht) eine passive Haltung    einnimmt oder nur kosmetische Maßnahmen durchführt (Förderung von CSR-Projekten statt konkrete Verbesserung in der    Lieferantensphäre, Industrieinitiativen zur Vermeidung von Multi-Stakeholder-Initiativen).</p><p><strong>RedakteurIn:    Christian Loy – <a href="mailto:christian.loy@gmx.at" class="external-link" rel="nofollow">christian.loy@gmx.at</a></strong></p>';

negativeCriteria[3].content = '<p align="left">Auf dem globalen Markt gilt derzeit „Fressen und gefressen werden“. Aktiengesellschaften beispielsweise    können sowohl gegen den Willen der Geschäftsführung als auch der Beschäftigten „feindlich“ übernommen werden. In der    Gemeinwohl-Ökonomie soll der Stärkere den Schwächeren nicht fressen dürfen. Eine einvernehmliche Verbindung ist    hingegen kein Problem: Es müssen aber sowohl die Geschäftsführung als auch die Beschäftigten zustimmen. Liegt diese    Zustimmung nicht vor, gilt die Übernahme als feindlich.</p><p>Zur Begrifflichkeit siehe auch: <strong><a        href="http://de.wikipedia.org/wiki/Feindliche_%C3%9Cbernahme" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Feindliche_%C3%9Cbernahme</a></strong></p><p><strong>Redakteurin: Eva Nagl-Pölzer + <a href="mailto:consulting@nagl-poelzer.com" class="external-link"                                                 rel="nofollow">consulting@nagl-poelzer.com</a> (basiert auf Artikel von    Christian Felber)</strong></p>';

negativeCriteria[4].content = '<p align="left">Manche Unternehmen melden sehr viel mehr Innovationen zum Patent an als sie kommerziell verwerten, mit    dem Ziel, die Forschung um ihr Patent „rundherum“ zu blockieren. Das plakativste Beispiel sind Autofirmen, welche    Patente für verbrauchsarme oder Solarautomobile seit Langem halten aber nicht verwerten, weil dies einem    Paradigmenwechsel von der fossilen in die postfossile Ära einleiten und bestehende Machtstrukturen angreifen würde.    Im Regelfall handelt es sich um weniger spektakuläre Fälle, die nur einen längeren und größeren Vorsprung zur    Konkurrenz sichern. Die Effekte sind die Blockade von Innovation und die Schädigung anderer Unternehmen. Derzeit    sind uns keine Methoden bekannt, durch die Sperrpatente ausfindig gemacht werden könnten, deshalb wollen wir als    ersten Schritt das Bewusstsein für diese unsolidarische Praxis wecken.</p><p>Zur Begrifflichkeit siehe auch:    <strong><a href="http://de.wikipedia.org/wiki/Sperrpatent" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Sperrpatent</a></strong></p><p><strong>Redakteurin: Eva Nagl-Pölzer + <a href="mailto:consulting@nagl-poelzer.com" class="external-link"                                                 rel="nofollow">consulting@nagl-poelzer.com</a> (basiert auf Artikel von    Christian Felber)</strong></p>';

negativeCriteria[5].content = '<p align="left">Manche Unternehmen bieten Produkte in für sie neuen Märkten zu Preisen an, die unter den    Produktionskosten liegen, um Marktanteile zu erobern. Das widerspricht der Kostenwahrheit und dem fairen Mitbewerb.    Dumpingpreise könnten ausfindig gemacht werden, indem die Preise derselben Produkte an unterschiedlichen Standorten    verglichen werden oder die Unternehmen ihre Kostenrechnung offenlegen.</p><p>Zur Begrifflichkeit siehe auch:    <strong><a href="http://de.wikipedia.org/wiki/Dumpingpreis" class="external-link" rel="nofollow">http://de.wikipedia.org/wiki/Dumpingpreis</a></strong></p><p><strong>Redakteurin: Eva Nagl-Pölzer + <a href="mailto:consulting@nagl-poelzer.com" class="external-link"                                                 rel="nofollow">consulting@nagl-poelzer.com</a> (basiert auf Artikel von    Christian Felber)</strong></p>';

negativeCriteria[6].content = '<p>Unternehmen greifen durch ihre Aktivitäten in Ökosysteme ein. Wenn diese Eingriffe<sup>1</sup> unangemessen sind -&nbsp;    im Sinne eines gesellschaftlichen Nutzens der regional betroffenen Bevölkerung und überwiegend privaten Interessen    dienen, so sind bis zu 200 Punkte in Abzug zu bringen – unabhängig davon, ob das Vorgehen vor Ort legal ist oder    nicht und insbesondere, wenn das Vorgehen am Standort des Mutterkonzerns illegal wäre.</p><p>Die Abstufung sollte am    Nutzen-/Schadenverhältnis des Projekts bzw. des Unternehmens gemessen werden. Bei Illegalität am Mutterstandort    verdoppelt sich der Abzug (bis max. 200 Punkte)</p><p><sup>1</sup> z.B.: Zerstörung wichtiger Lebensräume, Rodung,    Rückstände in Wasser, Luft und Boden</p><p><strong>Redakteur: Lutz Knakrügge, <a href="mailto:lutz@mail.pcom.de"                                                                                     class="external-link"                                                                                     rel="nofollow">lutz@mail.pcom.de</a>,    Vorarbeit Christian Loy</strong></p>';

negativeCriteria[7].content = '<p>Das Kriterium kommt zur Anwendung, wenn ein Unternehmen gegen Umweltauflagen verstößt, wie z.B. durch</p><ul>    <li>Überschreiten (auch temporäres) von Grenzwerten<sup>1</sup></li>    <li>Nicht zulässige Nutzung von Chemikalien, die auf der Verbotsliste stehen (76/769/EWG)</li>    <li>bekannte Rechtsverstöße</li></ul><p>Die Abstufung folgt dem Schweregrad bzw. der Dauer der Überschreitungen nach Ermessen des Auditors bis zu 200    Punkte</p><p><sup>1</sup> Das könnte z.B. für Gemeinden auch ein Überschreiten der Ozongrenzwerte sein</p><p>    <strong>Redakteur: Lutz Knakrügge, <a href="mailto:lutz@mail.pcom.de" class="external-link" rel="nofollow">lutz@mail.pcom.de</a>,        Vorarbeit Christian Loy</strong></p>';

negativeCriteria[8].content = '<p><strong>Beschreibung Negativ-Kriterium</strong></p><p>Unter „geplanter Obsoleszenz“ wird die produktionstechnisch    vorgenommene Verkürzung der Lebensdauer von Produkten durch den Hersteller verstanden. Hierunter &nbsp;fällt neben    der eigentlichen Gestaltung auch die Nicht-Reparierfähigkeit von Produkten. Bekanntestes Beispiel des    20.Jahrhunderts war das Phoebuskartell von &nbsp;Glühbirnen-Herstellern, dessen Zielsetzung es war, die Lebenszeit    zwecks Umsatzsteigerung künstlich zu verkürzen. &nbsp;Als gegenwärtiges Beispiel wird häufig das IPhone genannt, bei    &nbsp;welchem der Akku nicht ausgewechselt werden kann, weshalb sich die Nutzungsdauer auf die Funktionstüchtigkeit    des Akkus beschränkt. Für weitere Beispiele für unterschiedlichste Formen geplanter &nbsp;Obsoleszenz siehe: <a            href="http://www.youtube.com/watch?v=zVFZ4Ocz4VA&amp;sns=em" class="external-link" rel="nofollow">Doku:        Kaufen für die Müllhalde</a>.</p><p><strong>Bewertung und Abstufung</strong></p><p>Wann dieses Negativ-Kriterium    schlagend wird, ist im Einzelfall zu entscheiden, die Nachweisführung erweist sich vielfach als problematisch.    Anhaltspunkte können folgende Aspekte sein:&nbsp;</p><ul>    <li>Nichtaustauschbarkeit von Bauteilen mit kurzer Nutzungsdauer (z.B.: Akku)</li>    <li>Verwendung von sich schnell verschleißenden Bauteilen, trotz&nbsp; Verfügbarkeit von Alternativen mit längerer        Nutzungsdauer (z.B.: Plastikzahnräder).&nbsp;</li></ul><p>Webseite zum Thema: <a href="http://www.murks-nein-danke.de/" class="external-link" rel="nofollow">http://www.murks-nein-danke.de</a></p><p><strong>RedakteurIn: Christian Loy – <a href="mailto:christian.loy@gmx.at" class="external-link" rel="nofollow">christian.loy@gmx.at</a></strong></p>';


Template.footerTemplate = '<div id="footer-contents">    Open Source @ <a href="https://github.com/sinnwerkstatt/gemeinwohl-oekonomie">GitHub</a> by <a href="https://www.sinnwerkstatt.com">Sinnwerkstatt</a><br/>    <a href="https://github.com/sinnwerkstatt/gemeinwohl-oekonomie#contribute">Beitragen</a>,    <a href="https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues">Issues öffnen</a></div>';

Template.gwoeMatrixTemplate = '<div id="gwoe-matrix" class="bubble display-none">    <div class="bootstrap-table whitebg unselectable">        <div class="row row-border dheader-style js-equal-height">            <div class="row-cell col-lg-2 col-md-2 col-sm-2 col-xs-2">                <span class="gwoe-green">{valueName}</span> / <span class="gwoe-blue">{stakeholdersName|s}</span>            </div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[0]|s}</div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[1]|s}</div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[2]|s}</div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[3]|s}</div>            <div class="row-cell last-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[4]|s}</div>        </div>        <div class="row row-border js-equal-height clear-both">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[0].shortcode}) {stakeholders[0].name|s}            </div>            <div class="row-cell indicator-cell last-cell ind-trigger col-lg-10 col-md-10 col-sm-10 col-xs-10"                 data-modal="matrix-{stakeholders[0].values[0].shortcodeSlug}">                <div class="indicator-title">                    {stakeholders[0].values[0].shortcode}) {stakeholders[0].values[0].title|s}                </div>                <div class="indicator-description">                    {stakeholders[0].values[0].content|s}                </div>                <div class="indicator-points">                    {stakeholders[0].values[0].points}                </div>            </div>        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[1].shortcode}) {stakeholders[1].name|s}            </div>            <div class="row-cell indicator-cell last-cell ind-trigger col-lg-10 col-md-10 col-sm-10 col-xs-10"                 data-modal="matrix-{stakeholders[1].values[0].shortcodeSlug}">                <div class="indicator-title">                    {stakeholders[1].values[0].shortcode}) {stakeholders[1].values[0].title|s}                </div>                <div class="indicator-description">                    {stakeholders[1].values[0].content|s}                </div>                <div class="indicator-points">                    {stakeholders[1].values[0].points}                </div>            </div>        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[2].shortcode}) {stakeholders[2].name|s}            </div>            {#stakeholders[2].values}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2"            data-modal="matrix-{shortcodeSlug}">                <div class="indicator-title">                    {shortcode}) {title|s}                </div>                <div class="indicator-description">                    {content|s}                </div>                <div class="indicator-points">                    {points}                </div>            </div>            {/stakeholders[2].values}        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[3].shortcode}) {stakeholders[3].name|s}            </div>            {#stakeholders[3].values}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2"            data-modal="matrix-{shortcodeSlug}">                <div class="indicator-title">                    {shortcode}) {title|s}                </div>                <div class="indicator-description">                    {content|s}                </div>                <div class="indicator-points">                    {points}                </div>            </div>            {/stakeholders[3].values}        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[4].shortcode}) {stakeholders[4].name|s}                <div class="matrix-group-explanation">                    {stakeholders[4].explanation|s}                </div>            </div>            {#stakeholders[4].values}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2"            data-modal="matrix-{shortcodeSlug}">                <div class="indicator-title">                    {shortcode}) {title|s}                </div>                <div class="indicator-description">                    {content|s}                </div>                <div class="indicator-points">                    {points}                </div>            </div>            {/stakeholders[4].values}        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style negative-color-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {negativeCriteriaName|s}            </div>            {#negativeCriteria}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}col-lg-2 col-md-2 col-sm-2 col-xs-2">                {#values}                <div class="negative-container ind-trigger" data-modal="matrix-{shortcodeSlug}">                    <div class="negative-points">                        {points}                    </div>                    <div class="negative-content">                        {titleShort|s}                    </div>                </div>                {/values}            </div>            {/negativeCriteria}        </div>    </div>    <!-- end of matrix table --></div><!-- end of bubble -->';

Template.indicatorTabsTemplate = '<div id="matrix-{shortcodeSlug}" class="display-none">    <div class="container pagehead">        <table>            <tr>                <td class="vmiddle">                    <img class="back-to-matrix pointer"                         src="images/gwoe-matrix-icon-arrow-50h.png" title="Zurück zur GWÖ-Matrix"/>                </td>                <td><span class="indicator-page-title"> <h2>{shortcode}: {name}</h2></span></td>            </tr>        </table>    </div>    <div class="tabs">        <ul class="tablist">            <span id="matrix-{shortcodeSlug}-goals" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-goals-link" class="tablink matrix-goals-tab-title"                   href="#matrix-{shortcodeSlug}-goals"></a>                <div id="matrix-{shortcodeSlug}-goals-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-impulsQuestions" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-impulsQuestions-link" class="tablink matrix-impulsQuestions-tab-title"                    href="#matrix-{shortcodeSlug}-impulsQuestions" ></a>                <div id="matrix-{shortcodeSlug}-impulsQuestions-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-table" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-table-link" class="tablink matrix-table-tab-title"                    href="#matrix-{shortcodeSlug}-table"></a>                <div id="matrix-{shortcodeSlug}-table-content" class="tabcontent">                    <div id="matrix-{shortcodeSlug}-indicator-table-legend" class="indicator-table-legend"></div>                    <table id="matrix-{shortcodeSlug}-indicator-table" class="dtable">                    </table>                    <div id="matrix-{shortcodeSlug}-details-content"                         class="indicator-table-details"></div>                </div>            </li>            <span id="matrix-{shortcodeSlug}-definition" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-definition-link" class="tablink matrix-definition-tab-title"                    href="#matrix-{shortcodeSlug}-definition"></a>                <div id="matrix-{shortcodeSlug}-definition-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-implementationHelp" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-implementationHelp-link" class="tablink matrix-implementationHelp-tab-title"                   href="#matrix-{shortcodeSlug}-implementationHelp"></a>                <div id="matrix-{shortcodeSlug}-implementationHelp-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-moreinfo" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-moreinfo-link" class="tablink matrix-moreinfo-tab-title"                    href="#matrix-{shortcodeSlug}-moreinfo"></a>                <div id="matrix-{shortcodeSlug}-moreinfo-content" class="tabcontent">                </div>            </li>        </ul>    </div></div>';

Template.mainPageTemplate = '<div id="main-page" class="display-none">    <div class="main-page-introtext img-center center">        Ein alternatives Wirtschaftssystem, das auf Gemeinwohl-fördernden Werten aufgebaut ist.        <br/><br/>        Ein Veränderungshebel auf wirtschaftlicher, politischer und gesellschaftlicher Ebene – eine Brücke von Altem zu Neuem.        <br/><br/>        Besuchen Sie die <a href="http://gemeinwohl-oekonomie.org">offizielle Webseite der Gemeinwohl-Ökonomie</a>.    </div>    <div class="main-page-container-link col-lg-12 col-md-12 col-sm-12 col-xs-12">        <a href="#matrix" class="img-link">            <img class="img-center img-responsive main-page-matrix-img" src="images/gwoe-matrix-icon.png" />            <div class="main-page-container-link-title center">                Interaktive<br/>Gemeinwohl-Matrix            </div>            <div class="main-page-container-link-description center">                Erfahren Sie mehr über Gemeinwohl-Bilanzen.            </div>        </a>    </div></div>';

Template.mainPageTestTemplate = '<div id="main-page" class="display-none">    <div class="img-center center">        Ein alternatives Wirtschaftssystem, das auf Gemeinwohl-fördernden Werten aufgebaut ist.        <br/><br/>        Ein Veränderungshebel auf wirtschaftlicher, politischer und gesellschaftlicher Ebene – eine Brücke von Altem zu Neuem.        <br/><br/>        Besuchen Sie die <a href="http://gemeinwohl-oekonomie.org">offizielle Webseite der Gemeinwohl-Ökonomie</a>.    </div>    <div class="main-page-container-link center col-lg-12 col-md-12 col-sm-12 col-xs-12">        <a href="#quick-test" class="img-link">            <img class="img-center img-responsive" src="images/quick-test-icon.png" />            <div class="main-page-container-link-title center">                Schnelltest            </div>            <div class="main-page-container-link-description center">                Bekommen Sie einen ersten Einblick wie gemeinwohlorientiert Sie wirtschaften.            </div>        </a>    </div></div>';

Template.negativeCriteriaTemplate = '<div id="matrix-{shortcodeSlug}" class="indicator-modal display-none">    <img class="back-to-matrix pointer" src="images/gwoe-matrix-icon-arrow-50h.png" title="Zurück zur GWÖ-Matrix"/>    <div class="indicator-page-title ">        <h2 class="negative-color">{shortcode}: {name}</h2>    </div>    <div id="matrix-{shortcodeSlug}-content">        {content}    </div></div>';

Template.quickTestTemplate = '<div id="quick-test" class="display-none">    <h1>{name}</h1>    <div id="quick-test-introduction">        <br/>        <p>            <button type="button" class="btn btn-lg btn-gwoe js-quick-test-start">Schnelltest starten</button>        </p>        <br/>        {#data.tests}        {introduction.content|s}        <br/>        <button type="button" class="btn btn-lg btn-gwoe js-quick-test-start">Schnelltest starten</button>        {/data.tests}    </div>    {#data.tests}    <div id="quick-test-questions">        <div id="quick-test-question-profile" class="quick-test-question display-none">            <div class="quick-test-questions-text">                <div class="quick-test-profile-form">                    <div class="quick-test-profile-form-text">                        Bitte geben Sie ein:                    </div>                    <div class="form-group">                        <label for="quick-test-participant-companyName">Unternehmenname:</label>                        <input type="text" class="form-control" id="quick-test-participant-companyName"                               placeholder="Firmenname" autofocus/>                    </div>                    <div class="form-group">                        <label for="quick-test-participant-participantType">Unternehmentyp:</label>                        <select class="form-control" id="js-quick-test-participant-participantType">                            {#structure.testTypes[0].participants}                            <option value="{type}">{name}</option>                            {/structure.testTypes[0].participants}                        </select>                    </div>                </div>            </div>            <div class="quick-test-questions-buttons">                <button type="button" class="btn btn-lg btn-gwoe js-start-test-button">                    Weiter                </button>            </div>        </div>        {#questions}        <div id="quick-test-question-{$idx}" class="quick-test-question display-none">            <div class="quick-test-questions-indicator">                {stakeholders}{gwoeValue} - {indicatorTitle}            </div>            <div class="quick-test-questions-text">                {text}            </div>            <div class="quick-test-questions-buttons">                {#structure.testTypes[0].individualAnswer.evaluationValues}                <button data-value="{value}" type="button"                        class="btn btn-lg btn-default btn-gwoe-level-{$idx} js-quick-test-question-button">                    {text}                </button>                {/structure.testTypes[0].individualAnswer.evaluationValues}            </div>        </div>        {/questions}    </div>    {/data.tests}    <div id="quick-test-result" class="display-none">        <div id="quick-test-result-companyName"></div>        <div class="row">            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">                <div class="quick-test-result-progress-bar-container">                    <div class="bs-example vertical bottom v-bottom-basic">                        <div class="progress vertical bottom wide">                            <div id="quick-test-result-progress-bar" class="progress-bar"                                 aria-valuetransitiongoal="0"></div>                        </div>                    </div>                    <div class="quick-test-result-points-container">                        <span id="quick-test-points"></span> von                        <span id="quick-test-max-points"></span> Punkte.                    </div>                </div>            </div>            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">                <div id="quick-test-result-text"></div>            </div>            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>        </div>    </div></div>';

Template.tableLegend = 'Legende:<div class="matrix-table-legend">    {#legend}        <span class="matrix-table-legend-dt">{short}</span>        <span class="matrix-table-legend-dd">{long}</span>,    {/legend}</div>';

'use strict';

var Router = {

    hashSymbol : '#',
    hashQuickTest : 'quick-test',
    hashMatrix : 'matrix',
    hashMatrixMinus : 'matrix-',

    mainPageId : 'main-page',
    quickTestId : 'quick-test',
    matrixId : 'gwoe-matrix',

    fadeOutSpeed : 100,
    fadeInSpeed : 300,

    /**
     * The default subIndicator Id to be shown.
     */
    defaultSubIndicatorId : '-table',

    visibleElementId : '',

    lastUrlHash : '---',
    lastIndicatorId : '',
    lastIndicatorDetailId : '',

    /**
     * Initializes the URL Routing
     */
    init: function () {

        var urlHash = Router.getUrlHash();
        console.log('urlHash = ' + urlHash);

        var pageWasShown = Router.onHashChange();

        if(!pageWasShown && urlHash && urlHash.length > 1) {
            var hash = urlHash.substr(1);
            console.log('hash = ' + hash);

            if (hash.startsWith(Router.hashMatrixMinus)) {
                // hack: assumes the format "matrix-<pageid>"
                if (hash.length === 9) {
                    Router.showPage(hash);
                } else if (hash.length > 9) {
                    var indicatorId = hash.substr(0, 9);
                    var indicatorDetailId = urlHash.substr(10);
                    Router.showPage(indicatorId, indicatorDetailId);
                } else {
                    Router.showMatrix();
                }
            } else if (hash.startsWith(Router.hashMatrix)) {
                console.log('showMatrix');
                Router.showMatrix();
            } else if (hash.startsWith(Router.hashMatrix)) {
                Router.showQuickTest();
                console.log('showQuickTest');
            } else {
                Router.showMainPage();
                console.log('showMainPage');
            }
        }

        $(window).bind('hashchange', Router.onHashChange);
    },

    getCurrentPageUrl : function() {
        return Router.getUrlHash();
    },

    /**
     * Return true if it has shown a page (main,  matrix or test)
     * @returns {boolean}
     */
    onHashChange: function () {
        var urlHash = Router.getUrlHash();
        var pageWasShown = false;

        if(!urlHash && urlHash !== Router.lastUrlHash) {
            Router.showMainPage();
            pageWasShown = true;
        } else if (urlHash === Router.hashSymbol + Router.hashMatrix) {
            Router.showMatrix();
            pageWasShown = true;
        } else if (urlHash === Router.hashSymbol + Router.hashQuickTest) {
            Router.showQuickTest();
            pageWasShown = true;
        }
        Router.lastUrlHash = urlHash;
        return pageWasShown;
    },

    getUrlHash: function () {
        var urlHash = window.location.hash;

        if (urlHash === Router.hashSymbol && urlHash.length === 1) {
            urlHash = ''; // IE fix: remove the # symbol
        }
        return urlHash;
    },

    showPage: function (indicatorId, indicatorDetailId) {

        console.log('showPage: ('+indicatorId+', '+indicatorDetailId+')');
        // init params
        if (indicatorId.startsWith(Router.hashMatrixMinus)) { // if matrix URL
            if (indicatorId.startsWith('n')) { // negative criteria URL
                indicatorDetailId = ''; // no details
            } else {
                indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
                    indicatorDetailId : Router.defaultSubIndicatorId;
            }
        }
        console.log('indicatorDetailId = '+indicatorDetailId);
        Router.visibleElementId = indicatorId;

        $('#gwoe-matrix').fadeOut(Router.fadeOutSpeed, function () {
            $(Router.hashSymbol + indicatorId).fadeIn(Router.fadeInSpeed);
        });

        if ($('html').hasClass('lt-ie9')) {

            var tabContentCssClass = 'js-tabcontainer';
            if (Router.lastIndicatorId.length > 0) {
                var lastTabContentId = 'matrix-'+Router.lastIndicatorId+Router.lastIndicatorDetailId+'-content';
                var lastTabContent = document.getElementById(lastTabContentId);
                var lastCurrentClass = lastTabContent.className;
                lastTabContent.className = lastCurrentClass.substring(0, lastCurrentClass.length - tabContentCssClass.length-1);
            }
            var tabContentId = 'matrix-'+indicatorId+indicatorDetailId+'-content';
            var tabContent = document.getElementById(tabContentId);
            console.log('document.getElementById(\''+tabContentId+'\')');
            var newCssClass = tabContent.getAttribute('class') + ' ' + tabContentCssClass;
            console.log('newCssClass = ' + newCssClass);
            console.log('newCssClass = ' + newCssClass);
            tabContent.setAttribute('class', newCssClass);


            /*
            var tabLinkId = '#matrix-'+indicatorId+indicatorDetailId+'-link';
            var tabLink = $(tabLinkId);
            tabLink.addClass('js-tablink');
            console.log('$(\''+tabLinkId+'\').addClass(\'js-tablink\')');
            */
        }

        window.location.hash = Router.hashSymbol + indicatorId + indicatorDetailId;

        Router.lastIndicatorId = indicatorId;
        Router.lastIndicatorDetailId = indicatorDetailId;
    },

    showMainPage : function () {
        if (Router.visibleElementId) {
            $('#' + Router.visibleElementId).fadeOut(Router.fadeOutSpeed, Router.fadeInMainPage);
        } else {
            Router.fadeInMainPage();
        }
        window.location.hash = '';
        Router.visibleElementId = Router.mainPageId;
    },

    showQuickTest : function () {
        $('#' + Router.visibleElementId).fadeOut(
            Router.fadeOutSpeed, Router.fadeInQuickTest());
        Router.visibleElementId = Router.quickTestId;
    },

    showMatrix : function () {
        $('#' + Router.visibleElementId).fadeOut(
            Router.fadeOutSpeed, Router.fadeInMatrix());
        Router.visibleElementId = Router.matrixId;
    },

    showMatrixByHash : function () {
        window.location.hash = Router.hashMatrix;
    },

    fadeInContainer : function (containerId) {
        $('#' + containerId).fadeIn(Router.fadeInSpeed);
    },

    fadeInMainPage : function (containerId) {
        Router.fadeInContainer(Router.mainPageId);
    },

    fadeInQuickTest : function (containerId) {
        Router.fadeInContainer(Router.quickTestId);
    },

    fadeInMatrix : function (containerId) {
        Router.fadeInContainer(Router.matrixId);
        Utils.applyEqualHeightRecalculate();
    }

};

'use strict';

var Controller = {

    createPageHtml : function () {
        Controller.createMainPageHtml();
        // Controller.createQuickTestHtml();
        Controller.createMatrixHtml();
        Controller.createIndicatorsHtml();
        Controller.createFooterHtml();
    },

    createMainPageHtml : function () {

        var mainPageHtml = '';
        var compiledTemplate = dust.compile(Template.mainPageTemplate, 'mainPageTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('mainPageTemplate', {}, function(err, out) {
            mainPageHtml += out;
        });

        document.getElementById('main-page-container').innerHTML = mainPageHtml;
    },

    createMainPageTestHtml : function () {

        var mainPageTestHtml = '';
        var compiledTemplate = dust.compile(Template.mainPageTestTemplate, 'mainPageTestTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('mainPageTestTemplate', {}, function(err, out) {
            mainPageTestHtml += out;
        });

        document.getElementById('main-page-container').innerHTML = mainPageTestHtml;
    },

    createQuickTestHtml : function () {

        var quickTestHtml = '';
        var compiledTemplate = dust.compile(Template.quickTestTemplate, 'quickTestTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('quickTestTemplate', Data.quickTest, function(err, out) {
            quickTestHtml += out;
        });

        document.getElementById('quick-test-container').innerHTML = quickTestHtml;
    },

    createMatrixHtml : function (matrixData) {
        if (matrixData == undefined) {
            matrixData = Data.matrix;
        }

        var matrixHtml = '';
        var compiledTemplate = dust.compile(Template.gwoeMatrixTemplate, 'gwoeMatrixTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('gwoeMatrixTemplate', matrixData, function(err, out) {
            matrixHtml += out;
        });

        document.getElementById('gwoe-matrix-container').innerHTML = matrixHtml;

        $(window).resize(Controller.applyEqualHeightOnResizeOfMatrix);
    },

    applyEqualHeightOnResizeOfMatrix : function () {
        // resize only if the matrix page is opened
        if (Router.getCurrentPageUrl() === Router.hashSymbol + Router.hashMatrix) {
            Utils.applyEqualHeightOnResize();
        }
    },

    /**
     * Creates the HTML for all indicators
     *
     * @returns {boolean}
     */
    createIndicatorsHtml : function () {

        var dataIndicators = Data.indicators;
        var structure = dataIndicators.structure;

        var indicators = dataIndicators.data.indicators;
        var negativeCriteria = dataIndicators.data.negativeCriteria;

        Controller.createIndicatorContainer(indicators, negativeCriteria);
        Controller.createIndicatorTabs(structure, indicators, negativeCriteria);

        return true; // avoid message 'function has inconsistent return points'
    },

    /**
     * Creates the HTML for the Indicator Container from JSON data
     * @param indicators - JSON data
     * @param negativeCriteria - JSON data
     */
    createIndicatorContainer : function (indicators, negativeCriteria) {

        var indicatorHtml = '';

        var numOfIndicators = indicators.length;
        var indicator;
        for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {

            // the current indicator data
            indicator = indicators[indicatorIndex];
            
            //
            var compiledTemplate = dust.compile(Template.indicatorTabsTemplate, 'indicatorTabsTemplate');
            dust.loadSource(compiledTemplate);
            dust.render('indicatorTabsTemplate', indicator, function(err, out) {
                indicatorHtml += out;
            });
        }

        indicatorHtml += Controller.getNegativeCriteriaHtml(negativeCriteria);

        document.getElementById('indicators-container').innerHTML = indicatorHtml;
    },

    /**
     * Creates the HTML for the Negative Criteria from JSON data
     * @param negativeCriteria - JSON data
     * @returns {string}
     */
    getNegativeCriteriaHtml : function (negativeCriteria) {

        var negativeCriteriaHtml = '';

        var numOfNegativeCriteria = negativeCriteria.length;
        var negativeCriterion;
        for (var criteriaIndex = 0; criteriaIndex < numOfNegativeCriteria; criteriaIndex++) {

            // the current negative criterion data
            negativeCriterion = negativeCriteria[criteriaIndex];

            var compiledTemplate = dust.compile(Template.negativeCriteriaTemplate, 'negativeCriteriaTemplate');
            dust.loadSource(compiledTemplate);
            dust.render('negativeCriteriaTemplate', negativeCriterion, function(err, out) {
                negativeCriteriaHtml += out;
            });
        }

        return  negativeCriteriaHtml;
    },

    /**
     * Creates the HTML for the Indicator Tabs from JSON data
     * @param structure - JSON data
     * @param indicators - JSON data
     * @param negativeCriteria - JSON data
     */
    createIndicatorTabs : function (structure, indicators, negativeCriteria) {

        var numOfIndicators = indicators.length;
        var indicator;

        // add tab names
        $('.matrix-goals-tab-title').html(structure.goals);
        $('.matrix-impulsQuestions-tab-title').html(structure.impulsQuestions);
        $('.matrix-table-tab-title').html(structure.table);
        $('.matrix-definition-tab-title').html(structure.definition);
        $('.matrix-implementationHelp-tab-title').html(structure.implementationHelp);
        $('.matrix-moreinfo-tab-title').html(structure.moreinfo);

        for (var indicatorIndex = 0; indicatorIndex < numOfIndicators; indicatorIndex++) {
            // the current indicator data
            indicator = indicators[indicatorIndex];
            // add tab contents
            if (indicator.goals) {
                $('#matrix-'+indicator.shortcodeSlug+'-goals-content').html(indicator.goals.content);
            }
            if (indicator.impulsQuestions) {
                $('#matrix-'+indicator.shortcodeSlug+'-impulsQuestions-content').html(indicator.impulsQuestions.content);
            }
            if (indicator.details) {
                $('#matrix-'+indicator.shortcodeSlug+'-details-content').html(indicator.details.content);
            }
            if (indicator.definition && indicator.definition.content) {
                $('#matrix-'+indicator.shortcodeSlug+'-definition-content').html(indicator.definition.content);
            }
            if (indicator.implementationHelp && indicator.implementationHelp.content) {
                $('#matrix-'+indicator.shortcodeSlug+'-implementationHelp-content').html(indicator.implementationHelp.content);
            }
            if (indicator.moreinfo) {
                $('#matrix-'+indicator.shortcodeSlug+'-moreinfo-content').html(indicator.moreinfo.content);
            }
            var indicatorTableEl = $('#matrix-'+indicator.shortcodeSlug+'-indicator-table');
            if (indicatorTableEl) {
                // use jQuery, as innerHTML throws an exception in IE7, IE8
                indicatorTableEl.html(Controller.getMeasurementTableHTMLString(indicator));
            }
            var indicatorTableLegendEl = $('#matrix-'+indicator.shortcodeSlug+'-indicator-table-legend');
            if (indicatorTableLegendEl) {
                indicatorTableLegendEl.html(Controller.getTableLegendString(indicator.table));
            }
            // TODO: add the rest.
        }

        var numOfNegativeCriteria = negativeCriteria.length;
        var negativeCriterion;
        for (var criteriaIndex = 0; criteriaIndex < numOfNegativeCriteria; criteriaIndex++) {

            // the current negative criterion data
            negativeCriterion = negativeCriteria[criteriaIndex];

            // add contents
            document.getElementById('matrix-'+negativeCriterion.shortcodeSlug+'-content').innerHTML =
                negativeCriterion.content;
        }
    },

    getTableLegendString : function (indicatorTable) {
        // TODO: create the string from the JSON data.
        if (indicatorTable.legend !== undefined) {

            var tableLegendHtml = '';

            var compiledTemplate = dust.compile(Template.tableLegend, 'tableLegend');
            dust.loadSource(compiledTemplate);
            dust.render('tableLegend', indicatorTable, function(err, out) {
                tableLegendHtml += out;
            });

            return tableLegendHtml;
        } else {
            return '';
        }
    },

    /**
     * Creates the HTML string for the whole subindicator HTML table.
     *
     * @param indicator
     * @returns {string}
     */
    getMeasurementTableHTMLString : function (indicator) {

        var hmlString = Controller.getMeasurementTableHeaderHTMLString(Data.indicators.structure);

        var indicatorTableData = indicator.table;

        // return emtpy table if no table data is defined.
        if (indicatorTableData === undefined ||
            indicatorTableData.subindicators === undefined) {
            return hmlString;
        }

        var numOfSubindicators = indicatorTableData.subindicators.length;
        for (var subindicatorIndex = 0; subindicatorIndex < numOfSubindicators; subindicatorIndex++) {
            var subindicator = indicatorTableData.subindicators[subindicatorIndex];
            var subindicatorAdded = false;

            if (subindicator) {
                var numOfDevTracks = subindicator.developmentTracks.length;
                for (var devTrackIndex = 0; devTrackIndex < numOfDevTracks; devTrackIndex++) {
                    var devTrack = subindicator.developmentTracks[devTrackIndex];
                    var numOfDevDetails = devTrack.developmentDetails.length;

                    // one row for every dev track
                    hmlString += '<tr>';

                    if (!subindicatorAdded) {
                        // add subindicator info
                        // if more than one dev track and this is the first one
                        if (numOfDevTracks > 1) {
                            hmlString += '<td rowspan="2" class="dtable-cell indicator-cell dheader-style dheader-style-border-l" >';
                        } else {
                            hmlString += '<td class="dtable-cell indicator-cell dheader-style dheader-style-border-l">';
                        }
                        hmlString += subindicator.title + '<br/><br/>';
                        hmlString += '('+Data.indicators.structure.relevance+': '+
                            Data.indicators.structure.relevances[subindicator.relevance]+')';
                        hmlString += '</td>';
                    }

                    // add development tracks
                    for (var devDetailsIndex = 0; devDetailsIndex < numOfDevDetails; devDetailsIndex++) {
                        var devDetail = devTrack.developmentDetails[devDetailsIndex];

                        // if more than one dev track and this is the first one
                        if (devDetail.levels.length > 1) {
                            hmlString += '<td colspan="'+devDetail.levels.length+'"  class="dtable-cell indicator-cell" >';
                        } else {
                            hmlString += '<td class="dtable-cell indicator-cell">';
                        }

                        hmlString += devDetail.description;
                        hmlString += '</td>';
                    }

                    subindicatorAdded = true;
                    hmlString += '</tr>';
                }
            }
        }

        return hmlString;
    },

    /**
     * Creates the HTML string for the subindicator table header.
     *
     * @param structure - the JSON structure data
     * @returns {string}
     */
    getMeasurementTableHeaderHTMLString : function (structure) {
        var indicatorLevels = structure.levels;

        var hmlString = '';
        hmlString += '<thead><tr class="dheader-style">';
        hmlString += '<th class="dtable-cell dheader-style dheader-style-border-l col-1-6 subindicator-header">'+
            structure.subindicator+'</th>';

        var beginner = indicatorLevels.beginner;
        var advanced = indicatorLevels.advanced;
        var experienced = indicatorLevels.experienced;
        var model = indicatorLevels.model;

        hmlString += '<th class="dtable-cell col-1-6 basic-level-header">' +
            beginner.title+'<br/>'+
            Controller.getMinMaxRangeString(beginner.min, beginner.max)+'</th>';

        hmlString += '<th class="dtable-cell col-1-6 advanced-level-header">'+
            indicatorLevels.advanced.title+'<br/>'+
            Controller.getMinMaxRangeString(advanced.min, advanced.max)+'</th>';

        hmlString += '<th class="dtable-cell col-1-6 experienced-level-header">'+
            indicatorLevels.experienced.title+'<br/>'+
            Controller.getMinMaxRangeString(experienced.min, experienced.max)+'</th>';

        hmlString += '<th class="dtable-cell col-1-6 model-level-header">'+
            indicatorLevels.model.title+'<br/>'+
            Controller.getMinMaxRangeString(model.min, model.max)+'</th>';

        hmlString += '</tr></thead>';
        return hmlString;
    },

    getMinMaxRangeString : function (minStr, maxStr) {
        return '(' + minStr + ' - ' + maxStr + ' %)';
    },

    createFooterHtml : function () {
        var footerHtml = '';
        var compiledTemplate = dust.compile(Template.footerTemplate, 'footerTemplate');
        dust.loadSource(compiledTemplate);
        dust.render('footerTemplate', {}, function(err, out) {
            footerHtml += out;
        });
        document.getElementById('footer-container').innerHTML = footerHtml;
    }
};

'use strict';

Controller.numberOfQuestions = 0;

Controller.quickTestIntroId = 'quick-test-introduction';
Controller.quickTestProfileId = 'quick-test-question-profile';
Controller.questionIdPrefix = 'quick-test-question-';
Controller.previousQuestionId = '';
Controller.currentQuestionId = '';
Controller.nextQuestionId = '';
Controller.quickTestResultId = 'quick-test-result';

Controller.initializeTestState = function () {

    Controller.testState = {
        // -1 means intro page, 0 means first question
        questionIndex : -1,
        furthestQuestionIndex : -1,

        // read from the JSON data
        operandOnIndividualResults : '',
        numberOfEvaluationValues : 0,
        maxPoints : 0,

        // participants info
        companyName : '',
        participantType : 'oneperson',

        /**
         * string array of the given evaluation values
         */
        answers : [],
        resultPoints : '',
        resultPercentage : 0,
        feedbackContent : '',
        resultLevel : -1
    };
};

Controller.createQuickTestHtml = function () {

    Controller.initializeTestState();

    var quickTestHtml = '';
    var compiledTemplate = dust.compile(Template.quickTestTemplate, 'quickTestTemplate');
    dust.loadSource(compiledTemplate);
    dust.render('quickTestTemplate', Data.quickTest, function(err, out) {
        quickTestHtml += out;
    });

    Data.testQuestions = Data.quickTest.data.tests[0].questions;

    document.getElementById('quick-test-container').innerHTML = quickTestHtml;

    // add click listeners
    $('.js-quick-test-start').click(Controller.showProfileFormForTestQuestion);
    $('.js-quick-test-question-button').click(Controller.onTestAnswerClick);
    $('.js-start-test-button').click(Controller.onProfileFormSubmit);


    // REMOVE ME:
//    $('#quick-test-result-progress-bar').progressbar({display_text: 'fill'});
//    var testState = Controller.testState;
//    document.getElementById('quick-test-result-companyName').innerHTML = 'My Company GmBWohl';
//    document.getElementById('quick-test-points').innerHTML = testState.resultPoints;
//    document.getElementById('quick-test-max-points').innerHTML = testState.maxPoints;
//    document.getElementById('quick-test-result-text').innerHTML = testState.feedbackContent;
    // Controller.initializeQuickTest();
};

Controller.onTestAnswerClick = function (event) {
    var answerValue = $(event.target).attr('data-value');
    // Controller.testState.questionIndex
    var weight = Data.testQuestions[Controller.testState.questionIndex].weight;
    if (weight !== undefined) {
        answerValue = parseInt(answerValue, 10) * weight + '';
    }
    console.log('       points: ' + answerValue);

    Controller.testState.answers.push(answerValue);
    Controller.showNextTestQuestion();
};

Controller.initializeQuickTest = function () {
    // add click listener
    Controller.showNextTestQuestion();
};

Controller.showProfileFormForTestQuestion = function () {
//    console.log('Showing profile form');
    Controller.previousQuestionId = Controller.quickTestIntroId;
    Controller.currentQuestionId = Controller.quickTestProfileId;
    Controller.fadeQuestions();
    $('quick-test-participant-companyName').focus();
};

Controller.onProfileFormSubmit = function () {
    var companyName = $('#quick-test-participant-companyName').val();
    var participantType = $('#js-quick-test-participant-participantType :selected').val();
    Controller.testState.companyName = companyName;
    Controller.testState.participantType = participantType;
    Controller.showNextTestQuestion();
};

Controller.startQuickTest = function () {
    Controller.currentQuestionId = Controller.quickTestIntroId;
    Controller.showNextTestQuestion();
};

Controller.showNextTestQuestion = function () {
    Controller.previousQuestionId = Controller.currentQuestionId;

    Controller.testState.questionIndex += 1;

    if (Controller.isEndOfTest()) {
        Controller.showEndOfTest();
    } else {
        if (Controller.canAccessQuestion()) {

            Controller.currentQuestionId =
                Controller.questionIdPrefix + Controller.testState.questionIndex;
            console.log('Question ' + Controller.testState.questionIndex);

            Controller.fadeQuestions();
        } else {
//            console.log('can NOT access Question.');
            Controller.showNextTestQuestion();
        }
    }
};

Controller.isEndOfTest = function () {
    return Controller.testState.questionIndex >= Data.testQuestions.length;
};

Controller.canAccessQuestion = function () {
    if(Controller.testState.questionIndex < Data.testQuestions.length) {
        var question = Data.testQuestions[Controller.testState.questionIndex];
        return $.inArray(Controller.testState.participantType, question.excludedParticipants);
    } else {
        return false;
    }
};

Controller.showEndOfTest = function () {

    console.log('End of test .');

    var testState = Controller.testState;

    // execute operand on the individual answers
    var pointsSum = 0;
    var testResultStructure = Data.quickTest.structure.testTypes[0].result;
    if (testResultStructure.operandOnIndividualResults === 'add') {
        pointsSum = Utils.sumIntegersInArray(testState.answers);
    }

    // calculate the final points
    var finalPoints = 0;

    var finalCalculations = testResultStructure.finalCalculation;
    var numOfFinalCalculations = finalCalculations.length;
    for (var calcIndex = 0; calcIndex < numOfFinalCalculations; calcIndex++) {
        var finalCalc = finalCalculations[calcIndex];
        if (finalCalc.participantType === testState.participantType) {
            if (finalCalc.multiplyBy) {
                finalPoints = pointsSum * parseFloat(finalCalc.multiplyBy);
            } else {
                console.log('No \'multiplyBy\' defined in the final calculation ' +
                    'for the participantType ' + finalCalc.participantType);
            }
        }
    }

    // 62.44 is converted to 62
    testState.resultPoints = Math.floor(finalPoints);

    console.log('Result points sum: ' + pointsSum);
    console.log('Result points multiplied: ' + testState.resultPoints);
    console.log('Result percentage: ' + testState.resultPercentage);

    // get the feedback content
    var feedbackContent;
    var feedbacks = testResultStructure.feedbacks;
    var numOfFeedbacks = feedbacks.length;
    var maxPoints = 0;
    for (var feedbackIndex = 0; feedbackIndex < numOfFeedbacks; feedbackIndex++) {
        var feedback = feedbacks[feedbackIndex];
        if (finalPoints >= feedback.minValue && finalPoints <= feedback.maxValue) {
            feedbackContent = feedback.content;
            testState.resultLevel = feedbackIndex;
        }

        if (feedbackIndex === (numOfFeedbacks - 1)) {
            maxPoints = feedback.maxValue;
        }
    }
    testState.maxPoints = maxPoints;
    testState.feedbackContent = feedbackContent;

    testState.resultPercentage = Number(testState.resultPoints / testState.maxPoints).toFixed(2) * 100;
    var progressBarElement = $('#quick-test-result-progress-bar');
    progressBarElement.attr('aria-valuetransitiongoal', testState.resultPercentage);

    // set the result values in the template
    document.getElementById('quick-test-result-companyName').innerHTML = testState.companyName;
    document.getElementById('quick-test-points').innerHTML = testState.resultPoints;
    document.getElementById('quick-test-max-points').innerHTML = testState.maxPoints;
    document.getElementById('quick-test-result-text').innerHTML = testState.feedbackContent;

    // set the color:
    var testColorClass = '';
    if (testState.resultLevel === 0) {
        testColorClass = 'basic-level-bg-text';
    } else if (testState.resultLevel === 1) {
        testColorClass = 'advanced-level-bg-text';
    } else if (testState.resultLevel === 2) {
        testColorClass = 'experienced-level-bg-text';
    } else if (testState.resultLevel === 3) {
        testColorClass = 'model-level-bg-text';
    }
    $('#quick-test-result-progress-bar').addClass(testColorClass);
//    document.getElementById('quick-test-result-progress-bar').className += ' ' + testColorClass;

    // show final result page
    Controller.currentQuestionId = Controller.quickTestResultId;
    Controller.fadeQuestions();

    progressBarElement.progressbar({display_text: 'fill'});
};

Controller.fadeQuestions = function () {
//    console.log("Fading out " + Controller.previousQuestionId);
    $('#' + Controller.previousQuestionId).fadeOut(
        Router.fadeOutSpeed, Controller.fadeInQuestion);
};

Controller.fadeInQuestion = function () {
//    console.log("Fading in " + Controller.currentQuestionId);
    $('#' + Controller.currentQuestionId).fadeIn(Router.fadeInSpeed);
};

var isIE9 = document.addEventListener;
var isIE8 = document.querySelector;
var isIE7 = window.XMLHttpRequest;

if (isIE9) {
    console.log('isIE9');
}
if (isIE8) {
    console.log('isIE8');
}
if (isIE7) {
    console.log('isIE7');
}

'use strict';

Controller.createPageHtml();

/* Tabs */

/* Tab Trigger */
$('.ind-trigger').each(function (i, elem) {
    var indicatorEl = $(elem);
    var indicatorModalId = indicatorEl.attr('data-modal');

    indicatorEl.click(function () {
        Router.showPage(indicatorModalId);
//        window.scrollTo(0, 170);
        $("html, body").animate({ scrollTop: 170 }, "slow");
    });
});

$('.back-to-matrix').each(function (i, elem) {
    $(elem).click(Router.showMatrixByHash);
});


$(document).ready(function () {
    Router.init();
});

/* comment */
/*

var templateTest = 'Hi {name}';
var mydata = {
    name : 'Nikolay'
};

var compiledTemplate = dust.compile(templateTest, 'templateTest');
dust.loadSource(compiledTemplate);
dust.render("templateTest", mydata, function(err, out) {
  console.log(out);
});
*/

