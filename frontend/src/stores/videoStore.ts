import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface Video {
    title: string
}

export const useVideoStore = defineStore("video", () => {
    // state
    const videoFiles = ref<Video[]>([])
    const video = ref<Video>({title: ""})

    // actions
    function addVideo() {
        videoFiles.value.push({...video.value})
    }


    // computed props
    const videoFileCount = computed(() => {return videoFiles.value.length})
    

    return {video, videoFiles, videoFileCount, addVideo}
})
