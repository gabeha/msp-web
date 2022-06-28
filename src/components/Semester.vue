<template>
    <div class="flex flex-col">
        <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-sky-600">Semester {{semesterNumber}}</h5>
        <div class="grid grid-cols-2 grid-rows-1 gap-2">
            <Period @period-clicked="passOn" @module-removed="moduleRemoved" @info-clicked="passOnInfo" :periodNumber="getPeriod()" :choices="choices" :semester="semesterNumber" :current="current"></Period>
            <Period @period-clicked="passOn" @module-removed="moduleRemoved" @info-clicked="passOnInfo" :periodNumber="getPeriod()+1" :choices="choices" :semester="semesterNumber" :current="current"></Period>
        </div>
    </div>
</template>

<script>
export default {
    name: "Semester",
    props: {
        semesterNumber: Number,
        choices: Array,
        current: Array
    },
    mounted() {
        
    },
    methods: {
        getPeriod() {
            if (this.semesterNumber == 1 || this.semesterNumber == 3 || this.semesterNumber == 5) {
                return 1
            }
            else if (this.semesterNumber == 2 || this.semesterNumber == 4) {
                return 4
            }
        },
        passOn(periodNumber, semesterNumber) {
            this.$emit('period-clicked', periodNumber, semesterNumber)
        },
        passOnInfo(s) {
            this.$emit("info-clicked", s)
        },
        moduleRemoved(c) {
            this.$emit('module-removed', c)
        }
    }
}
</script>