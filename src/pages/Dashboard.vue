
<template>
<div class="container min-h-wiki mx-auto">
    <div class="flex flex-col items-center md:flex-row justify-between mt-4 mx-4">
        <h1 class="font-medium md:font-normal leading-tight text-3xl md:text-5xl mt-0 mb-2 text-sky-600">Welcome {{ user.user_metadata.name }}</h1>
        <div class="flex justify-center items-center p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 max-w-max mx-auto md:mx-0" role="alert">
            <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div class="flex flex-col items-center">
                <span class="font-medium">Next Registration Deadline</span> Friday 18 November 2022
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 mt-6 md:mt-0">
        <div class="md:col-span-2">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-medium leading-tight text-3xl mt-0 text-sky-600">Your Courses</h3>
                <router-link to="/builder">
                    <Button name="Continue Selecting"></Button>
                </router-link>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-pool w-full">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 mt-0 w-full">
                        <tr>
                            <th scope="col" class="text-base px-6 py-3">
                                Module
                            </th>
                            <th scope="col" class="text-base px-6 py-3">
                                Semester
                            </th>
                            <th scope="col" class="text-base px-6 py-3">
                                Period
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(s, index) in sel" :key="index" class="overflow-y-auto w-full">
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 w-2/4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                <div class="mr-2 font-semibold tracking-wider text-xs py-0.5 px-1 rounded w-max" 
                                :class="s.selectedModule.subject == 'PHY' ? 'bg-blue-100 text-blue-800' 
                                :s.selectedModule.subject == 'MAT' ? 'bg-red-100 text-red-800'
                                :s.selectedModule.subject == 'BIO' ? 'bg-green-100 text-green-800'
                                :s.selectedModule.subject == 'NEU' ? 'bg-rose-100 text-rose-800'
                                :s.selectedModule.subject == 'CHE' ? 'bg-teal-100 text-teal-800'
                                :s.selectedModule.subject == 'INT' ? 'bg-indigo-100 text-indigo-800'
                                :s.selectedModule.subject == 'PRA' ? 'bg-slate-100 text-slate-800'
                                : ''">
                                    {{s.selectedModule.subject}}{{s.selectedModule.code}}
                                </div>
                                 <span class="text-md">
                                    {{ s.selectedModule.description.title }}
                                 </span>
                            </th>
                            <td class="font-medium px-6 py-4 w-1/4">
                                {{ s.semester }}
                            </td>
                            <td class="font-medium px-6 py-4 w-1/4">
                                {{ s.period }}
                            </td>
                            <td class="px-6 py-4 text-right w-1/4">
                                <button @click="removeChoice(s.id)" class="font-medium text-sky-600 dark:text-sky-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <div class="flex flex-col justify-between bg-white rounded-lg shadow-lg p-4">
            <h3 class="font-medium leading-tight text-3xl mt-0 mb-4 text-sky-600">Your Progress</h3>
             <div class="my-4 border-b-2  border-b-gray-400 pb-10"> 
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-green-500 dark:text-white">Credits</span>
                    <span class="text-sm font-medium text-green-500 dark:text-white">{{this.credits}}/120 <span class="font-medium text-gray-600">(min. 120)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-green-400 h-2.5 rounded-full max-w-full" :style="{width: (this.credits/120)*100 +'%'}"></div>
                    </div>
                </div>
            <div class=" flex flex-col border-b-2 border-b-gray-400 pb-6">
                <h5 class="font-medium leading-tight text-xl mt-0 mb-4 text-sky-600">Minimum Requirements</h5>
                <div class="my-4">    
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-red-500 dark:text-white">Maths Courses</span>
                    <span class="text-sm font-medium text-red-500 dark:text-white">{{(this.math/1)*100 > 100 ? 100 : (this.math/1)*100}}% <span class="font-medium text-gray-600">(min. 1)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-red-400 h-2.5 rounded-full max-w-full" :style="{width: (this.math/1)*100 +'%'}"></div>
                    </div>
                </div>
                <div class="my-4">    
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-indigo-500 dark:text-white">Liberal Arts & Science Courses</span>
                    <span class="text-sm font-medium text-indigo-500 dark:text-white">{{(this.las/1)*100 > 100 ? 100 : (this.las/1)*100}}% <span class="font-medium text-gray-600">(min. 1)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-indigo-400 h-2.5 rounded-full max-w-full" :style="{width: (this.las/1)*100 +'%'}"></div>
                    </div>
                </div>
                <div class="my-4">    
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-orange-500 dark:text-white">Advanced 3000 Level Courses</span>
                    <span class="text-sm font-medium text-orange-500 dark:text-white">{{(this.advanced/4)*100 > 100 ? 100 : (this.advanced/4)*100}}% <span class="font-medium text-gray-600">(min. 4)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-orange-400 h-2.5 rounded-full max-w-full" :style="{width: (this.advanced/4)*100 +'%'}"></div>
                    </div>
                </div>
                <div class="my-4">    
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-gray-500 dark:text-white">Advanced 3000 Level Practicals</span>
                    <span class="text-sm font-medium text-gray-500 dark:text-white">{{(this.advancedPractical/2)*100 > 100 ? 100 : (this.advancedPractical/2)*100}}% <span class="font-medium text-gray-600">(min. 2)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-gray-400 h-2.5 rounded-full max-w-full" :style="{width: (this.advancedPractical/2)*100 +'%'}"></div>
                    </div>
                </div>
               
            </div>
            <div class="flex flex-col mt-4">
                <h5 class="font-medium leading-tight text-xl mt-0 mb-4 text-sky-600">Maximum Limits</h5>
                <div class="my-4">    
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-purple-500 dark:text-white">Introductory Level Courses</span>
                    <span class="text-sm font-medium text-purple-500 dark:text-white">{{(this.introduction/4)*100 > 100 ? 100 : (this.introduction/4)*100}}% <span class="font-medium text-gray-600">(max. 4)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-purple-400 h-2.5 rounded-full max-w-full" :style="{width: (this.introduction/4)*100 +'%'}"></div>
                    </div>
                </div>
                <div class="my-4">    
                    <div class="flex justify-between mb-1">
                    <span class="text-base font-medium text-pink-500 dark:text-white">Introductory Level Practicals</span>
                    <span class="text-sm font-medium text-pink-500 dark:text-white">{{(this.introductionPractical/2)*100 > 100 ? 100 : (this.introductionPractical/2)*100}}% <span class="font-medium text-gray-600">(max. 2)</span></span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-pink-400 h-2.5 rounded-full max-w-full" :style="{width: (this.introductionPractical/2)*100 +'%'}"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import router from '../router.js'
