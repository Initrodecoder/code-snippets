const wrapper = () => {
  let counter = 0;
  const fn = async m => {
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        ++counter;
        resolve(m + " done! " + counter), (counter+1)*1000;
      });
    });
    let result = await promise;
    console.log(result);
  };
  return fn;
};

const wrapped = wrapper();

const a = ["one", "two", "three"];

a.forEach((elm) => {
    wrapped(elm);
});
