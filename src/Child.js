import React , {useContext} from 'react';

import AppContext from './AppContext';



const Child = (props) => {
	const context = useContext(AppContext);
	console.log(context.data,context.loading)

	return ( 
	<div>
		{context.loading ? <p>loading data is happen ....</p> : context.data.map(item=><p>{item.title}</p>)}

	</div> );
}
 
export default Child;