// write your JavaScript here
const openModalBtn = document.getElementById("openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const ratingScale = document.getElementById("ratingScale");

let selectedRating = null;

// Generate 1–10 rating buttons
// Clear existing content in case of reload
ratingScale.innerHTML = "";

// Generate 1–10 rating buttons with labels for 1 and 10
for (let i = 1; i <= 10; i++) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("rating-item");

  const btn = document.createElement("button");
  btn.textContent = i;
  btn.addEventListener("click", () => {
    selectedRating = i;
    document
      .querySelectorAll(".rating-scale button")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });

  wrapper.appendChild(btn);

  // Add labels under 1 and 10
  if (i === 1) {
    const label = document.createElement("small");
    label.textContent = "Not likely";
    wrapper.appendChild(label);
  }

  if (i === 10) {
    const label = document.createElement("small");
    label.textContent = "Most likely";
    wrapper.appendChild(label);
  }

  ratingScale.appendChild(wrapper);
}

// Open Modal
openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

// Close Modal
function closeModalHandler() {
  modalOverlay.classList.add("hidden");
  selectedRating = null;
  document
    .querySelectorAll(".rating-scale button")
    .forEach((b) => b.classList.remove("selected"));
}

closeModal.addEventListener("click", closeModalHandler);
cancelBtn.addEventListener("click", closeModalHandler);

// Submit
submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    alert(`Thank you for rating us a ${selectedRating}/10!`);
  } else {
    alert("Please select a rating before submitting.");
    return;
  }
  closeModalHandler();
});

// Close by clicking outside modal
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModalHandler();
  }
});
