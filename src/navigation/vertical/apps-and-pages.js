// export default [
//   {
    
//     moduleName: 'analysis-module',
//     title: 'Dashboard',
//     icon: 'HomeIcon',
//     route: 'dashboard-home',
//   },
//   {
    
//     moduleName: 'user-module',
//     title: 'User',
//     icon: 'UserIcon',
//     children: [
//       {
//         title: 'Admin List',
//         route: 'apps-admins-list',
//       },
//       {
//         title: 'User List',
//         route: 'apps-users-list',
//       },
//       {
//         title: 'Add',
//         route: 'apps-users-add',
//       },
//     ],
//   },
//   {
    
//     moduleName: 'role-module',
//     title: 'Roles',
//     icon: 'AlertTriangleIcon',
//     children: [
//       {
//         title: 'List',
//         route: 'apps-roles-list',
//       },
//       {
//         title: 'Add',
//         route: 'apps-roles-add',
//       },
//     ],
//   },
  
//   {
    
//     moduleName: 'course-module',
//     title: 'Courses',
//     icon: 'FolderIcon',
//     children: [
//       {
//         title: 'Courses',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-courses-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-courses-add',
//           },
//         ],
//       },
//       {
//         title: 'Sections',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-sections-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-sections-add',
//           },
//         ],
//       },
//       {
//         title: 'Lessons',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-lessons-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-lessons-add',
//           },
//         ],
//       },
//       {
//         title: 'Quiz',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-quizzes-list',
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-quizzes-add', params: { type: 'course' } },
//           },
//         ],
//       },

      
     
//       {
//         title: 'Practical Tasks',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-practical-tasks-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-practicalTasks-add',
//           },
          
//         ],
//       },

//       {
//         title: 'User Practical Tasks',
//         children: [
//           {
//             title: 'Pending',
//             route: 'apps-pending-practical-tasks-list',
//           },
//           {
//             title: 'Answered',
//             route: 'apps-asnwered-practical-tasks-list',
//           },
          
//         ],
//       },

//     ],
//   },

//    // consultants

//   {
//     isAdmin : 'yes',
//     moduleName: 'consultation-module',
//     title: 'Consultation',
//     icon: 'UserCheckIcon',
//     children: [
//       {
//         title: 'Requests',
//         children: [
//           {
//             title: 'Pending',
//             route: { name: 'apps-consultation-list'},
//           },
//           {
//             title: 'Rejected',
//             route: { name: 'apps-consultation-rejected-list'},
//           },
//         ],
//       },
//       {
//         title: 'Consultants',
//         route: { name: 'apps-consultation-accepted-list'},
//       },
//       {
//         title: 'Add Consultant',
//         route: { name: 'apps-consultation-add'},
//       },
//       {
//         title: 'Consultant Assistants',
//         children: [
//           {
//             title: 'Make A Request',
//             route: { name: 'apps-consultation-assitants-list'},
//           },
//           {
//             title: 'Requested Assistants',
//             route: { name: 'apps-consultation-requested-assitants-list'},
//           },
//         ]
//       },
//       {
//         title: 'Sessions',
//         route: { name: 'apps-consultation-sessions-list'},
//       },
//       {
//         title: 'Comission Setting',
//         route: { name: 'apps-commission-form'},
//       },
//       {
//         title: 'Fields',
//         children: [
//           {
//             title: 'List',
//             route: { name: 'apps-fields-list'}
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-fields-add'}
//           },
//         ],
//       },
//       {
//         title: 'Specialty',
//         // icon: 'AwardIcon',
//         children: [
//           {
//             title: 'List',
//             route: { name: 'apps-speciality-list'},
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-speciality-add'},
//           },
//         ],
//       },
//       {
//         title: 'Job Title',
//         // icon: 'PenToolIcon',
//         children: [
//           {
//             title: 'List',
//             route: { name: 'apps-jobTitle-list'},
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-jobTitle-add'},
//           },
//         ],
//       },
//     ],
//   },
//   {
//     isAdmin : 'no',
//     moduleName: 'consultation-module',
//     title: 'Consultation',
//     icon: 'UserCheckIcon',
//     children: [
//       // {
//       //   title: 'Requests',
//       //   children: [
//       //     {
//       //       title: 'Pending',
//       //       route: { name: 'apps-consultation-list'},
//       //     },
//       //     {
//       //       title: 'Rejected',
//       //       route: { name: 'apps-consultation-rejected-list'},
//       //     },
//       //   ],
//       // },
//       // {
//       //   title: 'Consultants',
//       //   route: { name: 'apps-consultation-accepted-list'},
//       // },
//       // {
//       //   title: 'Add Consultant',
//       //   route: { name: 'apps-consultation-add'},
//       // },
//       {
//         title: 'Consultant Assitants',
//         children: [
//           {
//             title: 'Make A Request',
//             route: { name: 'apps-consultation-assitants-list'},
//           },
//           {
//             title: 'Requested Assistants',
//             route: { name: 'apps-consultation-requested-assitants-list'},
//           },
//           {
//             title: 'Recieve Requests',
//             route: { name: 'apps-consultation-comming-requests-assitants-list'},
//           },
//         ]
//       },
//       {
//         title: 'Sessions',
//         route: { name: 'apps-consultation-sessions-list'},
//       },
//       {
//         title: 'Questionnaires',
//         children: [
//           {
//             title: 'List',
//             route: { name: 'apps-consultation-questionnaire-list'},
//           },
//           {
//             title: 'Anserwed List',
//             route: { name: 'apps-consultation-questionnaire-answered-list'},
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-consultation-questionnaire-add'},
//           },
//         ]
//       },
//       // {
//       //   title: 'Comission Setting',
//       //   route: { name: 'apps-commission-form'},
//       // },
//       // {
//       //   title: 'Fields',
//       //   children: [
//       //     {
//       //       title: 'List',
//       //       route: { name: 'apps-fields-list'}
//       //     },
//       //     {
//       //       title: 'Add',
//       //       route: { name: 'apps-fields-add'}
//       //     },
//       //   ],
//       // },
//       // {
//       //   title: 'Specialty',
//       //   children: [
//       //     {
//       //       title: 'List',
//       //       route: { name: 'apps-speciality-list'},
//       //     },
//       //     {
//       //       title: 'Add',
//       //       route: { name: 'apps-speciality-add'},
//       //     },
//       //   ],
//       // },
//       // {
//       //   title: 'Job Title',
//       //   // icon: 'PenToolIcon',
//       //   children: [
//       //     {
//       //       title: 'List',
//       //       route: { name: 'apps-jobTitle-list'},
//       //     },
//       //     {
//       //       title: 'Add',
//       //       route: { name: 'apps-jobTitle-add'},
//       //     },
//       //   ],
//       // },
     
     
      
