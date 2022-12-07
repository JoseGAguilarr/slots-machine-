const icons = [
    { name: 'cherry', emoji: '🍒' },
    { name: 'watermelon', emoji: '🍉' },
    { name: 'lemon', emoji: '🍋' },
    { name: 'diamond', emoji: '💎' },
    { name: 'grapes', emoji: '🍇' },
    { name: 'pear', emoji: '🍐' },
    { name: 'pizza', emoji: '🍕' },
    { name: 'burger', emoji: '🍔' },
    { name: 'candy', emoji: '🍬' }
];

const slot1Wrp = document.querySelector('.slot1')
const slot2Wrp = document.querySelector('.slot2')
const slot3Wrp = document.querySelector('.slot3')
const button1El = document.querySelector('.button1')
const winner = document.querySelector('.results')


function getSlots() {
    const randNum = Math.floor(Math.random() * icons.length)
    return icons[randNum]
}

function checkWinner(slot1, slot2, slot3) {
    if (slot1.name == slot2.name && slot2.name == slot3.name) {
        return true
    } else {
        return false
    }
}

button1El.addEventListener('click', function () {
    const slot1 = getSlots()
    const slot2 = getSlots()
    const slot3 = getSlots()
    const isWinner = checkWinner(slot1, slot2, slot3)
    slot1Wrp.innerText = slot1.emoji
    slot2Wrp.innerText = slot2.emoji
    slot3Wrp.innerText = slot3.emoji
    if (isWinner) {
        winner.innerText = 'You Win'
    } else {
        winner.innerText = 'Try Again'
    }
})




