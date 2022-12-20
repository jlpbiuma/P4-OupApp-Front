import Vue from 'vue'
import VueRouter from 'vue-router'
// PRELOGIN
import HomeView from '../views/PreLogin/HomeView.vue'
import LogInView from '../views/PreLogin/LogInView.vue'
import SignUpView from '../views/PreLogin/SignUpView.vue'
import AboutUsView from '../views/PreLogin/AboutUsView.vue'
import ContactView from '../views/PreLogin/ContactView.vue'
import BlogView from '../views/PreLogin/BlogView.vue'
import PricingView from '../views/PreLogin/PricingView.vue'
import MemberStoriesView from '../views/PreLogin/MemberStoriesView.vue'
import SeniorLoginView from '../views/PreLogin/SeniorLoginView.vue'
// SENIOR
import HomeSeniorView from '../views/Seniors/HomeSeniorView.vue'
import CallView from '../views/Seniors/CallView.vue'
import ContactListView from '../views/Seniors/ContactListView.vue'
import CameraView from '../views/Seniors/CameraView.vue'
import AlbumView from '../views/Seniors/AlbumView.vue'
import RemindersSeniorView from '../views/Seniors/RemindersSeniorView.vue'
import EmergenciesView from '../views/Seniors/EmergenciesView.vue'
// POSTLOGIN
import AdminView from '../views/PostLogin/AdminView.vue'
import MyProfileView from '../views/PostLogin/MyProfileView.vue'
import ToolsView from '../views/PostLogin/ToolsView.vue'
import MembersView from '../views/PostLogin/MembersView.vue'
import MembersActivityView from '../views/PostLogin/MembersActivityView.vue'
import PlanView from '../views/PostLogin/PlanView.vue'
import MembersInfoView from '../views/PostLogin/MembersInfoView.vue'
import ContactsView from '../views/PostLogin/ContactsView.vue'
import AddContactView from '../views/PostLogin/AddContactView.vue'
import AddPhotoView from '../views/PostLogin/AddPhotoView.vue'
import RemindersView from '../views/PostLogin/RemindersView.vue'
import AddReminder from '../views/PostLogin/AddReminderView.vue'
import BillingView from '../views/PostLogin/BillingView.vue'
import AddNewMemberView from '../views/PostLogin/AddNewMemberView.vue'
import CallClientView from '../views/PostLogin/CallView.vue'
// STORE
import { useAuthStore } from '../stores/authStore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'logInView',
    component: LogInView
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/about',
    name: 'AboutUsView',
    component: AboutUsView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/blog',
    name: 'BlogView',
    component: BlogView
  },
  {
    path: '/pricing',
    name: 'PrincingView',
    component: PricingView
  },
  {
    path: '/memberstories',
    name: 'MemberStoriesView',
    component: MemberStoriesView
  },
  {
    path: '/loginsenior',
    name: 'SeniorLoginView',
    component: SeniorLoginView
  },
  {
    path: '/senior/',
    name: 'HomeSeniorView',
    component: HomeSeniorView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/senior/calllist',
    name: 'ContactListView',
    component: ContactListView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/senior/calllist/call',
    name: 'CallView',
    component: CallView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/senior/camera',
    name: 'CameraView',
    component: CameraView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/senior/album',
    name: 'AlbumView',
    component: AlbumView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/senior/reminders',
    name: 'RemindersSeniorView',
    component: RemindersSeniorView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/senior/emergencies',
    name: 'EmergenciesView',
    component: EmergenciesView,
    meta: {
      requiresAuthSenior: true
    }
  },
  {
    path: '/user',
    name: 'AdminView',
    component: AdminView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/profile',
    name: 'MyProfileView',
    component: MyProfileView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/tools',
    name: 'ToolsView',
    component: ToolsView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members',
    name: 'MembersView',
    component: MembersView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/info',
    name: 'MembersInfoView',
    component: MembersInfoView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/contacts',
    name: 'ContactsView',
    component: ContactsView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/newcontact',
    name: 'AddContactView',
    component: AddContactView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/reminders',
    name: 'RemindersView',
    component: RemindersView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/reminders/add',
    name: 'AddReminder',
    component: AddReminder,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/tools/billing',
    name: 'BillingView',
    component: BillingView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/newmember',
    name: 'AddNewMemberView',
    component: AddNewMemberView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/activity',
    name: 'MembersActivityView',
    component: MembersActivityView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/plan',
    name: 'PlanView',
    component: PlanView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/addphoto',
    name: 'AddPhotoView',
    component: AddPhotoView,
    meta: {
      requiresAuthClient: true
    }
  },
  {
    path: '/user/members/call',
    name: 'CallClientView',
    component: CallClientView,
    meta: {
      requiresAuthClient: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuthSenior && !authStore.isLoggedIn) {
    next({ name: 'SeniorLoginView' })
  }
  if (to.meta.requiresAuthClient && !authStore.isLoggedIn) {
    next({ name: 'logInView' })
  }
  authStore.actualPage = to.path
  next()
})

export default router
