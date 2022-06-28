<template>
<div class="h-[30px] w-full">
<div class="flex fixed bg-gray-100 w-full h-[30px]">
        <div class=" ml-[6.9px] bg-gray-100 py-1 ">
        <!-- shitty trick for now, ask gabe to clean later -->
        <button @click="this.$emit('show-side-bar')" class="flex">
            <span class="rotate-90" style="display:inline-block">
                <font-awesome-icon class="px-2" icon="fa-solid fa-signal" flip="horizontal" />
            </span>
            <h2 class="flex font-semibold">Menu</h2>
        </button>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'SideNavBar',
    data() {
        return {

        }
    },
    methods: {

    }
}

</script>