const csvFilePath='./data.csv';
const csv=require('csvtojson');
const fs = require('fs');
csv()
.fromFile(csvFilePath)
.then((json)=>{
    let string="";
    for(let i=0;i<json.length;i++){
        let it=json[i];
        let headers=["no_consecutivo","no_control","nombre","calificacion"];
        for(let e=0;e<headers.length;e++){
            string+=headers[e]+" : "+it[headers[e]]+"\n";
        }
        string+="-------------------\n";
    }
    
    fs.writeFile("./archivo.txt", string, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Archivo creado");
    });
});