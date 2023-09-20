import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useVideoStore = defineStore("video", () => {
    const count = ref(0)
    const message = ref("")
    
    const doubleCount = computed(() => {return count.value * 2})


    function increment() {
        count.value++
    }

    function logMessage(msg: string) {
        return msg
    }

    return {count, message, logMessage, doubleCount, increment}
})
