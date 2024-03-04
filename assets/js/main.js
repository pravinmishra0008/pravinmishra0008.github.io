/**
* Template Name: Arsha
* Updated: Jan 29 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)





  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });


}

)()

  var termsCond ='<h5>Terms and Conditions</h5>';                                                     
  termsCond +='<p>';
  termsCond +='  Welcome to Media Clout ("Page"). Please read these Terms and Conditions ("Terms") carefully before using the Page operated by Media Clout ("us", "we", or "our").';
  termsCond +='  Your access to and use of the Page is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Page.';
  termsCond +='  By accessing or using the Page you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Page.';
  termsCond +='</p>';
  termsCond +='';
  termsCond +='<h6>Content</h6>';
  termsCond +='<p>';
  termsCond +='  Our Page allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Page, including its legality, reliability, and appropriateness.';
  termsCond +='  By posting Content on or through the Page, you represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Page does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.';
  termsCond +='  You retain any and all of your rights to any Content you submit, post or display on or through the Page and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Page. However, by posting Content using the Page you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Page. You agree that this license includes the right for us to make your Content available to other users of the Page, who may also use your Content subject to these Terms.';
  termsCond +='</p>';
  termsCond +='';
  termsCond +='<h6>Accounts</h6>';
  termsCond +='<p>';
  termsCond +='  When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Page.';
  termsCond +='  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Page or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.';
  termsCond +='</p>';
  termsCond +='<h6>Links To Other Web Sites</h6>';
  termsCond +='<p>';
  termsCond +='  Our Page may contain links to third-party web sites or services that are not owned or controlled by Media Clout.';
  termsCond +='  Media Clout has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Media Clout shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.';
  termsCond +='  We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.';
  termsCond +='</p>';
  termsCond +='<h6>Termination</h6>';
  termsCond +='<p>';
  termsCond +='  We may terminate or suspend access to our Page immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.';
  termsCond +='  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.';
  termsCond +='  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.';
  termsCond +='  Upon termination, your right to use the Page will immediately cease. If you wish to terminate your account, you may simply discontinue using the Page.';
  termsCond +='</p>';
  termsCond +='';
  termsCond +='<h6>Governing Law</h6>';
  termsCond +='<p>';
  termsCond +='  These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.';
  termsCond +='  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Page, and supersede and replace any prior agreements we might have had between us regarding the Page.';
  termsCond +='</p>';
  termsCond +='';
  termsCond +='<h6>Changes</h6>';
  termsCond +='<p>';
  termsCond +='  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.';
  termsCond +='  By continuing to access or use our Page after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Page.';
  termsCond +='</p>';
  termsCond +='  ';
  termsCond +='<h6>Contact Us</h6>';
  termsCond +='<p>';
  termsCond +='  If you have any questions about these Terms, please contact us.';
  termsCond +='</p>';

  // Add the Terms and Conditions content to the modal
  document.getElementById("termsAndConditions").innerHTML = termsCond;
  
// // Clear Login form on close
// $(document).ready(function() {
//   // When the modal is hidden, clear the form fields
//   $('#loginModal').on('hidden.bs.modal', function () {
//       $('#loginForm')[0].reset();
//   });
// });

// // Clear Free Trial form on close
// $(document).ready(function() {
//   // When the modal is hidden, clear the form fields
//   $('#freeTrialModal').on('hidden.bs.modal', function () {
//       $('#freeTrialForm')[0].reset();
//   });
// });


// $(document).ready(function() {
//   $('#freeTrialModal').on('hidden.bs.modal', function () {
//       $('#freeTrialForm')[0].reset();
//   });
// });