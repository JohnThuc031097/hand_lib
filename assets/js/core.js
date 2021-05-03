export default function html(values, values2) {
  // console.log(first);
  // console.log(strings);
  console.log(values);
  console.log(values2);
  return values.reduce((acc, curr) => {
    return acc.concat(curr, strings.shift());
  }, [first]).join('');
}