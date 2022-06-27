
<script setup>
import { ref } from 'vue';
import useAuthUser from '../composables/UseAuthUser';
import router from '../router.js'
const { login, register } = useAuthUser();


const form = ref({
    email: "",
    password: "",
    first_name: "",
    last_name: ""
})

const handlelogin = async (provider) => {

        try {
            await login(form.value);
            router.push({ path: "/dashboard" });
        } catch (error) {
            alert(error.message)
        }
}

const handleSubmit = async () => {
    try {
        await register(form.value);
        router.push({
            path: "/email-confirmation",
            query: { email: form.value.email }
        });
    } catch (error) {
        alert(error.message)
    }
}
</script>
<template>

<!-- remove this to make modal -->
<div class="min-h-wiki flex justify-center items-center bg-login bg-contain bg-center bg-no-repeat"> 
    <div class="w-1/5 bg-white mx-auto p-8 rounded-lg flex flex-col justify-center items-center shadow-2xl border-2 border-gray-300">
        <div class="inline-flex rounded-md shadow-sm mb-4" role="group">
            <button @click="toggle('login')" type="button"  class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-2 focus:ring-sky-700 focus:text-sky-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-sky-500 dark:focus:text-white">
                Log in
            </button>
            <button @click="toggle('register')" type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-2 focus:ring-sky-700 focus:text-sky-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-sky-500 dark:focus:text-white">
                Register
            </button>
        </div>
    <form v-if="signup" @submit.prevent="handlelogin()" class="w-full">
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <input type="email" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="john.doe@company.com" required="">
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" id="password" v-model="form.password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="•••••••••" required="">
        </div>
        <button type="submit" class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Submit</button>
    </form>
        
    <form v-else @submit.prevent="handleSubmit()" class="w-full">
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text" id="first_name" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="John" required="">
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Doe" required="">
            </div>
        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <input type="email" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="john.doe@company.com" required="">
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" id="password" v-model="form.password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="•••••••••" required="">
        </div>
        <!-- <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-sky-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-sky-600 dark:ring-offset-gray-800" required="">
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-sky-600 hover:underline dark:text-sky-500">terms and conditions</a>.</label>
        </div> -->
        <button type="submit" class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Submit</button>
    </form>
    </div>
</div>

</template>
<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            signup: true,
        }
    },
    methods: {
        toggle(mode) {
            console.log(mode)
            if (mode == 'login' && this.signup == true) {
                this.signup = this.signup
            }
            else if (mode == 'login' && this.signup == false) {
                this.signup = !this.signup
            }
            else if (mode == 'register' && this.signup == false) {
                this.signup = this.signup
            }
            else if (mode =='register' && this.signup == true) {
                this.signup = !this.signup
            }
        }
    }

        
    
}
</script>