const changeHash = (hash: string) => {
  window.location.hash = `#${hash}`;
};

export default changeHash;
