// Run this at https://101.qq.com/#/hero to generate the data list of champions

const champs = document.querySelectorAll("#app > div > div.app-main > div > div > ul > .list-item")
let champsJson = [];
let x = 0;
for (const c of champs) {
    let name = c.firstElementChild.innerText;
    name = name.replace(/\s/g, '');
    const img = `https://game.gtimg.cn/images/lol/act/img/skinloading/${x+1}000.jpg`
    champsJson[x] = {"name": name, 
                    "image": img};
    x++;
}
champsJson;
// Copy the output and paste into data.json