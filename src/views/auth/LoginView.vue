<template>
    <div>
        <div class="page-content">

<!-- Main content -->
<div class="content-wrapper">

    <!-- Inner content -->
    <div class="content-inner">

        <!-- Content area -->
        <div class="content d-flex justify-content-center align-items-center">

            <!-- Login form -->
            <form class="login-form login-form-limitless" action="#" @submit.prevent="login">
                <div class="card mb-0">
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <div class="d-inline-flex align-items-center justify-content-center mb-4 mt-2">
                                <img src="../../assets/logo_icon.svg" class="h-48px" alt="">
                            </div>
                            <h5 class="mb-0">Login to your account</h5>
                            <span class="d-block text-muted">Enter your credentials below</span>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <div class="form-control-feedback form-control-feedback-start">
                                <input v-model="userEntity.email" type="text" class="form-control" placeholder="john@doe.com">
                                <div class="form-control-feedback-icon">
                                    <PhUserCircle :size="20"/>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <div class="form-control-feedback form-control-feedback-start">
                                <input v-model="userEntity.password" type="password" class="form-control" placeholder="•••••••••••">
                                <div class="form-control-feedback-icon">
                                    <PhLock :size="20"/>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100">Sign in</button>
                        </div>

                        <div class="text-center">
                            <p >SignIn with Google</p>
                            <div>
                                <img @click="socialLogin" class="social-login" src="../../assets/download.jpeg" width="100"/>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href="login_password_recover.html">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </form>
            <!-- /login form -->

        </div>
        <!-- /content area -->
    </div>
    <!-- /inner content -->

</div>
<!-- /main content -->

</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {authservice, UserEntity} from '@/api'
import {useCounterStore} from '@/stores/counter'
import { signInWithPopup } from 'firebase/auth';
import { auth, socialAuth } from '@/plugins/firebase';


export default defineComponent({
    name: 'LoginView',
    data: () => {
        return {
            userEntity: new UserEntity,
        }
    },
    // setup () {
    //     const socialAuth  = new auth()

    //     return {
    //         auth
    //     }
    // },
    methods: {
        async login () {
            try {
                const response = await authservice.login({
                    email: this.userEntity.email,
                    password: this.userEntity.password
                })
                localStorage.setItem("email", response.user.email as any)
                localStorage.setItem("name", response.user.displayName as any)
                localStorage.setItem("data", response.user.metadata as any)
                useCounterStore().isLoggedIn = true
                this.$router.push('/dashboard')
                const id = Date.now()
                this.$notify({
                        id,
                        type: 'success',
                        duration: 10000,
                        text: 'Successfuly logged in'
                    })
            } catch (err:any) {
                const id = Date.now()
                this.$notify({
                        id,
                        type: 'error',
                        duration: 10000,
                        text: 'err.response.message'
                    })
            }
        },
        socialLogin () {
            signInWithPopup(auth, socialAuth).then((result:any) => {
                let token = result.credential.accessToken;
                let user = result.user
                localStorage.setItem("user", user)
                this.$router.push('/dashboard')
            }).catch((err:any) => {
                const id = Date.now()
                this.$notify({
                    id,
                    type: 'error',
                    duration: 10000,
                    text: 'Oops, Unable to login'
                })
            })
        }
    }
})
</script>
<style scoped>
.login-form-limitless {
    margin-top: 100px;
}
.social-login {
    background-color: #fff;
    margin: 20px 0;
    cursor: pointer;
}
</style>