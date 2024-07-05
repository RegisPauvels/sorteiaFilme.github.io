async function sortear(){

    const filmes = ['Constantine']

    const numMin = Number(document.querySelector('#min').value) 

    const numMax = Number(document.querySelector('#max').value) 

    for(let j = 0; j < 20; j++){

        const elemento = document.querySelector('.results_values') 
        elemento.innerHTML = ''
        
   
            const result = Math.floor(Math.random() * (numMax - numMin  + 1)) + numMin
            const documento = document.createElement('div')
            documento.classList.add('result_value')
            documento.innerText = result
            elemento.append(documento)

            const filmeinfo = document.createElement('div')
            filmeinfo.classList.add('filme_info')
            filmeinfo.innerHTML = filmes[0]
            elemento.append(filmeinfo)
     
       await sleep(20)
    }

 
}

function sleep(tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo)
    })
}