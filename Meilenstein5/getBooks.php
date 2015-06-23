
<?php

header('Content-Type: application/json');


if ($_GET['json'] == 'roman') {
    $filename = '../Meilenstein3/roman_books.json';
} elseif($_GET['json'] == 'horror') {
    $filename = '../Meilenstein3/horror_books.json';
}



if ($_GET['json'] != null && $_GET['json'] != false) {
    echo file_get_contents($filename);
}

?>

