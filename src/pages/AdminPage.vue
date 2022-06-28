<template>
<div class="container min-h-wiki mx-auto">
    <div class="flex flex-col space-y-4 lg:flex-row justify-between items-center my-4 mx-auto w-full bg-white shadow-xl p-8 rounded-lg">
        <div>
            <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-sky-600">Edit Courses</h4>
            <div class="flex space-x-7">
                <select @click="selectorUsed" v-model="id" v-if="modules !== null" class="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" required >
                     <option selected>Choose a course</option>
                     <option v-for="m in modules" :key="m.id" :value="m.id">
                         {{m.subject}}{{m.code}}, {{m.period}}, {{m.description.title}}
                     </option>
                 </select>
                 <button @click="popupadd=!popupadd" type="button" class="text-sky-700 border border-sky-700 hover:bg-sky-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-0  text-center inline-flex items-center mr-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:focus:ring-sky-800">
                <font-awesome-icon icon="fa-solid fa-plus" />
                 </button>
            </div>
        </div>
        <div class="flex">
            <button @click="popupdelete=!popupdelete" type="button" class="justify-self-end self-end text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete Course</button>
    
            <button @click="popupcancel=!popupcancel" type="button" class="justify-self-end self-end text-white bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Cancel</button>
    
            <button @click="popupsave=!popupsave" type="button" class="justify-self-end self-end text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>      
        </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white shadow-xl p-8 rounded-lg">
        <!-- column 1 -->
        <div class="flex flex-col justify-between space-y-3">

            <!-- title box -->
            <label for="title" class="block text-sm font-medium text-gray-900"> Course Title </label>
            <input v-model="title" placeholder="Course Title"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5 " required>
            
        
            <div class="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 lg:space-x-3 w-full">
                <div class="w-full lg:w-1/4">
                <!-- subject -->
                    <div class="flex flex-col">
                        <label for="subjects" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <select v-model="subject"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5 h-10" required>
                        <option selected>Choose a subject</option>
                        <option value="BIO">BIO</option>
                        <option value="CHE">CHE</option>
                        <option value="PHY">PHY</option>
                        <option value="MAT">MAT</option>
                        <option value="INT">INT</option>
                        <option value="NEU">NEU</option>
                        <option value="PRA">PRA</option>
                        <option value="HUM">HUM</option>
                        <option value="KEN">KEN</option>
                        <option value="SCI">SCI</option>
                        <option value="EXT">Others</option>
                        </select> 
                    </div>
                </div>
                <div class="w-full lg:w-1/4">
                    <!-- code -->
                    <div class="flex flex-col">
                        <label for="code" class="block mb-2 text-sm font-medium text-gray-900">Code</label>
                        <input v-model="code" placeholder="Code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5 h-10" required>
                    </div> 
                </div>
                <div class="w-full lg:w-1/4">
                    <!-- Periods -->
                    <div class="flex flex-col">
                        <label for="period" class="block mb-2 text-sm font-medium text-gray-900">Period</label>
                        <select v-model="period" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5 h-10" required>
                        <option selected>Choose a course</option>
                        <option value="1">P1</option>
                        <option value="2">P2</option>
                        <option value="4">P4</option>
                        <option value="5">P5</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- course coordinator -->
            <label for="course_coordinator" class="block text-sm font-medium text-gray-900">Course Coordinator</label>
            <input  placeholder="Course coordinator 1, Course coordinator 2, ..." v-model="course_coordinator" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>

            <!-- contact -->
            <label for="fcontact" class="block text-sm font-medium text-gray-900">Contact</label>
            <input placeholder="Email 1, Email 2, ..." v-model="contact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>

            <!-- pre-requisites -->
            <label for="pre_requisites" class="block text-sm font-medium text-gray-900">Pre-requisites</label>
            <input placeholder="Pre-requisite 1, Pre-requisite 2, Pre-requisite 3, ..." v-model="pre_requisites" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>

            <!-- co-requisites -->
            <label for="co_requisites" class="block text-sm font-medium text-gray-900">Co-requisites</label>
            <input placeholder="Co-requisite 1, Co-requisite 2, Co-requisite 3, ..." v-model="co_requisites" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5 " required>

            <!-- recommended -->
            <label for="recommended" class="block text-sm font-medium text-gray-900">Recommended</label>
            <input  placeholder="Recommended 1, Recommended 2, ..." v-model="recommended" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>
        </div>

        <!-- column 2 -->
        <div class="flex flex-col justify-between space-y-3">

            <!-- objectives -->
            <label for="objectives" class="block text-sm font-medium text-gray-900">Objectives</label>
            <textarea placeholder="Objectives" v-model="objectives" rows="12" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required> </textarea>

            <!-- course description -->
            <label for="description" class="block text-sm font-medium text-gray-900">Course Description</label>
            <textarea placeholder="Description" v-model="description" rows="12" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required> </textarea>
        </div>

        <!-- column 3 -->
        <div class="flex flex-col justify-center space-y-3">

            <!-- literature -->
            <label for="literature" class="block text-sm font-medium text-gray-900">Literature</label>
            <input placeholder="Literature 1, Literature 2, ..." v-model="literature" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>

            <!-- Format -->
            <label for="format" class="block text-sm font-medium text-gray-900">Format</label>
            <input placeholder="Lectures, Tutorials, ..."  v-model="format" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>

            <!-- Assessment -->
            <label for="assessment" class="block text-sm font-medium text-gray-900">Assessment</label>
            <input  placeholder="Midterm, Final, ..." v-model="assessment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2.5" required>

            <!-- grid days etc -->
            <div class="flex justify-between items-center">
                <!-- col 1 -->
                <div class="space-y-10">  
                <div class="space-y-3">
                    <label for="day1" class="block text-sm font-medium text-gray-900">Day 1</label>
                    <select v-model="day1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5" required>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                    </select>
                </div>
                <div class="space-y-3">
                    <label for="day2" class="block text-sm font-medium text-gray-900 ">Day 2</label>
                    <select v-model="day2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5 " required>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="None">None</option>
                    </select>                
                </div>
                <div class="space-y-3">
                    <label for="day3" class="block text-sm font-medium text-gray-900">Day 3</label>
                    <select v-model="day3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5" required>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="None">None</option>
                    </select>                
                </div>
                </div>
                <!-- col2 2 -->
                <div class="space-y-10">
                <div class="space-y-3">
                    <!-- start time d1 -->
                    <label for="start_time_d1" class="block text-sm font-medium text-gray-900"> Start Day 1</label>
                    <input v-model="start_time_d1" type="time" min="08:00" max="20:00" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5" required>
                </div>
                <div class="space-y-3">
                    <!-- start time d2 -->
                    <label for="start_time_d2" class="block text-sm font-medium text-gray-900"> Start Day 2</label>
                    <input v-model="start_time_d2" type="time" min="08:00" max="20:00" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5">
                </div>
                <div class="space-y-3">
                    <!-- start time d3 -->
                    <label for="start_time_d3" class="block text-sm font-medium text-gray-900"> Start Day 3</label>
                    <input v-model="start_time_d3" type="time" min="08:00" max="20:00" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5">
                </div>
                </div>
                <!-- col 3 -->
                <div class="space-y-10">
                <div class="space-y-3">
                    <!-- end time d1 -->
                    <label for="end_time_d1" class="block text-sm font-medium text-gray-900"> End Day 1</label>
                    <input v-model="end_time_d1" type="time" min="08:00" max="20:00" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5" required>
                </div>
                <div class="space-y-3">
                    <!-- end time d2 -->
                    <label for="end_time_d2" class="block text-sm font-medium text-gray-900"> End Day 2</label>
                    <input v-model="end_time_d2" type="time" min="08:00" max="20:00" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5">
                </div>
                <div class="space-y-3">
                    <!-- end time d2 -->
                    <label for="end_time_d3" class="block text-sm font-medium text-gray-900"> End Day 3</label>
                    <input v-model="end_time_d3" type="time" min="08:00" max="20:00" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5">
                </div>
                </div>
            </div>
        </div>

    </div>
