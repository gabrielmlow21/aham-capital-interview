<template>
  <nav class="main-nav">
    <div class="main-nav--links">
      <router-link :to="{ name: 'FundsList' }">Funds</router-link>
    </div>
    <div class="main-nav--username">John Doe</div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.main-nav {
  text-align: center;
  padding: 1.75rem 10rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    156.8deg,
    rgb(30, 144, 231) 27.1%,
    rgb(67, 101, 225) 77.8%
  );
  font-weight: bold;
}
</style>
