

export class App {

  constructor() {
    this.gitlabForm = false;
    this.kerioForm = false;
    this.rocketForm = false;
    this.adminForm = false;
  }
  showAdminForm() {
    this.adminForm = !this.adminForm;
    this.gitlabForm = false;
    this.rocketForm = false;
    this.kerioForm = false;
  }
}