</div>

<!-- cancel button -->
<div v-if="popupcancel" class="p-5 border w-1/2 h-1/2 shadow-lg rounded-md bg-white fixed mx-auto top-1/4 left-1/4 flex items-center justify-center z-10">
	<div class="mt-3 text-center">
		<h3 class="text-5xl font-medium text-gray-900">A new course will be created</h3>
		<div class="my-6 px-7 py-3">
			<p class="text-md text-gray-500">
				Do you want to continue? All edits will be lost 
			</p>
		</div>
		<div class="items-center px-4 py-3 space-x-6 my-6">
			<button
				id="cancel-btn"  @click="popupcancel=!popupcancel"
				class="px-4 py-2 text-white bg-red-500 rounded-md baseline hover:bg-red-300">
				Keep Changes
			</button>
      <button
				id="save-btn" @click="cancelButton"
				class="px-4 py-2 text-white bg-sky-900 rounded-md baseline hover:bg-sky-300">
				Cancel
			</button>
		</div>
	</div>
</div>

<!-- new course -->
<div v-if="popupadd" class="p-5 border w-1/2 h-1/2 shadow-lg rounded-md bg-white fixed mx-auto top-1/4 left-1/4 flex items-center justify-center z-10">
	<div class="mt-3 text-center">
		<h3 class="text-5xl font-medium text-gray-900">A new course will be created</h3>
		<div class="my-6 px-7 py-3">
			<p class="text-md text-gray-500">
				Do you want to continue? All edits will be lost 
			</p>
		</div>
		<div class="items-center px-4 py-3 space-x-6 my-6">
			<button
				id="cancel-btn"  @click="popupadd=!popupadd"
				class="px-4 py-2 text-white bg-red-500 rounded-md baseline hover:bg-red-300">
				Cancel
			</button>
      <button
				id="save-btn" @click="activateCreateMode"
				class="px-4 py-2 text-white bg-sky-900 rounded-md baseline hover:bg-sky-300">
				Add course
			</button>
		</div>
	</div>
