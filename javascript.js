const pBTN = document.querySelector('.pBTN');
pBTN.addEventListener('click', () => {
    playerSelection = (`button[id = "${pBTN}"]`)
    console.log(playerSelection)
})