//     ],
//   },
  
  

//   {
//     isAdmin : 'yes',
//     moduleName: 'category-module',
//     title: 'Categories',
//     icon: 'GridIcon',
//     children: [
//       {
//         title: 'List',
//         route: 'apps-categories-list',
//       },
//       {
//         title: 'Add',
//         route: 'apps-categories-add',
//       },
//     ],
//   },

//   {
    
//     moduleName: 'survey-module',
//     title: 'Survey',
//     icon: 'UsersIcon',
//     children: [
//       {
//         title: 'List',
//         route: 'apps-questionnaires-list',
//       },
//       {
//         title: 'Add',
//         route: 'apps-questionnaires-add',
//       },
//     ],
//   },

//   {
//     isAdmin : 'yes',
//     moduleName: 'bankQuestion-module',
//     title: 'Bank Questions',
//     icon: 'DatabaseIcon',
//     children: [
//       {
//         title: 'Admin',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-bank-questions-admin-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-bank-questions-add',
//           },
//         ],
//       },
//       {
//         title: 'Users',
//         children: [
//           {
//             title: 'Answered Questions',
//             route: 'apps-answered-bank-questions-list',
//           },
//           {
//             title: 'Pending Questions',
//             route: 'apps-pending-bank-questions-list',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     isAdmin : 'no',
//     moduleName: 'bankQuestion-module',
//     title: 'Bank Questions',
//     icon: 'DatabaseIcon',
//     children: [
//       {
//         title: 'Answered Questions',
//         route: 'apps-answered-bank-questions-list',
//       },
//       {
//         title: 'Pending Questions',
//         route: 'apps-pending-bank-questions-list',
//       },
//       // {
//       //   title: 'Admin',
//       //   children: [
//       //     {
//       //       title: 'List',
//       //       route: 'apps-bank-questions-admin-list',
//       //     },
//       //     {
//       //       title: 'Add',
//       //       route: 'apps-bank-questions-add',
//       //     },
//       //   ],
//       // },
      
//     ],
//   },


//   {
    
//     moduleName: 'certificate-module',
//     title: 'Certificates',
//     icon: 'FileTextIcon',
//     children: [
//       {
//         title: 'List',
//         route: 'apps-certificates-list',
//       },
//       {
//         title: 'Add',
//         route: 'apps-certificates-add',
//       },
//     ],
//   },

//   // {
//   //   isAdmin : 'yes',
//   //   moduleName: 'course-module',
//   //   title: 'Assessments Tests',
//   //   icon: 'ActivityIcon',
//   //   children: [
//   //     {
//   //       title: 'List',
//   //       route: { name: 'apps-personality-list'},
//   //     },
//   //     {
//   //       title: 'Add',
//   //       route: { name: 'apps-personality-add'},
//   //     },
//   //   ],
//   // },
//   {
    
