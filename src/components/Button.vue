<template>
    <button @click="onClick()" class="py-2 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-center text-sm px-5 w-full">
        {{name}}
    </button>
</template>

<script>

import router from '../router.js'

export default {
    name: 'Button',
    props: ['name'],
    methods: {
        onClick() {
            this.$emit('btn-click')
        }
    }
}
</script>