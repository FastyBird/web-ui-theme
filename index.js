// Forms components
import FbFormInput from './components/Forms/FbInput'
import FbFormSelect from './components/Forms/FbSelect'
import FbFormTextArea from './components/Forms/FbTextArea'
import FbFormCheckboxesGroup from './components/Forms/FbCheckboxesGroup'
import FbFormRadioButton from './components/Forms/FbRadioButton'
import FbFormRadioButtonsGroup from './components/Forms/FbRadioButtonsGroup'

// MD forms components
import FbFormCheckbox from './components/Forms/FbCheckbox'
import FbMdFormDatePicker from './components/Forms/FbMdDatePicker'
import FbMdFormInput from './components/Forms/FbMdInput'
import FbMdFormSelect from './components/Forms/FbMdSelect'
import FbMdFormTextArea from './components/Forms/FbMdTextArea'

// UI components
import FbAlert from './components/UI/FbAlert'
import FbButton from './components/UI/FbButton'
import FbCardBox from './components/UI/FbCardBox'
import FbConfirmationWindow from './components/UI/FbConfirmationWindow'
import FbContent from './components/UI/FbContent'
import FbModalForm from './components/UI/FbModalForm'
import FbModalInfo from './components/UI/FbModalInfo'
import FbModalWindow from './components/UI/FbModalWindow'
import FbDivider from './components/UI/FbDivider'
import FbSwitchElement from './components/UI/FbSwitchElement'
import FbLoadingBox from './components/UI/FbLoadingBox'
import FbPageLoading from './components/UI/FbPageLoading'
import FbResultErr from './components/UI/FbResultErr'
import FbResultOk from './components/UI/FbResultOk'
import FbSpinner from './components/UI/FbSpinner'
import FbTransitionExpand from './components/UI/FbTransitionExpand'

// Mixins
import ThemeHelpersMixin from './mixins/helpers'

// Directives
import ThemeClickOutsideDirective from './directives/ClickOutside'
import ThemeBodyScrollLockDirective from './directives/BodyScrollLock'

export default {

  install(Vue) {
    // Classic design
    Vue.component('FbFormInput', FbFormInput)
    Vue.component('FbFormSelect', FbFormSelect)
    Vue.component('FbFormTextArea', FbFormTextArea)

    Vue.component('FbFormCheckbox', FbFormCheckbox)
    Vue.component('FbFormCheckboxesGroup', FbFormCheckboxesGroup)
    Vue.component('FbFormRadioButton', FbFormRadioButton)
    Vue.component('FbFormRadioButtonsGroup', FbFormRadioButtonsGroup)

    // Material design
    Vue.component('FbMdFormDatePicker', FbMdFormDatePicker)
    Vue.component('FbMdFormInput', FbMdFormInput)
    Vue.component('FbMdFormSelect', FbMdFormSelect)
    Vue.component('FbMdFormTextArea', FbMdFormTextArea)

    // UI components
    Vue.component('FbAlert', FbAlert)
    Vue.component('FbButton', FbButton)
    Vue.component('FbCardBox', FbCardBox)
    Vue.component('FbConfirmationWindow', FbConfirmationWindow)
    Vue.component('FbContent', FbContent)
    Vue.component('FbModalForm', FbModalForm)
    Vue.component('FbModalInfo', FbModalInfo)
    Vue.component('FbModalWindow', FbModalWindow)
    Vue.component('FbDivider', FbDivider)
    Vue.component('FbSwitchElement', FbSwitchElement)
    Vue.component('FbLoadingBox', FbLoadingBox)
    Vue.component('FbPageLoading', FbPageLoading)
    Vue.component('FbResultErr', FbResultErr)
    Vue.component('FbResultOk', FbResultOk)
    Vue.component('FbSpinner', FbSpinner)
    Vue.component('FbTransitionExpand', FbTransitionExpand)

    // Mixins
    Vue.mixin(ThemeHelpersMixin)

    // Directives
    Vue.directive('clickOutside', ThemeClickOutsideDirective)
    Vue.directive('bodyScrollLock', ThemeBodyScrollLockDirective)
  },

}
