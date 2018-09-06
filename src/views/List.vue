<template>
  <div class="list">

  <!-- Navbar start-->
   <nav class="navbar navbar-expand-lg navbar-danger bg-danger" id="mars">
    <a href="#/Taskp">
    <span class="glyphicon glyphicon-time" id="times"></span>
    </a>
    <a class="nav-link" href="#/Logout" ><span class="Ls">Logout</span></a>
   </nav>
   <!-- navbar _ end-->


<!-- 
    Globe Begin
 -->

      <span data-toggle="tooltip" data-placement="top" title="Get Full Weather Data"><img src="../assets/weather_css.gif" data-toggle="modal" data-target="#exampleModalLong" id="earths"></span>

   <!--  Global End -->


  <!-- WElcome and Time Begin -->
 
  <div class="potas">
     <h3>Welcome {{ user }}</h3>
     <p>{{ time }}</p>
   </div>

  <!-- Welcome and Time end -->

<!-- 
    Weather Data Start -->


   <div id="weaposs">
     <h6>City_name: {{ city }}</h6>

    <h6>Weather: {{ description }}</h6>
     
    <h6>Temperature: {{ temp }}'C</h6>

     <div><img id="wicons" src="" alt="Weather icon"></div>

     <h6>City name:<input type="text" id="ros" v-model="city_name"></h6>

     <button type="button" class="btn btn-secondary" id="gds"  v-on:click="display()">Get data</button>

     </div>



<!-- 
    Weather Data End 
 -->


  <!-- Inbox button_Start-->


       <router-link :to="{name: 'inbox'}">
        <button type="button" class="btn btn-default btn-sm" id="inboxs" >
          <span class="glyphicon glyphicon-inbox"></span> Inbox
        </button>
      </router-link>

        <!-- Inbox button _end-->


         <!-- 
      Display Today's Tasks Begin -->

      
          
        <router-link :to="{name: 'today'}">
        <button type="button" class="btn btn-default btn-sm" id="fdsss" >
          <i class="material-icons">archive</i><span class="burs">Today</span>
        </button>
      </router-link>
    
<!-- 
      Display Today's Tasks End
 -->


     <!--   List begins -->


      <router-link :to="{name: 'list'}">
        <button type="button" class="btn btn-default btn-sm" id="lists" >
          <i class="material-icons">view_list</i><span class="lotuss">Lists</span>
        </button>
      </router-link>



             <!--  List Ends -->



     <!-- Next _ 5 day button Start -->
         

         <div id="fss">
        <router-link :to="{name: 'fday'}">
        <button type="button" class="btn btn-default btn-sm" id="" >
          <i class="material-icons">list</i><span class="burs">5 days</span>
        </button>
      </router-link>
    </div>


        <!-- Next _5 Day button _End-->


          <!-- Home Link-->
    <a href="#/Taskp" id="homecons">
          <span class="glyphicon glyphicon-home" data-toggle="tooltip" data-placement="right" title="Home page" >Home</span>
        </a>
            

        <!-- Home_link_end -->



   <div id="horizontal-lines"></div>
   <div id="vertical-lines"></div>


   <!-- MOdal Earth begin -->

  
 <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Current- City : Chicago</h5>
        <button type="button"  class="close" data-dismiss="modal" aria-label="Close" id="bats">
          <span aria-hidden="true" id="shis">&times;</span>
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


<!-- 
    User's Lists Begin:
 -->
     

      <h3 id="lust">Lists:</h3>

      <button type="button" class="btn btn-secondary" id="mel" data-toggle="modal" data-target="#Addlists"> + </button>

       <div class="pei"></div>

         
        <!--  <div v-for="lure in lures "> -->

            <div v-for="ma in lures">

                 

                <h4 class="why" v-on:click="ordan(ma)" data-toggle="modal" data-target="#indimodal">{{ ma.name }}</h4>


              <button type="button" class="btn btn-info" id="additemss" data-toggle="modal" data-target="#Additemsinlists" v-on:click="assignlistname(ma)"> + </button>

                  <div class="thus"></div> 

                  <div id="dekin"><i class="material-icons" id="comeone" data-toogle="tooltip" data-placement="top" title="delete List" v-on:click="deltaps(ma)">delete_outline</i></div>
               
           
            
        </div>



             

<!-- 
     User's List End  -->




<!--     Indiviual Modal Begins

 -->

     
<div class="modal fade" id="indimodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLongTitle"><span id="namel">{{ Listname }}</span></h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="finish">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        

        
        <div v-for="item in iteminList">    
           
          <div id="chimp"><h4>{{ item.name }}</h4></div>

            <div id="lin"></div>
        </div>
        

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
    </div>
  </div>
