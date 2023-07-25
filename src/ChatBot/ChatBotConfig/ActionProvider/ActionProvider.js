// ActionProvider starter code
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    // Add Message To Message State
    addMessageToState(message) {
        this.setState((prevState) => ({ ...prevState, messages: [...prevState?.messages, message] }))
    }

    whatIsReact() {
        const message = this.createChatBotMessage("React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the application's state. React was developed by Facebook and has gained widespread adoption in the web development community.");
        this.addMessageToState(message);
    }

    howToLearnMachineLearning() {
        const message = this.createChatBotMessage("Learning machine learning can be a rewarding journey. To get started, you can begin with the basics of programming and mathematics, then move on to learning Python, as it has excellent libraries for machine learning like TensorFlow and Scikit-learn. There are various online courses and tutorials available that can help you get started with machine learning.");
        this.addMessageToState(message);
    }

    popularFrontendFramework() {
        const message = this.createChatBotMessage("React is undoubtedly one of the most popular frontend frameworks along with Angular and Vue.js. Its component-based architecture, virtual DOM, and rich ecosystem make it a top choice for building modern web applications.");
        this.addMessageToState(message);
    }

    howToInstallReact() {
        const message = this.createChatBotMessage("To install React, you need to have Node.js and npm (Node Package Manager) installed. You can then create a new React project using create-react-app or set up React manually with webpack and Babel.");
        this.addMessageToState(message);
    }

    reactComponentsExplanation() {
        const message = this.createChatBotMessage("React components are the building blocks of a React application. They are like custom HTML elements that encapsulate the UI and behavior of a part of the user interface. Components can be reused and composed together to create complex user interfaces. There are two types of components: functional components and class components.");
        this.addMessageToState(message);
    }

    reactVsAngularComparison() {
        const message = this.createChatBotMessage("React and Angular are both popular frontend frameworks, but they have some differences. React is a JavaScript library, while Angular is a complete framework. React follows a component-based architecture, whereas Angular uses a template-based approach. React's learning curve is generally considered easier than Angular's. The choice between the two depends on your project requirements and team's expertise.");
        this.addMessageToState(message);
    }

    reactAdvantages() {
        const message = this.createChatBotMessage("React offers various advantages such as a fast virtual DOM, component reusability, a large and active community, and strong support from Facebook. Its declarative approach makes it easier to build complex UIs.");
        this.addMessageToState(message);
    }

    latestReactVersion() {
        const message = this.createChatBotMessage("As of my last update in September 2021, the latest stable version of React is 17.x.x. However, please note that newer versions may have been released since then. It's essential to check the React website or the official GitHub repository for the most up-to-date version.");
        this.addMessageToState(message);
    }

    chooseProgrammingLanguage() {
        const message = this.createChatBotMessage("Choosing a programming language depends on your goals and interests. If you're interested in web development, you can start with languages like JavaScript, HTML, and CSS. For general-purpose programming, Python is beginner-friendly. If you're interested in mobile app development, consider learning languages like Swift (for iOS) or Java/Kotlin (for Android). Each language has its strengths and use cases, so it's essential to consider what you want to achieve with programming.");
        this.addMessageToState(message);
    }

    compiledVsInterpreted() {
        const message = this.createChatBotMessage("The main difference between compiled and interpreted languages lies in how the code is executed. In a compiled language, the source code is translated into machine code by a compiler before execution. Examples include C, C++, and Go. In an interpreted language, the source code is executed directly without the need for compilation. Examples include Python, JavaScript, and Ruby. Each approach has its advantages and disadvantages, but modern languages often blur the lines between these two concepts with Just-In-Time (JIT) compilation and other optimizations.");
        this.addMessageToState(message);
    }

    improveProblemSolvingSkills() {
        const message = this.createChatBotMessage("Improving problem-solving skills involves practice and exposure to different types of problems. Engage in coding challenges, puzzles, and algorithmic problems on platforms like LeetCode, HackerRank, and Codeforces. Work on small coding projects to gain practical experience. Additionally, collaborating with other programmers and reviewing others' code can enhance your problem-solving abilities. The key is to keep challenging yourself with new problems regularly.");
        this.addMessageToState(message);
    }

    variablesAndDataTypes() {
        const message = this.createChatBotMessage("In programming, variables are used to store and manipulate data. They can hold different types of data, such as numbers, strings, booleans, and more. Data types determine the kind of data a variable can store and the operations that can be performed on it. For example, numbers can be integers or floating-point values, and strings represent text. Understanding data types is essential for writing robust and efficient code.");
        this.addMessageToState(message);
    }

    apiExplanation() {
        const message = this.createChatBotMessage("An API (Application Programming Interface) allows different software applications to communicate and interact with each other. It defines the methods and data formats that applications can use to request and exchange information.");
        this.addMessageToState(message);
    }

    webAppDeployment() {
        const message = this.createChatBotMessage("To deploy a web application, you need to host your code on a web server. There are various hosting options, including shared hosting, VPS (Virtual Private Server), cloud platforms like AWS or Heroku, and more. Choose the one that best fits your needs and budget.");
        this.addMessageToState(message);
    }

    dataStructuresExplanation() {
        const message = this.createChatBotMessage("Data structures are ways of organizing and storing data for efficient access and modification. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs. Understanding data structures is crucial for efficient algorithm design.");
        this.addMessageToState(message);
    }

    sqlVsNoSQL() {
        const message = this.createChatBotMessage("SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database systems. SQL databases are relational and use tables to store data, while NoSQL databases are non-relational and use collections or documents. The choice between them depends on your project's requirements and data model.");
        this.addMessageToState(message);
    }

    securingWebApplications() {
        const message = this.createChatBotMessage("Securing web applications involves implementing various security measures. Some best practices include using HTTPS, input validation, avoiding SQL injection, protecting against cross-site scripting (XSS), and setting up proper authentication and authorization mechanisms.");
        this.addMessageToState(message);
    }

    versionControlExplanation() {
        const message = this.createChatBotMessage("Version control is a system that tracks changes to files and directories over time. It allows multiple developers to collaborate on a project while maintaining a history of all modifications. Popular version control systems include Git and SVN.");
        this.addMessageToState(message);
    }

    machineLearningExplanation() {
        const message = this.createChatBotMessage("Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It involves developing algorithms that allow computers to learn from and make predictions or decisions based on data. There are three main types of machine learning: supervised learning, unsupervised learning, and reinforcement learning.");
        this.addMessageToState(message);
    }

    getStartedWithMachineLearning() {
        const message = this.createChatBotMessage("To get started with machine learning, you can follow these steps:\n\n1. Learn the basics of programming and mathematics (linear algebra, calculus, and statistics).\n2. Choose a programming language commonly used in machine learning, such as Python.\n3. Explore popular machine learning libraries like TensorFlow, scikit-learn, and PyTorch.\n4. Work on small machine learning projects to apply what you've learned.\n5. Participate in online courses and tutorials to deepen your knowledge.");
        this.addMessageToState(message);
    }

    commonMLAlgorithms() {
        const message = this.createChatBotMessage("There are various machine learning algorithms used for different tasks. Some common ones include:\n\n1. Linear Regression: For regression problems, predicting continuous values.\n2. Logistic Regression: For binary classification problems.\n3. Decision Trees: For both regression and classification tasks.\n4. Random Forest: An ensemble method based on decision trees.\n5. Support Vector Machines (SVM): For classification and regression tasks.\n6. K-Nearest Neighbors (KNN): For classification and regression based on similarity.\n7. K-Means: For clustering data into groups.\n8. Naive Bayes: For classification, especially in text analysis.");
        this.addMessageToState(message);
    }

    evaluateMLModel() {
        const message = this.createChatBotMessage("Evaluating a machine learning model is essential to assess its performance. Common evaluation metrics include accuracy, precision, recall, F1-score, and area under the receiver operating characteristic (ROC) curve. Cross-validation is used to estimate how well a model generalizes to new data. Additionally, confusion matrices and learning curves are valuable tools to understand a model's strengths and weaknesses.");
        this.addMessageToState(message);
    }

    supervisedLearningExplanation() {
        const message = this.createChatBotMessage("Supervised learning is a type of machine learning where the model is trained on labeled data. It learns from input-output pairs and can make predictions on new, unseen data. The goal of supervised learning is to map input data to the correct output labels based on the provided training examples.");
        this.addMessageToState(message);
    }

    unsupervisedLearningExplanation() {
        const message = this.createChatBotMessage("Unsupervised learning is a type of machine learning where the model is trained on unlabeled data. The algorithm tries to find patterns and relationships within the data without explicit feedback. Common tasks in unsupervised learning include clustering and dimensionality reduction.");
        this.addMessageToState(message);
    }

    androidDevelopmentExplanation() {
        const message = this.createChatBotMessage("Android development is the process of creating applications for devices running the Android operating system. Android apps are developed using the Java or Kotlin programming languages and the Android Studio IDE. Android offers various components and APIs for building user interfaces, handling user interactions, and accessing device features such as camera, sensors, and storage.");
        this.addMessageToState(message);
    }

    getStartedWithAndroidDevelopment() {
        const message = this.createChatBotMessage("To get started with Android development, follow these steps:\n\n1. Install Android Studio IDE and SDK (Software Development Kit).\n2. Set up an Android Virtual Device (AVD) or connect a physical Android device for testing.\n3. Learn the basics of Java or Kotlin programming language.\n4. Understand Android app components such as activities, fragments, services, and broadcast receivers.\n5. Start with simple app projects and gradually increase complexity.\n6. Utilize official Android documentation and online tutorials to learn more.");
        this.addMessageToState(message);
    }

    buildAndroidApp() {
        const message = this.createChatBotMessage("To build an Android app, follow these general steps:\n\n1. Design the app's user interface using XML layout files.\n2. Implement the app's behavior and logic in Java or Kotlin files.\n3. Use Android components like activities, fragments, and services to structure the app.\n4. Test the app on an Android emulator or a physical device.\n5. Optimize the app's performance and user experience.\n6. Prepare the app for release by creating a signed APK (Android Package).");
        this.addMessageToState(message);
    }

    androidComponentsExplanation() {
        const message = this.createChatBotMessage("Android components are building blocks used in Android app development:\n\n1. Activities: Represent individual screens in an app and handle user interactions.\n2. Fragments: Modular UI components that can be combined in activities.\n3. Services: Run background tasks independently of UI.\n4. Broadcast Receivers: Receive and react to system-wide broadcast events.\n5. Content Providers: Manage app data and share it with other apps.\n6. Intents: Messages used to request actions from other app components.");
        this.addMessageToState(message);
    }

    defaultResponse() {
        const message = this.createChatBotMessage("I'm sorry, I couldn't understand your question. Can you please try asking in a different way or provide more context?");
        this.addMessageToState(message);
    }
}

export default ActionProvider;