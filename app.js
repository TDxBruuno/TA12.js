function generatePassword(length) {
  let password = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (length >= 8) {
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    console.log(password);
    return password;
  } else {
    console.log("La contraseña debe tener al menos 8 caracteres.");
  }
}
generatePassword(7); // imprime una contraseña aleatoria de x caracteres, mínimo 8
