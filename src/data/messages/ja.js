import Papa from 'papaparse'
import languageData from './languageData'
const LANGKEY = "ja";

let csvResult = Papa.parse(languageData, {
  header: true,
  fastMode: true,
});

let localizationDataJa = {};
csvResult.data.forEach((translation) => {
  localizationDataJa[translation.id] = translation[LANGKEY];
});

console.log(localizationDataJa);
export default localizationDataJa;

// export const test = {
//   'register': '登録',
//   'selectLanguage': 'Select your language',
//   'battleToLearn': '学ぶための戦い',
//   'battleToLearnDescription': 'Word Cosmos is a real-time PvP English vocabulary game set in the boundless realm of space. Through word duels with fellow learners around the world, you will come across practical English words and gain mastery of them. Play more, learn more! Gather your friends now and start your journey to becoming celestial sages!',
//   'unlockPossibilities': 'ロック解除の可能性',
//   'unlockPossibilitiesDescription': 'Unlock wacky characters and colorful new worlds as you delve further into space! Each planet you step on will introduce you increasingly advanced words, challenging you to expand your vocabulary. An alien golem, a planet of pirates? With infinite possibilities, who knows what you’ll find?',
//   'questionSystem': '質問システム',
//   'questionSystemDescription': 'Each thrilling match consists of three rounds and tests how well you understand a word by quizzing your knowledge of its appropriate synonyms, antonyms, and definition. It’s a race to two and questions will be presented a different way each round - you’ll definitely need to get your swift and smart on to win!',
//   'madeForLearning': '学習のために作られた',
//   'madeForLearningDescription': 'The key to mastery is healthy repetition. Word Cosmos is designed with a learning technology that automatically notes which words you’ve practiced well and which ones you need to keep encountering. Through this, you expand your vocabulary and retain what you learn as you rise up the ranks. Don’t panic but. . . it’s the new rocket science.',
//   'theCompany': '会社',
//   'theCompanyDescription': 'FreCre, Inc. is a team of young talents who believe that the best way to learn is through play. Can studying be fun? Definitely! We make it possible by building gamified educational apps for iOS and Android.',
//   'whatWeDo': '私達がすること',
//   'whatWeDoDescription': "Life at FreCre can feel like being in university again! Everyone on the team continuously learns through self-study, collaboration, and experiments. We aim to create a workplace that feels like a playground, allowing creatives to explore freely and bring ideas to life. Our differences sometimes gets us in debates, but there's nothing a tasty Japanese cake can't fix.",
//   'theTeam': 'チーム',
//   'theTeamDescription': 'Each thrilling match consists of three rounds and tests how well you understand a word by quizzing your knowledge of its appropriate synonyms, antonyms, and definition. It’s a race to two and questions will be presented a different way each round - you’ll definitely need to get your swift and smart on to win!',
//   'careers': 'Becoming a Freedom Creator',
//   'careersDescription': 'Our team needs more heroes! We are always looking for people who are curious, creative, and eager to learn. If you are looking to expand your skill set and change the world with our team, please introduce yourself.',
//   'contact': 'Contact Us',
//   'contactDescription': 'Each thrilling match consists of three rounds and tests how well you understand a word by quizzing your knowledge of its appropriate synonyms, antonyms, and definition. It’s a race to two and questions will be presented a different way each round - you’ll definitely need to get your swift and smart on to win!',
//   'careerBanner': 'WORK WITH US',
//   'contactBanner': 'TALK TO US'
// };
  