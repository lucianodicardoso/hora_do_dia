function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var h1 = window.document.querySelector('h1')
    var p = window.document.querySelector('footer')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${min}</strong> horas.`
    if (hora > 0 && hora < 12) {
        img.src = 'dia.png'
        document.body.style.background = '#E5D367'
        h1.style.color = '#000'
        p.style.color = '#000'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#EAA387'
        h1.style.color = '#000'
        p.style.color = '#000'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#042933'
    }
}
