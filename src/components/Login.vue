<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            :counter="20"
            label="Username"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="20"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="my-2">
        <v-btn text large color="primary" @click="login()">Sign in !</v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>

export default {
  data: () => ({
    valid: '',
    username: '',
    password: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => v.length <= 20 || 'Name must be less than 20 characters'],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 20 || 'Password must be less than 20 characters']
  }),
  methods: {
    async login () {
      const { username, password } = this
      try {
        const result = await this.axios.post('http://localhost:3000/api/v1/login', {
          username,
          password
        })
        this.$router.user = result.data
        this.loggedIn = true
        console.log(this.$router.user)
        this.$router.push({ name: 'exercises' })
      } catch (err) {
        this.errorLogin = err
        console.log('Login error: ' + this.errorLogin)
      }
    }
  }
}
</script>
