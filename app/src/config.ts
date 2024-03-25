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
            "Здесь ты можешь посмотреть характеристику каждого человека из нашей компании (на мой взгляд🤭)",
          button: 'Далее',
        },

        {
          media: {
            type: 'video',
            src: import('./assets/videos/aaa.mp4'),
            
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Videos',
          description:
            "Typically, video starts <b>automatically</b><br><br>However, on iOS, it will only autoplay upon any prior tap on the page ('Next' button doesn't count). If video doesn't autoplay, user will see preview and pretty animation, inviting them to tap to play the video",
          button: 'Next',
        },

        // form

        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'User fills in the form – the bot receives the data',
          form: [
            {
              id: 'checkbox_option_1',
              placeholder: 'Option 1',
              type: 'checkbox',
              correct: true,
            },
            {
              id: 'checkbox_option_2',
              placeholder: 'Option 2',
              type: 'checkbox',
              correct: false,
            },
            {
              id: 'checkbox_option_3',
              placeholder: 'Option 3',
              type: 'checkbox',
              correct: false,
            },
          ],
          button: 'Next',

          onClick: function() {
            const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
            checkboxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                if (checkbox.getAttribute('correct') === 'true') {
                  (checkbox.parentNode as HTMLElement)?.setAttribute('style', 'color: green');
                } else {
                  (checkbox.parentNode as HTMLElement)?.setAttribute('style', 'color: green');
                }
              }
            });
          },
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
