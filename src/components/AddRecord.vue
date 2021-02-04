<template>
  <form class="form col-lg-4 col-md-12 col-sm-12 mb-md-3" @submit.prevent="submitHandler">
    <h2>Add record</h2>
    <div class="form-group">
      <label for="date">Joggin date:</label>
      <input type="date" class="form-control" id="date" aria-describedby="emailHelp" placeholder="mm/dd/yyyy" />
    </div>
    <div class="form-group">
      <label for="distance">Distance (m)</label>
      <input type="number" class="form-control" id="distance" placeholder="0" v-model="distance" min="0"/>
    </div>
    <div class="form-group">
      <label for="time">Time (s)</label>
      <input type="number" class="form-control" id="time" placeholder="0" v-model="time" min="0"/>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
</template>

<script>
export default {
  name: 'AddRecord',
  data: () => ({
    date: null,
    distance: null,
    time: null,
  }),
  methods: {
    submitHandler() {
      const payload = {
        id: new Date().getTime(),
        date: this.date || new Date(),
        distance: +this.distance || 0,
        time: +this.time || 0,
      };
      this.$store.commit('addToRecords', payload);

      this.date = null;
      this.distance = null;
      this.time = null;
    },
  },
};
</script>

<style></style>
