function urlify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return (
      '<a style="display:inline-block;" target="_blank" href="' +
      url +
      '">' +
      url +
      "</a>"
    );
  });
}

export default urlify;
