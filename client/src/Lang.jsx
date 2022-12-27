import {SERVER_URL , fetchData} from './Utils'
import {useState , useEffect} from 'react'



const Lang=()=>{
    const [languages  , setLanguages]  =  useState(undefined);


    useEffect(()=>{
        fetchData(SERVER_URL+"/languages" ,setLanguages)
        /*  let url = SERVER_URL+"/languages";
    
        fetch(url)
        .then((response)=>response.json())
        .then(json=>{
        setLanguages(json.data)
            console.log(json.data)
            
        }).catch((error)=>{
            alert(error);
        });*/
    
            
        },[]);

    
       return ( <header className="App-header">
                <h3> Programming Languages Learnt</h3>
                {languages ? (
                <ul>
                    {languages.map((value)=>{
                    return  <li>{value.name}</li>;
                    })}

                </ul>
                ): (
                <p>No languages found</p>
                )}
        </header>
       );

}

export default Lang;