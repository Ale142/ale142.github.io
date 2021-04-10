function setTheme(name: string) {
    localStorage.setItem('theme', name);
    document.documentElement.className = name;
}
  
function keepTheme(theme: string) {
    if(localStorage.getItem('theme')) {
      if(localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
      } else if (localStorage.getItem('theme') === 'light') {
        setTheme('light')
      } else {
        // Default
        setTheme('light');
      }
    }

    console.log("invoked");
}
  
function changeTheme() {
    if(localStorage.getItem('theme') === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
}

function getTheme() {
  if(localStorage.getItem('theme') === 'dark')
    return 'dark';
  else 
    return 'light';
}

export {setTheme, keepTheme, changeTheme, getTheme}