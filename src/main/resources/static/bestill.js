const rader = ["A","B","C","D"];
const seter = 9;



function formaterSeter(opptatteSeter) {

    // For example opptatteSeter = "1A,2A,1B,2B"

    let ut = "<tr><th></th>";

    for (let i = 1; i <= seter; i++) {
        ut += "<th><h4>" + i + "</h4></th>";
    }
    ut += "</tr>";

    for (r in rader) {
        ut += "<tr><td><h4>" + rader[r] + "</h4></td>";

        for (let s = 1; s <= seter; s++) {
            const seatId = s + rader[r];
            if (opptatteSeter.includes(seatId)) {
                ut += "<td><div class='opptattSete' id='" + seatId + "'></div></td>";
            } else {
                ut += "<td><input class='sete' type='checkbox' id='" + seatId + "'></td>";
            }
        }
        ut += "</tr>";
    }
    document.getElementById("seter").innerHTML = ut;
}







    function storForbokstav(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function postBilett() {

    erFeltetTomt("film");
    erFeltetTomt("fornavn");
    erFeltetTomt("etternavn");
    erFeltetTomt("epost");
    erFeltetTomt("tellefonnummer");
    erFeltetTomt("antall");

    // Tar felt-tekst fra form og lager et objekt

    let utvalgteSeter = []
    for( r in rader){
        for(let s = 1; s <= seter; s ++){
            const sete = document.getElementById(s+rader[r]);
            if(sete.checked){
                utvalgteSeter.push(s+rader[r])
            }
        }
    }
    // gjør om utvalgteSeter[] til en streng
    const seteString = utvalgteSeter.join(',');
    const bilett = {
        film:           $("#film"           ).val(),
        fornavn:        $("#fornavn"        ).val(),
        etternavn:      $("#etternavn"      ).val(),
        epost:          $("#epost"          ).val(),
        tellefonnummer: $("#tellefonnummer" ).val(),
        antall:         $("#antall"         ).val(),
        seter:           seteString
    }
    console.log(bilett)

    let erNoenFeltTomme = false;

    if (bilett.film === ""){
        erNoenFeltTomme = true;
    }
    if (bilett.fornavn === ""){
        erNoenFeltTomme = true;
    }
    if (bilett.etternavn === ""){
        erNoenFeltTomme = true;
    }
    if (bilett.epost === ""){
        erNoenFeltTomme = true;
    }
    if (bilett.tellefonnummer === ""){
        erNoenFeltTomme = true;
    }
    if (bilett.antall === ""){
        erNoenFeltTomme = true;
    }

    //if( erNoenFeltTomme === false)
    if  (!erNoenFeltTomme){

        $.post("/nyBilett", bilett, function (){

            // Tømmer innputfeltene
            $("#film"           ).val(bilett.film)
            $("#fornavn"        ).val("")
            $("#etternavn"      ).val("")
            $("#epost"          ).val("")
            $("#tellefonnummer" ).val("")
            $("#antall"         ).val("")
            $("#rad"            ).val("")

            alert("beiletten er bestilt")
            window.location.reload();

        })



    }

}
// Er feltet (input) tomt?
// denne funksjonen kjører etter endring i input felt (onchange)
function erFeltetTomt(inputID){
    let film = $("#film").val()
    //console.log("erFeltetTomt " + inputID)
    // input er en variabel som brukes istedefor id (getEllementById("eksempelid"))
    let id = "#"+inputID

    //console.log(film)
    // film bilde --------------------------------------------------------------------
    if (film == "Inception"){

        document.getElementById("bilde").innerHTML = "<img src='img/INCEPTION.jpg' alt=''>";
    }
    if (film == "Toy Story 3"){
        document.getElementById("bilde").innerHTML = "<img src='img/TOYSTORY3.jpg' alt=''>";
    }
    if (film == "127 Hours"){
        document.getElementById("bilde").innerHTML = "<img src='img/127HOUERS.jpg' alt=''>";
    }
    if (film == "Despicable Me"){
        document.getElementById("bilde").innerHTML = "<img src='img/DESPICABLEME.jpg' alt=''>";
    }
    // film bilde --------------------------------------------------------------------

    if(inputID == "film"){
        hentSeter(film)
    }




    // !let erNoenFeltTomme = false;

    if ($(id).val() === ""){


        // !erNoenFeltTomme = true;
        $(id+"L").html("<b class='rod-farge'>Du må fylle inn " + inputID + "!")
    }else {
        $(id+"L").html(storForbokstav(inputID))
        // !erNoenFeltTomme = false;
    }

}





// hent seter ________________________________________________________________________
function hentSeter(film){
    const url = "/hentSeter?film="+film;
    $.get(url,function(seter){

        formaterSeter(seter)
    });
}
























