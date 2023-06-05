<template>
    <div>
        <AppBar />
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import AppBar from '@/components/AppBarDefault.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        AppBar
    },
    data: () => {
        return {
            //
        }
    }
})
</script>