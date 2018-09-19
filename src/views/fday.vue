<template>
  <div id="ttt">  

    <!-- Navbar start-->
   <nav class="navbar navbar-expand-lg navbar-danger bg-danger" id="mar">
    <a href="#/Taskp">
    <span class="glyphicon glyphicon-time" id="time"></span>
    </a>
    <a class="nav-link" href="#/Logout" ><span class="L">Logout</span></a>
   </nav>
   <!-- navbar _ end-->

<!-- 
    Global Begin
 -->

  
   <span data-toggle="tooltip" data-placement="top" title="Get Full Weather Data"><img src="../assets/weather_css.gif" data-toggle="modal" data-target="#exampleModalLong" id="earth"></span>


<!-- 
  Global End -->


   <div class="pota">
   <h3>Welcome {{ user }}</h3>
     <p>{{ time }}</p>
   </div>

   <!-- Weather_data_start -->
    

    <div id="weapos">
     <h6 style="width: 50px;">City_name: {{ city }}</h6>

    <h6>Weather: {{ description }}</h6>
     
    <h6>Temperature: {{ temp }}'C</h6>

    <h6>Temperature: {{ funda(temp) }}'F</h6>

     <div><img id="wicon" src="" alt="Weather icon"></div>

     <h6>City name:<input type="text" id="ro" v-model="city_name"></h6>

     <button type="button" class="btn btn-secondary" id="gd"  v-on:click="display()">Get data</button>

     </div>

     <!-- Weather Data End -->

      <!-- Inbox button_Start-->


       <router-link :to="{name: 'inbox'}">
        <button type="button" class="btn btn-default btn-sm" id="inbox" >
          <span class="glyphicon glyphicon-inbox"></span> Inbox
        </button>
      </router-link>

        <!-- Inbox button _end-->



        <!-- Next _ 5 day button Start -->
         

         <div id="fs">
        <router-link :to="{name: 'fday'}">
        <button type="button" class="btn btn-default btn-sm" id="" >
          <i class="material-icons">list</i><span class="bur">5 days</span>
        </button>
      </router-link>
    </div>


        <!-- Next _5 Day button _End-->



          <!-- Home Link-->
    <a href="#/Taskp" id="homecon">
          <span class="glyphicon glyphicon-home" data-toggle="tooltip" data-placement="right" title="Home page" >Home</span>
        </a>
            

    
        <!-- Home_link_end -->


         <h4 class="mark">Five day Scheduler:</h4>


     
        <div id="horizontal-line"></div>
   <div id="vertical-liness"></div>


   <!-- Task Form -->
      
    <div id="bg-modal">
      <div class="modal-content">
      
         <div class="close" v-on:click="closee()">+</div>
       
         
          <form>
              
                <!-- Text  -->
               <div id="taskpos">
              <label for="example-text-input" class="col-2 col-form-label"><span class="loosu">TASK<span class="mdd">DESCRIPTION:</span></span></label>
             <div class="col-10">
             <input class="form-control" type="text" placeholder="enter task description here" id="example-text-input" v-model="task">
             </div>
             </div>  
               <!-- End Text -->  

              <!-- Date -->

              <div class="form-group row">
                <label for="example-date-input" class="col-2 col-form-label"><span class="dupd">DATE:</span></label>
                <div class="col-4" id="vj">
                  <input class="form-control" type="date" value="2011-08-19" id="example-date-input" v-model="date">
                </div>
              </div>
                      
              <!-- End DAte --> 
              
              <!-- Start Time -->
                

               <div class="form-group row">
                  <label for="example-time-input" class="col-2 col-form-label"><span class="dupt">TIME:</span></label>
                  <div class="col-4" id="vt">
                    <input class="form-control" type="time" value="13:45:00" id="example-time-input" v-model="time_t">
                  </div>
                </div>

              <!-- End Time -->


                   
             <div id="space_2">
            <button type="button" class="btn btn-primary" v-on:click="task_add()">Submit</button>
          </div> 


           <ul class="dot">
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
           </ul>


         </form>



      </div>
    </div>

   <!-- End of Task Forms -->


        <!--Five Day Tasks begin -->
             
             <div id = "Fivetoday"> <h4 class="pu">{{ fivetoday }}</h4></div>
             <div id = "Fivesecond"><h4 id="colo">{{ fivetommorow }}</h4></div>
             <div id = "Fivethird"><h4 id="colo">{{ fivethird }}</h4></div>
              <div id = "Fivefourth"><h4 id="colo">{{ fivefourth }}</h4></div>
               <div id = "Fivefifth"><h4 id="colo">{{ fivefifth }}</h4></div>
               <div id = "Fivesixth"><h4 id="colo">{{ fivesixth }}</h4></div>

             
        <!--Five Day Tasks End -->

            <div id="horizontal-linee"></div>

