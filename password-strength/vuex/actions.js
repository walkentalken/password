export const validationCheck = ({ dispatch }, e) => {
  dispatch('VALIDATION_CHECK', e.target.value)
}

