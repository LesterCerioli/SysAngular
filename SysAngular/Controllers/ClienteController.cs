using SysAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SysAngular.Controllers
{
    public class ClienteController : Controller
    {
        #region Método para listar clientes
        // GET Cliente/GetCliente
        public JsonResult GetCliente()
        {
            using (var db = new erp_lcEntities())
            {
                List<cliente> listarCliente = db.clientes.ToList();
                return Json(listarCliente, JsonRequestBehavior.AllowGet);

            }
        }
        #endregion
    }
}