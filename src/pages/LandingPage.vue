<template>
    <div class="container mx-auto ">
        <div class="flex flex-col justify-center md:grid md:grid-cols-2 md:gap-7">
            <div class=" mt-8 px-4 flex flex-col justify-between h-max">
                <h3 class="text-center font-medium leading-10 text-3xl md:text-6xl md:text-left mt-0 mb-2 text-sky-600 ">Plan your curriculum with the MSP CourseBuilder</h3>
                <p class="text-center text-lg font-medium text-gray-600 mb-6 rounded-xl shadow-xl p-4 w-4/5 mx-auto md:ml-0 md:shadow-none">
                    Developed by MSP students for MSP students, MSP CourseBuilder is the ultimate tool to plan out your schedule for your time at the Maastricht Science Programme.
                </p>
                <img src="../assets/checking_boxes.svg" alt="boxes" class="p-8 mt-4 md:h-96">
                <router-link to="/builder" class=" md:hidden flex justify-center items-center">
                    <Button name="Start Planning" class="text-lg w-3/5"></Button>
                </router-link>
            </div>
            
            <div class="text-center mt-10 px-4 flex flex-col justify-between h-max">
                <h3 class="font-medium leading-tight text-2xl md:text-4xl mt-0 mb-2 text-sky-600">Why use MSP CourseBuilder?</h3>
                <div class="px-3 mt-4">
                    <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                        <li class="mb-10 ml-7">            
                            <span class="flex absolute -left-3 md:-left-5 justify-center items-center w-6 md:w-10 h-6 md:h-10 bg-blue-200 rounded-full dark:ring-gray-900 dark:bg-blue-900">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-3 md:w-6 h-3 md:h-6 text-blue-600 dark:text-blue-400"/>
                            </span>
                            <h3 class="flex items-center mb-1 text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Aid students</h3>
                            <span class="bg-green-100 text-green-800 text-xs md:text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Streamline</span>
                            <p class="mb-4 text-left text-base md:text-lg md:font-medium font-normal mt-1 text-gray-600 dark:text-gray-400">Our tool provides an easily accessible and clear overview of all the possibilities for students' choice of courses.</p>
                        </li>
                        <li class="mb-10 ml-7">            
                            <span class="flex absolute -left-3 md:-left-5 justify-center items-center w-6 md:w-10 h-6 md:h-10 bg-blue-200 rounded-full dark:ring-gray-900 dark:bg-blue-900">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-3 md:w-6 h-3 md:h-6 text-blue-600 dark:text-blue-400"/>
                            </span>
                            <h3 class="flex items-center mb-1 text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Curriculum Planner</h3>
                            <span class="bg-green-100 text-green-800 text-xs md:text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Plan ahead</span>
                            <p class="mb-4 text-left text-base md:text-lg md:font-medium font-normal mt-1 text-gray-600 dark:text-gray-400">Guide yourself through your journey at the MSP in just a few clicks.</p>
                        </li>
                        <li class="mb-10 ml-7">            
                            <span class="flex absolute -left-3 md:-left-5 justify-center items-center w-6 md:w-10 h-6 md:h-10 bg-blue-200 rounded-full dark:ring-gray-900 dark:bg-blue-900">
                                <font-awesome-icon icon="fa-solid fa-calendar-days" class="w-3 md:w-6 h-3 md:h-6 text-blue-600 dark:text-blue-400"/>
                            </span>
                            <h3 class="flex items-center mb-1 text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Course Wiki</h3>
                            <span class="bg-green-100 text-green-800 text-xs md:text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Everything at a glance</span>
                            <p class="mb-4 text-left text-base md:text-lg md:font-medium font-normal mt-1 text-gray-600 dark:text-gray-400">With the Course Wiki directly embedded in the planner, it is now easier than ever to find the information you need.</p>
                        </li>
                    </ol>
                </div>
                <router-link to="/builder" class="hidden md:block mt-8">
                    <Button name="Start Planning" class="text-lg w-2/5"></Button>
                </router-link>
            </div>

            <div class=" md:col-start-1 md:col-end-3">
                <h3 class="font-medium text-center leading-tight text-2xl md:text-4xl mt-0 mb-2 text-sky-600">Why we developed the MSP CourseBuilder?</h3>
                <div class="flex justify-between items-start">
                    <div class="flex flex-col justify-start shadow-xl rounded-lg p-6 w-max mx-3">
                        <h3 class="text-center font-medium leading-tight text-3xl mt-0 mb-2 text-sky-600">Zoe Ducarne</h3>
                        <p class="font-medium text-sm w-full md:w-2/3 mx-auto text-justify">"When choosing my courses at MSP, especially the first few times, it was a difficult task and a bit of a brain teaser. I had to try different combinations on paper and keep in mind so many details that I was simply lost. Being able to have an overview of all my choices on a single screen while making choices for the upcoming semester would have saved me so much time."</p>
                    </div>
                    <div class="hidden md:flex flex-col justify-start shadow-xl rounded-lg p-6 w-max mx-3">
                        <h3 class="text-center font-medium leading-tight text-3xl mt-0 mb-2 text-sky-600">Zoe Ducarne</h3>
                        <p class="font-medium text-sm w-2/3 mx-auto text-justify">"When choosing my courses at MSP, especially the first few times, it was a difficult task and a bit of a brain teaser. I had to try different combinations on paper and keep in mind so many details that I was simply lost. Being able to have an overview of all my choices on a single screen while making choices for the upcoming semester would have saved me so much time."</p>
                    </div>
                    <div class="hidden md:flex flex-col justify-start shadow-xl rounded-lg p-6 w-max mx-3">
                        <h3 class="text-center font-medium leading-tight text-3xl mt-0 mb-2 text-sky-600">Zoe Ducarne</h3>
                        <p class="font-medium text-sm w-2/3 mx-auto text-justify">"When choosing my courses at MSP, especially the first few times, it was a difficult task and a bit of a brain teaser. I had to try different combinations on paper and keep in mind so many details that I was simply lost. Being able to have an overview of all my choices on a single screen while making choices for the upcoming semester would have saved me so much time."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="bg-sky-900 mt-12 w-screen">
    <div class="flex flex-col items-center justify-between px-6 py-10 space-y-12 md:py-10 md:flex-row md:space-y-0">
        <h2 class="text-4xl font-bold leading-tight text-center text-white md:max-w-xl md:text-left">
        Plan your curriculum today
        </h2>
        <div class="my-16 md:mr-16">
            <router-link to="/builder" class="flex justify-center items-center">
                <Button name="Start Planning" class="text-lg "></Button>
            </router-link>
        </div>
    </div>

</section>
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