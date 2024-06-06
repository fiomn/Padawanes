using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Padawanes.Controllers
{
    public class MainController : Controller
    {
        // GET: MainController
        public ActionResult Index()
        {
            return View();
        }
    }
}
