// Write your code here!

document.querySelector('#main').remove()

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Michael Elfassy is the champion'

document.body.append(newHeader)