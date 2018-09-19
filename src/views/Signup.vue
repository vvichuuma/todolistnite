<template>

  <div class="signup">

     <!-- Navbar start-->
   <nav class="navbar navbar-expand-lg navbar-danger bg-danger" id="mar">

    <span class="navbar-text" id="log">
    SIGN UP
  </span>

   <a href="/">
     <span class="glyphicon glyphicon-time" id='t'></span>
   </a>

 
   </nav>
   <!-- navbar _ end-->
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name" style="width: 400px">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" style="width: 400px">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" style="width: 400px">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" style="width: 400px">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>

.container{

   position:relative;
   left:380px;
   top:90px;

}

  #mar{

    padding-bottom: 30px;
    
 }

#t{

  color: white;
  position:relative;
  top:13px;
  left:570px;
  font-size:50px;

}

#log{

  font-size: 20px;
   font-family: 'Diplomata SC', cursive;

}

.signup{

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

#log{

  color:white;
  position: relative;
  left:20px;
  top:20px;
}




</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("https://timelyy.herokuapp.com/api/users", params)
        .then(response => {
          this.$router.push("/Login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>