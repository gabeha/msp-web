<template>
<div class="min-h-wiki flex justify-center items-center bg-login bg-contain bg-center bg-no-repeat"> 
    <div class="bg-white mx-auto p-8 rounded-lg flex flex-col justify-center items-center shadow-2xl border-2 border-gray-300">
    <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-sky-600">Thanks For Registering!</h1>
    
    <p class="text-2xl font-light leading-relaxed mt-6 text-gray-800">
        We've sent an e-mail to <span class="bg-sky-100 text-sky-800 text-3xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">{{ $route.query.email }}</span>
    </p>
    <p class="text-2xl font-normal leading-relaxed mt-6 mb-4 text-gray-800">
        Please check your inbox and click on the confirmation link to continue.
    </p>
    </div>
</div>

</template>