</div>


<!-- delete -->
<div v-if="popupdelete" class="p-5 border w-1/2 h-1/2 shadow-lg rounded-md bg-white fixed mx-auto top-1/4 left-1/4 flex items-center justify-center z-10">
	<div class="mt-3 text-center">
		<h3 class="text-5xl font-medium text-gray-900">This course is going to be deleted</h3>
		<div class="my-6 px-7 py-3">
			<p class="text-md text-gray-500">
				Are you sure you want ot delete this course?
			</p>
		</div>
		<div class="items-center px-4 py-3 space-x-6 my-6">
			<button
				id="cancel-btn" @click="popupdelete=!popupdelete"
				class="px-4 py-2 text-white bg-red-500 rounded-md baseline hover:bg-red-300">
				Cancel
			</button>
      <button
				id="save-btn" @click="deleteModule"
				class="px-4 py-2 text-white bg-sky-900 rounded-md baseline hover:bg-sky-300">
				Delete course
			</button>
		</div>
	</div>
</div>

<!-- save button -->
<div v-if="popupsave" class="p-5 border w-1/2 h-1/2 shadow-lg rounded-md bg-white fixed mx-auto top-1/4 left-1/4 flex items-center justify-center z-10">
	<div class="mt-3 text-center">
		<h3 class="text-5xl font-medium text-gray-900">Changes were made</h3>
		<div class="my-6 px-7 py-3">
			<p class="text-md text-gray-500">
				All changes cannot be undone, confirm your changes?
			</p>
		</div>
		<div class="items-center px-4 py-3 space-x-6 my-6">
			<button
				id="cancel-btn" @click = "popupsave=!popupsave"
				class="px-4 py-2 text-white bg-red-500 rounded-md baseline hover:bg-red-300">
				Cancel
			</button>
      <button
				id="save-btn" @click="commitButton"
				class="px-4 py-2 text-white bg-sky-900 rounded-md baseline hover:bg-sky-300">
				Save
			</button>
		</div>
	</div>
</div>
</template>

<script>
import useSupabase from "../composables/UseSupabase";
const { supabase } = useSupabase()

