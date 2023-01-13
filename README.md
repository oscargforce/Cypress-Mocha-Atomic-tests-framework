# Cypress Mocha Page-object model framework

### **How it works**

Practise website that was used for the automation: https://askomdch.com/

- A simple framework that focuses on utilising cypress's built-in framework.
- The test case strategy was to follow an atomic structure, aka "atomic test cases". If you have yet to hear of atomic test cases for automation, [read this article](https://testguild.com/atomic-tests/).  
To simplify it, instead of one e2e test case, you split them into several different test cases and only test a single feature at a time.  
The test cases become very small, and their purpose becomes very clear.
With less UI interaction, the tests also become less flaky,  
and if run in parallel, it's also faster than e2e test cases.
- The preconditions for the test are set up through API instead of doing it on the UI.
