/**
 * Created by LIUXIONGFEI on 2017/6/1.
 */
import {Validator} from 'vee-validate'
const dictionary = {
  en: {
    messages: {
      required: () => 'no null'
    }
  },
  cn: {
    messages: {
      required: () => '不能为空'
    }
  }
};
Validator.updateDictionary(dictionary);

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,//delay代表输入多少ms之后进行校验
  locale: 'cn',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true
};
