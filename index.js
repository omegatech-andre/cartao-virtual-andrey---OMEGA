
function Mudarestado() {
    var display = document.getElementById("visible").style.display;
    
    if(display == "block"){

        document.getElementById("visible").style.display = 'none';
        document.getElementById("icone").style.transform ='rotate(0deg)';
    } else {
        document.getElementById("visible").style.display = 'block';
        document.getElementById("icone").style.transform ='rotate(-180deg)';

    }
}