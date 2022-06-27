<template>
<div class="flex min-h-wiki container mx-auto">
    <SideBar
    @course-clicked="assignCourse"
    :modules="modules" 
    :physics="physics" 
    :maths="maths" 
    :biology="biology"
    :neuroscience="neuroscience"
    :chemistry="chemistry"
    :interdisciplinary="interdisciplinary"
    :practicals="practicals"></SideBar>
    <CourseDisplay 
    :modules="modules" 
    :highlightedModule="highlightedModule"></CourseDisplay>
</div>
</template>

<script>
import router from '../router.js'

import useSupabase from "../composables/UseSupabase";
const { supabase } = useSupabase()

export default {
    name: 'CourseWiki',
    components: {

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
        highlightedModule: null
      }
    },
    created() {
      this.fetchAllModules()
    },
    methods: {
      async fetchAllModules() {
        let { data: modules, error } = await supabase
          .from('modules')
          .select()
        
        this.modules = modules
        this.sortCourses()
      },
      removeDuplicates() {
          var moduleNames = []
          this.modules.forEach(module => 
          {moduleNames.push(module.subject + module.code)}
          )
          // console.log(moduleNames.length)
          moduleNames = moduleNames.filter((item, index) => moduleNames.indexOf(item) !== index).map(m => ({...m}))
          // console.log(moduleNames.length)

          var moduleNames_copy = moduleNames
          console.log(moduleNames_copy.length)

          moduleNames_copy.forEach(dm => {
              this.modules.splice(moduleNames.indexOf(dm),1)
              moduleNames.splice(moduleNames.indexOf(dm),1)
          })

          // console.log(this.modules.filter(m => m.code == 1101))

          // console.log(this.modules.length)
          // return this.modules
      },
      sortCourses() {
            this.physics = this.modules.filter(module => module.subject == 'PHY')
            this.maths = this.modules.filter(module => module.subject == 'MAT')
            this.biology = this.modules.filter(module => module.subject == 'BIO')
            this.neuroscience = this.modules.filter(module => module.subject == 'NEU')
            this.chemistry = this.modules.filter(module => module.subject == 'CHE')
            this.interdisciplinary = this.modules.filter(module => module.subject == 'INT')
            this.practicals = this.modules.filter(module => module.subject == 'PRA')
        },
      assignCourse(id) {
        this.highlightedModule = id
      }
    }
}
</script>