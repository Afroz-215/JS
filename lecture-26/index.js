let h2 = document.querySelector('h2')
h2.innerText
console.log(h2.innerText)

console.log($('h2').text('hii'))
$('h2').css({
    color: 'blue',
    backgroundColor: 'yellow',
    border: '1px solid black'
})

$('button').click(() => {
    // console.log('heee')
    $('h2').fadeOut()
})

$('#fadeIn').click(() => {
    // console.log('heee')
    $('h2').fadeIn()
})