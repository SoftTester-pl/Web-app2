
//binance

fetch(
  "https://api.binance.com/api/v3/exchangeInfo?symbol=ETHBTC",)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

let data = await fetch(
  "https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT",)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  });

setInterval(() => {
  document.getElementById("ETHUSDT_avg_price").innerHTML = Math.round(data.price) + " ETH/USDT";
}, 1000);


let data2 = await fetch(
    "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT",)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  
  setInterval(() => {
    document.getElementById("BTCUSDT_avg_price").innerHTML = Math.round(data2.price) + " BTC/USDT";
  }, 1000);

  let data3 = await fetch(
    "https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT",)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  
  setInterval(() => {
    document.getElementById("BNBUSDT_avg_price").innerHTML = Math.round(data3.price) + " BNB/USDT";
  }, 1000);


//coinmarketcap in progress

/*
let response = await fetch( "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=7107bfa7-645c-4f2e-a50e-0d386bd9f66c",{
   
    headers:{
          "CMC_PRO_API_KEY": "7107bfa7-645c-4f2e-a50e-0d386bd9f66c",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=7107bfa7-645c-4f2e-a50e-0d386bd9f66c",
          "Accept-Charset": "utf-8",
          "Accept-Encoding": "deflate, gzip",
          "Connection": "keep-alive",
          "Host": "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=7107bfa7-645c-4f2e-a50e-0d386bd9f66c",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
          
            }       
            
          })
          
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
  }) 
*/

let data4 = await fetch(
  "https://api.binance.com/api/v3/klines?symbol=BNBUSDT&interval=1d&limit=1",
  {method: "GET",})

  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  });

  let data5 = await fetch(
    "https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1d&limit=1",
    {method: "GET",})
  
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

    let data6 = await fetch(
      "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=1",
      {method: "GET",})
    
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });


//this is the first method of taking the data from the api and putting it into the html

let openTime = data4[0][0];
let open = data4[0][1];
let high = data4[0][2];
let low = data4[0][3];
let close = data4[0][4];
let volume = data4[0][5];
let closeTime = data4[0][6];
let quoteAssetVolume = data4[0][7];
let numberOfTrades = data4[0][8];
let takerBuyBaseAssetVolume = data4[0][9];
let takerBuyQuoteAssetVolume = data4[0][10];

//save response to variable and then show it in the html file with the id of the coin BNB_klines

let p0 = document.createElement("p");
p0.innerHTML = ' Open Time: ' + formatTime(openTime);
document.getElementById("BNB_klines").appendChild(p0);

let p6 = document.createElement("p");
p6.innerHTML = " Close Time: " + formatTime(closeTime) ;
document.getElementById("BNB_klines").appendChild(p6);

let p1 = document.createElement("p");
p1.innerHTML = " Open Price: " + Math.floor(open) + ('$');
document.getElementById("BNB_klines").appendChild(p1);

let p3 = document.createElement("p");
p3.innerHTML = " Low Price: " + Math.floor(low) + ('$');
document.getElementById("BNB_klines").appendChild(p3);

let p2 = document.createElement("p");
p2.innerHTML = " High Price: " + Math.floor(high) + ('$') ;
document.getElementById("BNB_klines").appendChild(p2);

let p4 = document.createElement("p");
p4.innerHTML = " Close Price: " + Math.floor(close) + ('$');
document.getElementById("BNB_klines").appendChild(p4);

let p5 = document.createElement("p");
p5.innerHTML = " Volume: " + Math.floor(volume) + ('$');
document.getElementById("BNB_klines").appendChild(p5);

let p7 = document.createElement("p");
p7.innerHTML = " Quote Asset Volume: " + Math.floor(quoteAssetVolume) + ('$');
document.getElementById("BNB_klines").appendChild(p7);

let p8 = document.createElement("p");
p8.innerHTML = " Number Of Trades: " + Math.floor(numberOfTrades);
document.getElementById("BNB_klines").appendChild(p8);
console.log(data4[0])

let p9 = document.createElement("p");
p9.innerHTML = " Taker Buy Base Asset Volume: " + Math.floor(takerBuyBaseAssetVolume) + ('$');
document.getElementById("BNB_klines").appendChild(p9);

let p10 = document.createElement("p");
p10.innerHTML = " Taker Buy Quote Asset Volume: " + Math.floor(takerBuyQuoteAssetVolume) + ('$');
document.getElementById("BNB_klines").appendChild(p10);


