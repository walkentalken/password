import Vue from 'vue'
import Vuex from 'vuex'
import zxcvbn from 'zxcvbn'

Vue.use(Vuex)

const state = {
  validationItems: {
    min: {
      label: "8 Character Minimum",
      validated: false      
    },
    max: {
      label: "64 Character Maximum",
      validated: false       
    },
    ascii: {
      label: "Allows all ASCII characters and spaces",
      validated: false      
    },
    common: {
      label: "Not a common PW",
      validated: false       
    }
  }
}

const mutations = {

  VALIDATION_CHECK (state, input) {
    const strength = zxcvbn(input).score
    state.validationItems.min.validated = (input.length > 7) ? true : false
    state.validationItems.max.validated = (input.length < 64 && input.length !== 0) ? true : false
    state.validationItems.ascii.validated = (/^[\w]+$/.test(input)) ? true : false
    state.validationItems.common.validated = (strength === 4) ? true : false
  }

}

export default new Vuex.Store({
  state,
  mutations
})
