let btn = document.getElementById('btn')
let clickCount = 0
btn.onclick = () =>{
clickCount++
    btn.textContent = "Нажатий: " + clickCount;
}