<!-- 

          add task buttons beginning -->

          <button type="button" class="btn btn-secondary" data-toggle="modal" id="pbs" data-target="#fdayz">+</button>


           <button type="button" class="btn btn-secondary" data-toggle="modal" id="pbstwo" data-target="#fdayo">+</button>

              <button type="button" class="btn btn-secondary" data-toggle="modal" id="pbsthree" data-target="#fdayt">+</button>


                <button type="button" class="btn btn-secondary" data-toggle="modal" id="pbsfour" data-target="#fdayth">+</button>

                  <button type="button" class="btn btn-secondary" data-toggle="modal" id="pbsfive" data-target="#fdayfo">+</button>
                 
                    <button type="button" class="btn btn-secondary" data-toggle="modal" id="pbssix" data-target="#fdayfi">+</button>

           
           <!-- add task ending -->


        <!--     5 day adding Task Begin
 -->
      

       

<!-- 
         zerobegin
 -->


       <div class="modal fade" id="fdayz" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="fdayheader">
                <h5 class="modal-title" id="exampleModalLongTitle"><span id="busted">ADD TASKS</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" id="shii">+</span>
                </button>
              </div>
              <div class="modal-body">

                <form>


                   <div class="form-group">
                      <label for="formGroupExampleInput"><h3 class="squash">Task Description:</h3></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task here" v-model="description0">
                   </div>

                       
                    <div class="form-group row">
                      <label for="example-date-input" class="col-2 col-form-label"><h3 class="squashdat">Date:</h3></label>
                      <div class="col-4" id="kun">
                        <input class="form-control" type="date" :value="addz" id="example-date-input" >
                      </div>



                      <div class="form-group row">
                        <label for="example-time-input" class="col-2 col-form-label"><h3 class="tamil">Time:</h3></label>
                        <div class="col-10" id="mat">
                          <input class="form-control" type="time" value="" id="example-time-input" v-model="time0">
                        </div>
                      </div>


                   </div>

                    <ul class="dot">
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>




                </form>

        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="term0()">Save changes!!!</button>
              </div>
            </div>
          </div>
      </div>


<!--    
   zeroend
 -->




    

<!-- 
         onebegin
 -->


       <div class="modal fade" id="fdayo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="fdayheader">
                <h5 class="modal-title" id="exampleModalLongTitle"><span id="busted">ADD TASKS</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" id="shii">+</span>
                </button>
              </div>
              <div class="modal-body">

                <form>


                   <div class="form-group">
                      <label for="formGroupExampleInput"><h3 class="squash">Task Description:</h3></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task here" v-model="description1">
                   </div>

                       
                    <div class="form-group row">
                      <label for="example-date-input" class="col-2 col-form-label"><h3 class="squashdat">Date:</h3></label>
                      <div class="col-4" id="kun">
                        <input class="form-control" type="date" :value="addo" id="example-date-input" >
                      </div>



                      <div class="form-group row">
                        <label for="example-time-input" class="col-2 col-form-label"><h3 class="tamil">Time:</h3></label>
                        <div class="col-10" id="mat">
                          <input class="form-control" type="time" value="" id="example-time-input" v-model="time1">
                        </div>
                      </div>


                   </div>


                    <ul class="dot">
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>


                </form>

        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="term1()">Save changes</button>
              </div>
            </div>
          </div>
      </div>


<!--    
   oneend
 -->



      

<!-- 
         twobegin
 -->


       <div class="modal fade" id="fdayt" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="fdayheader">
                <h5 class="modal-title" id="exampleModalLongTitle"><span id="busted">ADD TASKS</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" id="shii">+</span>
                </button>
              </div>
              <div class="modal-body">

                <form>


                   <div class="form-group">
                      <label for="formGroupExampleInput"><h3 class="squash">Task Description:</h3></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task here" v-model="description2">
                   </div>

                       
                    <div class="form-group row">
                      <label for="example-date-input" class="col-2 col-form-label"><h3 class="squashdat">Date:</h3></label>
                      <div class="col-4" id="kun">
                        <input class="form-control" type="date" :value="addt" id="example-date-input" >
                      </div>



                      <div class="form-group row">
                        <label for="example-time-input" class="col-2 col-form-label"><h3 class="tamil">Time:</h3></label>
                        <div class="col-10" id="mat">
                          <input class="form-control" type="time" value="" id="example-time-input" v-model="time2">
                        </div>
                      </div>


                   </div>




                    <ul class="dot">
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>


                </form>

        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="term2()">Save changes</button>
              </div>
            </div>
          </div>
      </div>


<!--    
   twoend
 -->


    

