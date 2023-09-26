// API KEY: 45CMxw0DM/h7MK/ae7eW2g==EFWh2BNh5t7TaVDd
const button1 = document.querySelector('#button1')

button1.addEventListener('click', async() => {

let textInput1 = document.querySelector('#textInput1').value
let weaponsCost1 = document.querySelector('#cost1')


let response1 = await axios.get('https://valorant-api.com/v1/weapons')
console.log(response1)

weapons1 = response1.data.data

for (let i = 0; i < weapons1.length; i++) {
    if (textInput1 == weapons1[i].displayName) {
        weaponsCost1.innerHTML = `Weapon 1 Cost: ${weapons1[i].shopData.cost}`
 
        weaponSkins1 = weapons1[i].skins


        // for (let j = 0; j < weaponSkins1.length; j++){
        //     console.log(weaponSkins1[j].displayIcon)
        // }
    }
}

// Weapon Image data.data[i].displayIcon
// Display Name data.data[i].displayName
// Weapon Stats data.data[i].weaponStats
// Weapon Cost data.data[i].shopData.cost
// Weapon type data.data[i].shopData.category



})

// API KEY: 45CMxw0DM/h7MK/ae7eW2g==EFWh2BNh5t7TaVDd
const button2 = document.querySelector('#button2')

button2.addEventListener('click', async() => {

let textInput1 = document.querySelector('#textInput2').value
let weaponsCost2 = document.querySelector('#cost2')


let response2 = await axios.get('https://valorant-api.com/v1/weapons')
console.log(response2)

weapons2 = response2.data.data

for (let i = 0; i < weapons2.length; i++) {
    if (textInput1 == weapons2[i].displayName) {
        weaponsCost2.innerHTML = `Weapon 2 Cost: ${weapons2[i].shopData.cost}`


        weaponSkins2 = weapons2[i].skins


        // for (let j = 0; j < weaponSkins2.length; j++){
        //     console.log(weaponSkins2[j].displayIcon)
        // }
    }
}

// Weapon Image data.data[i].displayIcon
// Display Name data.data[i].displayName
// Weapon Stats data.data[i].weaponStats
// Weapon Cost data.data[i].shopData.cost
// Weapon type data.data[i].shopData.category



})
