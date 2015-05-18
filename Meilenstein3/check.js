function checkjava() {


    var nurBuchstaben = /^[\sa-zA-ZßäöüÄÖÜ]+$/; /*erstellt Variable die alle Buchstaben enthaellt*/
    var nurZahlen =/^[0-9]+$/;                      /*erstellt Variable die alle Zahlen enthaelt*/
    aktuellesDatum = new Date();                    /*speichert aktuelles Datum*/
    aktuellesJahr = aktuellesDatum.getFullYear();   /*speichert aktuelles Jahr in der Variable*/

    /*Überprüfung des Titelfeldes
    Es wird geschaut ob das Feld freigelassen wurde. Wenn ja gibt es eine Fehlermeldung
    und das feld wird rot umrandet
    */
    if(btitel.value==""){

        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.btitel.focus();
        document.Formular.titel.style.borderColor = "red";
        return false;

 
    }
     /*Überprüfung des autorfeldes
     Es wird geprüft ob nur Buchstaben eingegeben wurden
     */
    if (!nurBuchstaben.test(autor.value)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.autor.focus();
        document.Formular.autor.style.borderColor = "red";
        return false;
    }
     /*Überprüfung des isbnfeldes
     Es wird geprüft ob nur maximal 13 zahlen eingegeben wurden
     */
    if((!nurZahlen.test(isbn.value)) || (isbn.value.length >13)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.isbn.focus();
        document.Formular.isbn.style.borderColor = "red";
        return false;
    }
     /*Überprüfung des vornamefeldes
     Es wird geprüft ob nur Buchstaben eingegeben wurden
     */
    if (!nurBuchstaben.test(vorname.value)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.vorname.focus();
        document.Formular.vorname.style.borderColor = "red";
        return false;
    }
     /*Überprüfung des nachnamefeldes
     es wird geprüft ob nur Buchstaben eingegeben wurden
     */
    if (!nurBuchstaben.test(nachname.value)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.nachname.focus();
        document.Formular.nachname.style.borderColor = "red";
        return false;
    }
     /*Überprüfung des erscheinungsjahrfeldes
     es wird geprüft ob -die länge größer 4 ist
                        -der wert über 1 ist
                        -der wert nicht über das aktuelle Jahr schreitet.
                        Hierzu wird die im Kopf bereits deklarierte variable aktuellesJahr
                        verwendet
    */
    if(erscheinungsjahr.value.length >4|| erscheinungsjahr.value<1 || erscheinungsjahr.value>aktuellesJahr) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.erscheinungsjahr.focus();
        document.Formular.jahr.style.borderColor = "red";

        return false;
    }
     /*Überprüfung des auflagefeldes
     Es wird geprüft -nur eingabe von zahlen
                     -die eingabe größer 1 ist
                     -und die eingabe genau aus einer zahl besteht
    */
    if (!nurZahlen.test(auflage.value)||(auflage.value<0)||(auflage.value.length!=1)) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        document.Formular.auflage.focus();
        document.Formular.auflage.style.borderColor = "red";
        return false;
    }


}