<!-- 
         threebegin
 -->


       <div class="modal fade" id="fdayth" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="fdayheader">
                <h5 class="modal-title" id="exampleModalLongTitle"><span id="busted">ADD TASKS</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" id="shii">+</span>
                </button>
              </div>
              <div class="modal-body">

                <form>


                   <div class="form-group">
                      <label for="formGroupExampleInput"><h3 class="squash">Task Description:</h3></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task here" v-model="description3">
                   </div>

                       
                    <div class="form-group row">
                      <label for="example-date-input" class="col-2 col-form-label"><h3 class="squashdat">Date:</h3></label>
                      <div class="col-4" id="kun">
                        <input class="form-control" type="date" :value="addth" id="example-date-input" >
                      </div>



                      <div class="form-group row">
                        <label for="example-time-input" class="col-2 col-form-label"><h3 class="tamil">Time:</h3></label>
                        <div class="col-10" id="mat">
                          <input class="form-control" type="time" value="" id="example-time-input" v-model="time3">
                        </div>
                      </div>


                   </div>


                    <ul class="dot">
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>


                </form>

        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="term3()">Save changes</button>
              </div>
            </div>
          </div>
      </div>


<!--    
   threeend
 -->


    

<!-- 
         fourbegin
 -->


       <div class="modal fade" id="fdayfo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="fdayheader">
                <h5 class="modal-title" id="exampleModalLongTitle"><span id="busted">ADD TASKS</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" id="shii">+</span>
                </button>
              </div>
              <div class="modal-body">

                <form>


                   <div class="form-group">
                      <label for="formGroupExampleInput"><h3 class="squash">Task Description:</h3></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task here" v-model="description4">
                   </div>

                       
                    <div class="form-group row">
                      <label for="example-date-input" class="col-2 col-form-label"><h3 class="squashdat">Date:</h3></label>
                      <div class="col-4" id="kun">
                        <input class="form-control" type="date" :value="addfo" id="example-date-input" >
                      </div>



                      <div class="form-group row">
                        <label for="example-time-input" class="col-2 col-form-label"><h3 class="tamil">Time:</h3></label>
                        <div class="col-10" id="mat">
                          <input class="form-control" type="time" value="" id="example-time-input" v-model="time4">
                        </div>
                      </div>


                   </div>


                    <ul class="dot">
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>


                </form>

        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="term4()">Save changes</button>
              </div>
            </div>
          </div>
      </div>


<!--    
   fourthend
 -->


     

<!-- 
         fifthbegin
 -->


       <div class="modal fade" id="fdayfi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="fdayheader">
                <h5 class="modal-title" id="exampleModalLongTitle"><span id="busted">ADD TASKS</span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" id="shii">+</span>
                </button>
              </div>
              <div class="modal-body">

                <form>


                   <div class="form-group">
                      <label for="formGroupExampleInput"><h3 class="squash">Task Description:</h3></label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task here" v-model="description5">
                   </div>

                       
                    <div class="form-group row">
                      <label for="example-date-input" class="col-2 col-form-label"><h3 class="squashdat">Date:</h3></label>
                      <div class="col-4" id="kun">
                        <input class="form-control" type="date" :value="addfi" id="example-date-input" >
                      </div>



                      <div class="form-group row">
                        <label for="example-time-input" class="col-2 col-form-label"><h3 class="tamil">Time:</h3></label>
                        <div class="col-10" id="mat">
                          <input class="form-control" type="time" value="" id="example-time-input" v-model="time5">
                        </div>
                      </div>


                   </div>               


                    <ul class="dot">
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>


                </form>

        
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="term5()">Save changes</button>
              </div>
            </div>
          </div>
      </div>


<!--    
   fifthend
 -->



<!-- 
                5 day adding Task End

 -->
     <!--     Task Confirmation Modal -->
          <div id="bg-task-modal">
             <div id="task-modal">

                   <span class="glyphicon glyphicon-thumbs-up" id="thumb"></span>

                  <h3 id="lalt">Task has been added!</h3>

                    <div class="cl" v-on:click="tcta()">+</div>


              </div>
          </div>
        <!-- Task confirmation modal end--> 
      

      <!-- 
      Display Today's Tasks Begin -->

      
          
        <router-link :to="{name: 'today'}">
        <button type="button" class="btn btn-default btn-sm" id="fdss" >
          <i class="material-icons">archive</i><span class="bur">Today</span>
        </button>
      </router-link>
    
<!-- 
      Display Today's Tasks End -->





    <!--  MOdal Earth Begin


 -->

  
 <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Current- City : {{ citys }}</h5>
        <button type="button"  class="close" data-dismiss="modal" aria-label="Close" id="bat">
          <span aria-hidden="true" id="shi">&times;</span>
           </button>
             </div>
               <div class="modal-body">
                  
                      <div  v-for="arr in array">
         
                         <h4>{{ formatD(arr.timestamp_utc) }}</h4>

                           <h4>{{ arr.temp }}'C</h4>

                              <h4>{{ formatF(arr.temp) }}'F</h4>

       
                                <h4>{{ formatDate(arr.timestamp_utc) }}</h4>
             
                               <h5>{{ arr.weather.description }}</h5>


                              <img v-bind:src=formatW(arr.weather.icon)  />  

                                 <h1>-----------------------------</h1> 

        
                            </div>


               </div>
              <div class="modal-footer">
           
      </div>
    </div>
  </div>
