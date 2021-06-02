const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question(`What's your name? Nicknames are also acceptable:)`, (answer) => {
  profile.push(`Hi, I'm ${answer}`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    profile.push(`One of my favorite activieties is ${answer}`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.push(`I listen to ${answer} while doing it`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        profile.push(`${answer} is my favourit meal.`);
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          profile.push(`Usually, I'd like to have ${answer} for the meal`);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.push(`In terms of sports, I love ${answer}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.push(`Believe or not, I can ${answer}. It's my superpower!`);
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});