import { smallDataset as haystack } from "./data.js";

export function search(needle) {
  return new Promise(success => {
    if (needle === "") {
      return success([]);
    }

    const found = haystack.filter(
      item =>
        item.title
          .toLowerCase()
          .replace(", ", " ")
          .match(needle.toLowerCase()) && item
    );

    return setTimeout(() => success(found), 700);
  });
}

export function highlight(toHighlight, fullText) {
  let regex = new RegExp(`(${toHighlight})`, "gi");
  let highlighted = fullText.replace(regex, "<em>$1</em>");
  let sanitizedSpaces = highlighted.split(" ");

  return sanitizedSpaces.join("&nbsp;");
}
