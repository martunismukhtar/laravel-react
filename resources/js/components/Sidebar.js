import React from 'react'

export default function Sidebar () {
    return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="sidebar-sticky pt-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" href="/home">
                            <span data-feather="home"></span>
                            Company <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/my">
                            <span data-feather="file"></span>
                            My Favorite
                          </a>
                        </li>
                        
                      </ul>

                    </div>
                  </nav>
    )
}