// API KEY: 45CMxw0DM/h7MK/ae7eW2g==EFWh2BNh5t7TaVDd
const button = document.querySelector('#button1')

button.addEventListener('click', async() => {




let response = await axios.get('https://valorant-api.com/v1/weapons')
console.log(response)











})

