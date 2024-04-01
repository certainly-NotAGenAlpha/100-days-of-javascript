function checkTriangleType(s1, s2, s3) {
  //equilateral triangle
  if ((s1 == s2) & (s2 == s3) & (s1 == s3)) {
    console.log("The given sides are of an equilateral triangle.");
  }
  //isosceles
  if (s1 == s2 || s2 == s3 || s1 == s3) {
    console.log("The given sides are of an isosceles triangle");
  } else console.log("scalene");
}
checkTriangleType(3, 4, 3);
checkTriangleType(3, 3, 3);
checkTriangleType(3, 4, 5);
