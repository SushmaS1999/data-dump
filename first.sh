
#!/bin/bash
echo "enter the dc name "

read dcName

# exec node order.js "./service_file/"${dcName}"/ServiceAccountKey.json" admins ${dcName} "./${dcName}/admin/All_data.json"
# exec node order.js "./service_file/"${dcName}"/ServiceAccountKey.json" orders  "2022-01-01" "2022-01-16" ${dcName} "./${dcName}/orders/All_data.json"

# echo "enter the path of the service.json file"
#
# read serviceFile

echo "enter the collection name"

read collectionName

echo "enter the start Date in YYYY-MM-DD format"

read startDate

echo "enter the endDate in YYYY-MM-DD format"

read endDate

echo "enter the destination directory"

read destinationDirectory

# echo "enter the destination file"
#
# read destination
if [ ! -d "./"${destinationDirectory} ]
then
# else
     mkdir ${destinationDirectory}
fi
# exec node order.js "./service_file/"${dcName}"/ServiceAccountKey.json" ${collectionName} ${startDate} ${endDate} ${dcName} "./${destinationDirectory}/${collectionName}_${startDate}_${endDate}.json"
# exec node customers.js "./service_file/"${dcName}"/ServiceAccountKey.json" ${collectionName}  ${startDate} ${endDate} ${dcName} ./${destinationDirectory}"/items/"${collectionName}_${startDate}_${endDate}1.json
# echo -ne '>>>>>>>>>>>>>>>>>>>>>>>>>>>>[100%]\r'
# exec node items.js "./service_file/"${dcName}"/ServiceAccountKey.json" ${collectionName} ${dcName} "./${destinationDirectory}/${collectionName}.json"
exec node order1.js "./service_file/"${dcName}"/ServiceAccountKey.json" ${collectionName} ${startDate} ${endDate} ${dcName} "./shilpa/${collectionName}_${startDate}_${endDate}.json"
