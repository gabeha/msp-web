<template>
    <vue-final-modal
      v-slot="{ close }"
      v-bind="$attrs"
      classes="flex justify-center items-center"
      content-class="relative flex flex-col max-w-xl mx-4 p-4 border rounded bg-white text-gray-700"
    >
      <span class="mr-8 text-2xl font-bold ">
        <slot name="title"></slot>
      </span>
      <br>
      <p class="font-medium">
        If there is a discrepancy between information on this site and on Canvas/Student Portal, MSP's official information is correct. 
      </p>
      <div class="flex-shrink-0 flex justify-center items-center pt-4">
        <!-- <button class="vfm-btn" @click="$emit('confirm', close)">confirm</button> -->
        <button class="vfm-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="$emit('cancel', close)">Understood</button>
      </div>
      <button class="absolute top-0 right-0 mt-2 mr-2" @click="close">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </vue-final-modal>
  </template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
export default {
  name: 'Modal',
  inheritAttrs: false,
  components: {
    VueFinalModal, ModalsContainer
  }
}
</script>
