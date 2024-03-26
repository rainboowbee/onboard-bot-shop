import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/cat_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: '<b>ку сладкий 👻</b>',
          description:
            "Тут ты можешь посмотреть описание своего персонажа, а так же затеститить приложение в телеге",
          button: 'Далее',
        },

        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/AnimatedSticker.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Как эта штука работает?',
          description:
            "Снизу есть кнопка которая переносит на следующую страницу (так же можно воспользоваться свайпом).",
          button: 'Погнали',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/sendi.mp4'),
            style: 'aspect-ratio: 810/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: '<b>Катя</b>',
          description:
            "Мама Катя как и сэнди всегда готова помочь. Не даст себя в обиду, а сразу даст пизды",
          button: 'Далее',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/patrik.mp4'),
            style: 'aspect-ratio: 810/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: '<b>Вика</b>',
          description:
            "Она может не привлекать внимание своей работой, но всегда выглядит потрясающе и предана своим друзьям. Люит пригубить пивка, а именно белого феникса",
            
          button: 'Далее',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/skvidvard.mp4'),
            style: 'aspect-ratio: 810/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: '<b>Алина</b>',
          description:
            "С ее творческими наклонностями и преданностью друзьям, она может быть немного мрачноватой на первый взгляд, но она всегда готова удивить вас своим талантом и юмором",
            
          button: 'Далее',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/plankton.mp4'),
            style: 'aspect-ratio: 810/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: '<b>Маша</b>',
          description:
            "Маша, как и Планктон, иногда может забывать о других в своем стремлении к своим собственным целям. Но кто знает, может быть, она просто думает о следующем хитром плане, как стать еще лучше в фотографии",
            
          button: 'Далее',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/krabs.mp4'),
            style: 'aspect-ratio: 810/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: '<b>Саня</b>',
          description:
            "Саня - наш Мистер Крабс в жизни. Он всегда в движении, обладает острым умом и обожает свою машину так же, как и Мистер Крабс обожает свои доллары!",
            
          button: 'Далее',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/GsaH.mp4'),
            style: 'aspect-ratio: 480/360',
          },
          shape: 'rounded',
          pagination: 'count',
          title: '<b>Ваня</b>',
          description:
            "Ваня - наша версия Гари в общении. Несмотря на молчаливость, у него всегда есть что рассказать и обсудить. Может быть, он просто ждет правильного времени, чтобы выразить свои мудрые мысли?",
            
          button: 'Далее',
        },

      ],
    },


    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
