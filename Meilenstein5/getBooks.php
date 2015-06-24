
<?php

header('Content-Type: application/json');

//Wählt die jeweilge Json datei aus und speichert sie in der Variable $filename
if ($_GET['json'] == 'roman') {
    $filename = '../Meilenstein3/roman_books.json';
} elseif($_GET['json'] == 'horror') {
    $filename = '../Meilenstein3/horror_books.json';
}


//Gebe daten mit Echo aus
if ($_GET['json'] != null && $_GET['json'] != false) {
    echo file_get_contents($filename);
}

?>

