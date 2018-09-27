<template>
  <div id="password">
    <div class="form-group">
      <label>Enter a Password!</label>
      <input 
        type="text" 
        class="form-control" 
        name="passwordInput"
        :value="message" 
        @input="validationCheck" />
    </div>
    <check
      v-for="(index, key, item) in validationItems"
      :checkitem="item"></check>
  </div>
</template>

<script>
import { validationCheck } from '../vuex/actions'
import Check from './Check.vue'

export default {
  vuex: {
    getters: {
      validationItems: state => state.validationItems
    },
    actions: {
      validationCheck
    }
  },
  components: {
    Check
  }
}
</script>

<style scoped>

#app{
  position: relative;
  width: 100%;
  height: 100%;
}

#password{
  width: 100%;
  max-width: 700px;    
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;top: 50%;
}

.single-item{
  color: red;
  margin: 1em 0;
}

.single-item.starred{
  color: green;
}

</style>
