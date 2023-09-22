<script setup lang="ts">
import { useVideoStore } from '../stores/videoStore';

const videoStore = useVideoStore()
</script>

<template>
    <div class="bg-green-500">
        <input type="text" placeholder="Enter Video" v-model="videoStore.video.title"/>
        <button class="rounded-md px-2 py-1 bg-stone-500 text-white" @click="videoStore.addVideo">Add File</button>
        <li v-for="(item, index) in videoStore.videoFiles">
            {{index}} - {{item.title}}
        </li>
    </div>
</template>
