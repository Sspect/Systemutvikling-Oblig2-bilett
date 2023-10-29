$(function (){
    hentAlleBiletter();
})
function hentAlleBiletter(){
    $.get("/alleBiletter", function (billetter){

        formaterData(billetter);
    });

}

function formaterData(billetter){
    if (billetter.length === 0) {
        let ut = "Ingen lagrede biletter"
        $("#ut").html(ut)

        $("#slettKnapp").hide()




    } else {
        $("#slettKnapp").show()

        let ut = "<table class='table table-striped'>" + //                                                                             Denne koden class='col-lg-1' gjør at bredden til tabel dataen ikke endrer seg når css sin hoverer
            "<tr><th>Film</th>    <th>Fornavn</th>    <th>Etternavn</th>    <th>Epost</th>    <th>Tellefon</th>    <th>Antall</th> <th>Seter</th> <th class='col-lg-1'>Endre</th>   <th class='col-lg-1'>Slett</th></tr>";

        for (const billett of billetter){
            ut+= "<tr class='parent'>" +
                "<td><p>" + billett.film + "</p></td>" +
                "<td><p>" + billett.fornavn + "</p></td>" +
                "<td><p>" + billett.etternavn + "</p></td>" +
                "<td><p>" + billett.epost + "</p></td>" +
                "<td><p>" + billett.tellefonnummer + "</p></td>" +
                "<td><p>" + billett.antall + "</p></td>" +
                "<td><p>" + billett.seter + "</p></td>" +
                // BUTTONS    <a> href = "endre.html?id=#" <a>
                "<td><a href='endre.html?id="+billett.id+"'><button class='btn btn-primary child'>Endre</button></a></td>" +
                "<td><button class='btn btn-danger child' onclick='sletBilett("+billett.id+")'>Slett</button></td>" +
                "</tr>"
        }
        ut += "</table>";

        $("#ut").html(ut)
        console.log("ut;" + ut)
    }



}

function sletBilett(id) {
    const url = "/slettBilett?id="+id;
    $.get( url, function() {
        window.location.href = 'index.html';
    });
};

function slettAlleBiletter() {
    $.get( "/slettAlleBiletter", function() {
        window.location.href = 'index.html';
    });
};