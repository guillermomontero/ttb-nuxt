<template>
  <article class="club">
    <div class="club__head">
      <img :src="club.logo" :alt="club.altLogo">
    </div>
    <div class="club__body">
      <span class="club__body--address">{{ club.address.street }}</span>
      <span class="club__body--address">{{ club.address.postalCode }}</span>
      <span class="club__body--address">{{ club.address.city }}</span>
      <span class="club__body--price-between">{{ club.priceBetween[0] }}€ - {{ club.priceBetween[1] }}€</span>
      <button>Reservar</button>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    club: Object
  });
</script>