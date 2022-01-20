// Run this at https://101.qq.com/#/hero to generate the data list of champions

const champs = document.querySelectorAll("#app > div > div.app-main > div > div > ul > .list-item")
let champsJson = [];
let x = 0;
for (const c of champs) {
    let el = c.firstElementChild;
    let name = el.innerText;
    name = name.replace(/\s/g, '');
    const image = el.querySelector('img').src;
    champsJson[x] = {"name": name, 
                    "image": image};
    x++;
}
champsJson;
// Copy the output and paste into data.json