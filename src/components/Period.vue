<template>
    <div class="cursor-pointer flex flex-col text-center items-center min-h-period rounded-lg border shadow-md p-2 focus:border-2 focus:border-amber-500">
        <h5 @click="emitPeriod" class="font-medium leading-tight text-xl mt-0 mb-2 text-gray-600">Period {{periodNumber}}</h5>
        <div v-if="choices !== undefined">
            <div v-for="c in choices.filter(choice => (choice.semester == this.semester && choice.period == this.periodNumber))" :key="c.selectedModule.id" class="flex flex-col justify-between">
                <div @click="removeModule(c)" class="rounded-full px-2 py-1 border-2 border-gray-500 my-1 hover:bg-slate-500">
                    {{c.selectedModule.subject}}{{c.selectedModule.code}}
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
    },
    data() {
        return {
            
        }
    },
    methods: {
        emitPeriod() {
            this.$emit('period-clicked', this.periodNumber)
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
        }
    }
}
</script>