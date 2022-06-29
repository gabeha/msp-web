<template>
    <div class="container mx-auto min-h-wiki">
      <div class="hidden xl:flex flex-col justify-start transition-opacity min-h-period" :class="showInfo ? 'opacity-20' :fadeBackground ? 'opacity-20' : ''">
          <div class="grid grid-cols-5 grid-rows-1 gap-6 text-center m-4">
              <Semester @period-clicked="fillPool" @module-removed="removeModule" @info-clicked="showInfoCard" :semesterNumber="1" :choices="choices" :current="[this.currentSemester, this.currentPeriod]"></Semester>
              <Semester @period-clicked="fillPool" @module-removed="removeModule" @info-clicked="showInfoCard" :semesterNumber="2" :choices="choices" :current="[this.currentSemester, this.currentPeriod]"></Semester>
              <Semester @period-clicked="fillPool" @module-removed="removeModule" @info-clicked="showInfoCard" :semesterNumber="3" :choices="choices" :current="[this.currentSemester, this.currentPeriod]"></Semester>
              <Semester @period-clicked="fillPool" @module-removed="removeModule" @info-clicked="showInfoCard" :semesterNumber="4" :choices="choices" :current="[this.currentSemester, this.currentPeriod]"></Semester>
              <Semester @period-clicked="fillPool" @module-removed="removeModule" @info-clicked="showInfoCard" :semesterNumber="5" :choices="choices" :current="[this.currentSemester, this.currentPeriod]"></Semester>
          </div>
          <Transition name="bounce">
            <ModulesPool
                @module-clicked="matchModules"
                @info-clicked="showInfoCard"
                @next-period="fillPool"
                :period="this.currentPeriod"
                :semester="this.currentSemester"
                :modules="this.modules"
                :removedModules="this.removedModules"
                :physics="this.physics" 
                :maths="this.maths" 
                :biology="this.biology"
                :neuroscience="this.neuroscience"
                :chemistry="this.chemistry"
                :interdisciplinary="this.interdisciplinary"
                :practicals="this.practicals">
              </ModulesPool>
          </Transition>
      </div>
      <HelpButton @help-clicked="helpClicked" class="hidden justify-self-center xl:block"></HelpButton>
      <div class="flex flex-col justify-center items-center h-wiki xl:hidden">
          <font-awesome-icon class="text-9xl opacity-50" icon="fa-solid fa-screwdriver-wrench" />
          <h5 class="mt-5 text-lg text-center font-semibold">
              The Course Builder on mobile is a work in progress...
          </h5>
          <h5 class="mt-5 text-lg text-center font-semibold text-sky-700">
              Head over to your Laptop or PC to make your choices!
          </h5>
      </div>
    <Transition name="slide-fade">
        <InfoCard :infoModule="infoModule" @close-info-card="this.showInfo = !this.showInfo" v-show="showInfo"></InfoCard>
    </Transition>
    
    </div>


</template>

<script>
import useSupabase from "../composables/UseSupabase";
const { supabase } = useSupabase()
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import  useAuthUser from '../composables/UseAuthUser.js';
const moment = extendMoment(Moment);


