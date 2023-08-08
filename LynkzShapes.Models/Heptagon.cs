namespace LynkzShapes.LynkzShapes.Models
{
    public class Heptagon : IShape
    {
        private double _side;

        public Heptagon(double side)
        {
            _side = side;
        }

        public string GetShapeType()
        {
            return "Heptagon";
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
