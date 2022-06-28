<template>

<SideNavBar @show-side-bar="toggleSideBar" v-show="mobile_view  "></SideNavBar>
<div class="flex justify-center  md:container min-h-wiki mx-auto  ">
  <!-- transtion wraps sideBar -->
  <Transition name="slide-fade" >
    <SideBar class=""
    v-show="!sideBarShow || !mobile_view "
    @course-clicked="assignCourse"
    :modules="modules" 
    :physics="physics" 
    :maths="maths" 
    :biology="biology"
    :neuroscience="neuroscience"
    :chemistry="chemistry"
    :interdisciplinary="interdisciplinary"
    :practicals="practicals"
    ></SideBar>
    </Transition>
    <!-- <h1>hi</h1> -->
    <CourseDisplay
    :modules="modules" 
    :highlightedModule="highlightedModule"></CourseDisplay>
</div>
</template>

<script>
import router from '../router.js'
import SideNavBar from '../components/SideNavBar.vue'
import useSupabase from "../composables/UseSupabase";
const { supabase } = useSupabase()

export default {
    name: 'CourseWiki',
    components: {
      SideNavBar,
    },
    data() {
      return {
        modules: [],
        physics: [],
        maths: [],
        biology: [],
        neuroscience: [],
        chemistry: [],
        interdisciplinary: [],
        practicals: [],
        highlightedModule: null,
        // Transition sidebar
        sideBarShow: true,
        mobile_view: false,
        resize_view:false
      }
    },
    created() {
      this.fetchAllModules()
    },
    mounted() {
      this.getWidth()
      this.watchResize()

    },
    methods: {
      async fetchAllModules() {
        let { data: modules, error } = await supabase
          .from('modules')
          .select()
        
        this.modules = modules
        this.sortCourses()
      },

      changeDupModule(){
    let IDX = []
    for(let j = 0; j < this.modules.length; j++){
      for(let i = j+1; i < this.modules.length; i++){
        if (this.modules[j].code == this.modules[i].code && this.modules[j].subject == this.modules[i].subject){
          IDX.push(j)
        }
      }
    }
    for (let i = IDX.length-1; i>=0; i--){
      console.log(this.modules[IDX[i]])
      this.modules.splice(IDX[i],1)
    }
    console.log(this.modules)
      },
      sortCourses() {
            this.changeDupModule()
            this.physics = this.modules.filter(module => module.subject == 'PHY').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.maths = this.modules.filter(module => module.subject == 'MAT').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.biology = this.modules.filter(module => module.subject == 'BIO').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.neuroscience = this.modules.filter(module => module.subject == 'NEU').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.chemistry = this.modules.filter(module => module.subject == 'CHE').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.interdisciplinary = this.modules.filter(module => module.subject == 'INT').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.practicals = this.modules.filter(module => module.subject == 'PRA').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            
      },
      assignCourse(id) {
        this.highlightedModule = id
        this.toggleSideBar()
      },

      toggleSideBar(){
        this.sideBarShow = !this.sideBarShow
      },
     watchResize() {
        window.addEventListener('resize', () => { 
            this.mobile_view = window.innerWidth <= 960  || document.documentElement.clientWidth <= 960;
          })
          console.log(this.mobile_view)
      },
      getWidth() {
        this.mobile_view = window.innerWidth <= 960  || document.documentElement.clientWidth <= 960
            console.log(this.mobile_view)
      },
      
    },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s;
}

.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-500px);
  /* opacity: 0; */
}
</style>