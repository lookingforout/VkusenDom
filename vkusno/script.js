document.getElementById('addButton').addEventListener('click', function () {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();

    if (itemText !== '') {
        const li = document.createElement('li');
        li.textContent = itemText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('itemList').appendChild(li);

        input.value = '';
    } else {
        alert('You gotta add something');
    }
});