let  Resume = {
    "Name":"A.Reshma",
    "image":"",
    "Gender":"Female",
    "location":{
      "Address":"No:28 sankara garden achipatti pollachi",
       "postalAddress":"Aachipati-642002",
       "city":"Coimbatore",
       "region":"Tamilnadu",
       "country":"India",
        },
      "contact":{
      "Telephone":"9003389293",
      "E-mail":"reshmaarullchelvan@gmail.com",
      },
   "Education details":{
        "Degree":"B-Tech IT Hindusthan Institute of Technology-2020",
       "School":" 12th -The Merit higher Secondary School-2016",
        "School":"10th - New Bharath Matriculation School-2013 ",
        },
        "skill":["Html","Css","js"],
    "certificate":"Security Challanges In Mobile AD-HOC Networks" ,
    "URL":"",
      }      
  
//for in loop: 
for(let key in Resume){
  console.log(Resume[key]);
 }


 //for loop:
 let skeys=Object.keys(Resume);
 let svalues = Object.values(Resume);
 console.log(skeys);
 console.log(svalues);
  
 for(let i=0; i < skeys.length;i++){
 console.log(Resume[`${skeys[i]}`]);
 console.log(Resume);
};

//for each:
skeys.forEach((value,index,accArr)=>{
console.log(`
${skeys}
object value : ${Resume[skeys]}`)
});



// // for of
for(key of skeys){
 console.log(key);
}
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                              
                    
  

                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 