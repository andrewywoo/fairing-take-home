import { question } from "../constants/questions";

type sessionValues = {
  customerType: string;
  location: string;
  purchased: string[];
};

export function getRelevantQuestionsForUser(
  sessionValues: sessionValues,
  questionList: question[]
): question[] {
  const { customerType, location, purchased } = sessionValues;
  const questionsToAdd: question[] = [];

  // compare rules with input values to generate questions for user.
  questionList.forEach((question, index) => {
    const { rules } = question;
    let shouldAddQuestion = true;

    // iterate through each rule
    for (let key in rules) {
      const ruleValues = rules[key];

      switch (key) {
        case "customerType":
          shouldAddQuestion = ruleValues.includes(customerType);
          break;
        case "location":
          shouldAddQuestion = ruleValues.includes(location);
          break;
        case "purchased":
          for (let val of ruleValues) {
            shouldAddQuestion = purchased.includes(val);
            if (shouldAddQuestion === false) {
              break;
            }
          }
          break;
        default:
          console.log(
            "Something went extremely wrong! Handle this exception via logs."
          );
      }

      // break loop over rules early if rule value is not present
      if (shouldAddQuestion === false) {
        break;
      }
    }

    if (shouldAddQuestion) questionsToAdd.push(question);
  });

  return questionsToAdd;
}
