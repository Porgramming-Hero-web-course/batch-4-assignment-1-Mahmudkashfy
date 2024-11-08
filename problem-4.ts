{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    throw new Error("Unknown shape");
  }

  const circle: Circle = { shape: "circle", radius: 5 };
  const rectangle: Rectangle = { shape: "rectangle", width: 4, height: 6 };

  console.log(calculateShapeArea(circle));
  console.log(calculateShapeArea(rectangle));
  //
}
