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
            <form class="login-form login-form-limitless" action="index.html">
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
                                <input type="text" class="form-control" placeholder="john@doe.com">
                                <div class="form-control-feedback-icon">
                                    <PhUserCircle :size="20"/>
                                </div>
                            </div>
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

                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100">Sign in</button>
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


        <!-- Footer -->
        <!-- <div class="navbar navbar-sm navbar-footer border-top">
            <div class="container-fluid">
                <span>&copy; 2022 <a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328">Limitless Web App Kit</a></span>

                <ul class="nav">
                    <li class="nav-item">
                        <a href="https://kopyov.ticksy.com/" class="navbar-nav-link navbar-nav-link-icon rounded" target="_blank">
                            <div class="d-flex align-items-center mx-md-1">
                                <i class="ph-lifebuoy"></i>
                                <span class="d-none d-md-inline-block ms-2">Support</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item ms-md-1">
                        <a href="https://demo.interface.club/limitless/demo/Documentation/index.html" class="navbar-nav-link navbar-nav-link-icon rounded" target="_blank">
                            <div class="d-flex align-items-center mx-md-1">
                                <i class="ph-file-text"></i>
                                <span class="d-none d-md-inline-block ms-2">Docs</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item ms-md-1">
                        <a href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov" class="navbar-nav-link navbar-nav-link-icon text-primary bg-primary bg-opacity-10 fw-semibold rounded" target="_blank">
                            <div class="d-flex align-items-center mx-md-1">
                                <i class="ph-shopping-cart"></i>
                                <span class="d-none d-md-inline-block ms-2">Purchase</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div> -->
        <!-- /footer -->

    </div>
    <!-- /inner content -->

</div>
<!-- /main content -->

</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    data: () => {
        return {
            //
        }
    }
})
</script>
<style scoped>
.login-form-limitless {
    margin-top: 100px;
}
</style>