
rm -rf node_modules
rm package-lock.json

npm i --no-audit --save react react-dom typescript @types/react @types/react-dom @types/node file:.. @fortawesome/free-solid-svg-icons

npm i --no-audit --save-dev react-scripts @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @babel/plugin-syntax-object-rest-spread

npm audit --omit=dev