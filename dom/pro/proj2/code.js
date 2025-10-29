const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)  //parseint use to convert string to int
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
   

    if(height==='' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please valid ${height} `
    }
    // results.innerHTML = `${height}`
    else if(weight==='' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please valid ${weight} `
    }
    // results.innerHTML = `${weight}`
    else{
      const bmi =  (weight / ((height*weight)/10000)).toFixed(2)
      results.innerHTML = `<span>${bmi}</span>`
    
    }

   


})