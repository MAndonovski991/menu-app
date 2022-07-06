const items = [
    {
      image: {
          position: "image-right",
          alt: "Breakfast",
          src: "/images/breakfast1.jpg"
      },
      description_box: {
        style: {
          title: {
            color: "red",
          },
          display: "",
          description_color: "",
          price_color: "",
          alergy_color: ""
        },
        position: "none",
        value: {
          title: "",
          ingridients: "",
          alergies: "",
          price: "",
          currency: ""
        }
    }
    },
    {
      image: {
          position: "image-left",
          alt: "Breakfast",
          src: "/images/breakfast2.jpg"
      },
      description_box: {
        style: {
          title: {
            color: "#9F5543",
          },
          display: "",
          description_color: "#4B3326",
          price_color: "#4B3326",
          alergy_color: "#9F5543"
        },
        position: "top-right",
        value: {
          title: "Breakfast",
          ingridients: "Сирење, маслиново, пченично брашно, путер, млеко, сол, шеќер, јајца",
          alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
          price: "370",
          currency: "den"
        }
  
    }
    },
    {
      image: {
          position: "image-center",
          alt: "Pancake",
          src: "/images/pancake.jpg"
      },
      description_box: {
        style: {
          title: {
            color: "#5E3828",
          },
          display: "",
          description_color: "#4B3326",
          price_color: "#5E3828",
          alergy_color: "#5E3828"
        },
        position: "top-right",
        value: {
          title: "Pancake",
          ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
          alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
          price: "230",
          currency: "den"
        }
  
    }
    },
    {
      image: {
          position: "image-center",
          alt: "fruit-mini-pancake",
          src: "/images/fruit-mini-pancake.jpg"
      },
      description_box: {
        style: {
          title: {
            color: "#BE763B",
          },
          display: "",
          description_color: "#4B3326",
          price_color: "#BE763B",
          alergy_color: "#BE763B"
        },
        position: "top-right",
        value: {
          title: "Fruit Mini Pancake",
          ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
          alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
          price: "240",
          currency: "den"
        }
    }
    
    },
    {
        image: {
            position: "image-center",
            alt: "Caramel crepe",
            src: "/images/caramel-crepe.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "top-left",
          value: {
            title: "Caramel Crepe",
            ingridients: "Млечно - Бело - Темно чоколадо, карамел, банана, јагода, пченично брашно, сончогледово масло, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "260",
            currency: "den"
          }
      }
      
      },
      {
        image: {
            position: "image-center",
            alt: "Stick waffle",
            src: "/images/stick-waffle.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#ce5252",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#ce5252",
            alergy_color: "#ce5252"
          },
          position: "bottom-left",
          value: {
            title: "Stick Waffle",
            ingridients: "Млечно - Бело - Темно чоколадо, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "180",
            currency: "den"
          }
      }
      
      },
      {
        image: {
            position: "image-center",
            alt: "Roma",
            src: "/images/roma.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "top-left",
          value: {
            title: "Roma",
            ingridients: "Прекрасна средба на разладена Јагода, банана, киви, со стопено 100% оригинално млечно/темно/бело чоколадо во домашно подготвен корнет",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "140",
            currency: "den"
          }
      }
      
      },
      {
        image: {
            position: "image-center",
            alt: "Shaduman",
            src: "/images/shaduman.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#c92a2a",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#c92a2a",
            alergy_color: "#c92a2a"
          },
          position: "bottom-left",
          value: {
            title: "Shaduman",
            ingridients: "Млечно чокочадо, Јагода, Фрактура на креп",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "220",
            currency: "den"
          }
      }
      
      },
      {
        image: {
            position: "image-center",
            alt: "Bundle crepe",
            src: "/images/bundle-crepe.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "##BE763B"
          },
          position: "top-left",
          value: {
            title: "Bundle Crepe",
            ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, пченично брашно, сончогледово масло, млеко, квасец, сол, шеќер, јајца, ванилин, вода, лимон, сирење.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "230",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Victoriia",
            src: "/images/victoriia.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#c92a2a",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#c92a2a",
            alergy_color: "#c92a2a"
          },
          position: "bottom-left",
          value: {
            title: "Victoriia",
            ingridients: "Бело - Темно чоколадо, јагода, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Magnific crepe",
            src: "/images/magnific-crepe.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "bottom-left",
          value: {
            title: "Magnific Crepe",
            ingridients: "Млечно - Бело - Темно чоколадо, какао, банана, јагода, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "250",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Burger pancake",
            src: "/images/burger-pancake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "top-right",
          value: {
            title: "Burger Pancake",
            ingridients: "Млечно - Бело - Темно чоколадо, карамел, банана, јагода, киви, ананас, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода, лимон, сирење.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "250",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Fettucine",
            src: "/images/fettucine.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "top-left",
          value: {
            title: "Fettucine",
            ingridients: "Млечно - Бело - Темно чоколадо, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода, сладолед.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "250",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "brownie",
            src: "/images/brownie.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "bottom-left",
          value: {
            title: "Brownie",
            ingridients: "Темно чоколадо, какао, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "200",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Paris brownie",
            src: "/images/paris-brownie.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "bottom-left",
          value: {
            title: "Paris Brownie",
            ingridients: "Бело - Темно - Млечно чоколадо, какао, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "210",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Cookie pan",
            src: "/images/cookie-pan.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "##5E3828"
          },
          position: "top-left",
          value: {
            title: "Cookie Pan",
            ingridients: "Млечно - Бело - Темно чоколадо, какао, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "270",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Sushi crepe",
            src: "/images/sushi-crepe.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "top-left",
          value: {
            title: "Sushi Crepe",
            ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, пченично брашно, сончогледово масло, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "220",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Mini pancake",
            src: "/images/mini-pancake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#372521d",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#372521d",
            alergy_color: "#372521d"
          },
          position: "top-right",
          value: {
            title: "Mini Pancake",
            ingridients: "Млечно - Бело - Темно чоколадо, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "churros",
            src: "/images/churros.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#372521d",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#372521d",
            alergy_color: "#372521d"
          },
          position: "top-left",
          value: {
            title: "Churros",
            ingridients: "Млечно - Бело - Темно чоколадо, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "210",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Crepe",
            src: "/images/crepe.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#372521d",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#372521d",
            alergy_color: "#372521d"
          },
          position: "bottom-right",
          value: {
            title: "Crepe",
            ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, пченично брашно, сончогледово масло, млеко, квасец, сол, шеќер, јајца, ванилин, вода, лимон, сирење.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "280",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Plate Waffle",
            src: "/images/plate-waffle.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#c92a2a",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#c92a2a",
            alergy_color: "#c92a2a"
          },
          position: "bottom-right",
          value: {
            title: "Plate Waffle",
            ingridients: "Млечно чоколадо, банана, јагода, фрактура на креп, кикирики.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "170",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Crepe cake",
            src: "/images/crepe-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#372521d",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#372521d",
            alergy_color: "#372521d"
          },
          position: "bottom-right",
          value: {
            title: "Crepe Cake",
            ingridients: "Темно чоколадо,  пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Mini strawberry cake",
            src: "/images/mini-strawberry-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#c92a2a",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#c92a2a",
            alergy_color: "#c92a2a"
          },
          position: "top-left",
          value: {
            title: "Mini strawberry cake",
            ingridients: "Брауни, бел фил и јагода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Mini chocolate cake",
            src: "/images/mini-chocolate-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#372521d",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#372521d",
            alergy_color: "#372521d"
          },
          position: "top-right",
          value: {
            title: "Mini chocolate cake",
            ingridients: "Брауни, чоколаден фил, чоколада.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
      image: {
          position: "image-center",
          alt: "Oreo Magnolia",
          src: "/images/oreo-magnolia.jpg"
      },
      description_box: {
        style: {
          title: {
            color: "#c92a2a"
          },
          description_color: "#4B3326",
          price_color: "#c92a2a",
          alergy_color: "#c92a2a"
        },
        position: "bottom-full",
        value: {
          title1: "Oreo",
          ingridients1: "Црно - Бело чоколадо, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
          title2: "Magnolia",
          ingridients2: "Бело чоколадо, јагода, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
          alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
          price: "170",
          currency: "den"
        }
    }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/white-chocolate-brownie.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "bottom-right",
          value: {
            title: "White Chocolate Brownie",
            ingridients: "Темно и бело чоколадо, какао, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "220",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/bubble-waffle.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "top-left",
          value: {
            title: "Bubble Waffle",
            ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, киви, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "230",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/belgium-waffle.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "top-right",
          value: {
            title: "Belgium Waffle",
            ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, киви, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "240",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/triangle.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "top-left",
          value: {
            title: "Triangle",
            ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, киви, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "230",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/brownie-crepe.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "top-right",
          value: {
            title: "Brownie Crepe",
            ingridients: "Млечно - Бело - Темно чоколадо, какао, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "180",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/strawbery-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "r#c92a2a",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "bottom-left",
          value: {
            title: "Strawberry cake",
            ingridients: "Брауни, бел фил и јагода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "870",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/chocolate-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "bottom-right",
          value: {
            title: "Chocolate cake",
            ingridients: "Брауни, чоколаден фил, чоколада.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "870",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/pistachio-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#BE763B",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#BE763B",
            alergy_color: "#BE763B"
          },
          position: "bottom-left",
          value: {
            title: "Pistachio cake",
            ingridients: "Брауни, бел фил, крема од фстак, фстак.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/chokolate-cake.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "top-right",
          value: {
            title: "Chokolate cake",
            ingridients: "Тесто софстак, чоколаден фил, чоколада.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "190",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "TEST",
            src: "/images/fondue.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#5E3828",
            },
            display: "",
            description_color: "#4B3326",
            price_color: "#5E3828",
            alergy_color: "#5E3828"
          },
          position: "bottom-left",
          value: {
            title: "Fondue",
            ingridients: "Млечно - Бело - Темно - чоколадо, банана, јагода, киви, пченично брашно, млеко, квасец, сол, шеќер, ванилин, вода.",
            alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
            price: "210",
            currency: "den"
          }
      }
    },
    {
      image: {
          position: "image-center",
          alt: "TEST",
          src: "/images/hawai-arizona-tokyo.jpg"
      },
      description_box: {
        style: {
          title: {
            color: "#c92a2a",
          },
          display: "",
          description_color: "#4B3326",
          price_color: "#c92a2a",
          alergy_color: "#c92a2a"
        },
        position: "top-left-hawai-arizona",
        value: {
          title1: "Hawai",
          title2: "Arizona",
          title3: "Tokyo",
          ingridients: "Млечно - Бело - Темно чоколадо, банана, јагода, пченично брашно, путер, млеко, квасец, сол, шеќер, јајца, ванилин, вода.",
          alergies: "АЛЕРГЕН: Млеко, глутен, кикирики, јајца",
          price1: "160",
          price2: "160",
          price3: "170",
          currency: "den"
        }
    }
    },
    {
        image: {
            position: "image-center",
            alt: "Mini chocolate",
            src: "/images/mini-chocolate.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#6D4139",
            },
            display: "",
            description_color: "",
            price_color: "#6D4139",
            alergy_color: ""
          },
          position: "top-left",
          value: {
            title: "Mini chocolate",
            ingridients: "",
            alergies: "",
            price: "1 kg = 1600",
            currency: "den"
          }
      }
    },
    {
        image: {
            position: "image-center",
            alt: "Mini chocolate",
            src: "/images/mini-white-chocolate.jpg"
        },
        description_box: {
          style: {
            title: {
              color: "#6D4139",
            },
            display: "",
            description_color: "",
            price_color: "#6D4139",
            alergy_color: ""
          },
          position: "top-right",
          value: {
            title: "Mini chocolate",
            ingridients: "",
            alergies: "",
            price: "1 kg = 1600",
            currency: "den"
          }
      }
    },
    
]

export default items;