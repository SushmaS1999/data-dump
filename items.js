const admin = require("firebase-admin");
const fs = require('fs');
const moment = require('moment');
var _ = require('underscore');
let ServiceAccountfileName = process.argv[2]
let collectionName = process.argv[3];
let dcName = process.argv[4];
let fileName = process.argv[5]
const serviceAccount = require(ServiceAccountfileName);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ionic-firestore-dn.firebaseio.com"
});

let db = admin.firestore();
db.settings({
  timestampsInSnapshots: true
});

let data = [];
data[collectionName] = {};

let results = db.collection(collectionName)
  .get()
  .then(snapshot => {

    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()

      });

    })

    _.each(data, function(data, k) {
      data.dcName = dcName;
    })
    console.log(data.length);
    fs.writeFile(fileName, JSON.stringify(data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file is saved!");
    });
    return data;

  })

  .catch(error => {
    console.log(error);
  })

results.then(dt => {
  fs.writeFile(fileName, JSON.stringify(data), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });

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
