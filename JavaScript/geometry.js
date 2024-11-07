

//...............Triangle Function __________________
document.getElementById("triangle").addEventListener('click', function(){
    const triangleBase = document.getElementById('triangleBase')
    const triangleBaseInput = parseFloat(triangleBase.value)

    const triangleHeight = document.getElementById('triangleHeight')
    const triangleHeightInput = parseFloat(triangleHeight.value)

    const area = 0.5 * triangleBaseInput * triangleHeightInput
    const triangleSpanArea = document.getElementById('triangleArea')
    triangleSpanArea.innerText = area
})

//...............Rectangle Function _______________________
document.getElementById('rectangle').addEventListener('click', function(){
    const rectangleWidth = document.getElementById('rectangleWidth')
    const rectangleWidthInput = parseFloat(rectangleWidth.value)
    
    const rectangleLength = document.getElementById('rectangleLength')
    const rectangleLengthInput = parseFloat(rectangleLength.value)

    const area = rectangleWidthInput * rectangleLengthInput
    const rectangleAreaSpan = document.getElementById('rectangleArea')
    rectangleAreaSpan.innerText = area
})

//..............Parallelogram Function _____________________
document.getElementById('parallelogram').addEventListener('click', function(){
    const parallelogramBase = document.getElementById('parallelogramBase')
    const parallelogramBaseInput = parseFloat(parallelogramBase.value)

    const parallelogramHeight = document.getElementById('parallelogramHeight')
    const parallelogramHeightInput = parseFloat(parallelogramHeight.value)

    const area = parallelogramBaseInput * parallelogramHeightInput
    const parallelogramArea = document.getElementById('parallelogramArea')
    parallelogramArea.innerText = parseFloat(area.toFixed(2))
})