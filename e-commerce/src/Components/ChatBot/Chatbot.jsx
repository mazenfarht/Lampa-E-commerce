import React, { useState, useRef, useEffect } from "react";

const ruleBasedChatbot = (inputText) => {
  // Define rules for chatbot responses
  const rules = {
  // Greetings and General Questions
  hello: "Hello! How can I assist you today?",
  hi: "Hi there! Welcome to our store. How can I help?",
  hey: "Hey! What can I do for you?",
  "how are you": "I’m just a bot, but I’m here to make your shopping experience easier!",

  // Information about the Store
  "what is your name": "I’m your shopping assistant bot.",
  "ايه اخر العروض":"في عروض الجمعه البيضه تخفيض 50 في الميه يافندم",
  "what can you do": "I can help you find products, track orders, answer questions about our store, and more!",
  "where are you located": "We are an online store, available wherever you are!",
  "what do you sell": "We sell a wide range of products, from electronics to fashion and more!",
  "do you have physical stores": "We operate online only, but we ensure fast and reliable delivery.",
  "what are your working hours": "Our store is open 24/7 for shopping. Support is available from 9 AM to 9 PM.",
  
  // Product Search and Categories
  "show me electronics": "Sure! You can find all our electronics in the Electronics section of our website.",
  "do you have smartphones": "Yes, we have the latest smartphones. Would you like me to show you some options?",
  "show me shoes": "We have a great collection of shoes! Visit the Footwear section for more details.",
  "what are your bestsellers": "Our bestsellers include trending gadgets, fashionable outfits, and must-have accessories!",
  
  // Discounts and Offers
  "do you have discounts": "Yes, we have exciting discounts running right now. Check out the 'Deals' section!",
  "what are the current offers": "We have up to 50% off on selected items. Would you like to see the offers?",
  "is there a sale today": "Yes, there’s a sale on selected categories. Don’t miss out!",
  "do you offer coupons": "Yes, we do! Subscribe to our newsletter to get exclusive coupons.",
  
  // Shipping and Delivery
  "how long does delivery take": "Delivery typically takes 3-7 business days, depending on your location.",
  "do you have express shipping": "Yes, we offer express shipping for an additional fee.",
  "can I track my order": "Yes, you can track your order using the tracking link in your order confirmation email.",
  "do you ship internationally": "Yes, we ship worldwide! Shipping charges may vary based on location.",
  "what are the shipping charges": "Shipping charges depend on your location and the shipping method selected.",

  // Payment Options
  "what payment methods do you accept": "We accept credit cards, debit cards, PayPal, and online banking.",
  "can I pay on delivery": "Yes, Cash on Delivery (COD) is available in selected locations.",
  "is my payment information secure": "Absolutely! Your payment information is encrypted and completely secure.",
  
  // Returns and Refunds
  "can I return a product": "Yes, you can return products within 30 days of delivery. Check our return policy for details.",
  "how do I request a return": "To request a return, log in to your account and navigate to the 'My Orders' section.",
  "how long do refunds take": "Refunds are processed within 5-7 business days after the return is approved.",
  "is there a return fee": "Returns are free for most products unless stated otherwise.",
  
  // Customer Support
  "how can I contact support": "You can contact our support team via email or live chat.",
  "do you have a phone number for support": "Yes, our support helpline is available at 123-456-7890.",
  "where can I report an issue": "You can report issues via the 'Contact Us' section on our website.",
  
  // Fun and Casual Responses
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
  "thank you": "You’re welcome! Let me know if there’s anything else I can help with.",
  "i love you": "Aww, I love helping you shop!",
  "what’s your favorite product": "I love all our products equally, but the gadgets are pretty cool!",
  // معلومات عن المتجر
  "ما اسمك": "أنا روبوت مساعد التسوق الخاص بك.",
  "ما هي أنواع المنتجات التي تبيعها": "نحن نبيع مجموعة واسعة من المنتجات مثل الإلكترونيات، الأزياء، والأدوات المنزلية!",
  "أين يقع متجرك": "نحن متجر إلكتروني متاح أينما كنت!",
  "هل لديك متاجر فعلية": "نحن نعمل عبر الإنترنت فقط، لكننا نضمن توصيل سريع وموثوق.",
  "ما هي ساعات العمل": "متجرنا مفتوح 24/7 للتسوق، والدعم متاح من الساعة 9 صباحًا إلى 9 مساءً.",
  "هل يمكنني التسوق دولياً": "نعم، نقوم بالشحن الدولي في جميع أنحاء العالم.",
  
  // عروض وخصومات
  "هل لديك عروض حالياً": "نعم، لدينا خصومات رائعة الآن، تحقق من قسم العروض.",
  "ما هي العروض الحالية": "لدينا تخفيضات تصل إلى 50% على بعض المنتجات، هل ترغب في معرفة المزيد؟",
  "هل يوجد خصم اليوم": "نعم، هناك خصم خاص على بعض الفئات اليوم. لا تفوت الفرصة!",
  "هل تقدمون كوبونات خصم": "نعم، يمكنك الاشتراك في نشرتنا للحصول على كوبونات خصم حصرية.",
  "ما هي العروض الخاصة": "لدينا عروض على مجموعة واسعة من المنتجات مثل الإلكترونيات، الأزياء، والمزيد!",
  "هل يوجد خصم للمشتريات الكبيرة": "نعم، نقدم خصومات للمشتريات الكبيرة. تحقق من قسم العروض للحصول على تفاصيل أكثر.",
  
  // الشحن والتوصيل
  "كيف يمكنني تتبع طلباتي": "يمكنك تتبع طلبك عبر الرابط المرسل في رسالة تأكيد الطلب.",
  "كم يستغرق الشحن": "الشحن عادةً يستغرق من 3 إلى 7 أيام عمل حسب الموقع.",
  "هل توفرون الشحن السريع": "نعم، نقدم الشحن السريع مقابل رسوم إضافية.",
  "هل تقومون بالشحن دولياً": "نعم، نقوم بالشحن إلى جميع أنحاء العالم. قد تختلف رسوم الشحن حسب الموقع.",
  "ما هي رسوم الشحن": "رسوم الشحن تعتمد على موقعك وطريقة الشحن المختارة.",
  "هل يمكنني تغيير عنوان الشحن": "نعم، يمكنك تعديل عنوان الشحن قبل أن يتم شحن الطلب. بعد ذلك، لا يمكن التغيير.",
  "هل تقدمون شحن مجاني": "نعم، نقدم شحن مجاني على بعض الطلبات في مناطق محددة.",
  
  // طرق الدفع
  "ما هي طرق الدفع التي تقبلونها": "نقبل بطاقات الائتمان، بطاقات الخصم، PayPal، والدفع عبر الإنترنت.",
  "هل يمكنني الدفع عند الاستلام": "نعم، الدفع عند الاستلام متاح في بعض المواقع.",
  "هل معلومات الدفع آمنة": "نعم، معلومات الدفع مشفرة وآمنة تماماً.",
  "هل يمكنني دفع جزء من المبلغ الآن والباقي لاحقاً": "نأسف، لا نقدم خيار الدفع الجزئي. يجب دفع المبلغ بالكامل.",
  
  // الإرجاع والاسترداد
  "هل يمكنني إرجاع منتج": "نعم، يمكنك إرجاع المنتجات خلال 30 يومًا من تاريخ التسليم.",
  "كيف يمكنني إرجاع منتج": "يمكنك طلب الإرجاع من خلال حسابك في قسم 'طلباتي'.",
  "كم يستغرق استرداد المبلغ": "يتم معالجة الاسترداد في غضون 5-7 أيام عمل بعد الموافقة على الإرجاع.",
  "هل هناك رسوم إرجاع": "الإرجاع مجاني لمعظم المنتجات إلا إذا تم تحديد خلاف ذلك.",
  "متى يمكنني الحصول على استرداد بعد إرجاع المنتج": "ستتم معالجة استرداد المبلغ في غضون 5-7 أيام بعد أن تتم الموافقة على الإرجاع.",
  "هل يمكنني إرجاع منتج بعد فتحه": "نعم، يمكنك إرجاع المنتج إذا كان في حالته الأصلية، وفي عبوته الأصلية.",
  
  // دعم العملاء
  "كيف يمكنني التواصل مع الدعم": "يمكنك الاتصال بالدعم عبر البريد الإلكتروني أو الدردشة الحية.",
  "هل يوجد رقم هاتف للدعم": "نعم، رقم الدعم هو 123-456-7890.",
  "هل يمكنني استبدال منتج": "نعم، يمكن استبدال المنتجات التي تحتوي على عيوب في خلال 30 يومًا من الشراء.",
  "كيف يمكنني إلغاء طلبي": "يمكنك إلغاء الطلب من خلال حسابك في قسم 'طلباتي'، قبل شحن المنتج.",
  
  // أسئلة خاصة بالمنتجات
  "هل لديكم هواتف ذكية": "نعم، لدينا أحدث الهواتف الذكية، هل ترغب في أن أريك بعض الخيارات؟",
  "هل لديكم أجهزة كمبيوتر محمولة": "نعم، لدينا مجموعة من أجهزة الكمبيوتر المحمولة. هل ترغب في معرفة المزيد؟",
  "هل لديكم ملابس شتوية": "نعم، لدينا مجموعة كبيرة من الملابس الشتوية. تفضل بزيارة قسم الملابس الشتوية لدينا.",
  "هل لديكم إكسسوارات": "نعم، لدينا العديد من الإكسسوارات مثل الحقائب، الساعات، والمجوهرات.",
  "هل يوجد قسم لمنتجات الأطفال": "نعم، لدينا قسم خاص لمنتجات الأطفال.",
  "هل لديكم منتجات مخصصة للمنزل": "نعم، لدينا أدوات منزلية وأثاث لاحتياجات المنزل.",
  "هل تقدمون ضمانات على المنتجات": "نعم، نقدم ضمانات على العديد من المنتجات. تحقق من تفاصيل المنتج لمعرفة المزيد.",
  "هل لديكم ساعات ذكية": "نعم، لدينا مجموعة من الساعات الذكية. تفضل بزيارة قسم الإلكترونيات.",
  "هل لديكم سماعات رأس لاسلكية": "نعم، لدينا سماعات رأس لاسلكية من ماركات شهيرة.",
  
  // أسئلة عشوائية
  "أخبرني نكتة": "لماذا لا يتشاجر الهياكل العظمية؟ لأنهم ليس لديهم guts!",
  "شكراً": "على الرحب والسعة! إذا كنت بحاجة للمساعدة، أنا هنا.",
  "أحبك": "أوه، أحب مساعدتك في التسوق!",
  "ما هو منتجك المفضل": "أحب جميع منتجاتنا، ولكن الأجهزة الإلكترونية رائعة جداً!",
  "هل يمكنني طلب منتج مخصص": "نعم، بعض المنتجات يمكن تخصيصها حسب الطلب. تحقق من القسم المخصص لذلك.",
  "هل يمكنني الحصول على عينة مجانية": "نأسف، حالياً لا نقدم عينات مجانية.",
  "هل يمكنني الحصول على خصم إذا اشتريت عدة منتجات": "نعم، نقدم خصومات على المشتريات الكبيرة. تحقق من العروض الحالية.",
  "هل هناك عروض للمناسبات الخاصة": "نعم، لدينا عروض خاصة للمناسبات مثل عيد الميلاد ورأس السنة.",
  "هل يمكنني الحصول على خصم عند الإحالة": "نعم، نقدم خصومات عند إحالة الأصدقاء. تحقق من التفاصيل على موقعنا.",
  };

  const defaultResponse = "I’m sorry, I didn’t quite understand that. Could you try rephrasing?";
  // Check input against rules and return the response
  for (let pattern in rules) {
    const regex = new RegExp(pattern, "i"); // Case-insensitive matching
    if (regex.test(inputText)) {
      return rules[pattern];
    }
  }
  return defaultResponse; // Default response if no rules match
};

