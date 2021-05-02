import axios from 'axios'

const api =()=>{
	return axios.get('https://jsonplaceholder.typicode.com/posts')
}
export default api ; 