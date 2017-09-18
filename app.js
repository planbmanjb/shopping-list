// top part of the file is for functions and objects definitions;
// add items
function addItem() {
    var tc = $('.js-shopping-list-entry').val();
    //    alert(tc);
    let output = "";

    output += '<li>';
    output += '<span class="shopping-item">' + tc + '</span>';
    output += '<div class="shopping-item-controls">';
    output += '<button class="shopping-item-toggle">';
    output += '<span class="button-label">check</span>';
    output += '</button>';
    output += '<button class="shopping-item-delete">';
    output += '<span class="button-label">delete</span>';
    output += '</button>';
    output += '</div>';
    output += '</li>';

    $(".shopping-list").append(output);
    $('#shopping-list-entry').val('');
}

function checkItem() {
    $(this).parent().parent().toggleClass('shopping-item__checked');
}

// delete items
function removeItem() {
    //    alert("deleteItem");
    $(this).closest('li').remove();
    //        alert("deleteItem");
}

/*on click on the "#js-shopping-list-form button" button activate function called addItem()*/

$(document).ready(function () {
    $('#js-shopping-list-form').submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
        //        alert('tc');
        event.preventDefault();


        addItem();

    });
});

// this is for "checked"
$(document).on('click', '.shopping-item-toggle', checkItem);

// this is for "delete"

$(document).on('click', '.shopping-item-delete', removeItem);
//        alert('delete!');
//        deleteItem();


// **** i see it like this ,
// if click submit then additem, if click check draw line through item, if click on check again
// and current state is checked then uncheck, if click on delete remove item.

//on click on the "shopping-item-toggle" button activate function called checkItem()

// on click on the "shopping-item-delete" button activate function called deleteItem()
