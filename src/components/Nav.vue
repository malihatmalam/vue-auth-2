<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <h5 class="navbar-brand" >Aino Vue Auth</h5>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" >Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registration" class="nav-link" >Sign up</router-link>
          </li>
        </ul>

        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" @click="logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Nav",
  setup(){
    const store = useStore();

    const auth = computed(() => store.state.authenticated);

    const logout = async () => {
      await fetch('http://localhost:3000/api/logout',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
      await  store.dispatch('setAuth', false);
    };

    return{
      auth,
      logout
    }
  }
}
</script>