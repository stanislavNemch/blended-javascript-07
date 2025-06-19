// Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note),

class Notes {
    static Priority = {
        HIGHT: "high",
        MIDDLE: "middle",
        LOW: "low",
    };
    constructor() {
        this.items = [];
    }
    getNotes() {
        return this.items;
    }
    addNote(note) {
        this.items.push(note);
    }
    removeNote(noteText) {
        this.items = this.items.filter((note) => note.text !== noteText);
    }
    updatePriority(noteText, newPriority) {
        const note = this.items.find((note) => note.text === noteText);
        if (note) {
            note.priority = newPriority;
        }
    }
}

//updatePriority(noteText, newPriority);
const note = new Notes();
note.addNote({ text: "Note1", priority: Notes.Priority.LOW });
note.addNote({ text: "Note2", priority: Notes.Priority.LOW });
note.addNote({ text: "Note3", priority: Notes.Priority.HIGHT });
console.log(note.getNotes());

note.updatePriority("Note2", Notes.Priority.MIDDLE);
note.updatePriority("Note3", Notes.Priority.MIDDLE);
console.log(note.getNotes());

note.removeNote("Note1");
note.getNotes();
console.log(note.getNotes());
