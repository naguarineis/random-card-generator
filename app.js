window.onload = () => {
    let number = document.querySelector(".center-symbol")
    let numberArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
    let randomNumber = Math.floor(Math.random()*numberArray.length)

    number.innerHTML = numberArray[randomNumber]

    let topSymbol = document.querySelector(".top-symbol")
    let bottomSymbol = document.querySelector(".bottom-symbol")
    let symbolArray = ["♦", "♥", "♠", "♣"]
    let randomSymbol = Math.floor(Math.random()*symbolArray.length)

    topSymbol.innerHTML = symbolArray[randomSymbol]
    bottomSymbol.innerHTML = symbolArray[randomSymbol]

    if( symbolArray[randomSymbol] === "♦" || symbolArray[randomSymbol] === "♥" ) {
        topSymbol.style.color = "red"
        bottomSymbol.style.color = "red"
    }
}