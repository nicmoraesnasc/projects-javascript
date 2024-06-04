function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('gender')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'menino-adolescente.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'homem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'senhor.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'menina-adolescente.png')
            } else if (idade < 40) {
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'senhora.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.justifyContent = 'center'
    }
}