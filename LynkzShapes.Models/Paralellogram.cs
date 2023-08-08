namespace LynkzShapes.LynkzShapes.Models
{
    public class Parallelogram : IShape
    {
        private double _baseLength;
        private double _height;
        private double _skew;

        public Parallelogram(double baseLength, double height, double skew)
        {
            _baseLength = baseLength;
            _height = height;
            _skew = skew;

        }

        public string GetShapeType()
        {
            return "Parallelogram";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
        {
            { "Base Length", _baseLength },
            { "Height", _height },
            { "Skew", _skew }
        };
        }
    }

}
