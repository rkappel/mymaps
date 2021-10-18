const ts = Date.now();
const binance_api_secret = "n1nJCmZ8C3H83Y0lVJocLtJ7UfdoJpkgjz71qvkolf0PI7wsxY6EKB1Y4TiUnc5A";
const binance_api_key = "jxeL8PWzKp4v5uhC7ZSTaxUemzCQmbK8riRuWG10I1mztIM4w3Z8ZAuF69izaGWN";

async function test(){
   let queryString = "type=MARGIN&timestamp="+ts;
   const signature = CryptoJS.HmacSHA256(queryString, binance_api_secret).toString();
//   const binance_url = 'https://api.binance.com/sapi/v1/accountSnapshot?'+queryString+'&signature='+signature;
   const binance_url = 'https://api.binance.com/sapi/v1/accountSnapshot?type=MARGIN&timestamp=1634550691035&signature=9fa527dc5b9d768f4c43194acf502840632a102bc99fed5778febccb8caa51a6';
    console.log(binance_url);

   const status = await (fetch(binance_url,
      { method: "GET",
        mode: 'cors',
        crossorigin: 'anonymous',
        headers: { 'Content-Type': 'application/json',
                   'Accept': '*/*',
                   'Accept-Encoding': 'gzip, deflate, br',
                   'X-MBX-APIKEY': "jxeL8PWzKp4v5uhC7ZSTaxUemzCQmbK8riRuWG10I1mztIM4w3Z8ZAuF69izaGWN",
                 }
      }
   )).catch((error) => {
        // Your error is here!
        console.log("My error: "+error);
      });

//   console.log(status);
   const data = await status.json();
   console.log(data);
};
