document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Effect for Sections
    gsap.utils.toArray(".parallax").forEach(section => {
        gsap.to(section, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Fade-in Effect on Scroll
    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Additional Fade-in Effect for .service-box
    gsap.utils.toArray(".service-box").forEach(box => {
        gsap.from(box, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2, // Each box appears slightly after the previous one
            scrollTrigger: {
                trigger: box,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Floating Effect for Service Icons
    gsap.utils.toArray(".icon img").forEach(icon => {
        gsap.to(icon, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut"
        });
    });
});


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".hero", 
    { width: "100px", height: "100px", opacity: 0 }, 
    { 
        width: "100vw", height: "100vh", 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out", 
        scrollTrigger: {
            trigger: "#contact",
            start: "top 60%", 
            end: "bottom 40%",
            scrub: 1, 
        }
    }
);


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".testimonial").forEach((testimonial, index) => {
    gsap.from(testimonial, {
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200, // Left items slide from left, right items from right
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: testimonial,
            start: "top 80%",  // Animation starts when 80% of the testimonial is in view
            end: "top 60%",
            scrub: true, // Smooth animation as user scrolls
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const trackA = document.querySelector('.track-a');
    const trackB = document.querySelector('.track-b');

    function restartAnimation(element, animationName) {
        element.style.animation = 'none';
        void element.offsetWidth; // Trigger reflow to reset animation
        element.style.animation = `${animationName} 20s linear infinite`; // Slowed down to 30s
    }

    trackA.addEventListener('animationiteration', () => {
        restartAnimation(trackA, 'scroll-left-footer');
    });

    trackB.addEventListener('animationiteration', () => {
        restartAnimation(trackB, 'scroll-right-footer');
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.getElementById("theme-toggle");
//     const icon = document.getElementById("theme-icon");

//     // Load stored theme preference
//     if (localStorage.getItem("theme") === "dark") {
//         document.body.classList.add("dark-mode");
//         icon.classList.replace("fa-moon", "fa-sun");
//     }

//     toggleBtn.addEventListener("click", () => {
//         document.body.classList.toggle("dark-mode");
//         if (document.body.classList.contains("dark-mode")) {
//             icon.classList.replace("fa-moon", "fa-sun");
//             localStorage.setItem("theme", "dark");
//         } else {
//             icon.classList.replace("fa-sun", "fa-moon");
//             localStorage.setItem("theme", "light");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.getElementById("theme-toggle");

//     toggleBtn.addEventListener("click", () => {
//         document.querySelectorAll(".col-md-6").forEach((element) => {
//             if (document.body.classList.contains("dark-mode")) {
//                 element.classList.replace("bg-black", "bg-white");
//             } else {
//                 element.classList.replace("bg-white", "bg-black");
//             }
//         });
//     });
// });

//     document.addEventListener("DOMContentLoaded", function () {
//     let counters = document.querySelectorAll(".counter");
//     let statsSection = document.querySelector(".stats-section");
//     let observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     counters.forEach((counter) => {
//                         let target = +counter.getAttribute("data-target");
//                         let start = 0;
//                         let increment = target / 100;
//                         let speed = 30; // Speed of counting
                        
//                         let updateCounter = () => {
//                             let current = +counter.innerText;
//                             if (current < target) {
//                                 counter.innerText = Math.ceil(current + increment);
//                                 setTimeout(updateCounter, speed);
//                             } else {
//                                 counter.innerText = target;
//                             }
//                         };
                        
//                         updateCounter();
//                     });
//                     observer.disconnect(); // Run only once
//                 }
//             });
//         },
//         { threshold: 0.5 }
//     );
//     observer.observe(statsSection);
// });


function openModal() {
    document.getElementById("calculatorModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("calculatorModal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("calculatorModal");
    if (event.target === modal) {
        closeModal();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Effect for Sections
    gsap.utils.toArray(".parallax").forEach(section => {
        gsap.to(section, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Fade-in Effect on Scroll
    gsap.utils.toArray(".section").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Additional Fade-in Effect for .service-box
    gsap.utils.toArray(".service-box").forEach(box => {
        gsap.from(box, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2, // Each box appears slightly after the previous one
            scrollTrigger: {
                trigger: box,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Floating Effect for Service Icons
    gsap.utils.toArray(".icon img").forEach(icon => {
        gsap.to(icon, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut"
        });
    });

    // Hero Section Animation
    gsap.fromTo(".hero", 
        { width: "100px", height: "100px", opacity: 0 }, 
        { 
            width: "100vw", height: "100vh", 
            opacity: 1, 
            duration: 2, 
            ease: "power2.out", 
            scrollTrigger: {
                trigger: "#contact",
                start: "top 60%", 
                end: "bottom 40%",
                scrub: 1, 
            }
        }
    );

    // Testimonial Animation
    gsap.utils.toArray(".testimonial").forEach((testimonial, index) => {
        gsap.from(testimonial, {
            opacity: 0,
            x: index % 2 === 0 ? -200 : 200, // Left items slide from left, right items from right
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: testimonial,
                start: "top 80%",  // Animation starts when 80% of the testimonial is in view
                end: "top 60%",
                scrub: true, // Smooth animation as user scrolls
            }
        });
    });

    // Footer Animation for Tracks A and B
    const trackA = document.querySelector('.track-a');
    const trackB = document.querySelector('.track-b');

    function restartAnimation(element, animationName) {
        element.style.animation = 'none';
        void element.offsetWidth; // Trigger reflow to reset animation
        element.style.animation = `${animationName} 20s linear infinite`; // Slowed down to 30s
    }

    trackA.addEventListener('animationiteration', () => {
        restartAnimation(trackA, 'scroll-left-footer');
    });

    trackB.addEventListener('animationiteration', () => {
        restartAnimation(trackB, 'scroll-right-footer');
    });

    // Theme Toggle Functionality
    // const toggleBtn = document.getElementById("theme-toggle");
    // const icon = document.getElementById("theme-icon");

    // // Load stored theme preference
    // if (localStorage.getItem("theme") === "dark") {
    //     document.body.classList.add("dark-mode");
    //     icon.classList.replace("fa-moon", "fa-sun");
    // }

    // toggleBtn.addEventListener("click", () => {
    //     document.body.classList.toggle("dark-mode");
    //     if (document.body.classList.contains("dark-mode")) {
    //         icon.classList.replace("fa-moon", "fa-sun");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         icon.classList.replace("fa-sun", "fa-moon");
    //         localStorage.setItem("theme", "light");
    //     }
    // });

    // Toggle Dark Mode on Elements
    // toggleBtn.addEventListener("click", () => {
    //     document.querySelectorAll(".col-md-6").forEach((element) => {
    //         if (document.body.classList.contains("dark-mode")) {
    //             element.classList.replace("bg-black", "bg-white");
    //         } else {
    //             element.classList.replace("bg-white", "bg-black");
    //         }
    //     });
    // });

    // Modal Open/Close Logic (Uncomment this block to use modal)
    // function openModal() {
    //     document.getElementById("calculatorModal").style.display = "flex";
    // }

    // function closeModal() {
    //     document.getElementById("calculatorModal").style.display = "none";
    // }

    // Close modal when clicking outside the content
    window.onclick = function(event) {
        const modal = document.getElementById("calculatorModal");
        if (event.target === modal) {
            closeModal();
        }
    };
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Register GSAP Plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Ensure elements exist before running scripts
//     const toggleBtn = document.getElementById("theme-toggle");
//     const icon = document.getElementById("theme-icon");
//     const trackA = document.querySelector('.track-a');
//     const trackB = document.querySelector('.track-b');
    
//     // Parallax Effect for Sections
//     gsap.utils.toArray(".parallax").forEach(section => {
//         gsap.to(section, {
//             yPercent: -50,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true
//             }
//         });
//     });

//     // Fade-in Effect on Scroll
//     gsap.utils.toArray(".section").forEach(section => {
//         gsap.from(section, {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 80%",
//                 toggleActions: "play none none reverse"
//             }
//         });
//     });

//     // Fade-in Effect for .service-box
//     gsap.utils.toArray(".service-box").forEach(box => {
//         gsap.from(box, {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             stagger: 0.2, // Each box appears slightly after the previous one
//             scrollTrigger: {
//                 trigger: box,
//                 start: "top 90%",
//                 toggleActions: "play none none reverse"
//             }
//         });
//     });

//     // Floating Effect for Service Icons
//     gsap.utils.toArray(".icon img").forEach(icon => {
//         gsap.to(icon, {
//             y: -10,
//             repeat: -1,
//             yoyo: true,
//             duration: 1.5,
//             ease: "power1.inOut"
//         });
//     });

//     // Hero Section Animation
//     gsap.fromTo(".hero", 
//         { width: "100px", height: "100px", opacity: 0 }, 
//         { 
//             width: "100vw", height: "100vh", 
//             opacity: 1, 
//             duration: 2, 
//             ease: "power2.out", 
//             scrollTrigger: {
//                 trigger: "#contact",
//                 start: "top 60%", 
//                 end: "bottom 40%",
//                 scrub: 1, 
//             }
//         }
//     );

//     // Testimonial Animation
//     gsap.utils.toArray(".testimonial").forEach((testimonial, index) => {
//         gsap.from(testimonial, {
//             opacity: 0,
//             x: index % 2 === 0 ? -200 : 200, // Left items slide from left, right items from right
//             duration: 1.5,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: testimonial,
//                 start: "top 80%",  // Animation starts when 80% of the testimonial is in view
//                 end: "top 60%",
//                 scrub: true, // Smooth animation as user scrolls
//             }
//         });
//     });

//     // Footer Animation for Tracks A and B
//     if (trackA && trackB) {
//         function restartAnimation(element, animationName) {
//             element.style.animation = 'none';
//             void element.offsetWidth; // Trigger reflow to reset animation
//             element.style.animation = `${animationName} 20s linear infinite`; // Slowed down to 30s
//         }

//         trackA.addEventListener('animationiteration', () => {
//             restartAnimation(trackA, 'scroll-left-footer');
//         });

//         trackB.addEventListener('animationiteration', () => {
//             restartAnimation(trackB, 'scroll-right-footer');
//         });
//     }

//     // Theme Toggle Functionality
//     if (toggleBtn && icon) {
//         // Load stored theme preference
//         if (localStorage.getItem("theme") === "dark") {
//             document.body.classList.add("dark-mode");
//             icon.classList.replace("fa-moon", "fa-sun");
//         }

//         toggleBtn.addEventListener("click", () => {
//             document.body.classList.toggle("dark-mode");
//             if (document.body.classList.contains("dark-mode")) {
//                 icon.classList.replace("fa-moon", "fa-sun");
//                 localStorage.setItem("theme", "dark");
//             } else {
//                 icon.classList.replace("fa-sun", "fa-moon");
//                 localStorage.setItem("theme", "light");
//             }
//         });

//         // Toggle Dark Mode on Elements
//         toggleBtn.addEventListener("click", () => {
//             document.querySelectorAll(".col-md-6").forEach((element) => {
//                 if (document.body.classList.contains("dark-mode")) {
//                     element.classList.replace("bg-black", "bg-white");
//                 } else {
//                     element.classList.replace("bg-white", "bg-black");
//                 }
//             });
//         });
//     }
// });
