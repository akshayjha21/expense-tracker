// document.addEventListener('DOMContentLoaded',()=>{
//     const expenseform=document.getElementById('expense-form');
//     const expensenameinput=document.getElementById('expense-name');
//     const expenseamountinput=document.getElementById('expense-amount');
//     const expenseitems=document.getElementById('expense-list');
//     const totalprice=document.getElementById('total-amount');

//     let expenses=JSON.parse(localStorage.getItem('expenses'))||[];
//     renderexpense();
//     updatetotal();
//     let total=0;

//     expenseform.addEventListener('submit',(e)=>{
//         e.preventDefault();//prevents the default behaviour of javascript from happening 
//         const name=expensenameinput.value.trim();
//         const amount=parseFloat(expenseamountinput.value.trim());

//         if(name!=="" && !isNaN(amount) && amount>0){
//             const newexpense={
//                 id:Date.now(),
//                 name:name,
//                 amount:amount,
//             }
//             expenses.push(newexpense);
//             renderexpense();
//             updatetotal();
//             savetolocal();



//             //clear input
//             expensenameinput.value="";
//             expenseamountinput.value="";
//         }
//     })

//     function renderexpense() {
//         expenseitems.innerHTML="";
//         expenses.forEach((expense)=>{
//             const expenselist=document.createElement('li');
//             expenselist.innerHTML=
//             `${expense.name}-${expense.amount}
//             <button data-id="${expense.id}">Delete</button>`
//             expenseitems.appendChild(expenselist);
//         })
//     }
// function savetolocal() {
//     localStorage.setItem('expenses',JSON.stringify(expenses))
// }

// function calculatetotal(){
//       return expenses.reduce((sum,expense)=>sum+expense.amount,0)

// }
// function updatetotal(){
//     total=calculatetotal();
//     totalprice.textContent=`Total Price: $${total}`;
// }
// expenseitems.addEventListener('click', (e) => {
//     if (e.target.tagName === "BUTTON") {
//         const id = parseInt(e.target.getAttribute('data-id')); 
//         console.log(id) // Get the data-id of the clicked button
//         // Filter out the expense with the matching id
//         expenses = expenses.filter((expense) => expense.id !== id);
//         // Update localStorage and re-render the list
//         savetolocal();
//         renderexpense();
//         updatetotal();
//     }
// })
// }) 

document.addEventListener('DOMContentLoaded', () => {
    const expenseform = document.getElementById('expense-form');
    const expensenameinput = document.getElementById('expense-name');
    const expenseamountinput = document.getElementById('expense-amount');
    const expenseitems = document.getElementById('expense-list');
    const totalprice = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let total = 0; // Declare total here at the beginning
    renderexpense();
    updatetotal();

    expenseform.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expensenameinput.value.trim();
        const amount = parseFloat(expenseamountinput.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newexpense = {
                id: Date.now(),
                name: name,
                amount: amount,
            };
            expenses.push(newexpense);
            renderexpense();
            updatetotal();
            savetolocal();

            expensenameinput.value = "";
            expenseamountinput.value = "";
        }
    });

    function renderexpense() {
        expenseitems.innerHTML = "";
        expenses.forEach((expense) => {
            const expenselist = document.createElement('li');
            expenselist.innerHTML =
                `${expense.name} - $${expense.amount}
                <button data-id="${expense.id}">Delete</button>`;
            expenseitems.appendChild(expenselist);
        });
    }

    function savetolocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function calculatetotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function updatetotal() {
        total = calculatetotal(); // Calculate total here
        totalprice.textContent = `Total Price: $${total.toFixed(2)}`; // Format to two decimal places
    }

    expenseitems.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const id = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter((expense) => expense.id !== id);
            savetolocal();
            renderexpense();
            updatetotal();
        }
    });
});


