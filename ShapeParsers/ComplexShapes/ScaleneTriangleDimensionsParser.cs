using System.Text.RegularExpressions;

namespace LynkzShapes.ShapeParsers.ComplexShapes
{
    public class ScaleneTriangleDimensionsParser
    {
        public static Dictionary<string, double> ParseShape(string input)
        {
            // Regular expression pattern to find numbers followed by terms for sides
            string sidePattern = @"\bside\s*[abc]?\s*(?:of)?\s*(\d+(\.\d+)?)";

            // Find the matches for side patterns
            MatchCollection sideMatches = Regex.Matches(input, sidePattern, RegexOptions.IgnoreCase);

            // Initialize sideA, sideB, and sideC with 0
            double sideA = 0;
            double sideB = 0;
            double sideC = 0;

            // Process each match and extract the values
            foreach (Match match in sideMatches)
            {
                string sideKey = match.Value.ToLower();
                double sideValue = double.Parse(match.Groups[1].Value);

                // assign values accordingly
                if (sideKey.Contains("side a"))
                {
                    sideA = sideValue;
                }
                else if (sideKey.Contains("side b"))
                {
                    sideB = sideValue;
                }
                else if (sideKey.Contains("side c"))
                {
                    sideC = sideValue;
                }
            }

            // Return the dictionary containing the parsed dimensions
            return new Dictionary<string, double>
            {
                { "SideA", sideA },
                { "SideB", sideB },
                { "SideC", sideC }
            };
        }

    }
}
