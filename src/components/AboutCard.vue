<template>
<div :class="hov" class="flex flex-col items-center max-w-sm bg-white rounded-lg hover:border-amber-500   m-5 bg-opacity-0">
    
        <img class="flex rounded-full" :src="getImageUrl(image)" alt="" />
    
    <div class="text-center p-5">

        <audio id="sound1" src="src/assets/akiyakelly.mp4" preload="auto"></audio>
        <button @click="$emit('kelly-wolters')" href="">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{person}}</h5>
        </button>

        <a target="_blank" :href="link">
        <h3 :class="hide" class="my-2 text-gray-500">{{title}}</h3>
        </a>


        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{description}}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
</template> 

<script>

export default {
    name:'AboutCard',
    data() {
        return {

        }
    },
    props:{
        person:String,
        title:String,
        description:String,
        hov:String,
        hide:String,
        image:String,
        link:String,
        
    },
    methods: {
        getImageUrl(image) {
            return `src/assets/profiles/profile-${image}.jpg`
        }
    }

}

</script>

