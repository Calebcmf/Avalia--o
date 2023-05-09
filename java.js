document.onkeydown = Pega_Tecla;
    function Pega_Tecla(e) 
    {	
        e = e || window.event;
    
        tecla = e.keyCode;
        idtecla = console.log(tecla); // MOSTRA O CÓDIGO DA TECLA PRESSIONADA
        idtecla(display = "none")
    }