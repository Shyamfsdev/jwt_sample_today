// // "use client";
// // import { useState } from "react";
// // import login from "./auth";
// // import Cookies from "js-cookie";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./style.css";
// // import { FaRegUser } from "react-icons/fa";
// // import { RiLockPasswordFill } from "react-icons/ri";

// // export default function Home() {
// //   const [formdata, setFormData] = useState({
// //     username: "",
// //     password: "",
// //   });

// //   const [validtoken, setValidToken] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log("Attempting to login ", formdata.username, formdata.password);

// //     try {
// //       const response = await login(formdata.username, formdata.password);

// //       if (response.access_token) {
// //         console.log("response generated successfully");
// //         Cookies.set("Tokens", response.access_token, { expires: 1 });
// //         setValidToken(response.access_token);
// //       } else {
// //         throw new Error("somehow token is not fetched sucessfully");
// //       }
// //     } catch (error) {
// //       console.log("we doesn't get the response");
// //       setError("Failed to login");
// //       throw error;
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData({
// //       ...formdata,
// //       [name]: value,
// //     });
// //   };

// //   return (
// //     <div className="main-container d-flex justify-content-center align-items-center">
// //       <div className="sub-container">
// //         <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
// //           <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
// //           <h5 className="text-center mb-4">Welcome!</h5>
// //           <div className="mb-3">
// //             <label htmlFor="username" className="form-label">
// //               Username:
// //             </label>
// //             <div className="input-group">
// //               <span className="input-group-text"><FaRegUser className="text-danger"/></span>
// //               <input
// //                 type="text"
// //                 id="username"
// //                 name="username"
// //                 value={formdata.username}
// //                 onChange={handleChange}
// //                 className="form-control"
// //                 placeholder="Email ID"
// //               />
// //             </div>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="password" className="form-label">
// //               Password:
// //             </label>
// //             <div className="input-group">
// //               <span className="input-group-text"><RiLockPasswordFill className="text-danger"/></span>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 name="password"
// //                 value={formdata.password}
// //                 onChange={handleChange}
// //                 className="form-control"
// //                 placeholder="Password"
// //               />
// //             </div>
// //           </div>
// //           <div className="d-flex justify-content-between align-items-center mb-3">
// //             <div className="form-check">
// //               <input type="checkbox" className="form-check-input" id="rememberMe" />
// //               <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
// //             </div>
// //             <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
// //           </div>
// //           <button type="submit" className="btn btn-danger w-100">Login</button>
// //         </form>
// //         {validtoken && <div className="alert alert-success mt-3">Token generated is {validtoken}</div>}
// //         {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter for navigation
// import login from "./auth";
// import Cookies from "js-cookie";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
// import { FaRegUser } from "react-icons/fa";
// import { RiLockPasswordFill } from "react-icons/ri";

// export default function loginpage() {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter(); // Initialize useRouter for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Attempting to login", formData.username, formData.password);

//     try {
//       const response = await login(formData.username, formData.password);

//       if (response.access_token) {
//         console.log("Login successful");
//         Cookies.set("Tokensss", response.access_token, { expires: 1 });
//         router.push("/"); // Redirect to the dashboard page
//       } else {
//         throw new Error("Token not fetched successfully");
//       }
//     } catch (error) {
//       console.log("Login failed");
//       setError("Invalid credentials");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="main-container d-flex justify-content-center align-items-center">
//       <div className="sub-container">
//         <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
//           <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
//           <h5 className="text-center mb-4">Welcome!</h5>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username:</label>
//             <div className="input-group">
//               <span className="input-group-text"><FaRegUser className="text-danger" /></span>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Email ID"
//               />
//             </div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password:</label>
//             <div className="input-group">
//               <span className="input-group-text"><RiLockPasswordFill className="text-danger" /></span>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="form-control"
//                 placeholder="Password"
//               />
//             </div>
//           </div>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="form-check">
//               <input type="checkbox" className="form-check-input" id="rememberMe" />
//               <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//             </div>
//             <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
//           </div>
//           <button type="submit" className="btn btn-danger w-100">Login</button>
//         </form>
//         {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import login from "./auth";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function loginpage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to login", formData.username, formData.password);

    try {
      const response = await login(formData.username, formData.password);

      if (response.access_token) {
        console.log("Login successful");
        Cookies.set("token", response.access_token, { expires: 1 });
        router.push("/"); // Redirect to the home page
      } else {
        throw new Error("Token not fetched successfully");
      }
    } catch (error) {
      console.log("Login failed");
      setError("Invalid credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-container d-flex justify-content-center align-items-center">
      <div className="sub-container">
        <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
          <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
          <h5 className="text-center mb-4">Welcome!</h5>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <div className="input-group">
              <span className="input-group-text"><FaRegUser className="text-danger" /></span>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Email ID"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <div className="input-group">
              <span className="input-group-text"><RiLockPasswordFill className="text-danger" /></span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
        {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
      </div>
    </div>
  );
}