export default {
    name: 'CourseBuilder',
    components: {
},
    data() {
        return {
            modules: [],
            modules_copy: [],
            removedModules: [],
            currentPeriod: 1,
            currentSemester: 1,
            canMakeChoice: true,
            showInfo: false,
            fadeBackground: false,
            infoModule: null,
            physics: [],
            maths: [],
            biology: [],
            neuroscience: [],
            chemistry: [],
            interdisciplinary: [],
            practicals: [],
            choices: [],
            select: []
        }
    },
    mounted() {
      this.fetchSelected()
      // this.fetchAllModules()
    },
    setup() {
        const { user } = useAuthUser()
        return {
            user
        }
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
            this.fillPool(this.currentPeriod,this.currentSemester)
        },
        showInfoCard(s) {
          // console.log(s)
            this.infoModule = s
            this.showInfo = !this.showInfo
        },
        fillPool(periodNumber, semesterNumber) {
            this.currentPeriod = periodNumber
            this.currentSemester = semesterNumber
            this.removedModules = []
            this.getNewPeriod(periodNumber)
            this.createSeparateModules(this.modules)
            this.canMakeChoice = true;
            this.handleSwitchPeriod(semesterNumber, periodNumber)
        },

        async getNewPeriod(period) {
            this.modules = this.modules_copy.filter(module => module.period == period).map(module => ({...module}))
            
            var choiceNames = [];
            var moduleNames = []
            this.choices.forEach(choice => 
            {choiceNames.push(choice.selectedModule.subject + choice.selectedModule.code)}
            )
            this.modules.forEach(module => 
            {moduleNames.push(module.subject + module.code)}
            )

            choiceNames.forEach(choice => {
              if(moduleNames.indexOf(choice) !== -1) {
                this.modules.splice(moduleNames.indexOf(choice),1)
                moduleNames.splice(moduleNames.indexOf(choice),1)
              }
            })
        },

        createSeparateModules(modules) {
            this.physics = modules.filter(module => module.subject == 'PHY').sort((a,b) => a.code - b.code)
            this.maths = modules.filter(module => module.subject == 'MAT').sort((a,b) => a.code - b.code)
            this.biology = modules.filter(module => module.subject == 'BIO').sort((a,b) => a.code - b.code)
            this.neuroscience = modules.filter(module => module.subject == 'NEU').sort((a,b) => a.code - b.code)
            this.chemistry = modules.filter(module => module.subject == 'CHE').sort((a,b) => a.code - b.code)
            this.interdisciplinary = modules.filter(module => module.subject == 'INT').sort((a,b) => a.code - b.code)
            this.practicals = modules.filter(module => module.subject == 'PRA').sort((a,b) => a.code - b.code)
        },

        addChoice(selectedModule, semester, period) {
            const choice = {
                selectedModule,
                semester,
                period
            };
        
          if (!this.user) {
            this.choices.push(choice)
            this.checkSelectedTwoCourses(semester, period);
            console.log('not logged in')
          } else {
            this.choices.push(choice)
            this.addtoacc(selectedModule, semester, period)
            this.checkSelectedTwoCourses(semester, period);
            console.log('logged in')
          }
        },

        async addtoacc(sm, sem, per) {
        try {
          const { data, error } = await supabase
              .from('selection_duplicate')
              .upsert([
              { 'id_student': this.user.id, 'selectedModule': sm, 'semester': sem, 'period': per}])
              // whenever period is switched, call this function, deletion doesnt need to be an api call
          this.fetchSelected() //can be refactored
          if (error) {
            alert(error.message)
          return null
         }
          return data
        } catch (err) {
          alert('error')
          return null
          }
        
      },
      async fetchSelected() {
        if (this.user) {
          let { data: selection, error } = await supabase
            .from('selection_duplicate')
            .select()
            .eq('id_student', this.user.id)

          this.choices = selection
          this.fetchAllModules()
        } 
        else {
          this.fetchAllModules()
        }
        },
    
        checkSelectedTwoCourses(semester, period) {
            var iterator = 0;
            // var iterators = [2,4,6,8,10,12,14,16,18,20]
            
            this.choices.forEach(element => {
                    if ((element.selectedModule.subject !== 'PRA') && (element.semester == semester) && (element.period == period)) {
                        iterator++;                    
                    }
                })

            this.populateDeletedModules(period)
            // iterator corresponds to  the number of courses that have been selected
            if (iterator == 2) {
                this.populateDeletedModules(period)
                this.modules = this.modules.filter(course => course.subject == 'PRA')
                this.createSeparateModules(this.modules)
            }

        },
        removeModule(c) {
              this.choices = this.choices.filter(choice => choice.selectedModule.id !== c.selectedModule.id)

              // refactor
          if (this.user) {
            this.removeChoice(c.id)
          } else {
            // nothing
          }
             this.fillPool(c.period, c.semester)
            
            // this.choices.forEach(element => {
            //   this.matchModules(element.selectedModule, element.semester, element.period, false)
            //     })
            this.checkSelectedTwoCourses(c.semester, c.period)
            
        },
        populateDeletedModules(period) {
            // gives the array of removed modules
          this.removedModules = this.modules_copy.filter(module => module.period == period).map(module => ({...module}))

          var removedNames = [];
          var moduleNames = []
          this.removedModules.forEach(rm => 
          {removedNames.push(rm.subject + rm.code)}
          )
          this.modules.forEach(module => 
          {moduleNames.push(module.subject + module.code)}
          )

          moduleNames.forEach(rm => {
            if(removedNames.indexOf(rm) !== -1) {
              this.removedModules.splice(removedNames.indexOf(rm),1)
              removedNames.splice(removedNames.indexOf(rm),1)
            }
          })
        },
        handleSwitchPeriod(semesterNumber, periodNumber) {

            // block choices when switching back to a period where all choices have already been made
            if (this.choices.filter(choice => (choice.semester == semesterNumber && choice.period == periodNumber)).length == 3) {
              this.canMakeChoice = false;
              this.modules = []
              this.createSeparateModules(this.modules)
            }
            // remove the desired module and then check the availabilities based on the remaining array elements
            else {
              this.choices.filter(choice => (choice.semester == semesterNumber && choice.period == periodNumber)).forEach(element => {
                    this.matchModules(element.selectedModule, element.semester, element.period, false)
                    this.checkSelectedTwoCourses(semesterNumber, periodNumber)
                })
            }
            
      },

        async removeChoice(id) {
            let { data: selection, error } = await supabase
                .from('selection_duplicate')
                .delete()
                .eq('id', id)
                // the id here is the selection_duplicate_id
        this.fetchSelected()
            
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

    matchModules(selectedModule, semester, period, add=true) {

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
            this.modules = this.modules.filter(courseInTheTable => this.filterPractical(courseInTheTable, selectedModule, false))
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
            this.modules = this.modules.filter(practicalInTheTable => this.filterPractical(selectedModule, practicalInTheTable, true))
          }
          this.createSeparateModules(this.modules)
          // console.log(this.modules)
          

          if(add) {
            this.addChoice(selectedModule, semester, period);
          }
        
          // return this.modules
        }
  },      
