function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.querySelector('.txtano')
  var res = document.querySelector('.res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('class', 'foto')
    img.style.borderRadius = '50%'
    img.style.height = '250px'
    img.style.width = '250px'
    img.style.objectFit = 'cover'
    if (fsex[0].checked) {
      gen = 'Homem'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'menino.jpg')
        //menino
      } else if (idade < 21) {
        img.setAttribute('src', 'homemj.jpg')
        //adolescente
      } else if (idade < 50) {
        img.setAttribute('src', 'homem.jpg')
        //adulto
      } else {
        img.setAttribute('src', 'idoso.jpg')
        //idoso
      }
    } else {
      gen = 'Mulher'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'menina.jpg')
        //menina
      } else if (idade < 21) {
        img.setAttribute('src', 'mulherj.jpg')
        //adolescente
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher.jpg')
        //adulta
      } else {
        img.setAttribute('src', 'idosa.jpg')
        //idosa
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
  }
}
