
import React , {useState, useEffect} from 'react';
import api from './api';
import AppContext from './AppContext';
import Child from './Child';



function App() {
const	[data , setData] = useState([])
const 	[loading , setloading]= useState(false)
	const getData = async ()=>{
		setloading(true);
		const asyncData = await api();
		
		setData(asyncData.data.splice(0,5));
		setloading(false)
	}
	useEffect(()=>{
		getData();
	},[])
	
  return (
   <AppContext.Provider value={{loading, data}}>
	   <Child/>

   </AppContext.Provider>
  );
}

export default App;
