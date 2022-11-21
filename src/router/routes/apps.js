export default [

  // *===============================================---*
  // *--------- categories ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/categories/list',
    name: 'apps-categories-list',
    component: () => import('@/views/apps/category/list/List.vue'),
    
  },
  {
    path: '/apps/categories/add',
    name: 'apps-categories-add',
    component: () => import('@/views/apps/category/list/AddForm.vue'),
    
  },
  {
    path: '/apps/categories/view/:id',
    name: 'apps-categories-view',
    component: () => import('@/views/apps/category/view/View.vue'),
    
  },
  {
    path: '/apps/categories/edit/:id',
    name: 'apps-categories-edit',
    component: () => import('@/views/apps/category/edit/Edit.vue'),
    
  },
  //
  {
    path: '/apps/calendar',
    name: 'apps-calendar',
    component: () => import('@/views/apps/calendar/Calendar.vue'),
  },

  // *===============================================---*
  // *--------- Courses ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/courses/list',
    name: 'apps-courses-list',
    component: () => import('@/views/apps/course/list/List.vue'),
  },
  {
    path: '/apps/courses/add',
    name: 'apps-courses-add',
    component: () => import('@/views/apps/course/list/AddForm.vue'),
  },
  {
    path: '/apps/courses/addSection/:courseTitle/:courseId',
    name: 'apps-courses-add-section',
    component: () => import('@/views/apps/section/list/AddSectionForm.vue'),
  },
  {
    path: '/apps/courses/view/:id',
    name: 'apps-courses-view',
    component: () => import('@/views/apps/course/view/View.vue'),
  },
  {
    path: '/apps/courses/edit/:id',
    name: 'apps-courses-edit',
    component: () => import('@/views/apps/course/edit/Edit.vue'),
  },
  //
  

  // *===============================================---*
  // *--------- Section ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/sections/list',
    name: 'apps-sections-list',
    component: () => import('@/views/apps/section/list/List.vue'),
  },
  {
    path: '/apps/sections/add',
    name: 'apps-sections-add',
    component: () => import('@/views/apps/section/list/AddForm.vue'),
  },
  {
    path: '/apps/sections/addLesson/:courseTitle/:courseId/:sectionTitle/:sectionId/:coursePrivacy/:courseType',
    name: 'apps-sections-add-lesson',
    component: () => import('@/views/apps/lesson/list/AddLessonForm.vue'),
  },
  {
    path: '/apps/quiz/section/add/:courseId/:id',
    name: 'apps-quizzes-add-section',
    component: () => import('@/views/apps/section/list/AddQuizForm.vue'),
  },
  {
    path: '/apps/quiz/section/edit/:id',
    name: 'apps-quizzes-edit-section',
    component: () => import('@/views/apps/section/edit/EditQuizForm.vue'),
  },
  {
    path: '/apps/quiz/section/view/:id',
    name: 'apps-quizzes-view-section',
    component: () => import('@/views/apps/section/view/ViewQuizForm.vue'),
  },
  {
    path: '/apps/sections/view/:id',
    name: 'apps-sections-view',
    component: () => import('@/views/apps/section/view/View.vue'),
  },
  {
    path: '/apps/sections/edit/:id',
    name: 'apps-sections-edit',
    component: () => import('@/views/apps/section/edit/Edit.vue'),
  },
  {
    path: '/apps/sections/edit/from/course/:id',
    name: 'apps-sections-edit-from-course',
    component: () => import('@/views/apps/section/edit/Edit.vue'),
  },
  //


  // *===============================================---*
  // *--------- lessons ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/lessons/list',
    name: 'apps-lessons-list',
    component: () => import('@/views/apps/lesson/list/List.vue'),
  },
  {
    path: '/apps/lessons/add',
    name: 'apps-lessons-add',
    component: () => import('@/views/apps/lesson/list/AddForm.vue'),
  },
  {
    path: '/apps/lessons/view/:id',
    name: 'apps-lessons-view',
    component: () => import('@/views/apps/lesson/view/View.vue'),
  },
  {
    path: '/apps/lessons/edit/:id',
    name: 'apps-lessons-edit',
    component: () => import('@/views/apps/lesson/edit/Edit.vue'),
  },
  {
    path: '/apps/lessons/edit/from/course/:id',
    name: 'apps-lessons-edit-from-course',
    component: () => import('@/views/apps/lesson/edit/Edit.vue'),
  },



  // Quizzes
  {
    path: '/apps/quiz/list',
    name: 'apps-quizzes-list',
    component: () => import('@/views/apps/quiz/list/List.vue'),
  },

  {
    path: '/apps/quizzes/view/:id',
    name: 'apps-quizzes-view',
    component: () => import('@/views/apps/quiz/view/View.vue'),
  },

  {
    path: '/apps/quiz/add/',
    name: 'apps-quizzes-add',
    component: () => import('@/views/apps/quiz/list/AddForm.vue'),
  },
  {
    path: '/apps/quiz/lesson/add/:id',
    name: 'apps-quizzes-add-lesson',
    component: () => import('@/views/apps/lesson/list/AddQuizForm.vue'),
  },
  {
    path: '/apps/quiz/edit/:id',
    name: 'apps-quizzes-edit',
    component: () => import('@/views/apps/quiz/edit/EditForm.vue'),
  },


  // *===============================================---*
  // *--------- questionnaires ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/questionnaires/list',
    name: 'apps-questionnaires-list',
    component: () => import('@/views/apps/questionnaire/list/List.vue'),
    
  },
  {
    path: '/apps/questionnaires/add',
    name: 'apps-questionnaires-add',
    component: () => import('@/views/apps/questionnaire/list/AddForm.vue'),
    
  },
  {
    path: '/apps/questionnaires/view/:id',
    name: 'apps-questionnaires-view',
    component: () => import('@/views/apps/questionnaire/view/View.vue'),
    
  },
  {
    path: '/apps/questionnaires/edit/:id',
    name: 'apps-questionnaires-edit',
    component: () => import('@/views/apps/questionnaire/edit/Edit.vue'),
    
  },

  // *===============================================---*
  // *--------- practical Tasks ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/practicalTasks/list',
    name: 'apps-practical-tasks-list',
    component: () => import('@/views/apps/practical-task/list/List.vue'),
  },
  {
    path: '/apps/pending/practicalTasks/list',
    name: 'apps-pending-practical-tasks-list',
    component: () => import('@/views/apps/practical-task/list/PendingList.vue'),
  },
  {
    path: '/apps/pendingPracticalTasks/view/:id/:status',
    name: 'apps-pending-practical-tasks-view',
    component: () => import('@/views/apps/practical-task/view/TaskUsersView.vue'),
  },
  {
    path: '/apps/notpendingPracticalTasks/view/:id/:status',
    name: 'apps-not-pending-practical-tasks-view',
    component: () => import('@/views/apps/practical-task/view/TaskUsersView.vue'),
  },
  {
    path: '/apps/answered/practicalTasks/list',
    name: 'apps-asnwered-practical-tasks-list',
    component: () => import('@/views/apps/practical-task/list/AnsweredList.vue'),
  },
  
  {
    path: '/apps/practicalTasks/add',
    name: 'apps-practicalTasks-add',
    component: () => import('@/views/apps/practical-task/list/AddForm.vue'),
  },
  {
    path: '/apps/practicalTasks/addFromCourse/:courseTitle/:courseId',
    name: 'apps-practicalTasks-add-from-course',
    component: () => import('@/views/apps/practical-task/list/AddFormFromCourse.vue'),
  },
  {
    path: '/apps/practicalTasks/view/:id',
    name: 'apps-practical-tasks-view',
    component: () => import('@/views/apps/practical-task/view/View.vue'),
  },
  {
    path: '/apps/practicalTasks/edit/:id',
    name: 'apps-practical-tasks-edit',
    component: () => import('@/views/apps/practical-task/edit/Edit.vue'),
  },
  {
    path: '/apps/practicalTasks/edit/from/course/:id',
    name: 'apps-practical-tasks-edit-from-course',
    component: () => import('@/views/apps/practical-task/edit/Edit.vue'),
  },
  {
    path: '/apps/practicalTasks/addFromSection/:courseTitle/:courseId/:sectionTitle/:sectionId/:coursePrivacy',
    name: 'apps-practicalTasks-add-from-section',
    component: () => import('@/views/apps/practical-task/list/AddFormFromSection.vue'),
  },

  // *===============================================---*
  // *--------- Bank Questions ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/baankQuestions/adminList',
    name: 'apps-bank-questions-admin-list',
    component: () => import('@/views/apps/bank-questions/list/AdminList.vue'),
  },

  {
    path: '/apps/baankQuestions/edit/:id/:redirect',
    name: 'apps-bank-questions-admin-edit',
    component: () => import('@/views/apps/bank-questions/edit/EditQuestion.vue'),
  },

  {
    path: '/apps/baankQuestions/viw/:id',
    name: 'apps-bank-questions-admin-view',
    component: () => import('@/views/apps/bank-questions/view/ViewQuestion.vue'),
  },

  {
    path: '/apps/baankQuestions/add',
    name: 'apps-bank-questions-add',
    component: () => import('@/views/apps/bank-questions/list/Add.vue'),
  },

  {
    path: '/apps/baankQuestions/pendingList',
    name: 'apps-pending-bank-questions-list',
    component: () => import('@/views/apps/bank-questions/list/PendingList.vue'),
  },

  {
    path: '/apps/baankQuestions/answeredList',
    name: 'apps-answered-bank-questions-list',
    component: () => import('@/views/apps/bank-questions/list/AnsweredList.vue'),
  },
  {
    path: '/apps/baankQuestions/reply/:id',
    name: 'apps-bank-questions-reply',
    component: () => import('@/views/apps/bank-questions/list/ReplyForm.vue'),
  },

  {
    path: '/apps/baankQuestions/reply/details/:id',
    name: 'apps-bank-questions-reply-details',
    component: () => import('@/views/apps/bank-questions/list/ReplyDetails.vue'),
  },

  // *===============================================---*
  // *--------- Certificates ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/certificates/list',
    name: 'apps-certificates-list',
    component: () => import('@/views/apps/certificate/list/List.vue'),
    
  },

  {
    path: '/apps/certificates/add',
    name: 'apps-certificates-add',
    component: () => import('@/views/apps/certificate/list/AddForm.vue'),
    
  },

  {
    path: '/apps/certificates/edit/:id',
    name: 'apps-certificates-edit',
    component: () => import('@/views/apps/certificate/edit/EditForm.vue'),
    
  },

  {
    path: '/apps/certificates/view/:id',
    name: 'apps-certificates-view',
    component: () => import('@/views/apps/certificate/view/View.vue'),
    
  },

  // *===============================================---*
  // *--------- Personality analysis -------------------------------*
  // *===============================================---*

  {
    path: '/apps/assesment/add/',
    name: 'apps-personality-add', 
    component: () => import('@/views/apps/personality/list/AddForm.vue'),
    
  },

  {
    path: '/apps/assesment/list/',
    name: 'apps-personality-list', 
    component: () => import('@/views/apps/personality/list/List.vue'),
    
  },
  {
    path: '/apps/assesment/edit/:id',
    name: 'apps-personality-edit',
    component: () => import('@/views/apps/personality/edit/EditForm.vue'),
    
  },
  {
    path: '/apps/assesment/view/:id',
    name: 'apps-personality-view',
    component: () => import('@/views/apps/personality/view/View.vue'),
    
  },

  // *===============================================---*
  // *--------- Currency ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/currency/add/',
    name: 'apps-currency-add', 
    component: () => import('@/views/apps/currency/list/AddForm.vue'),
    
  },

  {
    path: '/apps/currency/list/',
    name: 'apps-currency-list', 
    component: () => import('@/views/apps/currency/list/List.vue'),
    
  },

  {
    path: '/apps/currency/edit/:id',
    name: 'apps-currency-edit',
    component: () => import('@/views/apps/currency/edit/EditForm.vue'),
    
  },
  {
    path: '/apps/currency/view/:id',
    name: 'apps-currency-view',
    component: () => import('@/views/apps/currency/view/View.vue'),
    
  },
  

  // *===============================================---*
  // *--------- Roles ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/roles/add/',
    name: 'apps-roles-add', 
    component: () => import('@/views/apps/roles/Add.vue'),
    
  },

  {
    path: '/apps/roles/list/',
    name: 'apps-roles-list', 
    component: () => import('@/views/apps/roles/List.vue'),
    
  },

  {
    path: '/apps/roles/edit/:id',
    name: 'apps-roles-edit',
    component: () => import('@/views/apps/roles/Edit.vue'),
    
  },

  // *===============================================---*
  // *--------- consultation ---- ---------------------------------------*
  // *===============================================---*
 
  {
    path: '/apps/consultation/list/',
    name: 'apps-consultation-list', 
    component: () => import('@/views/apps/consultation/list/List.vue'),
    
  }, 
  {
    path: '/apps/consultation/accepted/list/',
    name: 'apps-consultation-accepted-list', 
    component: () => import('@/views/apps/consultation/list/ConsultantList.vue'),
    
  },
  {
    path: '/apps/consultation/assitants/list/',
    name: 'apps-consultation-assitants-list', 
    component: () => import('@/views/apps/consultation/list/AssitantsList.vue'),
    
  },
  {
    path: '/apps/consultation/comming/requests/assitants/list/',
    name: 'apps-consultation-comming-requests-assitants-list', 
    component: () => import('@/views/apps/consultation/list/CommingRequestAssitantsList.vue'),
  },
  
  {
    path: '/apps/consultation/requested/assitants/list/',
    name: 'apps-consultation-requested-assitants-list', 
    component: () => import('@/views/apps/consultation/list/RequestedList.vue'),
    
  },
  {
    path: '/apps/consultation/sessions/list/',
    name: 'apps-consultation-sessions-list', 
    component: () => import('@/views/apps/consultation/list/Sessions.vue'),
    
  },  
  {
    path: '/apps/consultation/rejected/list/',
    name: 'apps-consultation-rejected-list', 
    component: () => import('@/views/apps/consultation/list/RejectedList.vue'),
    
  }, 
  {
    path: '/apps/consultation/view/:id',
    name: 'apps-consultation-view',
    component: () => import('@/views/apps/consultation/view/View.vue'),
    
  },
  {
    path: '/apps/consultation/view/requested/assitant/:id/:type/:invitationId',
    name: 'apps-consultation-view-requested-assitant',
    component: () => import('@/views/apps/consultation/view/ViewAssitant.vue'),
    
  },
  {
    path: '/apps/consultation/add/',
    name: 'apps-consultation-add', 
    component: () => import('@/views/apps/consultation/list/Add.vue'),
    
  },

  {
    path: '/apps/consultation/edit/:id',
    name: 'apps-consultation-edit', 
    component: () => import('@/views/apps/consultation/list/Edit.vue'),
    
  },

  //consultant questionnaires
  {
    path: '/apps/consultation/questionnaire/add/',
    name: 'apps-consultation-questionnaire-add', 
    component: () => import('@/views/apps/consultation/questionnaire/Add.vue'),
    
  },
  {
    path: '/apps/consultation/questionnaire/edit/:id',
    name: 'apps-consultation-questionnaire-edit', 
    component: () => import('@/views/apps/consultation/questionnaire/Edit.vue'),
    
  },
  {
    path: '/apps/consultation/questionnaire/list/',
    name: 'apps-consultation-questionnaire-list', 
    component: () => import('@/views/apps/consultation/questionnaire/List.vue'),
    
  },
  {
    path: '/apps/consultation/questionnaire/answered/list/',
    name: 'apps-consultation-questionnaire-answered-list', 
    component: () => import('@/views/apps/consultation/questionnaire/AnsweredList.vue'),
    
  },
  {
    path: '/apps/consultation/questionnaire/view/:id',
    name: 'apps-consultation-questionnaire-view', 
    component: () => import('@/views/apps/consultation/questionnaire/View.vue'),
    
  },


  // *===============================================---*
  // *--------- Commission ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/commission/view/:id',
    name: 'apps-commission-form',
    component: () => import('@/views/apps/commission/edit/Edit.vue'),
    
  },

  // *===============================================---*
  // *--------- fields ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/fields/list/',
    name: 'apps-fields-list',
    component: () => import('@/views/apps/fields/List.vue'),
    
  },
  {
    path: '/apps/fields/add/',
    name: 'apps-fields-add',
    component: () => import('@/views/apps/fields/Add.vue'),
    
  },
  {
    path: '/apps/fields/edit/:id',
    name: 'apps-fields-edit',
    component: () => import('@/views/apps/fields/Edit.vue'),
    
  },
  {
    path: '/apps/fields/view/:id',
    name: 'apps-fields-view',
    component: () => import('@/views/apps/fields/View.vue'),
    
  },

  // *===============================================---*
  // *--------- personality categories ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/personality/categories/list/',
    name: 'apps-personality-categories-list',
    component: () => import('@/views/apps/main-personality/categories/List.vue'),
    
  },
  {
    path: '/apps/personality/categories/add/',
    name: 'apps-personality-categories-add',
    component: () => import('@/views/apps/main-personality/categories/Add.vue'),
    
  },
  {
    path: '/apps/personality/categories/edit/:id',
    name: 'apps-personality-categories-edit',
    component: () => import('@/views/apps/main-personality/categories/Edit.vue'),
    
  },
  {
    path: '/apps/personality/categories/view/:id',
    name: 'apps-personality-categories-view',
    component: () => import('@/views/apps/main-personality/categories/View.vue'),
    
  },
  {
    path: '/apps/personality/categories/details/:id',
    name: 'apps-personality-categories-details',
    component: () => import('@/views/apps/main-personality/categories/Details.vue'),
    
  },

    // *===============================================---*
  // *--------- personality tests ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/personality/test/list/',
    name: 'apps-personality-test-list',
    component: () => import('@/views/apps/main-personality/personality/List.vue'),
  },
  {
    path: '/apps/personality/test/add/',
    name: 'apps-personality-test-add',
    component: () => import('@/views/apps/main-personality/personality/Add.vue'),
  },
  {
    path: '/apps/personality/test/edit/:id',
    name: 'apps-personality-test-edit',
    component: () => import('@/views/apps/main-personality/personality/Edit.vue'),
  },
  {
    path: '/apps/personality/test/view/:id',
    name: 'apps-personality-test-view',
    component: () => import('@/views/apps/main-personality/personality/View.vue'),
  },
  {
    path: '/apps/personality/test/view/user/report/:id',
    name: 'apps-view-user-test-report',
    component: () => import('@/views/apps/main-personality/personality/ViewUserTestReport.vue'),
  },

  // *===============================================---*
  // *--------- personality test Questions ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/personality/test/question/view/:id',
    name: 'apps-personality-test-question-view',
    component: () => import('@/views/apps/main-personality/personality/questions/View.vue'),
  },

    // *===============================================---*
  // *--------- Payments ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/payments/details',
    name: 'apps-payments-details',
    component: () => import('@/views/apps/payments/Details.vue'),
  },

  {
    path: '/apps/transaction/details/:id',
    name: 'apps-transaction-details',
    component: () => import('@/views/apps/payments/ViewTransaction.vue'),
  },

  {
    path: '/apps/payments/request',
    name: 'apps-payments-request',
    component: () => import('@/views/apps/payments/Requests.vue'),
  },

  {
    path: '/apps/payments/details/admin',
    name: 'apps-payments-details-admin',
    component: () => import('@/views/apps/payments/AdminDetails.vue'),
  },

  {
    path: '/apps/payments/requets',
    name: 'apps-payments-requests',
    component: () => import('@/views/apps/payments/Requests.vue'),
  },

  {
    path: '/apps/payments/requets/:id',
    name: 'apps-payments-request-view',
    component: () => import('@/views/apps/payments/ViewRequest.vue'),
  },

  {
    path: '/apps/payments/consultant/transactions',
    name: 'apps-payments-consultant-transactions',
    component: () => import('@/views/apps/payments/ConsultantTransactions.vue'),
  },

  {
    path: '/apps/payments/consultant/transaction/view/:id',
    name: 'apps-payments-consultant-transaction-view',
    component: () => import('@/views/apps/payments/ConsultantTransactionView.vue'),
  },

  {
    path: '/apps/payments/consultant/commission',
    name: 'apps-payments-consultant-commission',
    component: () => import('@/views/apps/payments/ConsultantCommission.vue'),
  },

  {
    path: '/apps/payments/consultant/paypal/account/configuration',
    name: 'apps-payments-consultant-paypal-account-configuration',
    component: () => import('@/views/apps/payments/ConsultantPaypalConfig.vue'),
  },


    // *===============================================---*
  // *--------- slider ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/sliders/list/',
    name: 'apps-sliders-list',
    component: () => import('@/views/apps/slider/List.vue'),
    
  },
  {
    path: '/apps/sliders/add/',
    name: 'apps-sliders-add',
    component: () => import('@/views/apps/slider/Add.vue'), 
  },
  {
    path: '/apps/sliders/edit/:id',
    name: 'apps-sliders-edit',
    component: () => import('@/views/apps/slider/Edit.vue'),
    
  },

  {
    path: '/apps/sliders/view/:id',
    name: 'apps-sliders-view',
    component: () => import('@/views/apps/slider/View.vue'),
    
  },

  // *===============================================---*
  // *--------- Job Title ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/jobTitle/list/',
    name: 'apps-jobTitle-list',
    component: () => import('@/views/apps/job-title/List.vue'),
    
  },
  {
    path: '/apps/jobTitle/add/',
    name: 'apps-jobTitle-add',
    component: () => import('@/views/apps/job-title/Add.vue'), 
  },
  {
    path: '/apps/jobTitle/edit/:id',
    name: 'apps-jobTitle-edit',
    component: () => import('@/views/apps/job-title/Edit.vue'),
    
  },

  {
    path: '/apps/jobTitle/view/:id',
    name: 'apps-jobTitle-view',
    component: () => import('@/views/apps/job-title/View.vue'),
    
  },

  // *===============================================---*
  // *--------- speciality ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/speciality/list/',
    name: 'apps-speciality-list',
    component: () => import('@/views/apps/speciality/List.vue'),
    
  },
  {
    path: '/apps/speciality/add/',
    name: 'apps-speciality-add',
    component: () => import('@/views/apps/speciality/Add.vue'), 
  },
  {
    path: '/apps/speciality/edit/:id',
    name: 'apps-speciality-edit',
    component: () => import('@/views/apps/speciality/Edit.vue'),
    
  },
  {
    path: '/apps/speciality/view/:id',
    name: 'apps-speciality-view',
    component: () => import('@/views/apps/speciality/View.vue'),
    
  },

    // *===============================================---*
  // *--------- tracking system - fields-goals ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/trackingSystem/fieldsGoals/list/',
    name: 'apps-tracking-system-fields-and-goals-list',
    component: () => import('@/views/apps/tracking-system/fields-goals/List.vue'),
    
  },
  {
    path: '/apps/trackingSystem/fieldsGoals/add/',
    name: 'apps-tracking-system-fields-and-goals-add',
    component: () => import('@/views/apps/tracking-system/fields-goals/Add.vue'),
    
  },
  {
    path: '/apps/trackingSystem/fieldsGoals/edit/:id',
    name: 'apps-tracking-system-fields-and-goals-edit',
    component: () => import('@/views/apps/tracking-system/fields-goals/Edit.vue'),
    
  },
  {
    path: '/apps/trackingSystem/fieldsGoals/view/:id',
    name: 'apps-tracking-system-fields-and-goals-view',
    component: () => import('@/views/apps/tracking-system/fields-goals/View.vue'),
    
  },

      // *===============================================---*
  // *--------- tracking system -tracking system  ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/trackingSystem/list/',
    name: 'apps-tracking-system-list',
    component: () => import('@/views/apps/tracking-system/tracking-system/List.vue'),
    
  },
  {
    path: '/apps/trackingSystem/add/',
    name: 'apps-tracking-system-add',
    component: () => import('@/views/apps/tracking-system/tracking-system/Add.vue'),
    
  },
  {
    path: '/apps/trackingSystem/edit/:id',
    name: 'apps-tracking-system-edit',
    component: () => import('@/views/apps/tracking-system/tracking-system/Edit.vue'),
    
  },
  {
    path: '/apps/trackingSystem/view/:id',
    name: 'apps-tracking-system-view',
    component: () => import('@/views/apps/tracking-system/tracking-system/View.vue'),
    
  },
  
  
      // *===============================================---*
  // *--------- tracking system -activity  ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/trackingSystem/activity/list/',
    name: 'apps-tracking-system-activity-list',
    component: () => import('@/views/apps/tracking-system/activity/List.vue'),
    
  },
  {
    path: '/apps/trackingSystem/activity/add/',
    name: 'apps-tracking-system-activity-add',
    component: () => import('@/views/apps/tracking-system/activity/Add.vue'),
    
  },
  {
    path: '/apps/trackingSystem/details/activity/add/:id/:name/:duration',
    name: 'apps-tracking-system-details-activity-add',
    component: () => import('@/views/apps/tracking-system/activity/Add.vue'),
    
  },
  {
    path: '/apps/trackingSystem/activity/edit/:id',
    name: 'apps-tracking-system-activity-edit',
    component: () => import('@/views/apps/tracking-system/activity/Edit.vue'),
    
  },
  {
    path: '/apps/trackingSystem/activity/view/:id',
    name: 'apps-tracking-system-activity-view',
    component: () => import('@/views/apps/tracking-system/activity/View.vue'),
    
  },


   // *===============================================---*
  // *--------- tracking system -initiative  ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/trackingSystem/initiative/list/',
    name: 'apps-tracking-system-initiative-list',
    component: () => import('@/views/apps/tracking-system/initiative/List.vue'),
    
  },
  {
    path: '/apps/trackingSystem/initiative/add/',
    name: 'apps-tracking-system-initiative-add',
    component: () => import('@/views/apps/tracking-system/initiative/Form.vue'),
    
  },
  {
    path: '/apps/trackingSystem/initiative/edit/:id',
    name: 'apps-tracking-system-initiative-edit',
    component: () => import('@/views/apps/tracking-system/initiative/Form.vue'),
    
  },
  {
    path: '/apps/trackingSystem/initiative/view/:id',
    name: 'apps-tracking-system-initiative-view',
    component: () => import('@/views/apps/tracking-system/initiative/View.vue'),
    
  },
  {
    path: '/apps/trackingSystem/initiative/:initiativeId/enrolledUser/view/:userId',
    name: 'apps-tracking-system-initiative-enrolled-user-view',
    component: () => import('@/views/apps/tracking-system/initiative/EnrolledUserDetails.vue'),
    
  },

  // *===============================================---*
  // *--------- Referer ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/referer/edit/',
    name: 'apps-referer-edit',
    component: () => import('@/views/apps/referer/Edit.vue'),
    
  },

  // *===============================================---*
  // *--------- EMAIL & IT'S FILTERS N LABELS -------------------------------*
  // *===============================================---*
  {
    path: '/apps/email',
    name: 'apps-email',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
    },
  },
  {
    path: '/apps/email/:folder',
    name: 'apps-email-folder',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'apps-email',
    },
    beforeEnter(to, _, next) {
      if (['sent', 'draft', 'starred', 'spam', 'trash'].includes(to.params.folder)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/email/label/:label',
    name: 'apps-email-label',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'apps-email',
    },
    beforeEnter(to, _, next) {
      if (['personal', 'company', 'important', 'private'].includes(to.params.label)) next()
      else next({ name: 'error-404' })
    },
  },

  // *===============================================---*
  // *--------- TODO & IT'S FILTERS N TAGS ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/todo',
    name: 'apps-todo',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
    },
  },
  {
    path: '/apps/todo/:filter',
    name: 'apps-todo-filter',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
      navActiveLink: 'apps-todo',
    },
    beforeEnter(to, _, next) {
      if (['important', 'completed', 'deleted'].includes(to.params.filter)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/todo/tag/:tag',
    name: 'apps-todo-tag',
    component: () => import('@/views/apps/todo/Todo.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'todo-application',
      navActiveLink: 'apps-todo',
    },
    beforeEnter(to, _, next) {
      if (['team', 'low', 'medium', 'high', 'update'].includes(to.params.tag)) next()
      else next({ name: 'error-404' })
    },
  },

  // *===============================================---*
  // *--------- CHAT  ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/chat',
    name: 'apps-chat',
    component: () => import('@/views/apps/chat/Chat.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'chat-application',
    },
  },

  // *===============================================---*
  // *--------- Campaign  ---------------------------------------*
  // *===============================================---*

  {
    path: '/apps/campaign',
    name: 'apps-campaign',
    component: () => import('@/views/apps/campaign/Campaign.vue'),
  },


  // *===============================================---*
  // *--------- ECOMMERCE  ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/e-commerce/shop',
    name: 'apps-e-commerce-shop',
    component: () => import('@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue'),
    meta: {
      contentRenderer: 'sidebar-left-detached',
      contentClass: 'ecommerce-application',
      pageTitle: 'Shop',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/wishlist',
    name: 'apps-e-commerce-wishlist',
    component: () => import('@/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue'),
    meta: {
      pageTitle: 'Wishlist',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Wishlist',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/checkout',
    name: 'apps-e-commerce-checkout',
    component: () => import('@/views/apps/e-commerce/e-commerce-checkout/ECommerceCheckout.vue'),
    meta: {
      pageTitle: 'Checkout',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Checkout',
          active: true,
        },
      ],
    },
  },
  {
    path: '/apps/e-commerce/:slug',
    name: 'apps-e-commerce-product-details',
    component: () => import('@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue'),
    meta: {
      pageTitle: 'Product Details',
      contentClass: 'ecommerce-application',
      breadcrumb: [
        {
          text: 'ECommerce',
        },
        {
          text: 'Shop',
          active: true,
        },
        {
          text: 'Product Details',
          active: true,
        },
      ],
    },
  },

  // *===============================================---*
  // *--------- USER ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/apps/users/list',
    name: 'apps-users-list',
    component: () => import('@/views/apps/user/users-list/UsersList.vue'),
    
  },
  // {
  //   path: '/apps/admins/list/',
  //   name: 'apps-admins-list',
  //   component: () => import('@/views/apps/user/users-list/AdminsList.vue'),
    
  // },
  // {
  //   path: '/apps/users/add',
  //   name: 'apps-users-add',
  //   component: () => import('@/views/apps/user/users-list/AddForm.vue'),
    
  // },
  // {
  //   path: '/apps/users/add/child',
  //   name: 'apps-users-add-child',
  //   component: () => import('@/views/apps/user/users-list/AddForm.vue'),
    
  // },
  // {
  //   path: '/apps/users/test/add',
  //   name: 'apps-users-test-add',
  //   component: () => import('@/views/apps/user/users-list/TestAddForm.vue'),
    
  // },
  // {
  //   path: '/apps/users/view/:id',
  //   name: 'apps-users-view',
  //   component: () => import('@/views/apps/user/users-view/UsersView.vue'),
    
  // },
  // {
  //   path: '/apps/admins/view/:id',
  //   name: 'apps-admins-view',
  //   component: () => import('@/views/apps/user/users-view/AdminsView.vue'),
    
  // },
  {
    path: '/apps/users/edit/:id',
    name: 'apps-users-edit',
    component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
    
  },
  {
    path: '/apps/users/child/edit/:id/:parentId',
    name: 'apps-users-child-edit',
    component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
    
  },

  // Invoice
  {
    path: '/apps/invoice/list',
    name: 'apps-invoice-list',
    component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
  },
  {
    path: '/apps/invoice/preview/:id',
    name: 'apps-invoice-preview',
    component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
  },
  {
    path: '/apps/invoice/add/',
    name: 'apps-invoice-add',
    component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
  },
  {
    path: '/apps/invoice/edit/:id',
    name: 'apps-invoice-edit',
    component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
  },
]
