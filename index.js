<<<<<<< HEAD
// =======================
// SEARCH FUNCTIONALITY
// =======================
const Cards = document.getElementsByClassName("Cards");
const response = document.getElementById("Response");
const SearchText = document.getElementById("Search");
const fragment = document.createDocumentFragment();

function rePosition() {
  const SearchPos = SearchText.getBoundingClientRect();
  response.style.top = `${SearchPos.bottom + 10}px`;
  response.style.left = `${SearchPos.left}px`;
}
rePosition();
window.addEventListener("resize", rePosition);

SearchText.addEventListener("input", (event) => {
  response.replaceChildren();
  const textIn = event.target.value.toLowerCase();
  for (let i = 0; i < Cards.length; i++) {
    if (textIn === "") continue;
    const a = Cards[i].firstElementChild.childNodes[3].firstElementChild.firstElementChild.textContent;
    const b = Cards[i].firstElementChild.childNodes[3].firstElementChild.lastElementChild.textContent;
    if (a.toLowerCase().includes(textIn) || b.toLowerCase().includes(textIn)) {
      const duplicate = Cards[i].cloneNode(true);
      fragment.appendChild(duplicate);
    }
  }
  response.appendChild(fragment);
});

// =======================
// AUTHENTICATION
// =======================
function showLogin() {
  document.getElementById("authModal").classList.remove("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}

function showSignup() {
  document.getElementById("authModal").classList.remove("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

function closeModal() {
  document.getElementById("authModal").classList.add("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}

function saveCredentials(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const userData = { name, email, password };
  localStorage.setItem("user_" + email, JSON.stringify(userData));
  localStorage.setItem("loggedInUser", email);
  sessionStorage.setItem("activeSession", "true");

  alert("Signup successful! You are now logged in.");
  closeModal();
  updateUIOnLogin();
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("user_" + email);
  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password === password) {
    localStorage.setItem("loggedInUser", email);
    sessionStorage.setItem("activeSession", "true");
    alert("Login successful. Welcome, " + user.name + "!");
    closeModal();
    updateUIOnLogin();
  } else {
    alert("Incorrect password.");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  sessionStorage.removeItem("activeSession");
  alert("You have been logged out.");
  updateUIOnLogout();
}

// =======================
// TAB ACCESS CONTROL
// =======================
function preventAccess(e) {
  e.preventDefault();
  alert("Please login to access this section.");
}

function disableTabs() {
  const links = document.querySelectorAll(".tab-link");
  links.forEach(link => {
    link.classList.add("disabled");
    link.addEventListener("click", preventAccess);
  });
}

function enableTabs() {
  const links = document.querySelectorAll(".tab-link");
  links.forEach(link => {
    link.classList.remove("disabled");
    link.removeEventListener("click", preventAccess);
  });
}

// =======================
// UI UPDATE HANDLERS
// =======================
function updateUIOnLogin() {
  document.getElementById("loginBtn").classList.add("hidden");
  document.getElementById("signupBtn").classList.add("hidden");
  document.getElementById("logoutBtn").classList.remove("hidden");
  enableTabs();
}

function updateUIOnLogout() {
  document.getElementById("loginBtn").classList.remove("hidden");
  document.getElementById("signupBtn").classList.remove("hidden");
  document.getElementById("logoutBtn").classList.add("hidden");
  disableTabs();
}

// =======================
// INITIAL LOAD HANDLER
// =======================
window.onload = function () {
  // Check for active session first
  const activeSession = sessionStorage.getItem("activeSession");
  const user = localStorage.getItem("loggedInUser");
  
  if (activeSession && user) {
    updateUIOnLogin();
  } else {
    // Clear any stale session data
    sessionStorage.removeItem("activeSession");
    updateUIOnLogout();
  }

  // Add click handlers for all tab links
  document.querySelectorAll('.tab-link').forEach(link => {
    if (link.href !== window.location.href) {
      link.addEventListener('click', function(e) {
        if (!sessionStorage.getItem("activeSession")) {
          e.preventDefault();
          alert("Please login to access this section.");
          showLogin();
        }
      });
    }
  });
};
=======
// =======================
// SEARCH FUNCTIONALITY
// =======================
const Cards = document.getElementsByClassName("Cards");
const response = document.getElementById("Response");
const SearchText = document.getElementById("Search");
const fragment = document.createDocumentFragment();

function rePosition() {
  const SearchPos = SearchText.getBoundingClientRect();
  response.style.top = `${SearchPos.bottom + 10}px`;
  response.style.left = `${SearchPos.left}px`;
}
rePosition();
window.addEventListener("resize", rePosition);

SearchText.addEventListener("input", (event) => {
  response.replaceChildren();
  const textIn = event.target.value.toLowerCase();
  for (let i = 0; i < Cards.length; i++) {
    if (textIn === "") continue;
    const a = Cards[i].firstElementChild.childNodes[3].firstElementChild.firstElementChild.textContent;
    const b = Cards[i].firstElementChild.childNodes[3].firstElementChild.lastElementChild.textContent;
    if (a.toLowerCase().includes(textIn) || b.toLowerCase().includes(textIn)) {
      const duplicate = Cards[i].cloneNode(true);
      fragment.appendChild(duplicate);
    }
  }
  response.appendChild(fragment);
});

// =======================
// AUTHENTICATION
// =======================
function showLogin() {
  document.getElementById("authModal").classList.remove("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}

function showSignup() {
  document.getElementById("authModal").classList.remove("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

function closeModal() {
  document.getElementById("authModal").classList.add("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}

function saveCredentials(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const userData = { name, email, password };
  localStorage.setItem("user_" + email, JSON.stringify(userData));
  localStorage.setItem("loggedInUser", email);
  sessionStorage.setItem("activeSession", "true");

  alert("Signup successful! You are now logged in.");
  closeModal();
  updateUIOnLogin();
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("user_" + email);
  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password === password) {
    localStorage.setItem("loggedInUser", email);
    sessionStorage.setItem("activeSession", "true");
    alert("Login successful. Welcome, " + user.name + "!");
    closeModal();
    updateUIOnLogin();
  } else {
    alert("Incorrect password.");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  sessionStorage.removeItem("activeSession");
  alert("You have been logged out.");
  updateUIOnLogout();
}

// =======================
// TAB ACCESS CONTROL
// =======================
function preventAccess(e) {
  e.preventDefault();
  alert("Please login to access this section.");
}

function disableTabs() {
  const links = document.querySelectorAll(".tab-link");
  links.forEach(link => {
    link.classList.add("disabled");
    link.addEventListener("click", preventAccess);
  });
}

function enableTabs() {
  const links = document.querySelectorAll(".tab-link");
  links.forEach(link => {
    link.classList.remove("disabled");
    link.removeEventListener("click", preventAccess);
  });
}

// =======================
// UI UPDATE HANDLERS
// =======================
function updateUIOnLogin() {
  document.getElementById("loginBtn").classList.add("hidden");
  document.getElementById("signupBtn").classList.add("hidden");
  document.getElementById("logoutBtn").classList.remove("hidden");
  enableTabs();
}

function updateUIOnLogout() {
  document.getElementById("loginBtn").classList.remove("hidden");
  document.getElementById("signupBtn").classList.remove("hidden");
  document.getElementById("logoutBtn").classList.add("hidden");
  disableTabs();
}

// =======================
// INITIAL LOAD HANDLER
// =======================
window.onload = function () {
  // Check for active session first
  const activeSession = sessionStorage.getItem("activeSession");
  const user = localStorage.getItem("loggedInUser");
  
  if (activeSession && user) {
    updateUIOnLogin();
  } else {
    // Clear any stale session data
    sessionStorage.removeItem("activeSession");
    updateUIOnLogout();
  }

  // Add click handlers for all tab links
  document.querySelectorAll('.tab-link').forEach(link => {
    if (link.href !== window.location.href) {
      link.addEventListener('click', function(e) {
        if (!sessionStorage.getItem("activeSession")) {
          e.preventDefault();
          alert("Please login to access this section.");
          showLogin();
        }
      });
    }
  });
};
>>>>>>> df0ffa1 (add new project)
