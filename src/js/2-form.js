`use strict`; // Код у суворому режимі

const feedbackFormEl = document.querySelector(`.js-feedback-form`);

let formData = {
  email: ``,
  message: ``,
};

// Заповнення полів при завантаженні сторінки
const fillFormFields = () => {
  try {
    // if (localStorage.length === 0) {return;}

    const formDataFromLS = JSON.parse(
      localStorage.getItem(`feedback-form-state`)
    );
    if (!formDataFromLS) return;
    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

// Обробка події введення в поля форми
const onFormFieldChange = event => {
  const { target: formFieldEl } = event;
  const fieldValue = formFieldEl.value;
  const fieldName = formFieldEl.name;
  formData[fieldName] = fieldValue.trim();
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
};

// Обробка події сабміту форми
const onFeedbackFormSubmit = event => {
  event.preventDefault();
  const { currentTarget: formEl } = event;
  if (formData.email === `` || formData.message === ``) {
    alert(`Fill please all fields`);
    return;
  }

  console.log(formData);
  formData = { email: '', message: '' }; // Очищуємо об'єкт
  formEl.reset(); // Очищення полів форми
  localStorage.removeItem(`feedback-form-state`); // Видалення даних з локального сховища
};

// Додаємо слухачів подій
feedbackFormEl.addEventListener(`input`, onFormFieldChange);
feedbackFormEl.addEventListener(`submit`, onFeedbackFormSubmit);
