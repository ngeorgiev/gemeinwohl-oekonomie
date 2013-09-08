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
                table : {},
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
                table : {},
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
                                            description : 'Erste Maßnahmen; planung weiterer Maßnahmen (ideal: Einbettung in ein Gesamtkonzept) mit konkretem Umset-zungsplan'
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
                                            description : 'Durch Evaluation ab-gesichertes Gesamt-konzept ist vollstän-dig umgesetzt und strukturell verankert, alle Fkleben eine MA-orientierte Organi-sationskultur'
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
                                            description : 'prekäre Beschäftigungsverhältnisse be-stehen nur bei nach-weislicher betrieblicher Notwendigkeitvorausschauende, transparente perso-nalplanung in Abstim-mung mit BR'
                                        },
                                        {
                                            levels : ['advanced', 'experienced'],
                                            description : 'Die Möglichkeit einer für den/die AN besseren Vertragsform wird geprüft (interne prüfrouti-ne) und es gibt ein umgesetztes konzept zur nachhaltig positiven Arbeitsplatzgestaltung für Arbeitskräfte in kurzzeitverträgen Gesamtkonzept zur Integration aller Beschäf-tigtengruppen im Unternehmen (z.B. gleiche Rechte auf freiwillige betriebliche Sozialleis-tungen und Förderungen, Abstimmung von Abläufen, Terminen, kommunikationswegen)'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'nachhaltige Beschäfti-gungsangebote/-perspektiven für alle MA, z.B. durch über-betriebliche koopera-tionen Chancengleichheit be-züglich Möglichkeiten zur aktiven Teilhabe, Rechte auf unterneh-mensinterne Sozial-leistungen etc.'
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
                                            description : 'Erstellung eines Gesamtkonzepts zur BGF inkl. Umset-zungsplan. Verfügbarkeit von flexiblen Arbeitszeiten und Teilzeitmodellen zur Unterstützung einer gesunden Work-Life-Balance der MA Ergonomische Arbeits-plätze, Erfüllung des Arbeitsschutzes'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Umsetzung des Gesamtkonzepts zur BGF in wesentlichen Teilen (zu mind. 50%) MA können konkrete Angebote wahrneh-menInanspruchnahme flexibler Arbeitszeiten und Teilzeitmodelle, die zur Unterstützung der Work-Life-Balance der MA beitragen kön-nen, für mind. 50 % der MA möglich'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Umsetzung des Gesamtkonzepts zur BGF bis zu 75 %,und Einführung von qualitätssicherungs-maßnahmen; MA können vielfältige und innovative Angebote wahrnehmen. Flexible Arbeitszeiten und Teilzeitmodelle für alle MA möglich und strukturell unterstützt, Homeoffice wird nach Möglichkeit unterstützt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'BGF ist vollständig im Unternehmen verankert und in die Strukturen und Abläu-fe des Unternehmens integriert; Führungskräfte agie-ren als Multiplikatoren. Die unterschiedlichen Arbeitszeitangebo-te sind strukturell integriert und kulturell akzeptiert, die organi-sationsweite Nutzung (auch in hierarchisch höheren positionen, auch bei Männern) wird unterstützt'
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
                                            description : 'Erhebung qualitativer und quantitativer Informationen im Hinblick auf Diversität und Ableitung von Zielset-zungen zur Förderung von Gleichstellung und Diversität. Beschäftigungsquote<sup>2</sup>*: Gesetzliche Teilerfüllung von mind. 75 %. Aktive Berücksichtigung von Gleichstellung und Diversität bei jeder Stellenbesetzung'
                                        },
                                        {
                                            levels : ['advanced'],
                                            description : 'Gesamtkonzept zur Verankerung von Diversität und Gleich-stellung im Unterneh-men (inkl. konkretem Umsetzungsplan) ist vorhanden Gesetzliche Quote wird zu 100 % erfüllt, Keine Ausgleichszahlungen Angepasste perso-nalsuche und Stellen-besetzung (unterre-präsentierte Gruppen werden bevorzugt)'
                                        },
                                        {
                                            levels : ['experienced'],
                                            description : 'Gesamtkonzept zur Verankerung von Diversität und Gleichstellung im Unternehmen ist in wesentlichen Teilen umgesetzt. Kompetenz und Motivation von Fkhin-sichtlich Diversität und Gleichstellung wird gezielt und nachdrück-lich gefördert<sup>3</sup>*. Anzahl der diversen MA (auch in Fach- und Führungspositionen) liegt über dem Bran-chendurchschnitt'
                                        },
                                        {
                                            levels : ['model'],
                                            description : 'Gesamtkonzept zu 100 % umgesetzt, d.h. es ist strukturell in allen Organisationsbe-reichen verankert und wird von allen Fkmit-getragen und gelebt Anzahl der diversen MA (auch in Fach- und Führungspositionen) liegt weit über der Branchendurchschnitt'
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                table : {},
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
                content :
                    '<p>Verletzung content N1<br/>to be pasted.</p>',

                footnotes :
                    'footnotes N1 ...'
            },
            {
                shortcode : 'N2',
                shortcodeSlug : 'n2',
                name: 'Menschenunwürdige Produkte und Dienstleistungen',
                points: -200,
                content :
                    '<p>Menschenunwürdige content N2<br/>to be pasted.</p>',

                footnotes :
                    'footnotes N2...'
            }
        ]
    }
};

var indicators = Data.indicators.data.indicators;
