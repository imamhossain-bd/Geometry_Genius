

//...............Triangle Function __________________
document.getElementById("triangle").addEventListener('click', function(){
    const triangleBase = document.getElementById('triangleBase')
    const triangleBaseInput = parseFloat(triangleBase.value)
    const triangleHeight = document.getElementById('triangleHeight')
    const triangleHeightInput = parseFloat(triangleHeight.value)
    const triangleSpanArea = document.getElementById('triangleArea')

    if(isNaN(triangleBaseInput) || isNaN(triangleHeightInput)){
        alert("Please Insert Number")
        return
    }
    else{
        const area = 0.5 * triangleBaseInput * triangleHeightInput
    triangleSpanArea.innerText = parseFloat(area.toFixed(2))
    }
})

//...............Rectangle Function _______________________
document.getElementById('rectangle').addEventListener('click', function(){
    const rectangleWidth = document.getElementById('rectangleWidth')
    const rectangleWidthInput = parseFloat(rectangleWidth.value)
    const rectangleLength = document.getElementById('rectangleLength')
    const rectangleLengthInput = parseFloat(rectangleLength.value)
    const rectangleAreaSpan = document.getElementById('rectangleArea')

    if(isNaN(rectangleWidthInput) || isNaN(rectangleLengthInput)){
        alert("Please Insert Number")
        return
    }
    else{
        const area = rectangleWidthInput * rectangleLengthInput
        rectangleAreaSpan.innerText = parseFloat(area.toFixed(2))
    }
    
   
})

//..............Parallelogram Function _____________________
document.getElementById('parallelogram').addEventListener('click', function(){
    const parallelogramBase = document.getElementById('parallelogramBase')
    const parallelogramBaseInput = parseFloat(parallelogramBase.value)
    const parallelogramHeight = document.getElementById('parallelogramHeight')
    const parallelogramHeightInput = parseFloat(parallelogramHeight.value)

    if(isNaN(parallelogramBaseInput) || isNaN(parallelogramHeightInput)){
        alert("Please Insert Number")
    }
    else{
        const area = parallelogramBaseInput * parallelogramHeightInput
        const parallelogramArea = document.getElementById('parallelogramArea')
        parallelogramArea.innerText = parseFloat(area.toFixed(2))
    }
})

//........................Rhombus Function____________________________

document.getElementById("rhombus").addEventListener('click', function(){
    const rhombusD1 = document.getElementById("rhombusD1")
    const rhombusD1Input = parseFloat(rhombusD1.value)

    const rhombusD2 = document.getElementById('rhombusD2')
    const rhombusD2Input = parseFloat(rhombusD2.value)
    const rhombusArea = document.getElementById('rhombusArea')

    if(isNaN(rhombusD1Input) || isNaN(rhombusD2Input)){
        alert('Please Insert Number')
        return
    }
    else{
        const area = (rhombusD1Input * rhombusD2Input) / 2
        rhombusArea.innerText = parseFloat(area.toFixed(2))
    }

})


//.................pentagon Function______________________
document.getElementById('pentagon').addEventListener('click', function(){
    const pentagonPeri = document.getElementById('pentagonPeri')
    const pentagonPeriInput = parseFloat(pentagonPeri.value)
    const pentagonApo = document.getElementById('pentagonApo')
    const pentagonApoInput = parseFloat(pentagonApo.value)
    const pentagonArea = document.getElementById('pentagonArea')
    
    if(isNaN(pentagonPeriInput) || isNaN(pentagonApoInput)){
        alert('Please Insert Number')
        return
    }
    else{
        const area = (5/2) * pentagonPeriInput * pentagonApoInput
        pentagonArea.innerText = parseFloat(area.toFixed(2))
    }


})


//....................Ellipse Function_______________________
document.getElementById('ellipse').addEventListener('click', function(){
    const majorRadius = document.getElementById("majorRadius")
    const minorRadius = document.getElementById("minorRadius")

    const majorRadiusInput = parseFloat(majorRadius.value)
    const minorRadiusInput = parseFloat(minorRadius.value)
    const ellipseArea = document.getElementById("ellipseArea")

    if(isNaN(majorRadiusInput) || isNaN(minorRadiusInput)){
        alert("Please Insert Number")
        return
    }
    else{
        const area = 3.14 * majorRadiusInput * minorRadiusInput
        ellipseArea.innerText = parseFloat(area.toFixed(2))
    }
})
