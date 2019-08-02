console.log("hello world!");

// // Text box
// // Add note button

function showNewNote(list) {
  // Add new note div
  $("newNoteDiv").empty();
  
  for (let i = 0; i < list.length; i++) {

    let note = $('<p>');
    note.text(list[i]);

    let closeNote = $("<button>");
    closeNote.attr("new-note", i);
    closeNote.addClass("delete");
    closeNote.text("X");

    note = note.prepend(closeNote);
    $("#newNoteDiv").append(note);
  }
}

$("#addNote").on("click", function(event){
    event.preventDefault();

    let newNote = $("#userTextInput").val().trim();
    list.push(newNote);

    showNewNote(list);

    localStorage.setItem("note-added", JSON.stringify(list));

    $("#userTextInput").val("");
});

$(document).on("click", ".delete", function() {

    let noteNumber = $(this).attr("new-note");
});

