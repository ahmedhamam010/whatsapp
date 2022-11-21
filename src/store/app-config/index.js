import { $themeConfig } from '@themeConfig'
import getDomain from '@/helperFunctions/getDomain'

export default {
  namespaced: true,
  state: {
    adminListPerPage:10,
    userListPerPage:10,
    roleListPerPage:10,
    courseListPerPage:10,
    sectionListPerPage:10,
    lessonListPerPage:10,
    quizListPerPage:10,
    practicalTaskListPerPage:10,
    pendingTaskListPerPage:10,
    answeredTaskListPerPage:10,
    pendingRequestsConsultantListPerPage:10,
    rejectRequestsConsultantListPerPage:10,
    consultantListPerPage:10,
    requestAssistantList:10,
    consultantAssistantList:10,
    sessionListPerPage:10,
    fieldListPerPage:10,
    specialtyListPerPage:10,
    jobTitleListPerPage:10,
    categoryListPerPage:10,
    surveyListPerPage:10,
    adminBankQuestionListPerPage:10,
    userPendingBankQuestionListPerPage:10,
    userAnsweredBankQuestionListPerPage:10,
    certificateListPerPage:10,
    currencyListPerPage:10,
    personalityCategoryListPerPage:10,
    personalityTestListPerPage:10,
    sliderListPerPage:10,
    paymentTransactionListPerPage:10,
    TrackingSystemFieldsListPerPage:10,
    TrackingSystemListPerPage:10,
    TrackingSystemActivityListPerPage:10,
    TrackingSystemListInitiativePerPage:10,
    apiUrl : getDomain(),
    layout: {
      isRTL: $themeConfig.layout.isRTL,
      skin: localStorage.getItem('vuexy-skin') || $themeConfig.layout.skin,
      routerTransition: $themeConfig.layout.routerTransition,
      type: $themeConfig.layout.type,
      contentWidth: $themeConfig.layout.contentWidth,
      menu: {
        hidden: $themeConfig.layout.menu.hidden,
      },
      navbar: {
        type: $themeConfig.layout.navbar.type,
        backgroundColor: $themeConfig.layout.navbar.backgroundColor,
      },
      footer: {
        type: $themeConfig.layout.footer.type,
      },
    },
  },
  getters: {},
  mutations: {
    TOGGLE_RTL(state) {
      state.layout.isRTL = !state.layout.isRTL
      document.documentElement.setAttribute('dir', state.layout.isRTL ? 'rtl' : 'ltr')
    },
    UPDATE_SKIN(state, skin) {
      state.layout.skin = skin

      // Update value in localStorage
      localStorage.setItem('vuexy-skin', skin)

      // Update DOM for dark-layout
      if (skin === 'dark') document.body.classList.add('dark-layout')
      else if (document.body.className.match('dark-layout')) document.body.classList.remove('dark-layout')
    },
    UPDATE_ROUTER_TRANSITION(state, val) {
      state.layout.routerTransition = val
    },
    UPDATE_LAYOUT_TYPE(state, val) {
      state.layout.type = val
    },
    UPDATE_CONTENT_WIDTH(state, val) {
      state.layout.contentWidth = val
    },
    UPDATE_NAV_MENU_HIDDEN(state, val) {
      state.layout.menu.hidden = val
    },
    UPDATE_NAVBAR_CONFIG(state, obj) {
      Object.assign(state.layout.navbar, obj)
    },
    UPDATE_FOOTER_CONFIG(state, obj) {
      Object.assign(state.layout.footer, obj)
    },
  },
  actions: {},
}
