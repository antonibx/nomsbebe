<template>
  <div class="container text-center">
    <h1>De quin gènere vols escollir els noms?</h1>
    <div class="row align-items-start">
      <div class="col">
        <img
          @click.stop="$store.dispatch('setGender', 'nen')" class="img"
          alt="Vue logo" style="height: 300px" src="@/assets/nen.png">
        <br>
        <button
          @click.stop="$store.dispatch('setGender', 'nen')"
          type="button" class="m-2 btn btn-primary btn-block">
          Nen
        </button>
      </div>
      <div class="col">
        <img
          @click.stop="$store.dispatch('setGender', 'nena')" class="img"
          alt="Vue logo" style="height: 300px" src="@/assets/nena.png">
        <br>
        <button
          @click.stop="$store.dispatch('setGender', 'nena')"
          type="button" class="m-2 btn btn-danger btn-block">
          Nena
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gender select'
}
</script>

<style scoped>
.btn-danger
{
  background-color: darkorchid;
  border: darkorchid
}
.btn-danger:hover
{
  background-color: darkmagenta;
  border: darkmagenta
}

.img
{
  cursor: pointer;
}
</style>
