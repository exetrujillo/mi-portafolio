<!-- layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-screen bg-ui-bg text-ui-text">
    <Navbar />
    <main class="flex-grow">
      <!-- sin UContainer, para que el hero pueda ocupar todo el ancho -->
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style>