namespace LynkzShapes.LynkzShapes.Models
{
    public class Square : IShape
    {
        private double side;

        public Square(double side)
        {
            this.side = side;
        }

        public string GetShapeType()
        {
            return "Square";
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
