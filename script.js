const blocked = document.querySelectorAll('.block');
const zatuhf = document.querySelector('.zatuhf')
const zatuhs = document.querySelector('.zatuhs')
const zatuht = document.querySelector('.zatuht')
const blanklinkf = document.querySelectorAll('.blanklinkf')
const blanklinks = document.querySelector('.blanklinks')
const blanklinkfoot = document.querySelector('.blanklinkfoot')


blanklinkf.forEach(elemento => {
    elemento.addEventListener('click', event => {
        event.preventDefault();
        window.open('https://discord.com/api/oauth2/authorize?client_id=932664325758402590&permissions=980937982&scope=bot%20applications.commands','name','width=500,height=600')
    }) 
});

blanklinks.addEventListener('click', event => {
    event.preventDefault();
    window.open('https://discord.gg/9CfBX2s7th','name','width=500,height=600')
});



zatuhf.addEventListener('mouseover', () => {
    zatuhs.style.color = '#a4a4a4'
    zatuht.style.color = '#a4a4a4'
})

zatuhf.addEventListener('mouseout', () => {
    zatuhs.removeAttribute('style')
    zatuht.removeAttribute('style')
})

zatuhs.addEventListener('mouseover', () => {
    zatuhf.style.color = '#a4a4a4'
    zatuht.style.color = '#a4a4a4'
})

zatuhs.addEventListener('mouseout', () => {
    zatuhf.removeAttribute('style')
    zatuht.removeAttribute('style')
})

zatuht.addEventListener('mouseover', () => {
    zatuhf.style.color = '#a4a4a4'
    zatuhs.style.color = '#a4a4a4'
})

zatuht.addEventListener('mouseout', () => {
    zatuhf.removeAttribute('style')
    zatuhs.removeAttribute('style')
})



blocked.forEach(elem => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();
        alert('Извините, пока не доступно..');
    })
})