<template>
    <div v-if="infoModule !== null" class="fixed flex flex-col justify-start items-start top-20 right-0 w-1/4 bg-white p-6 border border-gray-600 rounded-lg h-info m-4 overflow-auto">
        <button @click="closeInfoCard" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
        </button>
        <div class="flex flex-col text-center w-full">
            <h1 class="font-medium leading-tight text-3xl mt-2 mb-2 text-gray-600">{{infoModule.description.title}}</h1>
            <h4 class="font-thin leading-tight text-xl mt-0 mb-4 text-gray-600">{{infoModule.subject}}{{infoModule.code}}</h4>
        </div>
        <div class=" mx-auto flex flex-col px-3 py-3">
            <h3 class="self-center font-medium leading-tight text-2xl mt-0 mb-2 text-amber-600">Course Information</h3>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Course Coordinator(s)</h5>
            <ul>
                <li class="ml-6" v-for="(o, index) in infoModule.description.course_coordinator" :key="index">
                    {{o}}
                </li>
            </ul>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Pre-requisites</h5>
            <ul class="list-disc">
                <li class="ml-6" v-for="(o, index) in infoModule.description.pre_requisites" :key="index">
                    {{o}}
                </li>
            </ul>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Co-requisites</h5>
            <ul class="list-disc">
                <li class="ml-6" v-for="(o, index) in infoModule.description.co_requisites" :key="index">
                    {{o}}
                </li>
            </ul>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Recommended</h5>
            <ul>
                <li class="ml-6">
                    {{infoModule.description.Recommended}}
                </li>
            </ul>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Objectives</h5>
            <ul class="list-disc">
                <li class="ml-6 text-justify" v-for="(o, index) in infoModule.description.objectives" :key="index">
                    {{o}}
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'InfoCard',
    props: {
        // modules: Array,
        infoModule: Object
    },
    data() {
        return {

        }
    },
    methods: {
        closeInfoCard() {
            this.$emit('close-info-card')
        }
    }
}
</script>