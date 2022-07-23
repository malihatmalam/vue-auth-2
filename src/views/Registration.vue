<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please registration</h1>
    <div class="form-floating">
      <input v-model="data.name" class="form-control" id="floatingName" placeholder="Your name" required>
      <label for="floatingName">Your name</label>
    </div>
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
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</template>

<script lang="ts">
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "Registration",
  setup(){
    const data = reactive({
      name:'',
      email:'',
      password:'',
    });

    const router = useRouter();

    const message = ref('');

    const submit = async () => {
      console.log(data);
      const response  = await fetch('http://localhost:3000/api/registration', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });

      const  content = await response.json();

      if (content.id != null ){
        await router.push('/login');
      }

      message.value = `${ content.message}`;

    }

    return{
      message,
      data,
      submit
    }
  }
}
</script>

<style scoped>

</style>