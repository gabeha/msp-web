<template>
    <div class="container mx-auto min-h-wiki flex flex-col justify-start">
        <div class="grid grid-cols-5 grid-rows-1 gap-8 text-center m-4">
            <Semester @period-clicked="fillPool" :semesterNumber="1" :choices="choices"></Semester>
            <Semester @period-clicked="fillPool" :semesterNumber="2" :choices="choices"></Semester>
            <Semester @period-clicked="fillPool" :semesterNumber="3" :choices="choices"></Semester>
            <Semester @period-clicked="fillPool" :semesterNumber="4" :choices="choices"></Semester>
            <Semester @period-clicked="fillPool" :semesterNumber="5" :choices="choices"></Semester>
        </div>
        <ModulesPool
            @module-clicked="matchModules"
            @next-period="fillPool"
            :period="this.currentPeriod"
            :semester="this.currentSemester"
            :modules="this.modules" 
            :physics="this.physics" 
            :maths="this.maths" 
            :biology="this.biology"
            :neuroscience="this.neuroscience"
            :chemistry="this.chemistry"
            :interdisciplinary="this.interdisciplinary"
            :practicals="this.practicals"></ModulesPool>
        
    </div>

</template>

<script>
import { supabase } from "../supabase.js"
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);


export default {
    name: 'CourseBuilder',
    components: {
        
    },
    data() {
        return {
            modules: [],
            modules_copy: [],
            currentPeriod: 1,
            currentSemester: 1,
            canMakeChoice: true,
            physics: [],
            maths: [],
            biology: [],
            neuroscience: [],
            chemistry: [],
            interdisciplinary: [],
            practicals: [],

            choices: []
        }
    },
    mounted() {
        this.fetchAllModules()
    },
    computed() {

    },
    methods: {
        async fetchAllModules() {
            let { data: modules, error } = await supabase
            .from('modules')
            .select()
            this.modules = modules
            this.modules.forEach(element => {
                if (element.start1 != null) {
                element.start1 = new Date(element.start1);
                element.end1 = new Date(element.end1);
                }
                if (element.start2 != null) {
                element.start2 = new Date(element.start2);
                element.end2 = new Date(element.end2);
                }
                if (element.start3 != null) {
                element.start3 = new Date(element.start3);
                element.end3 = new Date(element.end3);
                }
            });
            this.modules_copy = this.modules
            console.log(this.modules)
            this.fillPool(this.currentPeriod,this.currentSemester)
        },
        fillPool(periodNumber, semesterNumber) {
            // console.log(this.modules)
            this.currentPeriod = periodNumber
            this.currentSemester = semesterNumber
            this.getNewPeriod(periodNumber)
            this.createSeparateModules(this.modules)
        },

        getNewPeriod(period) {
            this.modules = this.modules_copy.filter(module => module.period == period)
        },

        createSeparateModules(modules) {
            this.physics = modules.filter(module => module.subject == 'PHY')
            this.maths = modules.filter(module => module.subject == 'MAT')
            this.biology = modules.filter(module => module.subject == 'BIO')
            this.neuroscience = modules.filter(module => module.subject == 'NEU')
            this.chemistry = modules.filter(module => module.subject == 'CHE')
            this.interdisciplinary = modules.filter(module => module.subject == 'INT')
            this.practicals = modules.filter(module => module.subject == 'PRA')
        },

        addChoice(selectedModule, semester, period) {
            // console.log('Hi')
            const choice = {
                selectedModule,
                semester,
                period
            };
            this.choices = [...this.choices, choice]
            // console.log(this.choices)
            this.checkChoices();
            return this.choices
        },
        checkChoices() {
            var iterator = 0;
            var iterators = [2,4,6,8,10,12,14,16,18,20]
            this.choices.forEach(element => {
                    if (element.selectedModule.subject !== 'PRA') {
                        iterator++;
                    // console.log(this.choices)
                    
                    }
                })

            // MAASSSSIIVVVE PROBELMS WITH THIS APPROACH (Practicals cannot really be chosen first)

            // iterator corresponds to  the number of courses that have been selected
            if (iterators.includes(iterator)) {
                this.modules = this.modules.filter(course => course.subject == 'PRA')
                this.createSeparateModules(this.modules)
            }

            if ((this.choices.length % 3) == 0) {
                // this.canMakeChoice = false;
                // console.log(this.choices)
                
            }
            else {
                this.canMakeChoice = true;
                // console.log('third')
            }

            // console.log(this.canMakeChoice)
    },
/*
--------------------------------------------------------------------------------------------
@requires: all modules available for selection (provided by calling it on fetchAllModules())

@requires: all of the column entries of the module that user selects, specifically id in the data table, 
subject(PRA/NEU/MAT/etc.), code(1011/3008/etc.), and start-end time pairs in Date format,
where each pair corresponds to day of the week and the specific timeslot 
(i.e. 2022-06-14 8:30, 2022-06-14 10:30 which corresponds to Monday morning slot)

@returns:  all of the options available after the selection has been made

TODO: assert that no more than two courses can be available for selection
TODO: refactor! the functions used for filtering can be extracted to improve readability
*/

    matchModules(selectedModule, semester, period) {

      // console.log(selectedModule, semester, period)

      if (this.canMakeChoice) {

          // ----- Scenario 1: Practical was selected, show all courses available for selection

          if (selectedModule.subject == 'PRA') {

            // We dont want to remove them now APPARENTELY
            // Step 1: remove all other practicals from availability list
            this.modules = this.modules.filter(function(practical) {
            return practical.subject !== 'PRA'
            })

            // Step 2: compare timeslot for each course in the availability list and remove overlapping ones
            this.modules = this.modules.filter(courseInTheTable => this.filterOutPractical(courseInTheTable, selectedModule, false))
          }

          // ----- Scenario 2: Course was selected, show all practicals and courses available for selection
          else {

            // show all available courses
            this.modules = this.modules.filter(function(course) {

            // get timeslots for the course from the list of available courses
              const rangeCourseDay1 = moment.range(course.start1, course.end1)
              const rangeCourseDay2 = moment.range(course.start2, course.end2)

            // get timeslots of the course that was selected (input course)
              const rangePracticalDay1 = moment.range(selectedModule.start1, selectedModule.end1);
              const rangePracticalDay2 = moment.range(selectedModule.start2, selectedModule.end2);

              // if at least one timeslot overlaps -> remove course
              return (!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay1.overlaps(rangePracticalDay2)) || !(rangeCourseDay2.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay2)))
            })

            // show all available practicals
            this.modules = this.modules.filter(practicalInTheTable => this.filterOutPractical(selectedModule, practicalInTheTable, true))
          }
          this.createSeparateModules(this.modules)
          this.addChoice(selectedModule, semester, period);
        
        //   return this.modules
        }
  },      
