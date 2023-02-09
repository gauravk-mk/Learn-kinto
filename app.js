const http = require('http');
const net = require('net')
const { URL } = require('url')
const btoa = require('btoa');


const kintoCredentials = 'admin:mortgagekart';
const secreString = btoa(kintoCredentials);
// const remoteUrl = "http://localhost:8888/v1/";

const option = {
    port: 8888,
    host: '127.0.0.1',
    path:'/v1/buckets/blog/collections/articles/records/968f65f9-a81c-4670-803f-88293e055677',
    headers:{
        'Authorization': "Basic "+ secreString
    }
}

let request = http.get(option, (res)=>{

    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;

      }
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
// 
const auth =  request.getHeader('Authorization')

console.log(auth);


//post article1 and records

// const option1 = {
//     method:'POST',
//     port: 8888,
//     host: '127.0.0.1',
//     path:'/v1/buckets/blog/collections/articles/records/',
//     headers:{
//         'Authorization': "Basic "+ secreString
//     }
// }

// console.log(option1);

// const jsondata = {
//     "data": {title: "My first article", content: "Using node http!"}
// }

// let req = http.request(option1, (res)=>{

//     // if (res.statusCode !== 200) {
//     //     console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
//     //     res.resume();
//     //     return;
//     // }
//     console.log(`STATUS: ${res.statusCode}`);
//     // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     console.log("im here");

//     res.on('data',(chunk)=>{
//         console.log(`BODY:${chunk}`);
//     });

//     res.on('close', () => {
//     console.log('done');
//     })

// });

// req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
//   });

// req.write(JSON.stringify(jsondata))
// req.end();


// //update record of blog/article
// const option2 = {
//     method:'PUT',
//     port: 8888,
//     host: '127.0.0.1',
//     path:'/v1/buckets/blog/collections/articles/records/968f65f9-a81c-4670-803f-88293e055677',
//     headers:{
//         'Authorization': "Basic "+ secreString
//     }
// }

// console.log(option2);

// const updatedData = {
//     "data": {title: "My second article", content: "Using node http!"}
// }

// const req = http.request(option2,(res)=>{

//     console.log(`STATUS: ${res.statusCode}`);
//     res.on('data',(chunk)=>{
//                 console.log(`BODY:${chunk}`);
//             });
        
//     res.on('close', () => {
//     console.log('done');
//     })

// })
// req.write(JSON.stringify(updatedData));
// req.end()
























// // const result = request.createBucket("new");

// // console.log(result);    



// // async function fun(){

// //     const res = await request.bucket("blog").collection("posts")
// //     .getRecord("849a9adb-7755-472c-b998-f0d7d24a6218");

// //     // const updated = {
// //     //     id: "cb0f7b2b-e78f-41a8-afad-92a56f8c88db",
// //     //     title: "My first post, edited",
// //     //     content: "Hello World, again!"
// //     //   };
      
// //     //   const result = await client.bucket("blog").collection("posts")
// //     //     .updateRecord(updated);

// // //     const result = await client.bucket("blog").collection("posts")
// // //   .deleteRecord("849a9adb-7755-472c-b998-f0d7d24a6218");

// //     console.log(res);

// // }
// // fun()

