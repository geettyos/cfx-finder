if exist node_modules\axios\ (
  cls
  title cfx-finder ^| GEETTYOS#0001
  node main.js
) else (
  npm i axios
  npm audit fix
  cls
  title cfx-finder ^| GEETTYOS#0001
  node main.js
)