//--------------------------------------------------------------------------------------------

    /* @requires: practical input and course input, one of which will correspond to the selected module 
    and the other will represent the module object passed in by the filter function, as per selectedModule() function
    */
   filterOutPractical(course, practical, removingPracticalsFromAvailabilityList){
    {   
        // get timeslots of the course 
        const rangeCourseDay1 = moment.range(course.start1, course.end1)
        const rangeCourseDay2 = moment.range(course.start2, course.end2)

         // get the timeslot for the first day when the practical is offered
        // const rangePracticalDay1 = moment.range(practical.start1, practical.end1)

        // if practical is only offered once a day 
        // we cant assume which day it is, so we check all three

        // first slot is not null
        if ((practical.start1 !== null )&& (practical.start2 == null) && (practical.start3 == null)) 
        {
        const rangePracticalDay1 = moment.range(practical.start1, practical.end1)
         return (!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)))
       }
// second slot is not null
       if ((practical.start2 !== null) && (practical.start1 == null) && (practical.start3 == null)) 
       {
       const rangePracticalDay1 = moment.range(practical.start2, practical.end2)
        return (!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)))
      }
// third slot is not null
      if ((practical.start3 !== null) && (practical.start1 == null) && (practical.start2 == null)) 
       {
       const rangePracticalDay1 = moment.range(practical.start3, practical.end3)
        return (!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)))
      }


        // if the practical is offered on two different days
        // first and second day are not null
        if ((practical.start3 == null) && (practical.start2 !== null) && (practical.start1 !== null)) {
          const rangePracticalDay2 = moment.range(practical.start2, practical.end2);
          const rangePracticalDay1 = moment.range(practical.start1, practical.end1)

          // make sure that it doesnt work when we have already selected 
          // a practical and now checking available courses
          const overlap1 = rangeCourseDay1.overlaps(rangePracticalDay1)
          const overlap2 = rangeCourseDay2.overlaps(rangePracticalDay1)

          const overlap3 = rangeCourseDay1.overlaps(rangePracticalDay2) 
          const overlap4 = rangeCourseDay2.overlaps(rangePracticalDay2)
          if (removingPracticalsFromAvailabilityList){
            if(overlap1 || overlap2){
              practical.start1 = null
              practical.end1 = null
            }
            if(overlap3 || overlap4){
              practical.start2 = null
              practical.end2 = null
            }

          }

          return(!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)) 
          || !(rangeCourseDay1.overlaps(rangePracticalDay2) || rangeCourseDay2.overlaps(rangePracticalDay2)))

        }

           // if the practical is offered on two different days
           // first and third slots are not null
           if ((practical.start3 !== null) && (practical.start1 !== null) && (practical.start2 == null)) {
            const rangePracticalDay2 = moment.range(practical.start3, practical.end3);
            const rangePracticalDay1 = moment.range(practical.start1, practical.end1)
  
            // make sure that it doesnt work when we have already selected 
            // a practical and now checking available courses
            const overlap1 = rangeCourseDay1.overlaps(rangePracticalDay1)
            const overlap2 = rangeCourseDay2.overlaps(rangePracticalDay1)
  
            const overlap3 = rangeCourseDay1.overlaps(rangePracticalDay2) 
            const overlap4 = rangeCourseDay2.overlaps(rangePracticalDay2)

            if (removingPracticalsFromAvailabilityList){
              if(overlap1 || overlap2){
                practical.start1 = null
                practical.end1 = null
              }
              if(overlap3 || overlap4){
                practical.start3 = null
                practical.end3 = null
              }
  
            }
  
            return(!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)) 
            || !(rangeCourseDay1.overlaps(rangePracticalDay2) || rangeCourseDay2.overlaps(rangePracticalDay2)))
  
          }

             // if the practical is offered on two different days
             // second and third slots are not null
        if ((practical.start3 !== null) && (practical.start2 !== null) && (practical.start1 == null)) {
            const rangePracticalDay1 = moment.range(practical.start2, practical.end2);
            const rangePracticalDay2 = moment.range(practical.start3, practical.end3)
  
            // make sure that it doesnt work when we have already selected 
            // a practical and now checking available courses
            const overlap1 = rangeCourseDay1.overlaps(rangePracticalDay1)
            const overlap2 = rangeCourseDay2.overlaps(rangePracticalDay1)
  
            const overlap3 = rangeCourseDay1.overlaps(rangePracticalDay2) 
            const overlap4 = rangeCourseDay2.overlaps(rangePracticalDay2)
            
            if (removingPracticalsFromAvailabilityList){
              if(overlap1 || overlap2){
                practical.start2 = null
                practical.end2 = null
              }
              if(overlap3 || overlap4){
                practical.start3 = null
                practical.end3 = null
              }
  
            }
  
            return(!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)) 
            || !(rangeCourseDay1.overlaps(rangePracticalDay2) || rangeCourseDay2.overlaps(rangePracticalDay2)))
  
          }

        // if the practical is offered on three different days
        if ((practical.start3 !== null)&& (practical.start1 !== null) &&(practical.start2 !== null)) {
            const rangePracticalDay1 = moment.range(practical.start1, practical.end1);
            const rangePracticalDay2 = moment.range(practical.start2, practical.end2);
            const rangePracticalDay3 = moment.range(practical.start3, practical.end3);

          const overlap1 = rangeCourseDay1.overlaps(rangePracticalDay1)
          const overlap2 = rangeCourseDay2.overlaps(rangePracticalDay1)

          const overlap3 = rangeCourseDay1.overlaps(rangePracticalDay2) 
          const overlap4 = rangeCourseDay2.overlaps(rangePracticalDay2)

          const overlap5 = rangeCourseDay1.overlaps(rangePracticalDay3)
          const overlap6 = rangeCourseDay2.overlaps(rangePracticalDay3)

          if (removingPracticalsFromAvailabilityList){
            if(overlap1 || overlap2){
              practical.start1 = null
              practical.end1 = null
            }
            if(overlap3 || overlap4){
              practical.start2 = null
              practical.end2 = null
            }
             if(overlap5 || overlap6){
              practical.start3 = null
              practical.end3 = null
            }

          }

          return (!(rangeCourseDay1.overlaps(rangePracticalDay1) || rangeCourseDay2.overlaps(rangePracticalDay1)) 
          || !(rangeCourseDay1.overlaps(rangePracticalDay2) || rangeCourseDay2.overlaps(rangePracticalDay2)) 
          || !(rangeCourseDay1.overlaps(rangePracticalDay3) || rangeCourseDay2.overlaps(rangePracticalDay3)))
        }}},
    }
}
</script>