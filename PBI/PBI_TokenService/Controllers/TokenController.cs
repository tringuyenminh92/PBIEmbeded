using Microsoft.PowerBI.Api.V1;
using Microsoft.PowerBI.Security;
using Microsoft.Rest;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace PBI_TokenService.Controllers
{
    public class TokenController : ApiController
    {
        string workspaceCollection = ConfigurationManager.AppSettings["pbi_hols:WorkspaceCollectionName"];
        string workspaceCollectionAccessKey = ConfigurationManager.AppSettings["pbi_hols:WorkspaceCollectionAccessKey"];
        string apiUri = ConfigurationManager.AppSettings["pbi_hols:ApiUrl"];
        string workspaceId = ConfigurationManager.AppSettings["pbi_hols:WorkspaceId"];
        string reportId = ConfigurationManager.AppSettings["pbi_hols:ReportId"];


        [HttpGet]
        public IHttpActionResult GenerateReportToken()
        {
            try
            {
                var credentials = new TokenCredentials(workspaceCollectionAccessKey, "AppKey");
                var client = new PowerBIClient(credentials)
                {
                    BaseUri = new Uri(apiUri)
                };
                var embedToken = PowerBIToken.CreateReportEmbedToken(workspaceCollection, workspaceId, reportId,new TimeSpan(3,0,0));
                return Json(embedToken.Generate(workspaceCollectionAccessKey));
            }
            catch (Exception)
            {
                return Json("");
            }
        }
    }
}
