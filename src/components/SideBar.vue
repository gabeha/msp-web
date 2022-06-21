<template>
<aside class="h-wiki w-2/5" aria-label="Sidebar">
   <div class="overflow-y-auto h-full m-6 bg-white dark:bg-gray-800 ">
      <ul class="space-y-2">
         <li>
            <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
               <font-awesome-icon class="text-3xl" icon="fa-solid fa-building-columns" />
               <span class="ml-3 text-3xl font-medium ">Modules</span>
            </div>
         </li>
         <SearchBar></SearchBar>
        <DropDown @course-clicked="passOn" title="Physics" :physics="physics" :icon="this.icons[0]"></DropDown>
        <DropDown @course-clicked="passOn" title="Maths" :maths="maths" :icon="this.icons[1]"></DropDown>
        <DropDown @course-clicked="passOn" title="Biology" :biology="biology" :icon="this.icons[2]"></DropDown>
        <DropDown @course-clicked="passOn" title="Neuroscience" :neuroscience="neuroscience" :icon="this.icons[3]"></DropDown>
        <DropDown @course-clicked="passOn" title="Chemistry" :chemistry="chemistry" :icon="this.icons[4]"></DropDown>
        <DropDown @course-clicked="passOn" title="Interdisciplinary" :interdisciplinary="interdisciplinary" :icon="this.icons[5]"></DropDown> 
        <DropDown @course-clicked="passOn" title="Practicals" :practicals="practicals" :icon="this.icons[6]"></DropDown> 
      </ul>
   </div>
  
</aside>
</template>

<script>
export default {
    name: "SideBar",
    components: { },
    data() {
      return {
         icons: ['atom', 'square-root-variable', 'dna', 'brain', 'flask', 'circle-nodes', 'wrench']
      }
    },
    props: {
        modules: Array,
        physics: Array,
        maths: Array,
        biology: Array,
        neuroscience: Array,
        chemistry: Array,
        interdisciplinary: Array,
        practicals: Array
    },
    methods: {
        passOn(id) {
            this.$emit('course-clicked', id)
        }
    }
}
</script>