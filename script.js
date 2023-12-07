// public/script.js

async function generateCode() {
  const descriptionInput = document.getElementById('description');
  const generatedCodeDiv = document.getElementById('generated-code');

  const description = descriptionInput.value;

  if (!description) {
    alert('Please provide a description.');
    return;
  }

  try {
    const response = await fetch('/generate-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    const data = await response.json();

    if (response.ok) {
      generatedCodeDiv.innerText = `Generated Code:\n${data.code}`;
    } else {
      generatedCodeDiv.innerText = 'Error generating code';
    }
  } catch (error) {
    console.error(error);
    generatedCodeDiv.innerText = 'An error occurred';
  }
}
