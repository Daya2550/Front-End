/*
    *A Promise is used to handle asynchronous operations in JavaScript.
    *resolve are object that can showing complition done
    *reject are object for the faild or errer condtion 
    * must be invoked the method 
*/


const promise = new Promise(
    (resolve, reject) => {

        // code

    }
);


/*
  *than() are used for what to done when it is complited task  and also used the chaning of the than()
  *catch() are used when somthing went wrong or opration faild 
  *finally() are uued like same it can be run alwayes 
*/
 new Promise(
    (resolve, reject) => {

       let statues=true;
       if(statues){
        resolve("ok");
       }
       else{
        reject("not Done");
       }
    }
).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data)
}).finally(()=>{
    console.log("Werk Done")
})

/*
   *It can be using the chaining of than 
   *result can be one to anather in this way passed
   
*/
new Promise(
    (resolve, reject) => {

       let statues=true;
       if(statues){
        resolve("10");
       }
       else{
        reject("not Done");
       }
    }
).then((data)=>{
    return 10+ Number(data)
}).then((data)=>{
    return 10+ Number(data)
}).then((data)=>{
    return 10+ Number(data)
}).then((data)=>{
    return 10+ Number(data)
}).then((data)=>{
    return 10+ Number(data)
}).then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
}).finally(()=>{
    console.log("Werk Done")
})


