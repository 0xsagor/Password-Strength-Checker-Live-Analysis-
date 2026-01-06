function check() {
  const p = password.value;
  let score = 0;

  const rules = {
    len: p.length >= 8,
    upper: /[A-Z]/.test(p),
    num: /[0-9]/.test(p),
    sym: /[^A-Za-z0-9]/.test(p)
  };

  Object.keys(rules).forEach(id => {
    document.getElementById(id).style.color = rules[id] ? "green" : "gray";
    if (rules[id]) score++;
  });

  bar.style.width = (score / 4) * 100 + "%";

  if (score <= 1) {
    bar.style.background = "red";
    label.innerText = "Weak";
  } else if (score === 2 || score === 3) {
    bar.style.background = "orange";
    label.innerText = "Medium";
  } else {
    bar.style.background = "green";
    label.innerText = "Strong";
  }
}
