$(document).ready(function () {
    $("#urlap").validate({
        rules: {
            vezeteknev: "required",
            keresztnev: "required",
            szuletesi_ido: "required",
            felhasznalonev: "required",
            email_cim: {
                required: true,
                email: true
            },
            jelszo: {
                required: true,
                minlength: 8
            },
            iranyitoszam: "required",
            telepules: "required",
            utcanev: "required",
            telefonszam: "required",
        },
        messages: {
            vezeteknev: "Kérem írja be a vezetéknevét!",
            keresztnev: "Kérem írja be a keresztnevét!",
            szuletesi_ido: "Kérem adja meg a születési idejét!",
            felhasznalonev: "Kérem írja be a felhasználónevét!",
            email_cim: "Kérem valós email címet adjon meg!",
            jelszo: {
                required: "Kérem adja meg a jelszavát!",
                minlength: "A jelszónak legalább 8 karakter hosszúnak kell lennie!"
            },
            iranyitoszam: "Kérem írja be az irányítószámot!",
            telepules: "Kérem írja be a települést!",
            utcanev: "Kérem írja be az utcanevet!",
            telefonszam: "Kérem írja be a telefonszámát!",
        },
    });
});

$(document).ready(function () {
    $('#kepek').galleria({
        width: '100%',
        height: 400
    });
});