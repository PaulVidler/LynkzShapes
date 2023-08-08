namespace LynkzShapes.LynkzShapes.Models
{
    public class Square : IShape
    {
        private double _side;

        public Square(double side)
        {
            _side = side;
        }

        public string GetShapeType()
        {
            return "Square";
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
