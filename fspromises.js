const fs=require("fs");
const path=require("path");
const fn="fspromises.txt";
const filepath=path.join(__dirname,fn);

const file=__dirname;
fs.promises
.readdir(file)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));


  const filen=__dirname; //current directory
  fs.promises.readdir(filen).then((data)=> console.log(data))
  .catch((err)=>console.error(err) );

  fs.promises.writeFile(filepath,"This is the initial data",'utf-8')
  .then(console.log("File Created Succesfully"))
  .catch((err)=>console.log(err));


  fs.promises.readFile(filepath,'utf-8')
  .then((data)=>console.log(data))
  .catch((err)=>console.log("Error reading file"));

  fs.promises.appendFile(filepath,"This is updated data",'utf-8')
  .then(console.log("File updated successfully"))
  .catch((err)=> console.log(err));
  