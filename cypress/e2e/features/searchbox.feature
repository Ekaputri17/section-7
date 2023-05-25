Feature: Use the Searchbox

    As a user I want to searching in Searchbox

    Scenario: Using Searchbox
        Given I navigate to the website
        When I type some text into Searchbox and click enter
        Then I should see Search Result:
        