</div>






<!-- 
  Modal Earth Ends
 -->


  <!--   List begins -->


      <router-link :to="{name: 'list'}">
        <button type="button" class="btn btn-default btn-sm" id="lemo" >
          <i class="material-icons">view_list</i><span class="sor">Lists</span>
        </button>
      </router-link>



             <!--  List Ends -->







   
             <!-- MOney Bank Begin -->

       <div id="money">

         <img src = "../assets/money_bank.gif" class="mo" data-toggle="modal" data-target="#moneymodal">

        </div>


    <!-- Money Bank End -->





<!-- 
    MOney Bank Modal 
 -->


     
     <div class="modal fade" id="moneymodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" id="dmon">
        <h5 class="modal-title" id="exampleModalLongTitle">Spend_Wisely_in_a_Day</h5>
       
      </div>
      <div class="modal-body">
        <h4 id="purple">1).How much money you make in a week?</h4>
         <div class="col-4">
          <input class="form-control" type="text" placeholder="weeklypay" v-model="weekpay" id="example-text-input">
        </div>  


         <h4 id="purple">2).How much are your weekly expenses?</h4>
        <div class="col-4">
          <input class="form-control" type="text" placeholder="weekly expense" v-model="weekexpense" id="example-text-input">
        </div>  



        <h4 id="purple"><span id="suck">3).How much money you want to save by weekend?</span></h4>
        <div class="col-4">
          <input class="form-control" type="text" placeholder="saving amount" v-model="weeksave" id="example-text-input">
        </div>  




         <button type="button" class="btn btn-secondary" v-on:click="magic()">Calculate</button>


             <div id="funale"></div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>



   <!--  MOney Bank MOdal End  -->










  </div>
</template>

<style>
body {
  overflow-x: hidden;
  overflow-y: scroll;
}

#bat {
  font-size: 30px;
  transform: rotate(45deg);
  position: absolute;
  bottom: 100px;
}

#shi {
  position: absolute;
  bottom: 20px;
  right: 20px;
  top: 15px;

  color: black;
  transform: rotate(45deg);
}

.modal-title {
  font-size: 20px;
  padding-bottom: 10px;
  position: relative;
  bottom: 20px;
}

.modal-header {
  padding: 9px 15px;
  margin-bottom: 10px;
  position: relative;
  top: 25px;
  border: 1px solid black;
  border-top-color: white;
  border-bottom: 1px solid grey;
}

.modal-body {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  top: 15px;
}

#earth {
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  left: 1320px;
  top: 450px;
  margin-top: 30px;
}

#colo {
  color: silver;
  position: relative;
  bottom: 30px;
}

.bur {
  position: relative;
  left: 2px;
  bottom: 3px;
}
.pu {
  position: relative;
  bottom: 37px;
  color: silver;
}

#pbs {
  position: relative;
  left: 1000px;
  top: 8px;
}

#pbstwo {
  position: absolute;
  left: 1000px;
  top: 368px;
}

#pbsthree {
  position: absolute;
  left: 1000px;
  top: 468px;
}

#pbsfour {
  position: absolute;
  left: 1000px;
  top: 568px;
}

#pbsfive {
  position: absolute;
  left: 1000px;
  top: 668px;
}

#pbssix {
  position: absolute;
  left: 1000px;
  top: 760px;
}

#Fivetoday {
  width: 750px;
  height: 1px;
  background-color: silver;
  position: absolute;
  left: 350px;
  top: 310px;
  padding: 0px;
}

#horizontal-linee {
  top: 900px;
  position: absolute;
  background-color: white;
  width: 100px;
  height: 200px;
}

#Fivesecond {
  width: 750px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
  top: 190px;
}

#Fivethird {
  width: 750px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
  top: 280px;
}

#Fivefourth {
  width: 750px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
  top: 370px;
}

#Fivefifth {
  width: 750px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
  top: 460px;
}

#Fivesixth {
  width: 750px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
  top: 540px;
}

#ro {
  border-radius: 5px;
  position: relative;
  right: 10px;
}

#insi {
  width: 50%;
  display: block;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  left: 8px;
  padding: 15 0 10 0;
}

.mdd {
  position: relative;
  left: 10px;
}

#fs {
  position: absolute;
  left: 214px;
  top: 300px;
}

.mark {
  position: absolute;
  left: 350px;
}

#bg-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.close {
  position: absolute;
  top: 0px;
  right: 14px;
  font-size: 42px;
  transform: rotate(45deg);
  cursor: pointer;
}

.modal-content {
  width: 700px;
  height: 600px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
}

#bg-task-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.material-icons {
  font-size: 15px;
}

#task-modal {
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
}

.pota {
  text-align: center;
}

#time {
  position: relative;
  left: 700px;
  top: 20px;
  color: white;
  font-size: 40px;
}

#mar {
  padding-bottom: 40px;
}

.L {
  position: absolute;
  top: 25px;
  left: 1300px;
}

