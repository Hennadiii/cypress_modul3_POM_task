import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const TheHomePage = new HomePage();

describe ("Login and Logout Test", () => {
    it("should log in, open navigation menu, and log out", ()=>{

       const email = " user888@gmail.com";
       const password = "1234567890";

       LoginPage.navigate();
       LoginPage.logining(email, password);
       LoginPage.typeSubmit(); 

       TheHomePage.openNavigationMenu();
       TheHomePage.logout();
    })
    it("Logining Test2",()=>{

        const email = " testowyqa@qa.team";
        const password = "QA!automation-1";
 
        LoginPage.navigate();
        LoginPage.logining(email, password);
        LoginPage.typeSubmit();
        
        TheHomePage.openNavigationMenu();
        TheHomePage.logout();
     })
})