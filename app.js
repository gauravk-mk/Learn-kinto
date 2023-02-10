const http = require('http');
const btoa = require('btoa');
const prompt = require('prompt-sync')();

const kintoCredentials = 'admin:mortgagekart';
const secreString = btoa(kintoCredentials);
// const remoteUrl = "http://localhost:8888/v1/";


var options = {
    port: 8888,
    host: '127.0.0.1',
    path:'/v1/buckets/blog/collections/articles/records',
    headers:{
        'Authorization': "Basic "+ secreString
    }
}

function createClient(){

    const client = http.request(options,(res)=>{

        let data = '';
        console.log(data);

        res.on('data', (chunk) => {
            data += chunk;
            console.log(data);
        });

        res.on('close', () => {

        console.log('Retrieved all data');
        console.log(JSON.parse(data));

        });
    });

    return client;

}

// read data GET record
function readRecords(){

    options.method='GET';
    console.log("This is option",options);

    client = createClient();
        
}

//post article1 and records
//********* */

function postArticle(){

    const jsondata = {
        "data": {title: "My fifth article", content: "Using node http!"}
    }

    options.method = 'POST';
    client=createClient();

    client.write(JSON.stringify(jsondata))
}

// //update record of blog/article

function updateRecord(){

    const updatedData = {
        "data": {title: "My fifth updated article"}
    }
    options.method='PUT';
    options.path = options.path.concat("/46c580c7-7e7e-4b04-8513-44b34750f660");
    console.log(options.path);
    client=createClient();
    client.write(JSON.stringify(updatedData));
    
}

// delete record

function deleteArticle(){

    options.method='DELETE';
    options.path = options.path.concat("/46c580c7-7e7e-4b04-8513-44b34750f660");
    console.log(options.path);
    client=createClient();
    
}


//Functions

console.log("1.Create\n2.Read\n3.Update\n4.Delete");
var option = prompt("Select operation to perform ");

console.log(option);
switch(option){

    case "1":
        console.log("Creating article using json provided in code");
        postArticle();
        break;

    case "2":
        console.log("Read");
        readRecords();
        break;

    case "3":
        console.log("Update");
        updateRecord();
        break;

    case "4":
        console.log("Delete");
        deleteArticle();
        break;
}

client.end()