import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchPendingList(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('consultationInfos/requests?status=pending', { params: queryParams })
          .then(response => {
            console.log('consultaiio list  ' , response)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchAcceptedList(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('consultationInfos/requests?status=accepted', { params: queryParams })
          .then(response => {
            console.log('consultaiio list  ' , response)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
    fetchRjectedList(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('consultationInfos/requests?status=rejected', { params: queryParams })
          .then(response => {
            console.log('consultaiio list  ' , response)
            return resolve(response)
          })
          .catch(error => reject(error))
      })
    },
   
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`lessons/${id}`)
          .then(response => {
            console.log("fetch category ",response)
            return resolve(response)
          })
          .catch(error => reject(error.response.data.errors))
      })
    },
    updateUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'put',
          url: `edit/lessons/${userData.id}`,
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
