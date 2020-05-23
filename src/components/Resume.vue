<template>
  <div class="jumbotron">
    <h1>This is a Resume</h1>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Resume',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
      background: url('http://placekitten.com/800/800') no-repeat center center;
      background-size: cover;
      padding-top: 10%;
      padding-bottom: 10%;
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
