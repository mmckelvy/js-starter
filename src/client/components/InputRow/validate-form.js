/**
* @function validateForm
*
* @param {Object} formData -- keys correspond to input names
*
* @returns {Boolean} -- True if data passes, false if it does not.
*/
export default function validateForm(formData = {}) {
  return Object.keys(formData).every((key) => {
    return formData[key]
  })
}
