export async function fetchBio(person) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const bios = {
    Alice: "Alice is a software engineer who loves hiking.",
    Bob: "Bob is a designer who enjoys painting.",
    Taylor: "Taylor is a musician who plays guitar.",
  };

  return bios[person] ?? "No bio found.";
}
