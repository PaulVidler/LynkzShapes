namespace LynkzShapes.LynkzShapes.Models
{
    public class EquilateralTriangle : IShape
    {
        private double _side;

        public EquilateralTriangle(double side)
        {
            _side = side;
        }

        public string GetShapeType()
        {
            return "Equilateral Triangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
            {
                { "Side", _side }
            };
        }
    }

}
