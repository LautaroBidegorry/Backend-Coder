class UserManager {
    static #users = [];
  
    create(data) {
      if (data.name && data.photo && data.email) {
        const newUser = {
          id: UserManager.#users.length === 0
            ? 1
            : UserManager.#users[UserManager.#users.length - 1].id + 1,
          name: data.name,
          photo: data.photo,
          email: data.email,
        };
  
        UserManager.#users.push(newUser);
      } else {
        return "no puede haber campos vacios";
      }
    }
  
    read() {
      return UserManager.#users.length > 0 ? UserManager.#users : "No hay usuarios disponibles";
    }
  
    readOne(id) {
      const user = UserManager.#users.find((user) => user.id === Number(id));
  
      return user ? user : "Usuario no encontrado";
    }
  }
  
  const Manager = new UserManager(); 
  Manager.create({name: "Lautaro", photo: "https://picsum.photos/640/360", email: "placeholder@gmail.com"});
console.log(Manager.read());    
  