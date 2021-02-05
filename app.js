const myToDoList = (function () {
  $(document).ready(function () {
    // counter for unique id's and labels
    var counter = 0;

    /* 
    Get the input value, check if it exists,
    If so add the value to the to do list and,
    reset the input value. 
    */
    $(".add-item").click(function () {
      var inputValue = $(".list-input").val();
      if (inputValue) {
        counter += 1;
        $(".todo-list").append(
          '<li><div><input type="checkbox" \
          id="exampleCheck ' +
            counter +
            '" \
          ><label for="exampleCheck \
          ' +
            counter +
            '"></label><span> \
          ' +
            inputValue +
            '</span></div> \
          <span class="delete"> <i \
          class="fas fa-trash"></i></span></li>'
        );
      }
      $(".list-input").val("");
    });

    /* 
    When the delete icon with the class "delete"
    is clicked, delete it's parent element,
    that being the li element, deleting that entry. 
    */
    $(document).on("click", ".delete", function () {
      $(this).parent().remove();
    });
  });
})();
