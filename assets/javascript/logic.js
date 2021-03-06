$(document).ready();

function showNewNote(list) {
  // Add new note div
  $("newNoteDiv").empty();
  
  for (let i = 0; i < list.length; i++) {

    let note = $('<p class="wrap fine-font new-note border-left shadow-sm">');
    note.text(list[i]);
    let closeNote = $('<button class="btn btn-primary white-background text-theme outline rounded-pill delete">');
    closeNote.attr("new-note", i);
    closeNote.text("X");
    note = note.prepend(closeNote);
    $("#newNoteDiv").append(note);
  }
}

$("#addNote").on("click", function(event){

    let newNote = $("#userTextInput").val().trim();
      if (!newNote) {
        alert("Please type something first!")
      } else {
        list.push(newNote);
        localStorage.setItem("note-added", JSON.stringify(list));
        $("#userTextInput").val("");
      }
});

// When the delete button is clicked
$(document).on("click", ".delete", function() {

    document.location.reload();
    let noteNumber = $(this).attr("new-note");
    list.splice(noteNumber, 1);
    localStorage.setItem("note-added", JSON.stringify(list));
});

let list = JSON.parse(localStorage.getItem("note-added"));

if (!Array.isArray(list)) {
    list = []
}

showNewNote(list);

