/*=========== hide not necessary content ===========================================*/
$("#homeContent").css("display","block");
$("#customerContent").css("display","none");
$("#itemContent").css("display","none");
$("#orderContent").css("display","none");

/*================= giving click event to relevant btn to relevant page ============*/
$("#linkHome").click(function () {
    $("#homeContent").css("display","block");
    $("#customerContent").css("display","none");
    $("#itemContent").css("display","none");
    $("#orderContent").css("display","none");
});

$("#linkCustomer").click(function () {
    $("#homeContent").css("display","none");
    $("#customerContent").css("display","block");
    $("#itemContent").css("display","none");
    $("#orderContent").css("display","none");
});

$("#linkItem").click(function () {
    $("#homeContent").css("display","none");
    $("#customerContent").css("display","none");
    $("#itemContent").css("display","block");
    $("#orderContent").css("display","none");
});

$("#linkOrder").click(function () {
    $("#homeContent").css("display","none");
    $("#customerContent").css("display","none");
    $("#itemContent").css("display","none");
    $("#orderContent").css("display","block");
});

/*====================== Add customer process ==============*/

/*select the button*/
$("#btnSave").click(function () {
  /*gather customer info*/
    /*set variables for each info row*/
    let customerId = $("#txtCusId").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    console.log(customerId,customerName,customerAddress,customerSalary);
    console.log(typeof customerId,typeof customerName,typeof customerAddress,typeof customerSalary);


/*add info  to table*/
   let row = ` <tr><td>${customerId}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerSalary}</td></tr>`;
   /* console.log(row);*/


    $("#customerTable").append(row);

    $("#customerTable>tr").click(function () {
        console.log(this);
    });



});
  