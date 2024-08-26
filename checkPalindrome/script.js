function solution(inputString) {
  let reverse = inputString.split('').reverse().join("")
  return inputString == reverse
}
