<template>

<div class="h-[60px] lg:h-[73px] w-full bg-white ">
<nav class="z-50 fixed top-0 left-0 w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 border-b">
  <div class="sm:container flex flex-wrap justify-between items-center mx-auto bg-white">
  <router-link to="/" class="flex justify-center items-center">
      <img src="../assets/rooftop_big.png" class="mr-3 h-6 sm:h-12" alt="Logo" />
      <span class="pr-4 pl-3 text-xl sm:text-2xl font-medium whitespace-nowrap dark:text-white font-mono">MSP Course Builder</span>
  </router-link>
  <div class="flex lg:order-1">
      <button @click="toggleHidden()" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 " >
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full max-h-max xl:flex xl:w-auto xl:order-1" id="mobile-menu-4">
    <ul class="flex flex-col mt-[46px] text-xl justify-center items-center lg:flex-row lg:space-x-8 lg:mt-0 lg:text-xl lg:font-semibold">
      <li>
        <router-link @click="toggleHidden()" to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 lg:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</router-link>
      </li>
      <li>
        <router-link @click="toggleHidden()" to="/builder" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Curriculum Planner
        </router-link>
      </li>
      <li>
        <router-link @click="toggleHidden()" to="/wiki" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Course Wiki</router-link>
      </li>
      <li>
        <router-link @click="toggleHidden()" to="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</router-link>
      </li>
      <li>
        <router-link @click="toggleHidden()" to="/dashboard" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</router-link>
      </li>
      <li v-if="isadmin()">
          <router-link @click="toggleHidden()" to="/admin" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Admin Page</router-link>

      </li>
      <li class="hidden" v-else>
      </li>
     <li v-if="!user">
        <router-link to="/login" class="block mx-auto my-2">
            <Button @btn-click="toggleHidden()" name="Login"></Button>
        </router-link>
      </li>
      <li v-else>
        <router-link to="/logout" class="block mx-auto my-2">
          <Button @btn-click="toggleHidden()" name="Logout"></Button>
        </router-link>
      </li>
      </ul>
  </div>
</div>
</nav>
</div>
</template>

<script>
import router from '../router.js'
import useAuthUser from '../composables/UseAuthUser.js';
export default {
  name: 'Navbar',
  components: {
  },
    data() {
        return {
              admin: [
                'spm.aarts@student.maastrichtuniversity.nl',
                'anton.schmidt@student.maastrichtuniversity.nl',
                'e.zavialova@student.maastrichtuniversity.nl',
                'zoe.ducarne@hotmail.com',
                'gabriel.hauss@gmail.com',
                'hoken0903@gmail.com',
                'hieronymus.jens@yahoo.com',
                'kellywolters@hotmail.nl'
            ],
        }
    },
  setup() {
    const { user } = useAuthUser()
    return {
      user
    }
  },
  mounted() {
  },
  computed() {

  },
  methods: {
    toggleHidden() {
            document.getElementById('mobile-menu-4').classList.toggle('hidden');
      },  
    isadmin() {
      if (this.user) {
        return this.admin.includes(this.user.email)
      } else {
        return this.user
      }
    
    },
  }
}
</script>
          