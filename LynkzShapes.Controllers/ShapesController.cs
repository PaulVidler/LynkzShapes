using LynkzShapes.Dtos;
using LynkzShapes.LynkzShapes.Services;
using LynkzShapes.Services;
using Microsoft.AspNetCore.Mvc;

namespace LynkzShapes.Controllers
{
    [Route("api/shapes")]
    [ApiController]
    public class ShapesController : ControllerBase
    {
        private readonly IShapeService shapeService;

        public ShapesController(IShapeService shapeService)
        {
            this.shapeService = shapeService;
        }

        [HttpPost("create")]
        public ActionResult<ShapeCreationResult> CreateShape([FromBody] ShapeRequest shapeRequest)
        {
            ShapeCreationResult result = shapeService.CreateShapeFromDescription(shapeRequest.ShapeDescription);

            if (result.ShapeType != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result.ErrorMessage);
            }
        }
    }
}
