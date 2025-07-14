//Click the icon to open de menu
const menuButton = document.getElementById("menu-icon");
const closeButton = document.getElementById("close-button");
const buttons = [menuButton, closeButton];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    manageMenu();
  });
});

function manageMenu() {
  const logo = document.getElementById("logo-icon");
  const menu = document.getElementById("menu-movile");
  const isDisplayed = menu.classList.contains("hidden");

  menu.classList.toggle("hidden", !isDisplayed);
  logo.classList.toggle("hidden", isDisplayed);
  menuButton.classList.toggle("hidden", isDisplayed);
}

//Faq questions displayed
const faqButtons = Array.from(document.querySelectorAll(".faq-button"));
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    manageAnswer(button);
  });
});

function manageAnswer(button) {
  const p = button.parentElement.nextElementSibling;
  const buttonImage = button.firstElementChild;
  const isShown = p.classList.contains("hidden");

  p.classList.toggle("hidden", !isShown);
  p.setAttribute('aria-expanded', isShown? 'true':'false')
  buttonImage.src = isShown
    ? "/images/icon-arrow-red.svg"
    : "/images/icon-arrow.svg";
}

//Change media icons
const mediaicons = Array.from(document.querySelectorAll("#facebook, #twitter"));
mediaicons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.src = `/images/icon-${icon.id}-red.svg`;
  }),
    icon.addEventListener("mouseleave", () => {
      icon.src = `/images/icon-${icon.id}.svg`;
    });
});

//Validate form
const contactUsButton = document.getElementById("contact-us-button");

contactUsButton.addEventListener("click", () => {
  const input = document.getElementById("email-input");
  const error = document.getElementById("email-error");
  const errorContainer = document.getElementById("error-container");
  const errorImage = document.getElementById("error-image");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmpty = emailPattern.test(input.value);

  error.classList.toggle("hidden", isEmpty);
  errorContainer.classList.toggle("bg-red400", !isEmpty);
  errorImage.classList.toggle("hidden", isEmpty);
});

//Change information into the carrousel
const information = [
  {
    id: "simple-bookmarking",
    title: "Bookmark in one click",
    description:
      " Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "/images/illustration-features-tab-1.svg",
  },
  {
    id: "speedy-searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "/images/illustration-features-tab-2.svg",
  },
  {
    id: "easy-sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at theclick of a button.",
    image: "/images/illustration-features-tab-3.svg",
  },
];

const carrousel = Array.from(
  document.querySelectorAll(
    "#simple-bookmarking, #speedy-searching, #easy-sharing"
  )
);

carrousel.forEach((button) => {
  button.addEventListener("click", () => {
    deleteButtons();
    selectButton(button);
    updateInfo(button)
  });
});

function selectButton(button) {
  button.classList.add("underline");
  button.setAttribute("aria-pressed", "true");
}

function deleteButtons() {
  const previousButton = carrousel.find((button) =>
    button.classList.contains("underline")
  );
  previousButton.classList.remove("underline");
  previousButton.setAttribute("aria-pressed", "false");
}

function updateInfo(button){
    const title=document.getElementById('carrousel-title')
    const description=document.getElementById('carrousel-description')
    const image=document.getElementById('carrousel-image')

    const currentInfo= information.find((info) => info.id===button.id);

    title.textContent=currentInfo.title
    description.textContent=currentInfo.description
    image.src=currentInfo.image
}