import { ref } from 'vue'
import useSupabase from "../composables/UseSupabase";
const { supabase } = useSupabase()
import  useAuthUser from '../composables/UseAuthUser.js';

export default {
    name: 'Dashboard',
    components: {
    
},
    data() {
        return {
            credits: 0,
            sel: [],
            advanced: 0,
            advancedPractical: 0,
            introduction: 0,
            introductionPractical: 0,
            math: 0,
            las: 0


        }
    },
    setup() {
        const { user } = useAuthUser()
        return {
            user
        }
    },
    mounted() {
        this.fetchSelected()
    },
    computed() {

    },
    methods: {
        async fetchSelected() {
            let { data: selection, error } = await supabase
                .from('selection_duplicate')
                .select()
                .eq('id_student', this.user.id)
            this.sel = selection
            this.tracker()
        },
        tracker() {
            this.sel.forEach(selection => {
                if(selection.selectedModule.subject == "PRA"){
                    this.credits +=2.5
                }
                else if(selection.selectedModule.subject !== "PRA"){
                    this.credits +=5
                }



                if (selection.selectedModule.subject == "MAT") {
                    this.math++
                    if (selection.selectedModule.code < 2000) {
                        this.introduction++
                    }
                } 
                else if (selection.selectedModule.subject == "INT") {
                    if (selection.selectedModule.code == 3001) {
                        this.las++
                        this.advanced++
                    } 
                    else if (selection.selectedModule.code == 2007) {
                        this.las++
                    }
                    else if (selection.selectedModule.code > 3000) {
                        this.advanced++
                    }
                }
                else if (selection.selectedModule.code > 3000 && selection.selectedModule.subject !== 'PRA') {
                    this.advanced++
                } 
                else if (selection.selectedModule.code < 2000 && selection.selectedModule.subject !== 'PRA') {
                    this.introduction++
                }
                else if (selection.selectedModule.subject == "PRA") {
                    if (selection.selectedModule.code > 3000) {
                        this.advancedPractical++
                    } else if (selection.selectedModule.code < 2000) {
                        this.introductionPractical++
                    } else {
                        // nothing
                    }
                }
            })
        },
        async removeChoice(id) {
            let { data: selection, error } = await supabase
                .from('selection_duplicate')
                .delete()
                .eq('id', id)
            if (error == null) {
                this.sel = this.sel.filter(s => s.id !== id).map(module => ({...module})).map(module => ({...module}))
                this.advanced = 0,
                this.advancedPractical = 0,
                this.introduction = 0,
                this.introductionPractical = 0,
                this.math = 0,
                this.las = 0,
                this.credits = 0
                this.tracker()
            }
            else {
                alert(error)
            }
            
            // no need here to call the API, modification to the local copy suffices
            // this.sel = selection
            // this.fetchSelected()
        },
    }

}
</script>

<style scoped>
    ::-webkit-scrollbar{
      width: 10px;
    }
    ::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background-color: #9E9E9E;
      
    }
</style>