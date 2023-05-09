document.onkeydown = Pega_Tecla;
    function Pega_Tecla(e) 
    {	
        e = e || window.event;
    
        tecla = e.keyCode;
        id = console.log(tecla); // MOSTRA O CÓDIGO DA TECLA PRESSIONADA
        var idtecla = document.getElementById(id)
        idtecla.add.document = "none"
    }