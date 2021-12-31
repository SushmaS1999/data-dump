
#!/bin/bash
echo "Hello World"

echo "enter the dc name "

read dcName

exec node order.js "./service_file/"${dcName}"/ServiceAccountKey.json" categories  "2021-10-01" "2021-12-22" ${dcName} "./procurement/categories/${dcName}/All_data.json"
