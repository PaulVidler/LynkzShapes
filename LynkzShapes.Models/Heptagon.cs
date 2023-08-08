namespace LynkzShapes.LynkzShapes.Models
{
    public class Heptagon : IShape
    {
        private double side;

        public Heptagon(double side)
        {
            this.side = side;
        }

        public string GetShapeType()
        {
            return "Heptagon";
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
