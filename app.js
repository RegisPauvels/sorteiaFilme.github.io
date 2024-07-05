async function sortear(){
    if(document.querySelector('.filme_info') != null){
        document.querySelector('.filme_info').innerHTML = ''
        
    }
    const filmesNome = [
        'Donnie Darko','Killer bean forever','Constantine (2005)','O exterminador do futuro 2','Mad Max Estrada da Furia',
        'Borat','O Ditador','Creed','Creed 2','Creed 3','Ilha do medo','Preda-me se for capaz','Um lugar silencioso','Efeito borboleta','O telefone preto',
        'O silencio dos inocentes', 'Anatomia de uma queda','Bar Doce lar ','Hotel Rwanda','O melhor lance','Julius Caesar ','Lamborghini: O homem por detrás da lenda',
        'Planeta dos Macacos: A Origem','Planeta dos Macacos: O Confronto','Planeta dos Macacos: A Guerra','O lobo de Wallstreet','Duna',
        'Duna 2','The Batman','Batman - Begins','Batman - The Dark Knight','Batman - The Dark Knight Rises','Psicopata Americano','Bastardos Inglórios',
        'Internet o filme','Corações de Ferro','O resgate do soldado Ryan','Blade Runner 2049','Blade Runner - O Caçador de Androides','Estômago','O homem que copiava'
    ]

    const filmeSource = [
        'images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg',
        'images/11.jpg','images/12.jpg','images/13.jpg','images/14.jpg','images/15.jpg','images/16.jpg','images/17.jpg','images/18.jpg','images/19.jpg','images/20.jpg','images/21.jpg',
        'images/22.jpg','images/23.jpg','images/24.jpg','images/25.jpg','images/26.jpg','images/27.jpg','images/28.jpg','images/29.jpg','images/30.jpg','images/31.jpg','images/32.jpg',
        'images/33.jpg','images/34.jpg','images/35.jpg','images/36.jpg','images/37.jpg','images/38.jpg','images/39.jpg','images/40.jpg','images/41.jpg'
    ]

    const numMin = Number(document.querySelector('#min').value) 

    const numMax = Number(document.querySelector('#max').value) 

    var result = 0

    for(let i = 0; i < 20; i++){
        const elementoValues = document.querySelector('.results_values') 
        elementoValues.innerHTML = ''
        
        result = Math.floor(Math.random() * (numMax - numMin  + 1)) + numMin
        const documento = document.createElement('div')
        documento.classList.add('result_value')
        documento.innerText = result
        elementoValues.append(documento)
        await sleep(20)
    }
    
        const filmeinfo = document.querySelector('.filme_info')
        filmeinfo.innerHTML =  `<h2>${filmesNome[(result-2)]}</h2>` + `<img src="${filmeSource[(result-2)]}">`
     
 
}

function sleep(tempo){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}
