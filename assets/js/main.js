console.log("Hola desde un Script externo");

function changeColorTo(color){
    const refName = getReferenceFullName();

    refName.style.color = color;
}

function getReferenceFullName(){
    return document.getElementById("fullname");
}

function changeColorParagraph(color){
    const refTxtGreen = document.getElementById("verde");
    const refTxtBlue = document.getElementById("azul");
    const refTxtYellow = document.getElementById("amarillo");

    refTxtGreen.style.color = color;
}

function resetColors(){
    const colorCollection

}