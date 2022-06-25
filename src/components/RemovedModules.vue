<template>
    <div v-if="removedModules !== undefined" class="flex flex-row justify-center items-center mx-auto flex-wrap absolute bottom-0 px-5 w-2/3">
        <div v-for="rm in removedModules" :key="rm.id">
            <div class="rounded-full border-2 flex justify-between my-2" 
            :class="color == 'blue' ? 'border-sky-500' 
                    :color == 'red' ? 'border-red-400'
                    :color == 'green' ? 'border-green-500'
                    :color == 'pink' ? 'border-rose-300'
                    :color == 'sky' ? 'border-teal-500'
                    :color == 'purple' ? 'border-indigo-400'
                    :color == 'gray' ? 'border-slate-500'
                    : ''">
                <button @click="moduleClicked(rm)" class="px-2 py-2 flex flex-col justify-center items-center font-medium">
                    <h4>
                        {{rm.subject}}{{rm.code}}
                    </h4>
                </button>
                <button @click="infoClicked(rm)" class="rounded-r-full w-8 border border-white"
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
</template>

<script>
export default {
    name: 'RemovedModules',
    props: {
        removedModules: Array
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>r