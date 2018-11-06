/* SELEKTORI */

const prvi = document.getElementById('prvi')
const drugi = document.getElementById('drugi')
const treci = document.getElementById('treci')
const cetvrti = document.getElementById('cetvrti')
const peti = document.getElementById('peti')
const sesti = document.getElementById('sesti')

/* DOGAĐAJI */

prvi.addEventListener('click', function() {
    prvi.style.backgroundColor = 'orange'
})

prvi.addEventListener('dblclick', function() {
    prvi.style.backgroundColor = 'pink'
})

drugi.addEventListener('dblclick', function() {
    drugi.innerText = 'Hvala!'
})

treci.addEventListener('mouseover', function() {
    treci.style.backgroundColor = 'crimson'
    treci.innerText = 'Dobrodosli!'
})

cetvrti.addEventListener('mouseout', function() {
    cetvrti.style.backgroundColor = 'white'
    cetvrti.style.color = 'black'
    cetvrti.innerText = 'Dovidjenja'
})

peti.addEventListener('mousemove', function(e) {
    peti.innerText = 'Koordinate misa x: ' + e.clientX + ' y: ' + e.clientY
})

sesti.addEventListener('click', function() {
    prvi.style.display = 'none'
})

sesti.addEventListener('dblclick', function() {
    prvi.style.display = 'inline-block'
})