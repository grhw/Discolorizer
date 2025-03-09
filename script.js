const quill = new Quill('#editor', {
    modules: {
        toolbar: false,
    },
    formats: [
        "color",
        "background",
        "bold",
        "underline",
        "italic"
    ]
});

quill.on(Quill.events.TEXT_CHANGE,function(){
    const contents = quill.getContents();
    console.log(JSON.stringify(contents, null, 2));
})

const mapping = {
    "#020223": 1
}

function formatSelected(what,to) {
    const sel = quill.getSelection()
    if (sel) {
        quill.formatText(sel.index,sel.length,what,to)
    }
}

document.quer