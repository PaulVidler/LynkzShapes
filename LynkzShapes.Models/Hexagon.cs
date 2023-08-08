namespace LynkzShapes.LynkzShapes.Models
{
    public class Hexagon : IShape
    {
        private double side;

        public Hexagon(double side)
        {
            this.side = side;
        }

        public string GetShapeType()
        {
            return "Hexagon";
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
