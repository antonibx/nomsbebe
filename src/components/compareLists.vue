<template>
  <div class="container text-center" id="component">
    <br>
      <h1 class="pt-5">Resultats</h1>
    <br>
    <div v-if="loaded" class="row align-items-start">
      <div class="col">
        <div class="card">
          <div class="card-body text-white bg-info">
            <h5 class="card-title">Agraden al primer <span class="badge">{{likedNamesUser1.length}}</span></h5>
            <hr>
            <draggable 
              v-model="likedNamesUser1Loaded" 
              group="people"
              item-key="id">
              <template #item="{element}">
                <div class="mx-1 badge"
                :class="{'badgesuccess': shared(element), 'badgedanger': !shared(element)}">{{element}}</div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
      <div class="col">
        <span v-if="sharedNames.length>0">
          <div class="card">
            <div class="card-body text-white bg-success">
              La vostra nena s'hauria de dir:
              <h1>{{sharedNamesOrdered[0].name}}</h1>
            </div>
          </div>
          <div v-if="sharedNames.length>1" class="card">
            <div class="card-body text-white bg-success">
              <h5 class="card-title">Altres noms que agraden als dos <span class="badge">{{sharedNames.length}}</span></h5>
              <hr>
              <draggable 
                v-model="sharedNamesOrdered" 
                group="people" 
                @start="drag=true" 
                @end="drag=false" 
                item-key="id">
                <template #item="{element, index}">
                  <div v-if="index != 0" class="badge name mx-1">{{element.name}}</div>
                </template>
              </draggable>
            </div>
          </div>
        </span>
        <span v-else>
          <div class="card">
            <div class="card-body text-white bg-danger">
              No coincidiu en cap nom :(
            </div>
          </div>
        </span>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body text-white bg-primary">
            <h5 class="card-title">Agraden al segon <span class="badge">{{likedNamesUser2.length}}</span></h5>
            <hr>
            <draggable 
              v-model="likedNamesUser2Loaded" 
              group="people" 
              @start="drag=true" 
              @end="drag=false" 
              item-key="id">
              <template #item="{element}">
                <div class="badge mx-1"
                :class="{'badgesuccess': shared(element), 'badgedanger': !shared(element)}">{{element}}</div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'Name liker',
  components: {
    draggable,
  },
  data() {
    return {
      loaded:           false,
      likedNamesUser1:  this.$store.state.user1_list,
      likedNamesUser2:  this.$store.state.user2_list,
      sharedNames:      []
    }
  },

  computed:
  {
    sharedNamesOrdered()
    {
      let list = this.sharedNames;
      return list.sort((a, b) => a.value - b.value);
    },

    likedNamesUser1Loaded()
    {
      return this.loaded ? this.likedNamesUser1 : [];
    },

    likedNamesUser2Loaded()
    {
      return this.loaded ? this.likedNamesUser2 : [];
    }
  },

  methods:
  {
    compara()
    {
      (this.likedNamesUser1).forEach((element, index) => {
        if(this.likedNamesUser2.includes(element))
        {
          let number = index + this.likedNamesUser2.indexOf(element);
          this.sharedNames.push({name: element, value: number});
        }
      });
      this.loaded = true;
    },

    shared(element)
    {
      return this.sharedNames.some(item => item.name == element);
    }
  },

  beforeMount()
  {
    this.compara()
  }
}
</script>

<style scoped>
.btn-circle {
  padding: 5px 10px;
  border-radius: 60px;
  font-size: 15px;
	text-align: center;
}

.badge
{
  background: white;
  color: black;
}

.badgesuccess
{
  background: lightgreen;
  color: black;
}

.badgedanger
{
  background: white;
  color: black;
}
.badge-intro
{
  background: lightblue;
}
.name
{
  cursor: grab;
}
</style>
