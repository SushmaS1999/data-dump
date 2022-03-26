const admin = require("firebase-admin");
const fs = require('fs');
const moment = require('moment');
var _ = require('underscore');
let ServiceAccountfileName = process.argv[2]
let collectionName = process.argv[3];
// let subCollection = process.argv[3];
let startDate = process.argv[4]
let endDate = process.argv[5]
let dcName = process.argv[6];
let fileName = process.argv[7]
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

let data = [];
data[collectionName] = {};
// console.log("fh", startDate, endDate);
let dateStart = moment(startDate, "YYYY-MM-DD")
  .startOf("day")
  .format("x"),
  dateEnd = moment(endDate, "YYYY-MM-DD").endOf("day").format("x");
// console.log(typeof dateStart, typeof dateEnd, ServiceAccountfileName, collectionName, fileName);
// let dateStart= startDate,
//   dateEnd =enDate;
let results = db.collection(collectionName)
  // .where("timeStamp", "<=", "1630434599999")

  // order
  // .where("createdAt", ">=", parseInt(dateStart))
  // .where("createdAt", "<=", parseInt(dateEnd))
  // // PROCUREMENT
  .where("created_on", ">=", dateStart)
  .where("created_on", "<=", dateEnd)
  .orderBy('created_on', 'asc')
  .get()
  .then(snapshot => {

    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        // slugDate:doc.id,
        ...doc.data()

      });

    })
    // })
    // .then((res) => {
    let unwantedRoute;
    // if (dcName == 'YLK') {
    //   unwantedRoute = ["Shivalli", "KM Doddi", "Mandya Local Rout",
    //     "NIdagatta",
    //     "koppa",
    //     "Basaralu",
    //     "Malavalli",
    //     "Kirugavalu",
    //     "Bannuru",
    //     "Besagarahalli",
    //     "Kesthuru",
    //     "Kadukotthanahalli",
    //     "Halaguru",
    //     "Kokkare Belluru",
    //     "Delet Customer",
    //     "Delet customer",
    //     "K M Doddi main"
    //   ];
    // }
    // if (dcName == 'MYS') {
    //   unwantedRoute = ["XYZ Route", "Route 1 - Piriyapattana", "Hunasur to Anagodu Route",
    //     "Mysore local",
    //     "ROUTE 1"
    //   ];
    // }
    // _.each(unwantedRoute, function(routeName) {
    //   data = _.reject(data, {
    //     'route': routeName
    //   })
    // })


    // return res;





    // })
    // .then((res) => {
    // let dataa = res;
    _.each(data, function(data, k) {
      data.dcName = dcName;
      // let dd;
      // if (dcName = "YLK") {
      //   dd = "001"
      // } else if (dcName = "MDY") {
      //   dd = "002"
      //
      // } else if (dcName = "CBP") {
      //   dd = "003"
      //
      // } else if (dcName = "RMG") {
      //   dd = "005"
      //
      // } else if (dcName = "MYS") {
      //   dd = "006"
      //
      // } else if (dcName = "KLR") {
      //   dd = "007"
      //
      // } else if (dcName = "MDG") {
      //   dd = "008"
      //
      // } else if (dcName = "GDS") {
      //   dd = "009"
      //
      // } else if (dcName = "BGK") {
      //   dd = "010"
      //
      // } else if (dcName = "HBL") {
      //   dd = "002"
      //
      // } else if (dcName = "HSP") {
      //   dd = "011"
      //
      // } else if (dcName = "ANP") {
      //   dd = "011"
      //
      // } else if (dcName = "HVR") {
      //   dd = "011"
      //
      // } else if (dcName = "DRG") {
      //   dd = "011"
      //
      // } else if (dcName = "BLGM") {
      //   dd = "011"
      //
      // } else if (dcName = "KDG") {
      //   dd = "011"
      //
      // } else if (dcName = "BJPR") {
      //   dd = "015"
      //
      // } else if (dcName = "HMN") {
      //   dd = "015"
      //
      // } else if (dcName = "MLG") {
      //   dd = "010"
      //
      // } else if (dcName = "KRGR") {
      //   dd = "010"
      //
      // } else if (dcName = "SMG") {
      //   dd = "001"
      //
      // } else if (dcName = "MGL") {
      //   dd = "002"
      //
      // } else if (dcName = "SNR") {
      //   dd = "021"
      //
      // } else if (dcName = "CMG") {
      //   dd = "011"
      //
      // }
      data['customer_code'] = "024" + "0000" + (k + 1);

    })
    // data['customer_code'] = "015" + "0000" + (Number(k) + 1);
  // })
console.log(data.length);
fs.writeFile(fileName, JSON.stringify(data), function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
return data;

})

.catch(error => {
  console.log(error);
})

results.then(dt => {
  // getSubCollection(dt).then(() => {
  // Write collection to JSON file
  // fs.writeFile("./BJPR/bjpr-firestore-export.json", JSON.stringify(data), function(err) {
  fs.writeFile(fileName, JSON.stringify(data), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  // })
})

async function getSubCollection(dt) {
  for (let [key, value] of Object.entries([dt[collectionName]][0])) {
    if (subCollection !== undefined) {
      data[collectionName][key]['subCollection'] = {};
      await addSubCollection(key, data[collectionName][key]['subCollection']);
    }
  }
}
//
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
