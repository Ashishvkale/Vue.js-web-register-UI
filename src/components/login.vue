<template>
  <div id="lg" class="form-floating">
    <div id="login">
      <h2>Login</h2>
      <i>Welcome back !</i>
      <br />
      <label for="mail"><b>Email :</b></label
      ><br />
      <input
        type="email"
        class="form-control"
        placeholder="Enter your email"
        id="mail"
        v-model="logindata.mail"
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
        v-model="logindata.password"
      />
      <p><a href="#">Forget password?</a></p>

      <button v-on:click="Lclick" class="btn btn-primary" id="btn2">
        Submit</button
      ><span></span>
      <p>Don't have a account? <RouterLink to="/">signup</RouterLink></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import user from "../views/user.js";

export default {
  name: "login",
  data() {
    return {
      logindata: {
        mail: null,
        password: null,
      },
    };
  },
  methods: {
    async Lclick() {
      if (this.logindata.mail && this.logindata.password) {
        var text = document.getElementById("mail").value;
        var regx = /^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+).([a-z]+)$/;

        if (regx.test(text)) {
          document.getElementById("lbltext").innerHTML =
            "Valid Email.Please check password";
          document.getElementById("lbltext").style.visibility = "visible";
          document.getElementById("lbltext").style.color = "green";
          try {
            const response = await axios.get("http://127.0.0.1:3001/users");
            console.log(response.data);
            var dd = response.data;
            for (var i = 0; i < dd.length; i++) {         //find method
            if (
              this.logindata.mail === dd[i].mail &&
              this.logindata.password === dd[i].password
            ) {
              this.$router.push({ path: "/welcome" });
              user.push(this.logindata.mail);
            } else {
              console.log("Invalid login credentials");
            }
            }
          } catch (error) {
            console.error(error);
          }
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
#lg {
  height: 660px;
  display: flex;
  justify-content: center;
}
#btn2 {
  width: 100%;
  border-radius: 20px;
}
i {
  margin-left: 150px;
  font-size: 13px;
}
p {
  font-size: 14px;
}
</style>
