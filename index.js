
//binance

fetch(
  "https://api.binance.com/api/v3/exchangeInfo?symbol=ETHBTC",)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

  //ETH CURRENT AVERAGE PRICE
  let wsEth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
  let stockPriceElementEth = document.getElementById('ETHUSDT_avg_price');
  let lastPrice = null;
 
  wsEth.onopen = () => {
    wsEth.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      let price = parseFloat(stockObject.p).toFixed(2);
      stockPriceElementEth.innerText = price + " ETH/USDT";
      stockPriceElementEth.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
      lastPrice = price;
    }
  }

  //BTC CURRENT AVERAGE PRICE
  let wsBtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
  let stockPriceElementBtc = document.getElementById('BTCUSDT_avg_price');
  let lastPriceBtc = null;
 
  wsBtc.onopen = () => {
    wsBtc.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      let price = parseFloat(stockObject.p).toFixed(2);
      stockPriceElementBtc.innerText = price + " BTC/USDT";
      stockPriceElementBtc.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
      lastPrice = price;
    }
  }

  //BNB CURRENT AVERAGE PRICE

  let wsBnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
  let stockPriceElementBnb = document.getElementById('BNBUSDT_avg_price');
  let lastPriceBnb = null;
 
  wsBnb.onopen = () => {
    wsBnb.onmessage = (event) => {
      let stockObject = JSON.parse(event.data);
      let price = parseFloat(stockObject.p).toFixed(2);
      stockPriceElementBnb.innerText = price + " BNB/USDT";
      stockPriceElementBnb.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
      lastPrice = price;
    }
  }

//coinmarketcap in progress

/*
import {apiKey} from './key.js';

request( "GET","https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=" + apiKey.key)
.then((r1) => {
  console.log(response)
}).catch()

function request(method, url) {
   return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr.response);
          } else {
              reject(xhr.statusText);
          }
      };
      xhr.onerror = () => {
          reject(xhr.statusText);
      };
      xhr.send();
  });
}
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
