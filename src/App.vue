<template>
  <div id="app">
    <div class="container mt-5">
      <h2>Joggin diary</h2>
      <hr />
      <div class="row mt-3">
        <AddRecord />
        <Results />
      </div>
    </div>
  </div>
</template>

<script>
import AddRecord from './components/AddRecord.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: {
    AddRecord,
    Results
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
}

#app {

}
</style>
