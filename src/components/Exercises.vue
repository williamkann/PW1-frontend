<template>
  <v-card
    max-width="1000" class="mx-auto">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Welcome {{ $route.params.username }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" @click="getExercises()">
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      username: this.$route.params.username,
      password: this.$route.params.password,
      result: this.$route.params.id,
      items: [
        { title: 'Exercise 1' },
        { title: 'Exercise 2' },
        { title: 'Exercise 3' },
        { title: 'Exercise 4' }
      ]
    }
  },
  methods: {
    async getExercises () {
      try {
        const resultGetMe = await this.axios.get('http://localhost:3000/api/v1/me')
        console.log('Result : ' + resultGetMe.data)
      } catch (err) {
        console.log(err)
      }
    }
  }

}
</script>
