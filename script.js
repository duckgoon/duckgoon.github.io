// Sample data (could come from an API)
const siteData = {
  title: "My JavaScript Website",
  nav: ["Projects", "Programming Blog", "BA English Portfolio",  "Pictures worth a thousand words", "Research Articles", "Terms", "Privacy"],
  content: {
    Projects: 
      {
      "<h1>Here are some of our projects...</h1>"
      "<h2>Java Projects</h2>",
      "<h2>C++ Projects</h2>",
      "<h2>Embedded Device Projects</h2>",
      "<h2>Research Projects and Articles</h2>",
      "<h2>Mobile App Development</h2>",
      "<h2>Full Stack Services Projects</h2>"
  }
    ,
    Programming_Blog: "My daily dose of software lectures",
    BA_English_Portfolio: "Writing everyday - poems, prose, play, journal, arts.",
    Pictures: "Photos taken by me",
    Research_Articles: "Condoning daily research habit.",
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
