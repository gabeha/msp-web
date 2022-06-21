<template>
    <div class="py-4 m-4 rounded-xl border border-gray-600 shadow-xl text-center h-pool">
        <h3 class="self-center font-medium leading-tight text-3xl mt-0 mb-2 text-sky-600">Modules - Semester {{this.semester}}, Period {{this.period}}</h3>
        <div v-if="modules !== undefined" class="flex justify-around">
            <ModulesColumn @module-clicked="passOn" :subject="physics" :semester="semester" :period="period" title="physics" color="blue"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" :subject="maths" :semester="semester" :period="period" title="maths" color="red"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" :subject="biology" :semester="semester" :period="period" title="biology" color="green"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" :subject="neuroscience" :semester="semester" :period="period" title="neuroscience" color="pink"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" :subject="chemistry" :semester="semester" :period="period" title="chemistry" color="sky"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" :subject="interdisciplinary" :semester="semester" :period="period" title="interdisciplinary" color="purple"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" :subject="practicals" :semester="semester" :period="period" title="practicals" color="gray"></ModulesColumn>
        </div>
        <div v-if="modules.length == 0" class="flex justify-center items-center h-full">
            <h1 class="font-medium leading-tight text-3xl mt-2 mb-2 text-gray-600">You have successfully selected your modules for this period!</h1>
            <button @click="nextPeriod" class="py-2 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-center text-sm px-5 ml-3">Next Period</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "ModulesPool",
    props: {
        period: Number,
        semester: Number,
        modules: Array,
        physics: Array,
        maths: Array,
        biology: Array,
        neuroscience: Array,
        chemistry: Array,
        interdisciplinary: Array,
        practicals: Array
    },
    methods: {
        passOn(s, semester, period) {
            this.$emit("module-clicked", s, semester, period);
        },
        nextPeriod() {
            if (this.semester == 1 || this.semester == 3 || this.semester == 5) {
                if(this.period == 1 || this.period == 4) {
                    this.$emit('next-period', this.period+1, this.semester)
                }
                else {
                    this.$emit('next-period', this.period+2, this.semester+1)
                }
            }
            else if (this.semester == 2 || this.semester == 4) {
                if(this.period == 1 || this.period == 4) {
                    this.$emit('next-period', this.period+1, this.semester)
                }
                else {
                    this.$emit('next-period', 1, this.semester+1)
                }
            }
            
        }
    },
    components: {  }
}
</script>