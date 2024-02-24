const caja = document.getElementById ("caja");
const textoEncriptado = document.getElementById("textoencriptado");

let codigo = [
        ["e", "enter"],
        ["o", "ober"],
        ["i", "imes"],
        ["a", "ai"],
        ["u", "ufat"],
]

const remplazar = (all) =>{
    textoEncriptado.innerHTML = all
    copiarTexto.style.display = "inline-block"
    textoencriptado.style.display = "inline-block"
    dance.style.display = "none"
    
}

function encriptar(){
    const texto = caja.value.toLowerCase();
    function cifrar(resultado){
        for( let i = 0; i < codigo.length; i++){
            if(resultado.includes(codigo[i][0])){
               resultado = resultado.replaceAll(codigo[i][0], codigo[i][1]);
            };
            
        };
        return resultado
    };
    remplazar(cifrar(texto)) 
};

function desencriptar(){
    const texto = caja.value.toLowerCase();
    function descifrar(resultado){
        for( let i= 0; i < codigo.length; i++){
            if(resultado.includes(codigo[i][1])){
            resultado = resultado.replaceAll(codigo[i][1], codigo[i][0]);
            };
        };
        return resultado
    };
    remplazar(descifrar(texto));
};

function copiar(){
    let copiado = textoEncriptado;
    copiado.select();
    document.execCommand('copy');
    //reeniciar o limpiar todo
    caja.value = ""
    textoencriptado.style.display = "none"
    copiarTexto.style.display = "none"
    dance.style.display = "inline-block"
    caja.focus();

};