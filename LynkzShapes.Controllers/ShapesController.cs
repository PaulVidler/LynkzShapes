using LynkzShapes.Dtos;
using LynkzShapes.LynkzShapes.Services;
using LynkzShapes.Services;
using Microsoft.AspNetCore.Http;
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
            // draw a square 200 wide
            // draw an heptagon 200 wide
            // draw an octagon 200 wide
            // draw an Pentagon 200 wide
            // draw an Hexagon 200 wide
            // draw an equilateral triangle 200 wide
            // draw a isosceles triangle with a width of 200 and height of 300
            // draw me an oval with a width of 200 and height of 300
            // draw me a rectangle with a width of 200 and height of 300
            // draw me a parallelogram with a width of 200 and height of 300 and skew of 30
            //"draw me a scalene triangle with side A of 200 and side B of 300 and side C of 400"


            // issues here
            // draw me a scalene triangle with sideA of 200 and sideB of 300 and sideC of 400
            // draw an Circle 200 wide - This needs workshopping to account for Radius and Diameter.

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
