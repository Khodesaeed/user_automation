import {
  bindable,
  bindingMode
} from 'aurelia-framework';

export class MenuHeader {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) gitlabForm;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) kerioForm;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) rocketForm;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) adminForm;
  constructor() {
    this.cliked = '';
  }
  showRocketForm() {
    this.rocketForm = !this.rocketForm;
    this.kerioForm = false;
    this.gitlabForm = false;
    this.adminForm = false;
  }
  showGitlabForm() {
    this.rocketForm = false;
    this.kerioForm = false;
    this.gitlabForm = !this.gitlabForm;
    this.adminForm = false;
  }

  showKerioForm() {
    this.rocketForm = false;
    this.kerioForm = !this.kerioForm;
    this.gitlabForm = false;
    this.adminForm = false;
  }
}
