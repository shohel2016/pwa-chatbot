// কীওয়ার্ড এবং উত্তর সংরক্ষণের ডিকশনারি
const keywordDictionary = {
    "হ্যালো": "হ্যালো! কিভাবে সাহায্য করতে পারি?",
    "আপনার নাম কি": "আমি একটি কিওয়ার্ড ভিত্তিক চ্যাটবট।",
    "কেমন আছেন": "ভালো আছি, ধন্যবাদ!",
    "বিদায়": "আবার দেখা হবে। ভালো থাকুন!",
    "কাজ": "আমি কীওয়ার্ডের ভিত্তিতে উত্তর দিতে পারি। আপনার প্রশ্ন লিখুন।"
};

// মেসেজ পাঠানোর ফাংশন
function sendMessage() {
    const inputBox = document.getElementById("input-box");
    const chatbox = document.getElementById("chatbox");
    const userMessage = inputBox.value.trim();

    if (userMessage) {
        chatbox.innerHTML += `<p><strong>আপনি:</strong> ${userMessage}</p>`;
        inputBox.value = "";

        // কীওয়ার্ডের সাথে মিল খুঁজে উত্তর দেওয়া
        const reply = keywordDictionary[userMessage] || "দুঃখিত, এই প্রশ্নের উত্তর আমার কাছে নেই।";
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;

        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
