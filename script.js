// Sample data (could come from an API)
const siteData = {
  title: "My JavaScript Website",
  nav: ["Projects", "Programming Blog", "BA English Portfolio",  "Pictures worth a thousand words", "Terms", "Privacy"],
  content: {
    Projects: "Here are some of our projects.",
    Programming_Blog: "My daily dose of software lectures",
    BA_English_Portfolio: "Writing everyday - poems, prose, play, journal, arts.",
    Pictures: "Photos taken by me",
    Terms: "No terms, you could send me a message if you intend to copy anything.",
    Privacy: "For educational purposes, this site uses cookies."
  }
};

// Render function
function renderSite(data) {
  const app = document.getElementById("app");

  // Create elements
  const header = document.createElement("h1");
  header.textContent = data.title;

  const nav = document.createElement("nav");
  data.nav.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item;
    btn.onclick = () => renderContent(item);
    nav.appendChild(btn);
  });

  const content = document.createElement("div");
  content.id = "content";
  content.textContent = data.content["Home"];

  // Clear existing and append
  app.innerHTML = "";
  app.appendChild(header);
  app.appendChild(nav);
  app.appendChild(content);
}

// Content update function
function renderContent(page) {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = siteData.content[page];
}

// Call render on load
renderSite(siteData);
