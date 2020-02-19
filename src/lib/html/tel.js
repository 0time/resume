const tel = phone => {
  const numeric = phone.replace(/[^0-9]/, '');
  const intl = `+1${numeric}`;

  return `<a href="tel:${numeric}">${phone}</a>`;
};

module.exports = tel;
