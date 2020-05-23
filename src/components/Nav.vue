<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}} </router-link>
    </nav>
    <button><a target="_blank">Download</a></button> 

  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/',
        },
        {
          id: 1,
          text: 'About',
          page: '/About',
        },
        {
            id: 2,
            text: 'Resume',
            page: '/Resume',
        },
      ],
    };
  },
};
</script>
 
 <<style scoped>
 
 </style>
