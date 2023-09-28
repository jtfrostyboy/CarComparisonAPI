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

//Range 1
let rng1a = document.querySelector('#rng1a')
let headDmg1a = document.querySelector('#headDmg1a')
let bodyDmg1a = document.querySelector('#bodyDmg1a')
let legDmg1a = document.querySelector('#legDmg1a')

//Range 2
let rng1b = document.querySelector('#rng1b')
let headDmg1b = document.querySelector('#headDmg1b')
let bodyDmg1b = document.querySelector('#bodyDmg1b')
let legDmg1b = document.querySelector('#legDmg1b')

//Range 3
let rng1c = document.querySelector('#rng1c')
let headDmg1c = document.querySelector('#headDmg1c')
let bodyDmg1c = document.querySelector('#bodyDmg1c')
let legDmg1c = document.querySelector('#legDmg1c')








//2nd Weapon
let selection2 = document.querySelector('#weapon2-select').value
let weaponsCost2 = document.querySelector('#cost2')
let weaponsImg2 = document.querySelector('#image2')
let weaponsName2 = document.querySelector('.weapon2')
let wType2 = document.querySelector('#type2')
let wMag2 = document.querySelector('#magSize2')
let wFireRate2 = document.querySelector('#fireRate2')
let wReloadSpd2 = document.querySelector('#reloadSpd2')
let wDmgRng2 = document.querySelector('#dmgRng2')


//API Calls
let response1 = await axios.get('https://valorant-api.com/v1/weapons')
//console.log(response1)

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

        //DMG Range Stats
        rngArray = weapons1[i].weaponStats.damageRanges
        console.log(rngArray)

        if (rngArray[0] != null) {
            rng1a.innerHTML = `Range: ${rngArray[0].rangeStartMeters} - ${rngArray[0].rangeEndMeters}`
            headDmg1a.innerHTML = `Head ${rngArray[0].headDamage} Damage`
            bodyDmg1a.innerHTML = `Body ${rngArray[0].bodyDamage} Damage`
            legDmg1a.innerHTML =  `Leg ${rngArray[0].legDamage} Damage`
        } else {
            rng1a.innerHTML = ``
            headDmg1a.innerHTML = ``
            bodyDmg1a.innerHTML = ``
            legDmg1a.innerHTML =  ``
        }

        if (rngArray[1] != null) {
            rng1b.innerHTML = `Range: ${rngArray[1].rangeStartMeters} - ${rngArray[1].rangeEndMeters}`
            headDmg1b.innerHTML = `Head ${rngArray[1].headDamage} Damage`
            bodyDmg1b.innerHTML = `Body ${rngArray[1].bodyDamage} Damage`
            legDmg1b.innerHTML =  `Leg ${rngArray[1].legDamage} Damage`
        } else {
            rng1b.innerHTML = ``
            headDmg1b.innerHTML = ``
            bodyDmg1b.innerHTML = ``
            legDmg1b.innerHTML =  ``
        }

        if (rngArray[2] != null) {
            rng1c.innerHTML = `Range: ${rngArray[2].rangeStartMeters} - ${rngArray[2].rangeEndMeters}`
            headDmg1c.innerHTML = `Head ${rngArray[2].headDamage} Damage`
            bodyDmg1c.innerHTML = `Body ${rngArray[2].bodyDamage} Damage`
            legDmg1c.innerHTML =  `Leg ${rngArray[2].legDamage} Damage`
        }  else {
            rng1c.innerHTML = ``
            headDmg1c.innerHTML = ``
            bodyDmg1c.innerHTML = ``
            legDmg1c.innerHTML =  ``
        }



    }
}
let response2 = await axios.get('https://valorant-api.com/v1/weapons')
//console.log(response2)

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

        for (let j = 0; j < weapons2[i].weaponStats.damageRanges.length; j++) {
            //console.log(weapons2[i].weaponStats.damageRanges[j])
            wDmgRng2.innerHTML = `${weapons2[i].weaponStats.damageRanges[j]}`
        
            
        }



     
    }
}
// Weapon Image data.data[i].displayIcon
// Display Name data.data[i].displayName
// Weapon Stats data.data[i].weaponStats
// Weapon Cost data.data[i].shopData.cost
// Weapon type data.data[i].shopData.category


})

// for (let j = 0; j < weapons1[i].weaponStats.damageRanges.length; j++) {
//     console.log(weapons1[i].weaponStats.damageRanges[j])
//     wDmgRng1.append(" " + weapons1[i].weaponStats.damageRanges[j].rangeStartMeters + " - " + weapons1[i].weaponStats.damageRanges[j].rangeEndMeters + " ")
    
    
// }




