using System.Text.RegularExpressions;

namespace LynkzShapes.ShapeParsers.ComplexShapes
{
    public class RectangleDimensionsParser
    {
        public static Dictionary<string, double> ParseShape(string input)
        {
            // Regular expression patterns to find numbers followed by terms for width and height
            string widthPattern1 = @"\b(width|wide)\b(?:\s*(?:of)?\s*)?(\d+(\.\d+)?)";
            string widthPattern2 = @"\b(\d+(\.\d+)?)\s*(wide|width)\b";
            string heightPattern1 = @"\b(height|high)\b(?:\s*(?:of)?\s*)?(\d+(\.\d+)?)";
            string heightPattern2 = @"\b(\d+(\.\d+)?)\s*(high)\b";

            // Find the matches for both width and height patterns in the input string
            Match widthMatch1 = Regex.Match(input, widthPattern1, RegexOptions.IgnoreCase);
            Match widthMatch2 = Regex.Match(input, widthPattern2, RegexOptions.IgnoreCase);
            Match heightMatch1 = Regex.Match(input, heightPattern1, RegexOptions.IgnoreCase);
            Match heightMatch2 = Regex.Match(input, heightPattern2, RegexOptions.IgnoreCase);

            // Initialize width and height with 0
            double width = 0;
            double height = 0;

            // Check if valid width is found, if yes, extract and store the value as the width
            if (widthMatch1.Success && double.TryParse(widthMatch1.Groups[2].Value, out double parsedWidth1))
            {
                width = parsedWidth1;
            }
            else if (widthMatch2.Success && double.TryParse(widthMatch2.Groups[1].Value, out double parsedWidth2))
            {
                width = parsedWidth2;
            }

            // Check if valid height is found, if yes, extract and store the value as the height
            if (heightMatch1.Success && double.TryParse(heightMatch1.Groups[2].Value, out double parsedHeight1))
            {
                height = parsedHeight1;
            }
            else if (heightMatch2.Success && double.TryParse(heightMatch2.Groups[1].Value, out double parsedHeight2))
            {
                height = parsedHeight2;
            }

            // return (width, height);
            return new Dictionary<string, double>
            {
                { "Width", width },
                { "Height", height }
            };
        }
    }
}
