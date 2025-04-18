// Select input and output elements
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalDisplay = document.getElementById('total');

// Function to calculate and display total cost
function calculateTotal() {
  const cost = parseFloat(costInput.value);
  const liters = parseFloat(litersInput.value);

  // Check for valid input
  if (isNaN(cost) || isNaN(liters)) {
    totalDisplay.textContent = 'Please enter valid numbers.';
    return;
  }

  // Calculate total
  const total = cost * liters;

  // Show result
  totalDisplay.textContent = `Total cost: £${total.toFixed(2)}`;
}

// Event listener for button
calculateBtn.addEventListener('click', calculateTotal);
