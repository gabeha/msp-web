<template>
    <div class="min-h-wiki container mx-auto flex flex-col items-center ">
        <!-- text -->
<div class=" max-w-6xl px-5 mx-auto text-center">
    <!-- heading -->
    <h2 class="text-4xl font-medium text-center text-sky-700 my-6">
        The people behind the tool
    </h2>
    <p class="text-center text-gray-600 mb-14">
        We are 9 passionate students who want to make a difference within the MSP community. This website <br> was created in the context of a research project. It was designed and created by MSP students for their MSPeers.
    </p>
</div>

<!-- cards -->
<div class=" grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-8">
        <!-- Akboi -->
        <div class="flex flex-col items-center max-w-sm bg-white rounded-lg hover:border-amber-500   m-5 bg-opacity-0">
            
            <img class="flex rounded-full" src="../assets/profiles/profile-6.jpg" alt="" />
            
            <div class="text-center p-5">

                <button @click="$emit('kelly-wolters')" href="">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Akiya Hoken</h5>
                </button>

                <a target="_blank" href="https://www.ikea.com/se/sv/p/huvudroll-kycklingkoettbullar-fryst-90486455/">
                <h3 :class="hide" class="my-2 text-gray-500">Akiya.com</h3>
                </a>


                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Another of our student leaders of this project, he focused on Maths and Neuroscience at MSP. Akiya worked on the design of our website.</p>
                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
        <!-- GabeTheBabe -->
        <!-- <AboutCard class ="flex" image="7" person="Gabriel Hauss" title="The logical guy" hov="wrapper" description="One of our student leaders of this project, he focuses on Physics at MSP. Gabe worked on the logic and functionality behind our website." ></AboutCard> -->
        <!-- Snerts -->
        <!-- <AboutCard class ="flex" image="1" hide="hover:opacity-0 opacity-100" person="Sanne Aarts" title="The hover lover and cookie maker" description="One of our student leaders of this project, she focuses on Physics at MSP. Sanne worked on the functionality and the design of our tool." ></AboutCard> -->
        <!-- Ducarne -->
        <!-- <AboutCard class ="flex" image="2" person="Zoé Ducarne" title="npm run build: The bio student" description="She focuses on small Biology at MSP. Zoé worked on the design of our website." ></AboutCard> -->
                <!-- Jens -->
        <!-- <AboutCard class ="flex" image="5" person="Jens Hieronymus" title="The guy who cannot print" description="He focuses on Physics at MSP. Jens worked on the logic and functionality behind our website." ></AboutCard> -->
        <!-- KELLY WOLTERS -->
        <!-- <AboutCard @kelly-wolters="kelly" class ="flex" image="3" person="Kelly Wolters" title="< div> The one and only < /div>" description="She focuses on Astrophysics at MSP. Kelly worked on the design of our website." ></AboutCard> -->
        <!-- Antony -->
        <!-- <AboutCard class ="flex" image="4" person="Anton Schmidt" title="The hamburger menu guy" description="He focuses on Physics at MSP. Anton worked on the design of our website." ></AboutCard> -->
        <!-- Zyaka -->
        <!-- <AboutCard class ="flex" image="8" person="Elizaveta Zavialova" title="The one who would like some fries" description="She focuses on Neuroscience and Maths at MSP. Elizaveta worked on the logic and functionality behind our website." ></AboutCard> -->
        <!-- Mehaa -->
        <!-- <AboutCard class ="flex" image="9" person="Mehaa Prabakar" title="The one struggling with button sizing" description="She focuses on Maths and Biology at MSP. Mehaa worked on the design of our website." ></AboutCard> -->


    

</div>
</div>
</template>

<script>

export default {
    name: 'AboutPage',
    components: {
    
},
    data() {
        return {
            
        }
    },
    mounted() {

    },
    computed() {

    },
    methods:{
        kelly(){
            document.getElementById('sound1').play();
        }
    }
}
</script>

