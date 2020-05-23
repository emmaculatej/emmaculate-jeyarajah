<template>
  <div class="jumbotron">
    <h1>{{title}}</h1>
    <p>{{intro}} </p>
    <p> {{passion}} </p>
    <p> {{leisure}} </p>
  </div>
</template>

<script lang="ts">

export default{
  name: 'About',
  data() {
    return {
      title:  'About me',
      intro: 'I have been involving myself with Microsoft Technologies, in particular C#, for over 3 years and became a Microsoft Certified Solutions Developer in May 2020. '
      + 'My experience predominantly lies in web development that utilises C# and .NET Frameworks. I have expanded my skillset to use a variety of languages to support my foundation, such as Vue.js, Typescript and Javascript. '
      + 'Graduating with a First-Class Computer Science degree in 2019 has allowed me to explore more avenues of development, such as security, artificial intelligence and web development. '
      + 'My passion lies in self-improvement, which means that I always strive to be better at my craft. '
      + 'As technology is a field that is constantly growing, I immerse myself in development books and online resources such as PluralSight. '
      + 'In my spare time, you can most likely find me on Twitch streaming a range of video games or uploading videos to Youtube. '
      + 'Through my ventures of creating content, my communication skills are constantly improving and I gained a new skillset that includes digital marketing, editing videos and images.' ,
      passion: 'My passion lies in self-improvement, which means that I always strive to be better at my craft. '
      + 'As technology is a field that is constantly growing, I immerse myself in development books and online resources such as PluralSight. ',
      leisure: + 'In my spare time, you can most likely find me on Twitch streaming a range of video games or uploading videos to Youtube. '
      + 'Through my ventures of creating content, my communication skills are constantly improving and I gained a new skillset that includes digital marketing, editing videos and images.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
      background: url('http://placekitten.com/200/300') no-repeat center center;
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
