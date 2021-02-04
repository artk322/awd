<template>
  <div class="col-lg-8 col-md-12 col-sm-12">
    <h2>My results</h2>
    <button class="btn btn-primary">New</button>

    <table class="table mt-3">
      <thead>
        <tr class="table-active">
          <th scope="col">Date</th>
          <th scope="col">Distance in meters</th>
          <th scope="col">Time</th>
          <th scope="col">Average speed</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody v-if="records.length">
        <tr v-for="record in records" :key="record.id">
          <td>{{ record.date | date }}</td>
          <td>{{ record.distance }}</td>
          <td>{{ record.time }}</td>
          <td>{{ calcAvgSpeed(record.time, record.distance) }}</td>
          <td>
            <button class="btn btn-primary" @click="$store.commit('removeFromRecords', record.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <h5 v-else class="text-center">No records...</h5>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Results',

  computed: {
    ...mapGetters(['records']),
  },
  methods: {
    calcAvgSpeed(time, distance) {
      return distance / time || 0;
    }
  }
};
</script>

<style></style>
