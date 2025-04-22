const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>Welcome to the DOM Manipulation Example</h1>
    <p>Added a new paragraph for testing</p>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
`;
main.appendChild(section)