//     moduleName: 'currencies-module',
//     title: 'Currencies',
//     icon: 'DollarSignIcon',
//     children: [
//       {
//         title: 'List',
//         route: { name: 'apps-currency-list'},
//       },
//       {
//         title: 'Add',
//         route: { name: 'apps-currency-add'},
//       },
//     ],
//   },

//   {
    
//     moduleName: 'personality-module',
//     title: 'Personality Analysis',
//     icon: 'HelpCircleIcon',
//     children: [
//       {
//         title: 'Categories',
//         children: [
//           {
//             title: 'List',
//             route: { name: 'apps-personality-categories-list'},
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-personality-categories-add'},
//           },
//         ],
//       },
//       {
//         title: 'Tests',
//         children: [
//           {
//             title: 'List',
//             route: { name: 'apps-personality-test-list'},
//           },
//           {
//             title: 'Add',
//             route: { name: 'apps-personality-test-add'},
//           },
//         ],
//       },
//     ],
//   },

//   {
//     isAdmin : 'yes',
//     moduleName: 'payment-module',
//     title: 'Payments',
//     icon: 'RefreshCwIcon',
//     children: [
//       {
//         title: 'purshase list',
//         route: { name: 'apps-payments-details-admin'},
//       },
//       {
//         title: 'requests',
//         route: { name: 'apps-payments-requests'},
//       },
//       {
//         title: 'transactions',
//         route: { name: 'apps-payments-consultant-transactions'},
//       },
//       // {
//       //   title: 'consultant commission',
//       //   route: { name: 'apps-payments-consultant-commission'},
//       // },
//     ],
//   },

//   //tracking system
//   {
    
//     moduleName: 'tracking-module',
//     title: 'Tracking System',
//     icon: 'FolderIcon',
//     children: [
//       {
//         title: 'Tracking System',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-tracking-system-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-tracking-system-add',
//           },
//         ],
//       },
//       {
//         title: 'Fields',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-tracking-system-fields-and-goals-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-tracking-system-fields-and-goals-add',
//           },
//         ],
//       },
//       {
//         title: 'Activity',
//         children: [
//           {
//             title: 'List',
//             route: 'apps-tracking-system-activity-list',
//           },
//           {
//             title: 'Add',
//             route: 'apps-tracking-system-activity-add',
//           },
//         ],
//       },
//     ],
//   },
//   //tracking system

//   //initiative
//  //tracking system
//  {
    
//   moduleName: 'initiative-module',
//   title: 'Initiative',
//   icon: 'CastIcon',
//   children: [
//   {
//     title: 'List',
//     route: 'apps-tracking-system-initiative-list',
//   },
//   {
//     title: 'Add',
//     route: 'apps-tracking-system-initiative-add',
//   },
// ]
  
// },
//   //initiative

//   {
//     isAdmin : 'no',
//     moduleName: 'payment-module',
//     title: 'Payments',
//     icon: 'RefreshCwIcon',
//     children: [
//       {
//         title: 'payments',
//         route: { name: 'apps-payments-details'},
//       },
//       // {
//       //   title: 'paypal account',
//       //   route: { name: 'apps-payments-consultant-paypal-account-configuration'},
//       // },
//     ],
//   },

//   {
//     moduleName: 'slider-module',
//     title: 'Sliders',
//     icon: 'BookOpenIcon',
//     children: [
//       {
//         title: 'List',
//         route: { name: 'apps-sliders-list'},
//       },
//       {
//         title: 'Add',
//         route: { name: 'apps-sliders-add'},
//       },
//     ],
//   },

  
//   {
//     moduleName: 'user-module',
//     title: 'Referral',
//     icon: 'GiftIcon',
//     route: { name: 'apps-referer-edit'},
//   },

  

  
    
 

