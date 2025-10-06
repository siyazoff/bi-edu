export function animateGsap() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".header", {
    y: -100,
    opacity: 0
  });

  gsap.to(".header", {
    duration: 1,
    y: 0,
    opacity: 1
  });

  gsap.set(".hero-op", {
    opacity: 0
  });

  gsap.to(".hero-op", {
    duration: 0.8,
    opacity: 1
  });

  gsap.set(".about-down", {
    opacity: 0,
    y: -200
  });

  gsap.to(".about-down", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".about-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".about-scale", {
    opacity: 0,
    scale: 0.6,
  });
  gsap.to(".about-scale", {
    duration: 0.8,
    opacity: 1,
    scale: 1,
    stagger: 0.1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".about-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".about-img", {
    opacity: 0,
    y: 100
  });
  gsap.to(".about-img", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "power.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".about-img",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".mission-up", {
    opacity: 0,
    y: 100
  });
  gsap.to(".mission-up", {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: "power.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".mission__wrap",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".mission-down", {
    opacity: 0,
    y: -200
  });

  gsap.to(".mission-down", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".mission__wrap",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".worth-down", {
    opacity: 0,
    y: -200
  });

  gsap.to(".worth-down", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".worth__wrap",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".worth-scale", {
    opacity: 0,
    scale: 0.6,
  });
  gsap.to(".worth-scale", {
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".worth__wrap",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".projects-down", {
    y: -200,
    opacity: 0
  });
  gsap.to(".projects-down", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".projects-trigger",
      start: "top bottom",
      end: "center",
      markers: false
    }
  });

  gsap.set(".pbox-left", {
    opacity: 0,
    x: -200
  });
  gsap.to(".pbox-left", {
    duration: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    stagger: 0.5,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".projects-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  // Projecr section - Right
  gsap.set(".pbox-right", {
    x: 200,
    opacity: 0,
  });
  gsap.to(".pbox-right", {
    duration: 1,
    x: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".projects-trigger",
      start: "top center",
      end: "center",
      marker: false
    }
  });

  gsap.set(".services-down", {
    y: -200,
    opacity: 0
  });
  gsap.to(".services-down", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".services-trigger",
      start: "top bottom",
      end: "center",
      markers: false
    }
  });

  if (window.innerWidth > 1024) {
    const targets = ".services__card .services__inner";
    gsap.set(targets, {
      rotationY: 0,
      transformStyle: "preserve-3d"
    });
    gsap.to(targets, {
      rotationY: 180,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: 0.1,
      repeat: 1,
      yoyo: true,
      onComplete() {
        gsap.set(targets, { clearProps: "transform" });
        document.querySelector(".services")?.classList.add("is-ready");
      },
      scrollTrigger: {
        trigger: ".services",
        start: "top 70%",
        once: true
      }
    });
  }

  else {
    gsap.set(".services__card", {
      y: 100,
      opacity: 0
    });
    gsap.to(".services__card", {
      duration: 0.8,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      stagger: 0.1,
      yoyo: true,
      scrollTrigger: {
        trigger: ".services-trigger",
        start: "top bottom",
        end: "center",
        markers: false
      }
    });
  }

  gsap.set(".feedback-down", {
    y: -200,
    opacity: 0
  });
  gsap.to(".feedback-down", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".feedback-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".feedback-up", {
    y: 100,
    opacity: 0
  });
  gsap.to(".feedback-up", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".feedback-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".feedback-form", {
    opacity: 0,
    scale: 0.8
  });
  gsap.to(".feedback-form", {
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".feedback-trigger",
      start: "top center",
      end: "bottom",
      markers: false
    }
  });

  gsap.set(".news-down", {
    y: -200,
    opacity: 0
  });
  gsap.to(".news-down", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".news-trigger",
      start: "top bottom",
      end: "center",
      markers: false
    }
  });

  gsap.set(".news-up", {
    y: 100,
    opacity: 0
  });
  gsap.to(".news-up", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".news-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".contacts-down", {
    y: -200,
    opacity: 0
  });
  gsap.to(".contacts-down", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    yoyo: true,
    scrollTrigger: {
      trigger: ".contacts-trigger",
      start: "top bottom",
      end: "center",
      markers: false
    }
  });

  gsap.set(".contacts-up", {
    y: 100,
    opacity: 0
  });
  gsap.to(".contacts-up", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.2,
    yoyo: true,
    scrollTrigger: {
      trigger: ".contacts-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  gsap.set(".vacancies-up", {
    y: 100,
    opacity: 0
  });
  gsap.to(".vacancies-up", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.2,
    yoyo: true,
    scrollTrigger: {
      trigger: ".vacancies-trigger",
      start: "top center",
      end: "center",
      markers: false
    }
  });

  const scrollTriggerConfig = {
    start: "top bottom",
    end: "bottom 20%",
  };

  gsap.utils.toArray(".up").forEach(element => {
    gsap.fromTo(element,
      { yPercent: 60, opacity: 0 },
      {
        duration: 1.2,
        opacity: 1,
        yPercent: 0,
        ease: "power2.out",
        scrollTrigger: { trigger: element, ...scrollTriggerConfig }
      }
    );
  });
}