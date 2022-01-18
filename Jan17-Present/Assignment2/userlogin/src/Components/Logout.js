function Logout() {
    localStorage.removeItem("UserId");
    window.location.href = "/";
  }
  
  export default Logout;