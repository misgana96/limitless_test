import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {UserEntity} from '@/api'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const isLoggedIn = ref(false)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const loggedIn = ref(false)
  const user = ref(null)

  const getLoggedIn = computed(() => {
    return loggedIn.value
  })

  const getUsers = computed(() => {
    return user.value
  })

  
  // function register (data: UserEntity) {
  //   const response = await createUserWithEmailAndPassword(auth, data.email as any, data.password as any)
  //   if (response) {

  //   }
  // }
  // actions: {
  //   async register(context, { email, phone, password, username}) {

  //   }
  // }
  const getters = computed(() => {
    function user(state:any) {
      return state.value.user
    }
  })
  return { count, doubleCount, increment, isLoggedIn }
})
