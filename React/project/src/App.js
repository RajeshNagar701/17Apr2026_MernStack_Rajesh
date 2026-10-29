import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_header from "./website/components/Home_header";
import Home from "./website/pages/Home";
import Footer from "./website/components/Footer";
import About from "./website/pages/About";
import Header from "./website/components/Header";
import Contacts from "./website/pages/Contacts";
import Course from "./website/pages/Course";
import Team from "./website/pages/Team";
import Testimonial from "./website/pages/Testimonial";
import Pnf from "./website/pages/Pnf";
import Aheade from "./admin/components/Aheade";
import Admin_login from "./admin/pages/Admin_login";
import Afooter from "./admin/components/Afooter";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_courses from "./admin/pages/Add_courses";
import Manage_courses from "./admin/pages/Manage_courses";
import Add_team from "./admin/pages/Add_team";
import Manage_team from "./admin/pages/Manage_team";
import Add_testimonial from "./admin/pages/Add_testimonial";
import Manage_testimonial from "./admin/pages/Manage_testimonial";
import Manage_student from "./admin/pages/Manage_student";
import Manage_contact from "./admin/pages/Manage_contact";
import Signup from "./website/pages/Signup";
import View_course from "./website/pages/View_course";
import Edit_category from "./admin/pages/Edit_category";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home_header/><Home/><Footer/></>}></Route>
          <Route path="/about" element={<><Header title="About"/><About/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header title="Contact"/><Contacts/><Footer/></>}></Route>
          <Route path="/courses" element={<><Header title="Course Categories"/><Course/><Footer/></>}></Route>
          <Route path="/view_course/:id" element={<><Header title="View Course"/><View_course/><Footer/></>}></Route>
          <Route path="/team" element={<><Header title="Team"/><Team/><Footer/></>}></Route>
          <Route path="/testimonial" element={<><Header title="Testimonial"/><Testimonial/><Footer/></>}></Route>
          <Route path="/signup" element={<><Header title="Signup"/><Signup/><Footer/></>}></Route>
          <Route path="*" element={<><Header title="Page Not Found"/><Pnf/><Footer/></>}></Route>


          <Route path="/admin-login" element={<><Admin_login/></>}></Route>
          <Route path="/dashboard" element={<><Aheade title="Dashboard"/><Dashboard/><Afooter/></>}></Route>
          <Route path="/add_categories" element={<><Aheade title="Add Categories"/><Add_categories/><Afooter/></>}></Route>
          <Route path="/manage_categories" element={<><Aheade title="Manage Categories"/><Manage_categories/><Afooter/></>}></Route>
          <Route path="/edit_category/:id" element={<><Aheade title="Edit Category"/><Edit_category/><Afooter/></>}></Route>
          
          <Route path="/add_courses" element={<><Aheade title="Add Course"/><Add_courses/><Afooter/></>}></Route>
          <Route path="/manage_courses" element={<><Aheade title="Manage Course"/><Manage_courses/><Afooter/></>}></Route>
          <Route path="/add_team" element={<><Aheade title="Add Team"/><Add_team/><Afooter/></>}></Route>
          <Route path="/manage_team" element={<><Aheade title="Manage Team"/><Manage_team/><Afooter/></>}></Route>
          <Route path="/add_testimonial" element={<><Aheade title="Add Testimonial"/><Add_testimonial/><Afooter/></>}></Route>
          <Route path="/manage_testimonial" element={<><Aheade title="Manage Testimonial"/><Manage_testimonial/><Afooter/></>}></Route>
          <Route path="/manage_student" element={<><Aheade title="Manage Student"/><Manage_student/><Afooter/></>}></Route>
          <Route path="/manage_contact" element={<><Aheade title="Manage Contact"/><Manage_contact/><Afooter/></>}></Route>


        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
