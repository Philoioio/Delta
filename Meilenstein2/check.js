
function checkjava() {

    var bool = false;
    var fehler = true;

    function exception() {
        fehler = false;
        if (fehler == false) {
            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        }
        return fehler;
    }

    var btitel = document.getElementById("titel").value;

    if (btitel.length < 1) {
        if (bool == false) {
            document.getElementById("titel").focus();
            bool = true;
        }
        document.getElementById("titel").style.borderColor = "red";
        exception();
    }

    var autor = document.getElementById("autor").value;
    if (!(autor.match(/[a-zA-Z]+$/))) {
        if (bool == false) {
            document.getElementById("autor").focus();
            bool = true;
        }
        document.getElementById("autor").style.borderColor = "red";
        exception();
    }

    var isbn = document.getElementById("isbn").value;

    if (isbn.match([0-9]+$)) {

        if (isbn.length != 13) {
            if (bool == false) {
                document.getElementById("isbn").focus();
                bool = true;
            }
            document.getElementById("isbn").style.borderColor = "red";
            exception();
        }
    }

    var jahr = document.getElementById("jahr").value;

    if (jahr.match([0-9]+$)) {

        if (jahr.length != 4) {

            document.getElementById("jahr").style.borderColor = "red";
            exception();
        }
        else {
        if (bool == false) {
            document.getElementById("jahr").focus();
            bool = true;
        }
        document.getElementById("jahr").style.borderColor = "red";
            exception();
    }


    var auflage = document.getElementById("auflage").value;
    if (auflage.match([0-9]+$)) {
        if(bool = false){
            document.getElementById("auflage").focus();
            bool = true;
        }
    }
        document.getElementById("auflage").style.borderColor = "red";
        exception();
    }


    var vorname = document.getElementById("vorname").value;
    if (!(vorname.match(/[a-zA-Z]+$/))) {
        if (bool == false) {
            document.getElementById("vorname").focus();
            bool = true;
        }
        document.getElementById("vorname").style.borderColor = "red";
        exception();
    }

    var name = document.getElementById("nachname").value;
    if (!(name.match(/[a-zA-Z]+$/))) {
        if (bool == false) {
            document.getElementById("vorname").focus();
            bool = true;
        }
        document.getElementById("vorname").style.borderColor = "red";
        exception();
    }

}