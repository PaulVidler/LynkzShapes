using LynkzShapes.LynkzShapes.Models;

namespace LynkzShapes.Factories
{
    public interface IShapeFactory
    {
        IShape CreateShape(string shapeDescription);
    }
}
