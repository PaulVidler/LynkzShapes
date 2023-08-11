namespace LynkzShapes.LynkzShapes.Models
{
    public class Oval : IShape
    {
        private double _width;
        private double _height;

        public Oval(double width, double height)
        {
            _width = width;
            _height = height;
        }

        public string GetShapeType()
        {
            return "Oval";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
            {
                { "Width", _width },
                { "Height", _height }
            };
        }
    }

}
