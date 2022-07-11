<template>
  <article class="field">
    <div class="field__head">
      <img :src="field.foto" :alt="field.altFoto">
      <div class="field__head--title">
        <h3>{{ field.campo }}</h3>
      </div>
    </div>
    <div class="field__body">
      <span class="field__body--fields">{{ field.numeroCampos }} campos</span>
      <span class="field__body--price-from">Desde {{ field.precioReservaDesde }}€</span>
      <button>Reservar</button>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    field: Object
  });
</script>