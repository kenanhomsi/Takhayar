//for product elements in main page
let Product_section_body= document.querySelector('.Product-section_body');

let Products=[
    {
        id:1,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'1ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:2,
        evaluationNumber:62,
        ProductDetils:"ssيعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'11احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:2,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'2ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:3,
        evaluationNumber:62,
        ProductDetils:"يعد هاffتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:3,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'3ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:5,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPgghone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:4,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'4ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد bbايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:5,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'5ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد .,.ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد m,.ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:6,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'6ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ;;ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد;; ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:7,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'7ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايggمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد اggيمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:8,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'8ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد qqايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد asdasdايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:9,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'9ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمدff ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:10,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'10ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'asdsad ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمدasdsa ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمدasds ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    }, {
        id:11,
        ProductImageUrl:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
        soundImageUrl:'/images/Sound.png',
        numberOfCustomer:20,
        ProductTilte:'11ابل هاتف ايفون برو ماكس',
        newPrcie:200,
        oldPrice:150,
        numberOfStars:4,
        evaluationNumber:62,
        ProductDetils:"يعد هاتف الـ iPhone 14 Pro Max هو الهاتف الأغلى من شركة أبل ولقد تم تطويره بشكل كبير عن الجيل السابق iPhone 13 Pro Max حيث يأتي بشاشة مختلف مع دعم خاصية الـ Always On display لتستطيع معرفة الاشعارات بشكل لحظي وسريع مع تحسين الكاميرات بشكل كبير واستخدام معالج أقوى .. فدعونا نتعرف على بقية المواصفات وهل يستحق الهاتف الشراء أم على النحو التالي فيما يل",
        CustomerReviews:[
            {
                name:'احمدss ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ssايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            },
            {
                name:'احمد ايمن',
                date:'11/8/2023',
                text:'نا مسرور جدًا بشرائي لهذا المنتج! جودته عالية وأداؤه مذهل. أوصي به بشدة لأي شخص يبحث عن منتج ممتاز.',
                review:5,
            }
        ]
    },
]
/*this code for loop on all Products and make new one and append it to the main screen */
for(let x=0;x<Products.length;x++){
            let ProdcutDiv=document.createElement('div');
        ProdcutDiv.setAttribute('class','product');
        let ImagesDiv=document.createElement('div');
        ImagesDiv.setAttribute('class','image');
        let mainIMage=document.createElement('img');
        mainIMage.setAttribute('src',Products[x].ProductImageUrl);
        mainIMage.setAttribute('alt',`mainImage`);
        let soundIMage=document.createElement('img');
        soundIMage.setAttribute('src',Products[x].soundImageUrl);
        soundIMage.setAttribute('alt',`SoundImage`);
        soundIMage.setAttribute('class','sound_img');
        ImagesDiv.appendChild(mainIMage);
        ImagesDiv.appendChild(soundIMage);
        ProdcutDiv.appendChild(ImagesDiv);

        let TextDiv=document.createElement('div');
        TextDiv.setAttribute('class','text');

        let notediv=document.createElement('div');
        notediv.setAttribute('class','note');

        let noteIMage=document.createElement('img');
        noteIMage.setAttribute('src','/images/hotspot.jpg');
        noteIMage.setAttribute('alt',`hotspot`);
        notediv.innerHTML=`${Products[x].numberOfCustomer} عميل يطلبون هذا المنتج الان ` 
        notediv.appendChild(noteIMage);
        TextDiv.appendChild(notediv);
        let titlediv=document.createElement('div');
        titlediv.setAttribute('class','title')
        titlediv.innerText=Products[x].ProductTilte;
        TextDiv.appendChild(titlediv);

        let Pricediv=document.createElement('div');
        Pricediv.setAttribute('class','price');
        Pricediv.setAttribute('dir','rtl');
        let newPricediv=document.createElement('div');
        newPricediv.setAttribute('class','current_price');
        newPricediv.innerText=`${Products[x].newPrcie} ريال`;
        let oldPricediv=document.createElement('div');
        oldPricediv.setAttribute('class','old_price');
        oldPricediv.innerText=`${Products[x].oldPrice} ريال`;
        Pricediv.appendChild(newPricediv);
        Pricediv.appendChild(oldPricediv);
        TextDiv.appendChild(Pricediv);

        let evaluationdiv=document.createElement('div');
        evaluationdiv.setAttribute('class','evaluation');
        let starsdiv=document.createElement('div');
        starsdiv.setAttribute('class','stars');
        starsdiv.setAttribute('dir','rtl');
        let starblue=document.createElement('i');
        starblue.setAttribute('class','fa-solid fa-star');
        let starblue1=document.createElement('i');
        starblue1.setAttribute('class','fa-solid fa-star');
        let starblue2=document.createElement('i');
        starblue2.setAttribute('class','fa-solid fa-star');
        let starblue3=document.createElement('i');
        starblue3.setAttribute('class','fa-solid fa-star');
        let starblue4=document.createElement('i');
        starblue4.setAttribute('class','fa-solid fa-star');
        let starblueArray=[starblue,starblue1,starblue2,starblue3,starblue4];
        let starwhite=document.createElement('i');
        starwhite.setAttribute('class','fa-regular fa-star');
        let starwhite1=document.createElement('i');
        starwhite1.setAttribute('class','fa-regular fa-star');
        let starwhite2=document.createElement('i');
        starwhite2.setAttribute('class','fa-regular fa-star');
        let starwhite3=document.createElement('i');
        starwhite3.setAttribute('class','fa-regular fa-star');
        let starwhite4=document.createElement('i');
        starwhite4.setAttribute('class','fa-regular fa-star');
        let starWhiteArray=[starwhite,starwhite1,starwhite2,starwhite3,starwhite4];
            for(let y=0;y < Products[x].numberOfStars;y++){
                starsdiv.appendChild(starblueArray[y]);
            }
            for(let g=0;g <(5 - Products[x].numberOfStars);g++){
                starsdiv.appendChild(starWhiteArray[g]);
            }
        evaluationdiv.appendChild(starsdiv);


        let evaNmuberdiv=document.createElement('div');
        evaNmuberdiv.setAttribute('class','evaluation_number');
        evaNmuberdiv.setAttribute('id',Products[x].id);

        evaNmuberdiv.innerText=`(${Products[x].evaluationNumber} تقييم)`;
        evaluationdiv.appendChild(evaNmuberdiv);
        let evaA=document.createElement('a');
        evaA.setAttribute('href','#');
        evaA.innerText='تفصيل المنتج';
        evaluationdiv.appendChild(evaA);
        TextDiv.appendChild(evaluationdiv);


        let inputpricediv=document.createElement('div');
        inputpricediv.setAttribute('class','input_price');
        inputpricediv.setAttribute('dir','rtl');

        let inputPriceInput=document.createElement('input');
        inputPriceInput.setAttribute('type','number')
        inputPriceInput.setAttribute('placeholder','سعر مناسب لك')
        inputpricediv.appendChild(inputPriceInput);
        let inputpriceBtn=document.createElement('button');
        inputpriceBtn.innerText='ارسال';
        inputpricediv.appendChild(inputpriceBtn);
        TextDiv.appendChild(inputpricediv);

        ProdcutDiv.appendChild(TextDiv);


        Product_section_body.appendChild(ProdcutDiv);
}
/**this code for coustomer reviews */
let evaluation_number_btn=document.querySelectorAll('.evaluation_number');
for(let xx=0;xx<evaluation_number_btn.length;xx++)
{
    evaluation_number_btn[xx].addEventListener(('click'),(e)=>{

        let id=evaluation_number_btn[xx].getAttribute('id');
        commentCollection=Products[id-1].CustomerReviews;
        let comments_element=document.querySelector('.comments');
        comments_element.innerHTML='';
        for(let x=0;x<commentCollection.length;x++){
            
            let comment=document.createElement('div');
            comment.setAttribute('class','comment');
            let comment_text=document.createElement('div');
            let comment_innertext=document.createElement('div');
            let comment_img=document.createElement('img');
            comment_img.setAttribute('src','/images/comment.png');
            comment_img.setAttribute('alt','comment');
            comment_innertext.appendChild(comment_img);
            let comment_innertext_div=document.createElement('div');
            let comment_innertext_div_h3=document.createElement('h3');
            comment_innertext_div_h3.innerText=commentCollection[x].name;
            let comment_innertext_div_span=document.createElement('span');
            comment_innertext_div_span.innerText=commentCollection[x].date;
            comment_innertext_div.appendChild(comment_innertext_div_h3);
            comment_innertext_div.appendChild(comment_innertext_div_span);
            comment_innertext.appendChild(comment_innertext_div);
            comment_text.appendChild(comment_innertext);
            let comment_tex_p=document.createElement('p');
            comment_tex_p.innerText=commentCollection[x].text;
            comment_text.appendChild(comment_tex_p);
            comment.appendChild(comment_text);
    
            let comment_starts=document.createElement('div');
            comment_starts.setAttribute('class','comment_starts');
            let starblue=document.createElement('i');
            starblue.setAttribute('class','fa-solid fa-star');
            let starblue1=document.createElement('i');
            starblue1.setAttribute('class','fa-solid fa-star');
            let starblue2=document.createElement('i');
            starblue2.setAttribute('class','fa-solid fa-star');
            let starblue3=document.createElement('i');
            starblue3.setAttribute('class','fa-solid fa-star');
            let starblue4=document.createElement('i');
            starblue4.setAttribute('class','fa-solid fa-star');
            let starblueArray=[starblue,starblue1,starblue2,starblue3,starblue4];
            let starwhite=document.createElement('i');
            starwhite.setAttribute('class','fa-regular fa-star');
            let starwhite1=document.createElement('i');
            starwhite1.setAttribute('class','fa-regular fa-star');
            let starwhite2=document.createElement('i');
            starwhite2.setAttribute('class','fa-regular fa-star');
            let starwhite3=document.createElement('i');
            starwhite3.setAttribute('class','fa-regular fa-star');
            let starwhite4=document.createElement('i');
            starwhite4.setAttribute('class','fa-regular fa-star');
            let starWhiteArray=[starwhite,starwhite1,starwhite2,starwhite3,starwhite4];
            for(let d=0;d<commentCollection[x].review;d++){
                comment_starts.appendChild(starblueArray[d]);
            }
            for(let d=0;d<(5-commentCollection[x].review);d++){
                comment_starts.appendChild(starWhiteArray[d]);
            }
            comment.appendChild(comment_starts);
            comments_element.append(comment);
    
        }
        let Customer_reviews=document.querySelector('.Customer_reviews');
        Customer_reviews.style.display='block';
        let Customer_reviews_exit=document.querySelector('.Customer_reviews_container .head span');
        Customer_reviews_exit.addEventListener(('click'),()=>{
            Customer_reviews.style.display='none';
        })
    
    })


}
/**this code for product Details */
let  details_a=document.querySelectorAll('.evaluation a');
for(let xx=0;xx<details_a.length;xx++)
{
    details_a[xx].addEventListener(('click'),(e)=>{
        let Product_Details_element=document.querySelector('.Product_Details');
        Product_Details_element.style.display='block';
        let id=xx+1;
        let Details=Products[id].ProductDetils;
        let Ptitle=document.querySelector('.Product_Details_container .head h3');
        Ptitle.innerText=Products[id].ProductTilte;
        let Price=document.querySelector('.Product_Details_body .current_price span');
        Price.innerText=Products[id].newPrcie;
        let numberofstarts=document.querySelector('.Product_Details_body .stars span');
        let delatilsDiv=document.querySelector('.Product_Details_body .down');        
        delatilsDiv.innerText=Details;
        let delatilsImage=document.querySelector('.Product_Details_body .left img');
        delatilsImage.setAttribute('src',Products[id].ProductImageUrl);

        let ProductDetailsExist=document.querySelector('.Product_Details_container .head span');
        ProductDetailsExist.addEventListener(('click'),()=>{
            Product_Details_element.style.display='none';
        })
    })
}
//end for product elements in main page


/*code of cart */
let Cart_items=[]

let submit=document.querySelectorAll('.product .input_price button');
for(let x=0;x<submit.length;x++){
    submit[x].addEventListener(('click'),()=>{
       
        let inputs=document.querySelectorAll('.input_price input');
        let obj={
            id:1,
            title:'',
            Yourprice:150,
            oldPrice:150,
            quintaty:1
        }
        obj.id=Products[x].id;
        obj.title=Products[x].ProductTilte
        obj.oldPrice=Products[x].newPrcie
        obj.Yourprice=inputs[x].value
        console.log(Cart_items);
        if(Cart_items.length > 0)
        {
            Cart_items.forEach(element => {
                console.log(element.id);
                console.log(obj.id);
                if(element.id===obj.id){
                    element.quintaty++;
                }else{
                    Cart_items.push(obj);
                    console.log(Cart_items);
                    Shopping_cart_body.innerText='';

                    let Shopping_cart_ItemNumber=document.querySelector('.Shopping_cart_container .head h3 span');
                    Shopping_cart_ItemNumber.innerText=Cart_items.length;
                        for(let y=0;y<Cart_items.length;y++){
                            let Shopping_cart_element=document.createElement('div');
                    
                        Shopping_cart_element.setAttribute('class','element');
                        let Shopping_cart_element_right=document.createElement('div');
                    
                        Shopping_cart_element_right.setAttribute('class','right');
                        Shopping_cart_element_right.innerHTML='<img src="./images/image + sound.png" alt="image"></img>';
                        Shopping_cart_element.appendChild(Shopping_cart_element_right);
                    
                        let Shopping_cart_element_middel=document.createElement('div');
                        Shopping_cart_element_middel.setAttribute('class','middel');
                    
                        Shopping_cart_element_middel.innerHTML=`<h3>${Cart_items[y].title}</h3>
                        <button>مسح</button>`
                        Shopping_cart_element.appendChild(Shopping_cart_element_middel);
                    
                        let Shopping_cart_element_left=document.createElement('div');
                        Shopping_cart_element_left.setAttribute('class','left');
                        Shopping_cart_element_left.innerHTML=`<div class="current_price"> <span>${Cart_items[y].Yourprice}</span> ريال</div>
                        <div class="incOrdec"dir="ltr"><span>-</span>${Cart_items[y].quintaty}<span>+</span></div>`
                        Shopping_cart_element.appendChild(Shopping_cart_element_left);
                    
                        Shopping_cart_body.appendChild(Shopping_cart_element);
            }
                }
            });

        }else{
                    Cart_items.push(obj);
                    Shopping_cart_body.innerText='';
                    let Shopping_cart_ItemNumber=document.querySelector('.Shopping_cart_container .head h3 span');
                    Shopping_cart_ItemNumber.innerText=Cart_items.length;
                        for(let y=0;y<Cart_items.length;y++){
                            let Shopping_cart_element=document.createElement('div');
                    
                        Shopping_cart_element.setAttribute('class','element');
                        let Shopping_cart_element_right=document.createElement('div');
                    
                        Shopping_cart_element_right.setAttribute('class','right');
                        Shopping_cart_element_right.innerHTML='<img src="./images/image + sound.png" alt="image"></img>';
                        Shopping_cart_element.appendChild(Shopping_cart_element_right);
                    
                        let Shopping_cart_element_middel=document.createElement('div');
                        Shopping_cart_element_middel.setAttribute('class','middel');
                    
                        Shopping_cart_element_middel.innerHTML=`<h3>${Cart_items[y].title}</h3>
                        <button>مسح</button>`
                        Shopping_cart_element.appendChild(Shopping_cart_element_middel);
                    
                        let Shopping_cart_element_left=document.createElement('div');
                        Shopping_cart_element_left.setAttribute('class','left');
                        Shopping_cart_element_left.innerHTML=`<div class="current_price"> <span>${Cart_items[y].Yourprice}</span> ريال</div>
                        <div class="incOrdec"dir="ltr"><span>-</span>${Cart_items[y].quintaty}<span>+</span></div>`
                        Shopping_cart_element.appendChild(Shopping_cart_element_left);
                    
                        Shopping_cart_body.appendChild(Shopping_cart_element);
            }
                
        }
        
        
    })
   
}
let cart_icon=document.querySelector('.cart');
let Shopping_cart=document.querySelector('.Shopping_cart');
let Shopping_cart_body=document.querySelector('.Shopping_cart_body');
let Shopping_cart_exit=document.querySelector('.Shopping_cart_container .head i');
let keep_shoping=document.querySelector('.keep_shoping');


if(Cart_items.length>0){
    console.log('yes');
   
}

cart_icon.addEventListener(('click'),()=>{
    Shopping_cart.style.display='block';
    Shopping_cart_exit.addEventListener(('click'),()=>{
        Shopping_cart.style.display='none';
    })
    keep_shoping.addEventListener(('click'),()=>{
        Shopping_cart.style.display='none';
    })
})





//all the next code for the four alert messages that appers only at the first time the user open 
//this webaite 
let soundElement=document.querySelector('.sound_element');
let soundElementBtn=document.querySelector('.sound_element_container button');
let soundElementexiet=document.querySelector('.sound_element_container div span');
let sound_img=document.querySelector('.sound_img');

let arrowelement=document.querySelector('.arrow_element');
let arrowelementBtn=document.querySelector('.arrow_element button');
let arrowelementexiet=document.querySelector('.arrow_element div span');
let right_arrow=document.querySelector('.right_arrow');
let left_arrow=document.querySelector('.left_arrow');

let evaluation_element_effect=document.querySelector('.evaluation_element');
let evaluation_elementBtn=document.querySelector('.evaluation_element button');
let evaluation_elementexiet=document.querySelector('.evaluation_element div span');
let stars=document.querySelector('.stars');
let evaluation_number=document.querySelector('.evaluation_number');

let increase_element=document.querySelector('.increase_element');
let increase_elementBtn=document.querySelector('.increase_element button');
let increase_elementexiet=document.querySelector('.increase_element div span');
let input_price=document.querySelector('.input_price');


let x=0;
right_arrow.addEventListener('click',()=>{
    x+=390;
    Product_section_body.scrollTo(x,0);
})
left_arrow.addEventListener('click',()=>{
    x-=390;
    Product_section_body.scrollTo(x,0);
})
// var Itemnumber=1;

let ScreenWidth=screen.width;
if(localStorage.getItem('firstTime')=='null'){
    
    if(ScreenWidth < 550){

            soundElement.style.display='block';
            sound_img.style.zIndex='5'
            soundElementBtn.addEventListener('click',()=>{
                        soundElement.style.display='none';
                        sound_img.style.zIndex='0'
                        arrowelement.style.display='block';
                        right_arrow.style.zIndex='5';
                        left_arrow.style.zIndex='5';
                        arrowelementBtn.addEventListener('click',()=>{
                                    arrowelement.style.display='none';
                                    right_arrow.style.zIndex='0';
                                    left_arrow.style.zIndex='0';
                                    evaluation_element_effect.style.display='block';
                                    stars.style.zIndex='5';
                                    evaluation_number.style.zIndex='5';
                                    evaluation_elementBtn.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                                    evaluation_elementexiet.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                
                        })
                        arrowelementexiet.addEventListener('click',()=>{
                                    arrowelement.style.display='none';
                                    right_arrow.style.zIndex='0';
                                    left_arrow.style.zIndex='0';
                                    evaluation_element_effect.style.display='block';
                                    stars.style.zIndex='5';
                                    evaluation_number.style.zIndex='5';
                                    evaluation_elementBtn.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                                    evaluation_elementexiet.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                        })
                
            })
            soundElementexiet.addEventListener('click',()=>{
                        soundElement.style.display='none';
                        sound_img.style.zIndex='0';
                        arrowelement.style.display='block';
                        right_arrow.style.zIndex='5';
                        left_arrow.style.zIndex='5';
                        arrowelementBtn.addEventListener('click',()=>{
                                    arrowelement.style.display='none';
                                    right_arrow.style.zIndex='0';
                                    left_arrow.style.zIndex='0';
                                    evaluation_element_effect.style.display='block';
                                    stars.style.zIndex='5';
                                    evaluation_number.style.zIndex='5';
                                    evaluation_elementBtn.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                                    evaluation_elementexiet.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                
                        })
                        arrowelementexiet.addEventListener('click',()=>{
                                    arrowelement.style.display='none';
                                    right_arrow.style.zIndex='0';
                                    left_arrow.style.zIndex='0';
                                    evaluation_element_effect.style.display='block';
                                    stars.style.zIndex='5';
                                    evaluation_number.style.zIndex='5';
                                    evaluation_elementBtn.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                                    evaluation_elementexiet.addEventListener('click',()=>{
                                        evaluation_element_effect.style.display='none';
                                                stars.style.zIndex='0';
                                                evaluation_number.style.zIndex='0';
                                                increase_element.style.display='block';
                                                input_price.style.zIndex='5';
                                                increase_elementBtn.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })
                                                increase_elementexiet.addEventListener('click',()=>{
                                                            increase_element.style.display='none';
                                                            input_price.style.zIndex='0';
            
                                                })

                                    })
                        })
            })
    
    localStorage.setItem('firstTime','done');
        }
}

//end with the message alert code


//code for change the image in hero section
let hero_image_circuls=document.querySelectorAll('.hero .circles_btns .circle');
for(let x=0;x<hero_image_circuls.length;x++){
    hero_image_circuls[x].addEventListener(('click'),()=>{
            for(let xx=0;xx<hero_image_circuls.length;xx++){
                hero_image_circuls[xx].setAttribute('class','circle');
            }
        hero_image_circuls[x].setAttribute('class','circle circle_active ');
        let hero_img=document.querySelector('.hero img');
        hero_img.setAttribute('src',`./images/NewsLetter${x}.png`)

    })
}

//code for low price pop up 

let low_price_popup=document.createElement('div');
low_price_popup.innerHTML=`<div><img src='./images/logo.png' alt='imag'/> ميزان ذكي بـ <span>٥٠</span> ؟ ، زودها شوي 🥹</div>`;
low_price_popup.setAttribute('dir','rtl');
low_price_popup.setAttribute('class','low_price_popup');

document.querySelector('.product').appendChild(low_price_popup);
