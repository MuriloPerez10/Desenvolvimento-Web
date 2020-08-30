function carrgar() {

var msg = window.document.getElementById("msg")
var foto = window.document.getElementById("img")
var data = new Date()
 var hora = 19//data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    // Bom dia
    foto.src = "sol.png"
    document.body.style.backgroundColor = "yellow"
} else if( hora >=12 && hora < 18){
    //Boa tarde
    foto.src = "tard.png"
    document.body.style.backgroundColor = "orange"
} else{
    //Boa noite
    foto.src = "lua.png"
    document.body.style.backgroundColor = "rgba(63, 8, 114, 0.89)"
}
}