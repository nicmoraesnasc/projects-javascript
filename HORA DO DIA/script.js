function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var corpo = window.document.body
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 5) {
        // BOA MADRUGADA!
        img.src = 'dawn.png'
        corpo.style.background = '#1D2C1F';
    } else if (hora > 5 && hora <= 12) {
        // BOM DIA!
        img.src = 'morning.png'
        corpo.style.background = '#FEE458'
    } else if (hora > 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'afternoon.png'
        corpo.style.background = '#B82C00'
    } else {
        // BOA NOITE!
        img.src = 'night.png'
        corpo.style.background = '#000F3B'
    }
}

