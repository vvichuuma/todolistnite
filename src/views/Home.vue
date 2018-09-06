
<template>
  <div class="mario">
    <!--Navbar_starting -->
    
   <nav class="navbar navbar-expand-lg navbar-danger bg-danger" id="pad">
     
     <a class="nav-link" href="/" ><span class="h">TIMELY</span></a>
     
     <a class="nav-link" href="#/Login" ><span class="L">Login</span></a>
     
     <a class="nav-link" href="#/Signup" ><span class="S">Signup</span></a>

  </nav>


<!-- Navbar ending-->

 <img src="../assets/time_Vuejs.jpg">

  <h1><span class="pun">{{ time }}</span></h1>

  <h3><span class="tr">{{ keep }}</span></h3>

  </div>
</template>

<style>

body{

  overflow: hidden;

}

.pun{

  position: relative;
  left: 900px;
  bottom:370px;
  font-family: 'Metamorphous', cursive;
}

.tr{

  position: relative;
  left: 870px;
  bottom:350px;
  font-family: 'Diplomata SC', cursive;

}

#ass{

  position:relative;
  left:800px;
}

.h{

  color:white;
  position: relative;
  left:40px;
  top:10px;
  font-size: 30px;
  font-family: 'Amatic SC', cursive;
font-family: 'EB Garamond', serif;
    letter-spacing: 24px;
}
.L{

  color:white;
  position: relative;
  left:1000px;
  top:10px;
  font-size: 30px;
  font-family: 'Amatic SC', cursive;
font-family: 'EB Garamond', serif;

}

.S{

  color:white;
  position: relative;
  left:850px;
  top:10px;
  font-size: 30px;
  font-family: 'Amatic SC', cursive;
font-family: 'EB Garamond', serif;

}

.mario{
  
  animation-name: drive;
  animation-duration: 2s;
   
}

@keyframes drive{

   0%{

     opacity: 0

   }

    50%{

      opacity: 0.50
    }

    100%{


      opacity: 1
    }

}

#pad{

  padding-bottom: 30px;
}





</style>

<script>

  

  var axios = require("axios");
  console.log(axios);
export default {
  data: function() {
    return {
      message: "",
      time: "TIMELY",
      keep: "Keep track of your Tasks"

      
    
    };
  },
  created: function() {

         
        axios.get("http://localhost:3000/api/tasks").then(
          function(response) {
            console.log(response.data);    
          }
        );
      


  },
  methods: {

 



  },
  computed: {}
};
</script>