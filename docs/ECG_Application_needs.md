# Ziel

Weiterentwicklung der [GWÖ Online-Bilanzierung Web-Applikation](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie#ecg-balancing-web-application).

Hier werden die gewünschten Funktionalitäten der Unternehmen und für die Software-Entwicklung geschätztes Budget dargestellt.

# Angebot von Sinnwerkstatt

Das Angebot von Sinnwerkstatt enthält die aktuellen Funktionen und das Budget dafür.

* 13.02.2014: [Angebot von Sinnwerkstatt für die Online-Bilanzierung App (PDF)](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/blob/master/docs/Angebot_Online-Bilanzierung_Sinnwerkstatt.pdf?raw=true)
    * Notwendige Funktionen: 1.800,00 € Netto / 2.142,00 € Brutto
    * Hilfreiche Funktionen: 2.350,00 € Netto / 2.796.50 € Brutto
    * **Insgesamt**:
      * **4.150,00 € Netto / 4.938.50 € Brutto**
      * 98.76 Stunden bei Stundensatz 50,00 €.

## Technologien

Die Web-Applikation für Online-Bilanzierung wird auf [Django](https://www.djangoproject.com/) auf dem Server und [Backbone.Marionette](http://marionettejs.com/) auf dem Client basieren.

## Funktionalitäten

Die gewünschte Funktionalitäten sind in drei Kategorien beschreiben:

* **notwendige Funktionalitäten**: ohne diese, werden/können wir die WebApp nicht nutzen.
* **hilfreiche Funktionalitäten**: werden unsere Arbeit erleichtern, sind aber kein NO-GO für die Nutzung der WebApp.
* **extra Funktionalitäten**: finden wir cool, haben niedrige Priotität als die hilfreiche Funktionalitäten.

### notwendige Funktionalitäten

| notwendige Funktionalitäten | Budget (Netto) |
|--- | --- |--- |
| Benutzerprofil erstellen. Benutzer können ihr Profil anlegen (Name, Profilbild, E-Mail, Unternehmen), nachträglich bearbeiten und ihr Passwort ändern. Wenn sie ihr Passwort vergessen haben können sie auf der Anmeldeseite einen Link zum Neusetzen des Passworts per E-Mail anfordern.  | 300,00 € |
| Unternehmensprofil erstellen. Benutzer können ihr Unternehmensprofil anlegen (Name, Logo, Gegründet, Webseite, E-Mail, Telefonnummer, Fax, Adresse, Branche, Tätigkeit, Anzahl der Mitarbeiter, Umsatz, Inhaber, Geschäftsführer) und nachträglich bearbeiten. Dieses Profil ist vorerst nur für sie einsehbar. | 200,00 € |
| Jahresbilanz erstellen. Benutzer können GWÖ-Jahresbilanzen für ihr Unternehmen erstellen. Dazu sind folgende Schritte notwendig: 1. Metadaten erfassen Benutzer können in einem Formular ihre Metadaten angeben (Datum/Zeitraum, Status, Auditor/Peer-Unternehmen, Das Unternehmen und Gemeinwohl, Ausblick, Beschreibung des Prozesses der Erstellung der GWÖ-Bilanz) und nachträglich ändern. 2. Überblick (interaktive GWÖ-Matrix). Benutzer können in einer interaktiven GWÖ-Matrix für ihr Unternehmen Indikatoren und deren Punkte auf einen Blick einsehen. Beim Klick auf einen Indikator öffnet sich eine Indikator-Seite mit den jeweiligen Detailinformationen in einem Editor („WYSIWYG“). 3. Indikatoren editieren und bewerten. In dem Editor des Indikators können Benutzer nun ihre unternehmensspezifischen Informationen eingeben und speichern. Desweiteren können sie den Indikator mit einem „Slider“ selbst bewerten und speichern.| 1.000,00  |
| Subindikatoren angeben. Benutzer können auf der Indikator-Seite die jeweiligen Subindikatoren angeben. Dazu stehen zusätzlich zum Indikator pro Subindikator Editor und Slider mit Speicherfunktion zur Verfügung. Berechtigungen können nur für den übergeordneten Indikator gesetzt werden. | 400,00 € |
| Berechtigungen festlegen. Benutzer werden vorerst über eine Verwaltungsoberfläche („Backend“) angelegt. Dort können sie Benutzergruppen (Administrator, Unternehmensadministrator, Benutzer) zugeordnet werden und darüber die Berechtigungen festgelegt werden. Es wird unterschieden zwischen Lese- und Schreibrechten. Hat ein Benutzer nur Leserechte, kann er Metadaten und Indikatoren nur betrachten (und nicht ändern). | 200,00 € |
| Verwaltungsoberfläche. Administratoren können in einer Verwaltungsoberfläche („Backend“) neue Objekte hinzufügen und vorhandene Objekte ändern und löschen. Dazu zählen Unternehmen und Jahresbilanzen. | 100,00 € |
| Feedback an Matrix-Entwicklungsteam senden. Eine Form mit Eingabetext und Button ... Muss noch beschrieben und geschätzt werden. |  |
| Insgesamt | 2.200,00 € Netto / 2.618,00 € Brutto |

### hilfreiche Funktionalitäten

| hilfreiche Funktionalitäten | Budget (Netto) |
|--- | --- | --- |
| Berechtigungen pro Indikator setzen. Unternehmensadministratoren können für ihr Unternehmen festlegen, welche Indikatoren von ihren Benutzern geändert werden können. Dazu können sie in der GWÖ-Matrix nach einem Klick auf einen Indikator Lese- oder Schreibrechte vergeben. | 700,00 € |
| Kommentare zum Indikator abgeben. Benutzer können auf der Indikator-Seite Kommentare erstellen und auf vorhandene Kommentare antworten. Zu ihrem Kommentar werden jeweils Name, Datum und Profilbild angezeigt. | 300,00 € |
| Benutzer-Benachrichtigungen versenden. Benutzer erhalten bei folgenden Ereignissen eine E-Mailbenachrichtigung: Jahresbilanz angelegt, Jahresbilanz geändert, neuer Kommentar angelegt. Zusätzlich können sie in ihrem Benutzerprofil die Häufigkeit der E-Mailbenachrichtungen (alle, keine) bearbeiten. Jede E-Mailbenachrichtigung enthält einen Link zu diesen Einstellungen. | 400,00 € |
| Bilder zum Indikator hochladen. Benutzer können auf der Indikator-Seite über den Editor Bilder vom eigenen Rechner hochladen und einfügen. Diese Funktion steht auch für Subindikatoren zur Verfügung. | 100,00€ |
| Dokumente/Anhänge zur Jahresbilanz hochladen. Benutzer können auf der GWÖ-Matrix-Übersicht Dateien (Dokumente, Anhänge) hochladen und benennen. | 300,00 € |
| Entwicklungspotential mit kurzfristigen und langfristigen Zielen von Unternehmen pro Indikator festlegen. Benutzer können auf der Indikator-Seite über einen weiteren Editor das Entwicklungspotential für den jeweiligen Indikator festlegen. | 100,00 € |
| Übersicht und Indikatoren ausdrucken. Benutzer können die GWÖ-Matrix-Übersicht und die einzelnen Indikatoren-Seiten über die Druckfunktion des Browsers ausdrucken. Die Seiten werden entsprechend für den Druck optimiert. | 100,00 € |
| Insgesamt | 2.000,00 € Netto / 2.380,00 € Brutto |

### extra Funktionalitäten

| extra Funktionalitäten | Geldsumme |
|--- | --- |
| Änderungen bei der Versionierung zeigen. |  |
| Abstimmungen-Funktionen. |  |
| Export to PDF. |  |
| Einstiegsbericht. |  |
