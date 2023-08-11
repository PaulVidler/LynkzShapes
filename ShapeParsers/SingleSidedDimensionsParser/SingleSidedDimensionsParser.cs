//using System.Text.RegularExpressions;
//namespace LynkzShapes.ShapeParsers.SingleSidedDimensionsParser
//{
    //public static class SingleSidedDimensionsParser 
    //{
    //    public static Dictionary<string, double> ParseShape(string input)
    //    {
    //        // Regular expression patterns to find numbers followed by various terms for side length
    //        string sidePattern = @"\b(side|wide|width|edge|side length|length of side)\b(?:\s*of)?\s*(\d+(\.\d+)?)";

    //        // Find the first match for any of the side length patterns in the input string
    //        var sideMatch = Regex.Match(input, sidePattern, RegexOptions.IgnoreCase).ToString;

    //        return new Dictionary<string, double>
    //        {
    //            { "SideLength", Convert.ToDouble(sideMatch) }
    //        };
    //    }
    //}
    //    public static class SingleSidedDimensionsParser
    //    {
    //        public static Dictionary<string, double> ParseShape(string input)
    //        {
    //            // Regular expression patterns to find numbers followed by various terms for side length
    //            string sidePattern = @"\b(side|wide|width|edge|side length|length of side)\b(?:\s*of)?\s*(\d+(\.\d+)?)";

    //            // Find the first match for any of the side length patterns in the input string
    //            var sideMatch = Regex.Match(input, sidePattern, RegexOptions.IgnoreCase);

    //            if (sideMatch.Success)
    //            {
    //                double sideLength;
    //                if (double.TryParse(sideMatch.Groups[2].Value, out sideLength))
    //                {
    //                    return new Dictionary<string, double>
    //                {
    //                    { "SideLength", 100 }
    //                };
    //                }
    //            }

    //            return null; // Handle the case where no match was found or parsing failed
    //        }
    //    }

    //}
    using System.Text.RegularExpressions;
    namespace LynkzShapes.ShapeParsers.SingleSidedDimensionsParser
    {
        public static class SingleSidedDimensionsParser
        {
            public static Dictionary<string, double> ParseShape(string input)
            {
                // Regular expression patterns to find numbers followed by various terms for side length
                string sidePattern = @"\b(side|wide|width|edge|side length|length of side)\b(?:\s*of)?\s*(\d+(\.\d+)?)";

                Match sideMatch = Regex.Match(input, sidePattern, RegexOptions.IgnoreCase);


                if (sideMatch.Success && double.TryParse(sideMatch.Groups[2].Value, out double sideLength))
                {
                    return new Dictionary<string, double>
                    {
                        { "SideLength", sideLength }
                    };
                }

                return null;
            }
        }
    }
