// Redirect to a given URL
export const redirect = (link: string, delay: number) => {
  if (delay == 0) {
    window.location.href = link;
  } else {
    setTimeout(() => {
      window.location.href = link;
    }, delay);
  }
};
