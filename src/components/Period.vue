<template>
    <div class="cursor-pointer flex flex-col text-center items-center min-h-period rounded-lg border shadow-md p-3" :class="this.current[0] == this.semester && this.current[1] == this.periodNumber ? 'border-amber-500 border-2 shadow-inner' : ''">
        <h5 @click="emitPeriod" class="select-none font-medium leading-tight text-lg mt-0 mb-2 text-gray-600 rounded-xl border border-gray-300 px-3 pb-1.5 pt-1 hover:bg-slate-200">Period {{periodNumber}}</h5>
        <div v-if="choices !== undefined">
            <div v-for="c in choices.filter(choice => (choice.semester == this.semester && choice.period == this.periodNumber))" :key="c.selectedModule.id" class="flex flex-col justify-between">
                    <div class="rounded-full border-2 flex justify-between m-1 w-5/6 mx-auto"
                    :class="c.selectedModule.hasprerec ? 'border-amber-300' : ''">
                            
                            <button class="py-1 px-1 ml-2 text-left font-medium text-sm"
                            :class="c.selectedModule.subject == 'PHY' ? 'text-sky-500' 
                            :c.selectedModule.subject == 'MAT' ? 'text-red-400'
                            :c.selectedModule.subject == 'BIO' ? 'text-green-500'
                            :c.selectedModule.subject == 'NEU' ? 'text-rose-300'
                            :c.selectedModule.subject == 'CHE' ? 'text-teal-500'
                            :c.selectedModule.subject == 'INT' ? 'text-indigo-400'
                            :c.selectedModule.subject == 'PRA' ? 'text-slate-500'
                            : ''">
                                <h4>
                                    {{c.selectedModule.subject}}{{c.selectedModule.code}}
                                </h4>
                            </button>
                            <!-- <button
                            :class="c.selectedModule.hasprerec ? 'block' : 'hidden'">
                            <font-awesome-icon icon="fa-solid fa-exclamation" />
                            </button> -->
                            <button @click="removeModule(c)" class="w-12 flex flex-col justify-center items-center hover:bg-gray-100 hover:border hover:border-gray-300 rounded-full">
                            <font-awesome-icon class="text-gray-600 text-xs" icon="fa-solid fa-x" />
                            </button>
                            <!-- <button @click="infoClicked(c.selectedModule)" class="rounded-r-full w-12 border border-white">
                                <font-awesome-icon class="text-white" icon="fa-solid fa-info"/>
                            </button> -->
                        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Period',
    props: {
        periodNumber: Number,
        semester: Number,
        choices: Array,
        current: Array
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        emitPeriod() {
            this.$emit('period-clicked', this.periodNumber, this.semester)
        },
        fillPeriods() {
            var mod = this.choices.filter(choice => (choice.semester == this.semester && choice.period == this.periodNumber))
            // console.log(mod[0].selectedModule.id)
            return mod
        },
        removeModule(c) {
            // this.choices[0].selectedModule.id
            // this.choices = this.choices.filter(choice => choice.selectedModule.id == c.selectedModule.id)
            this.$emit('module-removed', c)
        },
        infoClicked(s) {
            this.$emit('infoClicked', s)
        }
    }
}
</script>