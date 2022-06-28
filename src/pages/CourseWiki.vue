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
      this.watchResize()
      this.getWidth()
    },
    methods: {
      async fetchAllModules() {
        let { data: modules, error } = await supabase
          .from('modules')
          .select()
          // .eq('period', '4')
        this.modules = modules
        // console.log(this.modules)
        // console.log(uniq)
        this.sortCourses()
      },
      sortCourses() {
            this.physics = this.modules.filter(module => module.subject == 'PHY').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.maths = this.modules.filter(module => module.subject == 'MAT').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.biology = this.modules.filter(module => module.subject == 'BIO').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.neuroscience = this.modules.filter(module => module.subject == 'NEU').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.chemistry = this.modules.filter(module => module.subject == 'CHE').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.interdisciplinary = this.modules.filter(module => module.subject == 'INT').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
            this.practicals = this.modules.filter(module => module.subject == 'PRA').sort((a, b) => parseFloat(a.code) - parseFloat(b.code))
      },
      assignCourse(id) {
        // console.log(id)
        this.highlightedModule = id
      },

      toggleSideBar(){
        this.sideBarShow = !this.sideBarShow
      },

      watchResize() {
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 960) {
              this.mobile_view = true;
            }
            else {
              this.mobile_view = false;
            }
          })
          console.log(this.mobile_view)
          
      },
      getWidth() {
        if(window.innerWidth || document.documentElement.clientWidth <= 960) {
              this.mobile_view = true;
            }
            else {
              this.mobile_view = false;
            }
            console.log(this.mobile_view)
            console.log(this.mobile_view)
      }
      
    },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.5, 1, 1, 0.8);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>