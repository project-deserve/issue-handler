call ncc build index.js --license licenses.txt

copy ".\dist\index.js"  ".\..\clinic-alpha-one\.github\actions\issue-handler\dist/index.js"

pause