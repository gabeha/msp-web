<template>

    <label for="default-search" class=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative ml-1">
   
        <input type="search" id="default-search" v-model="searchTerm"  class="block p-4 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-white-500 focus:border-white-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500 dark:focus:border-white-500" placeholder="Search Modules" required>
        <!-- <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-xs px-3 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button> -->
    </div>

<ul >
<div v-if="searchTerm !== ''" class="w-[89%] absolute max-h-pracs bg-white rounded-lg shadow-2xl border-gray-600 overflow-auto">
 <li v-for="courses in filterItems(modules)" :key="courses.id">

                <button @click="this.$emit('course-clicked', courses.id)" class="flex justify-start items-center bg-white text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{courses.subject}}{{courses.code}} 
                </div>
                <div>
                    {{courses.description.title}}
                </div>
                </button>
            </li>
  
    </div>
</ul>

<!-- 
    
    <div  v-for="courses in filterItems(modules)" :key="courses.id">
    <div v-if="searchTerm !== ''">
<div class="card">
        {{courses.subject}}{{courses.code}} {{courses.description.title}}
</div>
    </div>
    </div> -->


    <!-- <div  v-for="titles in fetchModules" :key="titles.id"> -->
        <!-- <SimpleTypeahead 
        id="typeahead_id"
        placeholder="Start writing..."
        :items="[modules]"
        :minInputLength="1"
        :itemProjection="itemProjectionFunction"
        @selectItem="selectItemEventHandler"
        @onInput="onInputEventHandler"
        @onFocus="onFocusEventHandler"
        @onBlur="onBlurEventHandler"
        >
        </SimpleTypeahead> -->
        <!-- {{titles}} -->
    <!-- </div> -->
   
 

</template>

<script>

export default {
    name: 'SearchBar',
    components:{

    },
    props:{
        modules:Array,
        courses:Array
    },
    data(){
        return{
            searchTerm:'',
        }
    },
    watch: {
        searchTerm: function() {
            // Whenever the prop "name" changes, then we will console log its value.
            console.log('hi')
            this.$emit('toggle-search')
        }
    },
    methods: {
      filterItems(courses) {
      var app = this;
      return courses.filter(function(course) {
        let regex = new RegExp(`^${app.searchTerm}`, 'gi');
        console.log(course)
        return course.description.title.match(regex)
        || course.subject.match(regex) 
        // || course.code.match(regex) 
        
        ;
        
      })
    },
     
 
},


}
      
    
</script>