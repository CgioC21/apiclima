
var formulario = document.getElementById('form-login')

var fecha = document.getElementById('start')

var divTemperatura = document.getElementById('divTemperatura')
var divClimaAmanecer = document.getElementById('divClimaAmanecer')
var divClimaTarde = document.getElementById('divClimaTarde')
var divClimaNoche = document.getElementById('divClimaNoche')

var temperatura;
var climaAmanecer;
var climaTarde;
var climaNoche;


formulario.addEventListener('submit',function(evento){
    evento.preventDefault()
    
    divTemperatura.innerHTML = "";

    divClimaAmanecer.innerHTML = "";
    divClimaTarde.innerHTML = "";
    divClimaNoche.innerHTML = "";

    setTimeout(()=>{

        temperatura = Math.floor(Math.random() * (Math.floor(30) - Math.ceil(5) + 1) + 5); //temperatura 5 a 30 grados
        
        climaAmanecer = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + 1); //1 soleado, 2 nublado , 3 lluvioso
        climaTarde = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + 1); //1 soleado, 2 nublado , 3 lluvioso
        climaNoche = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + 1); //1 soleado, 2 nublado , 3 lluvioso

        divTemperatura.innerHTML = fecha.value + " <br> " + temperatura + "&#8451"

        if (climaAmanecer==1){
            divClimaAmanecer.innerHTML = "Amanecer"+"<br>"+"<br>"+ "<img src=img/soleado.png alt=Clima amanecer>"
        }else if(climaAmanecer==2){
            divClimaAmanecer.innerHTML = "Amanecer"+"<br>"+"<br>"+ "<img src=img/nublado.png alt=Clima amanecer>"
        }else{
            divClimaAmanecer.innerHTML = "Amanecer"+"<br>"+"<br>" + "<img src=img/lluvioso.png alt =Clima amanecer>"
        }

        if (climaTarde==1){
            divClimaTarde.innerHTML = "Tarde" + "<br>" + "<br>" + "<img src=img/soleado.png alt=Clima tarde>"
        }else if(climaTarde==2){
            divClimaTarde.innerHTML = "Tarde" + "<br>"+"<br>" + "<img src=img/nublado.png alt=Clima tarde>"
        }else{
            divClimaTarde.innerHTML = "Tarde" + "<br>"+"<br>" + "<img src=img/lluvioso.png alt =Clima tarde>"
        }

        if (climaNoche==1){
            divClimaNoche.innerHTML = "Noche"+"<br>"+"<br>"+ "<img src=img/soleado.png alt=Clima noche>"
        }else if(climaNoche==2){
            divClimaNoche.innerHTML = "Noche"+"<br>"+"<br>"+ "<img src=img/nublado.png alt=Clima noche>"
        }else{
            divClimaNoche.innerHTML = "Noche"+"<br>"+"<br>" + "<img src=img/lluvioso.png alt =Clima noche>"
        }

    },500)
         
})


