<template>
<form @submit.prevent="test()">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <input type="search" id="default-search" class="block p-4 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Search Modules" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-xs px-3 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    </div>
</form>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        test() {
            console.log('Hi')
        }
    }
}
</script>