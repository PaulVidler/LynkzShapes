namespace LynkzShapes.LynkzShapes.Models
{
    public class Circle : IShape
    {
        private double _radius;

        public Circle(double radius)
        {
            _radius = radius;
        }

        public string GetShapeType()
        {
            return "Circle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
            {
                { "Radius", _radius }
            };
        }
    }
}
