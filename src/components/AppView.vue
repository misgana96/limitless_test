<template>
    <div>
        <div v-if="!useStore.isLoggedIn">
            <AppBarDefault  />
            <router-view></router-view>
        </div>
        <div v-else>
            <div class="flex-view">
                <AppBar />
                <div class="flex-main">
                    <SideBar />
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import AppBarDefault from '@/components/AppBarDefault.vue'
import AppBar from '@/components/AppBar.vue'
import SideBar from '@/components/AppSideBar.vue'
import { useCounterStore } from '@/stores/counter';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        AppBarDefault,
        AppBar,
        SideBar
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

<style scoped>
.flex-main {
    display: flex;
    flex-direction: row;
}
</style>