</div>


<!-- 

           Indiviual Modal Ends -->




   <!-- Adding Lists and items Begins -->


        
          <div class="modal fade" id="Addlists" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" id="kami">
        <h2 class="modal-title" id="exampleModalLongTitle">Add Lists</h2>
     <!--    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
 -->      </div>
      <div class="modal-body">
      
         <h4 id="left">List Name:</h4>
          <div class="col-6" id="listna">
           <input class="form-control" type="text" value="Enter the List Name" id="example-text-input" v-model="listn">
          </div>


          <ul class="dot">
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
           </ul>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="addList()">Save changes</button>
      </div>
    </div>
  </div>
</div>




    <!-- Adding Lists and items Ends -->


   


   <!-- Adding Items in Indiviual Lists Begin -->


<!-- 
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>
 -->
<!-- Modal -->
<div class="modal fade" id="Additemsinlists" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{{ currentitem.name }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>You can add indiviual Items for a List here  </h4>
         

          
          
             <div class="col-6" id="apy">
               <input class="form-control" type="text" placeholder="item1" id="example-text-input" v-model="item1">
             </div>

             <div class="col-6" id="apy">
               <input class="form-control" type="text" placeholder="item2" id="example-text-input" v-model="item2">
             </div>

              <div class="col-6" id="apy">
               <input class="form-control" type="text" placeholder="item3" id="example-text-input" v-model="item3">
             </div>


               <div class="col-6" id="apy">
               <input class="form-control" type="text" placeholder="item4" id="example-text-input" v-model="item4">
             </div>



               <div class="col-6" id="apy">
               <input class="form-control" type="text" placeholder="item5" id="example-text-input" v-model="item5">
             </div>


              <div class="col-6" id="apy">
               <input class="form-control" type="text" placeholder="item6" id="example-text-input" v-model="item6">
             </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="addmulitem(currentitem)">Save changes</button>
      </div>
    </div>
  </div>
</div>



 <!--  Adding Lists in Indiviual Items Begins -->


  
<!-- 

          Modal Earth End -->



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
#mars {
  padding-bottom: 40px;
}

#times {
  position: relative;
  left: 700px;
  top: 20px;
  color: white;
  font-size: 40px;
}

.Ls {
  position: absolute;
  top: 25px;
  left: 1270px;
  color: white;
  font-size: 30px;
  font-family: "Amatic SC", cursive;
  font-family: "EB Garamond", serif;
}

#earths {
  width: 100px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  left: 1320px;
  top: 450px;
}

.potas {
  text-align: center;
}

#weaposs {
  position: absolute;
  left: 1300px;
  top: 100px;
}

#gds {
  position: relative;
  left: 30px;
}

#ros {
  border-radius: 5px;
  position: relative;
  right: 10px;
}

#inboxs {
  position: relative;
  left: 220px;
  top: 70px;
}

#fdsss {
  position: relative;
  left: 150px;
  top: 180px;
}

.burs {
  position: relative;
  left: 2px;
  bottom: 3px;
}

#lists {
  position: relative;
  top: 230px;
  left: 86px;
}

.lotuss {
  position: relative;
  left: 05px;
  bottom: 2px;
}

#fss {
  position: absolute;
  left: 214px;
  top: 300px;
}

.burs {
  position: relative;
  left: 2px;
  bottom: 3px;
}

#homecons {
  position: relative;
  right: 0px;
  left: 800px;
}

#vertical-lines {
  width: 1px;
  height: 700px;
  background-color: silver;
  position: absolute;
  left: 300px;
  top: 240px;
}

#horizontal-lines {
  width: 1100px;
  height: 1px;
  background-color: silver;
  position: absolute;
  left: 40px;
  top: 200px;
}

#bats {
  font-size: 30px;
  transform: rotate(45deg);
  position: absolute;
  bottom: 100px;
}

#shis {
  position: absolute;
  bottom: 20px;
  right: 20px;
  top: 15px;

  color: black;
  transform: rotate(45deg);
}

.list {
  animation-name: diss;
  animation-duration: 2s;
}

@keyframes diss {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/*
List Vue Begins*/

#lust {
  position: relative;
  left: 350px;
}

.why {
  position: relative;
  left: 350px;
  padding-top: 20px;
  cursor: pointer;
  width: 60px;
}

.thus {
  width: 700px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
}

.pei {
  width: 700px;
  height: 1px;
  background-color: silver;
  position: relative;
  left: 350px;
}

#mel {
  position: relative;
  left: 1000px;
  bottom: 10px;
}

#namel {
  position: relative;
  top: 0px;
  font-size: 35px;
}

#monkey {
  list-style: none;
}

