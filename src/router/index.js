import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Exercises from '../components/Exercises.vue'
import Exercise from '../components/Exercise.vue'
// import axios from 'axios'

Vue.use(VueRouter)

// the function continues in the second panel, not enough space here

function createRouter (state) {
  /* async function beforeEnter (to, from, next) {
    try {
      const { data: user } = await axios.get('http://localhost:3000/api/me')
      state.user = user
      next()
    } catch (err) {
      console.log('ERROR in beforeEnter', err)
      next('/') // redirect to login component if user is not authenticated
    }
  } */

  const routes = [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
      // beforeEnter
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise
    },
    {
      path: '/exercise/:id',
      name: 'myExercise',
      component: Exercise
    }
  ]

  return new VueRouter({
    routes
  })
}

export default createRouter