//   // {
//   //   title: 'Email',
//   //   route: 'apps-email',
//   //   icon: 'MailIcon',
//   // },
//   // {
//   //   title: 'Chat',
//   //   route: 'apps-chat',
//   //   icon: 'MessageSquareIcon',
//   // },
//   // {
//   //   title: 'Todo',
//   //   route: 'apps-todo',
//   //   icon: 'CheckSquareIcon',
//   // },
//   // {
//   //   title: 'Calendar',
//   //   route: 'apps-calendar',
//   //   icon: 'CalendarIcon',
//   // },
//   // {
//   //   title: 'Invoice',
//   //   icon: 'FileTextIcon',
//   //   children: [
//   //     {
//   //       title: 'List',
//   //       route: 'apps-invoice-list',
//   //     },
//   //     {
//   //       title: 'Preview',
//   //       route: { name: 'apps-invoice-preview', params: { id: 4987 } },
//   //     },
//   //     {
//   //       title: 'Edit',
//   //       route: { name: 'apps-invoice-edit', params: { id: 4987 } },
//   //     },
//   //     {
//   //       title: 'Add',
//   //       route: { name: 'apps-invoice-add' },
//   //     },
//   //   ],
//   // },
//   // {
//   //   title: 'eCommerce',
//   //   icon: 'ShoppingCartIcon',
//   //   children: [
//   //     {
//   //       title: 'Shop',
//   //       route: 'apps-e-commerce-shop',
//   //     },
//   //     {
//   //       title: 'Details',
//   //       route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
//   //     },
//   //     {
//   //       title: 'Wishlist',
//   //       route: 'apps-e-commerce-wishlist',
//   //     },
//   //     {
//   //       title: 'Checkout',
//   //       route: 'apps-e-commerce-checkout',
//   //     },
//   //   ],
//   // },
//   // {
//   //   title: 'User',
//   //   icon: 'UserIcon',
//   //   children: [
//   //     {
//   //       title: 'List',
//   //       route: 'apps-users-list',
//   //     },
//   //     {
//   //       title: 'View',
//   //       route: { name: 'apps-users-view', params: { id: 21 } },
//   //     },
//   //     {
//   //       title: 'Edit',
//   //       route: { name: 'apps-users-edit', params: { id: 21 } },
//   //     },
//   //   ],
//   // },
//   // {
//   //   title: 'Pages',
//   //   icon: 'FileIcon',
//   //   children: [
//   //     {
//   //       title: 'Authentication',
//   //       icon: 'CircleIcon',
//   //       children: [
//   //         {
//   //           title: 'Login v1',
//   //           route: 'auth-login-v1',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Login v2',
//   //           route: 'auth-login-v2',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Register v1',
//   //           route: 'auth-register-v1',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Register v2',
//   //           route: 'auth-register-v2',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Forgot Password v1',
//   //           route: 'auth-forgot-password-v1',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Forgot Password v2',
//   //           route: 'auth-forgot-password-v2',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Reset Password v1',
//   //           route: 'auth-reset-password-v1',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Reset Password v2',
//   //           route: 'auth-reset-password-v2',
//   //           target: '_blank',
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       title: 'Account Settings',
//   //       route: 'pages-account-setting',
//   //     },
//   //     {
//   //       title: 'Profile',
//   //       route: 'pages-profile',
//   //     },
//   //     {
//   //       title: 'Faq',
//   //       route: 'pages-faq',
//   //     },
//   //     {
//   //       title: 'Knowledge Base',
//   //       route: 'pages-knowledge-base',
//   //     },
//   //     {
//   //       title: 'Pricing',
//   //       route: 'pages-pricing',
//   //     },
//   //     {
//   //       title: 'Blog',
//   //       children: [
//   //         {
//   //           title: 'List',
//   //           route: 'pages-blog-list',
//   //         },
//   //         {
//   //           title: 'Detail',
//   //           route: { name: 'pages-blog-detail', params: { id: 1 } },
//   //         },
//   //         {
//   //           title: 'Edit',
//   //           route: { name: 'pages-blog-edit', params: { id: 1 } },
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       title: 'Mail Templates',
//   //       children: [
//   //         {
//   //           title: 'Welcome',
//   //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
//   //         },
//   //         {
//   //           title: 'Reset Password',
//   //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
//   //         },
//   //         {
//   //           title: 'Verify Email',
//   //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
//   //         },
//   //         {
//   //           title: 'Deactivate Account',
//   //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
//   //         },
//   //         {
//   //           title: 'Invoice',
//   //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
//   //         },
//   //         {
//   //           title: 'Promotional',
//   //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       title: 'Miscellaneous',
//   //       icon: 'CircleIcon',
//   //       children: [
//   //         {
//   //           title: 'Coming Soon',
//   //           route: 'misc-coming-soon',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Not Authorized',
//   //           route: 'misc-not-authorized',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Under Maintenance',
//   //           route: 'misc-under-maintenance',
//   //           target: '_blank',
//   //         },
//   //         {
//   //           title: 'Error',
//   //           route: 'misc-error',
//   //           target: '_blank',
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },
// ]
export default [
  {
    title: 'Chat',
    icon: 'PackageIcon',
    route: 'apps-chat',
  },
  {
    title: 'Contacts',
    icon: 'UsersIcon',
    route: 'apps-users-list',
  },
  {
    title: 'Campaign',
    icon: 'CommandIcon',
    route: 'apps-campaign',
  },
  
]

