<script setup>
  import { store } from './store/store.js';
  store.changeDevice('desktop');
</script>

<template>
  <header class="header-mobile" v-if="store.device === 'mobile'">
    <img src="/teetimesbooking.png" alt="Tee Times Booking">
    <base-searcher />
  </header>
  <header class="header-desktop" v-if="store.device === 'desktop'">
    <div class="header-desktop__navbar">
      <div class="header-desktop__navbar--logo">
        <img src="/teetimesbooking.png" alt="Tee Times Booking">
      </div>
      <div class="header-desktop__navbar--menu">
        <div class="header-desktop__navbar--menu--item">
          <p>icon</p>
          <p>LOGIN</p>
        </div>
        <div class="header-desktop__navbar--menu--item">
          <p>icon</p>
          <p>SIGN UP</p>
        </div>
        <div class="header-desktop__navbar--menu--item header-desktop__navbar--menu--item__cart">
          <p>icon</p>
          <p>CART</p>
        </div>
      </div>
    </div>
    <div class="header-desktop__cta-search">
      <base-searcher />
      <div class="header-desktop__cta-search--info-club">
        <span>SANTANA GOLF</span><br>
        <span>Málaga</span>
      </div>
    </div>
  </header>
</template>