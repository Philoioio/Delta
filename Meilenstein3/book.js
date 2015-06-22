/* Erstellt Http request*/
var json = new XMLHttpRequest();

    /* bindet JSON file ein*/
    json.open("GET", "horror_books.json",false);

    /* sendet request*/
    json.send();

    /* variable horror beinhaltet horror tabelle*/
    var horror = JSON.parse(json.responseText);
    horror = horror.horrordata;


    /*gleiches Spiel wie Horror*/
    json.open("GET", "roman_books.json",false);
    json.send();
    var roman = JSON.parse(json.responseText);
    roman = roman.romandata;

    var data;

/* Zeigt Horrortabelle an */
function Horrorbutton(){
    document.getElementById('romantabelle').style.visibility="hidden";
    document.getElementById('horrortabelle').style.visibility="visible";
    data = horror;
}

/* Zeigt Romantabelle an*/
function Romanbutton(){
    document.getElementById('horrortabelle').style.visibility="hidden";
    document.getElementById('romantabelle').style.visibility="visible";
    data = roman;
}


/* Erstellt Tabelle*/
function erstelleTabelle(roman) {

    /* Erstellt Spalten*/
    document.writeln("<table border='1'><tr>");

    document.writeln("<th>Autor</th>");
    document.writeln("<th>Titel</th>");
    document.writeln("<th>Kapitel</th>");
    document.writeln("<th>Art des Buches</th>");
    document.writeln("<th>ISBN</th>");
    document.writeln("<th>Erscheinungsjahr</th>");
    document.writeln("<th>Auflage</th></tr>");

    /* Fügt werte über for-schelife ein*/
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

/* Erstellt Tabelle*/
function erstelleTabelle(horror) {

    /* Erstellt Spalten*/
    document.writeln("<table border='1'><tr>");

    document.writeln("<th>Autor</th>");
    document.writeln("<th>Titel</th>");
    document.writeln("<th>Kapitel</th>");
    document.writeln("<th>Art des Buches</th>");
    document.writeln("<th>ISBN</th>");
    document.writeln("<th>Erscheinungsjahr</th>");
    document.writeln("<th>Auflage</th></tr>");

    /* Fügt werte über for-schelife ein*/
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


function tableflip(data){
    if(data == "horror" || data == horror){
        document.getElementById('horrortabelle').innerHTML = xmlhttp.responseText;
    }
    else if(data == "roman" || data == roman) {
        document.getElementById('romantabelle').innerHTML = xmlhttp.responseText;
    }
}

function loadDatabase(data) {

    var xmlhttp = new XMLHttpRequest(data);
    var url = "http://localhost/Delta/Meilenstein5/php/getBooks.php?q="+data;

    if (data == roman) {
        xmlhttp.onreadystatechange = function () {
            // Antwort des Servers liegt vollständig vor und die Anfrage war erfolgreich
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                tableflip(data);
                document.getElementById(data).style.background = "rgb(0,162,232)";
            }
        }
    }
    else if (data == horror) {
        xmlhttp.onreadystatechange = function () {
            // Antwort des Servers liegt vollständig vor und die Anfrage war erfolgreich
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                tableflip(data);
                document.getElementById(data).style.background = "rgb(0,162,232)";
            }
        }
    }

    xmlhttp.open("GET", url, true);
    // Anfrage absenden
    xmlhttp.send();
}


/*            if(str == "horror"){
 document.getElementById("bookTableHorror").innerHTML = xmlhttp.responseText;
 }
 else {
 document.getElementById("bookTableRoman").innerHTML = xmlhttp.responseText;
 } */