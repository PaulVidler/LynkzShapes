namespace LynkzShapes.LynkzShapes.Models
{
    public class EquilateralTriangle : IShape
    {
        private double side;

        public EquilateralTriangle(double side)
        {
            this.side = side;
        }

        public string GetShapeType()
        {
            return "Equilateral Triangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
        {
            { "Side", side }
        };
        }
    }

}
