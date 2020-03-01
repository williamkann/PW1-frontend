<template>
  <v-card
    max-width="1500" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Welcome {{ username }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cached</v-icon>
      </v-btn>
      <v-btn icon @click="createExercise()">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="exercise in exercises" :key="exercise.title">
        <v-list-item-content>
          <v-list-item-title v-text="exercise.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  async mounted () {
    try {
      const resultGetMe = await this.axios.get('http://localhost:3000/api/v1/exercises')
      console.log(resultGetMe.data)
      console.log('Get exercises success')
      this.exercises = resultGetMe.data
    } catch (err) {
      console.log(err)
    }
  },

  data () {
    return {
      username: this.$route.params.username,
      password: this.$route.params.password,
      result: this.$route.params.id,
      exercises: [
        { title: 'Exercise 1' },
        { title: 'Exercise 2' },
        { title: 'Exercise 3' },
        { title: 'Exercise 4' }
      ]
    }
  },
  methods: {
    createExercise: function () {
      this.$router.push({ name: 'exercise' })
    }
  }

}
</script>
