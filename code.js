// Variable to control relays state
let option = 0;

// Function to update status
updateStatus = () => {
  // Update LEDs: 0: LED1(RED)-ON / {1,2,3}: LED2(GREEN)-ON
  LED1.write((option == 0));
  LED2.write((option != 0));
  
  digitalWrite(A5, ((option == 1 || option == 3) ? 1 : 0));
  digitalWrite(A6, ((option == 2 || option == 3) ? 1 : 0));
}

// Function to update options when BTN1 is pressed
setOption = () => {
  option = (option < 3) ? (option + 1) : 0;
  updateStatus();
}

// Initialization Function
initialize = () => {
  setWatch(setOption, BTN1, {repeat:true, edge:"rising"});
  
  updateStatus();
}

// Run Initialization
initialize();