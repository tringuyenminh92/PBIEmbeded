using System;
using System.IO;
using System.Text;
using log4net.Core;
using log4net.Layout;
using log4net.Util;

namespace PBI_TokenService.Helpers
{
    public class CsvPatternLayout : PatternLayout
    {
        public override void ActivateOptions()
        {
            // register custom pattern tokens
            AddConverter("newfield", typeof(NewFieldConverter));
            AddConverter("endrow", typeof(EndRowConverter));
            base.ActivateOptions();
        }

        public override void Format(TextWriter writer, LoggingEvent loggingEvent)
        {
            try
            {
                var ctw = new CsvTextWriter(writer);
                // write the starting quote for the first field
                ctw.WriteQuote();
                base.Format(ctw, loggingEvent);
            }
            catch (Exception)
            {
                return;
            }

        }
    }

    public class NewFieldConverter : PatternConverter
    {
        protected override void Convert(TextWriter writer, object state)
        {
            try
            {
                var ctw = writer as CsvTextWriter;
                // write the ending quote for the previous field
                if (ctw != null)
                    ctw.WriteQuote();
                writer.Write(',');
                // write the starting quote for the next field
                if (ctw != null)
                    ctw.WriteQuote();
            }
            catch
            {
            }

        }
    }

    public class EndRowConverter : PatternConverter
    {
        protected override void Convert(TextWriter writer, object state)
        {
            try
            {
                var ctw = writer as CsvTextWriter;
                // write the ending quote for the last field
                if (ctw != null)
                    ctw.WriteQuote();
                writer.WriteLine();
            }
            catch
            {
            }

        }
    }

    public class CsvTextWriter : TextWriter
    {
        private readonly TextWriter _textWriter;

        public CsvTextWriter(TextWriter textWriter)
        {
            _textWriter = textWriter;
        }

        public override Encoding Encoding
        {
            get { return _textWriter.Encoding; }
        }

        public override void Write(char value)
        {
            try
            {
                _textWriter.Write(value);
                // double all quotes
                if (value == '"')
                    _textWriter.Write(value);
            }
            catch
            {
            }

        }

        public void WriteQuote()
        {
            try
            {
                // write a literal (unescaped) quote
                _textWriter.Write('"');
            }
            catch
            {
            }

        }
    }
}
