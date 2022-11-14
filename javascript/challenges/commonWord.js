

const mostCommonWord = (paragraph, banned) => {
  let wordFrequency = {};
  let bannedWords = new Set();
  let mostCommon = '';

  // The RegExp \W matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".

  // the “+” operator in regex is used for identifying repeating characters

  let words = paragraph.split(/\W+/);

  for (let word of banned){
    bannedWords.add(word);
  }

  for(let word of words){
    let lowerCaseWord = word.toLowerCase();

    if(!bannedWords.has(lowerCaseWord)){
      if(wordFrequency[lowerCaseWord] === undefined){
        wordFrequency[lowerCaseWord] = 0;
      }
      wordFrequency[lowerCaseWord]++;

      if(mostCommon === '' || wordFrequency[lowerCaseWord] > wordFrequency[mostCommon]){
        mostCommon = lowerCaseWord;
      }
    }
  }
  return mostCommon;
};

let paragraph = 'The works of the roots of the vines, of the trees, must be destroyed to keep up the price, and this is the saddest, bitterest thing of all. Carloads of oranges dumped on the ground. The people came for miles to take the fruit, but this could not be. How would they buy oranges at twenty cents a dozen if they could drive out and pick them up? And men with hoses squirt kerosene on the oranges, and they are angry at the crime, angry at the people who have come to take the fruit. A million people hungry, needing the fruit- and kerosene sprayed over the golden mountains. And the smell of rot fills the country. Burn coffee for fuel in the ships. Burn corn to keep warm, it makes a hot fire. Dump potatoes in the rivers and place guards along the banks to keep the hungry people from fishing them out. Slaughter the pigs and bury them, and let the putrescence drip down into the earth.There is a crime here that goes beyond denunciation. There is a sorrow here that weeping cannot symbolize. There is a failure here that topples all our success. The fertile earth, the straight tree rows, the sturdy trunks, and the ripe fruit. And children dying of pellagra must die because a profit cannot be taken from an orange. And coroners must fill in the certificate- died of malnutrition- because the food must rot, must be forced to rot. The people come with nets to fish for potatoes in the river, and the guards hold them back; they come in rattling cars to get the dumped oranges, but the kerosene is sprayed. And they stand still and watch the potatoes float by, listen to the screaming pigs being killed in a ditch and covered with quick-lime, watch the mountains of oranges slop down to a putrefying ooze; and in the eyes of the people there is the failure; and in the eyes of the hungry there is a growing wrath. In the souls of the people the grapes of wrath are filling and growing heavy, growing heavy for the vintage.';
let banned = ['if', 'to', 'the', 'a', 'of', 'be', 'are', 'and', 'in', 'is' ];

console.log(mostCommonWord(paragraph, banned));
