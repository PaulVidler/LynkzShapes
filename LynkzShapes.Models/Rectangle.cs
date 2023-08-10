namespace LynkzShapes.LynkzShapes.Models
{
    public class Rectangle : IShape
    {
        private double _height;
        private double _width;

        public Rectangle(double width, double height)
        {
            _height = height;
            _width = width;
        }

        public string GetShapeType()
        {
            return "Rectangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
            {
                { "Height", _height },
                { "Width", _width }
            };
        }
    }

}
