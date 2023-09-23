import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

from langchain.llms import OpenAI
llm = OpenAI(temperature=0.9, max_tokens=-1)

from langchain.prompts import PromptTemplate

blogPrompt = PromptTemplate(
    input_variables=["title", "audience", "tone"],
    template="""This program will generate a full article using the blog post title, audience, tone of voice, and the provided outline

    Blog Title: {title}
    Audience: {audience}
    Tone of Voice: {tone}
    outline:I. Introduction
A. What is Angular? 
B. Benefits of Angular

II. Prerequisites 
A. What Skills are Required? 
B. Essential Tools & Resources 

III. Choosing Your App Idea
A. Choosing an App Type 
B. Selecting a Database 
C. Thinking Through Functionality 

IV. Creating the App
A. Setting Up the Design 
B. Configuring the App 
C. Writing the Code 

V. Testing & Debugging Your App 
A. Troubleshooting Common Problems 
B. Testing Functionality 

VI. Finishing Touches 
...

VII. Conclusion 
A. Benefits of Using Angular 
B. Summary of Process
    """

    ,
)
from langchain.chains import LLMChain
blogChain = LLMChain(llm=llm, prompt=blogPrompt)

from langchain.chains import SimpleSequentialChain

# overall_chain = SimpleSequentialChain(chains=[blogChain], verbose=True)

# Define the title and other parameters
audience = "Technical Software Engineers"
tone = "Informative and detailed"

# Run the chain specifying only the input variable for the first chain.
articleContent = blogChain.run(title="Creating an Angular Web App in 2023", audience=audience, tone=tone)

# Convert the title to a valid filename (replace spaces with underscores and add .txt extension)
filename = "Creating_an_Angular_Web_App_in_2023.txt"

# Save the articleContent to a file with the title as the filename
with open(filename, 'w') as file:
    file.write(articleContent)

print(f"Article saved to {filename}")

                  