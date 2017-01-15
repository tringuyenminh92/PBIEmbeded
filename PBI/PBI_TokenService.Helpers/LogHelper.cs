using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;


namespace SPC.PBI_TokenService.Helpers
{
    public class LogHelper
    {
        public static string ConvertObjectDataToString(dynamic obj)
        {
            try
            {
                return obj == null ? "" : JsonConvert.SerializeObject(obj);
            }
            catch (Exception ex)
            {
                return "Error Converting: " + ex.Message;
            }

        }

        public static string ConvertArrayObjectDataToString(IEnumerable<dynamic> arrObjects)
        {
            try
            {
                return arrObjects == null ? "" : arrObjects.Aggregate("", (current, ob) => (string)(current + ("\n" + ConvertObjectDataToString(ob))));

            }
            catch (Exception ex)
            {
                return "Error Converting" + ex.Message;
            }
        }
    }
}
