import axios from "axios"; // Se importa para poder consumir APIs
const baseURL = 'http://localhost:8080/auth';


// 1- GET: Retorna los usuarios sugun Rol

const UserstByRoleService = async () => {
    const rest = await axios.get(baseURL + '/byRole/Cliente');
    console.log('roleService: ' + rest);
    return rest.data;
}


// 2 - GET: Retorna la cantidad de usuarios registrados en la DB //NO TOCAR
const numberOfUsersService = async () =>{
    const rest = await axios.get(baseURL + '/total' );
    //console.log('totalUsersService: ' + rest);
    return rest.data;
}

// 3- GET: Retorna N° de usuarios por role
const numberOfUserstByRoleService = async () => {
    const rest = await axios.get(baseURL + '/totalByRole/Administrador');
    console.log('N°porRoleService: ' + rest);
    return rest.data;
}

// Funciones Vale

// 4- GET: Retorna usuarios registrados en la BD // Lo estoy usando

const AllUserService = async () => {
    const rest = await axios.get(baseURL + '/findAll');
    console.log('Usuarios registrados en base de datos: ' + rest);
    return rest.data;
}

// 5- GET: Retorna los datos de un usuario usando el ID

const UserByIdService = async (id_user) => {
    const rest = await axios.get(baseURL + '/findUserById/' + id_user);
    console.log('Usuarios registrados en base de datos: ' + rest);
    return rest.data;
}

// 6- GET: Retorna los datos de un usuario usando el Rut

const UserByRutService = async (rut) => {
    const rest = await axios.get(baseURL + '/findUserByRut/' + rut);
    console.log('Usuarios registrados en base de datos: ' + rest);
    return rest.data;
}

// 7- GET: Retorna a los usuarios según role

const UserByRoleService = async (role) => {
    const rest = await axios.get(baseURL + '/byRole/' + role);
    console.log('Usuarios registrados en base de datos: ' + rest);
    return rest.data;
}

// 8 - POST : Registro // Lo voy a usar

const AddUserService = async (clientes) => {
    const rest = await axios.post(baseURL+"/register",clientes)
    console.log(rest);
    return rest.data;
}



export {UserstByRoleService, numberOfUsersService, numberOfUserstByRoleService, AllUserService, UserByIdService, UserByRutService, UserByRoleService, AddUserService};

// Java AuthController

// Endpoint de registro //debe ser el post supongo.
// @PostMapping("/register")
// public ResponseEntity<User> register(@RequestBody UserRegistroDTO userRegistroDTO) {

//     String encryptedPassword = passwordEncoder.encode(userRegistroDTO.getUserPassword()); // Toma la contraseña y la
//                                                                                           // encripta

//     userRegistroDTO.setUserPassword(encryptedPassword); // La contraseña encriptada se setea a userRegistroDTO

//     User usuarioRegistrado = myUserDetailsService.createUser(userRegistroDTO); // Creamos el usuario llamando a
//                                                                                // createUser

//     return new ResponseEntity<>(usuarioRegistrado, HttpStatus.CREATED);
// }

// // PUT: Para editar datos en la BD
// @PutMapping("/update")
// public void updateUser(@RequestBody User user) {
//     myUserDetailsService.updateUser(user);
// }

// // DELETE: Eliminar/Borrar datos de BD
// @DeleteMapping("/delete/{id}")
// public void deleteUser(@PathVariable Integer id) {
//     myUserDetailsService.deleteUser(id);
// }

    
// // GET: Para obtener Usuarios registrados en la BD
// @GetMapping("/findAll")
// public List<User> findAll() {
//     return myUserDetailsService.findAll();
// }


// // GET: Para obtener los datos de un usuario usando el ID
// @GetMapping("/findUserById/{id_user}")
// public List<User> findUserById(@PathVariable Integer id_user) {
//     return myUserDetailsService.findUserById(id_user);
// }

// // GET: Para obtener los datos de un usuario usando el Rut
// @GetMapping("/findUserByRut/{rut}")
// public List<User> findUserByRut(@PathVariable String rut) {
//     return myUserDetailsService.findUserByRut(rut);
// }

// // GET: Para buscar el username y password de un usuario usando el username
// @GetMapping("/findUserByUsername/{username}")
// public UserDetails findUserByUsername(@PathVariable String username){
//     return myUserDetailsService.loadUserByUsername(username);
// }

// // GET: Retorna la cantidad de usuarios registrados en la DB
// @GetMapping("/total")
// public Integer numberOfUsers(){
//     return myUserDetailsService.numberOfUsers();
// }

// // GET: Retorna la cantidad de usuarios por role
// @GetMapping("/totalByRole/{role}")
// public Integer numberOfUserstByRole(@PathVariable String role){
//    return myUserDetailsService.numberOfUserstByRole(role);
// }  

// // GET: Retorna a los usuarios segun su role
// @GetMapping("/byRole/{role}")
// public List<User> UserstByRole(@PathVariable String role){
//     return myUserDetailsService.UserstByRole(role);
// }