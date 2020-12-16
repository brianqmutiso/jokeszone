import React from 'react';
function Header() {
    return(
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark elegant-color-dark">
         <a class="navbar-brand" href="#">My University Name</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="">Home
                            <span class="sr-only"></span>
                        </a>
                        
                    </li>
                    
                    <li class="nav-item ">
                        <a class="nav-link" href="/usersr">My Students
                        </a>

                    </li>

                    
                    <li class="nav-item ">
                        <a class="nav-link" href="">Add Course
                        </a>
                        
                    </li>

                     <li class="nav-item ">
                        <a class="nav-link" href="">Courses
                        </a>

                    </li>
                   
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">Users
                        </a>
                        <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                          <a class="dropdown-item" href="">Instructors</a>
                          <a class="dropdown-item" href="">Add Instructor</a>
                          <a class="dropdown-item" href="">Students</a>
                        </div>
                      </li>
                   
                   
                    
                </ul>

                <ul class="navbar-nav ml-auto nav-flex-icons">
               
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user"></i>
                        </a>
                       
                        <div class="dropdown-menu dropdown-menu-right dropdown-default"
                            aria-labelledby="navbarDropdownMenuLink-333">
                            <a class="dropdown-item" href="{{ url_for('account') }}">Account</a>
                            <a class="dropdown-item" href="{{ url_for('logout') }}">Logout</a>
                        </div>
                    </li>
                  
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-133" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Register
                        </a>
                       
                        <div class="dropdown-menu dropdown-menu-right dropdown-default"
                            aria-labelledby="navbarDropdownMenuLink-133">
                            <a class="dropdown-item" href="{{ url_for('register',role='student') }}">Student</a>
                            <a class="dropdown-item" href="{{ url_for('register',role='instructor')  }}">Instructor</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url_for('login') }}">Login
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                  
                </ul>
                </div>

        </nav>
    )
}
export default Header;