const KintoClient = require('kinto-http').default;
const btoa = require('btoa');
const nodefetch = require('node-fetch');
const _ = require('underscore');

//login credential
const kintoCredentials = 'admin:mortgagekart';
const secreString = btoa(kintoCredentials);

if(!globalThis.fetch){
    globalThis.fetch = nodefetch;
}

const remoteUrl = "http://localhost:8888/v1/";

const client = new KintoClient(remoteUrl,{
    headers: {
        Authorization: "Basic "+ secreString
    }
});


// const result = client.createBucket("blog");

// const result = client.bucket("blog").setData(
//     {   foo: "bar",
//         name:"gaurav",
        
//     });
// const result = client.bucket("blog").createCollection("posts");

// const result = client.bucket("blog").collection("posts")
//   .setData({preferedAuthor: "@chucknorris"});

// const {data} =  client.bucket("blog").listCollections();   


//getting a record by id

async function fun(){


    // const result = await client.bucket("blog").collection("posts")
    //     .createRecord({title: "My first post", content: "Hello World!"});

    // const result = await client.bucket("blog").collection("posts")
    // .getRecord("849a9adb-7755-472c-b998-f0d7d24a6218");

    // const updated = {
    //     id: "cb0f7b2b-e78f-41a8-afad-92a56f8c88db",
    //     title: "My first post, edited",
    //     content: "Hello World, again!"
    //   };
      
    //   const result = await client.bucket("blog").collection("posts")
    //     .updateRecord(updated);

    const result = await client.bucket("blog").collection("posts")
  .deleteRecord("849a9adb-7755-472c-b998-f0d7d24a6218");

    console.log(result);



}
fun()

// const result = await client.bucket("blog").collection("posts")
//   .getRecord("849a9adb-7755-472c-b998-f0d7d24a6218");

// const res = client.bucket("blog").data();



