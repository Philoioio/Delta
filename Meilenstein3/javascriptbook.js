
function Horrorbutton(){
    document.getElementById("tabelle").style.visibility="hidden";
    document.getElementById("tabelleZwei").style.visibility="visible";
}

//Button zeigt nur die Romanbücher an und versteckt die Romanbücher.
function Romanbutton(){
    document.getElementById("tabelleZwei").style.visibility="hidden";
    document.getElementById("tabelle").style.visibility="visible";

}


function tabSwitch(genre) {

    switch(genre) {
        case 1:
            document.getElementById('horrorLoad').style.display = "block";
            document.getElementById('romanLoad').style.display = "none";
            break;


        case 2:
            document.getElementById('romanLoad').style.display = "block";
            document.getElementById('horrorLoad').style.display = "none";
            break;
    }

}


var horrorbook = JSON.parse(request.responseText);
//greift auf das Array der JSON Datei zu.
horrorbook = horrorbook.horrordata;

/*
 * Laedt die Daten aus den JSON Dateien und schreibt sie in eine Tabelle.
 */
function loadData(jsonData) {


    document.writeln("<table border='1'><tr>");

    document.writeln("<th>Autor</th>" +
    "<th>Titel</th>" +
    "<th>Kapitel</th>" +
    "<th>Art des Buches</th>" +
    "<th>ISBN</th>" +
    "<th>Erscheinungsjahr</th>" +
    "<th>Auflage</th></tr>");


    var j = 0;
    while(j<jsonData.bookObject.length)
    {
        document.writeln("<tr><td>"+ jsonData.bookObject[j].autor+"</td>" +
        "<td>"+ jsonData.bookObject[j].titel+"</td>"+
        "<td>"+ jsonData.bookObject[j].kapitel+"</td>" +
        "<td>"+ jsonData.bookObject[j].buchart+"</td>"+
        "<td>"+ jsonData.bookObject[j].ISBN+"</td>" +
        "<td>"+ jsonData.bookObject[j].erscheinungsjahr+"</td>"+
        "<td>"+ jsonData.bookObject[j].auflage+"</td></tr>");

        j++;
    }
    document.writeln("</table>");
}