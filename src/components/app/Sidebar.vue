<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
        v-for="link of links"
        :key="link.url"
        active-class="active"
        :to="link.url"
        custom
        v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <li :class="[isExactActive && 'active']">
        <a @click="navigate" :href="href" class="waves-effect waves-orange pointer">{{link.title}}</a>
      </li>
    </router-link>

  </ul>

</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true
    }
  },
   data: () => ({
     links: [
       {title: 'Счет', url: '/'},
       {title: 'История', url: '/history',},
       {title: 'Планирование', url: '/planning',},
       {title: 'Новая запись', url: '/record',},
       {title: 'Категории', url: '/categories',}
     ]
   })
};
</script>

<style scoped>

</style>