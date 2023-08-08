using global::LynkzShapes.Factories;
using LynkzShapes.LynkzShapes.Models;
using LynkzShapes.LynkzShapes.Services;

namespace LynkzShapes.Services
{

    public interface IShapeService
    {
        ShapeCreationResult CreateShapeFromDescription(string shapeDescription);
    }

    public class ShapeService : IShapeService
    {
        private readonly IShapeFactory shapeFactory;

        public ShapeService(IShapeFactory shapeFactory)
        {
            this.shapeFactory = shapeFactory;
        }

        public ShapeCreationResult CreateShapeFromDescription(string shapeDescription)
        {
            try
            {
                // Pass the shape type and dimensions to factory
                IShape shape = shapeFactory.CreateShape(shapeDescription);

                if (shape == null)
                {
                    return new ShapeCreationResult { ErrorMessage = "There seems to have been an error interpreting your requirement, try using the guide before asking another question" };
                }

                return new ShapeCreationResult {
                    ShapeDimensions = (Dictionary<string, double>)shape.GetDimensions(),
                    ShapeType = shape.GetShapeType()
                };
            }
            catch (Exception ex)
            {
                return new ShapeCreationResult { ErrorMessage = $"Error creating shape: {ex.Message}" };
            }
        }
    }
}
