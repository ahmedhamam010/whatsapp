import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        var url = `courses`
        if( JSON.parse(localStorage.getItem('userData')).consultant_status ){
         url += `?user_id=${JSON.parse(localStorage.getItem('userData')).id}` 
        }
        axios
          .get(url, { params: queryParams })
          .then(response => {
            console.log('course_url : ' , url)
            console.log(response.data)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`courses/${id}`)
          .then(response => {
            console.log("fetch category ",response.data.course.image_path)
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
          .post('courses', userData, headersObj)
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
          url: `courses/${userData.id}`,
          data: userData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          }
        })
        .then(response => resolve(response))
        .catch(error => reject(error.response.data.errors))
      })
    },
    fetchCategories(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('categories', { params: queryParams })
          .then(response => {
            console.log(response.data)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },

  },
}
