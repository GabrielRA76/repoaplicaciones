function esPalindromo(frase) {
    // Convertir la frase a minúsculas y eliminar espacios, puntuación y caracteres especiales
    const fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Invertir la frase limpia
    const fraseInvertida = fraseLimpia.split('').reverse().join('');
    // .split(''): Este método convierte la cadena en un array de caracteres. El argumento '' 
    // indica que la cadena se divide en cada carácter, creando un array donde cada elemento 
    // es un carácter de la cadena original.
    // .reverse(): Este método invierte el orden de los elementos en el array.
    // .join(''): Este método convierte el array de nuevo en una cadena. El argumento '' 
    // indica que los elementos del array deben unirse sin ningún separador.

    // Comparar la frase limpia con la frase invertida
    return fraseLimpia === fraseInvertida;
    // Regresa un valor de verdadero o falso. 
}

// Ejemplo de uso
const frase = "Anita lava la tina";
if (esPalindromo(frase)) {
    console.log("La frase es un palíndromo.");
} else {
    console.log("La frase no es un palíndromo.");
}