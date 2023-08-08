namespace LynkzShapes.LynkzShapes.Models
{
    public class ScaleneTriangle : IShape
    {
        private double sideA;
        private double sideB;
        private double sideC;

        public ScaleneTriangle(double sideA, double sideB, double sideC)
        {
            this.sideA = sideA;
            this.sideB = sideB;
            this.sideC = sideC;
        }

        public string GetShapeType()
        {
            return "Scalene Triangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
        {
            { "Side A", sideA },
            { "Side B", sideB },
            { "Side C", sideC }
        };
        }
    }

}
