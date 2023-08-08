using System.Text.RegularExpressions;

namespace LynkzShapes.Helpers
{
    public static class ShapeNameParser
    {
        private static (string, string[])[] shapes = new (string, string[])[]
        {
        // can add spelling variations/misspellings here in the object as the second arg.
        ("circle", new string[] { "circle", "circl" }),
        ("square", new string[] { "square", "sqaure" }),
        ("rectangle", new string[] { "rectangle" }),
        ("octagon", new string[] { "octagon", "octogon" }),
        ("isosceles triangle", new string[] { "isosceles triangle", "isosceles", "isoceles" }), 
        ("scalene triangle", new string[] { "scalene triangle", "scalene" }),
        ("parallelogram", new string[] { "parallelogram", "parallellogram" }),
        ("equilateral triangle", new string[] { "equilateral triangle", "equilateral", "equilataral" }),
        ("pentagon", new string[] { "pentagon", "pentegon" }),
        ("hexagon", new string[] { "hexagon", "hexegon" }),
        ("heptagon", new string[] { "heptagon", "heptegon" }),
        ("oval", new string[] { "oval", "ovel" })
        };

        public static string ExtractShape(string sentence)
        {
            string? shapeName = null;

            foreach (var (shape, patterns) in shapes)
            {
                foreach (var pattern in patterns)
                {
                    if (Regex.IsMatch(sentence, pattern, RegexOptions.IgnoreCase))
                    {
                        shapeName = shape;
                        break;
                    }
                }

                if (shapeName != null)
                    break;
            }

            return shapeName;
        }
    }
}
