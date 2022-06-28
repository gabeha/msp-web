<template>
    <div class="select-none py-4 m-4 rounded-xl border border-gray-600 shadow-xl min-h-96 text-center bg-white bg-opacity-20">
        <div class="flex justify-around items-center">
            <font-awesome-icon @click="previousPeriod" class="text-2xl py-3 px-4 rounded-xl border hover:bg-gray-200" icon="fa-solid fa-chevron-left" />
            <div class="flex flex-col">
                <h3 class="self-center font-medium leading-tight text-4xl mt-0 mb-2 text-sky-600">Modules</h3>
                <h3 class="self-center font-medium leading-tight text-3xl mt-0 mb-2 text-sky-600">Semester {{this.semester}}, Period {{this.period}}</h3>
            </div>
            <font-awesome-icon @click="nextPeriod" class="text-2xl py-3 px-4 rounded-xl border hover:bg-gray-200" icon="fa-solid fa-chevron-right" />
        </div>
        <div v-show="showPool()" class="flex flex-col justify-center items-center min-h-card">
            <h1 class="font-medium leading-tight text-3xl mt-2 mb-2 text-gray-600">You have successfully planned your modules for this period!</h1>
            <button @click="nextPeriod" class="mt-4 py-2 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-center text-lg px-5 ml-3">Next Period</button>
        </div>
        <div v-if="modules !== undefined" v-show="!showPool()" class="grid grid-cols-3 gap-3 p-3">
            <ModulesColumn @module-clicked="passOn" @info-clicked="passOnInfo" :subject="physics" :semester="semester" :period="period" title="physics" color="blue"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" @info-clicked="passOnInfo" :subject="maths" :semester="semester" :period="period" title="maths" color="red"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" @info-clicked="passOnInfo" :subject="biology" :semester="semester" :period="period" title="biology" color="green"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" @info-clicked="passOnInfo" :subject="neuroscience" :semester="semester" :period="period" title="neuroscience" color="pink"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" @info-clicked="passOnInfo" :subject="chemistry" :semester="semester" :period="period" title="chemistry" color="sky"></ModulesColumn>
            <ModulesColumn @module-clicked="passOn" @info-clicked="passOnInfo" :subject="interdisciplinary" :semester="semester" :period="period" title="interdisciplinary" color="purple"></ModulesColumn>
            <ModulesColumn class="col-start-1 col-end-4" @module-clicked="passOn" @info-clicked="passOnInfo" :subject="practicals" :semester="semester" :period="period" title="practicals" color="gray"></ModulesColumn>
            <ModulesColumn class="col-start-1 col-end-4" @info-clicked="passOnInfo" :subject="removedModules" :semester="semester" :period="period" title="removed modules based on your selection so far" color="lightgray"></ModulesColumn>
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
        removedModules: Array,
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
        passOnInfo(s) {
            this.$emit("info-clicked", s)
        },
        showPool() {
            return this.modules.length == 0
        },
        nextPeriod() {
            if (this.semester == 1 || this.semester == 3 || this.semester == 5) {
                if(this.period == 1 || this.period == 4) {
                    this.$emit('next-period', this.period+1, this.semester)
                }
                else if (this.period == 2 && this.semester == 5) {
                    // this.$emit('next-period', this.period+2, this.semester+1)
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
            
        },
        previousPeriod() {
            if (this.semester == 1 || this.semester == 3 || this.semester == 5) {
                if (this.period == 1 && this.semester == 1) {
                    // this.$emit('next-period', this.period+2, this.semester+1)
                }
                else if(this.period == 1 || this.period == 4) {
                    this.$emit('next-period', 5, this.semester-1)
                }
                else {
                    this.$emit('next-period', this.period-1, this.semester)
                }
            }
            else if (this.semester == 2 || this.semester == 4) {
                if(this.period == 1 || this.period == 4) {
                    this.$emit('next-period', 2 , this.semester-1)
                }
                else {
                    this.$emit('next-period', this.period-1, this.semester)
                }
            }
            
        }
    }
}
</script>