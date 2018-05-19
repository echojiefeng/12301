import axios from 'axios'

const req = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5affbfd1c20d695226bef990/example/'
})

export {req}
