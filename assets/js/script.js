
function calculaAreaSala() {
    let alturaParede_HTML = document.getElementById("altura").value;
    let larguraParede_HTML = document.getElementById("largura").value;
    let areaParede = (alturaParede_HTML * larguraParede_HTML);

    let janela_HTML = document.getElementById("janela").value;
    let porta_HTML = document.getElementById("porta").value;

    const larguraPorta = 0.80;
    const alturaPorta = 1.90;
    const larguraJanela = 2;
    const alturaJanela = 1.20;

    let somaPortaJanela = 0;
    let areaJanela = 0;
    let areaPorta = 0;

    if( document.getElementById("altura").value == "" ||
        document.getElementById("largura").value == "" ||
        document.getElementById("janela").value == "" ||
        document.getElementById("porta").value == "")
        {
            alert('Por favor, preencha todos os campos');
        }else 
        if(areaParede > 15 || areaParede < 1){
            alert("A aréa total da parede deve ser entre 1m e 15m");
        }else
        if(alturaParede_HTML < (alturaPorta + 0.3)){
            alert("A altura da parade tem que ser 30 centímetros maior que a altura da porta");
        }
        else{
                if(janela_HTML > 0 || porta_HTML > 0 ){
                    areaJanela = (larguraJanela * alturaJanela) * janela_HTML;
            
                    areaPorta = (larguraPorta * alturaPorta) * porta_HTML;
            
                    somaPortaJanela = areaJanela + areaPorta;
                }
                
            let areaSala = areaParede * 4;
            let litroTinta = (areaSala / 5);
            let msg = latasNecessarias(litroTinta);

            resultado(msg, litroTinta, areaSala, somaPortaJanela);
        }     
}   

function resultado (msg, litroTinta, areaSala, somaPortaJanela){
    alert("Seu ambiente possui: " +areaSala+ "m² \n"+ 
            "Será necessário: " +litroTinta+ "L de tinta\n"+
            "Soma de porta e janela equivale a " +somaPortaJanela+ "m²\n"+
            msg );
}

function latasNecessarias (litroTinta){
    let lata18L = 0;
    let lata36L = 0;
    let lata25L = 0;
    let lata05L = 0;

    while (litroTinta > 0.5){
        while (litroTinta >= 18 && litroTinta != 0) {
            lata18L = lata18L + 1;
            litroTinta = litroTinta - 18;
            console.log(litroTinta);
        }
    
        while (litroTinta >= 3.6 && litroTinta != 0) {
            lata36L = lata36L + 1;
            litroTinta = litroTinta - 3.6;
            console.log(litroTinta);
        }
    
        while (litroTinta >= 2.5 && litroTinta != 0) {
            lata25L = lata25L + 1;
            litroTinta = litroTinta - 2.5;
            console.log(litroTinta);
        }
        
        lata05L = lata05L + 1;
        litroTinta = litroTinta - 0.5;
        console.log(litroTinta);
    }
    return "Serão necessárias: "+ lata18L +" lata(s) de 18L | "+ lata36L +" lata(s) de 3,6L | "+ lata25L +" lata(s) de 2,5L | "+ lata05L +" lata(s) de 0,5L ";
}

document.getElementById("calcular").addEventListener("click", calculaAreaSala);
