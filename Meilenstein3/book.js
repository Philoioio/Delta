var json = new XMLHttpRequest();

    json.open("GET", "horror_books.json",false);
    json.send();
    var horror = JSON.parse(json.responseText);
    horror = horror.horrordata;


    json.open("GET", "roman_books.json",false);
    json.send();
    var roman = JSON.parse(json.responseText);
    roman = roman.romandata;



function Horrorbutton(){
    document.getElementById(roman).style.visibility="hidden";
    document.getElementById(horror).style.visibility="visible";
}

function Romanbutton(){
    document.getElementById(horror).style.visibility="hidden";
    document.getElementById(roman).style.visibility="visible";

}


function erstelleTabelle(roman) {


    document.writeln("<table border='1'><tr>");

    document.writeln("<th>Autor</th>");
    document.writeln("<th>Titel</th>");
    document.writeln("<th>Kapitel</th>");
    document.writeln("<th>Art des Buches</th>");
    document.writeln("<th>ISBN</th>");
    document.writeln("<th>Erscheinungsjahr</th>");
    document.writeln("<th>Auflage</th></tr>");


    for (var i = 0; i < roman.length; i++) {

        document.writeln("<tr><td>" + roman[i].autor + "</td>");
        document.writeln("<td>" + roman[i].titel + "</td>");
        document.writeln("<td>" + roman[i].kapitel + "</td>");
        document.writeln("<td>" + roman[i].buchart + "</td>");
        document.writeln("<td>" + roman[i].ISBN + "</td>");
        document.writeln("<td>" + roman[i].erscheinungsjahr + "</td>");
        document.writeln("<td>" + roman[i].auflage + "</td></tr>");

    }
    document.writeln("</table>");
}

function erstelleTabelle(horror) {


    document.writeln("<table border='1'><tr>");

    document.writeln("<th>Autor</th>");
    document.writeln("<th>Titel</th>");
    document.writeln("<th>Kapitel</th>");
    document.writeln("<th>Art des Buches</th>");
    document.writeln("<th>ISBN</th>");
    document.writeln("<th>Erscheinungsjahr</th>");
    document.writeln("<th>Auflage</th></tr>");


    for (var i = 0; i < horror.length; i++) {

        document.writeln("<tr><td>" + horror[i].autor + "</td>");
        document.writeln("<td>" + horror[i].titel + "</td>");
        document.writeln("<td>" + horror[i].kapitel + "</td>");
        document.writeln("<td>" + horror[i].buchart + "</td>");
        document.writeln("<td>" + horror[i].ISBN + "</td>");
        document.writeln("<td>" + horror[i].erscheinungsjahr + "</td>");
        document.writeln("<td>" + horror[i].auflage + "</td></tr>");

    }
    document.writeln("</table>");
}