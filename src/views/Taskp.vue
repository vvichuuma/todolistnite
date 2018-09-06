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

    
    <!-- Globe Begin-->

       <span data-toggle="tooltip" data-placement="top" title="Get Full Weather Data"><img src="../assets/weather_css.gif" data-toggle="modal" data-target="#exampleModalLong" id="earth"></span>


      <!--  <-- Modal --> 


<!-- Modal -->



  
   <!-- Modal End -->



     <!-- Globe End  -->

   <div class="pota">
   <h3>Welcome {{ user }}</h3>
     <p>{{ time }}</p>
   </div>

   <!-- Weather_data_start -->
    

    <div id="weapos">
     <h6>City_name: {{ city }}</h6>

    <h6>Weather: {{ description }}</h6>
     
    <h6>Temperature: {{ temp }}'C</h6>

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

        <!-- 
      Display Today's Tasks Begin -->

      
          
        <router-link :to="{name: 'today'}">
        <button type="button" class="btn btn-default btn-sm" id="fdss" >
          <i class="material-icons">archive</i><span class="bur">Today</span>
        </button>
      </router-link>
    
<!-- 
      Display Today's Tasks End
 -->


      <!--   List begins -->



      <router-link :to="{name: 'list'}">
        <button type="button" class="btn btn-default btn-sm" id="list" >
          <i class="material-icons">view_list</i><span class="lotus">Lists</span>
        </button>
      </router-link>



             <!--  List Ends -->

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


     

      <!-- MOney Bank Begin -->

       <div id="money">

         <img src = "../assets/money_bank.gif" class="mo" data-toggle="modal" data-target="#moneymodal">

        </div>


    <!-- Money Bank End -->




     <!-- Add Task Data-->

          <div id="th"></div>
          <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Add tasks" id="Sha" v-on:click="work()">+</button>
  
     <!-- End Task Data -->

     
     <h5 class="tday">Today</h5>

     <h5 class="per">Add task</h5>
   <div id="horizontal-line"></div>
   <div id="vertical-line"></div>


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



        <!-- Task Confirmation Modal -->
          <div id="bg-task-modal">
             <div id="task-modal">

                   <span class="glyphicon glyphicon-thumbs-up" id="thumb"></span>

                  <h3 id="lalt">Task has been added!</h3>

                    <div class="cl" v-on:click="tcta()">+</div>


              </div>
          </div>
        <!-- Task confirmation modal end-->
      


      <!-- MOdal Earth begin -->

  
 <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Current- City : Chicago</h5>
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

      <!-- Modal Earth End-->



   <!-- Money Bank Begin -->


          


     <!-- Money Bank End  -->




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
  overflow-y: hidden;
}

.modal-header {
  padding: 9px 15px;
  margin-bottom: 20px;
  position: relative;
  top: 25px;
  border: 1px solid black;
  border-top-color: white;
  border-bottom: 3px solid grey;
}

.modal-body {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  top: 15px;
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

#fdss {
  position: relative;
  left: 180px;
  top: 180px;
}

#earth {
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  left: 1320px;
  top: 450px;
}

.bur {
  position: relative;
  left: 2px;
  bottom: 3px;
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
  left: 1200px;
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

#vertical-line {
  width: 1px;
  height: 500px;
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

#list {
  position: relative;
  top: 220px;
  left: 150px;
}

.lotus {
  position: relative;
  left: 05px;
  bottom: 2px;
}

/*money bank*/

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


#purple{

   position: relative;
   right: 150px;
   padding-bottom: 20px;

}

.punde{

  position: relative;
  left:0px;
  right: 4px;
}

#suck{

  position: relative;
  left: 40px;
}

#funale{

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
      time: "",
      city: "",
      description: "",
      temp: "",
      city_name: "",
      task: "",
      date: "",
      time_t: "",
      errors: [],
      array: [],
      citys: "",
      test: [],
      icons: [],
      url: "https://www.weatherbit.io/static/img/icons/c04d.png",
      weekpay: "",
      weekexpense:"",
      weeksave:""
    };
  },
  created: function() {
    // Globe Functions

    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/3hourly?city=chicago&key=${process.env.VUE_APP_WEATHER_API_KEY}`
      )
      .then(
        function(response) {
          this.test = response.data.data;

          console.log(this.test);
          this.citys = response.data.city_name;
          this.array = response.data.data;
        }.bind(this)
      );

    // Global Functions ENd

    axios.get("http://localhost:3000/api/tas").then(
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

    axios.get("http://localhost:3000/api/weather").then(
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

    //weather Functions Ending
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
      var params = {
        city_n: this.city_name
      };

      console.log(params);
      axios.post("http://localhost:3000/api/weather", params).then(
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
        .post("http://localhost:3000/api/tasks", params)
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
  


  },
  computed: {}
};
</script>
