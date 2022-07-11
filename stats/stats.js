const Moralis = require("moralis/node");
const fs = require("fs");

const ServerURL = "https://ndgc4rqck3jt.usemoralis.com:2053/server";
const AppID = "v8f8fej8R8CTF83IUjR1t8X5gjkLDvORJY0ZFzKv";

const options = {
    chain: "bsc",
    address: "0x92E53E51A088Af8D6D3e596C6C0036fb5871935c"
};

async function start()
{
    try{
        await Moralis.start({ serverUrl: ServerURL, appId: AppID }).then(KO8NFTs());
    } catch(error){
        console.error(error);

    }
    
}

const KO8NFTs = async () => {await Moralis.Web3API.account.getNFTs(options).then(async (theDatas)=>{
    try{
        fs.writeFile('data.json',JSON.stringify(theDatas.result),()=>{
            try{
                console.log("success")
            }catch(error){
                console.error(error);
            }
        });
        console.log("done!");
    }
    catch(error){
        console.error(error);
    }
});}

start();
