<template>
  <div id="sg" class="form-floating">
    <div id="signup">
      <h2>Signup</h2>
      <br />
      <label for="mail"><b>Email :</b></label
      ><br />
      <input
        type="text"
        class="form-control"
        placeholder="Enter your email"
        id="mail"
        v-model="signupdata.mail"
      /><span
        ><label id="lbltext" style="color: red; visibility: hidden">
          Invalid</label
        ></span
      ><br />
      <label for="password"><b>Password :</b></label
      ><br />
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        id="password"
        v-model="signupdata.password"
      />
      <br />
      <button v-on:click="Sclick" class="btn btn-warning" id="btn1">
        Submit</button
      ><span></span>
      <p>Already have a account? <RouterLink to="/login"> login</RouterLink></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      signupdata: {
        mail: null,
        password: null,
      },
    };
  },
  methods: {
    async Sclick() {
      if (this.signupdata.mail && this.signupdata.password) {
        var text = document.getElementById("mail").value;
        var regx = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+).([a-z]+)$/;

        if (regx.test(text)) {
          document.getElementById("lbltext").innerHTML =
            "Valid Email.Please check password";
          document.getElementById("lbltext").style.visibility = "visible";
          document.getElementById("lbltext").style.color = "green";

          try {
            const response = await axios.post(
              "http://127.0.0.1:3001/createuser",
              { mail: this.signupdata.mail, password: this.signupdata.password }
            );
            console.log(response);
          } catch (error) {
            console.error(error);
          }
          this.$router.push({ path: "/login" });
        } else {
          document.getElementById("lbltext").innerHTML =
            "InValid. Please insert a valid email address.";
          document.getElementById("lbltext").style.visibility = "visible";
          document.getElementById("lbltext").style.color = "red";
        }
      } else {
        alert("Email / password required");
      }
    },
  },
};
</script>

<style scoped>
#sg {
  height: 600px;
  display: flex;
  justify-content: center;
}

#btn1 {
  width: 100%;
 
}
p {
  font-size: 14px;
}
 /* a-z  all small caps
       A-Z all big caps
       0-9 all numbers
    "\" back slash for speacial charecters */
</style>
