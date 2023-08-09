using LynkzShapes.Helpers;
using LynkzShapes.LynkzShapes.Models;
using LynkzShapes.ShapeParsers.ComplexShapes;
using LynkzShapes.ShapeParsers.SingleSidedDimensionsParser;

namespace LynkzShapes.Factories
{
    public class ShapeFactory : IShapeFactory
    {
        public IShape CreateShape(string shapeDescription)
        {
            string shapeType = ShapeNameParser.ExtractShape(shapeDescription);

            return CreateShapeInstance(shapeType, shapeDescription);
        }

        private IShape CreateShapeInstance(string shapeType, string shapeDescription)
        {
            switch (shapeType)
            {
                case "equilateral triangle":
                    var equilateralTriangleDimensions = SingleSidedDimensionsParser.ParseShape(shapeDescription);
                    return new EquilateralTriangle(equilateralTriangleDimensions["SideLength"]);
                case "pentagon":
                    var pentagonDimensions = SingleSidedDimensionsParser.ParseShape(shapeDescription);
                    return new Pentagon(pentagonDimensions["SideLength"]);
                case "hexagon":
                    var hexagonDimensions = SingleSidedDimensionsParser.ParseShape(shapeDescription);
                    return new Hexagon(hexagonDimensions["SideLength"]);
                case "heptagon":
                    var heptagonDimensions = SingleSidedDimensionsParser.ParseShape(shapeDescription);
                    return new Heptagon(heptagonDimensions["SideLength"]);
                case "octagon":
                    var octagonDimensions = SingleSidedDimensionsParser.ParseShape(shapeDescription);
                    return new Octagon(octagonDimensions["SideLength"]);
                case "square":
                    var squareDimensions = SingleSidedDimensionsParser.ParseShape(shapeDescription);
                    return new Square(squareDimensions["SideLength"]);
                case "isosceles triangle":
                    var isoscelesTriangleDimensions = IsoscelesTriangleDimensionsParser.ParseShape(shapeDescription);
                    return new IsoscelesTriangle(isoscelesTriangleDimensions["Base Length"], isoscelesTriangleDimensions["Height"]);
                case "oval":
                    var ovalDimensions = OvalDimensionsParser.ParseShape(shapeDescription);
                    return new Oval(ovalDimensions["Width"], ovalDimensions["Height"]);
                case "rectangle":
                    var rectangleDimensions = RectangleDimensionsParser.ParseShape(shapeDescription);
                    return new LynkzShapes.Models.Rectangle(rectangleDimensions["Width"], rectangleDimensions["Height"]);
                case "parallelogram":
                    var parallelogramDimensions = ParallelogramDimensionsParser.ParseShape(shapeDescription);
                    return new Parallelogram(parallelogramDimensions["Width"], parallelogramDimensions["Height"], parallelogramDimensions["Skew"]);
                case "scalene triangle":
                    var scaleneDimensions = ScaleneTriangleDimensionsParser.ParseShape(shapeDescription);
                    return new ScaleneTriangle(scaleneDimensions["SideA"], scaleneDimensions["SideB"], scaleneDimensions["SideC"]);
                case "circle":
                    var circleDimensions = CircleDimensionsParser.ParseShape(shapeDescription);
                    return new Circle(circleDimensions["Radius"]);
                // Add other shapes as needed.
                default:
                    break;
            }

            return null; // Shape type not supported or invalid dimension for the specified shape type.
        }
    }


}
