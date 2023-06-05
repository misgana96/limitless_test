<script setup lang="ts">
import AppView from '@/components/AppView.vue'
</script>

<template>
  <main>
    <notifications position="bottom center" width="250">
      <template #body="props">
        <div v-show="props.item.type ==='success' " class="my-notification success">
          <div  class="error-text" v-html="props.item.text"/>
          <!-- <button class="close-btn" ><font-awesome-icon icon="fa-xmark" size="lg"/></button> -->
        </div>
        <div v-show="props.item.type ==='error' " class="my-notification error">
          <div  class="error-text" v-html="props.item.text"/>
          <!-- <button class="close-btn"><font-awesome-icon icon="fa-xmark" size="lg"/></button> -->
        </div>
      </template>
    </notifications>
    <AppView/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
