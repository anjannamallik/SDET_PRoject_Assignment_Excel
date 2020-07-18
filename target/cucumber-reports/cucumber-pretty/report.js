$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("courseexcel.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to Login the Application",
  "description": "I want to use this template for my feature file",
  "id": "this-feature-is-to-login-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CourseRegistration"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To verify that user is able to login and register the course",
  "description": "",
  "id": "this-feature-is-to-login-the-application;to-verify-that-user-is-able-to-login-and-register-the-course",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@LoginCheck"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter the username \"admin\" and password \"admin@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Stepdefinitions.i_launch_the_application()"
});
formatter.result({
  "duration": 22228803400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    },
    {
      "val": "admin@123",
      "offset": 43
    }
  ],
  "location": "Login_Stepdefinitions.i_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 6782541500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To verify that user is able to create a new course category",
  "description": "",
  "id": "this-feature-is-to-login-the-application;to-verify-that-user-is-able-to-create-a-new-course-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@CreateCourseCategory"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I clicked on Adminstration tab",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I clicked on course categories link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I clicked on Add Category icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the Category Code",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter the Category Name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I clicked Yes radio button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I clicked Add Category button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_on_Adminstration_tab()"
});
formatter.result({
  "duration": 4056990900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_on_course_categories_link()"
});
formatter.result({
  "duration": 1277222900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_on_Add_Category_icon()"
});
formatter.result({
  "duration": 4075584100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_enter_the_Category_Code()"
});
formatter.result({
  "duration": 861511000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_enter_the_Category_Name()"
});
formatter.result({
  "duration": 303914400,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_Yes_radio_button()"
});
formatter.result({
  "duration": 97510800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_Add_Category_button()"
});
formatter.result({
  "duration": 1330303400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "To Verify that user is able to create a new course",
  "description": "",
  "id": "this-feature-is-to-login-the-application;to-verify-that-user-is-able-to-create-a-new-course",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@CreateCourse"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I clicked on Adminstration link",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I clicked on Create course link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter the Title",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter the code",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter the Teacher list box",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select Language List box",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I clicked on Create Course button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_on_Adminstration_link()"
});
formatter.result({
  "duration": 1236029800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_on_Create_course_link()"
});
formatter.result({
  "duration": 1607709300,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_enter_the_Title()"
});
formatter.result({
  "duration": 312529900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_enter_the_code()"
});
formatter.result({
  "duration": 243397300,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_enter_the_Teacher_list_box()"
});
formatter.result({
  "duration": 6447842800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_select_Language_List_box()"
});
formatter.result({
  "duration": 114451000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_on_Create_Course_button()"
});
formatter.result({
  "duration": 3130069800,
  "status": "passed"
});
});