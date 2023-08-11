namespace LynkzShapes.LynkzShapes.Models
{
    public class IsoscelesTriangle : IShape
    {
        private double _baseLength;
        private double _height;

        public IsoscelesTriangle(double baseLength, double height)
        {
            _baseLength = baseLength;
            _height = height;
        }

        public string GetShapeType()
        {
            return "Isosceles Triangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
            {
                { "BaseLength", _baseLength },
                { "Height", _height }
            };
        }
    }

}
