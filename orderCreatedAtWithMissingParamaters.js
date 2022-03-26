const admin = require("firebase-admin");
const fs = require('fs');
const moment = require('moment');
const _ = require('underscore')

let ServiceAccountfileName = process.argv[2]
let collectionName = process.argv[3];
// let subCollection = process.argv[3];
let startDate = process.argv[4]
let endDate = process.argv[5]
let dcName = process.argv[6];
let fileName = process.argv[7]
let reOrders = []
// const serviceAccount = require("./BJPR/bjprServiceAccountKey.json");
const serviceAccount = require(ServiceAccountfileName);
// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ionic-firestore-dn.firebaseio.com"
});

let db = admin.firestore();
db.settings({
  timestampsInSnapshots: true
});

let data1 = [];
let data = [];
let allArticles = [];

data[collectionName] = {};
let allItems = db.collection('items')
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      data1.push({
        id: doc.id,
        // slugDate:doc.id,
        ...doc.data()
      });
    })
    data1.forEach((dt, k) => {
      dt.dcName = dcName;
    })
    allArticles = data1;
    console.log(data1.length);
    return data1;
  }).then(() => {
    let dateStart = moment(startDate, "YYYY-MM-DD")
      .startOf("day")
      .format("x"),
      dateEnd = moment(endDate, "YYYY-MM-DD").endOf("day").format("x"),
      sdate = moment(startDate).subtract(1, 'month').startOf('day').format('x')
    console.log(dateStart, dateEnd, sdate)
    let results = db.collection(collectionName)
      .where("createdAt", ">=", Number(sdate))
      .where("createdAt", "<=", Number(dateEnd))
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          data.push({
            id: doc.id,
            // slugDate:doc.id,
            ...doc.data()
          });
        })
        return data;
      }).then((data) => {
        let allOrderData = []
        let allO1;
        // data.forEach((dt, k) => {
        data = _.uniq(data, x => x.id);
        // console.log("after unique.length", allO1.length);
        console.log("fddf", data.length);
        let orderData = _.groupBy(data, function(o) {
          if (o.userId == "riYUPhjs8WZnSsBV5KOrordb2Gj1") {
            o.userId = "ipniycayJUUqh3EHiVnBT6ka65t2";
          }
          if (o.userId == "sjAbzAIyN7csJLTsKnUqeLyHwwB2") {
            o.userId = "fPulSKKKvWWC2Iz4f1dZmCjmmTd2";
          }
          if (o.userId == "Ebyu7Oc1X7d0kbZEFO4fGqak4W23") {
            o.userId = "FepovQRVR7Qj7jjPXqdytjvWvUR2";
          }
          if (o.userId == "CelcwSHEdHMzwMhNnffdkq2voBj2") {
            o.userId = "rWryLdeBtSSjX9u4v0pK9XBsrTz2";
          }
          if (o.userId == "uDstK1MrkMOT0FVbUCx4U86JsP92") {
            o.userId = "5bVOmMwh3XZE8BTOoR3TLbYFog92";
          }
          if (o.userId == "XhJm7dUiROYWmb3CgcrMnVbtRAo1") {
            o.userId = "XHUBL1LoIdRcqMnAkFcj8HLOfBP2";
          }
          if (o.userId == "fuhPwefcnrPJcwL0Iza0g1MFIQN2") {
            o.userId = "6Aa1aUEPitVQClYCe5KxCYh64o23";
          }
          if (o.userId == "AWQULgQmrvWKLc8eDXz0co7LgIg2") {
            o.userId = "m5RmmhoSAuO354xnXMrcI3Eno3A2";
          }
          if (o.userId == "eneHRR0Ba4U78iGt2w53VqXUlKQ2") {
            o.userId = "8jOXEw1bWmfXGL5U9cLDrHx7jn83";
          }
          if (o.userId == "nEZ3JxzXqSMuS188l39FwM6uhyH2") {
            o.userId = "0se6EFzP2wV2YOe03a7Tzcglzl03";
          }
          if (o.userId == "CmJovDdRtSflQVVX84Ur8QOwBxF3") {
            o.userId = "eTvpNSH0byg72hg7cwRTJ7tJq2E2";
          }
          if (o.userId == "oXxdSUzuChVu7uftgXGY5grKXND3") {
            o.userId = "1dQy1L0vW8TrB3qChThAHdnSIgq1";
          }
          if (o.userId == "W7maD5wNdjXp5i4E1AIQ8vrujkG2") {
            o.userId = "XHUBL1LoIdRcqMnAkFcj8HLOfBP2";
          }
          if (o.userId == "Q3nVxu2RlpZjKjT6v5iRwtnwgQj1") {
            o.userId = "XHUBL1LoIdRcqMnAkFcj8HLOfBP2";
          }
          if (o.userId == "znwT60iSahR8poquj3HbOJvw83n1") {
            o.userId = "UaBOoxiLRANtJ6wxJoxXHES4Fbv1";
          }
          if (o.userId == "EymYxva08eSmfHle5wMi6kc6lNt2") {
            o.userId = "qtlemPRnQmaGICvYZ2U7QOCOCSP2";
          }
          if (o.userId == "QfFPJBv3obSzCszMXyivaEvom1P2") {
            o.userId = "xcwJ8F792Bf3KVslahanvsJPlFM2";
          }
          if (o.userId == "SojsqxCy0XdG7Kgb53iz4s8z6Y92") {
            o.userId = "6ova2dVl8LYVGTvEjKgdkcYGTDk1";
          }
          if (o.userId == "eT7wDCXYyWOaMWc47DSmVeBs6A23") {
            o.userId = "2grvEPTVbHg99qduFOsyvsUxeGg2";
          }
          if (o.userId == "F4aS8AVsf2Y2bMyptFdtOEi6S4N2") {
            o.userId = "f0jdhDk8jGWU1vA6zxxDKkKSHmy1";
          }
          if (o.userId == "xHKIIyWAfyaRGD30HaZvGqMIJiR2") {
            o.userId = "OcrdTIeoyEOD6ddvXrgMeBDxCgl2";
          }

          let beginDate = moment(startDate, 'YYYY-MM-DD').startOf('day').format('x');
          let eDate = moment(endDate, 'YYYY-MM-DD').endOf('day').format('x')
          let invoiceDate = o.invoiceAt ? o.invoiceAt : moment(o.invoice, 'DD-MM-YYYY').format('x');
          // let invoiceDate = moment(o.invoice, 'DD-MM-YYYY').format('x');
          if (invoiceDate >= beginDate && invoiceDate <= endDate) {
            o.invoiceAt = invoiceDate;
            return o.invoice.split(" ")[0]
          }
          // let invoiceDate = moment(o.invoice, 'DD-MM-YYYY').format('x');
          // if (!o.invoiceAt) {
          //   o.invoiceAt = invoiceDate;
          // }
          // if (invoiceDate >= beginDate && invoiceDate <= eDate) {
          //   return o.invoice.split(" ")[0]
          // }
        })
        console.log(_.keys(orderData).length);
        delete orderData['undefined'];

        let allO = [];
        _.each(_.keys(orderData), function(invoiceDate) {
          allO = allO.concat(orderData[invoiceDate])
        })
        allO = _.reject(allO, {
          'status': 'pending'
        });
        console.log("before unique.length", allO.length);


        allO1 = allO.filter(function(element) {
          return element !== undefined;
        });

        _.each(allO1, function(k, index) {
          k.dcName = "YLK";
          _.each(k.items, function(ii) {
            let gstRate = getItemInfo(ii.id, 'gstRate', 'id') || getItemInfo(ii.name, 'gstRate', 'name');

            if (ii.gstRate != gstRate) {
              // console.log(" ***** ", ii.gstRate, gstRate);
            }
            // console.log(" ***** ", ii.gstRate, "gstRate");
            let cessRate = getItemInfo(ii.id, 'cessRate');
            ii.cessRate = cessRate || 0;
            let hsnCodeVal = getItemInfo(ii.id, 'hsnCode');
            ii.hsnCode = hsnCodeVal;
            ii['vaiations'] = getItemInfo(ii.id, 'variations');
            _.each(ii['vaiations'], function(variationList) {
              if (variationList.value == ii['variation']['value']) {
                ii['variation']['cessAmount'] = variationList.cessAmount || 0;
              }
            })
            delete ii['vaiations'];
            if (gstRate != "" && (Number(gstRate) != Number(ii.gstRate))) {
              ii.gstRate = gstRate;
            }
            if (ii.name.toLowerCase().includes('sugar')) {
              ii.gstRate = 5;
            }
          })
        })
        console.log("fdgdfg", allO1.length);
        reOrders = allO1
        // console.log("writeFile reOrders",reOrders.length);
        return reOrders;
      })
      .catch(error => {
        console.log(error);
      })


    results.then(dt => {

      // getSubCollection(dt).then(() => {
      // Write collection to JSON file
      // fs.writeFile("./BJPR/bjpr-firestore-export.json", JSON.stringify(data), function(err) {
      fs.writeFile(fileName, JSON.stringify(reOrders), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file is saved!");
      });
      // })
    })
  })
