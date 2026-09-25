const cat = document.querySelector('#cat');
const speech = document.querySelector('#speech');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');
const form = document.querySelector('#loginForm');
const message = document.querySelector('#message');
const pupils = document.querySelectorAll('.pupil');

function setCat(state, text) {
  cat.classList.remove('focused', 'shy', 'sad', 'happy');

  if (state) {
    cat.classList.add(state);
  }

  speech.textContent = text;
}

function followInput() {
  const progress = Math.min(email.value.length / 28, 1);
  const x = -7 + progress * 14;

  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(${x}px, 3px)`;
  });
}

email.addEventListener('focus', () => {
  setCat('focused', 'أنا مركّزة معك ✦');
});

email.addEventListener('input', followInput);

email.addEventListener('blur', () => {
  setCat('', 'أهلًا! اكتبي بريدك ✦');
});

password.addEventListener('focus', () => {
  setCat('shy', 'ما أشوف، وعد!');
});

password.addEventListener('blur', () => {
  if (
    !cat.classList.contains('happy') &&
    !cat.classList.contains('sad')
  ) {
    setCat('', 'خصوصيتك محفوظة');
  }
});

togglePassword.addEventListener('click', () => {
  const hidden = password.type === 'password';

  password.type = hidden ? 'text' : 'password';
  togglePassword.textContent = hidden ? 'إخفاء' : 'إظهار';

  togglePassword.setAttribute(
    'aria-label',
    hidden ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'
  );

  setCat(
    hidden ? 'focused' : 'shy',
    hidden ? 'لحظة… بتأكد بس 👀' : 'رجعت ما أشوف!'
  );

  password.focus();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  message.classList.remove('success');

  const validEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  const validPassword = password.value.length >= 6;

  if (!validEmail || !validPassword) {
    setCat('sad', 'فيه شيء صغير نعدّله؟');

    message.textContent = !validEmail
      ? 'تأكدي من كتابة البريد الإلكتروني بشكل صحيح.'
      : 'كلمة المرور يجب أن تكون 6 أحرف على الأقل.';

    setTimeout(() => {
      setCat('', 'نحاول مرة ثانية؟');
    }, 1700);

    return;
  }

  setCat('happy', 'يا أهلًا بعودتك! ♡');

  message.textContent =
    'تم تسجيل الدخول بنجاح.';

  message.classList.add('success');
});

document.addEventListener('pointermove', (event) => {
  if (
    document.activeElement === email ||
    document.activeElement === password
  ) {
    return;
  }

  const rect = cat.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const x = Math.max(
    -6,
    Math.min(6, (event.clientX - centerX) / 45)
  );

  const y = Math.max(
    -4,
    Math.min(5, (event.clientY - centerY) / 55)
  );

  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});