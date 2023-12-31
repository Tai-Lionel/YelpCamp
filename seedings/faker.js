const campgrounds = [];

const titles = [
    "Yosemite National Park",
    "Grand Canyon National Park",
    "Yellowstone National Park",
    "Zion National Park",
    "Glacier National Park",
    "Great Smoky Mountains National Park",
    "Rocky Mountain National Park",
    "Joshua Tree National Park",
    "Bryce Canyon National Park",
    "Arches National Park",
    "Sequoia National Park",
    "Canyonlands National Park",
    "Olympic National Park",
    "Everglades National Park",
    "Acadia National Park",
    "Mount Rainier National Park",
    "Shenandoah National Park",
    "Badlands National Park",
    "Redwood National and State Parks",
    "Grand Teton National Park",
    "Petrified Forest National Park",
    "Haleakala National Park",
    "Denali National Park and Preserve",
    "Crater Lake National Park",
    "Kings Canyon National Park",
    "Capitol Reef National Park",
    "Mammoth Cave National Park",
    "Cuyahoga Valley National Park",
    "Wind Cave National Park",
    "Hot Springs National Park",
    "Guadalupe Mountains National Park",
    "Voyageurs National Park",
    "Isle Royale National Park",
    "Congaree National Park",
    "Theodore Roosevelt National Park",
    "Dry Tortugas National Park",
    "Channel Islands National Park",
    "Lassen Volcanic National Park",
    "Black Canyon of the Gunnison National Park",
    "Great Basin National Park",
    "Carlsbad Caverns National Park",
    "Saguaro National Park",
    "Mesa Verde National Park",
    "Great Sand Dunes National Park and Preserve",
    "Cape Cod National Seashore",
    "Gates of the Arctic National Park and Preserve",
    "Katmai National Park and Preserve",
    "Wrangell-St. Elias National Park and Preserve",
    "Kobuk Valley National Park",
    "Lake Clark National Park and Preserve",
];

