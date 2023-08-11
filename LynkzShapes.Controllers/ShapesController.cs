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
        private readonly IShapeService _shapeService;

        public ShapesController(IShapeService shapeService)
        {
            _shapeService = shapeService;
        }

        [HttpPost("create")]
        public ActionResult<ShapeCreationResult> CreateShape([FromBody] ShapeRequest shapeRequest)
        {
            ShapeCreationResult result = _shapeService.CreateShapeFromDescription(shapeRequest.ShapeDescription);

            if (result.ShapeType != null)
            {
                return Ok(result);
            }
            else
            {
                
                if(result.ErrorMessage != null)
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
}
