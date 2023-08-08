using System.Text.RegularExpressions;

namespace LynkzShapes.ShapeParsers.ComplexShapes
{
    public class OvalDimensionsParser
    {
        public static Dictionary<string, double> ParseShape(string input)
        {

            // Regular expressions to match different patterns of height and width
            string heightPattern = @"\b(height|semi-minor axis|semi-minor|minor|semi-major axis|semi-major|major|high)\b(?:\s*of)?\s*(\d+\.?\d*)";
            string widthPattern = @"\b(width|semi-minor axis|semi-minor|minor|semi-major axis|semi-major|major|wide)\b(?:\s*of)?\s*(\d+\.?\d*)";

            double finalHeight = 0;
            double finalWidth = 0;

            // Match height
            Match heightMatch = Regex.Match(input, heightPattern, RegexOptions.IgnoreCase);
            if (heightMatch.Success)
            {
                double height = double.Parse(heightMatch.Groups[2].Value);
                if (height > 0)
                {
                    finalHeight = height;
                }
                    
            }

            // Match width
            Match widthMatch = Regex.Match(input, widthPattern, RegexOptions.IgnoreCase);
            if (widthMatch.Success)
            {
                double width = double.Parse(widthMatch.Groups[2].Value);
                if (width > 0)
                {
                    finalWidth = width;
                }
                    
            }

            // return dimensions;
            return new Dictionary<string, double>
            {
                { "Width", finalWidth },
                { "Height", finalHeight }
            };
        }
    }

}