const descriptions = [
    "Experience the breathtaking beauty of this iconic national park with its majestic waterfalls and towering granite cliffs.",
    "Discover the awe-inspiring natural wonder of the Grand Canyon, renowned for its immense size and colorful geological formations.",
    "Explore the diverse landscapes and geothermal wonders of this famous national park, home to the iconic Old Faithful geyser.",
    "Immerse yourself in the stunning vistas and dramatic red rock formations of Zion National Park.",
    "Witness the breathtaking glaciers, alpine meadows, and pristine lakes of Glacier National Park.",
    "Escape into the lush greenery and misty mountains of the Great Smoky Mountains National Park.",
    "Marvel at the rugged peaks, alpine lakes, and abundant wildlife in Rocky Mountain National Park.",
    "Experience the unique desert landscape of Joshua Tree National Park, famous for its distinctive Joshua trees and rock formations.",
    "Marvel at the otherworldly hoodoos and expansive amphitheaters of Bryce Canyon National Park.",
    "Discover the captivating arches, balanced rocks, and striking vistas of Arches National Park.",
    "Stand in awe of the giant sequoia trees that dominate the landscape of Sequoia National Park.",
    "Explore the colorful canyons, towering mesas, and vast desert of Canyonlands National Park.",
    "Immerse yourself in the lush rainforests, rugged coastline, and majestic mountains of Olympic National Park.",
    "Experience the unique wetlands and diverse wildlife of Everglades National Park in Florida.",
    "Indulge in the beauty of the rugged coastline, picturesque lakes, and lush forests of Acadia National Park.",
    "Discover the towering peaks, glaciers, and alpine meadows of Mount Rainier National Park.",
    "Immerse yourself in the tranquility and natural beauty of Shenandoah National Park in the Blue Ridge Mountains.",
    "Witness the striking rock formations and rugged landscapes of Badlands National Park.",
    "Experience the magic of the towering ancient redwood trees in Redwood National and State Parks.",
    "Marvel at the dramatic peaks, pristine lakes, and abundant wildlife of Grand Teton National Park.",
    "Explore the unique landscape and petrified wood of Petrified Forest National Park.",
    "Marvel at the otherworldly landscapes and stunning sunrises atop Haleakala, the dormant volcano in Maui.",
    "Embark on an adventure in Denali National Park, home to North America's tallest peak, Denali (formerly Mount McKinley).",
    "Witness the deep blue waters and sheer cliffs of Crater Lake, formed within a volcanic caldera.",
    "Explore the deep canyons and towering granite cliffs of Kings Canyon National Park.",
    "Discover the unique geological features and vibrant colors of Capitol Reef National Park.",
    "Embark on an underground adventure through the vast cave system of Mammoth Cave National Park.",
    "Experience the natural beauty and historical landmarks of Cuyahoga Valley National Park, nestled in Ohio.",
    "Delve into the hidden world of Wind Cave National Park, famous for its intricate cave formations.",
    "Relax and rejuvenate in the natural hot springs of Hot Springs National Park, the oldest national park in the U.S.",
    "Embark on a hike through the rugged Guadalupe Mountains National Park, featuring the highest peak in Texas.",
    "Explore the pristine lakes, dense forests, and interconnected waterways of Voyageurs National Park.",
    "Escape to the remote wilderness of Isle Royale National Park, located in Lake Superior.",
    "Immerse yourself in the ancient cypress swamps and towering trees of Congaree National Park.",
    "Discover the rugged wilderness and wide-open spaces of Theodore Roosevelt National Park.",
    "Uncover the beauty and seclusion of the remote Dry Tortugas National Park, accessible only by boat or seaplane.",
    "Immerse yourself in the coastal wonders and marine life of Channel Islands National Park.",
    "Experience the volcanic landscapes and pristine wilderness of Lassen Volcanic National Park.",
    "Marvel at the sheer walls and narrow canyon of Black Canyon of the Gunnison National Park.",
    "Explore the unique ecosystem and ancient bristlecone pine trees of Great Basin National Park.",
    "Embark on an underground journey through the awe-inspiring Carlsbad Caverns National Park.",
    "Indulge in the beauty of the iconic saguaro cacti and desert landscapes of Saguaro National Park.",
    "Delve into the ancient cliff dwellings and rich history of Mesa Verde National Park.",
    "Experience the towering sand dunes and clear night skies of Great Sand Dunes National Park and Preserve.",
    "Relax and enjoy the pristine beaches and natural beauty of Cape Cod National Seashore.",
    "Experience the remote and untouched wilderness of Gates of the Arctic National Park and Preserve.",
    "Embark on a wildlife viewing and fishing adventure in Katmai National Park and Preserve.",
    "Witness the vast and unspoiled wilderness of Wrangell-St. Elias National Park and Preserve.",
    "Discover the unique wilderness and caribou herds of Kobuk Valley National Park.",
    "Immerse yourself in the remote and unspoiled beauty of Lake Clark National Park and Preserve.",
]

const locations = [
    "New York City, New York",
    "Los Angeles, California",
    "Chicago, Illinois",
    "Houston, Texas",
    "Phoenix, Arizona",
    "Philadelphia, Pennsylvania",
    "San Antonio, Texas",
    "San Diego, California",
    "Dallas, Texas",
    "San Jose, California",
    "Austin, Texas",
    "Jacksonville, Florida",
    "San Francisco, California",
    "Indianapolis, Indiana",
    "Columbus, Ohio",
    "Fort Worth, Texas",
    "Charlotte, North Carolina",
    "Seattle, Washington",
    "Denver, Colorado",
    "Washington, D.C.",
    "Boston, Massachusetts",
    "El Paso, Texas",
    "Nashville, Tennessee",
    "Detroit, Michigan",
    "Oklahoma City, Oklahoma",
    "Portland, Oregon",
    "Las Vegas, Nevada",
    "Memphis, Tennessee",
    "Louisville, Kentucky",
    "Baltimore, Maryland",
    "Milwaukee, Wisconsin",
    "Albuquerque, New Mexico",
    "Tucson, Arizona",
    "Fresno, California",
    "Sacramento, California",
    "Mesa, Arizona",
    "Kansas City, Missouri",
    "Atlanta, Georgia",
    "Long Beach, California",
    "Colorado Springs, Colorado",
    "Raleigh, North Carolina",
    "Miami, Florida",
    "Virginia Beach, Virginia",
    "Omaha, Nebraska",
    "Oakland, California",
    "Minneapolis, Minnesota",
    "Tulsa, Oklahoma",
    "Arlington, Texas",
    "New Orleans, Louisiana",
];

