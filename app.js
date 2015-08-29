var page = tabris.create("Page", {
    title: "Hello, World!",
    topLevel: true
});

// Create a push button and add it to the page
var button = tabris.create("Button", {
    text: "Native Widgets",
    layoutData: {centerX: 0, top: 100}
}).appendTo(page);

// Create a text view and add it too
var textView = tabris.create("TextView", {
    font: "24px",
    layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

// Change the text view's text when the button is pressed
button.on("select", function() {
    textView.set("text", "Hello pathik");
});





page.open();