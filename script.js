// API KEY: 45CMxw0DM/h7MK/ae7eW2g==EFWh2BNh5t7TaVDd
const button1 = document.querySelector('#button1')

let select1 = document.querySelector('#weapon1-select')
let select2 = document.querySelector('#weapon2-select')

function getWeapon1Data() {
    axios.get('https://valorant-api.com/v1/weapons').then(
        (response) => {
            let result = response.data.data
            for (let i = 0; i < result.length; i++) {
                let opt = result[i].displayName;                
                let el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select1.appendChild(el);
            }
        })
    }

    function getWeapon2Data() {
        axios.get('https://valorant-api.com/v1/weapons').then(
            (response) => {
                let result = response.data.data
                for (let i = 0; i < result.length; i++) {
                    let opt = result[i].displayName;
                    let el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    select2.appendChild(el);
                }
            })
        }



    getWeapon1Data()
    getWeapon2Data()
    

button1.addEventListener('click', async() => {

//1st Weapon
let selection1 = document.querySelector('#weapon1-select').value
let weaponsCost1 = document.querySelector('#cost1')
let weaponsImg1 = document.querySelector('#image1')
let weaponsName1 = document.querySelector('.weapon1')
let wType1 = document.querySelector('#type1')
let wMag1 = document.querySelector('#magSize1')
let wFireRate1 = document.querySelector('#fireRate1')
let wReloadSpd1 = document.querySelector('#reloadSpd1')

//2nd Weapon
let selection2 = document.querySelector('#weapon2-select').value
let weaponsCost2 = document.querySelector('#cost2')
let weaponsImg2 = document.querySelector('#image2')
let weaponsName2 = document.querySelector('.weapon2')
let wType2 = document.querySelector('#type2')
let wMag2 = document.querySelector('#magSize2')
let wFireRate2 = document.querySelector('#fireRate2')
let wReloadSpd2 = document.querySelector('#reloadSpd2')

//API Calls
let response1 = await axios.get('https://valorant-api.com/v1/weapons')
console.log(response1)

weapons1 = response1.data.data

for (let i = 0; i < weapons1.length; i++) {
    if (selection1 == weapons1[i].displayName) {
        weaponsCost1.innerHTML = `Cost: ${weapons1[i].shopData.cost}`
        weaponsImg1.src = weapons1[i].displayIcon
        weaponsName1.innerHTML = `${weapons1[i].displayName}`
        wType1.innerHTML = `Category: ${weapons1[i].shopData.category}`
        wMag1.innerHTML = `Ammo: ${weapons1[i].weaponStats.magazineSize} Rounds`
        wFireRate1.innerHTML = `Fire Rate: ${weapons1[i].weaponStats.fireRate}`
        wReloadSpd1.innerHTML = `Reload Speed: ${weapons1[i].weaponStats.reloadTimeSeconds} seconds`








    }
}
let response2 = await axios.get('https://valorant-api.com/v1/weapons')
console.log(response2)

weapons2 = response2.data.data

for (let i = 0; i < weapons2.length; i++) {
    if (selection2 == weapons2[i].displayName) {
        weaponsCost2.innerHTML = `Cost: ${weapons2[i].shopData.cost}`
        weaponsImg2.src = weapons2[i].displayIcon
        weaponsName2.innerHTML = `${weapons2[i].displayName}`
        wType2.innerHTML = `Category: ${weapons2[i].shopData.category}`
        wMag2.innerHTML = `Ammo: ${weapons2[i].weaponStats.magazineSize} Rounds`
        wFireRate2.innerHTML = `Fire Rate: ${weapons2[i].weaponStats.fireRate}`
        wReloadSpd2.innerHTML = `Reload Speed: ${weapons2[i].weaponStats.reloadTimeSeconds} seconds`





     
    }
}
// Weapon Image data.data[i].displayIcon
// Display Name data.data[i].displayName
// Weapon Stats data.data[i].weaponStats
// Weapon Cost data.data[i].shopData.cost
// Weapon type data.data[i].shopData.category


})






