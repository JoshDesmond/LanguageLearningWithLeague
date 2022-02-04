const qs = require("querystring");
const http = require("https");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

/*
 * Code originally sourced from https://rapidapi.com/
**/
const options = {
    "method": "POST",
    "hostname": "google-translate1.p.rapidapi.com",
    "port": null,
    "path": "/language/translate/v2",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": process.env.TRANSLATE_API_KEY,
        "useQueryString": true
    }
};

function translate(text) {

    return new Promise((resolve, reject) => {

        const req = http.request(options, (res) => {
            // res.setEncoding('utf16le');
            const chunks = [];
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
            res.on("end", function () {
                const body = Buffer.concat(chunks);
                resolve(body);
            });
            res.on("error", (err) => {
                reject(err);
            })
        });

        console.log(text);

        req.write(qs.stringify({ q: text, target: 'en', source: 'zh' }));
        req.end();
    });
}

const run = async function () {

    const championData = require("./data.json");
    const textList = [];
    for (let val of championData) {
        textList.push(val.name);
    }

    const textList1 = textList.slice(0, 99);
    const textList2 = textList.slice(99);

    let translationList = [];

    await translate(textList1).then((/** @type {Buffer} */ res) => {
        const resObject = JSON.parse(res.toString());
        console.log(resObject);
        translationList = translationList.concat(resObject.data.translations);
    });

    await translate(textList2).then((/** @type {Buffer} */ res) => {
        const resObject = JSON.parse(res.toString());
        translationList = translationList.concat(resObject.data.translations);
    });

    for (let [index, val] of translationList.entries()) {
        console.log(val.translatedText);
        championData[index].translation = val.translatedText;
    }

    console.log(championData);

    fs.writeFile("./data-with-translations.json", JSON.stringify(championData), function (err) {
        if (err) {
            return console.error(err);
        }

        console.log("The file was saved!");
    });

}

run();