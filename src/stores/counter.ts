import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const isLoggedIn = ref(false)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  state: () => {
    return {
      loggedIn: false,
      user: null
    }
  }

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
