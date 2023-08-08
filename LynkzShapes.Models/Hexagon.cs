namespace LynkzShapes.LynkzShapes.Models
{
    public class Hexagon : IShape
    {
        private double _side;

        public Hexagon(double side)
        {
            _side = side;
        }

        public string GetShapeType()
        {
            return "Hexagon";
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
