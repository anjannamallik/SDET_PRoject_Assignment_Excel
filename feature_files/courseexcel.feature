@CourseRegistration
Feature: This feature is to Login the Application
	I want to use this template for my feature file

@LoginCheck
Scenario: To verify that user is able to login and register the course
	Given I launch the application
	Then I enter the username "admin" and password "admin@123"
	
@CreateCourseCategory
Scenario: To verify that user is able to create a new course category
	Given I clicked on Adminstration tab
	When I clicked on course categories link
	And I clicked on Add Category icon
	And I enter the Category Code 
	And I enter the Category Name 
	And I clicked Yes radio button 
	Then I clicked Add Category button
	
@CreateCourse
Scenario: To Verify that user is able to create a new course
	Given I clicked on Adminstration link
	When I clicked on Create course link
	And I enter the Title 
	And I enter the code 
	And I enter the Teacher list box 
	And I select Language List box
	And I clicked on Create Course button
