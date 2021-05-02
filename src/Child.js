import React , {useContext} from 'react';

import AppContext from './AppContext';



const Child = () => {
	const context = useContext(AppContext);

	return ( 
	<div>
		{!context.loading ? <p>loading data is happen ....</p> : context.data.map(item=><p>{item.title}</p>)}

	</div> );
}
 
export default Child;