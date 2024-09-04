import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from"@google/generative-ai";
  
  const genAI = new GoogleGenerativeAI('AIzaSyDAhCr1fh65uhWwlL7L-fMlJDDeJtQ_qw8');
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    try {
        const result = await chatSession.sendMessage(prompt);
        return result.response.text(); // Retorna o texto da resposta
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        return "Ocorreu um erro ao processar sua mensagem.";
    }
  }
  
export default run;