const images = [
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498608/YelpCamp/1667718982_2-titis-org-p-naked-hairy-men-penis-chastnaya-erotika-2_eu53pj.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498475/YelpCamp/Naked_Men_Smoking_fu5yg7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498054/YelpCamp/1666314179_17-titis-org-p-naked-guys-in-nature-erotika-vkontakte-17_bka5j8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687498012/YelpCamp/1666314134_5-titis-org-p-naked-guys-in-nature-erotika-vkontakte-5_mwhen7.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497985/YelpCamp/1666314108_1-titis-org-p-naked-guys-in-nature-erotika-vkontakte-1_mn7bad.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497418/YelpCamp/d2dbbd04ddddb2178cd88f0bf0ddcba8_tyuriu.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497311/YelpCamp/Masculinity_illus_nw2dfl.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497176/YelpCamp/tumblr_n1l4soajjQ1shih0fo2_1280_qytoq0.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497102/YelpCamp/CRY9smxUwAAEb6k_hnryq8.jpg',
    'https://res.cloudinary.com/dqhbikdg0/image/upload/v1687497074/YelpCamp/More-Gorgeous-Australian-Men-Get-Naked-For-Paul-Freeman-3_xjpnt9.jpg',
]

const coordinates = [
    [-74.00601595, 40.71277666],
    [-118.2436849, 34.052235],
    [-87.6297982, 41.8781136],
    [-95.3698028, 29.7604267],
    [-112.0738435, 33.4483771],
    [-75.1652215, 39.9525839],
    [-98.4936282, 29.4241219],  
    [-117.1610849, 32.715738],
    [-96.7969879, 32.7766642],
    [-121.8863286, 37.3382082],
    [-97.7431184, 30.267153],
    [-81.655651, 30.3321838],
    [-122.4194155, 37.7749295],
    [-86.158068, 39.7683331],
    [-82.9987942, 39.9611755],
    [-97.3307658, 32.7554883],
    [-80.8431267, 35.2270869],
    [-122.3320708, 47.6062095],
    [-104.990251, 39.7392358],
    [-77.037684, 38.9071923],
    [-71.0588801, 42.3600825],
    [-106.4850204, 31.7618778],
    [-86.7816023, 36.1626638],
    [-83.0457538, 42.3315509],
    [-97.5164276, 35.4675602],
    [-122.6741949, 45.5051064],
    [-115.1398296, 36.1699412],
    [-90.0489801, 35.1495343],
    [-85.7584568, 38.2526647],
    [-76.6121893, 39.2903848],
    [-87.9064736, 43.0389025],
    [-106.650422, 35.0844928],
    [-110.9747108, 32.2226066],
    [-119.7871247, 36.7372353],
    [-121.4943996, 38.5815719],
    [-111.8314733, 33.4151843],
    [-94.5785667, 39.0997265],
    [-84.3879824, 33.7490987],
    [-118.1937395, 33.7700504],
    [-104.8213634, 38.8338816],
    [-78.6381787, 35.7795897],
    [-80.1917902, 25.7616798],
    [-75.977985, 36.8529841],
    [-95.9969974, 41.2523634],
    [-122.2711137, 37.8043637],
    [-93.2650108, 44.977753],
    [-95.992775, 36.1539816],
    [-97.1080785, 32.7364219],
    [-90.0715323, 29.9510658]
]

for (let i = 0; i < 50; i++) {
    const campground = {
        title: titles[i],
        price: Math.floor(Math.random() * 41) + 10,
        description: descriptions[i],
        location: locations[i],
        // image: `/images/campground${i + 1}.jpg`,
        images: [
            {
                filename: `pic${2 * i}`,
                path: images[2 * i],
            },
            {
                filename: `pic${2 * i + 1}`,
                path: images[2 * i + 1]
            }
        ],
        author: '648ec67e753072c69c4a7591',
        geometry: {
            type: 'Point',
            coordinates: coordinates[i]
        },
    };

    campgrounds.push(campground);
}

module.exports = campgrounds
