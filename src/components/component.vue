<template>
  <div class="container text-center" id="component">
    <br>
    <h1 class="">
      <button @click="$store.dispatch('reset')" type="button" class="m-2 btn btn-primary btn-block">⮌</button>
      Noms de {{gender}}
      <img v-if="gender=='nen'" style="height: 100px" src="@/assets/nen.png">
      <img v-else style="height: 100px" src="@/assets/nena.png">
    </h1>
    <div class="card">
      <div class="card-body bg-white">
        Pots desplaçar el nom amb els botons de <span class="badge badge-intro">❤</span> <span class="badge badge-intro">✖</span> sota el nom o amb les fletxes del teclat <span class="badge badge-intro">🡸</span> <span class="badge badge-intro">🡺</span>.
        <br> Dins d'una mateixa llista pots arrossegar els noms amunt i avall per ordenar-los.
        <br> Abans d'avançar, posa els noms que més t'agradin al principi de la llista verda.
        <br> Si canvies d'idea, també pots arrossegar els noms d'una llista cap a una altra.
      </div>
    </div>
    <br>
    <div class="row align-items-start">
      <div class="col">
        <div class="card">
          <div class="card-body text-white bg-success">
            <h5 class="card-title">M'agraden <span class="badge">{{likedNames.length}}</span></h5>
            <hr>
            <draggable 
              v-model="likedNames" 
              group="people" 
              @start="drag=true" 
              @end="drag=false" 
              item-key="id">
              <template #item="{element}">
                <div class="badge name mx-1">{{element}}</div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body bg-warning">
            <h5 class="card-title">Per classificar <span class="badge">{{names.length}}</span></h5>
            <hr>
            <div v-if="names.length">
              <div class="card">
                <div class="card-body bg-white">
                  <h1><b>{{names[0]}}</b></h1>
                  <button
                    @click.stop="like()" type="button"
                    class="mx-1 btn btn-outline-success btn-sm btn-circle">
                    ❤
                  </button>
                  <button
                    @click.stop="dislike()" type="button"
                    class="mx-1 btn btn-outline-danger btn-sm btn-circle">
                    ✖
                  </button>
                </div>
              </div>
              <draggable 
                v-model="names" 
                group="people" 
                @start="drag=true" 
                @end="drag=false"
                class="mt-4" 
                item-key="id">
                <template #item="{element, index}">
                  <div v-if="index != 0" class="badge name mx-1">{{element}}</div>
                </template>
              </draggable>
            </div>
            <div v-else>
              <button
                @click.stop="guardarLlista()" type="button"
                class="mx-1 btn btn-outline-primary btn-sm btn-circle">
                Guarda la llista i
                <span v-if="($store.state.user1_list).length>0">compara llistes</span>
                <span v-else>cedeix el torn a la teva parella</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body text-white bg-danger">
            <h5 class="card-title">No m'agraden <span class="badge">{{dislikedNames.length}}</span></h5>
            <hr>
            <draggable 
              v-model="dislikedNames" 
              group="people" 
              @start="drag=true" 
              @end="drag=false" 
              item-key="id">
              <template #item="{element}">
                <div class="badge name mx-1">{{element}}</div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable'

export default {
  name: 'Name liker',
  components: {
    draggable,
  },
  data() {
    return {
      currentItemIndex: 0,
      totalItemsIndex:  0,
      gender:           this.$store.state.gender,
      allNames:         [],
      names:            [],
      likedNames:       [],
      dislikedNames:    []
    }
  },

  methods:
  {
    async fetch(url, pos)
    {
      let link = url+''+pos;
      await axios.get(link).then(response => {
        let res = response.data.feed;
        this.currentItemIndex = parseInt(res['opensearch:startIndex']);
        if(pos==0) this.totalItemsIndex = parseInt(res['opensearch:totalResults']);
        let mes = 0;
        (res.entry).forEach(entry =>
        {
          if((this.gender=='nena' && (entry.content.content).includes('dones')) || (this.gender=='nen' && (entry.content.content).includes('homes')))
          {
            this.allNames.push(entry.title);
            this.names.push(entry.title);
            mes +=1 ;
          }
        })
        if(this.currentItemIndex<this.totalItemsIndex && mes>0)
        //if(this.currentItemIndex<20 && mes>0)
        {
          let newPos = pos+25;
          this.fetch(url, newPos);
        }
      })
    },

    like()
    {
      this.likedNames.push(this.names[0]);
      this.names.splice(0, 1);
    },

    dislike()
    {
      this.dislikedNames.push(this.names[0]);
      this.names.splice(0, 1);
    },

    guardarLlista()
    {
      if((this.$store.state.user1_list).length>0)
      {
        alert('Moment de veure els resultats... quins nervis!');
        this.$emit('bothListsFilled');
      }
      else alert('Torn de la teva parella');
      this.$store.dispatch('setList', this.likedNames);
      this.names = this.allNames;
      this.likedNames = [];
      this.dislikedNames = [];
    }
  },

  watch:
  {
    names:
    {
      handler(newValue)
      {
        if(newValue.length == 0) this.guardarLlista();
      },
      deep: true
    }
  },

  mounted()
  {
    let url;
    if(this.gender=='nena') url = 'https://api.idescat.cat/onomastica/v1/nadons.json?orderby=sex&desc=1&posicio=';
    if(this.gender=='nen') url = 'https://api.idescat.cat/onomastica/v1/nadons.json?orderby=sex&desc=0&posicio=';
    let pos = 0;
    this.fetch(url, pos);
    let self = this;
    window.addEventListener("keydown", function (e) {
      if(e.code == 'ArrowLeft') self.like();
      if(e.code == 'ArrowRight') self.dislike();
    });
  },

  beforeUnmount()
  {
    window.removeEventListener("keydown", function (e) {
      if(e.code == 'ArrowLeft') this.like();
      if(e.code == 'ArrowRight') this.dislike();
    });
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
.badge-intro
{
  background: lightblue;
}
.name
{
  cursor: grab;
}
</style>
