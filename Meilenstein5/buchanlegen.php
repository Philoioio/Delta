

<?php
$my_file = "books.txt";
$handle = fopen($my_file, "w") or die("Unable to open file!".$my_file);

$buchautor = $_GET["autor"].', ';
$titel = $_GET["titel"].', ';
$kapitelanzahl = $_GET["kapitel"].' Kapitel, ';
$buchart = $_GET["art"].', ';
$ISBN = $_GET["isbn"].", ";
$erscheinungsjahr = $_GET["jahr"].', ';
$auflage = $_GET["auflage"].'.Auflage;';


fwrite($handle, $buchautor);
fwrite($handle, $titel);
fwrite($handle, $kapitelanzahl);
fwrite($handle, $buchart);
fwrite($handle, $ISBN);
fwrite($handle, $erscheinungsjahr);
fwrite($handle, $auflage);

fclose($handle);

echo "<h2>Eingegebene Daten:</h2>";
echo $buchautor;
echo "<br>";
echo $titel;
echo "<br>";
echo $kapitelanzahl;
echo "<br>";
echo $buchart;
echo "<br>";
echo $ISBN;
echo "<br>";
echo $erscheinungsjahr;
echo "<br>";
echo $auflage;

?>