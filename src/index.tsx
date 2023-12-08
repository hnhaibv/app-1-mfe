import("./bootstrap").then(({ mount }) => {
  const localRoot = document.getElementById("lms-author-app");

  mount({
    mountPoint: localRoot!,
    routingStrategy: "browser",
  });
});

export {};
