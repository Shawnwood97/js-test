import Point from "./Point";

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      //* Subtract the center x coordinate from the Point x coordinate, and Sqare it. Store in variable xDiffSq
      const xDiffSq = (Point.x - center.x) ** 2;
      //* Same as above, for y coordinates
      const yDiffSq = (Point.y - center.y) ** 2;

      //* Get Square root of the sum of xDiffSq + yDiffSq.
      //* this is the distance between the center of the circle, and the point.
      const dist = Math.sqrt(xDiffSq + yDiffSq);

      //* If dist is less than or equal to the radius of the circle, return true, otherwise, return false.
      return dist <= radius;
    },
  };
}

//? Definitely had to brush up a little on my math for this, but caught on quickly.
//? considered the following logic when doing this:

//? A circle is made up of a set a points that are exactly x units away from the center, x being the radius.
//? since we have the radius, and the center, all we need to do is find the distance from the center of the circle, to the point
//? to do that I calculate the difference between the Point x coordinate and the center x coordinate and Square it, same for the y's
//? I then add those to values together, and get the square root of the sum, we now have the distance from the center of the circle, to the point.

//? if that distance is less than the value of the radius, it is in the circle, if it's exactly the same as the radius, it is touching the circle at some point(tangential),
//? and if it's greater than the radius, it is outside the circle.
