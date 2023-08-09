using System.Text.RegularExpressions;
namespace LynkzShapes.ShapeParsers.SingleSidedDimensionsParser
{
    public static class SingleSidedDimensionsParser 
    {
        public static Dictionary<string, double> ParseShape(string input)
        {
            // Regular expression patterns to find numbers followed by various terms for side length
            string sidePattern = @"\b(side|wide|width|edge|side length|length of side)\b(?:\s*of)?\s*(\d+(\.\d+)?)";

            // Find the first match for any of the side length patterns in the input string
            var sideMatch = Regex.Match(input, sidePattern, RegexOptions.IgnoreCase).ToString;

            return new Dictionary<string, double>
            {
                { "SideLength", Convert.ToDouble(sideMatch) }
            };
        }
    }
}