export default {
  name: 'App',
  
  data() {
    return {
      popupcancel: false,
      popupsave: false,
      popupdelete: false,
      popupadd: false,

      modules: [],

      id: null,
      title: '',
      subject: '',
      code: '',
      course_coordinator: '',
      contact: '',
      pre_requisites: '',
      co_requisites: '',
      recommended: '',
      objectives: '',
      description: '',
      literature: '',
      format: '',
      assessment: '',
      period: null,
      day1: '',
      start_time_d1: null,
      end_time_d1: null,
      day2: '',
      start_time_d2: null,
      end_time_d2: null,
      day3: '',
      start_time_d3: null,
      end_time_d3: null,

      createMode: false
    }
  },
  mounted() {
    this.retrieveData()
  },
  methods: {
    commitButton() {
            this.popupsave=!this.popupsave
            // Selecting the input element and get its value 
            if (this.inputChecker()){
              this.createOrUpdate()
            }
            else{
              alert('Invalid input')
              console.log("Invalid Input")
            }
            // this.inititalizeData()
            // console.log(this.id)
            // console.log(this.title)
            // console.log(this.subject)
            // console.log(this.code)
            // console.log(this.course_coordinator)
            // console.log(this.contact)
            // console.log(this.pre_requisites)
            // console.log(this.co_requisites)
            // console.log(this.recommended)
            // console.log(this.objectives)
            // console.log(this.description)
            // console.log(this.literature)
            // console.log(this.format)
            // console.log(this.assessment)
            // console.log(this.period)
            // console.log(this.day1)
            // console.log(this.start_time_d1)
            // console.log(this.end_time_d1)
            // console.log(this.day2)
            // console.log(this.start_time_d2)
            // console.log(this.end_time_d2)
            // console.log(this.day3)
            // console.log(this.start_time_d3)
            // console.log(this.end_time_d3)
      },
    // accesses database and stores all the modules from the table in the modules array
    async retrieveData() {
      const response = await supabase
        .from('testjens')
        .select()
        this.modules = response.data
        //console.log(this.modules)
    },
    // accesses database and deletes the module from the table with the current this.id
    async deleteModule(id){  
      this.popupdelete=!this.popupdelete
      const { data, error } = await supabase
      .from('testjens')
      .delete()
      .eq('id', this.id)

      // resets info on site to be up to date and clears all inputs
      this.id = null
      this.inititalizeData()
      await this.retrieveData()

    },
    //accesses database and creates a new entry in the modules table containing all entered values
    async createModule(){
      const { data, error } = await supabase
      .from('testjens')
      .insert([{ 'period': this.period, 'code': this.code, 'subject': this.subject, 'hasprerec': this.noneChecker(this.pre_requisites), 'hascorec': this.noneChecker(this.co_requisites)
              , 'description': this.createJSON()
              , 'start1': this.createDate(this.day1,this.start_time_d1), 'end1': this.createDate(this.day1,this.end_time_d1)
              , 'start2': this.createDate(this.day2,this.start_time_d2), 'end2': this.createDate(this.day2,this.end_time_d2)
              , 'start3': this.createDate(this.day3,this.start_time_d3), 'end3': this.createDate(this.day3,this.end_time_d3)
              }])
      
      // resets info on site to be up to date and clears all inputs
      this.id = null
      this.inititalizeData()
      await this.retrieveData()
    },
    //accesses database and edits a module with the current this.id with the entered values
    async updateModule(){ 
      console.log("HI") 
      const { data, error } = await supabase
      .from('testjens')
      .update({ 'hasprerec': this.noneChecker(this.pre_requisites), 'hascorec': this.noneChecker(this.co_requisites)
              , 'description': this.createJSON(),'period': this.period
              , 'start1': this.createDate(this.day1,this.start_time_d1), 'end1': this.createDate(this.day1,this.end_time_d1)
              , 'start2': this.createDate(this.day2,this.start_time_d2), 'end2': this.createDate(this.day2,this.end_time_d2)
              , 'start3': this.createDate(this.day3,this.start_time_d3), 'end3': this.createDate(this.day3,this.end_time_d3)
              })
      .eq('id', this.id)

      // resets info on site to be up to date and clears all inputs
      this.id = null
      this.inititalizeData()
      await this.retrieveData()
    },
    // checks if the input is '', used for hasprerec and hascorec above
    noneChecker(input){
      return(input != '')
    },
    // creates a JSON to store all the information that is in the description colum of the database
    createJSON() {
      const module_description = {
        title: this.title,
        course_coordinator: [(this.course_coordinator)],
        contact: [(this.contact)],
        pre_requisites: [(this.pre_requisites)],
        co_requisites: [(this.co_requisites)],
        recommended: [(this.recommended)],
        objectives: [(this.objectives)],
        description: this.description,
        literature: [(this.literature)],
        format: this.format,
        assessment: [(this.assessment)]

      }
      return((module_description))
    },
    // takes the entered day and time to be formated in the way required for the database
    createDate(day,time){
        switch(day){
          case 'Monday':
            return ('2022-06-06 '+time[0] +time[1] +':'+time[3] +time[4] +':00.00')
          case 'Tuesday':
            return ('2022-06-07 '+time[0]+time[1]+':'+time[3]+time[4]+':00.00')
          case 'Wednesday':
            return ('2022-06-08 '+time[0]+time[1]+':'+time[3]+time[4]+':00.00')
          case 'Thursday':
            return ('2022-06-09 '+time[0]+time[1]+':'+time[3]+time[4]+':00.00')
          case 'Friday':
            return ('2022-06-10 '+time[0]+time[1]+':'+time[3]+time[4]+':00.00')

        }
    },
    // returns true or false if all inputs are within the allowed ranges and values
    inputChecker(){
      return (this.code != '' && this.subject != '' && this.title != '' 
      && this.course_coordinator != '' && this.period != '' && this.day1 != '' 
      && this.start_time_d1 != '' && this.end_time_d1 != '' && this.code < 4000 
      && this.code>1000 && this.period < 6 && this.period > 0 && this.subject.length < 4)
    },
  //desides whether to call the create or update method depending on the value of createMode (default false) then sets it back to default
  createOrUpdate(){
    console.log("HI") 
    console.log(this.createMode)

    if (this.createMode){
      this.createModule()
      this.createMode = false
    }
    else{
      this.updateModule()
    }    
  },
  // activated on button bress to initiate create mode, maybe it should check first if entries have been saved to not accedentaly delete previous progress
  activateCreateMode(){
    this.popupadd=!this.popupadd
    if (!this.createMode)
      this.createMode = true
      this.id = null
      this.inititalizeData()
  },
  // initializes data, if and id is selected sets values to the ids values, else sets everything to default values
  inititalizeData(){
    if (this.id != null){
      for (let i = 0; i<this.modules.length; i++){
        if (this.modules[i].id == this.id){
          this.title= this.modules[i].description.title
          this.subject= this.modules[i].subject
          this.code= this.modules[i].code
          this.course_coordinator= this.modules[i].description.course_coordinator
          this.contact= this.modules[i].description.contact
          this.pre_requisites= this.modules[i].description.pre_requisites
          this.co_requisites= this.modules[i].description.co_requisites
          this.recommended= this.modules[i].description.recommended
          this.objectives= this.modules[i].description.objectives
          this.description= this.modules[i].description.description
          this.literature= this.modules[i].description.literature
          this.format= this.modules[i].description.format
          this.assessment= this.modules[i].description.assessment
          this.period= this.modules[i].period
          this.day1= this.dayFinder(this.modules[i].start1)
          this.start_time_d1= this.timeFinder(this.modules[i].start1)
          this.end_time_d1=  this.timeFinder(this.modules[i].end1)
          this.day2= this.dayFinder(this.modules[i].start2)
          this.start_time_d2= this.timeFinder(this.modules[i].start2)
          this.end_time_d2= this.timeFinder(this.modules[i].end2)
          this.day3= this.dayFinder(this.modules[i].start3)
          this.start_time_d3= this.timeFinder(this.modules[i].start3)
          this.end_time_d3= this.timeFinder(this.modules[i].end3)

          return;
        }
      }
      console.log("ID not found")
    }
    else{
      this.title= ''
      this.subject= ''
      this.code= ''
      this.course_coordinator= ''
      this.contact= ''
      this.pre_requisites= ''
      this.co_requisites= ''
      this.recommended= ''
      this.objectives= ''
      this.description= ''
      this.literature= ''
      this.format= ''
      this.assessment= ''
      this.period= null
      this.day1= '',
      this.start_time_d1= null
      this.end_time_d1= null
      this.day2= '',
      this.start_time_d2= null
      this.end_time_d2= null
      this.day3= '',
      this.start_time_d3= null
      this.end_time_d3= null
    }
  
  },
  //uses the timestamp to find the day the course is offered
  dayFinder(timestamp){
    if (timestamp == null)
      return null
    switch (timestamp[9]){
      case '6':
        return 'Monday'
      case '7':
        return 'Tuesday'
      case '8':
        return 'Wednesday'
      case '9':
        return 'Thursday'
      case '0':
        return 'Friday'
    }
  },
  //uses the timestamp to find the time the course is offered
  timeFinder(timestamp){
    if (timestamp == null)
      return null
    return (''+timestamp[11]+timestamp[12]+timestamp[13]+timestamp[14]+timestamp[15])
  },
  // splits the inputed data into an array using the ;; as the delimitator
  arrayMaker(str){
    return (str.split(';;'))
  },
  //Activated on cancel button
  cancelButton(){
    this.popupcancel=!this.popupcancel
    this.id = null
    this.inititalizeData()
  },
  //changes create mode to false when the selector is used
  selectorUsed(){
    this.createMode= false
    this.inititalizeData()
  }
  // checkvalue(val)
  //   {
  //     if(val==="others")
  //       document.getElementById('subjecto').style.display='block';
  //     else
  //       document.getElementById('subjecto').style.display='none'; 
  //         },
}
}
</script>
