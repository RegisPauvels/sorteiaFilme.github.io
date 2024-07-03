async function sortear(){

    const numSorteios = Number(document.querySelector('#qtd').value)

    const numMin = Number(document.querySelector('#min').value) 

    const numMax = Number(document.querySelector('#max').value) 

    for(let j = 0; j < 20; j++){

        const elemento = document.querySelector('.results_values') 
        elemento.innerHTML = ''
        
        for(let i = 0; i < numSorteios; i++){
            const result = Math.floor(Math.random() * (numMax - numMin  + 1)) + numMin
            const documento = document.createElement('div')
            documento.classList.add('result_value')
            documento.innerText = result
            elemento.append(documento)
        }
       await sleep(20)
    }

 
}

function sleep(tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo)
    })
}