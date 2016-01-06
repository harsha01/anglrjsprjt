using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace AJExamples.Controllers
{
    public class EmployeeController : ApiController
    {
        [HttpGet]
        public async Task<IHttpActionResult> Employees()
        {
            HRSoftEntities hr = new HRSoftEntities();
            List<Employee> results = new List<Employee>();

            await Task.Run(() =>
            {
                results = hr.Employees.ToList();
            });
            return Ok(results);
        }

        public async Task<IHttpActionResult> AddEmployee(Employee emp)
        {
            HRSoftEntities hr = new HRSoftEntities();
            List<Employee> results = new List<Employee>();

            await Task.Run(() =>
            {
                hr.Employees.Add(emp);
                hr.SaveChanges();
                results = hr.Employees.ToList();
            });
            return Ok(results);
        }

    }
}
