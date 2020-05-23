<template>
  <div class="jumbotron">
    <h1>{{welcome}}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  data() {
    return {
      welcome : 'Emma Jeyarajah',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
      background: url('http://placekitten.com/800/500') no-repeat center center;
      background-size: cover;
      padding-top: 20%;
      padding-bottom: 20%;
    }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
