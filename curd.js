async function dataShow() {
 let mytable = `
 <table border="1px" width="600px" align="center">
 <tr bgcolor="yellow">
 <th>ID</th>
 <th>Eployee no</th>
 <th>Employee Name</th>
 <th>Salary</th>
 <th>City</th>
 </tr>
 `;

 let url = "http://localhost:3000/employee";
 let myobj = await fatch(url);
 console.log(myobj);

 mydata.map ((key) => {
    mytable += `
    <tr>
    <td>${key.id}</td>
    <td>${key.employee}</td>
    <td>${key.salary}</td>
    <td>${key.city}</td>
    </tr>
    `;
 });

 mytable =+ `</table>`;
 document.getElementById("demo").innerHTML = mytable;
}
dataShow();