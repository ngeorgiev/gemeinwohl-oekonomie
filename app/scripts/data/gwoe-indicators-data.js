var Data = {

    indicators : {

        structure : {
            goals : 'Ziele',
            impulsQuestions : 'Impulsfragen',
            table : 'Bewertungstabelle',
            measurementCharacteristics : 'Besonderheiten bei der Bewertung',
            definitionAndBackground : 'Definitionen und Hintergrund',
            implementationHelp : 'Hilfen für die Umsetzung',
            literatureLinksExperts : 'Literatur/Links/Experten',

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

        data : [
            /* ----------------------------------- C1 ----------------------------------- */
            {
                shortcode : 'C1',
                shortcodeSlug : 'c1',
                name: 'Arbeitsplatzqualität und Gleichstellung',
                goals : {
                    content:
                    '<p>Von den Grundrechten ist kein Lebensbereich ausgenommen. Die in ihnen festgeschrie-benen Werte der Unantastbarkeit der Menschenwürde, das Recht auf Unversehrtheit, Freiheit und freie Entfaltung der persönlichkeit sowie auf Gleichberechtigung gelten somit uneingeschränkt auch für das Arbeitsleben.</p>'+
                        '<p>Am Arbeitsplatz (im Arbeitsverhältnis) zeigt sich Menschenwürde durch die Gleichwer-tigkeit und Chancengleichheit aller im Unternehmen arbeitenden personen und dem Ziel möglichst gesunder, freier und kooperativer Arbeitsbedingungen. Das Gegenteil sind Aus-beutung zugunsten des Gewinns Einzelner, Verweigerung von Mitbestimmung, Diskrimi-nierung oder Schädigung der Gesundheit.</p>'+
                        '<p>Insgesamt ist ein Arbeitsplatz in seiner qualität vorbildlich, wenn er dauerhaft und umfas-send in größtmöglichem Ausmaß den Bedürfnissen aller im Unternehmen Arbeitenden, auch in ihrer individuellen Verschiedenheit, gerecht wird.</p>'+
                        '<p>Hohe Arbeitsplatzqualität in diesem Sinn schafft die Grundlage dafür, dass sich die Mit-arbeiterInnen gleichermaßen als Individuen weiterentwickeln und gesundheitserhaltend, sinnerfüllt, kompetent, selbstverantwortlich und in Abstimmung mit anderen Organisati-onsmitgliedern einen aus der Sicht aller wertvollen Beitrag zur Entwicklung des Unterneh-mens leisten können.</p>'+
                        '<p>Aufgrund der aktuell noch ganz wesentlich bestehenden Benachteiligung von personen, die nicht der gesamtgesellschaftlich dominanten Gruppe angehören, spielen betriebliche Gleichstellungsmaßnahmen im Unternehmen, die die Realisierung von Chancengleich-heit zum Ziel haben, sowie die proaktive Förderung von Heterogenität eine besonders wichtige Rolle für hohe Arbeitsplatzqualität im obigen Sinn.</p>'
                },
                impulsQuestions : {
                    content:
                    '<p><strong>Impulsfragen zur Erhebung und Reflexion</strong></p>'+
                    '<p>Fragen zu <em>mitarbeiterorientierter Organisationskultur und -strukturen</em> (Aus- und Weiter-bildung, Arbeitsinhalt, Arbeitsorganisation und Führungsstil, Aufgabenklarheit, Aufgaben-vielfalt, Handlungsspielraum und Autonomie, Wertschätzung, Umgang mit Fehlern, Kommunikation und Kooperation)</p>'+
                    '<p><ul>' +
                        '<li>Wie werden MitarbeiterInnen bei internem Wechsel oder Neueinstieg eingeschult?</li>'+
                        '<li>Inwiefern können die MitarbeiterInnen bei Belangen der täglichen Arbeit mitbestim-men? Welche Entscheidungsbefugnisse haben sie? Wie hoch ist der Grad der Selb-storganisation? Was können die MitarbeiterInnen selbst entscheiden?</li>'+
                        '<li>Wie sieht die Beziehung zwischen MitarbeiterInnen und deren Vorgesetzen im Un-ternehmen idealtypisch aus?</li>'+
                        '<li>Welche Angebote gibt es für MitarbeiterInnen im Hinblick auf gezielte berufliche Wei-terbildung einerseits und allgemeine berufliche Weiterentwicklung (z.B. Karriereent-wicklungsprogramme, Mentoring etc.) andererseits?</li>'+
                        '<li>Welche Aus- und Weiterbildungsprogramme (einschließlich Lehrlingsausbildung) gibt es im Unternehmen und wodurch zeichnen sie sich aus?</li>'+
                        '<li>Haben MitarbeiterInnen die Möglichkeit, ihre Situation im Unternehmen, ihre Ent-wicklungsmöglichkeiten etc. zu besprechen, Feedback zu geben und zu bekommen (z.B. in Form von Mitarbeitergesprächen)?</li>'+
                        '<li>Wie hierarchisch ist das Unternehmen strukturiert? Wie ist die Führungsstruktur? Welche Möglichkeiten haben MitarbeiterInnen, ihre Anliegen, Wünsche und Be-schwerden im Unternehmen einzubringen?</li>'+
                        '<li>Gibt es Mitarbeiterbefragungen? Wie und durch wen werden diese organisiert und durchgeführt? Wie und nach welchen kriterien wird mit den Ergebnissen verfahren?</li>'+
                        '<li>Wie ist der Ablauf, wenn probleme auftreten? Welche vertraulichen Anlaufstellen gibt es? Welche Beratungsmöglichkeiten wie Supervision, Mediation und Coaching gibt es?</li>'+
                        '<li>Wie sieht die interne kommunikationsstruktur und Informationspolitik aus?</li>'+
                    '</ul></p>'+
                    '<p>Fragen zu <em>fairer Entgelt- und Beschäftigungspolitik</em> (sicheres und faires Entgelt, faire Beschäftigungspolitik, Zukunftsperspektiven)</p>'+
                    '<p><ul>' +
                        '<li>Gibt es ein transparentes, verbindliches Entgeltschema? Wie kommt dieses zustan-de? (In welcher Form) werden ArbeitnehmervertreterInnen bei der Festlegung des Entgelts eingebunden?</li>'+
                        '<li>Von welchen Leitlinien ist die Beschäftigungspolitik des Unternehmens geprägt? Welche Rolle spielt die interne Qualifizierung von MitarbeiterInnen (Lehrlinge, Fach-arbeiter, aber auch Aufstiegsmöglichkeiten)?</li>'+
                        '<li>Wird die personalplanung des Unternehmens an die MitarbeiterInnen kommuniziert? Welche Maßnahmen sind im Falle einer Verschlechterung der wirtschaftlichen Situa-tion des Unternehmens vorgesehen, insbesondere im Hinblick auf die Beschäftigten?</li>'+
                        '<li>Welche freiwilligen Sozialleistungen gibt es im Unternehmen? Stehen diese allen ArbeitnehmerInnen gleichermaßen, unabhängig von der Art ihres Beschäftigungs-verhältnisses und ihrer Tätigkeit im Unternehmen, zur Verfügung?</li>'+
                    '</ul></p>'+
                    '<p>Fragen zu <em>Arbeitsschutz und Gesundheitsförderung</em> (einschließlich Work-Life-Balance/flexible Arbeitszeiten (Flexibilität hinsichtlich Arbeitszeit und -ort, Sicherheit am Arbeits-platz und gesundheitssensible Arbeitsgestaltung, betriebliche Gesundheitsförderung)</p>'+
                    '<p><ul>' +
                        '<li>Wie werden die Arbeitszeiten eingeteilt? Gibt es flexible Arbeitszeitmodelle? Wel-che? Wer entscheidet, wann und wie viel er/sie arbeitet? Wie hoch ist der Grad der Selbstorganisation? Besteht die Möglichkeit zur Nutzung von Homeoffice?</li>'+
                        '<li>Wie viele Tage pro Mitarbeiter pro Jahr können zur psychischen und physischen Gesundheitsvorsorge genutzt werden? Welche Angebote stehen zur Auswahl?</li>'+
                        '<li>Wie sicher und ergonomisch sind die Arbeitsplätze gestaltet? Durch welche Maßnah-men und Abläufe wird die Erreichung und Erhaltung optimaler Arbeitsplatzsicherheit und -ergonomie gesichert?</li>'+
                        '<li>Sind die Arbeitsplätze barrierefreie zugänglich?</li>'+
                        '<li>Gibt es zusätzliche Entspannungsräume für die MitarbeiterInnen?</li>'+
                        '<li>Welche Maßnahmen zur physischen Gesundheit gibt es? Gibt es ein programm zur betrieblichen Gesundheitsvorsorge und was umfasst es?</li>'+
                    '</ul></p>'+
                    '<p>Fragen zu <em>Gleichstellung und Diversität</em> (Vielfalt als querschnittsthema und konkrete Maßnahmen zur Förderung und Sicherung von Chancengleichheit)</p>'+
                    '<p><ul>' +
                        '<li>Welche Bedeutung kommt der Verschiedenheit von MitarbeiterInnen (Diversität) im Unternehmen zu? Gibt es Maßnahmen zur Förderung von Verschiedenheit, insbe-sondere im Recruiting-Bereich (z.B. anonymisierte Bewerbung)? Gibt es spezifische Fördermaßnahmen für MitarbeiterInnen mit speziellen Bedürfnissen (z.B. patenpro-gramm, Sprachförderung)?</li>'+
                        '<li>Welche Maßnahmen zur Gleichstellung von Männern und Frauen gibt es im Unternehmen? Wird für gleiche Leistung in allen Unternehmensbereichen und auf al-len Hierarchieebenen Männern und Frauen derselbe Lohn bezahlt? Gibt es eine/n Gleichstellungsbeauftragte/n, einen Gleichstellungsbericht, Gender-Budgeting? Wie hoch ist der Anteil an Männern/Frauen im gesamten Betrieb, wie hoch bei den Füh-rungskräften? Welche Weiterbildungsmaßnahmen in welchem Umfang gibt es zu Genderfragen?</li>'+
                        '<li>Welche Maßnahmen zur Beschäftigung von Menschen mit Behinderung sind geplant und umgesetzt? Inwieweit wird die gesetzliche quote erfüllt?</li>'+
                        '<li>Gibt es Schulungen zu Anti-Diskriminierung und Bewusstseinsbildung in diesem Bereich?</li>'+
                    '</ul></p>'+
                    '</p><strong>Relevante Kennzahlen</strong></p>'+
                    '<p>Folgende Kennzahlen sollten sowohl absolut in Relation zum erwünschten Zielzustand als auch im unternehmensinternen Vergleich (z.B. nach Beschäftigtengruppen oder Be-triebssparten), im unternehmensinternen Entwicklungsvergleich<sup><a href="#matrix-c1-impulsQuestions-fn1" id="matrix-c1-impulsQuestions-ref1">1</a></sup> in Bezug zu den Vorjahren und im (wenn möglich regionalen) Branchenvergleich interpretiert werden:</p>'+
                    '<p><ul>' +
                        '<li>Aufschlüsselung aller Beschäftigten nach Beschäftigtengruppe, Beschäftigungsverhältnis (Art des Arbeitsvertrages) und nach Geschlecht</li>'+
                        '<li>Fehlzeiten nach Beschäftigtengruppen und – wenn anwendbar – Standort, im Branchenvergleich</li>'+
                        '<li>Fluktuation nach Altersgruppe, Geschlecht, sowie weiteren Diversitätskriterien (gegebenenfalls auch nach Niederlassung)</li>'+
                        '<li>Durchschnittlich in Anspruch genommene Fortbildungszeit pro MitarbeiterIn pro Jahr, nach Geschlecht und Beschäftigtengruppe (Grobeinteilung nach position im Unter-nehmen)</li>'+
                        '<li>Durchschnittlicher Zeitumfang der in Anspruch genommenen Angebote zur freiwilli-gen, betrieblichen physischen und psychischen Gesundheitsvorsorge pro MitarbeiterIn pro Jahr, nach Geschlecht und Beschäftigtengruppe</li>'+
                        '<li>Rückkehrquote (ab 12 Monate nach Wiedereinstieg)<sup><a href="#matrix-c1-impulsQuestions-fn2" id="matrix-c1-impulsQuestions-ref2">2</a></sup> nach Elternkarenz nach Ge-schlecht</li>'+
                        '<li>Anteil von Frauen im gebärfähigen Alter bei Beförderungen</li>'+
                        '<li>Anzahl der Arbeitsunfälle, Langzeitkrankenstände und Frühpensionierungen infolge Arbeitsunfähigkeit nach Beschäftigtengruppe</li>'+
                    '</ul></p>'+
                    '</p><strong>Hinweise zur Erhebung</strong></p>'+
                    '<p>Zusätzlich zu den genannten statistischen Daten, die im Unternehmen verfügbar sind, können folgende quellen die Einschätzung von Arbeitsplatzqualität und Gleichstellung ergänzen:</p>'+
                    '<p><ul>' +
                        '<li>Mitarbeiterbefragungen, wenn sie zumindest in enger Abstimmung mit oder durch ArbeitnehmervertreterInnen organisiert und durchgeführt wurden<sup><a href="#matrix-c1-impulsQuestions-fn3" id="matrix-c1-impulsQuestions-ref3">3</a></sup></li>'+
                        '<li>Berichte von ArbeitnehmervertreterInnen und Gleichbehandlungsbeauftragten</li>'+
                        '<li>Betriebsvereinbarungen</li>'+
                    '</ul></p>'+
                    '<p>Optimal wäre es darüber hinaus, den MitarbeiterInnen und deren VertreterInnen die Möglichkeit von anonymen Stellungnahmen zum Selbstbericht des Unternehmens einzuräumen.</p>'+
                    '<hr/>'+
                    '<p>' +
                        '<div><sup id="matrix-c1-impulsQuestions-fn1">1. [Die angeführten kennzahlen können so dazu verwendet werden, um die Wirksamkeit von Interventionen zu prüfen]<a href="#matrix-c1-impulsQuestions-ref1" title="Zurück">↩</a></sup></div>'+
                        '<div><sup id="matrix-c1-impulsQuestions-fn2">2. [Um von einer tatsächlichen Rückkehr sprechen zu können, muss die gesetzlich vorgeschriebene Behaltefrist nach der karenz deutlich überschritten sein und sich die Vereinbarkeit im Arbeitsalltag soweit bewährt haben, dass die Stelle nicht innerhalb eines Jahres nach der Rückkehr aufgegeben wurde.]<a href="#matrix-c1-impulsQuestions-ref2" title="Zurück">↩</a></sup></div>'+
                        '<div><sup id="matrix-c1-impulsQuestions-fn3">3. [Die zwei goldenen Regeln für Mitarbeiterbefragungen werden von Erich Laminger (Managing partner Great Place to Work) benannt mit a) Befragung an Externe vergeben und b) Ergebnisse intern diskutieren. (<a href="http://derstandard.at/1358303910774/Mitarbeiterbefragung-Nur-gut-von-extern" target="_blank">http://derstandard.at/1358303910774/Mitarbeiterbefragung-Nur-gut-von-extern</a>)]<a href="#matrix-c1-impulsQuestions-ref3" title="Zurück">↩</a></sup></div>'+
                    '</p>'
                },
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
                    ],
                    footnotes : [
                        {
                            content: 'konkret in den Dimensionen: klarheit über Aufgaben und Verantwortlichkeiten (und ihre Grenzen), Wertschät-zungskultur, Führungskultur, konstruktiver Umgang mit problemen, kommunikationskultur inkl. MA-Befragungen und Aus- und Weiterbildung.'
                        },
                        {
                            content: 'In Österreich und Deutschland gibt es Mindestquoten für die Beschäftigung von Menschen mit Behinderung. Wenn diese unterschritten werden, müssen relativ geringe Ausgleichsabgaben geleistet werden, was die Nicht-erfüllung leicht macht. Daher bewerten wir hier bei ersten Schritten schon quoten unterhalb der gesetzlichen Vorschrift positiv.'
                        },
                        {
                            content: 'Zum Beispiel in Form von umfassenden Fortbildungsmaßnahmen (Diversity-Trainings, Gleichstellungsworkshops, Gender-Trainings), die die Sensibilisierung für Diversität und den Aufbau von Gleichstellungskompetenzen zum Ergebnis haben.'
                        }
                    ]
                }
            },
            /* ----------------------------------- C2 ----------------------------------- */
            {
                shortcode : 'C2',
                shortcodeSlug : 'c2',
                name: 'Gerechte Verteilung der Erwerbsarbeit',
                goals : {
                    content :
                    '<p>Erwerbsarbeit ist ein wertvolles Gut und ein wichtiges Element gesellschaftlicher Teilha-be. Dennoch arbeiten derzeit die einen zu viel („leben um zu arbeiten“) und andere gar nicht („arbeitslos“). Vorrangiges Ziel des Indikators ist deshalb die gerechte Verteilung des Arbeitsvolumens auf alle erwerbsfähigen Menschen. Die Unternehmen sorgen ihrerseits gemeinsam dafür, dass alle Menschen einen gerechten Anteil am Erwerbsarbeitskuchen bekommen – niemand zu wenig und niemand zu viel. Sie bauen dazu sukzessive Über-stunden ab und danach sogar „Unterstunden“ auf und nehmen damit eine weitere Verkür-zung der gesetzlichen Regelarbeitszeit vorweg.</p>'+
                    '<p>Laut Umfragen wünschen sich Menschen in ganz Europa, für die Erwerbsarbeit pro Wo-che nur 26–39 Wochenstunden aufzuwenden.1 Der britische Think Tank „nef“ (new eco-nomics foundation) geht sogar noch weiter. Er skizziert in einem paper das Bild einer 21-Stunden-Woche. Die Autoren versprechen sich von einem stückweisen Übergang hin zu dieser neuen „Norm“, eine Reihe von drängenden und zusammenhängenden prob-lemen zu lösen. Darunter: Überstunden und Arbeitslosigkeit, Massenkonsum und CO2-Emissionen, geringes Wohlbefinden und Ungleichheiten. Das bringt mehr Zeit für einen nachhaltigen Lebensstil und sozialen Austausch und bietet die Möglichkeit, an der Vielseitigkeit des Lebens teilzuhaben.2</p>',
                    footnotes : [
                        {
                            content: '<a href="http://www.boeckler.de/pdf/impuls_2011_03_4-5.pdf" target="_blank">http://www.boeckler.de/pdf/impuls_2011_03_4-5.pdf</a>'
                        },
                        {
                            content: '<a href="http://www.neweconomics.org/sites/neweconomics.org/files/21_Hours.pdf" target="_blank">http://www.neweconomics.org/sites/neweconomics.org/files/21_Hours.pdf</a>'
                        }
                    ]
                },
                impulsQuestions : {
                    content:
                    '<p><ul>' +
                        '<li>Wie wird Arbeitszeit bzw. arbeitsfreie Zeit im Unternehmen erfasst (im Speziellen in EpU)?</li>'+
                        '<li>Gibt es Transparenz bzgl. möglicher Arbeitszeitmodelle im Unternehmen?</li>'+
                        '<li>Welche Vorstellung haben die MitarbeiterInnen von einem sinnvollen Einsatz ihrer Arbeitszeit? Welche Arbeitszeitgestaltung wäre aus ihrer Sicht in Zukunft erstrebenswert?</li>'+
                        '<li>Gilt bei Ihnen im Unternehmen überwiegend die Formel „Arbeitszeit = Lebenszeit“?</li>'+
                        '<li>Werden Weiterbildungen zu Selbst- und Zeitmanagement angeboten?</li>'+
                        '<li>Trauen Sie Ihren MitarbeiterInnen zu, eigenverantwortlich mit Arbeitszeit umzugehen?</li>'+
                        '<li>Beschäftigen Sie ZeitarbeiterInnen? Wenn ja, mit welcher Begründung?</li>'+
                        '<li>Welchen Wert hat „nicht-entlohnte“ Arbeit für Sie?</li>'+
                    '</ul></p>'+
                    '<p><strong>Relevante Kennzahlen</strong></p>'+
                    '<p><ul>' +
                        '<li>Quote der All-Inclusive-Arbeitsverträge</li>' +
                        '<li>Geleistete Überstunden je MitarbeiterIn</li>' +
                        '<li>Zeitarbeitsquote</li>' +
                        '<li>Teilzeitquote</li>' +
                        '<li>Neueinstellungen</li>' +
                        '<li>Mitarbeiterbefragung zu Arbeitszeit und Arbeitszeitmodellen</li>' +
                    '</ul></p>'
                }
            }
        ]
    }

};
