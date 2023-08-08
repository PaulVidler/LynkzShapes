namespace LynkzShapes.LynkzShapes.Services
{
    public class ShapeCreationResult
    {
        public string ShapeType { get; set; }
        public Dictionary<string, double> ShapeDimensions { get; set; }
        public string ErrorMessage { get; set; }
    }
}
