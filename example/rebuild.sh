
rm -rf node_modules
rm package-lock.json

npm i --save react react-dom react-scripts typescript @types/react @types/react-dom @types/node file:.. @fortawesome/free-solid-svg-icons

npm i --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @babel/plugin-syntax-object-rest-spread