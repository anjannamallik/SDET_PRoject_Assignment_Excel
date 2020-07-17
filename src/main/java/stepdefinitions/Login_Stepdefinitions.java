package stepdefinitions;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_Stepdefinitions {

static WebDriver driver;
String url = "http://elearningm1.upskills.in/";

@Given("^I launch the application$")
public void i_launch_the_application() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
	driver = new ChromeDriver();
	driver.get(url);
	Thread.sleep(3000);
}

@Then("^I enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
public void i_enter_the_username_and_password(String username, String password) throws Throwable {
    // Write code here that turns the phrase above into concrete actions

	driver.findElement(By.cssSelector("input[placeholder=Username]")).sendKeys(username);
	driver.findElement(By.cssSelector("input[placeholder=Pass]")).sendKeys(password);
	driver.findElement(By.name("submitAuth")).click();
	driver.manage().window().maximize();
	Thread.sleep(3000);
}

@Given("^I clicked on Adminstration tab$")
public void i_clicked_on_Adminstration_tab() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.linkText("Administration")).click();
	Thread.sleep(3000);
}

@When("^I clicked on course categories link$")
public void i_clicked_on_course_categories_link() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.linkText("Courses categories")).click();
}

@When("^I clicked on Add Category icon$")
public void i_clicked_on_Add_Category_icon() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//img[@title='Add category']")).click();
	Thread.sleep(3000);
}

@When("^I enter the Category Code \"([^\"]*)\"$")
public void i_enter_the_Category_Code(String code) throws Throwable {
    // Write code here that turns the phrase above into concrete actions //input[@type='text' and @name='code'] 
	driver.findElement(By.xpath("//input[@type='text' and @name='code']")).clear();
	driver.findElement(By.xpath("//input[@type='text' and @name='code']")).sendKeys(code);
}

@When("^I enter the Category Name \"([^\"]*)\"$")
public void i_enter_the_Category_Name(String cat_name) throws Throwable {
    // Write code here that turns the phrase above into concrete actions  //input[@type='text' and @name='name']
	driver.findElement(By.xpath("//input[@type='text' and @name='name']")).clear();
	driver.findElement(By.xpath("//input[@type='text' and @name='name']")).sendKeys(cat_name);
}

@When("^I clicked Yes radio button$")
public void i_clicked_Yes_radio_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	//driver.findElement(By.id("qf_0991d2")).click();
	driver.findElement(By.xpath("//input[@type='radio']")).click();
	
}

@Then("^I clicked Add Category button$")
public void i_clicked_Add_Category_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.id("course_category_submit")).click();
}

//////======================================================Create course

@Given("^I clicked on Adminstration link$")
public void i_clicked_on_Adminstration_link() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.linkText("Administration")).click();

}

@When("^I clicked on Create course link$")
public void i_clicked_on_Create_course_link() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	//driver.findElement(By.linkText("Create a course")).click();
	driver.findElement(By.xpath("//a[contains(text(), 'Create a course')]")).click();
}

@When("^I enter the Title \"([^\"]*)\"$")
public void i_enter_the_Title(String title) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@type='text' and @name='title']")).clear();
	driver.findElement(By.xpath("//input[@type='text' and @name='title']")).sendKeys(title);;
}

@When("^I enter the code \"([^\"]*)\"$")
public void i_enter_the_code(String code) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@type='text' and @name='visual_code']")).clear();
	driver.findElement(By.xpath("//input[@type='text' and @name='visual_code']")).sendKeys(code);
}

@When("^I enter the Teacher list box \"([^\"]*)\"$")
public void i_enter_the_Teacher_list_box(String teacher) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	//driver.findElement(By.xpath("//input[@type='search']")).clear();
	driver.findElement(By.xpath("//input[@type='search']")).sendKeys(teacher);

	  Robot rob=new Robot();
    Thread.sleep(2000);
    rob.keyPress(KeyEvent.VK_DOWN);
    Thread.sleep(2000);
    rob.keyPress(KeyEvent.VK_ENTER);
    Thread.sleep(2000);
    rob.keyRelease(KeyEvent.VK_DOWN);
    rob.keyRelease(KeyEvent.VK_ENTER);
	
	
	
}

@When("^I select Language List box$")
public void i_select_Language_List_box() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Select drpdown=new Select (driver.findElement(By.name("course_language")));
    drpdown.selectByVisibleText("English");
}

@When("^I clicked on Create Course button$")
public void i_clicked_on_Create_Course_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//button[@type='submit']")).click();
}

}
