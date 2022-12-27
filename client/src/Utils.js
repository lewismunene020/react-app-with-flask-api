 const  SERVER_URL = 'http://127.0.0.1:5000/api';



 function fetchData(url ,callBack){	
    fetch(url)
       .then((response)=>response.json())
       .then((json)=>{
        
         callBack(json.data);   
       });
    
    
    
    }



export {SERVER_URL , fetchData}




