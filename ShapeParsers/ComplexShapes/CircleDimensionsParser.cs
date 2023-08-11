using System.Text.RegularExpressions;

namespace LynkzShapes.ShapeParsers.ComplexShapes
{
    public class CircleDimensionsParser
    {
        public static Dictionary<string, double> ParseShape(string input)
        {
            string pattern = @"\b(radius|diameter)\s+of\s+(\d+)\b";
            Match match = Regex.Match(input, pattern, RegexOptions.IgnoreCase);

            string widthType;
            double value = 0;

            if (match.Success)
            {
                widthType = match.Groups[1].Value.ToLower();
                value = Convert.ToDouble(match.Groups[2].Value);

                if (widthType == "diameter")
                {
                    value = value / 2;
                }
            }

            return new Dictionary<string, double>
            {
                { "Radius", value }
            };
        }
    }
}