//function to format time to readable format from openTime and clsoeTime variable
function formatTime(time) {
  let date = new Date(time * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  return formattedTime;
}

//this is the second method of taking the data from the api and putting it into the html

const btcData = (data) => {
  data6.forEach(function(element) {
  })
  return data6;
}

btcData(data6)
{
    let p0 = document.createElement("p");
p0.innerHTML = ' Open Time: ' + formatTime(data6[0][0]);
document.getElementById("BTC_klines").appendChild(p0);

let p6 = document.createElement("p");
p6.innerHTML = " Close Time: " + formatTime(data6[0][6]); 
document.getElementById("BTC_klines").appendChild(p6);

let p1 = document.createElement("p");
p1.innerHTML = " Open Price: " + Math.floor(data6[0][1]) + ('$');
document.getElementById("BTC_klines").appendChild(p1);

let p3 = document.createElement("p");
p3.innerHTML = " Low Price: " + Math.floor(data6[0][3]) + ('$');
document.getElementById("BTC_klines").appendChild(p3);

let p2 = document.createElement("p");
p2.innerHTML = " High Price: " + Math.floor(data6[0][2]) + ('$') ;
document.getElementById("BTC_klines").appendChild(p2);

let p4 = document.createElement("p");
p4.innerHTML = " Close Price: " + Math.floor(data6[0][4]) + ('$');
document.getElementById("BTC_klines").appendChild(p4);

let p5 = document.createElement("p");
p5.innerHTML = " Volume: " + Math.floor(data6[0][5]) + ('$');
document.getElementById("BTC_klines").appendChild(p5);

let p7 = document.createElement("p");
p7.innerHTML = " Quote Asset Volume: " + Math.floor(data6[0][7]) + ('$');
document.getElementById("BTC_klines").appendChild(p7);

let p8 = document.createElement("p");
p8.innerHTML = " Number Of Trades: " + Math.floor(data6[0][8]);
document.getElementById("BTC_klines").appendChild(p8);


let p9 = document.createElement("p");
p9.innerHTML = " Taker Buy Base Asset Volume: " + Math.floor(data6[0][9]) + ('$');
document.getElementById("BTC_klines").appendChild(p9);

let p10 = document.createElement("p");
p10.innerHTML = " Taker Buy Quote Asset Volume: " + Math.floor(data6[0][10]) + ('$');
document.getElementById("BTC_klines").appendChild(p10);

  function formatTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }

}

const ethData = (data) => {
  data5.forEach(function(element) {
  })
  return data5;
}

ethData(data5)
{
    let p0 = document.createElement("p");
p0.innerHTML = ' Open Time: ' + formatTime(data5[0][0]);
document.getElementById("ETH_klines").appendChild(p0);

let p6 = document.createElement("p");
p6.innerHTML = " Close Time: " + formatTime(data5[0][6]); 
document.getElementById("ETH_klines").appendChild(p6);

let p1 = document.createElement("p");
p1.innerHTML = " Open Price: " + Math.floor(data5[0][1]) + ('$');
document.getElementById("ETH_klines").appendChild(p1);

let p3 = document.createElement("p");
p3.innerHTML = " Low Price: " + Math.floor(data5[0][3]) + ('$');
document.getElementById("ETH_klines").appendChild(p3);

let p2 = document.createElement("p");
p2.innerHTML = " High Price: " + Math.floor(data5[0][2]) + ('$') ;
document.getElementById("ETH_klines").appendChild(p2);

let p4 = document.createElement("p");
p4.innerHTML = " Close Price: " + Math.floor(data5[0][4]) + ('$');
document.getElementById("ETH_klines").appendChild(p4);

let p5 = document.createElement("p");
p5.innerHTML = " Volume: " + Math.floor(data5[0][5]) + ('$');
document.getElementById("ETH_klines").appendChild(p5);

let p7 = document.createElement("p");
p7.innerHTML = " Quote Asset Volume: " + Math.floor(data5[0][7]) + ('$');
document.getElementById("ETH_klines").appendChild(p7);

let p8 = document.createElement("p");
p8.innerHTML = " Number Of Trades: " + Math.floor(data5[0][8]);
document.getElementById("ETH_klines").appendChild(p8);


let p9 = document.createElement("p");
p9.innerHTML = " Taker Buy Base Asset Volume: " + Math.floor(data5[0][9]) + ('$');
document.getElementById("ETH_klines").appendChild(p9);

let p10 = document.createElement("p");
p10.innerHTML = " Taker Buy Quote Asset Volume: " + Math.floor(data5[0][10]) + ('$');
document.getElementById("ETH_klines").appendChild(p10);

  function formatTime(time) {
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }

}

let bnb_btn = document.querySelector("#bnb_btn");
let BNB_klines = document.querySelector("#BNB_klines");
let btc_btn = document.querySelector("#btc_btn");
let BTC_klines = document.querySelector("#BTC_klines");
let eth_btn = document.querySelector("#eth_btn");
let ETH_klines = document.querySelector("#ETH_klines");


bnb_btn.addEventListener('click', (e) =>  {
 if(e.target.matches('#bnb_btn') === true){
  BNB_klines.style.display = "block";
  BTC_klines.style.display = "none";
  ETH_klines.style.display = "none";
    }
});

btc_btn.addEventListener('click', (e) =>  {
  if(e.target.matches('#btc_btn') === true){
   BTC_klines.style.display = "block";
   ETH_klines.style.display = "none";
   BNB_klines.style.display = "none";
     }
 });

 eth_btn.addEventListener('click', (e) =>  {
  if(e.target.matches('#eth_btn') === true){
   ETH_klines.style.display = "block";
   BNB_klines.style.display = "none";
   BTC_klines.style.display = "none";
     }
 });

