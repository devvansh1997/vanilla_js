const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  // get random number between 0 and 3

  let randomNum = Math.floor(Math.random() * colors.length)
  console.log(randomNum)
  color.textContent = colors[randomNum]
  document.body.style.backgroundColor = colors[randomNum]
})
