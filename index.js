let count = 0
function increment(){
    count += 1
    document.getElementById("count-el").textContent = count
}

function save(){
    let countDown = count + "  "
    document.getElementById("save-el").textContent += countDown
} 

function reset(){
    count = 0
    document.getElementById("count-el").textContent = count
}
