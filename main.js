// Function to round numbers to 2 dp
function round(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

// Main (Submit) function
function submit() {

    // Gets user input from index.html
    const userInput = {
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        heightOption: document.getElementById('heightOption').value,
        weightOption: document.getElementById('weightOption').value,
    }

    // Different mesurments and their conversion rate
    const options = {
        heightOption: ['M', 'CM', 'FT', 'IN'],
        weightOption: ['KG', 'LB', 'ST'],
        heightOptionConversion: [1, 100, 3.281, 39.37], // M, CM, FT, IN
        weightOptionConversion: [1, 2.205, 6.35], // KG, LB, ST
    }

    // Converted height/weight into KG
    let converted = {
        height: 0,
        weight: 0,
    }

    // For loop to filter out different mesurments and convert all of them into M
    for(let i = 0; i < options.heightOption.length; i++) {
        if(userInput.heightOption === options.heightOption[i]) {
            converted.height = userInput.height / options.heightOptionConversion[i]
            console.log('Height in M', converted.height)
        }
    }

    // For loop to filter out different mesurments and convert all of them into KG
    for(let i = 0; i < options.weightOption.length; i++) {

        // Added if stement to change LBS conversion from * to /
        if(userInput.weightOption === options.weightOption[1]) {
            converted.weight = userInput.weight / options.weightOptionConversion[1]
            console.log('Weight in KG', converted.weight)
        }
        else if(userInput.weightOption === options.weightOption[i]) {
            converted.weight = userInput.weight * options.weightOptionConversion[i]
            console.log('Weight in KG', converted.weight)
        }
    }

    // Converts weight/height to BMI and adds weightStatus
    let data = {
        bmi: converted.weight / Math.pow(converted.height, 2),
        weightStatus: '',
    }

    // IF statements to find out the weight status
    if(data.bmi > 30) {
        data.weightStatus = 'obese'
    }
    else if(data.bmi > 25) { 
        data.weightStatus = 'overweight'
    }
    else if(data.bmi > 18.5) {
        data.weightStatus = 'normal'
    }
    else if(data.bmi < 18.5) {
        data.weightStatus = 'underweight'
    }

    // Rounds final BMI to 2 DP
    data.bmi = round(data.bmi)

    // Returns BMI and Weight status to inde.html
    document.getElementById('output').innerHTML=`Your BMI is: ${data.bmi} and your weight status is ${data.weightStatus}.`
}