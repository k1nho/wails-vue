<script lang="ts" setup>
import VideoControls from "./VideoControls.vue"
import VideoFiles from "./VideoFiles.vue"
import Timeline from "./Timeline.vue"
</script>

<template>
    <div class="flex flex-col items-center gap-y-4">
        <div class="flex">
            <VideoFiles/>
            <div class="px-10"></div>
            <VideoControls/>
        </div>
        <div>
            <Timeline/>
        </div>
    </div>
</template>
