import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateRecipe = async (
  ingredients,
  category = ""
) => {

  try {

    const prompt = `
You are a professional chef.

Create a ${
      category || "delicious"
    } recipe using ONLY these ingredients:

${ingredients.join(", ")}

Requirements:

- Recipe should match the ${
      category || "selected"
    } style.
- Give the recipe a creative name.
- Mention ingredients.
- Write step-by-step instructions.
- Mention cooking time.
- Add 2 chef tips.
- Keep it easy to read.

Return exactly in this format:

🍽 Recipe Name:

🥕 Ingredients:

👨‍🍳 Instructions:

⏱ Cooking Time:

💡 Chef Tips:
`;

    const completion =
      await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        messages: [

          {
            role: "system",
            content:
              "You are an expert chef and recipe creator.",
          },

          {
            role: "user",
            content: prompt,
          },

        ],

      });

    return completion.choices[0].message.content;

  } catch (error) {

    console.error("Groq Error:", error);

    throw error;

  }

};