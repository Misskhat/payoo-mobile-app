function getElement(id){
  return document.getElementById(id)
};

getElement('add-money').addEventListener('click', function(event){
    // from button default function prevent.
    event.preventDefault();

    

    // target the available balance and make it as number;
    let availableBalance = getElement('available-balance').innerText;

    // target the add money input value and make it as number
    const addMoney =  getElement('amount-add').value;
    
    const newAvailableBalance = Number(availableBalance) + Number(addMoney);

    // assign the new balance to available balance;
    availableBalance = newAvailableBalance;

    // change in the dom for user view;
    getElement('available-balance').innerText = availableBalance;

    console.log(newAvailableBalance, availableBalance, addMoney);

    
})
