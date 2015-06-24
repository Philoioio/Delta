<?php
/*Content Type wird auf JSON gesetzt damit der Client weiß, dass es 
 * sich um ein JSON File handelt.
 */
header('Content-Type: application/json');



if ($_GET['json'] = 'roman') {
    $filename = '../Meilenstein3/roman_books.json';
} elseif($_GET['json'] = 'horror') {
    $filename = '../Meilenstein3/horror_books.json';
}


$localhost = "localhost";
$username = "marvin";
$password = "hass";
$database = "myBooks";



//Eine Verbindung zum SQL Server erstellen
$connection = new MySQLi($localhost, $username, $password, $database);


if ($filename == 'horror') {
    $request = "SELECT autor,titel, kapitel, buchart, ISBN, erscheinungsjahr, auflage FROM myBooks.tabelle WHERE genre =='horror'";

}
else {
    $request = "SELECT autor,titel, kapitel, buchart, ISBN, erscheinungsjahr, auflage FROM myBooks.tabelle WHERE genre == 'roman'";
    }


$result = mysqli_query($connection, $request);

$ausgabe = array();


while($reihe = mysqli_fetch_assoc($result)) {
    $ausgabe[] = $reihe;
}

$out = array_values($ausgabe);

$out = json_encode($out);

$json_final = '{ "book": '.$out.'}';

//JSON Datei wird an den aufrufenden Client zurück gegeben.
echo $json_final;


$connection->close();

?>
