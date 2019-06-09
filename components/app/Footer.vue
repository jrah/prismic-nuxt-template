<template>
  <footer class="footer bg-grey-light">Footer</footer>
</template>

<script></script>

<style lang="scss">
@import 'assets/scss/mixins';

.footer {
  &-overflow {
    background: transparent;
    overflow: hidden;
    padding-top: 20%;
    margin-top: -20%;
  }
  @apply bg-grey-light;
}
</style>
