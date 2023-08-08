namespace LynkzShapes.LynkzShapes.Models
{
    public class Octagon : IShape
    {
        private double side;

        public Octagon(double side)
        {
            this.side = side;
        }

        public string GetShapeType()
        {
            return "Octagon";
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
