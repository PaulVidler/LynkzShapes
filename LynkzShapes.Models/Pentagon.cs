namespace LynkzShapes.LynkzShapes.Models
{
    public class Pentagon : IShape
    {
        private double side;

        public Pentagon(double side)
        {
            this.side = side;
        }

        public string GetShapeType()
        {
            return "Pentagon";
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
