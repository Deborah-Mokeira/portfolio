function toggleResponsiveNav(navbarId){
  const navbar=document.getElementById(navbarId);
  if(navbar.classList.contains("nav")){
    navbar.classList.add("responsive");
  }else{
    navbar.classList.remove("responsive");
  }
}