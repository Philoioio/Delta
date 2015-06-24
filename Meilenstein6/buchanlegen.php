<?php
//Anmeldedaten

$localhost = "localhost";
$username = "marvin";
$password = "hass";
$database = "myBooks";


//SQL Verbindung
$connection = new MySQLi($localhost, $username, $password, $database);
$sql = "USE $database";

//Datenübertragung in Variablen
if ("GET" == $_SERVER ["REQUEST_METHOD"]) {
    if (isset($_GET['vorhanden'])) {

        $vorname = $_GET ['vorname'];
        $name = $_GET ['nachname'];
        $isbn = $_GET ['isbn'];
        $titel = $_GET ['titel'];
        $autor = $_GET ['autor'];
        $art = $_GET ['art'];
        $kapitel = $_GET ['kapitel'];
        $erscheinungsjahr = $_GET ['erscheinungsjahr'];
        $auflage = $_GET ['auflage'];


//Boolwerte
        $allowed = true;
        $notAllowed = false;

// Checkbox favorit
        $favorit = isset($_GET['favorit']) ? 1 : 0;

// Buchstaben
        $alphabet = '/^[a-zA-ZäöüÄÖÜß ]+$/';
        if ($vorname == "" || !preg_match($alphabet, $vorname)) {
            $allowed = $notAllowed;
        }
        if ($name == "" || !preg_match($alphabet, $name)) {
            $allowed = $notAllowed;
        }
        if ($autor == "" || !preg_match($alphabet, $autor)) {
            $allowed = $notAllowed;
        }
        if ($titel == "" || !preg_match($alphabet, $titel)) {
            $allowed = $notAllowed;
        }


// Numbers
        $numbers = "/^[0-9]+$/";
        if ($isbn == "" || !preg_match($numbers, $isbn) || isbn($isbn)) {
            $allowed = $notAllowed;
        }

        if ($erscheinungsjahr == "" || !preg_match($numbers, $erscheinungsjahr) || jahrAbfrage($erscheinungsjahr)) {
            $allowed = $notAllowed;
        }

        if ($auflage == "" || !preg_match($numbers, $auflage) || auflage($auflage)) {
            $allowed = $notAllowed;
        }

        if ($kapitel == "" || !preg_match($numbers, $kapitel) || $value < 0) {
            $allowed = $notAllowed;
        }

        if ($allowed != $notAllowed) {
            exit("Eingabewert falsch");
        }



    if ($allowed) {

        $checkboxen = count($_GET['genre']);
        if ($checkboxen == 1) {
            $genre = $_GET['genre'][0];
        } //zum Auslesen mehr checkboxen
        else if ($checkboxen > 1) {

            $arten = array(); //leer
            foreach ($_GET['genre'] as $art) {
                $arten[] = $art;
            }

            $genre = implode($arten);
        } else {
            $genre = "-";

            //erzeugt Tabelle mit Eigenschaften
            $sql = "INSERT INTO book(isbn, erscheinungsjahr, auflage, autor, titel, kapitel, art, genre)
                    VALUES('$autor', '$titel', '$kapitel', '$art', '$isbn', '$erscheinungsjahr', '$auflage', '$genre')";

            // Schickt die Anfrage an die DB und übergibt in Variable
            $sqlRequest = mysqli_query($connection, $sql);

            if (!$sqlRequest) {
                echo "Kein Speichern eines Datensatzes möglich";
            }

            $sql = "INSERT INTO benutzerInfo (benutzer, favorit)
                     VALUES('$name', '$favorit')";

            $sqlRequest = mysqli_query($connection, $sql);



        }
        }
    }
}
    mysqli_close($connection);

    function isbn($value)
    {
        if ((strlen($value) != 13)) {
            return true;
        }
    }

    function jahrAbfrage($value)
    {
        if ($value < 1000 || strlen($value) != 4 || $value < date("Y")) {
            return true;
        }
    }

    function auflage($value)
    {
        if ($value < 0) {
            return true;
        }
    }
