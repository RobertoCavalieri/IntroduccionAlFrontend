/**document.getElementById('boton').onclick = function () {
    document.getElementById('demo').innerHTML = Date();
}

document.addEventListener('click', function() {
    console.log("hola mundo desde Eventlistener")
    document.getElementById('demo').innerHTML = Date();

})
*/
document.getElementById('boton').addEventListener('click', function() {
    console.log("hola mundo desde Eventlistener")
    document.getElementById('demo').innerHTML = Date();

})

document.getElementById('color').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red'
})