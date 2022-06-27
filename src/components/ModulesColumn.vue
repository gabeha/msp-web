<template>
    <div class="flex flex-col justify-start items-center bg-white bg-opacity-80 border border-gray-300 p-3 rounded-lg shadow-sm min-h-card">
        <h4 class="font-semibold text-center leading-tight text-xl mt-0 mb-4 text-gray-700 capitalize">{{title}}</h4>
        
            <div v-if="subject !== undefined" :class="title == 'practicals' ? 'grid grid-cols-10 w-full' :title == 'removed modules based on your selection so far' ? 'grid grid-cols-10 w-full' : 'grid grid-cols-3 w-full'">
                    <div v-for="s in subject" :key="s.id" class="group">
                        <div class="rounded-full border-2 flex justify-between m-1 hover:scale-105 ease-in-out transition-all" 
                        :class="color == 'blue' ? 'border-sky-500' 
                                :color == 'red' ? 'border-red-400'
                                :color == 'green' ? 'border-green-500'
                                :color == 'pink' ? 'border-rose-300'
                                :color == 'sky' ? 'border-teal-500'
                                :color == 'purple' ? 'border-indigo-400'
                                :color == 'gray' ? 'border-slate-500'
                                :color == 'lightgray' ? 'border-slate-300'
                                : ''">
                            <button @click="moduleClicked(s)"
                            class="px-2 py-2 flex flex-col justify-center items-center font-medium">
                                <h4>
                                    {{s.subject}}{{s.code}}
                                </h4>
                            </button>
                            <button @click="infoClicked(s)" class="rounded-r-full w-12 border border-white"
                            :class="color == 'blue' ? 'bg-sky-500' 
                                :color == 'red' ? 'bg-red-400'
                                :color == 'green' ? 'bg-green-500'
                                :color == 'pink' ? 'bg-rose-300'
                                :color == 'sky' ? 'bg-teal-500'
                                :color == 'purple' ? 'bg-indigo-400'
                                :color == 'gray' ? 'bg-slate-500'
                                :color == 'lightgray' ? 'bg-slate-300'
                                : ''">
                                <font-awesome-icon class="text-white" icon="fa-solid fa-info"/>
                            </button>
                        </div>
                        
                        <h1 class="hidden group-hover:block absolute bg-white p-3 border border-amber-400 rounded-lg font-medium text-lg">
                            {{s.description.title}}
                        </h1>
                    </div>
            </div>
        <div v-if="subject.length == 0 && title !== 'removed modules based on your selection so far'" class="h-full flex justify-center items-center flex-col">
            <h5 class="font-semibold">No more courses available for this subject!</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModulesColumn',
    props: {
        title: String,
        color: String,
        subject: Array,
        semester: Number,
        period: Number
    },
    data() {
        return {
            
        }
    },
    mounted() {

    },
    methods: {
        moduleClicked(s) {
            // console.log(this.semester + ' ' + this.period)
            this.$emit("module-clicked", s, this.semester, this.period);
        },
        infoClicked(s) {
            this.$emit('infoClicked', s)
        }
    }
}
</script>

