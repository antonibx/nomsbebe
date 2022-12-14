<template>
  <div class="home">
    <div v-if="!$store.state.gender">
      <img alt="Vue logo" style="height: 300px" src="https://assets.brauer.com.au/uploads/2022/08/Brauer-Baby-Hero-1-e1597737753105-1000x990.png">
      <GenderSelect/>
    </div>
    <div v-else-if="!compareLists">
      <MainComponent @bothListsFilled="bothListsFilled"/>
    </div>
    <div v-else>
      <CompareLists @bothListsFilled="bothListsFilled"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GenderSelect from '@/components/genderSelect.vue'
import MainComponent from '@/components/component.vue'
import CompareLists from '@/components/compareLists.vue'
CompareLists

export default {
  name: 'Home',
  components: {
    GenderSelect,
    MainComponent,
    CompareLists
  },
  data() {
    return {
      compareLists: false,
    }
  },
  methods:
  {
    bothListsFilled()
    {
      this.compareLists = true;
    }
  }
}
</script>
<style scoped>
.home
{
  height: 100vh;
  background-repeat: repeat;
  background: url("https://cdn.hovia.com/app/uploads/pattern-clouds-pink-and-yellow-nursery-plain.jpg");
  overflow-y: scroll;
}
</style>
