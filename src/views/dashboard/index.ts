import { defineComponent } from "vue";

export default defineComponent({
    data: () => {
        return {
            name: '',
            email: '',
            phone: ''
        }
    },
    mounted() {
        this.name = localStorage.getItem("name") as any
        this.email = localStorage.getItem("email") as any
        this.phone = localStorage.getItem("phone") as any
    },
})