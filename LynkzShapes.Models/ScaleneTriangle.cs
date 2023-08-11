namespace LynkzShapes.LynkzShapes.Models
{
    public class ScaleneTriangle : IShape
    {
        private double _sideA;
        private double _sideB;
        private double _sideC;

        public ScaleneTriangle(double sideA, double sideB, double sideC)
        {
            _sideA = sideA;
            _sideB = sideB;
            _sideC = sideC;
        }

        public string GetShapeType()
        {
            return "Scalene Triangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
            {
                { "SideA", _sideA },
                { "SideB", _sideB },
                { "SideC", _sideC }
            };
        }
    }

}
