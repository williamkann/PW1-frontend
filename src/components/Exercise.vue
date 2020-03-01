<template>
  <v-form v-model="valid">
    <v-container>
        <v-row>
            <v-col cols="12" sm="2" md="4">
                <v-text-field
                    value="John Doe"
                    label="Solo"
                    solo
                    readonly
                    class="pa-2"/>
            </v-col>
            <v-col cols="6" sm="2" md="4">
                <v-select
                class="pa-2"
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
                />
           </v-col>
        </v-row>
    </v-container>
  </v-form>
</template>
<script>

export default {
  data: () => ({
  }),
  methods: {
  }
}
</script>
