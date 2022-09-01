const buttonCalc =  document.getElementById('button-calc')
const gFly = document.getElementById('gFly')

buttonCalc.addEventListener('click', () => {
    const proDays = document.getElementById('userInput').value
    gFly.innerHTML = greenFly(proDays)
})


function greenFly(number) {
    const mature = [1]
    const children = []

    const sumArray = array1 => array1.reduce((a, b) => a + b, 0)
    const greenFlyMigration = () => {
        mature.push(children.shift())
        children.push(sumArray(mature) * 8)
    }

    for (let i = 0; i < number; i++) {
        if (i < 7) children.push(8)
        else greenFlyMigration()
    }

    return sumArray(mature) + sumArray(children)
}

console.log(greenFly(9))