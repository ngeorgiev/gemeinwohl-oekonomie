'use strict';

var Utils = {};

/**
 * Returns the sum of all integers in the given array.
 *
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
                        name : 'Unternehmen',
                        text : 'Nein'
                    },
                    {
                        type : 'oneperson',
                        name : 'Einzelunternehmen',
                        text : 'Ja'
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
                                '<p>Ihr Unternehmen setzt sich mit gemeinwohlorientierten Aspekten auseinander und geht damit bereits über die gesetzlichen Mindeststandards hinaus. Allerdings gibt es noch ein sehr hohes Entwicklungspotenzial in Richtung Gemeinwohl und Nachhaltigkeit.</p>'+
                                '<p>Allerdings gibt es noch ein sehr hohes Entwicklungspotenzial in Richtung Gemeinwohl und Nachhaltigkeit.</p>'+
                                '<p>Der interne Gemeinwohl-Bericht kann helfen, den Status quo detaillierter zu ermitteln und darauf aufbauend Ziele und Maßnahmen für das nächste Jahr zu setzen.</p>'
                        },
                        {
                            minValue: 33,
                            maxValue: 62,
                            content :
                                '<p>Ihr Unternehmen hat bereits mehr als 25% der Gemeinwohl-Aspekte verwirklicht und befindet sich auf einem „guten“ Weg.</p>'+
                                '<p>Für einen besseren Überblick könnten Sie jetzt eine Einstiegsbilanz erstellen, die eine  detailliertere Auseinandersetzung ermöglicht und gleichzeitig weniger Zeit benötigt als eine vollständige Gemeinwohl-Bilanz.</p>'
                        },
                        {
                            minValue: 63,
                            maxValue: 94,
                            content :
                                '<p>Ihr Unternehmen ist schon sehr nachhaltigkeitsorientiert und legt gesteigerten Wert auf sozial- und umweltgerechtes Wirtschaften. Erstellen Sie wenn möglich einen Gemeinwohl-Bericht und treten Sie, falls noch nicht geschehen, in Kontakt mit gleichgesinnten Unternehmen, um gemeinsam effektiver zu lernen.</p>'+
                                '<p>Ein Gemeinwohl-Bericht ermöglicht eine detaillierte Aufschlüsselung ihres aktuellen Stands und hilft Ihnen, Bereiche mit Entwicklungspotenzial zu definieren sowie weitere Verbesserungen strategisch anzugehen.</p>'
                        },
                        {
                            minValue: 95,
                            maxValue: 126,
                            content :
                                '<p>Ihr Unternehmen ist bereits vorbildlich in Bezug auf viele Kriterien und Ziele der Gemeinwohlökonomie.</p>'+
                                '<p>Wahrscheinlich sind Sie schon ein GWÖ-Unternehmen oder seit Jahren branchenführend in der Nachhaltigkeits- oder Social-Business-Szene. Als VorreiterIn und PionierIn sind Sie Vorbild für ihre Mitunternehmen und Inspiration für andere ethisch interessierte Betriebe. Wir laden Sie herzlich ein, einen Gemeinwohl-Bericht zu verfassen und ihre Erfahrung weiterzugeben!</p>'
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
                        '<p>Die Gemeinwohl-Ökonomie ist eine Vision für eine menschenwürdige und nachhaltige Wirtschafts- und Lebensweise. Die Wirtschaft soll nach denselben Werten gestaltet werden, die menschliche Beziehungen gelingen lassen und zudem bereits in den Verfassungen verankert sind. Das erste Ziel des Wirtschaftens ist nicht mehr Profitmaximierung, sondern die Mehrung des Gemeinwohls.</p>'+
                        '<p>Der Beitrag eines Unternehmens zum Gemeinwohl wird auf Basis der Gemeinwohl-Matrix definiert und messbar gemacht.</p>'+
                        '<p>Die Gemeinwohl-Bilanz beantwortet, wie ich als UnternehmerIn fünf Grundwerte (neben der Freiheit die häufigsten Verfassungswerte demokratischer Staaten): Menschenwürde, Solidarität, Ökologische Nachhaltigkeit, soziale Gerechtigkeit und Demokratie/Transparenz lebe - im Kontakt mit den wichtigsten Berührungsgruppen: LieferantInnen, GeldgeberInnen, MitarbeiterInnen, KundInnen/Mitunternehmen (heute: KonkurrentInnen) und dem gesellschaftlichen Umfeld.</p>'+
                        '<p>So entstehen an den Schnittstellen von Werten und Berührungsgruppen 17 Indikatoren, die den Beitrag eines Unternehmens zum Gemeinwohl messen. Zum Beispiel steht an der Schnittstelle „Menschenwürde“ und  „MitarbeiterInnen“ der Indikator C1 „Arbeitsplatzqualität“.</p>'+
                        '<p>Mit Hilfe eines Gemeinwohl-Berichtes gibt ein Unternehmen detailliert Auskunft über seine Leistungen und seinen Beitrag zum Gemeinwohl, anhand dieser 17 Indikatoren. Diese Auseinandersetzung braucht Vertiefung und Zeit, die viele Unternehmen aufgrund wirtschaftlicher Zwänge, knapper Ressourcen oder anderer Umstände nicht immer haben.</p>'+
                        '<p>Um einen „schnellen“ ersten Einblick zu bekommen, haben wir deshalb diesen Schnelltest von Thomas Haderlapp für die Matrix 4.1 modifiziert und neu gestaltet. Innerhalb einer halben Stunde gewinnen Sie einen Eindruck, worum es in der GWÖ geht und zudem ein grobes Erstergebnis, wie gemeinwohlorientiert Sie wirtschaften.</p>'+
                        '<p>Der darauf folgende Schritt könnte sein, eine „Einstiegsbilanz“ zu erstellen, das ist eine vereinfachte Form der Gemeinwohl-Bilanz. Unterhalb der fortlaufenden Fragen-Nummern haben wir in Blau die zugehörigen Indikatoren der GWÖ-Matrix angegeben. Zum Beispiel steht unter der Frage „1.“ der Indikator „A1“ (= Ethisches Beschaffungswesen). So können Sie bei Interesse jederzeit im Handbuch nachschlagen und dort Hintergrundinformationen zum jeweiligen Indikator nachlesen.</p>'+
                        '<p>Die Matrix, das dazugehörige Handbuch zur Bilanzerstellung und weitere hilfreiche Dokumente finden Sie hier: <a href="http://gemeinwohl-oekonomie.org/de/content/downloads">Link GWÖ-Dokumente</a>.</p>'+
                        '<p>Christian Rüther und das Matrix-Entwicklungsteam</p>'+
                        '<p><strong>Hinweis</strong>: Ihre Daten werden nicht über das Internet übertragen und dementsprechend nicht gespeichert!</p>'
                },
                questions : [
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen berücksichtigt bei allen wesentlichen zugekauften Produkten und Dienstleistungen (P/D) die besten regionalen, sozialen und ökologischen Alternativen und findet innovative Lösungen zur Vermeidung kritischer Stoffe, für die es keine höherwertige Alternative gibt.'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen kooperiert aktiv mit LieferantInnen, um soziale und ökologische Aspekte besser umzusetzen. Es gibt ein nachgewiesenes Controlling, d.h. alle zugekauften P/D sind intern oder extern zertifiziert (z.B. mit den Labels „Bio“, „Fairtrade“, ...).'
                    },
                    {
                        stakeholders : 'A',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Beschaffungsmanagement',
                        text : 'Mein Unternehmen zahlt faire Preise, pflegt langfristige Kooperationen mit den LieferantInnen und hat erste innovative Strukturen mit dem Ziel der Preisgerechtigkeit entwickelt.'
                    },
                    {
                        stakeholders : 'B',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethisches Finanzmanagement',
                        text : 'Mein Unternehmen arbeitet ausschließlich mit ethisch-ökologischen FinanzdienstleisterInnen (Bank, Vorsorgekasse) und veranlagt/finanziert sich dort zu 100%.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen bietet allen Menschen, die im Unternehmen tätig sind, in ihrer individuellen Verschiedenheit Strukturen und Entwicklungsmöglichkeiten, die ihren persönlichen und beruflichen Bedürfnissen gerecht werden.',
                        textEPU : 'Meine Arbeitssituation entspricht meinen Bedürfnissen und ermöglicht mir ein gutes Leben/Arbeiten.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen bietet höchste Arbeitsplatzsicherheit und eine gesundheitsfördernde Arbeitsgestaltung für alle Menschen, die im Unternehmen tätig sind. Verschiedene Arbeitszeit-Modelle und familienfreundliche Rahmenbedingungen ermöglichen es allen im Unternehmen Beschäftigten, ihre persönliche Work-Life-Balance zu leben.',
                        textEPU : 'Ich lebe eine für mich persönlich optimale Work-Life-Balance und gestalte meine Arbeit umfassend gesundheitssensibel.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '1',
                        indicatorTitle : 'MitarbeiterInnen inklusive EigentümerInnen',
                        text : 'Mein Unternehmen leistet einen aktiven Beitrag zur Gleichstellung und fördert Diversität im Hinblick auf Geschlecht, Herkunft, Alter, Behinderung, sexuelle Orientierung u. a. durch strukturelle und bewusstseinsbildende Maßnahmen. Es gibt gleiche Bezahlung für gleiche Tätigkeiten, Menschen sind in ihrer ganzen Vielfalt auf allen Hierarchieebenen des Unternehmens gleichwertig vertreten. Wir zahlen keine Ausgleichstaxe.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '2',
                        indicatorTitle : 'Gerechte Verteilung der Erwerbsarbeit',
                        text : 'Mein Unternehmen hat keine All-Inclusive- Verträge und baut Überstunden ab. Statt neuer Überstunden werden neue MitarbeiterInnen eingestellt. Wir leisten einen Beitrag zur Reduktion der Arbeitslosigkeit.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '3',
                        indicatorTitle : 'Förderung ökologischen Verhaltens der MitarbeiterInnen',
                        text : 'Mein Unternehmen fördert und fordert ein ökologisch nachhaltiges Verhalten der MitarbeiterInnen (z.B. eine biologische, regionale, fleischarme/fleischlose Ernährung, Nutzung umweltfreundlicher Verkehrsmittel etc.) durch umfassende Weiterbildungsmaßnahmen und finanzielle Förderungen.'
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        indicatorTitle : 'Gerechte Verteilung des Einkommens',
                        text : 'In meinem Unternehmen gibt es eine maximale Einkommensspreizung von 1:4, d.h. der bezahlte Höchstlohn entspricht max. dem Vierfachen des bezahlten Niedrigstlohns.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'C',
                        gwoeValue : '4',
                        indicatorTitle : 'Gerechte Verteilung des Einkommens',
                        text : 'Mein Unternehmen zahlt mindestens 1250 Euro monatlich netto für eine Vollzeitstelle.',
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
                        text : 'Unser Unternehmen gehört allen MitarbeiterInnen oder einer unabhängigen Stiftung. Es gibt keine „Übermacht“ einiger weniger EigentümerInnen.',
                        excludedParticipants : ['oneperson']
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethische Kundenbeziehung',
                        text : 'Mein Unternehmen hat ein Gesamtkonzept für Ethik im Verkauf und sorgt für Preistransparenz, faire Preise und meidet KundInnen, die ethisch bedenklich handeln (insbesondere bei GeschäftskundInnen und anderen Unternehmen).'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '1',
                        indicatorTitle : 'Ethische Kundenbeziehung',
                        text : 'Mein Unternehmen bezieht die KundInnen in die Produktentwicklung und in relevante Entscheidungen mit ein.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        indicatorTitle : 'Solidarität mit Mitunternehmen',
                        text : 'Mein Unternehmen pflegt eine Open-Source-Politik und gibt das eigene Know-How, Kalkulationen und Lieferquellen an kooperative Mitunternehmen weiter. Gemeinsam wird an einem unabhängigen Produktinformationssystem gearbeitet, so dass die KundInnen optimal informiert sind und angebotene Leistungen gut vergleichen können.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '2',
                        indicatorTitle : 'Solidarität mit Mitunternehmen',
                        text : 'Mein Unternehmen gibt Aufträge an Mitunternehmen weiter, wenn es sie nicht selbst bedienen kann, unterstützt Mitunternehmen mit eigenen Arbeitskräften bei Engpässen und stellt kooperativen Mitunternehmen Fremdkapital zu einem angemessenen Zinssatz zur Verfügung.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        indicatorTitle : 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                        text : 'Die P/D meines Unternehmens sind im Vergleich zu den Mitunternehmen ökologisch branchenführend bzw. auf höchstem Standard z.B. Energie-Effizienz oder Cradle-to-cradle. Wir sind VorreiterInnen bei der ökologischen Qualität und der Minimierung des ökologischen Fußabdrucks der P/D.',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '3',
                        indicatorTitle : 'Ökologische Gestaltung der Produkte und Dienstleistungen',
                        text : 'Mein Unternehmen fördert ökologisch nachhaltiges Verhalten unserer KundInnen. Preisvorteile und Anreizsysteme für Reparatur, Wiederverwendung und gemeinschaftliche Nutzung sind wesentliche Bestandteile unseres Geschäftsmodells.'
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '4',
                        indicatorTitle : 'Soziale Gestaltung der Produkte und Dienstleistungen',
                        text : 'Mein Unternehmen setzt sich aktiv für den Zugang „benachteiligter“ KundInnengruppen (GeringverdienerInnen, MigrantInnen, ältere Menschen, Behinderte) zu unseren P/D ein.',
                        weight : 2
                    },
                    {
                        stakeholders : 'D',
                        gwoeValue : '5',
                        indicatorTitle : 'Erhöhung der sozialen und ökologischen Branchenstandards',
                        text : 'Mein Unternehmen arbeitet mit den Mitunternehmen aktiv an höheren sozialen und ökologischen Branchenstandards und betreibt hier Lobbying im Interesse des Gemeinwohls.'
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '1',
                        indicatorTitle : 'Sinn und Gesellschaftliche Wirkung der Produkte / Dienstleistungen',
                        text : 'Mein Unternehmen stellt P/D her, die einen positiven Nutzen für die gesamte Gesellschaft (nicht primär für einzelne KundInnen) haben. 75% bis 100% der P/D decken den Grundbedarf, dienen der menschlichen Entwicklung oder lösen wesentliche gesellschaftliche Probleme (Social Business).',
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '2',
                        indicatorTitle : 'Beitrag zum Gemeinwesen',
                        text : 'Mein Unternehmen engagiert sich kraftvoll für die Gesellschaft und fördert solches Engagement, das über ein reines Eigeninteresse hinausgeht (Richtwert >2,5% des Umsatzes). Es existiert eine umfassende Strategie und ein Management für dieses Engagement.'
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
                        text : 'Unsere Gewinne werden möglichst nicht an Externe ausgeschüttet, sondern zwischen ArbeitnehmerInnen und KapitalgeberInnen gerecht verteilt oder zur Erhöhung der Eigenkapitalquote und für gemeinwohlfördernde Investitionen eingesetzt.',
                        excludedParticipants : ['oneperson'],
                        weight : 2
                    },
                    {
                        stakeholders : 'E',
                        gwoeValue : '5',
                        indicatorTitle : 'Gesellschaftliche Transparenz und Mitbestimmung',
                        text : 'Mein Unternehmen publiziert einen Gemeinwohlbericht oder einen umfassenden Nachhaltigkeitsbericht (z. B. Global Reporting Initiative GRI). Darüber hinaus beziehen wir die gesellschaftlichen Berührungsgruppen bei wesentlichen Entscheidungen mit ein.'
                    }
                ]
            }
        ]
    }
};


Template.footerTemplate = '<div id="footer-contents">    Open Source @ <a href="https://github.com/sinnwerkstatt/gemeinwohl-oekonomie">GitHub</a> by <a href="https://www.sinnwerkstatt.com">Sinnwerkstatt</a><br/>    <a href="https://github.com/sinnwerkstatt/gemeinwohl-oekonomie#contribute">Beitragen</a>,    <a href="https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues">Issues öffnen</a></div>';

Template.gwoeMatrixTemplate = '<div id="gwoe-matrix" class="bubble display-none">    <div class="bootstrap-table whitebg unselectable">        <div class="row row-border dheader-style js-equal-height">            <div class="row-cell col-lg-2 col-md-2 col-sm-2 col-xs-2">                <span class="gwoe-green">{valueName}</span> / <span class="gwoe-blue">{stakeholdersName|s}</span>            </div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[0]|s}</div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[1]|s}</div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[2]|s}</div>            <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[3]|s}</div>            <div class="row-cell last-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[4]|s}</div>        </div>        <div class="row row-border js-equal-height clear-both">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[0].shortcode}) {stakeholders[0].name|s}            </div>            <div class="row-cell indicator-cell last-cell ind-trigger col-lg-10 col-md-10 col-sm-10 col-xs-10"                 data-modal="matrix-{stakeholders[0].values[0].shortcodeSlug}">                <div class="indicator-title">                    {stakeholders[0].values[0].shortcode}) {stakeholders[0].values[0].title|s}                </div>                <div class="indicator-description">                    {stakeholders[0].values[0].content|s}                </div>                <div class="indicator-points">                    {stakeholders[0].values[0].points}                </div>            </div>        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[1].shortcode}) {stakeholders[1].name|s}            </div>            <div class="row-cell indicator-cell last-cell ind-trigger col-lg-10 col-md-10 col-sm-10 col-xs-10"                 data-modal="matrix-{stakeholders[1].values[0].shortcodeSlug}">                <div class="indicator-title">                    {stakeholders[1].values[0].shortcode}) {stakeholders[1].values[0].title|s}                </div>                <div class="indicator-description">                    {stakeholders[1].values[0].content|s}                </div>                <div class="indicator-points">                    {stakeholders[1].values[0].points}                </div>            </div>        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[2].shortcode}) {stakeholders[2].name|s}            </div>            {#stakeholders[2].values}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2"            data-modal="matrix-{shortcodeSlug}">                <div class="indicator-title">                    {shortcode}) {title|s}                </div>                <div class="indicator-description">                    {content|s}                </div>                <div class="indicator-points">                    {points}                </div>            </div>            {/stakeholders[2].values}        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[3].shortcode}) {stakeholders[3].name|s}            </div>            {#stakeholders[3].values}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2"            data-modal="matrix-{shortcodeSlug}">                <div class="indicator-title">                    {shortcode}) {title|s}                </div>                <div class="indicator-description">                    {content|s}                </div>                <div class="indicator-points">                    {points}                </div>            </div>            {/stakeholders[3].values}        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {stakeholders[4].shortcode}) {stakeholders[4].name|s}                <div class="matrix-group-explanation">                    {stakeholders[4].explanation|s}                </div>            </div>            {#stakeholders[4].values}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2"            data-modal="matrix-{shortcodeSlug}">                <div class="indicator-title">                    {shortcode}) {title|s}                </div>                <div class="indicator-description">                    {content|s}                </div>                <div class="indicator-points">                    {points}                </div>            </div>            {/stakeholders[4].values}        </div>        <div class="row row-border js-equal-height">            <div class="row-cell dheader-style negative-color-b col-lg-2 col-md-2 col-sm-2 col-xs-2">                {negativeCriteriaName|s}            </div>            {#negativeCriteria}            <div class="row-cell indicator-cell {@if cond="            {$idx} == 4"}last-cell {/if}col-lg-2 col-md-2 col-sm-2 col-xs-2">                {#values}                <div class="negative-container ind-trigger" data-modal="matrix-{shortcodeSlug}">                    <div class="negative-points">                        {points}                    </div>                    <div class="negative-content">                        {titleShort|s}                    </div>                </div>                {/values}            </div>            {/negativeCriteria}        </div>    </div>    <!-- end of matrix table --></div><!-- end of bubble -->';

Template.indicatorTabsTemplate = '<div id="matrix-{shortcodeSlug}" class="display-none">    <div class="container pagehead">        <table>            <tr>                <td class="vmiddle">                    <img class="back-to-matrix pointer"                         src="images/gwoe-matrix-icon-arrow-50h.png" title="Zurück zur GWÖ-Matrix"/>                </td>                <td><span class="indicator-page-title"> <h2>{shortcode}: {name}</h2></span></td>            </tr>        </table>    </div>    <div class="tabs">        <ul class="tablist">            <span id="matrix-{shortcodeSlug}-goals" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-goals-link" class="tablink matrix-goals-tab-title"                   href="#matrix-{shortcodeSlug}-goals"></a>                <div id="matrix-{shortcodeSlug}-goals-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-impulsQuestions" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-impulsQuestions-link" class="tablink matrix-impulsQuestions-tab-title"                    href="#matrix-{shortcodeSlug}-impulsQuestions" ></a>                <div id="matrix-{shortcodeSlug}-impulsQuestions-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-table" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-table-link" class="tablink matrix-table-tab-title"                    href="#matrix-{shortcodeSlug}-table"></a>                <div id="matrix-{shortcodeSlug}-table-content" class="tabcontent">                    <div id="matrix-{shortcodeSlug}-indicator-table-legend" class="indicator-table-legend"></div>                    <table id="matrix-{shortcodeSlug}-indicator-table" class="dtable">                    </table>                    <div id="matrix-{shortcodeSlug}-details-content"                         class="indicator-table-details"></div>                </div>            </li>            <span id="matrix-{shortcodeSlug}-definition" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-definition-link" class="tablink matrix-definition-tab-title"                    href="#matrix-{shortcodeSlug}-definition"></a>                <div id="matrix-{shortcodeSlug}-definition-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-implementationHelp" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-implementationHelp-link" class="tablink matrix-implementationHelp-tab-title"                   href="#matrix-{shortcodeSlug}-implementationHelp"></a>                <div id="matrix-{shortcodeSlug}-implementationHelp-content" class="tabcontent">                </div>            </li>            <span id="matrix-{shortcodeSlug}-moreinfo" class="fixedanchor"></span>            <li class="tabcontainer">                <a id="matrix-{shortcodeSlug}-moreinfo-link" class="tablink matrix-moreinfo-tab-title"                    href="#matrix-{shortcodeSlug}-moreinfo"></a>                <div id="matrix-{shortcodeSlug}-moreinfo-content" class="tabcontent">                </div>            </li>        </ul>    </div></div>';

Template.mainPageTemplate = '<div id="main-page" class="display-none">    <div class="main-page-introtext img-center center">        Ein alternatives Wirtschaftssystem, das auf Gemeinwohl-fördernden Werten aufgebaut ist.        <br/><br/>        Ein Veränderungshebel auf wirtschaftlicher, politischer und gesellschaftlicher Ebene – eine Brücke von Altem zu Neuem.        <br/><br/>        Besuchen Sie die <a href="http://gemeinwohl-oekonomie.org">offizielle Webseite der Gemeinwohl-Ökonomie</a>.    </div>    <div class="main-page-container-link col-lg-12 col-md-12 col-sm-12 col-xs-12">        <a href="#matrix" class="img-link">            <img class="img-center img-responsive main-page-matrix-img" src="images/gwoe-matrix-icon.png" />            <div class="main-page-container-link-title center">                Interaktive<br/>Gemeinwohl-Matrix            </div>            <div class="main-page-container-link-description center">                Erfahren Sie mehr über Gemeinwohl-Bilanzen.            </div>        </a>    </div></div>';

Template.mainPageTestTemplate = '<div id="main-page" class="display-none">    <div class="img-center center">        Ein alternatives Wirtschaftssystem, das auf Gemeinwohl-fördernden Werten aufgebaut ist.        <br/><br/>        Ein Veränderungshebel auf wirtschaftlicher, politischer und gesellschaftlicher Ebene – eine Brücke von Altem zu Neuem.        <br/><br/>        Besuchen Sie die <a href="http://gemeinwohl-oekonomie.org">offizielle Webseite der Gemeinwohl-Ökonomie</a>.    </div>    <div class="main-page-container-link center col-lg-12 col-md-12 col-sm-12 col-xs-12">        <a href="#quick-test" class="img-link">            <img class="img-center img-responsive" src="images/quick-test-icon.png" />            <div class="main-page-container-link-title center">                Schnelltest            </div>            <div class="main-page-container-link-description center">                Bekommen Sie anhand von 27 Fragen (Einzelunternehmen: 20 Fragen) Einblick, wie gemeinwohlorientiert Sie wirtschaften.            </div>        </a>    </div></div>';

Template.negativeCriteriaTemplate = '<div id="matrix-{shortcodeSlug}" class="indicator-modal display-none">    <img class="back-to-matrix pointer" src="images/gwoe-matrix-icon-arrow-50h.png" title="Zurück zur GWÖ-Matrix"/>    <div class="indicator-page-title ">        <h2 class="negative-color">{shortcode}: {name}</h2>    </div>    <div id="matrix-{shortcodeSlug}-content">        {content}    </div></div>';

Template.quickTestTemplate = '<div id="quick-test" class="display-none">    <h1>{name}</h1>    <div id="quick-test-introduction">        <br/>        <p>            <button type="button" class="btn btn-lg btn-gwoe js-quick-test-start">Schnelltest starten</button>        </p>        <br/>        {#data.tests}        {introduction.content|s}        <br/>        <button type="button" class="btn btn-lg btn-gwoe js-quick-test-start">Schnelltest starten</button>        {/data.tests}    </div>    {#data.tests}    <div id="quick-test-questions">        <div id="quick-test-question-profile" class="quick-test-question display-none">            <div class="quick-test-questions-text">                <div class="quick-test-profile-form">                    <div class="quick-test-profile-form-text">                        Bitte geben Sie ein:                    </div>                    <div class="form-group">                        <label for="quick-test-participant-companyName">Name des Unternehmens:</label>                        <input type="text" class="form-control" id="quick-test-participant-companyName"                               placeholder="Firmenname" autofocus/>                    </div>                    <div class="form-group">                        <label for="quick-test-participant-participantType">Sind Sie EinzelunternehmerIn?</label>                        <select class="form-control" id="js-quick-test-participant-participantType">                            {#structure.testTypes[0].participants}                            <option value="{type}">{text}</option>                            {/structure.testTypes[0].participants}                        </select>                    </div>                </div>            </div>            <div class="quick-test-questions-buttons">                <button type="button" class="btn btn-lg btn-gwoe js-start-test-button">                    Weiter                </button>            </div>        </div>        {#questions}        <div id="quick-test-question-{$idx}" class="quick-test-question display-none">            <div class="quick-test-questions-indicator">                {stakeholders}{gwoeValue} - {indicatorTitle}            </div>            <div class="quick-test-questions-text">                {text}            </div>            <div class="quick-test-questions-buttons">                {#structure.testTypes[0].individualAnswer.evaluationValues}                <button data-value="{value}" type="button"                        class="btn btn-lg btn-default btn-gwoe-level-{$idx} js-quick-test-question-button">                    {text}                </button>                {/structure.testTypes[0].individualAnswer.evaluationValues}            </div>        </div>        {/questions}    </div>    {/data.tests}    <div id="quick-test-result" class="display-none">        <div id="quick-test-result-companyName"></div>        <div class="row">            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">                <div class="quick-test-result-progress-bar-container">                    <div class="bs-example vertical bottom v-bottom-basic">                        <div class="progress vertical bottom wide">                            <div id="quick-test-result-progress-bar" class="progress-bar"                                 aria-valuetransitiongoal="0"></div>                        </div>                    </div>                    <div class="quick-test-result-points-container">                        <span id="quick-test-points"></span> von                        <span id="quick-test-max-points"></span> Punkten.                    </div>                </div>            </div>            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">                <div id="quick-test-result-text"></div>            </div>            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>        </div>    </div></div>';

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
        var pageWasShown = Router.onHashChange();

        if(!pageWasShown && urlHash && urlHash.length > 1) {
            var hash = urlHash.substr(1);

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
                Router.showMatrix();
            } else if (hash.startsWith(Router.hashMatrix)) {
                Router.showQuickTest();
            } else {
                Router.showMainPage();
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

        // hack: assumes the format "matrix-<pageid>"
        if (urlHash.length > 9) {
            var hash = urlHash.substr(1);
            var indicatorId = hash.substr(0, 9);
            var indicatorDetailId = hash.substr(9);
            Router.fixIECssTabs(indicatorId, indicatorDetailId);
        }

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

        // init params
        if (indicatorId.startsWith(Router.hashMatrixMinus)) { // if matrix URL
            if (indicatorId.startsWith('n')) { // negative criteria URL
                indicatorDetailId = ''; // no details
            } else {
                indicatorDetailId = typeof indicatorDetailId !== 'undefined' ?
                    indicatorDetailId : Router.defaultSubIndicatorId;
            }
        }
        Router.visibleElementId = indicatorId;

        $('#gwoe-matrix').fadeOut(Router.fadeOutSpeed, function () {
            $(Router.hashSymbol + indicatorId).fadeIn(Router.fadeInSpeed);
        });

        window.location.hash = Router.hashSymbol + indicatorId + indicatorDetailId;
    },

    fixIECssTabs : function (indicatorId, indicatorDetailId) {

        if ($('html').hasClass('lt-ie9')) {

            var tabContentCssClass = 'js-tabcontainer';
            if (Router.lastIndicatorId.length > 0) {
                var lastTabContentId = Router.lastIndicatorId+Router.lastIndicatorDetailId+'-content';
                var lastTabContent = document.getElementById(lastTabContentId);
                //lastTabContent.setAttribute('class', 'tabcontent');
                lastTabContent.setAttribute('style', 'visibility: hidden !important');

                var lastTabLinkId = Router.lastIndicatorId+Router.lastIndicatorDetailId+'-link';
                var lastTabLink = document.getElementById(lastTabLinkId);
                // var tabLink = $(tabLinkId);
                // tabLink.toggleClass('js-tablink'); // added, but not painted in IE8
                lastTabLink.setAttribute('style', 'border-bottom: 1px solid #D8D8D8; color: #888888;');
            }
            var tabContentId = indicatorId+indicatorDetailId+'-content';
            var tabContent = document.getElementById(tabContentId);
            var newCssClass = 'tabcontent ' + tabContentCssClass;
            //tabContent.setAttribute('class', newCssClass);
            tabContent.setAttribute('style', 'visibility: visible !important');

            var tabLinkId = indicatorId+indicatorDetailId+'-link';
            var tabLink = document.getElementById(tabLinkId);
            // var tabLink = $(tabLinkId);
            // tabLink.toggleClass('js-tablink'); // added, but not painted in IE8
            tabLink.setAttribute('style', 'border-color: #D8D8D8; border-radius: 3px 3px 0 0; border-style: solid solid none; border-width: 1px 1px 0; color: #000000;');
        }

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

'use strict';

Controller.createMainPageTestHtml();
Controller.createQuickTestHtml();
Controller.createFooterHtml();

$(document).ready(function () {
    Router.init();
});