const Chatbot = () => {
  // State to store all chat messages
  const [messages, setMessages] = useState([]);
  // State to store the current user input
  const [input, setInput] = useState("");
  // Reference to the chat container for auto-scrolling
  const chatContainerRef = useRef(null);

  // Function to handle message sending
  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    if (!input.trim()) return; // Do nothing if input is empty or whitespace

    // Create the user message object
    const userMessage = { sender: "user", text: input };

    // Generate the bot response
    const botResponse = { sender: "bot", text: ruleBasedChatbot(input) };

    // Add both user message and bot response to the messages state
    setMessages((prev) => [...prev, userMessage, botResponse]);

    // Clear the input field
    setInput("");

    // Auto-scroll to the latest message
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  // Trigger the initial greeting when the component mounts
  useEffect(() => {
    const initialMessage = { sender: "bot", text: ruleBasedChatbot("hello") };
    setMessages([initialMessage]);
  }, []);

  return (
    <div
      style={{
        width: "50%",
        height: "70vh",  // Make it take full height of the viewport
        maxWidth: "700px",
        margin: "50px auto",
        background: "#f7f7f8", // Light grey background
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for card-like appearance
        fontFamily: "Arial, sans-serif", // Clean font style
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          background: "#ffffff", // White header background
          borderBottom: "1px solid #e0e0e0",
          padding: "10px 20px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333", // Dark grey text
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        Chatbot
      </div>

      {/* Chat Display Area */}
      <div
        ref={chatContainerRef} // Reference for scrolling
        style={{
          flex: 1,
          overflowY: "auto", // Enable scrolling for long conversations
          padding: "20px",
          background: "#ffffff", // White chat area background
        }}
      >
        {/* Render each message */}
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: message.sender === "bot" ? "flex-start" : "flex-end", // Align bot messages left, user messages right
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                background: message.sender === "bot" ? "#e7f3ff" : "#dcf8c6", // Bot: light blue, User: light green
                color: message.sender === "bot" ? "#0056a3" : "#333", // Bot: blue text, User: grey text
                padding: "12px 16px",
                borderRadius: "10px",
                maxWidth: "80%", // Limit message width
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for message bubbles
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSendMessage} // Handle send on form submit
        style={{
          display: "flex",
          padding: "15px",
          borderTop: "1px solid #e0e0e0",
          background: "#f7f7f8", // Matches the container background
        }}
      >
        <input
          type="text"
          value={input} // Bind input value to state
          onChange={(e) => setInput(e.target.value)} // Update state on change
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "12px 16px",
            border: "1px solid #ddd",
            borderRadius: "25px",
            fontSize: "14px",
            outline: "none", // Remove blue outline on focus
            marginRight: "10px",
          }}
        />
        <button
          type="submit" // Submit the form on click
          style={{
            padding: "12px 20px",
            background: "#0078d7", // Blue background
            color: "#ffffff", // White text
            border: "none",
            borderRadius: "25px",
            fontSize: "14px",
            cursor: "pointer", // Pointer cursor for interactivity
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
