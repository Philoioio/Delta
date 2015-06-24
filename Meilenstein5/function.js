function loadDatabase(data) {
    //Erzeugt neuen Request an den Server
    var xmlhttp = new XMLHttpRequest(data);
    var url = "./getBooks.php?json="+data;

    xmlhttp.onreadystatechange = function () {
        // Antwort des Servers liegt vollständig vor und die Anfrage war erfolgreich
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById('tabelle').style.background = "rgb(0,162,232)";
            var data = JSON.parse(xmlhttp.responseText);
            var table = erstelleTabelle(data);
            document.getElementById('tabelle').innerHTML = table;
        }
    }

    
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    // Anfrage absenden
    xmlhttp.send();
}
//erstellt Tabellen
function erstelleTabelle(data) {

    tableJSON = "<table border='1'><tr>" +
                "<th>Autor</th>" +
                "<th>Titel</th>"+
                "<th>Kapitel</th>"+
                "<th>Art des Buches</th>"+
                "<th>ISBN</th>"+
                "<th>Erscheinungsjahr</th>"+
                "<th>Auflage</th></tr>";



    /* Fügt werte über for-schelife ein*/
    for ( i = 0; i < data.book.length; i++) {

        tableJSON = tableJSON +
        "<tr><td>"+ data.book[i].autor+"</td>" +
        "<td>"+ data.book[i].titel+"</td>" +
        "<td>"+ data.book[i].kapitel+"</td>" +
        "<td>"+ data.book[i].buchart+"</td>" +
        "<td>"+ data.book[i].ISBN+"</td>" +
        "<td>"+ data.book[i].erscheinungsjahr+"</td>" +
        "<td>"+ data.book[i].auflage+"</td></tr>";


    }
    return tableJSON + "</table>";
}
