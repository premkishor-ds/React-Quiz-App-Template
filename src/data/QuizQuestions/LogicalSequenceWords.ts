import { Topic } from ".";

//Logical Sequence of Words / Sentence Completion 
export const LogicalSequenceWords: Topic = {
  topic: 'Mathematics',
  level: 'Advanced',
  totalQuestions: 20, // since you listed 20 questions
  totalScore: 200,    // 20 * 10
  totalTime: 1200,    // e.g. 20 mins
  questions: [
    {
      "question": "Arrange the following sentences to form a coherent paragraph: \n1. She opened the window.\n2. The room felt stuffy.\n3. She let in fresh air.\n4. The flowers on the balcony looked beautiful.",
      "choices": [
        "2,1,3,4",
        "1,2,3,4",
        "2,3,1,4",
        "1,3,2,4"
      ],
      "type": "MCQs",
      "correctAnswers": ["2,1,3,4"],
      "score": 10
    },
    {
      "question": "Find the next sentence: 'Rohan was walking in the park. He saw a dog running towards him.'",
      "choices": [
        "He ignored the dog.",
        "He tried to pet the dog.",
        "He ran away.",
        "The dog barked loudly."
      ],
      "type": "MCQs",
      "correctAnswers": ["The dog barked loudly."],
      "score": 10
    },
    {
      "question": "Complete the paragraph: 'First, I woke up early. Then I brushed my teeth. Next, ___.'",
      "choices": [
        "I went to sleep",
        "I had breakfast",
        "I watched TV",
        "I went running"
      ],
      "type": "MCQs",
      "correctAnswers": ["I had breakfast"],
      "score": 10
    },
    {
      "question": "Arrange in correct order: \n1. The fire alarm rang.\n2. People evacuated the building.\n3. Smoke filled the kitchen.\n4. Firefighters arrived.",
      "choices": [
        "3,1,2,4",
        "1,2,3,4",
        "3,4,1,2",
        "2,1,3,4"
      ],
      "type": "MCQs",
      "correctAnswers": ["3,1,2,4"],
      "score": 10
    },
    {
      "question": "Choose the sentence that best follows: 'It started raining heavily.'",
      "choices": [
        "We decided to play outside.",
        "We ran to take shelter.",
        "We continued walking calmly.",
        "We ignored the rain."
      ],
      "type": "MCQs",
      "correctAnswers": ["We ran to take shelter."],
      "score": 10
    },
    {
      "question": "Arrange the steps of planting a seed: \n1. Water the seed.\n2. Sow the seed in soil.\n3. Wait for it to sprout.\n4. Prepare the soil.",
      "choices": [
        "1,2,3,4",
        "4,2,1,3",
        "2,4,1,3",
        "4,1,2,3"
      ],
      "type": "MCQs",
      "correctAnswers": ["4,2,1,3"],
      "score": 10
    },
    {
      "question": "Choose the sentence that logically completes: 'The students were preparing for the annual day. They practiced dances, songs, and skits.'",
      "choices": [
        "Finally, the annual day was canceled.",
        "On the day, the stage was beautifully decorated.",
        "They forgot all the practice.",
        "They ignored the event."
      ],
      "type": "MCQs",
      "correctAnswers": ["On the day, the stage was beautifully decorated."],
      "score": 10
    },
    {
      "question": "Complete the logical sequence: 'I bought flour, sugar, and eggs. Then I ___.'",
      "choices": [
        "mixed the ingredients to bake a cake",
        "ate all the ingredients raw",
        "threw them away",
        "gave them to a friend"
      ],
      "type": "MCQs",
      "correctAnswers": ["mixed the ingredients to bake a cake"],
      "score": 10
    },
    {
      "question": "Arrange the sentences: \n1. The sun rose.\n2. Birds started chirping.\n3. People went to work.\n4. It was morning.",
      "choices": [
        "4,1,2,3",
        "1,4,2,3",
        "4,2,1,3",
        "2,1,4,3"
      ],
      "type": "MCQs",
      "correctAnswers": ["4,1,2,3"],
      "score": 10
    },
    {
      "question": "Choose the next sentence: 'Arun forgot his umbrella at home.'",
      "choices": [
        "He stayed dry.",
        "He got drenched in the rain.",
        "He went to sleep.",
        "He went shopping."
      ],
      "type": "MCQs",
      "correctAnswers": ["He got drenched in the rain."],
      "score": 10
    },
    {
      "question": "Arrange the steps of making tea: \n1. Boil water.\n2. Add sugar and tea leaves.\n3. Pour into cup.\n4. Heat milk.",
      "choices": [
        "1,4,2,3",
        "1,2,4,3",
        "4,1,2,3",
        "2,1,4,3"
      ],
      "type": "MCQs",
      "correctAnswers": ["1,4,2,3"],
      "score": 10
    },
    {
      "question": "Choose the logical continuation: 'Riya studied hard for her exams.'",
      "choices": [
        "She passed with flying colors.",
        "She forgot to study.",
        "She went out to play instead.",
        "She did not attempt the exam."
      ],
      "type": "MCQs",
      "correctAnswers": ["She passed with flying colors."],
      "score": 10
    },
    {
      "question": "Arrange the sentences in order: \n1. The cake was in the oven.\n2. Preheat the oven.\n3. Bake the cake.\n4. Mix the ingredients.",
      "choices": [
        "2,4,1,3",
        "4,2,1,3",
        "2,1,4,3",
        "1,2,3,4"
      ],
      "type": "MCQs",
      "correctAnswers": ["2,4,1,3"],
      "score": 10
    },
    {
      "question": "Complete logically: 'The power went out suddenly.'",
      "choices": [
        "Everyone continued watching TV.",
        "People lit candles.",
        "Nothing happened.",
        "All appliances worked fine."
      ],
      "type": "MCQs",
      "correctAnswers": ["People lit candles."],
      "score": 10
    },
    {
      "question": "Arrange in order: \n1. John wrote a letter.\n2. He sealed the envelope.\n3. He posted it.\n4. He addressed it.",
      "choices": [
        "1,4,2,3",
        "4,1,2,3",
        "1,2,4,3",
        "2,1,3,4"
      ],
      "type": "MCQs",
      "correctAnswers": ["1,4,2,3"],
      "score": 10
    },
    {
      "question": "Choose the sentence that fits: 'The children were tired after playing all day.'",
      "choices": [
        "They went to bed early.",
        "They went to school.",
        "They started a new game.",
        "They played more."
      ],
      "type": "MCQs",
      "correctAnswers": ["They went to bed early."],
      "score": 10
    },
    {
      "question": "Complete the sequence: 'First we visited the museum. Then we went to the park. Next ___.'",
      "choices": [
        "We went to lunch.",
        "We returned home.",
        "We visited the zoo.",
        "We slept."
      ],
      "type": "MCQs",
      "correctAnswers": ["We visited the zoo."],
      "score": 10
    },
    {
      "question": "Arrange sentences logically: \n1. The gardener watered the plants.\n2. The seeds sprouted.\n3. He sowed the seeds.\n4. Flowers bloomed.",
      "choices": [
        "3,1,2,4",
        "1,3,2,4",
        "3,2,1,4",
        "2,3,1,4"
      ],
      "type": "MCQs",
      "correctAnswers": ["3,1,2,4"],
      "score": 10
    },
    {
      "question": "Choose the logical sentence: 'The traffic signal turned red.'",
      "choices": [
        "Vehicles moved ahead.",
        "Vehicles stopped.",
        "People crossed carelessly.",
        "No one noticed."
      ],
      "type": "MCQs",
      "correctAnswers": ["Vehicles stopped."],
      "score": 10
    },
    {
      "question": "Arrange in correct order: \n1. He prepared ingredients.\n2. He chopped vegetables.\n3. He cooked the meal.\n4. He served the food.",
      "choices": [
        "1,2,3,4",
        "2,1,3,4",
        "1,3,2,4",
        "3,2,1,4"
      ],
      "type": "MCQs",
      "correctAnswers": ["1,2,3,4"],
      "score": 10
    }
  ]
}