import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";

export const noteService = {
  query,
  changeBgcColor,
  addNote,
  editNote,
  markTodoDone,
  deleteNote,
  pinNoteToggle,
  duplicateNote,
  addEmailToNotes,
};

const NOTES_KEY = "notedDB";
let gNotes = [];

const preMade = [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby!",
    },
    style: {
      backgroundColor: "#ffffff",
    },
  },
  {
    id: "n102",
    type: "note-img",
    isPinned: false,
    info: {
      url: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      txt: "Bobi and Me",
    },
    style: {
      backgroundColor: "#ffffff",
    },
  },
  {
    id: "n103",
    type: "note-todos",
    info: {
      txt: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: "#ffffff",
    },
  },
  {
    id: "n104",
    type: "note-vid",
    isPinned: true,
    info: {
      txt: "Youtube",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    style: {
      backgroundColor: "#ffffff",
    },
  },
];

function query(filterBy) {
  let notes = _loadFromStorage();
  if (!notes) {
    return (notes = _createNotes().then((res) => {
      gNotes = res;
      _saveToStorage();
      return Promise.resolve(res);
    }));
  }
  gNotes = notes;
  if (filterBy) {
    const filterdNotes = notes.filter((note) => {
      return (
        (note.type === filterBy.type || filterBy.type === "") &
        note.info.txt.toLowerCase().includes(filterBy.search.toLowerCase())
      );
    });
    notes = filterdNotes;
  }
  return Promise.resolve(notes);
}

function addEmailToNotes(subject, body, to) {
  gNotes = _loadFromStorage();
  const newNote = {
    id: utilService.makeId(),
    type: "note-email",
    isPinned: false,
    info: {
      txt: subject,
      body,
      to,
    },
    style: {
      backgroundColor: "#ffffff",
    },
  };
  gNotes.push(newNote);
  _saveToStorage();
  return Promise.resolve(newNote);
}

function duplicateNote(noteId) {
  const note = gNotes.filter((note) => note.id === noteId);
  const newNote = {
    id: utilService.makeId(),
    type: note[0].type,
    isPinned: note[0].isPinned,
    info: note[0].info,
    style: note[0].style,
  };
  gNotes.push(newNote);
  _saveToStorage();
}

function pinNoteToggle(noteId) {
  const noteIdx = gNotes.findIndex((note) => note.id === noteId);
  gNotes[noteIdx].isPinned = gNotes[noteIdx].isPinned ? false : true;
  _saveToStorage();
}

function deleteNote(noteId) {
  let noteIdx = gNotes.findIndex((note) => note.id === noteId);
  gNotes.splice(noteIdx, 1);
  _saveToStorage();
}

function markTodoDone(noteId, todoItemIdx) {
  const noteIdx = gNotes.findIndex((note) => note.id === noteId);
  gNotes[noteIdx].info.todos[todoItemIdx].doneAt = Date.now();
  return gNotes[noteIdx];
}

function editNote(noteId, values) {
  let noteIdx = gNotes.findIndex((note) => note.id === noteId);
  if (gNotes[noteIdx].type === "note-txt") {
    gNotes[noteIdx].info.txt = values.txt;
    _saveToStorage();
    return gNotes[noteIdx];
  }
  if (gNotes[noteIdx].type === "note-img") {
    gNotes[noteIdx].info.txt = values.title
      ? values.title
      : gNotes[noteIdx].info.txt;
    gNotes[noteIdx].info.url = values.url
      ? values.url
      : gNotes[noteIdx].info.url;
    _saveToStorage();
    return gNotes[noteIdx];
  }
  if ((gNotes[noteIdx].type === "note-todos") & (values.todo !== null)) {
    gNotes[noteIdx].info.todos.push({ txt: values.todo, doneAt: null });
    _saveToStorage();
    return gNotes[noteIdx];
  }
  if ((gNotes[noteIdx].type === "note-vid") & (values.inputUrl !== null)) {
    gNotes[
      noteIdx
    ].info.url = `https://www.youtube.com/embed/${_getYoutubedEmbed(
      values.inputUrl
    )}`;
    _saveToStorage();
    return gNotes[noteIdx];
  }
  if (
    (gNotes[noteIdx].type === "note-email") &
    (values.subject !== null || values.body !== null)
  ) {
    gNotes[noteIdx].info.txt = values.subject
      ? values.subject
      : gNotes[noteIdx].info.txt;
    gNotes[noteIdx].info.body = values.body
      ? values.body
      : gNotes[noteIdx].info.body;
    _saveToStorage();
    return gNotes[noteIdx];
  }
}

function addNote(primaryValue, noteType) {
  return _createNote(primaryValue, noteType).then((res) => {
    gNotes.push(res);
    _saveToStorage();
    return res;
  });
}

function changeBgcColor(noteId, value) {
  const noteIdx = gNotes.findIndex((note) => {
    if (note.id === noteId) return true;
  });
  gNotes[noteIdx] = { ...gNotes[noteIdx], style: { backgroundColor: value } };
  _saveToStorage();
  return Promise.resolve(gNotes[noteIdx]);
}

function _createNote(primaryValue, noteType) {
  switch (noteType) {
    case "txt":
      return Promise.resolve({
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: {
          txt: primaryValue,
        },
        style: {
          backgroundColor: "##ffffff",
        },
      });
    case "img":
      return Promise.resolve({
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
          url: primaryValue,
          txt: "Image",
        },
        style: {
          backgroundColor: "##ffffff",
        },
      });
    case "todo":
      return Promise.resolve({
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
          txt: primaryValue,
          todos: [],
        },
        style: {
          backgroundColor: "##ffffff",
        },
      });
    case "vid":
      return Promise.resolve({
        id: utilService.makeId(),
        isPinned: false,
        type: "note-vid",
        info: {
          txt: "Youtube",
          url: `https://www.youtube.com/embed/${_getYoutubedEmbed(
            primaryValue
          )}`,
        },
        style: {
          backgroundColor: "##ffffff",
        },
      });
  }
}

function _getYoutubedEmbed(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

function _createNotes() {
  return Promise.resolve(preMade);
}

function _saveToStorage(notes = gNotes) {
  storageService.saveToStorage(NOTES_KEY, notes);
}

function _loadFromStorage() {
  return storageService.loadFromStorage(NOTES_KEY);
}
