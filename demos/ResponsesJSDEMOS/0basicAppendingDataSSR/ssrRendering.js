    // ssrRendering.js
    
    // 1. Get the container element where you want to add the new element.
    const container = document.getElementById('container');

    // 2. The string value you want to set as content.
    const myString = "This is the text content!";
    const myHTMLString = "This is <strong>bold</strong> HTML content!";

    // 3. Create a new HTML element.  You can use any valid HTML tag name.
    const newParagraph = document.createElement('p');
    const newDiv = document.createElement('div');
    const newSpan = document.createElement('span');

    // 4a. Set the inner text of the element (treats content as plain text).
    newParagraph.innerText = myString;

    // 4b. Set the inner HTML of the element (allows HTML tags in the content).
    newDiv.innerHTML = myHTMLString;

    // You can also set innerText on the span
    newSpan.innerText = "Just some text for the span.";

    // 5. Append the newly created element to the container element (or any other existing element).
    container.appendChild(newParagraph);
    container.appendChild(newDiv);
    container.appendChild(newSpan);

    // ---------------------------------------------------------------------
    // You can also create and add elements directly without a container.
    // Be careful where you append if you don't have a specific target.

    const anotherParagraph = document.createElement('p');
    anotherParagraph.innerText = "This paragraph is appended directly to the body.";
    document.body.appendChild(anotherParagraph);