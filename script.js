const userInput = document.getElementById('text-input');
const checkPalindrome = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkForPalindrome = (input) => {
  const initialInput = input;

  if (input === '') {
    alert('Please input a value');
    return;
  }

  //clear the children
  result.replaceChildren();

  const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let message = `<strong>${initialInput}</strong> ${
    lowerCaseString === [...lowerCaseString].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const resultParagraph = document.createElement('p');
  resultParagraph.className = 'user-input';
  resultParagraph.innerHTML = message;
  result.appendChild(resultParagraph);

  result.classList.remove('hidden');
};

checkPalindrome.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
