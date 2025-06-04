
let radio = document.querySelector('.manual-btn');
let cont = 1;

document.getElementById('radio01').checked = true; // primeiro botão inicia com 'check'

// função para definir a trocar de imagens no tempo "X"
setInterval(() => {
    proximaImg()
}, 3000 )


// selecionando a imagem a cada troca
function proximaImg() {
    cont++

    if(cont > 3) {
        cont = 1
    }

    document.getElementById('radio0' + cont).checked = true;
}