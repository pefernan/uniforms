import { AutoForm } from 'uniforms';

import ValidatedQuickForm from './ValidatedQuickForm';

const Auto = (parent: any): any => {
  class _ extends AutoForm.Auto(parent) {
    static Auto = Auto;
  }

  return _;
};

export default Auto(ValidatedQuickForm);
