import Vue from 'vue'

// axios
import axios from 'axios'
import getDomain from '@/helperFunctions/getDomain'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: getDomain(),
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
