<template>
    <div class="container mx-auto ">
        <div class="grid grid-cols-1 grid-rows-2">
            <div class="text-center mt-8 px-4 flex flex-col justify-between h-max">
                <h3 class="font-medium leading-tight text-4xl mt-0 mb-2 text-sky-600">Plan your curriculum with the MSP CourseBuilder</h3>
                <p class="text-left text-lg font-medium text-gray-600 mb-6 rounded-xl shadow-xl p-4 w-4/5 mx-auto">
                    Developed by MSP students for MSP students, MSPCourseBuilder is the ultimate tool to plan out your schedule for your time at Maastricht Science Programme.
                </p>
                <img src="../assets/checking_boxes.svg" alt="boxes" class="p-8 mt-4">
                <router-link to="/builder">
                    <Button name="Start Planning" class="text-lg w-3/5"></Button>
                </router-link>
            </div>
            
            <div class="text-center mt-8 px-4 flex flex-col justify-between h-max">
                <h3 class="font-medium leading-tight text-2xl mt-0 mb-2 text-sky-600">Why use MSPCourseBuilder?</h3>
                <p class="text-left text-lg font-medium text-gray-600 mb-6 rounded-xl shadow-xl p-4 w-4/5 mx-auto">
                    The goal of MSPCourseBuilder is to aid students in the course-selection process and to provide an easy-accessible and clear overview of all the possibilities for their choice of courses. Our Curriculum Planner allows you to guide yourself through your journey of MSP in just a few clicks. With our tool, you can plan ahead just your upcoming period or even your whole curriculum.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router.js'

export default {
    name: 'LandingPage',
    components: {
    
    },
    data() {
        return {
            
        }
    },
    mounted() {

    },
    computed() {

    },
    methods: {

    }
}
</script>