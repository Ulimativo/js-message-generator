// Topic?
// 3 sets of data = parts of the sentence.

const messageComponents = {
  helpverb: ["should", "need to", "must", "have to"],
  verb: ["work", "learn", "relax", "sing", "dance"],
  end: ["more often", "always", "never", "daily", "weekly", "once a year"],
};

function randomizer(items) {
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function message() {
  message =
    "You " +
    randomizer(messageComponents.helpverb) +
    " " +
    randomizer(messageComponents.verb) +
    " " +
    randomizer(messageComponents.end) +
    ".";
  return message;
}

console.log(message());
