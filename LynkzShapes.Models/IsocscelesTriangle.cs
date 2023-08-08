namespace LynkzShapes.LynkzShapes.Models
{
    public class IsoscelesTriangle : IShape
    {
        private double baseLength;
        private double height;

        public IsoscelesTriangle(double baseLength, double height)
        {
            this.baseLength = baseLength;
            this.height = height;
        }

        public string GetShapeType()
        {
            return "Isosceles Triangle";
        }

        public IDictionary<string, double> GetDimensions()
        {
            return new Dictionary<string, double>
        {
            { "Base Length", baseLength },
            { "Height", height }
        };
        }
    }

}
