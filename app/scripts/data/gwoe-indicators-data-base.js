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
