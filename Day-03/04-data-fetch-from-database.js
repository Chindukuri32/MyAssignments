// 

function fetchDataFromDatabase () {
    let dataFetch=new Promise((resolved,rejected)=>{
    const data = true;
    console.log("Fetching the data from Database....");
    setTimeout (()=> {
    if(data){
        resolved("Data fetched Successfully!!!");
    }
	else{
        rejected("Data not Found!!!");
    }
    },3000)
	});
    dataFetch
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
	
    return dataFetch;
}
fetchDataFromDatabase();