<template>
    <div>
        <!-- Content area -->
        <div class="content d-flex justify-content-center align-items-center">

        <!-- Registration form -->
        <form class="login-form register-form-limitless" action="index.html">
            <div class="card mb-0">
                <div class="card-body">
                    <div class="text-center mb-3">
                        <div class="d-inline-flex align-items-center justify-content-center mb-4 mt-2">
                            <img src="../../assets/logo_icon.svg" class="h-48px" alt="">
                        </div>
                        <h5 class="mb-0">Create account</h5>
                        <span class="d-block text-muted">All fields are required</span>
                    </div>

                    <div class="text-center text-muted content-divider mb-3">
                        <span class="px-2">Your credentials</span>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Username</label>
                        <div class="form-control-feedback form-control-feedback-start">
                            <input type="text" class="form-control" placeholder="JohnDoe">
                            <div class="form-control-feedback-icon">
                                <PhUserCircle :size="20"/>
                            </div>
                        </div>
                        <div class="form-text text-danger"><PhXClose :size="20"/> This username is already taken</div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <div class="form-control-feedback form-control-feedback-start">
                            <input type="password" class="form-control" placeholder="•••••••••••">
                            <div class="form-control-feedback-icon">
                                <PhLock :size="20"/>
                            </div>
                        </div>
                    </div>

                    <div class="text-center text-muted content-divider mb-3">
                        <span class="px-2">Your contacts</span>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Your email</label>
                        <div class="form-control-feedback form-control-feedback-start">
                            <input type="text" class="form-control" placeholder="john@doe.com">
                            <div class="form-control-feedback-icon">
                                <PhAt :size="20"/>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Repeat email</label>
                        <div class="form-control-feedback form-control-feedback-start">
                            <input type="text" class="form-control" placeholder="john@doe.com">
                            <div class="form-control-feedback-icon">
                                <PhAt :size="20"/>
                            </div>
                        </div>
                    </div>

                    <div class="text-center text-muted content-divider mb-3">
                        <span class="px-2">Additions</span>
                    </div>

                    <div class="mb-3">
                        <label class="form-check mb-2">
                            <input type="checkbox" name="remember" class="form-check-input" checked>
                            <span class="form-check-label">Send me <a href="#">&nbsp;test account settings</a></span>
                        </label>

                        <label class="form-check mb-2">
                            <input type="checkbox" name="remember" class="form-check-input" checked>
                            <span class="form-check-label">Subscribe to monthly newsletter</span>
                        </label>

                        <label class="form-check">
                            <input type="checkbox" name="remember" class="form-check-input">
                            <span class="form-check-label">Accept <a href="#">&nbsp;terms of service</a></span>
                        </label>
                    </div>

                    <button type="submit" class="btn btn-teal w-100">Register</button>
                </div>
            </div>
        </form>
        <!-- /registration form -->

        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'RegisterView',
    data: () => {
        return {
            //
        }
    }
})
</script>
<style scoped>
.register-form-limitless {
    margin-top: 100px;
}
</style>