#ttt {
  animation-name: divi;
  animation-duration: 2s;
}

@keyframes divi {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#vertical-liness {
  width: 1px;
  height: 660px;
  background-color: silver;
  position: absolute;
  left: 300px;
  top: 240px;
}

#horizontal-line {
  width: 1100px;
  height: 1px;
  background-color: silver;
  position: absolute;
  left: 40px;
  top: 200px;
}

#th {
  width: 800px;
  height: 1px;
  background-color: silver;
  position: absolute;
  left: 320px;
  top: 270px;
}

#weapos {
  position: absolute;
  left: 1300px;
  top: 100px;
}

#gd {
  position: relative;
  left: 30px;
}

.tday {
  position: absolute;
  left: 340px;
  top: 240px;
}

.per {
  position: absolute;
  left: 400px;
  top: 240px;
  color: silver;
  cursor: text;
}

#Sha {
  position: absolute;
  left: 1100px;
  top: 230px;
}

#space_1 {
  position: relative;
  top: 50px;
}

#space_2 {
  position: relative;
  top: 260px;
}

#taskpos {
  position: relative;
  top: 50px;
}

.loosu {
  position: relative;
  right: 280px;
  font-size: 20px;
}

.ir {
  position: relative;
  top: 80px;
  cursor: pointer;
}

.irr {
  position: relative;
  top: 120px;
  cursor: pointer;
}

.dt {
  position: relative;
  top: 70px;
  right: 300px;
  font-size: 20px;
}

.tt {
  position: relative;
  top: 110px;
  right: 300px;
  font-size: 20px;
}

.tf {
  position: relative;
  bottom: 3px;
}

.dupd {
  font-size: 20px;
  position: relative;
  top: 70px;
  left: 10px;
}

#vj {
  position: relative;
  top: 120px;
  right: 100px;
}

.dupt {
  font-size: 20px;
  position: relative;
  top: 130px;
  left: 10px;
}

#vt {
  position: relative;
  top: 190px;
  right: 100px;
}

#inbox {
  position: relative;
  left: 220px;
  top: 70px;
}

#fdays {
  position: relative;
  left: 120px;
  top: 130px;
}

#homecon {
  position: relative;
  right: 80px;
}

/*homeicon
*/

#homecon {
  position: absolute;
  top: 180px;

  left: 1020px;
  right: 300px;
}

.dot {
  list-style-type: none;
  position: relative;
  left: 100px;
}

#thumb {
  position: relative;
  text-align: center;
  top: 100px;
  font-size: 80px;
}

#lalt {
  position: relative;
  top: 150px;
}

.cl {
  font-size: 30px;
  position: relative;
  left: 160px;
  bottom: 140px;
  transform: rotate(45deg);
  cursor: pointer;
}

#busted {
  position: relative;
  top: 20px;
}

#shii {
  position: relative;
  bottom: 13px;
  transform: rotate(94deg);
  color: black;
}

#kun {
  position: relative;
  top: 50px;
  right: 110px;
}

.squash {
  position: relative;
  right: 240px;
}

.squashdat {
  position: relative;
  top: -10px;
}

.tamil {
  position: relative;
  right: 320px;
  top: 100px;
}
#mat {
  position: relative;
  right: 360px;
  top: 170px;
}

/*Lists Begin*/

#lemo {
  position: relative;
  top: 140px;
  left: 180px;
}

.sor {
  position: relative;
  left: 05px;
  bottom: 2px;
}

/*Lists End*/

/*money bank starting:*/

.mo {
  position: absolute;
  height: 300px;
  width: 240px;
  left: 0px;
  top: 500px;
  cursor: pointer;
}

#dmon {
  height: 30px;
}

#purple {
  position: relative;
  right: 150px;
  padding-bottom: 20px;
}

.punde {
  position: relative;
  left: 0px;
  right: 4px;
}

#suck {
  position: relative;
  left: 40px;
}

#funale {
  margin-top: 3px;
  font-size: 20px;
}

/*money bank ending*/
</style>

