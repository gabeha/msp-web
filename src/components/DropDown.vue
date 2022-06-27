<template>
<div>
    <button @click="toggleHidden()" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group bg-gray-100 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">
            <font-awesome-icon :icon="'fa-solid fa-'+icon" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{{title}}</span>
            <font-awesome-icon :id="'icon-up-'+title" icon="fa-solid fa-chevron-down" />
            <font-awesome-icon :id="'icon-down-'+title" class="hidden" icon=" fa-solid fa-chevron-up" />
    </button>
    
    <ul :id="'sidebar-menu-'+title" class="hidden py-2 space-y-2 rounded-lg">
             <li v-for="phy in physics" :key="phy.id">

                <button @click="this.$emit('course-clicked', phy.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-indigo-200 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{phy.subject}}{{phy.code}} 
                </div>
                <div>
                    {{phy.description.title}}
                </div>
                </button>
            </li>
            <li v-for="mat in maths" :key="mat.id">
                 <button @click="this.$emit('course-clicked', mat.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-red-100 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{mat.subject}}{{mat.code}}
                </div>
                <div>
                    {{mat.description.title}}
                </div>
                </button>            
            </li>
             <li v-for="bio in biology" :key="bio.id">
                <button @click="this.$emit('course-clicked', bio.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-green-200 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{bio.subject}}{{bio.code}}
                </div>
                <div>
                    {{bio.description.title}}
                </div>
                </button>  
            </li>
             <li v-for="neu in neuroscience" :key="neu.id">
                <button @click="this.$emit('course-clicked', neu.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-pink-200 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{neu.subject}}{{neu.code}}
                </div>
                <div>
                    {{neu.description.title}}
                </div>
                </button>  
            </li>
            <li v-for="che in chemistry" :key="che.id">
                 <button @click="this.$emit('course-clicked', che.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-teal-200 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{che.subject}}{{che.code}}
                </div>
                <div>
                    {{che.description.title}}
                </div>
                </button>  
            </li>
            <li v-for="int in interdisciplinary" :key="int.id">
                <button @click="this.$emit('course-clicked', int.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-sky-200 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{int.subject}}{{int.code}}
                </div>
                <div>
                    {{int.description.title}}
                </div>
                </button>  
            </li>
            <li v-for="pra in practicals" :key="pra.id">
                <button @click="this.$emit('course-clicked', pra.id)" class="flex justify-start items-center text-left p-2 pl-2 w-full text-base font-normal text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-b border-gray-200">
                <div class="mr-2 font-semibold bg-gray-200 tracking-wider text-gray-900 text-xs py-0.5 px-1 rounded w-max">
                    {{pra.subject}}{{pra.code}}
                </div>
                <div>
                    {{pra.description.title}}
                </div>
                </button>  
            </li>
    </ul>
    
</div>
</template>

<script>
export default {
    name: 'DropDown',
    data() {
        return {
            
        }
    },
    props: {
        title: String,
        modules: Array,
        physics: Array,
        maths: Array,
        biology: Array,
        neuroscience: Array,
        chemistry: Array,
        interdisciplinary: Array,
        practicals: Array,
        icon: String
    },
    methods: {
        toggleHidden() {
            // console.log(`sidebar-menu-${this.title}`)
            document.getElementById(`sidebar-menu-${this.title}`).classList.toggle('hidden');
            document.getElementById(`icon-up-${this.title}`).classList.toggle('hidden');
            document.getElementById(`icon-down-${this.title}`).classList.toggle('hidden'); 
        }, 
    }
}
</script>