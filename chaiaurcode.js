const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('#results'))


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;


    }
 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid height ${weight}`;
    }

    else {
       const BMI =  (weight / ((height * height)/10000)).toFixed(2)
       //show the result
    results.innerHTML = `<span>${BMI}<span>`

       if(BMI<18.6){
        console.log("Under weight");

       }
       else if(BMI > 18.6 && BMI < 24.9){
        console.log("Normal Weight");
        
       }

       else if(BMI> 24.9){
        console.log("Over Weight");
       }
        }

        
});
