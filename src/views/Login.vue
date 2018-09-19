<template>
  <div class="login">

     <!-- Navbar start-->
   <nav class="navbar navbar-expand-lg navbar-danger bg-danger" id="mar">

    <span class="navbar-text" id="log">
    LOGIN
  </span>

   <a href="/">
     <span class="glyphicon glyphicon-time" id='t'></span>
   </a>

 
   </nav>
   <!-- navbar _ end-->


    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" style="width: 400px">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" style="width: 400px">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
  
  .login{
  
  animation-name: divi;
  animation-duration: 2s;

  }

  @keyframes divi{

  0%{

    opacity: 0
  }

  100%{

    opacity: 1
  }

}

 
#t{

  color: white;
  position:relative;
  top:13px;
  left:570px;
  font-size:50px;

}

  .container{
  position:relative;
   left:380px;
   top:90px;


  }

  #log{

  color:white;
  position: relative;
  left:20px;
  top:20px;
}
 
   #mar{

    padding-bottom: 30px;
    
 }



</style>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("https://timelyy.herokuapp.com/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/Taskp");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>

