
<?php
/** Zuweisung der manuell angelegten book.txt Datei in die der Text geschrieben wird. */
$my_file = "./books.txt";

/** Öffnen der Datei und Anweisung dass in ihr geschrieben wird, für den Fall
 *  dass die Textdatei nicht vorhanden ist wird ein Fehler ausgelöst.
 *  Die Variable handle beinhaltet nun die txt.
 */
$handle = fopen($my_file, "w") or die("Unable to open file!".$my_file);

/** Über die vordefinierte Anweisung $_GET werden die Variablen aus dem GET-request gezogen*/
$buchautor = $_GET["autor"].', ';
$titel = $_GET["titel"].', ';
$kapitelanzahl = $_GET["kapitel"].' Kapitel, ';
$buchart = $_GET["art"].', ';
$ISBN = $_GET["isbn"].',';
$erscheinungsjahr = $_GET["jahr"].', ';
$auflage = $_GET["auflage"].'.Auflage;';

/** Methode fwrite() schreibt die gewonnenen Daten in die textdatei (handle) */
fwrite($handle, $buchautor);
fwrite($handle, $titel);
fwrite($handle, $kapitelanzahl);
fwrite($handle, $buchart);
fwrite($handle, $ISBN);
fwrite($handle, $erscheinungsjahr);
fwrite($handle, $auflage);

/** schließen der Datei */
fclose($handle);

/** Dieser  echo-Block dient zur Ausgabe der zuvor eingegebenen Daten auf der Folgeseite.
    Ohne ihn, bekommt man einen weißen Screen ohne sichtbaren Inhalt*/
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
echo "<br>";

?>
