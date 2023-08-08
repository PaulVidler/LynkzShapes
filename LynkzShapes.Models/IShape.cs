namespace LynkzShapes.LynkzShapes.Models
{
    public interface IShape
    {
        string GetShapeType();
        IDictionary<string, double> GetDimensions();
    }
}
