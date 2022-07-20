<template>
  <section class="home-regions">
    <h3>Regiones destacadas</h3>
    <div class="home-regions__carousel">
      <article v-for="(field, index) in fields" :key="index">
        <home-field :field="field"/>
      </article>
    </div>
    <div class="home-regions__regions">
      <span class="home-regions__regions--title">Todas las regiones</span>
    </div>
  </section>
</template>

<script setup>
  const fields = [
    { campo: 'Mallorca', numeroCampos: 12, precioReservaDesde: 64, altFoto: 'Campo Golf Mallorca', foto: 'https://static2.abc.es/media/summum/2019/12/04/golf-U301387819834h6D--620x349@abc.jpeg' },
    { campo: 'Lisboa', numeroCampos: 7, precioReservaDesde: 36, altFoto: 'Campo Golf Lisboa', foto: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/05/08/15889360195109.jpg' },
    { campo: 'Costa del Sol', numeroCampos: 22, precioReservaDesde: 32, altFoto: 'Campo Golf Costa del Sol', foto: 'http://www.rfegolf.es/Fotografa/CAMPOS%20DE%20GOLF/_w/Campo_golf_3_jpg.jpg' },
    { campo: 'Andalucía', numeroCampos: 34, precioReservaDesde: 28, altFoto: 'Campo Golf Andalucía', foto: 'https://s3.abcstatics.com/media/viajar/2021/11/09/s/montecastillo-golf-andalucia-kwU--510x349@abc.jpeg' },
  ]
</script>