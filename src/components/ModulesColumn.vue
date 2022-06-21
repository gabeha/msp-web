<template>
    <div v-if="subject !== undefined" class="flex flex-col items-center">
    <h4 class="font-normal leading-tight text-xl mt-0 mb-4 text-gray-600 capitalize">{{title}}</h4>
        <div :class="title == 'practicals' ? 'grid grid-cols-2 gap-x-3' : ''">
            <div v-for="s in subject" :key="s.id">
                <div class="rounded-full border-2 flex justify-between my-2" 
                :class="color == 'blue' ? 'border-blue-500' 
                        :color == 'red' ? 'border-red-500'
                        :color == 'green' ? 'border-green-500'
                        :color == 'pink' ? 'border-pink-500'
                        :color == 'sky' ? 'border-sky-500'
                        :color == 'purple' ? 'border-purple-500'
                        :color == 'gray' ? 'border-gray-500'
                        : ''">
                    <button @click="moduleClicked(s)" class="px-2 py-2 flex justify-center items-center font-medium">
                        {{s.subject}}{{s.code}}
                    </button>
                    <button class="rounded-r-full w-8 border border-white"
                    :class="color == 'blue' ? 'bg-blue-500' 
                        :color == 'red' ? 'bg-red-500'
                        :color == 'green' ? 'bg-green-500'
                        :color == 'pink' ? 'bg-pink-500'
                        :color == 'sky' ? 'bg-sky-500'
                        :color == 'purple' ? 'bg-purple-500'
                        :color == 'gray' ? 'bg-gray-500'
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
            // console.log(s, this.semester, this.period)
            this.$emit("module-clicked", s, this.semester, this.period);
        }
    }
}
</script>