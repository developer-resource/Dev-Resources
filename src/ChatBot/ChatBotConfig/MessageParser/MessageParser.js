// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(usrMessage) {
        let message = String(usrMessage).toLowerCase();
    
        if (message.includes('what') && message.includes('react') || message.includes('is')) {
            this.actionProvider.whatIsReact();
        }
    
        else if (message.includes('how') && message.includes('learn') && message.includes('machine') && message.includes('learning')) {
            this.actionProvider.howToLearnMachineLearning();
        }
    
        else if (message.includes('popular') && message.includes('frontend') && message.includes('framework')) {
            this.actionProvider.popularFrontendFramework();
        }
    
        else if (message.includes('how') && message.includes('install') && message.includes('react')) {
            this.actionProvider.howToInstallReact();
        }
    
        else if (message.includes('what') && message.includes('react') && message.includes('components')) {
            this.actionProvider.reactComponentsExplanation();
        }
    
        else if (message.includes('compare') && message.includes('react') && message.includes('angular')) {
            this.actionProvider.reactVsAngularComparison();
        }
    
        else if (message.includes('advantages') && message.includes('react')) {
            this.actionProvider.reactAdvantages();
        }
    
        else if (message.includes('latest') && message.includes('react') && message.includes('version')) {
            this.actionProvider.latestReactVersion();
        }
    
        else if (message.includes('choose') && message.includes('programming') && message.includes('language')) {
            this.actionProvider.chooseProgrammingLanguage();
        }
    
        else if (message.includes('difference') && message.includes('compiled') && message.includes('interpreted')) {
            this.actionProvider.compiledVsInterpreted();
        }
    
        else if (message.includes('improve') && message.includes('problem-solving') && message.includes('skills')) {
            this.actionProvider.improveProblemSolvingSkills();
        }
    
        else if (message.includes('variables') && message.includes('data types')) {
            this.actionProvider.variablesAndDataTypes();
        }
    
        else if (message.includes('what') && message.includes('is') && message.includes('API')) {
            this.actionProvider.apiExplanation();
        }
    
        else if (message.includes('how') && message.includes('to') && message.includes('deploy') && message.includes('web app')) {
            this.actionProvider.webAppDeployment();
        }
    
        else if (message.includes('what') && message.includes('are') && message.includes('data structures')) {
            this.actionProvider.dataStructuresExplanation();
        }
    
        else if (message.includes('difference') && message.includes('sql') && message.includes('nosql')) {
            this.actionProvider.sqlVsNoSQL();
        }
    
        else if (message.includes('how') && message.includes('to') || message.includes('can') && message.includes('i')  && message.includes('secure') && message.includes('web application')) {
            this.actionProvider.securingWebApplications();
        }
    
        else if (message.includes('what') && message.includes('is') && message.includes('version control')) {
            this.actionProvider.versionControlExplanation();
        }

        else if (message.includes('what') && message.includes('is') && message.includes('machine learning')) {
            this.actionProvider.machineLearningExplanation();
        }
    
        else if (message.includes('how') && message.includes('to') && message.includes('get started') && message.includes('machine learning')) {
            this.actionProvider.getStartedWithMachineLearning();
        }
    
        else if (message.includes('common machine learning algorithms')) {
            this.actionProvider.commonMLAlgorithms();
        }
    
        else if (message.includes('how') && message.includes('to') && message.includes('evaluate') && message.includes('machine learning model')) {
            this.actionProvider.evaluateMLModel();
        }
    
        else if (message.includes('what') && message.includes('is') && message.includes('supervised learning')) {
            this.actionProvider.supervisedLearningExplanation();
        }
    
        else if (message.includes('what') && message.includes('is') && message.includes('unsupervised learning')) {
            this.actionProvider.unsupervisedLearningExplanation();
        }

        else if (message.includes('what') && message.includes('is') && message.includes('android development')) {
            this.actionProvider.androidDevelopmentExplanation();
          }
        
          else if (message.includes('how') && message.includes('to') && message.includes('get started') || message.includes('learn') && message.includes('android development')) {
            this.actionProvider.getStartedWithAndroidDevelopment();
          }
        
          else if (message.includes('how') && message.includes('to') && message.includes('build') && message.includes('android app')) {
            this.actionProvider.buildAndroidApp();
          }
        
          else if (message.includes('what') && message.includes('are') && message.includes('android components')) {
            this.actionProvider.androidComponentsExplanation();
          }
    
        // Add more conditional statements for other common questions...
    
        else {
            this.actionProvider.defaultResponse();
        }
    }
    

}

export default MessageParser;