const jokeURL ="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config={headers:{Accept :"application/json"}};
let resp =await axios.get(jokeURL,config);
console.log(resp.data.joke);

    } catch(err){
console.log(err);
    }
}

































// let jsonRes ='{"message":"Not Found","code":404}';

// let ValidRes = JSON.parse(jsonRes);

// ValidRes.message.key = "Okay found";
// console.log(ValidRes.message);

// let student ={
//     name:'Pradeep',
//     marks:81.40
// }


// let url='https://catfact.ninja/fact';
// async function getFacts(){
//         let resp1 = await axios.get(url);
//         return resp1.data.fact;
// };

// let btn=document.querySelector('button');

// btn.addEventListener('click',async()=>{
// let fact = await getFacts();
// let p=document.querySelector('#para');
// p.innerText= fact;
// })


// fetch(url)
// .then((res)=>{
// // console.log(`This is the Response =`,res);
// return res.json();
// // res.json().then((meraData)=>{console.log(meraData)});
// }).then((merdata)=>{
// console.log(`This is  data1 = `,merdata.fact);
// return fetch(url);
// }).then((res2)=>{
// return res2.json();
// }).then((data2)=>{
// console.log(`This is data 2 = `,data2.fact);
// })
// .catch((err)=>{
// console.log(`This is the error`,err);
// });
