const display = document.getElementById("display");

const inputValue = (value) => {
    display.value += value
}

const deleteValue = () => {
    display.value = display.value.slice(0, -1);
}

const computeValue = () => {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}

const resetValue = () => {
    display.value = ""
}