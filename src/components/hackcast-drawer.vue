<template>
  <v-navigation-drawer fixed v-model="drawer" app>
    <!-- FACEBOOK LOGIN BUTTON  -->
    <div class="fb-login-button" data-max-rows="1" data-size="small" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true"
      data-use-continue-as="false" data-scope="publish_actions, email, public_profile, user_photos "></div>
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in items" :key="i">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        items: [{
          icon: 'bubble_chart',
          title: 'Timeline'
        }]
      }
    },
    created() {
      window.fbAsyncInit = () => {
        FB.init({
          appId: '517043132014545',
          xfbml: true,
          version: 'v2.11'
        });
        FB.AppEvents.logPageView();
        FB.getLoginStatus(response => {
          statusChangeCallback(response);
          this.$axios.post('http://api.hackcast.tk/users/login', {
              data: response
            })
            .then(function (result) {
              // console.log(result)
              localStorage.setItem('token', result.data.token)
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      function statusChangeCallback(response) {
        console.log(response)
      }
    },
    computed: {
      ...mapGetters([
        'drawer'
      ])
    }
  }
</script>