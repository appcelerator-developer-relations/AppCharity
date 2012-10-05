Views.TopBanner = function() {
  var self = {
    view: UI.createView({
      style_id: 'top_banner',
      top: 0,
      width: 320,
      height: 100,
      backgroundImage: '/images/backgrounds/logo_donate_bar_mobile_bg.png'
    }),
    
    blurb: UI.createLabel({
      text: '"Doctors Without Borders/Médecins Sans Frontières (MSF) is a medical humanitarian organization assisting people in nearly 70 countries."',
      top: 25,
      font: {fontWeight: 'normal', fontFamily: 'Georgia', fontSize: 15, fontStyle: 'italic'},
      color: "#707070",
      textAlign: "center",
      width: "50%"
    }),
    
    logo: UI.createImageView({
      left: "2%",
      width: 165,
      height: 50,
      image: '/images/top_logo.png'
    }),
    
    donate_button: UI.createButton({
      backgroundImage: '/images/buttons/donate_button.png',
      backgroundSelectedImage: '/images/buttons/donate_button_p.png',
      width: 83,
      height: 38,
      right: "5%"
    })
  };
 
  self.view.add(self.logo);
  self.view.add(self.donate_button);
  if(isIPad) self.view.add(self.blurb);
  
  Controllers.TopBanner(self);

  return self;
}; 