//--------------------------------------------------------------------------------------------
   /* @requires: practical input and course input, one of which will correspond to the selected module 
          and the other will represent the module object passed in by the filter function, as per selectedModule() function
          */
          filterPractical(course, practical, removingPracticalsFromAvailabilityList)
          {
            // extract the course ranges
            const rangeCourseDay1 = moment.range(course.start1, course.end1)
            const rangeCourseDay2 = moment.range(course.start2, course.end2)
            // create the course range array
            let courseRanges = [rangeCourseDay1, rangeCourseDay2]
            let practicalDays = [practical.start1, practical.start2, practical.start3]
            let practicalEnds = [practical.end1, practical.end2, practical.end3]
            let overlaps = []
            // we go over all three practical days..
            for (let i = 0; i < practicalDays.length; i++)
            {
              // and check if its not null
              if (practicalDays[i] !== null) 
              { 
                  overlaps[i] = false
                  let rangePractical = moment.range(practicalDays[i], practicalEnds[i])
                  courseRanges.forEach(courseRange =>
                  {
                      if (rangePractical.overlaps(courseRange))
                    {
                      overlaps[i] = true
                      if (removingPracticalsFromAvailabilityList)
                      {
                        switch (i)
                        {
                          case 0:
                            practical.start1 = null;
                            practical.end1 = null;
                            break;
                          case 1:
                            practical.start2 = null;
                            practical.end2 = null;
                            break;
                          case 2:
                            practical.start3 = null;
                            practical.end3 = null;
                            break;
                        }
                        } }}) }}
              let finalClause = false
              overlaps.forEach(clause => {
                finalClause = finalClause || !clause
              })
              return finalClause
            },
            helpClicked() {
              this.fadeBackground = !this.fadeBackground
            }
          }
  }

</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(500px);
  /* opacity: 0; */
}
</style>