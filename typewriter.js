const sentence = "hello there from lighthouse labs \n";

for (let i = 0; i < sentence.length; i++) {
  
  setTimeout(() => {
    process.stdout.write(sentence[i]);// print the char here
  }, i * 50) // <= 1s delay to make it noticeable. Can dial it down later.

}

