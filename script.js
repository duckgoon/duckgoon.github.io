// Sample data (could come from an API)
const siteData = {
  title: "My JavaScript Website",
  nav: ["Home", "About", "Contact", "Projects", "Blog", "Gallery",  "FAQ", "Support", "Terms", "Privacy"],
  content: {
    Home: "Welcome to the home page!",
    About: "We are a team of developers building cool things.",
    Contact: "You can reach us at contact@example.com.",
    Projects: "Here are some of our projects.",
    Blog: "Read our latest blog posts.",
    Gallery: "Check out our gallery of images.",            
    FAQ: "Frequently Asked Questions.",
    Support: "Get support here.",
    Terms: "Terms and conditions.",
    Privacy: "Our privacy policy."  
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
