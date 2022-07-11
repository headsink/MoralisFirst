const Moralis = require("moralis/node");
const fs = require("fs");

const ServerURL = "https://ndgc4rqck3jt.usemoralis.com:2053/server";
const AppID = "v8f8fej8R8CTF83IUjR1t8X5gjkLDvORJY0ZFzKv";

const options = {};

await Moralis.start({ serverUrl: ServerURL, appId: AppID });

const KO8NFTs = async () => {await Moralis.Web3API.account.getNFTs(options).then(async (theDatas)=>{
    try{
        fs.writeFile('data.json',JSON.stringify(theDatas.result))
    }
    catch{}
});}

KO8NFTs();