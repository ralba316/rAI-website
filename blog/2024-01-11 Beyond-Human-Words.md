---
slug: Beyond Human Words
title: "Beyond Human Words: Pioneering an AI-to-AI Language for Large Language Models
"
authors:
  - name: Raphael Alba
    title: rAI Labs
    url: https://github.com/ralba316
    image_url: https://github.com/ralba316.png
---
![DALL-E prompt: A digital art representation in the style of Raphael's School of Athens](1705012258375.png)

## Rise of the Agents
In an era where artificial intelligence (AI) is not just a buzzword but a fundamental aspect of our technological landscape, a groundbreaking concept is taking shape: development of AI agentic systems. AI agents are a way to replicate assistants and specialists. Get a team of these agents together and they can complete tasks that ChatGPT cannot. AI agents have already begun talking to each other in the form of multi-agent frameworks like [Autogen](https://microsoft.github.io/autogen/) and [crewAI](https://github.com/joaomdmoura/crewAI). As with anyone who has tried these frameworks, the bottleneck to advancing the technology has been universal, their wallet!

## The Need for a Specialized AI Language
> “Why waste time say lot word when few word do trick?” -Kevin Malone, The Office

The current landscape of Large Language Models (LLMs) like [GPT-4](https://openai.com/research/gpt-4) and [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/) has an underlying characteristic: verbosity. This verbosity is ingrained in LLM's because in order to teach it logic and reasoning, researchers filled it with academic papers and textbooks. While verbosity in human language serves various purposes, including emotional and intellectual expression, it unnecessarily raises inference cost in AI-to-AI communication. The proposed AI-to-AI language aims to strip down communication to its essentials, focusing on task efficiency and reduced token usage while referencing organizing and referencing context. This approach is not just about efficiency; it's about redefining how AI systems 'command', 'understand', and 'speak' to each other.

## A Blend of Flexibility and Precision
An AI-to-AI language isn't just another programming language; it's a fusion of the flexibility of human language and the precision of code. Programming languages require a strict syntax that causes error when simple letter is off. Contrast that when talking to ChatGPT, misspellings, bad grammar, and vague language are interpreted well because LLMs are well versed in understanding context. The new AI-to-AI language needs to utilize the strengths of both programming and natural language while overcoming their weaknesses.

## Design Philosophy: First Principle Thinking
> "Delete Delete Delete" - Elon Musk

At its core, the design of this AI-to-AI language is rooted in first principle thinking. It's about identifying the most fundamental aspects of communication required for AI task completion and distilling these down to their essence. This minimalist approach to language design ensures that every token used is essential, making AI interactions as streamlined and effective as possible. We gauge the effectiveness of the AI-to-AI language, by maximizing the accuracy while minimizing the tokens used per task.

## Balancing Efficiency and Safety
> "In the end we shall make thoughtcrime literally impossible, because there will be no words in which to express it.“ -1984, George Orwell

A major concern in the development of this language is ensuring AI alignment and safety. The language will incorporate functions that flag deviations from expected behavior or ethical guidelines. This safety net is crucial, especially in unsupervised AI-to-AI communication, to maintain the integrity of AI systems and prevent potential misuse or misinterpretation.

![DALL-E](1705015528726.jpg)

## How to Implement
There are multiple ways to implement this language. On the short term, system prompt is the quickest way to implement. On the long term we propose using [Language Capability Transfer](https://arxiv.org/abs/2401.01055) to efficiently integrate a new language into a Large Language Model (LLM). This method emphasizes avoiding extensive vocabulary extensions, opting instead for the LLM's inherent cross-lingual semantic understanding. It involves a smaller scale of further pretraining, significantly less than the original data volume, coupled with targeted instruction tuning to align the LLM with the new language's nuances. Maintaining the LLM’s multilingual proficiency is crucial, achieved through balanced, multilingual joint training. Finally, rigorous evaluation using benchmarks ensures the LLM's proficiency in both the new AI-to-AI language and its existing linguistic capabilities.

## The Future of AI Communication
The advent of AI-to-AI language is a groundbreaking step in evolving AI technology, opening doors to unprecedented collaboration and knowledge sharing among AI agents. This innovative language transcends traditional communication barriers, fostering a unique AI interaction ecosystem where agents not only exchange information but also engage in complex problem-solving and creative thinking. Our vision is to harness this potential, enabling AI agents to Talk, Link, Think, and Dream, thereby revolutionizing the realm of artificial intelligence.

By Raphael Alba