import React from "react";
import {Switch,Route} from "react-router-dom";
import Exams from "./Models/Exams";
import AddExam from "./Exam/AddExam";
import EditExam from "./Exam/EditExam";
import Questions from "./Models/Questions";
import AddQuestion from "./Question/AddQuestion";
import EditQuestion from "./Question/EditQuestion";
import QandExam from "./Models/QandExam";
import AddQandE from "./QuestionandExam/AddQandE";
import EditQandE from "./QuestionandExam/EditQandE";
export default class Main extends React.Component{
    render() {
//name và price trong product truyền vào props của con
        //ls.map là vòng lặp
        //nội dung khác nhau nằm trong switch hay nó là các component(thành phần ) khác nhau
        //tạo 1 công tắc để đi đến các đường dẫn khác nhau, khai báo đường dẫn trong đây exact để kiểm tra
        //nếu đường lẫn trên trình duyệt chính xác thì chuyển trang
        return(
            <div  id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>


                        <form
                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                       placeholder="Search for..."
                                       aria-label="Search" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                     aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                   placeholder="Search for..." aria-label="Search"
                                                   aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw"></i>
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </a>
                                <div
                                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All
                                        Alerts</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope fa-fw"></i>
                                    <span className="badge badge-danger badge-counter">7</span>
                                </a>
                                <div
                                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">
                                        Message Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                 alt="..."/>
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me
                                                with a
                                                problem I've been having.
                                            </div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                 alt="..."/>
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last
                                                month, how
                                                would you like them sent to you?
                                            </div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                 alt="..."/>
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very
                                                happy with
                                                the progress so far, keep up the good work!
                                            </div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle"
                                                 src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                 alt="..."/>
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because
                                                someone
                                                told me that people say this to all dogs, even if they aren't good...
                                            </div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More
                                        Messages</a>
                                </div>
                            </li>

                            <div className="topbar-divider d-none d-sm-block"></div>
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                    <img className="img-profile rounded-circle"
                                         src="img/undraw_profile.svg"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                     aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Settings
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Activity Log
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" data-toggle="modal"
                                       data-target="#logoutModal">
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>

                        </ul>

                    </nav>
                    <div className="container-fluid">
                        <Switch>
                            <Route path="/Exams" exact>
                                <Exams/>
                                {/*<Route path="/category/:id" exact>*/}
                                {/*    <Category/>*/}
                                {/*</Route>*/}
                                {/*<Route path="/product/:id" exact>*/}
                                {/*    <Product2/>*/}
                            </Route>
                            <Route path="/add-exam" exact>
                                <AddExam/>
                            </Route>
                            <Route path = "/edit-exam/:id" exact>
                                <EditExam/>
                            </Route>
                            <Route path="/questions" exact>
                                <Questions/>
                            </Route>
                            <Route path="/add-question" exact>
                                <AddQuestion/>
                            </Route>
                            <Route path="/edit-question/:id" exact>
                                <EditQuestion/>
                            </Route>
                            <Route path="/qandexams" exact>
                                <QandExam/>
                            </Route>
                            <Route path="/add-qandexam" exact>
                                <AddQandE/>
                            </Route>
                            <Route path="/edit-qandexam/:id" exact>
                                <EditQandE/>
                            </Route>
                            {/*<Route path="/add-category" exact>*/}
                            {/*    <AddCategory/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/edit-category/:id" exact>*/}
                            {/*    <EditCategory/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/brands" exact>*/}
                            {/*    <Brands/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/add-brand" exact>*/}
                            {/*    <AddBrand/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/edit-brand/:id" exact>*/}
                            {/*    <EditBrand/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/contacts" exact>*/}
                            {/*    <Contacts/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/add-contact" exact>*/}
                            {/*    <AddContact/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/edit-contact/:id" exact>*/}
                            {/*    <EditContact/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/products" exact>*/}
                            {/*    <Products/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/add-product" exact>*/}
                            {/*    <AddProduct/>*/}
                            {/*</Route>*/}
                            {/*<Route path="/edit-product/:id" exact>*/}
                            {/*    <EditProduct/>*/}
                            {/*</Route>*/}
                        </Switch>
                    </div>
                </div>

            </div>

        );
    }
}