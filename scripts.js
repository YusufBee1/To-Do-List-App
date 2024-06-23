$(document).ready(function () {
    function attachListeners(li) {
      li.on("dblclick", function () {
        $(this).toggleClass("strike");
      });
  
      let crossOutButton = $("<button>X</button>");
      li.append(crossOutButton);
  
      crossOutButton.on("click", function () {
        li.remove();
      });
    }
  
    function newItem() {
      let inputValue = $("#input").val();
      if (inputValue === "") {
        alert("You must write something!");
      } else {
        let listItem = $("<li></li>").text(inputValue);
        $("#list").append(listItem);
        attachListeners(listItem);
      }
      $("#input").val("");
    }
  
    // Attach newItem function to the "add" button
    $("#add").on("click", newItem);
  
    // Add new item when the "enter" key is pressed
    $("#input").on("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        newItem();
      }
    });
  
    $("#list li").each(function () {
      attachListeners($(this));
    });
  
    $("#list").sortable();
  });
