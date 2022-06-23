<template>
    <div v-if="subject !== undefined" class="flex flex-col items-center">
    <h4 class="font-normal leading-tight text-xl mt-0 mb-4 text-gray-600 capitalize">{{title}}</h4>
        <div :class="title == 'practicals' ? 'grid grid-cols-2 gap-x-3' : 'mx-3'">
            <div v-for="s in subject" :key="s.id">
                <div class="rounded-full border-2 flex justify-between my-2" 
                :class="color == 'blue' ? 'border-sky-500' 
                        :color == 'red' ? 'border-red-400'
                        :color == 'green' ? 'border-green-500'
                        :color == 'pink' ? 'border-rose-300'
                        :color == 'sky' ? 'border-teal-500'
                        :color == 'purple' ? 'border-indigo-400'
                        :color == 'gray' ? 'border-slate-500'
                        : ''">
                    <button @click="moduleClicked(s)" class="px-2 py-2 flex flex-col justify-center items-center font-medium">
                        <h4>
                            {{s.subject}}{{s.code}}
                        </h4>
                        <!-- <p class="text-[10px]">
                            {{s.description.title}}
                        </p> -->
                    </button>
                    <button @click="infoClicked(s)" class="rounded-r-full w-8 border border-white"
                    :class="color == 'blue' ? 'bg-sky-500' 
                        :color == 'red' ? 'bg-red-400'
                        :color == 'green' ? 'bg-green-500'
                        :color == 'pink' ? 'bg-rose-300'
                        :color == 'sky' ? 'bg-teal-500'
                        :color == 'purple' ? 'bg-indigo-400'
                        :color == 'gray' ? 'bg-slate-500'
                        : ''">
                        <font-awesome-icon class="text-white" icon="fa-solid fa-info"/>
                    </button>
                </div>
            </div>
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