
<template>
    <div class="container min-h-wiki lg:flex-row items-center px-6 mx-auto mt-1 space-y-0 md:space-y-0">
  <div class="my-5 grid grid-cols-2">
  <a class="text-5xl mr-5 font-bold text-sky-800 col-start-1 col-span-1 ">Dashboard</a>
  <a class="text-3xl col-start-1">Welcome {{ user.user_metadata.name }}</a>
  </div> 
   <div class="grid mt-10 grid-cols-6  w-full mx-auto gap-5 grid-flow-row-dense">
    <div class="col-span-3  rounded-xl shadow-md  p-5  text-sky-800 bg-sky-800 w-full">
        <a class="text-white text-2xl text-center block w-full font-bold"> TRACKER </a>
        <a class="text-white text-sm text-center w-full"> Your progress, based on your current selection</a>
        <div class="w-full bg-white my-3 h-10 px-4 py-2 rounded-3xl" ><a class="tracking-tighter float-left ">Math courses:</a> <a class="float-right font-light tracking-tighter">{{ math }} / min 1</a></div>
        <div class="w-full bg-white my-3 h-10 px-4 py-2 rounded-3xl" ><a class="tracking-tighter float-left ">LAS courses:</a> <a class="float-right font-light tracking-tighter">{{ las }} / min 1</a></div>
        <div class="w-full bg-white my-3 h-10 px-4 py-2 rounded-3xl" ><a class="tracking-tighter float-left ">Introductory Level courses:</a> <a class="float-right font-light tracking-tighter">{{ introduction }} / max 4</a></div>
        <div class="w-full bg-white my-3 h-10 px-4 py-2 rounded-3xl" ><a class="tracking-tighter float-left ">Introductory Level practicals:</a> <a class="float-right font-light tracking-tighter">{{ introductionPractical }} / max 2</a></div>
        <div class="w-full bg-white my-3 h-10 px-4 py-2 rounded-3xl" ><a class="tracking-tighter float-left ">Advanced Level courses:</a> <a class="float-right font-light tracking-tighter">{{ advanced }} / min 4</a></div>
        <div class="w-full bg-white my-3 h-10 px-4 py-2 rounded-3xl" ><a class="tracking-tighter float-left ">Advanced Level Practicals:</a> <a class="float-right font-light tracking-tighter">{{ advancedPractical }} / min 2</a></div>
    </div>
        
    <div class="col-span-3 border-4 shadow-md row-span-2 rounded-xl w-full grid grid-cols-7 p-5  h-fit">
        <a class="text-sky-800 text-center col-span-7 text-2xl  w-full font-bold"> YOUR CHOICES </a>
            <a class="col-span-5 text-2xl font-bold text-sky-800 my-2">Module</a>
            <a class="col-span-1 text-base text-center font-bold text-sky-800">Semester</a>
            <a class="col-span-1 text-base text-center font-bold text-sky-800">Period</a>
            <div v-for="(s, index) in sel" :key="index" class=" col-span-7 grid  gap-3 grid-cols-7 grid-flow-col">
                <div class="col-span-5 text-start"><a class="font-bold">{{ s.selectedModule.subject }}{{ s.selectedModule.code }}:</a>  {{ s.selectedModule.description.title }}</div>
                <div class="col-span-1 text-center">{{ s.semester }}</div> 
                <div class="col-span-1 text-center ">{{ s.period }} </div>
                <button @click="removeChoice(s.id)">&times;</button>
            </div>
            <router-link to="/builder" class="my-5 col-span-7 bg-sky-800 rounded-full w-1/2 mx-auto text-center py-3 h-14 text-white font-bold">Continue selecting</router-link>
    </div>
    <div class="col-span-2 border-4 shadow-md grid grid-cols-1 rounded-xl w=3/4 p-5 h-full">
        <a class="text-sky-800 text-center text-2xl mb-4 block w-full font-bold"> YOUR PROFILE </a>
              <div class="w-full"><a class="text-xl  font-bold">Name:</a><a class="float-right" >{{ user.user_metadata.name }}</a></div>
              <div class="w-full"><a class="text-xl  font-bold">E-mail:</a><a class="float-right" >{{ user.email }}</a></div>
            <div class="w-full"> <a class="text-xl font-bold ">Id: </a><a class="float-right" >{{ user.id }}</a></div>
            <div class="w-full"> <a class="text-xl font-bold ">Role: </a><a class="float-right" >{{ user.role }}</a></div>
            <router-link to="/logout" class="my-5 bg-sky-800 text-center py-1 rounded-full w-1/2 mx-auto h-10 text-white font-bold">Sign Out</router-link>
    </div>
    <div class="col-span-1 border-2 shadow-md grid grid-cols-1 bg-sky-800 rounded-xl w=3/4 p-5 h-full">
        <a class="text-white text-center text-2xl mb-4 block w-full font-bold"> NEXT REGISTRATION DEADLINE: </a>
        <a class="text-white text-center text-2xl mb-4 block w-full font-bold"> Friday 18 November 2022</a>
        
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
            credits: 60,
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
                if (selection.selectedModule.subject == "MAT") {
                    this.math++
                } else if (selection.selectedModule.subject == "INT") {
                    if (selection.selectedModule.code == 3001) {
                        this.las++
                        this.advanced++
                    } else if (selection.selectedModule.code == 2007) {
                        this.las++
                    } else if (selection.selectedModule.code > 3000) {
                        this.advanced++
                    } else if (selection.selectedModule.code < 2000) {
                        this.introduction++
                    } else {
                        // nothing
                    }
                } else if (selection.selectedModule.subject == "PRA") {
                    if (selection.selectedModule.code > 3000) {
                        this.advancedPractical++
                    } else if (selection.selectedModule.code < 2000) {
                        this.introductionPractical++
                    } else {
                        // nothing
                    }
                } else {
                    if (selection.selectedModule.code > 3000) {
                        this.advanced++
                    } else if (selection.selectedModule.code < 2000) {
                        this.introduction++
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
            this.sel = selection
            this.fetchSelected()
        },
    }

}
</script>