#chimp {
  /*  position: relative;
  left: -220px;
  right: 1000px;*/

  text-align: center;
}

#lin {
  height: 1px;
  width: 150px;
  color: black;
  position: relative;
  top: 10px;
  left: 30px;
}

.modal-header {
  height: 75px;
}

#finish {
  transform: rotate(45deg);
  position: absolute;
  bottom: 200px;
}

#kami {
  height: 40px;
}

#left {
  position: relative;
  right: 240px;
  font-size: 20px;
}

#listna {
  position: relative;
  top: 10px;
  left: 10px;
}

/*Money bank start */

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

#additemss {
  position: relative;
  left: 900px;
  bottom: 23px;
}

#dekin {
  position: relative;
  left: 1000px;
  bottom: 57px;
  font-size: 20px;
}

#apy {
  margin-top: 15px;
  margin-bottom: 15px;
  left: 20px;
}

/*money bank ending*/

#comeone {
  font-size: 30px;
  cursor: pointer;
}
</style>

<script>
var axios = require("axios");
console.log(axios);

export default {
  data: function() {
    return {
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
      lures: [],
      Listname: "",
      iteminList: [],
      weekpay: "",
      weekexpense: "",
      weeksave: "",
      listn: "",
      currentitem: "",
      item1: "",
      item2: "",
      item3: "",
      item4: "",
      item5: "",
      item6: ""
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

    if (h < 10) {
      h = "0" + h;
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

        $("#wicons").attr("src", this.icon);
      }.bind(this)
    );

    //weather Functions Ending

    // Getting User's Lists Begin:

    axios.get("http://localhost:3000/api/lists").then(
      function(response) {
        console.log("Vj is awesome");
        console.log(response.data["lists"]);
        this.lures = response.data["lists"];
        console.log(this.lures);
      }.bind(this)
    );

    //Getting User's List End:
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

          $("#wicons").attr("src", this.icon);
        }.bind(this)
      );
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

    ordan: function(input) {
      this.Listname = input.name;
      console.log("wdwd");
      console.log(this.Listname);
      console.log(input.id);

      var params = {
        id: input.id
      };

      axios.post("http://localhost:3000/api/magic", params).then(
        function(response) {
          console.log("-------");
          console.log(response.data);
          this.iteminList = response.data.items;
        }.bind(this)
      );
    },

    magic: function() {
      var mih = parseInt(this.weekpay);
      var exp = parseInt(this.weekexpense);

      if (exp >= mih) {
        document.getElementById("funale").innerHTML =
          "The expenses are greater than the pay";
      } else {
        var monr = mih - exp;

        var save = parseInt(this.weeksave);

        if (save >= monr) {
          document.getElementById("funale").innerHTML =
            "You can't save this much money with the provided expense";
        } else {
          var sub = monr - save;

          var ans = Math.floor(sub / 7);

          // this.finalans = ans;

          if (ans === 0) {
            document.getElementById("funale").innerHTML =
              "The user has to spend within a dollar in a day if he wants to save " +
              save +
              " dollars of money by the end of the week";
          } else {
            document.getElementById("funale").innerHTML =
              "The user can spend within " +
              ans +
              " dollars a day if he wants to save " +
              save +
              " dollars of money by the end of the week";
          }
        }
      }
    },

    addList: function() {
      var params = {
        name: this.listn
      };

      axios
        .post("http://localhost:3000/api/list", params)
        .then(function(response) {
          console.log(response.data);
          this.lures.push(response.data);

          // DO SOMETHING HERE!!!

          // $("#Addlists").modal("hide");
          // $("body").removeClass("modal-open");
          // $(".modal-backdrop").remove();
          $("#Addlists").trigger("click");

        }.bind(this))
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    assignlistname: function(listItem) {
      this.currentitem = listItem;
    },

    addmulitem: function() {
      console.log("This is Code Power");

      var params = {
        items: [
          this.item1,
          this.item2,
          this.item3,
          this.item4,
          this.item5,
          this.item6
        ],
        list_id: this.currentitem.id
      };

      axios
        .post("http://localhost:3000/api/senditem", params)
        .then(function(response) {
          console.log(response.data);

          // $("#Additemsinlists").modal("hide");
          // $("body").removeClass("modal-open");
          // $(".modal-backdrop").remove();
            $("#Additemsinlists").trigger("click");
        });

      console.log(params);
    },

    deltaps: function(input) {
      console.log(input);

      axios.delete("http://localhost:3000/api/lisdel/" + input.id).then(function(response) {

                console.log(response.data);

         var index = this.lures.indexOf(input);
         this.lures.splice(index,1);


      }.bind(this));
    }
  },
  computed: {}
};
</script>