async function getSubCollection(dt) {
  for (let [key, value] of Object.entries([dt[collectionName]][0])) {
    if (subCollection !== undefined) {
      data[collectionName][key]['subCollection'] = {};
      await addSubCollection(key, data[collectionName][key]['subCollection']);
    }
  }
}

function addSubCollection(key, subData) {
  return new Promise(resolve => {
    db.collection(collectionName).doc(key).collection(subCollection).get()
      .then(snapshot => {
        snapshot.forEach(subDoc => {
          subData[subDoc.id] = subDoc.data();
          resolve('Added data');
        })
      })
  })
}

function getItemInfo(itemId, resVal, key) {
  // console.log("Items111", allArticles.length, allItems.length);

  let self = this;
  let keyType = key || 'id';
  if (keyType == 'id') {
    const result = _.groupBy(allArticles, keyType)[itemId];
    if (result && result.length) {
      // console.log("1", result[0][resVal]);
      return result[0][resVal]
    } else {
      return 0
    }
  } else {
    let rr = _.filter(allArticles, function(i) {
      if (customTrim(i[keyType]) == customTrim(itemId)) {
        // console.log("2", i);
        return i;
      }
    })
    if (rr && rr.length) {
      // console.log("3", rr[0][resVal], );
      return rr[0][resVal]
    } else {
      return 0
    }
  }
}

function customTrim(data) {
  let res = ""
  if (data && data.length) {
    res = data.replace(/[#!@#%^$&*,]/g, '').trim();
  }
  return res;
}
