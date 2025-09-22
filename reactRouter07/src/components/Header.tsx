import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="w-full">
      <header className="w-10/12 py-1 m-auto">
        <nav className="flex justify-evenly items-center">
          <div className="uppercase text-xl font-black text-red-500">Logo</div>
          <div>
            <ul className="flex gap-5 text-lg font-mono cursor-pointer">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "text-red-500 hover:bg-green-400 hover:scale-x-125"
                      : "hover:bg-green-400 hover:scale-x-125"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "text-red-500 hover:bg-green-400 hover:scale-x-125"
                      : "hover:bg-green-400 hover:scale-x-125"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "text-red-500 hover:bg-green-400 hover:scale-x-125"
                      : "hover:bg-green-400 hover:scale-x-125"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "text-red-500 hover:bg-green-400 hover:scale-x-125"
                      : "hover:bg-green-400 hover:scale-x-125"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? "text-red-500 hover:bg-green-400 hover:scale-x-125"
                      : "hover:bg-green-400 hover:scale-x-125"
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-green-300 px-2 text-white font-medium rounded-lg cursor-pointer">
              Logo
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
