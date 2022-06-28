<template>
    <div class="min-h-wiki container mx-auto flex flex-col items-center ">
        <!-- text -->
<div class=" max-w-6xl px-5 mx-auto text-center">
    <!-- heading -->
    <h2 class="text-4xl font-bold text-center text-sky-700 my-6">
        THE PEOPLE BEHIND THE PROJECT
    </h2>
    <p class="text-center text-gray-600 mb-14">
        We are 9 passionate students who want to make a difference within the MSP community. This website <br> was created in the context of a research project. It was designed and created by MSP students for their MSPeers.
    </p>
</div>

<!-- cards -->
<div class=" grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-8">
        <!-- Akboi -->
        <AboutCard class ="flex" person="Akiya Hoken" title="Akiya.com" description="Another of our student leaders of this project, he focused on Maths and Neuroscience at MSP. Akiya worked on the design of our website." ></AboutCard>
        <!-- GabeTheBabe -->
        <AboutCard class ="flex" person="Gabriel Hauss" title="The logical guy" hov="wrapper" description="One of our student leaders of this project, he focuses on Physics at MSP. Gabe worked on the logic and functionality behind our website." ></AboutCard>
        <!-- Snerts -->
        <AboutCard class ="flex" hide="opacity-0 hover:opacity-100" person="Sanne Aarts" title="The hover lover and cookie maker" description="One of our student leaders of this project, she focuses on Physics at MSP. Sanne worked on the functionality and the design of our tool." ></AboutCard>
        <!-- Ducarne -->
        <AboutCard class ="flex" person="Zoé Ducarne" title="npm run build: The bio student" description="She focuses on small Biology at MSP. Zoé worked on the design of our website." ></AboutCard>
        <!-- Mehaa -->
        <AboutCard class ="flex" person="Mehaa Prabakar" title="The one struggling with button sizing" description="She focuses on Maths and Biology at MSP. Mehaa worked on the design of our website." ></AboutCard>
        <!-- Jens -->
        <AboutCard class ="flex" person="Jens Hieronymus" title="The guy who cannot print" description="He focuses on Physics at MSP. Jens worked on the logic and functionality behind our website." ></AboutCard>
        <!-- KELLY WOLTERS -->
        <AboutCard class ="flex" person="Kelly Wolters" title="< div> The one and only < /div>" description="She focuses on Astrophysics at MSP. Kelly worked on the design of our website." ></AboutCard>
        <!-- Antony -->
        <AboutCard class ="flex" person="Anton Schmidt" title="The hamburger menu guy" description="He focuses on Physics at MSP. Anton worked on the design of our website." ></AboutCard>
        <!-- Zyaka -->
        <AboutCard class ="flex" person="Elizaveta Zavialova" title="The one who would like some fries" description="She focuses on Neuroscience and Maths at MSP. Elizaveta worked on the logic and functionality behind our website." ></AboutCard>

    

</div>
</div>
</template>

<script>
import AboutCard from '../components/AboutCard.vue'

export default {
    name: 'AboutPage',
    components: {
    AboutCard
},
    data() {
        return {
            
        }
    },
    mounted() {

    },
    computed() {

    },
    methods: {

    }
}
</script>

