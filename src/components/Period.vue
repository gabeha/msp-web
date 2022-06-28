<template>
    <div @click="emitPeriod" class="cursor-pointer flex flex-col text-center items-center min-h-period h-full rounded-lg border shadow-md py-3 px-3 bg-white bg-opacity-80" :class="this.current[0] == this.semester && this.current[1] == this.periodNumber ? 'border-amber-500 border-2 shadow-inner' : ''">
        <h5  class="select-none font-medium leading-tight text-base lg:text-lg mt-0 mb-2 text-gray-600 rounded-xl px-2 pb-1.5 pt-1 ">Period {{periodNumber}}</h5>
        <div v-if="choices !== undefined">
            <div v-for="c in choices.filter(choice => (choice.semester == this.semester && choice.period == this.periodNumber))" :key="c.selectedModule.id" class="flex flex-col justify-between">
                    <div class="rounded-full border-2 flex justify-between items-center m-1 mx-auto px-2 py-1 space-x-2 w-full"
                    :class="c.selectedModule.hasprerec ? '' : ''">
                            
                            <button class="text-left font-medium text-xs 2xl:text-base"
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
                            <button class="group"
                            :class="c.selectedModule.hasprerec || c.selectedModule.hascorec ? 'flex justify-center items-center' : 'hidden'">
                                <h1 class="hidden group-hover:block absolute  bg-white px-2 py-1 border border-amber-400 rounded-lg font-normal text-sm" v-if="c.selectedModule.hasprerec">
                                    This module has a pre-requisite.
                                </h1>
                                <h1 class="hidden group-hover:block absolute bg-white px-2 py-1 border border-sky-400 rounded-lg font-normal text-sm" v-if="c.selectedModule.hascorec">
                                    This module has a co-requisite.
                                </h1>
                                <h1 class="hidden group-hover:block absolute bg-white px-2 py-1 border border-sky-400 rounded-lg font-normal text-sm" v-if="c.selectedModule.hascorec && c.selectedModule.hasprerec">
                                    This module has a pre- and co-requisite.
                                </h1>
                                <font-awesome-icon class="text-xs" icon="fa-solid fa-exclamation" />
                            </button>
                            <button @click="removeModule(c)" class="flex flex-col justify-center items-center rounded-full">
                                <font-awesome-icon class="text-gray-600 hover:text-red-300  text-xs" icon="fa-solid fa-x" />
                            </button>
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
        choices: Object,
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