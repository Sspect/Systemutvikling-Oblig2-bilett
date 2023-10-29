// Henter id til biletten fra http
$(function(){
    console.log("endre.js")
    // hent biletten med biletten-id fra url og vis denne i skjemaet
    const id = window.location.search.substring(1);
    const url = "/hentEnBilett?"+id;
    $.get(url,function(bilett){
        $("#id"             ).val(bilett.id); // må ha med id inn skjemaet, hidden i html
        $("#film"           ).val(bilett.film)
        $("#fornavn"        ).val(bilett.fornavn)
        $("#etternavn"      ).val(bilett.etternavn)
        $("#epost"          ).val(bilett.epost)
        $("#tellefonnummer" ).val(bilett.tellefonnummer)
        $("#antall"         ).val(bilett.antall)
    });
});

function endreBilett() {
    console.log("ENDRE")
    const bilett = {
        id :            $("#id"             ).val(),
        film:           $("#film"           ).val(),
        fornavn:        $("#fornavn"        ).val(),
        etternavn:      $("#etternavn"      ).val(),
        epost:          $("#epost"          ).val(),
        tellefonnummer: $("#tellefonnummer" ).val(),
        antall:         $("#antall"         ).val()

    }
    console.log(bilett.id+"-ID")
    $.post("/endreEnBilett",bilett,function(){
        window.location.href = 'index.html';
    });
}
