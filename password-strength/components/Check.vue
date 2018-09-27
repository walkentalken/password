<template>
  <div class="single-item" :class="{starred: passedTest}">
    <span class="glyphicon glyphicon-star"></span>
    <span>{{checkitem.label}}</span>
  </div>
</template>

<script>

export default {
  props: ['checkitem'],
  computed: {
    passedTest () {
      return this.checkitem.validated
    }
  }
}

</script>
