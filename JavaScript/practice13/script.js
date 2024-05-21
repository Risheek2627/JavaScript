class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(`Name - ${this.name}`);
    console.log(`Email - ${this.email}`);
  }
}

class Admin extends User {
  constructor(name, email) {
    super();
    this.name = name;
    this.email = email;
  }
  editData() {
    console.log("new information adding");
  }
}

const u1 = new User("Risheek", "rishee2627@gmail.com");
u1.viewData();

const admin1 = new Admin("admin", "admin@gmail.com");
admin1.editData();