<script>
var axios = require("axios");
console.log(axios);
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      user: "",
      time0: "",
      time1: "",
      time2: "",
      time3: "",
      time4: "",
      time5: "",
      city: "",
      description0: "",
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      temp: "",
      city_name: "",
      task: "",
      time_t: "",
      errors: [],
      fivetoday: "",
      fivetommorow: "",
      fivethird: "",
      fivefourth: "",
      fivefifth: "",
      fivesixth: "",
      array: [],
      citys: "",
      addz: "",
      addo: "",
      addt: "",
      addth: "",
      addfo: "",
      addfi: "",
      daa: "2011-08-19",
      description: "",
      date: "",
      weekpay: "",
      weekexpense:"",
      weeksave:"",
      satz:""
    };
  },
  created: function() {
    // Globe Functions

     axios.get("http://ipinfo.io").then(function(response) {
              
              //console.log(response.data.city);
              this.satz = response.data.city;
              var ctz = this.satz;


    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/3hourly?city=`+ ctz + `&key=${process.env.VUE_APP_WEATHER_API_KEY}`
      )
      .then(
        function(response) {
          this.test = response.data.data;

          console.log(this.test);
          this.citys = response.data.city_name;
          this.array = response.data.data;
        }.bind(this)
      );

          }.bind(this));


    // Global Functions ENd

    axios.get("https://timelyy.herokuapp.com/api/tas").then(
      function(response) {
        console.table(response.data);
        console.log(response.data["name"]);
        this.user = response.data["name"];
      }.bind(this)
    );

    // Date Functions - Start:

    var d = new Date();
    var date = d.getDate();
    var y = new Date();
    var year = y.getFullYear();
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var month = new Date();
    var mons = monthNames[month.getMonth()];
    var m = new Date();
    var min = m.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    var hola = new Date();
    var hh = hola.getHours();
    var h = hh;
    var dd = "AM";
    if (h >= 12) {
      h = hh - 12;
      
      dd = "PM";
    }
    if (h === 0) {
      h = 12;
    }


    if (h === 10) {

      h = 10;

    }

    if (h === 11) {

      h = 11;

    }


    if (h < 10 ) {

      h = '0' + h;
    }
   
    var durr = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[durr.getDay()];

    var fina =
      "Today is " +
      n +
      ", " +
      date +
      " " +
      mons +
      " " +
      year +
      ", the time is " +
      h +
      ":" +
      min +
      " " +
      dd;

    console.log(fina);

    this.time = fina;

    // Date Functions - Ending

    //Weather_Functions Start:

     axios.get("http://ipinfo.io").then(function(response) {
              
              console.log(response.data.city);
              this.satz = response.data.city;
              var ctz = this.satz


   
    axios.get(`https://api.weatherbit.io/v2.0/current?city=` + ctz + `&key=${process.env.VUE_APP_BACK_API_KEY}`).then(
      function(response) {
        this.city = response.data["data"][0]["city_name"];
        this.description = response.data["data"][0]["weather"]["description"];
        this.temp = response.data["data"][0]["temp"];
        var icons = response.data["data"][0]["weather"]["icon"];
        this.icon = icons;
        this.icon =
          "https://www.weatherbit.io/static/img/icons/" + this.icon + ".png";

        $("#wicon").attr("src", this.icon);
      }.bind(this)
    );

    }.bind(this));

    //weather Functions Ending

    // Five day Date plan start

    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    var monthNamess = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var today = new Date();

    var nextday0 = new Date(today);

    nextday0.setDate(today.getDate() + 0);
    var d0 = nextday0.getDate();
    var m0 = nextday0.getMonth();
    var y0 = nextday0.getFullYear();
    var day0 = nextday0.getDay();

    var shit = nextday0.toLocaleDateString();
    var wd = shit.split("/");
    if (wd[0] < 10) {
      var zer = "0" + wd[0];
      wd[0] = zer;
    }

    if (wd[1] < 10) {
      var zero = "0" + wd[1];
      wd[1] = zero;
    }

    if (wd[2] < 10) {
      var zeros = "0" + wd[2];
      wd[2] = zeros;
    }

    var wda = [];
    wda.push(wd[2]);
    wda.push(wd[0]);
    wda.push(wd[1]);
    var wdsx = wda.join("-");
    this.addz = wdsx;
    console.log(this.addz);
    this.fivetoday =
      d0 + " " + monthNamess[m0] + " " + y0 + " , " + weekdays[day0];

    //console.log(this.fivetoday);

    //1st

    var nextday1 = new Date(today);

    nextday1.setDate(today.getDate() + 1);
    var d1 = nextday1.getDate();
    var m1 = nextday1.getMonth();
    var y1 = nextday1.getFullYear();
    var day1 = nextday1.getDay();

    var shitt = nextday1.toLocaleDateString();
    var ed = shitt.split("/");
    if (ed[0] < 10) {
      var ad = "0" + ed[0];
      ed[0] = ad;
    }

    if (ed[1] < 10) {
      var wwd = "0" + ed[1];
      ed[1] = wwd;
    }

    if (ed[2] < 10) {
      var wwds = "0" + ed[2];
      ed[2] = wwds;
    }

    var wod = [];
    wod.push(ed[2]);
    wod.push(ed[0]);
    wod.push(ed[1]);
    var pete = wod.join("-");
    this.addo = pete;
    //console.log(this.addo);
    this.fivetommorow =
      d1 + " " + monthNamess[m1] + y1 + " , " + weekdays[day1];

    //console.log("-----");
    //console.log(this.fivetommorow);

    //1st ending

    //2nd BEgin:

    var nextday2 = new Date(today);

    nextday2.setDate(today.getDate() + 2);
    var d2 = nextday2.getDate();
    var m2 = nextday2.getMonth();
    var y2 = nextday2.getFullYear();
    var day2 = nextday2.getDay();

    var shittt = nextday2.toLocaleDateString();
    var wdw = shittt.split("/");
    if (wdw[0] < 10) {
      var wdf = "0" + wdw[0];
      wdw[0] = wdf;
    }

    if (wdw[1] < 10) {
      var wdfs = "0" + wdw[1];
      wdw[1] = wdfs;
    }

    if (wdw[2] < 10) {
      var wdfsz = "0" + wdw[2];
      wdw[2] = wdfsz;
    }

    var ko = [];

    ko.push(wdw[2]);
    ko.push(wdw[0]);

    ko.push(wdw[1]);

    var dw = ko.join("-");

    this.addt = dw;
    //console.log(this.addt);
    this.fivethird = d2 + " " + monthNamess[m2] + y2 + " , " + weekdays[day2];

    //End of second:

    //Third Beeing:

    var nextday3 = new Date(today);

    nextday3.setDate(today.getDate() + 3);
    var d3 = nextday3.getDate();
    var m3 = nextday3.getMonth();
    var y3 = nextday3.getFullYear();
    var day3 = nextday3.getDay();

    var shu = nextday3.toLocaleDateString();

    var mas = shu.split("/");

    if (mas[0] < 10) {
      var hj = "0" + mas[0];
      mas[0] = hj;
    }

    if (mas[1] < 10) {
      var hdj = "0" + mas[1];
      mas[1] = hdj;
    }

    if (mas[2] < 10) {
      var hw = "0" + mas[2];
      mas[2] = hw;
    }

    var wdwa = [];
    wdwa.push(mas[2]);
    wdwa.push(mas[0]);
    wdwa.push(mas[1]);
    var dwx = wdwa.join("-");
    this.addth = dwx;
    //console.log(this.addth);
    this.fivefourth = d3 + " " + monthNamess[m3] + y3 + " , " + weekdays[day3];

    //fourth Begin:

    var nextday4 = new Date(today);

    nextday4.setDate(today.getDate() + 4);
    var d4 = nextday4.getDate();
    var m4 = nextday4.getMonth();
    var y4 = nextday4.getFullYear();
    var day4 = nextday4.getDay();

    var shuu = nextday4.toLocaleDateString();
    var jn = shuu.split("/");
    if (jn[0] < 10) {
      var wdv = "0" + jn[0];
      jn[0] = wdv;
    }

    if (jn[1] < 10) {
      var sp = "0" + jn[1];
      jn[1] = sp;
    }

    if (jn[2] < 10) {
      var mu = "0" + jn[2];
      jn[2] = mu;
    }

    var wz = [];
    wz.push(jn[2]);
    wz.push(jn[0]);

    wz.push(jn[1]);

    var wdj = wz.join("-");

    this.addfo = wdj;
    //console.log(this.addfo);
    this.fivefifth = d4 + " " + monthNamess[m4] + y4 + " , " + weekdays[day4];

    var nextday5 = new Date(today);

    nextday5.setDate(today.getDate() + 5);
    var d5 = nextday5.getDate();
    var m5 = nextday5.getMonth();
    var y5 = nextday5.getFullYear();
    var day5 = nextday5.getDay();

    var sham = nextday5.toLocaleDateString();
    var swe = sham.split("/");
    if (swe[0] < 10) {
      var an = "0" + swe[0];
      swe[0] = an;
    }

    if (swe[1] < 10) {
      var ana = "0" + swe[1];
      swe[1] = ana;
    }

    if (swe[2] < 10) {
      var dos = "0" + swe[2];
      swe[2] = dos;
    }

    var muth = [];
    muth.push(swe[2]);
    muth.push(swe[0]);
    muth.push(swe[1]);

    var padi = muth.join("-");

    this.addfi = padi;
    //console.log(this.addfi);
    this.fivesixth = d5 + " " + monthNamess[m5] + y5 + " , " + weekdays[day5];

    //FIve day plan End
  },
  mounted: function() {
    var modal = document.querySelector("#bg-modal");
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    var mode = document.querySelector("#bg-task-modal");
    window.onclick = function(event) {
      if (event.target === mode) {
        mode.style.display = "none";
      }
    };
  },
  methods: {
    display: function() {
      
      var city_n = this.city_name;
      

      axios.post(`https://api.weatherbit.io/v2.0/current?city=`+ city_n + `&key=${process.env.VUE_APP_BACK_API_KEY}`).then(
        function(response) {
          this.city = response.data["data"][0]["city_name"];
          this.description = response.data["data"][0]["weather"]["description"];
          this.temp = response.data["data"][0]["temp"];
          var icons = response.data["data"][0]["weather"]["icon"];
          this.icon = icons;
          this.icon =
            "https://www.weatherbit.io/static/img/icons/" + this.icon + ".png";

          $("#wicon").attr("src", this.icon);
        }.bind(this)
      );
    },

    closee: function() {
      document.querySelector("#bg-modal").style.display = "none";
    },

    work: function() {
      document.querySelector("#bg-modal").style.display = "flex";
    },

    task_add: function() {
      var params = {
        name: this.task,
        date: this.date,
        time: this.time_t
      };

      axios
        .post("https://timelyy.herokuapp.com/api/tasks", params)
        .then(function(response) {
          console.log(response);

          document.querySelector("#bg-modal").style.display = "none";
          document.querySelector("#bg-task-modal").style.display = "flex";
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    tcta: function() {
      document.querySelector("#bg-task-modal").style.display = "none";
    },

    formatD: function(inputDate) {
      var d = new Date(inputDate);

      var GMT = d.toUTCString();

      //console.log(GMT);

      var da = new Date(GMT);
      var data = da.toLocaleString();

      //console.log(data);

      return data;
    },

    formatW: function(inputW) {
      var dsd = "https://www.weatherbit.io/static/img/icons/" + inputW + ".png";

      return dsd;
    },

    formatF: function(temp) {
      var f = temp * (9 / 5) + 32;

      return f.toFixed(2);
    },

    formatDate: function(inp) {
      var d = new Date(inp);

      var da = d.toLocaleString();

      var vj = new Date(da);

      var dayys = vj.getDay();

      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      var finalans = weekday[dayys];

      return finalans;
    },

    term0: function() {
      var params = {
        name: this.description0,
        time: this.time0,
        date: this.addz
      };

      axios.post("https://timelyy.herokuapp.com/api/tasks",params).then(function(response) {

        console.log(response.data);

        // console.log("gonna hide the modal");
        // $("#fdayz").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();

         $("#fdayz").trigger("click");



      }).catch(error => {
        
        console.log("PROBLEM", error);
        this.errors = error.response.data.errors;

      });
    },

    term1: function() {


      var params = {
        name: this.description1,
        time: this.time1,
        date: this.addo
      };

      axios.post("https://timelyy.herokuapp.com/api/tasks",params).then(function(response) {

        console.log(response.data);

        // $("#fdayo").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();

        $("#fdayo").trigger("click");


      }).catch(error => {
        
        this.errors = error.response.data.errors;

      });


    },

    term2: function() {

     
      var params = {
        name: this.description2,
        time: this.time2,
        date: this.addt
      };

      axios.post("https://timelyy.herokuapp.com/api/tasks",params).then(function(response) {

        console.log(response.data);

        // $("#fdayt").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();

        $("#fdayt").trigger("click");


      }).catch(error => {
        this.errors = error.response.data.errors;

      });
     


  },

    term3: function() {
      

      var params = {
        name: this.description3,
        time: this.time3,
        date: this.addth
      };

      axios.post("https://timelyy.herokuapp.com/api/tasks",params).then(function(response) {

        console.log(response.data);

        // $("#fdayth").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();

        $("#fdayth").trigger("click");


      }).catch(error => {
        
        this.errors = error.response.data.errors;

      });


    },

    term4: function() {
      
      var params = {
        name: this.description4,
        time: this.time4,
        date: this.addfo
      };

      axios.post("https://timelyy.herokuapp.com/api/tasks",params).then(function(response) {

        console.log(response.data);

        // $("#fdayfo").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();

        $("#fdayfo").trigger("click");


      }).catch(error => {
        
        this.errors = error.response.data.errors;

      });


    },

    term5: function() {

      var params = {
        name: this.description5,
        time: this.time5,
        date: this.addfi
      };

      axios.post("https://timelyy.herokuapp.com/api/tasks",params).then(function(response) {

        console.log(response.data);

        // $("#fdayfi").modal("hide");
        // $('body').removeClass('modal-open');
        // $('.modal-backdrop').remove();


       $("#fdayfi").trigger("click");



      }).catch(error => {
        
        this.errors = error.response.data.errors;

      });

      

    },

    
     magic: function() {


      var mih = parseInt(this.weekpay);
      var exp = parseInt(this.weekexpense);


      if (exp >= mih ) {
         
        document.getElementById("funale").innerHTML = "The expenses are greater than the pay";



      } else {


        var monr = mih - exp;

        var save = parseInt(this.weeksave);



        if ( save >= monr ) {

          document.getElementById("funale").innerHTML = "You can't save this much money with the provided expense";

        } else {

          var sub = monr - save;

          var ans = Math.floor(sub / 7) ; 

          // this.finalans = ans; 

          if (ans === 0) {
             
            document.getElementById("funale").innerHTML = "The user has to spend within a dollar in a day if he wants to save " + save + " dollars of money by the end of the week";
             
          
          } else {


            document.getElementById("funale").innerHTML = "The user can spend within " + ans + " dollars a day if he wants to save " + save + " dollars of money by the end of the week";
          }

        }

      }


    },

    funda :function(temp) {


      var ind = parseInt(temp);

      var pl = ind * 9 / 5 + 32;

      return Math.round(pl);


    }


  

  },
  computed: {}
};
</script>
