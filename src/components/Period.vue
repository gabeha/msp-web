<template>
    <button @click="emitPeriod" class="cursor-pointer flex flex-col text-center items-center min-h-period bg-sky-100 rounded-lg shadow-lg p-2 focus:border-2 focus:border-amber-500">
        <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-gray-600">Period {{periodNumber}}</h5>
        <div v-if="choices !== undefined">
            <div v-for="(c,index) in fillPeriods()" :key="index" class="flex flex-col justify-between">
                <div class="rounded-full px-2 py-1 border-2 border-gray-500 my-1">
                    {{c.selectedModule.subject}}{{c.selectedModule.code}}
                </div>
            </div>
        </div>
    </button>
</template>

<script>
export default {
    name: 'Period',
    props: {
        periodNumber: Number,
        semester: Number,
        choices: Array,
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
    }
}
</script>