<template>
    <div v-if="infoModule !== null" class="flex flex-col justify-start items-start absolute top-20 right-0 w-1/4 bg-white p-6 border border-gray-600 rounded-lg h-info m-4 overflow-auto">
        <font-awesome-icon @click="closeInfoCard" class="text-gray-800 bg-white px-2 py-1 fixed rounded-md" icon="fa-solid fa-xmark" />
        <div class="flex flex-col text-center w-full">
            <h1 class="font-medium leading-tight text-3xl mt-2 mb-2 text-gray-600">{{infoModule.description.title}}</h1>
            <h4 class="font-thin leading-tight text-xl mt-0 mb-4 text-gray-600">{{infoModule.subject}}{{infoModule.code}}</h4>
        </div>
        <div class=" mx-auto flex flex-col px-3 py-3">
            <h3 class="self-center font-medium leading-tight text-2xl mt-0 mb-2 text-amber-600">Course Information</h3>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Course Coordinator(s)</h5>
            <ul>
                <li class="ml-6">
                    {{infoModule.description.course_coordinator}}
                </li>
            </ul>
            <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Pre-requisites</h5>
            <ul class="list-disc">
                <li class="ml-6" v-for="(o, index) in infoModule.description.pre_requisites" :key="index">
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