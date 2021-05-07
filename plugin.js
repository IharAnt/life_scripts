let userName = 'Admin'

function sleep(ms) {
    const start = new Date().getTime();
    const end = start + ms;

    console.log('before sleep')
    while (new Date().getTime() < end) {
    }
    console.log('after sleep')
}

window.document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded')
})

sleep(7000)

function printUserName() {
    console.log(userName)
}
