<template>
  <div>
    <div id="on"><h1>Welcome to Vue.js 3</h1></div>

    <h4>
      <i
        ><marquee width="100%" direction="left" scrollamount="13">
          Progressive JavaScript Framework. An approachable, performant and
          versatile framework for building web user interfaces.</marquee
        ></i
      >
    </h4>
    <div id="in">
      <span>Welcome {{ user }}</span>
    </div>
    <div id="im"><img src="./favicon.ico" width="300" height="300" /></div>
    <div id="p">
      Vue provides an interface to change what is displayed on the page based on
      the current URL path – regardless of how it was changed (whether by
      emailed link, refresh, or in-page links). Additionally, using a front-end
      router allows for the intentional transition of the browser path when
      certain browser events (i.e. clicks) occur on buttons or links. Vue itself
      doesn't come with front-end hashed routing. But the open-source
      "vue-router" package provides an API to update the application's URL,
      supports the back button (navigating history), and email password resets
      or email verification links with authentication URL parameters. It
      supports mapping nested routes to nested components and offers
      fine-grained transition control. With Vue, developers are already
      composing applications with small building blocks building larger
      components. With vue-router added to the mix, components must merely be
      mapped to the routes they belong to, and parent/root routes must indicate
      where children should render
    </div>

    <div id="c">
      <span>Need new account > </span><RouterLink to="/">signup</RouterLink>
    </div>
  </div>
</template>
<script>
import user from "../views/user.js";

export default {
  name: "welcome",
  data() {
    return {
      user,
    };
  },
};
</script>
<style>
#on {
  background-color: rgb(253, 253, 0);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#im {
  background-color: rgb(212, 245, 247);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 310px;
}
#in {
  background-color: rgb(168, 235, 168);
}
#p {
  background-color: rgb(220, 242, 243);
  height: 150px;
}
#c {
  height: 30px;
  text-align: center;
  background-color: rgb(155, 163, 170);
}
</style>
