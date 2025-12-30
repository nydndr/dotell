// Getting input for the day
const journalForm = document.getElementById("journal-form");

journalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  new FormData(journalForm);
});

journalForm.addEventListener("formdata", (event) => {
  const data = event.formData;

  console.log(today);

  const dataObject = { date: [], work: [] };
  ~dataObject.date.push(today.toLocaleDateString());

  for (const value of data.values()) {
    dataObject.work.push(value);
  }

  chrome.storage.local
    .set({
      workJournal: {
        dataObject,
      },
    })
    .then(() => {
      console.log("Ta aqui!");
    });
});

// journalForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   new FormData(journalForm);
// });

// journalForm.addEventListener("formdata", (event) => {
//   const data = event.formData;

//   for (const value of data.values()) {
//     console.log(value);
//   }
// });
