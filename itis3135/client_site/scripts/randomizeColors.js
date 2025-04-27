const originalColors = {
    bodyBackgroundColor: '#f7f7f7',
    bodyTextColor: '#333',
    headerBackgroundColor: '#0b3954',
    headerTextColor: '#fff',
    buttonBackgroundColor: '#e0ff4f',
    topNavBackgroundColor: '#087e8b',
    footerBackgroundColor: '#0b3954',
    footerTextColor: '#fff',
    sidebarRightBackgroundColor: 'e0ff4f'
  };
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function randomizeColors() {
    const randomBodyBackgroundColor = getRandomColor();
    const randomBodyTextColor = getRandomColor();
    const randomHeaderBackgroundColor = getRandomColor();
    const randomHeaderTextColor = getRandomColor();
    const randomButtonBackgroundColor = getRandomColor();
    const randomTopNavBackgroundColor = getRandomColor();
    const randomFooterBackgroundColor = getRandomColor();
    const randomFooterTextColor = getRandomColor();
  
    document.body.style.backgroundColor = randomBodyBackgroundColor;
    document.body.style.color = randomBodyTextColor;
  
    const header = document.querySelector('header');
    header.style.backgroundColor = randomHeaderBackgroundColor;
    header.style.color = randomHeaderTextColor;
  
    const topNav = document.querySelector('.top-nav');
    topNav.style.backgroundColor = randomTopNavBackgroundColor;
  
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = randomFooterBackgroundColor;
    footer.style.color = randomFooterTextColor;
  }
  
  function resetColors() {
    document.body.style.backgroundColor = originalColors.bodyBackgroundColor;
    document.body.style.color = originalColors.bodyTextColor;
  
    const header = document.querySelector('header');
    if (header) {
      header.style.backgroundColor = originalColors.headerBackgroundColor;
      header.style.color = originalColors.headerTextColor;
    }
  
    const topNav = document.querySelector('.top-nav');
    if (topNav) {
      topNav.style.backgroundColor = originalColors.topNavBackgroundColor;
    }
  
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.backgroundColor = originalColors.footerBackgroundColor;
      footer.style.color = originalColors.footerTextColor;
    }
  
    const sidebar = document.querySelector('.sidebar-left');
    if (sidebar) {
      sidebar.style.backgroundColor = originalColors.bodyBackgroundColor; 
    }

    const sidebarRight = document.querySelector('.sidebar-right');
    if (sidebarRight) {
      sidebarRight.style.backgroundColor = originalColors.bodyBackgroundColor; 
    }

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.style.backgroundColor = originalColors.bodyBackgroundColor;
    }
  
    document.getElementById('headerBg').value = originalColors.headerBackgroundColor;
    document.getElementById('headerText').value = originalColors.headerTextColor;
    document.getElementById('navBg').value = originalColors.topNavBackgroundColor;
    document.getElementById('mainBg').value = originalColors.bodyBackgroundColor;
    document.getElementById('sidebarBg').value = originalColors.bodyBackgroundColor; 
    document.getElementById('footerBg').value = originalColors.footerBackgroundColor;
    document.getElementById('textColor').value = originalColors.bodyTextColor;
  }
  
  
  
  document.getElementById('randomize-btn').addEventListener('click', randomizeColors);
  document.getElementById('reset-btn').addEventListener('click', resetColors);
  