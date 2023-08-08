namespace LynkzShapes.LynkzShapes.Models
{
    public class Octagon : IShape
    {
        private double _side;

        public Octagon(double side)
        {
            _side = side;
        }

        public string GetShapeType()
        {
            return "Octagon";
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
