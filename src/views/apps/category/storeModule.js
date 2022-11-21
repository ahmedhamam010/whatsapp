import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get(`categories`, { params: queryParams })
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
          .get(`categories/${id}`)
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
          .post('categories', userData, headersObj)
          .then(response => resolve(response) )
          .catch(error => {
            reject(error.response.data.errors)
          })
      
        
      })
    },
    updateUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'put',
          url: `categories/${userData.id}`,
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
