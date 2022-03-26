
#!/bin/bash
echo "Hello World"

# echo "enter the dc name "
#
# read dcName

# exec node order.js "./service_file/"${dcName}"/ServiceAccountKey.json" admins ${dcName} "./${dcName}/admin/All_data.json"
# exec node order.js "./service_file/"${dcName}"/ServiceAccountKey.json" orders  "2022-01-01" "2022-01-16" ${dcName} "./${dcName}/orders/All_data.json"

echo "enter the json file you want to dump"

read jsonFile

echo "enter the collection name"

read collectionName

#myFirstDatabase
# exec  mongoimport --uri mongodb+srv://firstHope:firstHope@cluster0.hntix.mongodb.net/myFirstDatabase --collection ${collectionName} --type JSON --file ${jsonFile} --jsonArray

#myFirstHope
# exec  mongoimport --uri mongodb+srv://firstHope:firstHope@cluster0.hntix.mongodb.net/firstHope --collection ${collectionName} --type JSON --file ${jsonFile} --jsonArray
