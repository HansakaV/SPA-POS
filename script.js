let customer_array =[]

const loadCustomerTable = () => {
    $('#customerTableBody').empty()
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr>
        <td>${item.first_name}</td>
        <td>${item.last_name}</td>
        <td>${item.mobile}</td>
        <td>${item.email}</td>
        <td>${item.address}</td>
    </tr>`
        $('#customerTableBody').append(data)

    });
};


$("#add-customer").on("click " ,function (){
   let first_name = $('#firstName').val();
   let last_name = $('#lastName').val();
   let mobile = $('#mobile').val();
   let email = $('#email').val();
   let address = $('#address').val();
   console.log(first_name,last_name,mobile,email,address)



    let id = customer_array.length+1;
     let customer = {
         id: id,
         first_name: first_name,
         last_name: last_name,
         mobile: mobile,
         email: email,
         address: address
    }
    customer_array.push(customer);
    loadCustomerTable()


})

