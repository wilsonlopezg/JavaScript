/*================================================
Ejercicios de practica en JavaScript (Los cuatro Atletas)

De cuatro corredores de atletismo se sabe que C ha llegado detras de B, y D ha llegado
// en medio de A y C. ¿Podría usted calcular el orden de llegada?
B -> 1
C -> 2
D -> 3
A -> 4
=================================================*/

var a = {

    A: 0,
    B: 0,
    C: 0,
    D: 0,
    resultado: function () {
        if (a.C > a.B &&
            a.D > a.B &&
            a.D > a.C &&
            a.D < a.A) {

            return true;
        }
        return false;
    },
    intervalo: setInterval(function () {
        a.A = Math.ceil(Math.random() * 4)
        a.B = Math.ceil(Math.random() * 4)
        a.C = Math.ceil(Math.random() * 4)
        a.D = Math.ceil(Math.random() * 4)

        if (a.resultado()) {

            clearInterval(a.intervalo);
            console.log("Atleta A", a.A)
            console.log("Atleta B", a.B)
            console.log("Atleta C", a.C)
            console.log("Atleta D", a.D)
        }
    }, 10)
}
