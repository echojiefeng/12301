import axios from 'axios'

const req = axios.create({
  // baseURL: 'https://www.easy-mock.com/mock/5a7a600c1430f0224ebba9cd/example/'
  baseURL: 'http://12301.sy.hn/index.php/api/index'
})


export {req}
