namespace LynkzShapes.LynkzShapes.Models
{
    public class Circle : IShape
    {
        private double radius;
        public Circle(double radius)
        {
            this.radius = radius;
        }

        public string GetShapeType()
        {
            return "Circle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
        {
            { "Radius", radius }
        };
        }
    }
}
