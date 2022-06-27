<template>
<div class="hidden fixed left-4 bottom-4 space-y-4 lg:flex md:space-y-0 md:space-x-4 rounded-full shadow-xl">
    <button @click="toggleHelp" class="block w-full md:w-auto text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-bold rounded-full text-lg px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800" type="button">
    ?
    </button>
</div>
<div id="help-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden absolute z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="flex flex-col justify-center items-center mx-auto p-4 w-full max-w-2xl h-screen ">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg dark:bg-gray-700 px-4 shadow-2xl">
            <!-- Modal header -->
            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-3xl font-medium text-gray-900 dark:text-white">
                    How to use the Course Builder
                </h3>
                <button @click="toggleHelp" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <ol class="list-decimal marker:text-amber-500 marker:font-bold marker:text-lg font-normal text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
                    <li>
                        First click on the period in the semester that you would like to select courses for.
                    </li>
                    <li>
                        You will now be able to see all courses you can take in this period.
                    </li>
                    <li>
                        From the course selection, click on a course or practical that you would like to take. 
                    </li>
                    <li>
                        Click on the <span class="font-bold text-amber-600 border-2 border-amber-600 px-2 rounded-full ">i</span> next to the course or practical to get a short overview. The <span class="font-bold">read more</span> button will direct you to the <router-link to="/wiki" class="font-bold text-amber-600">Course Wiki</router-link> for more information.
                    </li>
                    <li>
                        After you have selected a module, the remaining options of courses and practical will be displayed.
                    </li>
                    <li>
                        Continue by completeing your selection of another course and one practical.
                    </li>
                    <li>
                        The courses that you have selected will now be visible at the top of the page under the period and semester that you intially clicked on.
                    </li>
                    <li>
                        You can also switch between periods and semesters by clicking on the the arrows or the desired period.
                    </li>
                    <li>
                        If you're logged in, your selection will be automatically saved to your account and will be visible in the <router-link to="/dashboard" class="font-bold text-amber-600">Dashboard</router-link>
                    </li>
                </ol>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button @click="toggleHelp" type="button" class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HelpButton',
    data() {
        return {

        }
    },
    methods: {
        toggleHelp() {
            this.$emit('help-clicked')
            document.getElementById('help-modal').classList.toggle('hidden')
        }
    },
    emits: ["help-clicked"]
}
</script>