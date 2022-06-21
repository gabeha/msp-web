<template>
    <div class="flex w-screen" v-if="highlightedModule !== null">
        <div class="w-full flex flex-col my-4" v-for="p in this.getModule()" :key="p.id">
            <div class="flex flex-col items-center">
                <h1 class="font-medium leading-tight text-5xl mt-2 mb-2 text-gray-600">{{p.description.title}}</h1>
                <h4 class="font-thin leading-tight text-3xl mt-0 mb-4 text-gray-600">{{p.subject}}{{p.code}}</h4>
            </div>
            <div class="grid grid-cols-2 grid-rows-1 gap-4 mx-4">
                <div class=" bg-white rounded-lg shadow-xl mx-auto flex flex-col px-7 py-3">
                    <h3 class="self-center font-medium leading-tight text-3xl mt-0 mb-2 text-amber-600">Course Information</h3>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Course Coordinator(s)</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.course_coordinator}}
                        </li>
                    </ul>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Pre-requisites</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.pre_requisites}}
                        </li>
                    </ul>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Recommended</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.Recommended}}
                        </li>
                    </ul>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Objectives</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.objectives}}
                        </li>
                    </ul>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Literature</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.literature}}
                        </li>
                    </ul>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Format</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.format}}
                        </li>
                    </ul>
                    <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-amber-600">Assessment</h5>
                    <ul>
                        <li class="ml-6">
                            {{p.description.assessment}}
                        </li>
                    </ul>
                </div>
                <div class=" bg-white rounded-lg shadow-xl mx-auto flex flex-col px-7 py-2">
                    <h3 class="self-center font-medium leading-tight text-3xl mt-0 mb-2 text-amber-600">Course Description</h3>
                    <p class="font-normal text-left text-lg">{{p.description.description}}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center w-full">
        <div class="flex justify-center items-center">
            <font-awesome-icon class="font-normal leading-tight text-5xl mt-2 mb-2 mx-4 text-gray-600" icon="fa-solid fa-arrow-left" />
            <h1 class="font-normal leading-tight text-5xl mt-2 mb-2 text-gray-600">Use the sidebar to find your module...</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseDisplay',
    props: {
        modules: Array,
        highlightedModule: Number
    },
    mounted() {

    },
    methods: {
        getModule() {
            console.log(this.modules.filter(module => module.id == this.highlightedModule))
            return this.modules.filter(module => module.id == this.highlightedModule)
            
        }
    }
}
</script>