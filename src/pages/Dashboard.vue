
<template>
    <div class="container min-h-wiki lg:flex-row items-center px-6 mx-auto mt-1 space-y-0 md:space-y-0">
   <!-- <h1 class="text-5xl mb-16">Welcome {{ user.value.name }}</h1> -->
   <div class="grid grid-cols-4 w-full mx-auto gap-5">
    <div class="col-span-1 row-span-2 rounded-xl text-center p-5  bg-sky-800 w-full h-96">
        <a class="text-white text-2xl  w-full font-bold"> TRACKER </a>
    </div>
        <div class="col-span-1 row-span-1 relative rounded-xl text-center  w-full">
         <div class="bg-white border-2 m-2 relative rounded-2xl h-10 w-full text-xl mx-auto ">
          <h1 class="mx-auto absolute inline-block text-sky-800 left-2 mb-7">CREDITS: </h1>
          <h1 class="mx-auto absolute right-w  text-sky-800 inline-block pr-3  mb-7"> {{ this.credits }} / 180 total </h1>
     </div>
      </div>
      
   
    
    <div class="col-span-2 border-2 row-span-5 w-full text-center h-full"><a class="text-sky-800 text-2xl  w-full font-bold"> Academic Calendar </a></div>
   
    <div class="col-span-2 border-2 row-span-5 w-full grid grid-cols-7 pl-3  h-full">
        <a class="text-sky-800 text-center col-span-7 text-3xl my-5 w-full font-bold"> Your choices </a>
        <a class="col-span-5 text-2xl font-bold text-sky-800 my-2">Module</a>
        <a class="col-span-1 text-base text-center font-bold text-sky-800">Semester</a>
        <a class="col-span-1 text-base text-center font-bold text-sky-800">Period</a>
        <div v-for="(s, index) in sel" :key="index" class=" col-span-7 grid  gap-3 grid-cols-7 grid-flow-col">
            <div class="col-span-5 text-start"><a class="font-bold">{{ s.selected.selectedModule.subject }}{{ s.selected.selectedModule.code }}:</a>  {{ s.selected.selectedModule.description.title }}</div>
            <div class="col-span-1 text-center">{{s.selected.semester}}</div> 
            <div class="col-span-1 text-center ">{{ s.selected.period }}</div>
        </div>
        </div>
     <div class="col-span-1 row-span-1 relative rounded-xl text-center  w-full">
         <div class="bg-white border-2 m-2 relative rounded-2xl col-span-1 row-span-1 w-full text-xl mx-auto ">
          <h1 class="mx-auto break-line text-sky-800 mb-7">COURSES YOU MEET THE PRE-REQUISITES FOR:</h1>
          </div>
      </div>
   </div></div> 
</template>
<script>
import router from '../router.js'
import useSupabase from "../composables/UseSupabase";
const { supabase } = useSupabase()
import  useAuthUser from '../composables/UseAuthUser.js';
const { user } = useAuthUser()
export default {
    name: 'Dashboard',
    components: {
    
    },
    data() {
        return {
            credits: 60,
            sel: []
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
                .from('selection')
                .select()
                .eq('id_student', user.value.id)
            this.sel = selection
            console.log(this.sel)
        }

    }
}
</script>