<template>

<aside class="lg:ml-[10%] bg-white left-0 fixed h-[80%] lg:w-[22%] sm:w-[40%] xs:w-[70%] -z-0 px-3 pb-4 lg:mt-1" aria-label="Sidebar">
   <div class=" overflow-y-auto h-full mx-0 py-6 bg-white dark:bg-gray-800 pr-4 ">
      <ul class="space-y-2 ">
         <li>
            <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
               <font-awesome-icon class="text-3xl" icon="fa-solid fa-building-columns" />
               <span class="ml-3 md:text-3xl md:font-medium text-xl ">Modules</span>
            </div>
         </li>
         <SearchBar @course-clicked="passOn" :modules="modules"  ></SearchBar>
        <DropDown @course-clicked="passOn" title="Physics" :modules="modules" :physics="physics" :icon="this.icons[0]"></DropDown>
        <DropDown @course-clicked="passOn" title="Maths" :modules="modules" :maths="maths" :icon="this.icons[1]"></DropDown>
        <DropDown @course-clicked="passOn" title="Biology" :modules="modules" :biology="biology" :icon="this.icons[2]"></DropDown>
        <DropDown @course-clicked="passOn" title="Neuroscience" :modules="modules" :neuroscience="neuroscience" :icon="this.icons[3]"></DropDown>
        <DropDown @course-clicked="passOn" title="Chemistry" :modules="modules" :chemistry="chemistry" :icon="this.icons[4]"></DropDown>
        <DropDown @course-clicked="passOn" title="Interdisciplinary" :modules="modules" :interdisciplinary="interdisciplinary" :icon="this.icons[5]"></DropDown> 
        <DropDown @course-clicked="passOn" title="Practicals" :modules="modules" :practicals="practicals" :icon="this.icons[6]"></DropDown>
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

<style scoped>
    ::-webkit-scrollbar{
      width: 10px;
    }
    ::-webkit-scrollbar-thumb{
      border-radius: 5px;
      background-color: #9E9E9E;
      
    }
  </style>