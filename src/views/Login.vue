<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <div>
      <label class="text-danger">{{message}}</label>
    </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</template>

<script lang="ts">
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "Login",
  setup(){
    const data = reactive({
      email: '',
      password: '',
    });

    const router = useRouter();

    const message = ref('');

    const submit = async () => {
      const response  = await fetch('http://localhost:3000/api/login',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
        body: JSON.stringify(data),
      })

      const  content = await response.json();

      if (content.message == "Login success" ){
        await router.push('/');
      }

      message.value = `${ content.message}`

    }

    return{
      data,
      message,
      submit
    }
  }
}
</script>

<style scoped>

</style>