<template>
    <div>
        <AppBarDefault v-if="!useStore.isLoggedIn" />
        <div v-else>
            <AppBar />
        </div>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import AppBarDefault from '@/components/AppBarDefault.vue'
import AppBar from '@/components/AppBar.vue'
import { useCounterStore } from '@/stores/counter';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        AppBarDefault,
        AppBar
    },
    data: () => {
        return {
            //
        }
    },
    setup () {
        const useStore = useCounterStore()
        console.log(useStore.isLoggedIn)
        return {
            useStore
        }
    },
    computed: {
        // ...mapStores(useCounterStore, useCounterStore)
    }
})
</script>