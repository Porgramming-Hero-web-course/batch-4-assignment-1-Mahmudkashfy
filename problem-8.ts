{
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }

  const person = { name: "Alice", age: 25, email: "alice@gmail.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
