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
          <td v-if="record.is_editable">
            <input type="date" class="form-control" id="date" placeholder="mm/dd/yyyy" v-model="date" />
          </td>
          <td v-else>{{ record.date | date }}</td>
          <td v-if="record.is_editable">
            <input type="number" class="form-control" id="distance" placeholder="0" v-model="distance" min="0" />
          </td>
          <td v-else>{{ record.distance }}</td>
          <td v-if="record.is_editable">
            <input type="number" class="form-control" id="time" placeholder="0" v-model="time" min="0" />
          </td>
          <td v-else>{{ record.time }}</td>
          <td>{{ record.time / record.distance || "0" }}</td>
          <td>
            <a v-if="record.is_editable" class="btn-action" @click="saveRecord(record.id)">
              Save
            </a>
            <a v-else class="btn-action" @click="editRecord(record)">
              Edit
            </a>
            <a class="btn-action" @click="$store.commit('removeFromRecords', record.id)">
              Delete
            </a>
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
  data: () => ({
    date: null,
    distance: null,
    time: null,
  }),
  computed: {
    ...mapGetters(['records']),
  },
  methods: {
    saveRecord(id) {
      const payload = {
        id,
        date: this.date || new Date(),
        distance: +this.distance || 0,
        time: +this.time || 0,
        is_editable: false,
      }
      this.$store.commit('saveRecord', payload);
    },
    editRecord(record) {
      const { id, date, distance, time } = record;

      this.date = date;
      this.distance = distance;
      this.time = time;

      this.$store.commit('editRecord', id);
    }
  },
};
</script>

<style>
.btn-action {
  color: #555;
}

.btn-action:hover {
  text-decoration: underline !important;
  cursor: pointer;
}
</style>
