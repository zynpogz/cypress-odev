
import Login from "../../pages/login";
describe("Page Object Model - POM ", () => {


    it("tc02_Page Object Pattern", () => {

        Login.navigateUrl();
        Login.checkTitle("Login");
        Login.checkEmailField();
        Login.checkpasswordField();
        Login.checkloginButton()


    })


});