<template>
  <div>
    <vue-scroll-progress-bar
      
      height="0.1rem"
      backgroundColor="#F2C826"
    />
        <a class="text-white"> {{dark}}</a>
    <nav>
      <div class="flex py-2 bg-black">
        <img class="mt-auto" src="../assets/IMDB_Logo_2016.svg" alt="" />
        <input type="checkbox" class="toggle" @click="toggler()" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    data ()
    {
        return {
            dark: false
        }
    },
  methods: {
    toggler() {
      this.$store.commit("setMode");
      console.log(this.$store.state.dark);
    },
  },
  computed()
  {
      this.dark = this.$store.getteres.getState;
  },
};
</script>

<style scoped>
img {
  width: 4vw;
  height: 4vh;
}
</style>
