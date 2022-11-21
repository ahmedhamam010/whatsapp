import axios from '@axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchPendingQuestions(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        var url = `bank-questions/index/no`
        if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
        }
        axios
          .get(url, { params: queryParams })
          .then(response => {
            console.log('pending questions : ' , response)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchAnsweredQuestions(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        var url = `bank-questions/index/yes`
        if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
        }
        axios
          .get(url, { params: queryParams })
          .then(response => {
            console.log('pending questions : ' , response)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchCourses(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('courses', { params: queryParams })
          .then(response => {
            console.log(response.data)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`practicalTasks/${id}`)
          .then(response => {
            console.log("fetch category ",response)
            return resolve(response)
          })
          .catch(error => reject(error.response.data.errors))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        const headersObj = { 
          headers: 
            { 
              Accept: 'application/json', 'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Methods': 'POST,post',
            }
          
          }
        axios
          .post('practicalTasks', userData, headersObj)
          .then(response => resolve(response) )
          .catch(error => {
            reject(error)
          })
      
        
      })
    },
    updateUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'put',
          url: `practicalTasks/${userData.id}`,
          data: userData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          }
        })
        .then(response => resolve(response))
        .catch(error => reject(error.response.data.errors))
      })
    },

  },
}
