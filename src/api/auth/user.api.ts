import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { UserEntity } from './user-entity'
import router from '@/router'
import {auth} from '@/plugins/firebase'

class AuthApi {
    async register (data: UserEntity) {
        const response = await createUserWithEmailAndPassword(auth, data.email as any, data.password as any)
         if (response) {
            return response.user
         } else {
            throw new Error('unable to register')
         }
    }
    
    async login ({email, password}: any) {
        const response = await signInWithEmailAndPassword(auth, email, password)
        if (response) {
           return response
        } else {
            throw new Error('invalid creadentials')
        }
    }

    async fetchUser (context: any, data: UserEntity) {
        //
    }
}

export const authservice = new AuthApi()
