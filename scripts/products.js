class product {
  constructor(img, brand, name, price, description) {
    this.img = img;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export let laptops = [
  new product(
    'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t490-hero-1126.png?context=bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA',
    'Lenovo',
    'ThinkPad T490',
    `749`,
    [
      'Does everything but make the coffee',
      'Starting weight of just 3.23 lbs / 1.46 kg, perfect for portability',
      'New narrow bezel design',
      'Enhanced security and privacy features',
      'Up to 16.11 hrs of battery life',
      'Preferred laptop for serious business professionals.',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/laptops-ideapad-s-series-ideapad-gaming-3-hero.png?context=bWFzdGVyfHJvb3R8NjMxMTR8aW1hZ2UvcG5nfGgwZC9oYmIvMTA5ODA5MTkyMTQxMTAucG5nfDNhOWRjYzVjOTM3YzkwN2Y1NDE5ZDA0MjNhN2YwNjRiNmQ3YTllMmU5NmU3OTk3YWFjYjc2MjZjZDU4M2Y5OTQ',
    'Lenovo',
    'IdeaPad Gaming 3',
    `869`,
    [
      'High performance AMD Ryzen™ 4000 H-Series processors',
      'Premium NVIDIA® GeForce® GTX graphics',
      '15.6" FHD display with up to 120Hz refresh rate',
      'SSD storage options & DDR4 memory',
      'Features a robust dual fan and vent system & spacious keyboard',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/lenovo-laptop-yoga-s940-hero.png?context=bWFzdGVyfHJvb3R8NTAxNTh8aW1hZ2UvcG5nfGg0NS9oNmYvOTkwMzczMjA2NDI4Ni5wbmd8MWMzNWNkYmU3OTg2NTRlZGI1MDlmMWNjYmJhNzcyMzI3M2QwMDRmOWMzNWRlOWEwOWY0NjMzMGU2NzI5NDRhZQ',
    'Lenovo',
    'IdeaPad S940 Flex 5',
    `1249`,
    [
      'Run your programs faster with Premium Intel® Core™ processing',
      'One of our thinnest & lightest laptops, starting at 2.6lbs & 12.2mm thin',
      'Work with ease & enhance your privacy with eye-tracking glance software',
      'Enjoy up to 15 hours battery (with FHD display) & work smarter with AI software',
      'Up to 4K HDR display options avaiable for elevated visuals & clarity',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-extreme-gen-3-hero.png?context=bWFzdGVyfHJvb3R8MjAwNjQ0fGltYWdlL3BuZ3xoMWMvaDFlLzEwOTYxOTI1NTM3ODIyLnBuZ3xhZjI1YzEyMzZkYmJkM2VmMzdmZWU4ZjVmZGZmMzgwYTBlMjAwMzk5YWIzY2ZmNmM5NDZmNWYwNjkyOGY2YjU3',
    'Lenovo',
    'ThinkPad X1 Extreme Gen 3',
    `2979`,
    [
      '15.6" powerhouse, yet portable laptop pc',
      'Up to 10th Gen Intel® Core® vPro™ H series processors',
      'Top professional graphic options',
      'Amazing audio features',
      'Supports up to 4 independent monitors',
      'Military-grade tested for durability and reliability',
      'ThinkShield, built-in security solutions',
      'Ability to create and enjoy multimedia',
      'Time-saving & integrated features to maximize productivity ',
      'Perfect for college students, engineers, architecture and design industries',
    ]
  ),
  new product(
    'https://static.lenovo.com/na/subseries/hero/ideapad-5-15-intel-platinum-grey-hero.png',
    'Lenovo',
    'IdeaPad 5 (15”, Intel)',
    `769`,
    [
      '10th Gen Intel® Core™ processing',
      '15.6” FHD touchscreen with narrow border provides a significant viewing area',
      'Webcam privacy shutter & fingerprint reader offer additional security with a single touch',
      'Crisp Dolby Audio™ speakers exhibit rich sound whether you are dancing to your favorite song or relaxing with your favorite movie',
      'Includes USB-C port & Quick Charging that gets your battery full in no time at all',
    ]
  ),
  new product(
    'https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2415-Viper_aw_m15_m17_family_570x428.png',
    'Alienware',
    'M15 R3 GAMING LAPTOP',
    `1499`,
    [
      'Alienware’s most thin and powerful 15" laptop ever.',
      'up to 10th gen Intel® Core™ i9k processors with up to 12-phase HyperEfficient Voltage regulation.',
      'Dual-intake, dual-exhaust airflow design',
      'Load-balancing heat pipes',
      'Vapor Chamber Technology',
    ]
  ),
  new product(
    'https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2415-Viper_aw_m15_m17_family_570x428.png',
    'Alienware',
    'M17 R3 GAMING LAPTOP',
    `1899`,
    [
      '10th Generation Intel® Core™ i7-10750H',
      'Windows 10 Home',
      'NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6',
      '16GB DDR4 2666MHz',
      '512GB PCIe M.2 SSD',
    ]
  ),
  new product(
    'https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2417_Alienware_Area-51m_Firefly_570x428.png',
    'Alienware',
    'AREA-51m R2',
    `2299`,
    [
      '10th Gen Intel® Core™ i7 10700',
      'Windows 10 Home',
      'NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6',
      '16GB DDR4-2933MHz, 2x8G',
      '256GB NVMe M.2 PCIe SSD',
    ]
  ),
  new product(
    'https://i5.walmartimages.com/asr/302639de-5109-4ec5-af86-befb50b4af16_1.ce9dfa4652e24b421f46b80a8bea34d3.png',
    'Dell',
    'Inspiron 14 5000 2-in-1',
    `479`,
    [
      '10th Generation Intel&#174; Core™ i3-1005G1 Processor (4MB Cache, up to 3.4 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; UHD Graphics with shared graphics memory',
      '4GB,1x4GB,DDR4,3200MHz',
      '128GB M.2 PCIe NVMe Solid State Drive',
    ]
  ),
  new product(
    'https://i1.wp.com/laptopmedia.com/wp-content/uploads/2020/01/2-e1577966336100.png?fit=1026%2C636&ssl=1',
    'Dell',
    'NEW XPS 13 Laptop',
    `899`,
    [
      '10th Generation Intel&#174; Core™ i5-10210U Processor (6MB Cache, up to 4.2 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; UHD Graphics with shared graphics memory',
      '8 GB, LPDDR3, 2133 MHz, Integrated',
      '256 GB M.2 PCIe NVMe Solid-State Drive',
    ]
  ),
  new product(
    'https://i5.walmartimages.com/asr/302639de-5109-4ec5-af86-befb50b4af16_1.ce9dfa4652e24b421f46b80a8bea34d3.png',
    'Dell',
    'XPS 13 2-in-1 Laptop',
    `899`,
    [
      '10th Generation Intel&#174; Core™ i3-1005G1 (4 MB Cache, up to 3.40 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; UHD Graphics',
      '4GB 3733MHz LPDDR4 Memory Onboard',
      '256GB PCIe NVMe x4 Solid State Drive Onboard',
    ]
  ),
  new product(
    'https://i.dell.com/das/dih.ashx/527x340/sites/csimages/app-merchandizing_images/all/italia-site-images-laptop-xps-13-7390-560x393-gallery.jpg',
    'Dell',
    'New XPS 13 Touch Laptop',
    `1399`,
    [
      '10th Generation Intel&#174; Core™ i7-1065G7 Processor (8MB Cache, up to 3.9 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; Iris Plus Graphics',
      '8GB 3733MHz LPDDR4x Memory Onboard',
      '256GB M.2 PCIe NVMe Solid State Drive',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_7/images/20191225/Aspire-7-A715-75G-41G-Black-modelmain.png',
    'Acer',
    'Aspire 7',
    `799`,
    [
      'Windows 10 Home',
      'Intel® Core™ i5-9300H processor Quad-core 2.40 GHz',
      'NVIDIA® GeForce® GTX 1650 with 4 GB dedicated memory 15.6" Full HD (1920 x 1080) 16:9',
      '8 GB, DDR4 SDRAM',
      '512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Triton_500/Images/20190304/Predator-Triton-500-PT515-51-preview.png',
    'Acer',
    'Predator Triton 500',
    `2299`,
    [
      'Windows 10 Pro',
      'Intel® Core™ i7-9750H processor Hexa-core 2.60 GHz',
      'NVIDIA® GeForce RTX™ 2080 with 8 GB dedicated memory',
      '15.6" Full HD (1920 x 1080) 16:9',
      '32 GB, DDR4 SDRAM',
      '512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_500/Images/20180412/Predator-Helios-500-PH517-51_sku_preview.png',
    'Acer',
    'Predator Helios 500',
    `1599`,
    [
      'Windows 10 Pro',
      'i7-9750H',
      'NVIDIA® GeForce® GTX 1070 with 8 GB dedicated memory',
      '17.3" Full HD (1920 x 1080) 16:9',
      '16 GB, DDR4 SDRAM',
      '1 TB HDD, 512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_700/Images/20190610/Predator-Helios-700-PH717-71_main.png',
    'Acer',
    'Predator Helios 700',
    `2499`,
    [
      'Windows 10 Pro',
      'Intel® Core™ i7-8750H processor Hexa-core 2.20 GHz',
      'GeForce RTX™ 2080 with 8 GB dedicated memory',
      '17.3" Full HD (1920 x 1080) 16:9',
      '16 GB, DDR4 SDRAM',
      '1 TB HDD, 512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Triton_900/Images/20190118/Predator-Triton-900-PT917-71-preview.png',
    'Acer',
    'Predator Triton 900',
    `2899`,
    [
      'Windows 10 Pro',
      'Intel® Core™ i7-9750H processor Hexa-core 2.60 GHz',
      'NVIDIA® GeForce RTX™ 2080 with 8 GB dedicated memory',
      '17.3" 4K UHD (3840 x 2160) 16:9 Touchscreen',
      '32 GB, DDR4 SDRAM',
      '1 TB SSD',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t490-hero-1126.png?context=bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA',
    'Lenovo',
    'ThinkPad T490',
    `749`,
    [
      'Does everything but make the coffee',
      'Starting weight of just 3.23 lbs / 1.46 kg, perfect for portability',
      'New narrow bezel design',
      'Enhanced security and privacy features',
      'Up to 16.11 hrs of battery life',
      'Preferred laptop for serious business professionals.',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/laptops-ideapad-s-series-ideapad-gaming-3-hero.png?context=bWFzdGVyfHJvb3R8NjMxMTR8aW1hZ2UvcG5nfGgwZC9oYmIvMTA5ODA5MTkyMTQxMTAucG5nfDNhOWRjYzVjOTM3YzkwN2Y1NDE5ZDA0MjNhN2YwNjRiNmQ3YTllMmU5NmU3OTk3YWFjYjc2MjZjZDU4M2Y5OTQ',
    'Lenovo',
    'IdeaPad Gaming 3',
    `869`,
    [
      'High performance AMD Ryzen™ 4000 H-Series processors',
      'Premium NVIDIA® GeForce® GTX graphics',
      '15.6" FHD display with up to 120Hz refresh rate',
      'SSD storage options & DDR4 memory',
      'Features a robust dual fan and vent system & spacious keyboard',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/lenovo-laptop-yoga-s940-hero.png?context=bWFzdGVyfHJvb3R8NTAxNTh8aW1hZ2UvcG5nfGg0NS9oNmYvOTkwMzczMjA2NDI4Ni5wbmd8MWMzNWNkYmU3OTg2NTRlZGI1MDlmMWNjYmJhNzcyMzI3M2QwMDRmOWMzNWRlOWEwOWY0NjMzMGU2NzI5NDRhZQ',
    'Lenovo',
    'IdeaPad S940 Flex 5',
    `1249`,
    [
      'Run your programs faster with Premium Intel® Core™ processing',
      'One of our thinnest & lightest laptops, starting at 2.6lbs & 12.2mm thin',
      'Work with ease & enhance your privacy with eye-tracking glance software',
      'Enjoy up to 15 hours battery (with FHD display) & work smarter with AI software',
      'Up to 4K HDR display options avaiable for elevated visuals & clarity',
    ]
  ),
  new product(
    'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-extreme-gen-3-hero.png?context=bWFzdGVyfHJvb3R8MjAwNjQ0fGltYWdlL3BuZ3xoMWMvaDFlLzEwOTYxOTI1NTM3ODIyLnBuZ3xhZjI1YzEyMzZkYmJkM2VmMzdmZWU4ZjVmZGZmMzgwYTBlMjAwMzk5YWIzY2ZmNmM5NDZmNWYwNjkyOGY2YjU3',
    'Lenovo',
    'ThinkPad X1 Extreme Gen 3',
    `2979`,
    [
      '15.6" powerhouse, yet portable laptop pc',
      'Up to 10th Gen Intel® Core® vPro™ H series processors',
      'Top professional graphic options',
      'Amazing audio features',
      'Supports up to 4 independent monitors',
      'Military-grade tested for durability and reliability',
      'ThinkShield, built-in security solutions',
      'Ability to create and enjoy multimedia',
      'Time-saving & integrated features to maximize productivity ',
      'Perfect for college students, engineers, architecture and design industries',
    ]
  ),
  new product(
    'https://static.lenovo.com/na/subseries/hero/ideapad-5-15-intel-platinum-grey-hero.png',
    'Lenovo',
    'IdeaPad 5 (15”, Intel)',
    `769`,
    [
      '10th Gen Intel® Core™ processing',
      '15.6” FHD touchscreen with narrow border provides a significant viewing area',
      'Webcam privacy shutter & fingerprint reader offer additional security with a single touch',
      'Crisp Dolby Audio™ speakers exhibit rich sound whether you are dancing to your favorite song or relaxing with your favorite movie',
      'Includes USB-C port & Quick Charging that gets your battery full in no time at all',
    ]
  ),
  new product(
    'https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2415-Viper_aw_m15_m17_family_570x428.png',
    'Alienware',
    'M15 R3 GAMING LAPTOP',
    `1499`,
    [
      'Alienware’s most thin and powerful 15" laptop ever.',
      'up to 10th gen Intel® Core™ i9k processors with up to 12-phase HyperEfficient Voltage regulation.',
      'Dual-intake, dual-exhaust airflow design',
      'Load-balancing heat pipes',
      'Vapor Chamber Technology',
    ]
  ),
  new product(
    'https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2415-Viper_aw_m15_m17_family_570x428.png',
    'Alienware',
    'M17 R3 GAMING LAPTOP',
    `1899`,
    [
      '10th Generation Intel® Core™ i7-10750H',
      'Windows 10 Home',
      'NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6',
      '16GB DDR4 2666MHz',
      '512GB PCIe M.2 SSD',
    ]
  ),
  new product(
    'https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2417_Alienware_Area-51m_Firefly_570x428.png',
    'Alienware',
    'AREA-51m R2',
    `2299`,
    [
      '10th Gen Intel® Core™ i7 10700',
      'Windows 10 Home',
      'NVIDIA® GeForce® GTX 1660 Ti 6GB GDDR6',
      '16GB DDR4-2933MHz, 2x8G',
      '256GB NVMe M.2 PCIe SSD',
    ]
  ),
  new product(
    'https://i5.walmartimages.com/asr/302639de-5109-4ec5-af86-befb50b4af16_1.ce9dfa4652e24b421f46b80a8bea34d3.png',
    'Dell',
    'Inspiron 14 5000 2-in-1',
    `479`,
    [
      '10th Generation Intel&#174; Core™ i3-1005G1 Processor (4MB Cache, up to 3.4 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; UHD Graphics with shared graphics memory',
      '4GB,1x4GB,DDR4,3200MHz',
      '128GB M.2 PCIe NVMe Solid State Drive',
    ]
  ),
  new product(
    'https://i1.wp.com/laptopmedia.com/wp-content/uploads/2020/01/2-e1577966336100.png?fit=1026%2C636&ssl=1',
    'Dell',
    'NEW XPS 13 Laptop',
    `899`,
    [
      '10th Generation Intel&#174; Core™ i5-10210U Processor (6MB Cache, up to 4.2 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; UHD Graphics with shared graphics memory',
      '8 GB, LPDDR3, 2133 MHz, Integrated',
      '256 GB M.2 PCIe NVMe Solid-State Drive',
    ]
  ),
  new product(
    'https://i5.walmartimages.com/asr/302639de-5109-4ec5-af86-befb50b4af16_1.ce9dfa4652e24b421f46b80a8bea34d3.png',
    'Dell',
    'XPS 13 2-in-1 Laptop',
    `899`,
    [
      '10th Generation Intel&#174; Core™ i3-1005G1 (4 MB Cache, up to 3.40 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; UHD Graphics',
      '4GB 3733MHz LPDDR4 Memory Onboard',
      '256GB PCIe NVMe x4 Solid State Drive Onboard',
    ]
  ),
  new product(
    'https://i.dell.com/das/dih.ashx/527x340/sites/csimages/app-merchandizing_images/all/italia-site-images-laptop-xps-13-7390-560x393-gallery.jpg',
    'Dell',
    'New XPS 13 Touch Laptop',
    `1399`,
    [
      '10th Generation Intel&#174; Core™ i7-1065G7 Processor (8MB Cache, up to 3.9 GHz)',
      'Windows 10 Home in S mode 64-bit, English',
      'Intel&#174; Iris Plus Graphics',
      '8GB 3733MHz LPDDR4x Memory Onboard',
      '256GB M.2 PCIe NVMe Solid State Drive',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_7/images/20191225/Aspire-7-A715-75G-41G-Black-modelmain.png',
    'Acer',
    'Aspire 7',
    `799`,
    [
      'Windows 10 Home',
      'Intel® Core™ i5-9300H processor Quad-core 2.40 GHz',
      'NVIDIA® GeForce® GTX 1650 with 4 GB dedicated memory 15.6" Full HD (1920 x 1080) 16:9',
      '8 GB, DDR4 SDRAM',
      '512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Triton_500/Images/20190304/Predator-Triton-500-PT515-51-preview.png',
    'Acer',
    'Predator Triton 500',
    `2299`,
    [
      'Windows 10 Pro',
      'Intel® Core™ i7-9750H processor Hexa-core 2.60 GHz',
      'NVIDIA® GeForce RTX™ 2080 with 8 GB dedicated memory',
      '15.6" Full HD (1920 x 1080) 16:9',
      '32 GB, DDR4 SDRAM',
      '512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_500/Images/20180412/Predator-Helios-500-PH517-51_sku_preview.png',
    'Acer',
    'Predator Helios 500',
    `1599`,
    [
      'Windows 10 Pro',
      'i7-9750H',
      'NVIDIA® GeForce® GTX 1070 with 8 GB dedicated memory',
      '17.3" Full HD (1920 x 1080) 16:9',
      '16 GB, DDR4 SDRAM',
      '1 TB HDD, 512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Helios_700/Images/20190610/Predator-Helios-700-PH717-71_main.png',
    'Acer',
    'Predator Helios 700',
    `2499`,
    [
      'Windows 10 Pro',
      'Intel® Core™ i7-8750H processor Hexa-core 2.20 GHz',
      'GeForce RTX™ 2080 with 8 GB dedicated memory',
      '17.3" Full HD (1920 x 1080) 16:9',
      '16 GB, DDR4 SDRAM',
      '1 TB HDD, 512 GB SSD',
    ]
  ),
  new product(
    'https://static.acer.com/up/Resource/Acer/Laptops/Predator_Triton_900/Images/20190118/Predator-Triton-900-PT917-71-preview.png',
    'Acer',
    'Predator Triton 900',
    `2899`,
    [
      'Windows 10 Pro',
      'Intel® Core™ i7-9750H processor Hexa-core 2.60 GHz',
      'NVIDIA® GeForce RTX™ 2080 with 8 GB dedicated memory',
      '17.3" 4K UHD (3840 x 2160) 16:9 Touchscreen',
      '32 GB, DDR4 SDRAM',
      '1 TB SSD',
    ]
  ),
];

export let phones = [
  new product(
    'https://i01.appmifile.com/webfile/globalimg/zhouyuxin/F4L-grey-800.png',
    'Xiaomi',
    'Mi Note 10 Lite',
    `400`,
    [
      'Qualcomm® Snapdragon™ 765G with 5G',
      "6.57'' AMOLED TrueColor display",
      'Movie quality effortless editing',
      '48MP quad-camera',
      '4160mAh battery 20W fast charge',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/products/pc/poco-f2-pro/specs1.png',
    'Xiaomi',
    'POCO F2 Pro',
    `455`,
    [
      'Qualcomm® Kryo™ 585, 7 nm Process Technology',
      'CPU frequency: Octa-core processor, up to 2.84 GHz',
      "Qualcomm's trifecta design: 1 x 2.84GHz super large core + 3 x 2.42GHz large core + 4 x 1.80GHz small core",
      'GPU: Adreno 650 GPU, up to 587MHz',
      'AIE: 5th generation AIE processor',
      '64MP quad rear camera',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/in/cms/BDFE6DF3-832D-21D2-0388-69267704E493.jpg',
    'Xiaomi',
    'Redmi Note 9 Pro',
    `255`,
    [
      'Qualcomm® Snapdragon™ 720G',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '64MP AI Quad Camera',
      '16MP In-Display Front Camera',
    ]
  ),
  new product(
    'https://news.lenovo.com/wp-content/uploads/2020/07/Header-Image_resized.png',
    'Lenovo',
    'Legion Duel',
    `755`,
    [
      '6.65" 1080x2340 pixels',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '64MP AI Quad Camera',
    ]
  ),
  new product(
    'https://lh3.googleusercontent.com/dPWEOHIEIsePmdj-ZviV9MUWJ9bhsUL1UYkWfvakoQt9Z2ebTGpVz_P8xgroQH6sxuw',
    'Lenovo',
    'K10 Note',
    `155`,
    [
      '6.65" 1080x2340 pixels',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '16MP AI Quad Camera',
    ]
  ),
  new product(
    'https://www.bell.ca/Styles/wireless/5G/LG_V60_ThinQ_5G_Blue_Dual_Screen_lrg1_5G.png',
    'LG',
    'V60 ThinQ™ 5G | Sprint',
    `615`,
    [
      'Battery Capacity	5,000 mAh Non-Removable',
      'Screen Resolution	2460 x 1080 pixels',
      'Rear Camera Resolution	64MP (Standard Angle), 13MP (Wide Angle), ToF (Depth)',
      'Storage	128 GB (up to 98.8 GB usable)*',
      'Memory	8GB RAM',
      'Front Camera Resolution	10MP',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/zhouyuxin/F4L-grey-800.png',
    'Xiaomi',
    'Mi Note 10 Lite',
    `400`,
    [
      'Qualcomm® Snapdragon™ 765G with 5G',
      "6.57'' AMOLED TrueColor display",
      'Movie quality effortless editing',
      '48MP quad-camera',
      '4160mAh battery 20W fast charge',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/products/pc/poco-f2-pro/specs1.png',
    'Xiaomi',
    'POCO F2 Pro',
    `455`,
    [
      'Qualcomm® Kryo™ 585, 7 nm Process Technology',
      'CPU frequency: Octa-core processor, up to 2.84 GHz',
      "Qualcomm's trifecta design: 1 x 2.84GHz super large core + 3 x 2.42GHz large core + 4 x 1.80GHz small core",
      'GPU: Adreno 650 GPU, up to 587MHz',
      'AIE: 5th generation AIE processor',
      '64MP quad rear camera',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/in/cms/BDFE6DF3-832D-21D2-0388-69267704E493.jpg',
    'Xiaomi',
    'Redmi Note 9 Pro',
    `255`,
    [
      'Qualcomm® Snapdragon™ 720G',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '64MP AI Quad Camera',
      '16MP In-Display Front Camera',
    ]
  ),
  new product(
    'https://news.lenovo.com/wp-content/uploads/2020/07/Header-Image_resized.png',
    'Lenovo',
    'Legion Duel',
    `755`,
    [
      '6.65" 1080x2340 pixels',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '64MP AI Quad Camera',
    ]
  ),
  new product(
    'https://lh3.googleusercontent.com/dPWEOHIEIsePmdj-ZviV9MUWJ9bhsUL1UYkWfvakoQt9Z2ebTGpVz_P8xgroQH6sxuw',
    'Lenovo',
    'K10 Note',
    `155`,
    [
      '6.65" 1080x2340 pixels',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '16MP AI Quad Camera',
    ]
  ),
  new product(
    'https://www.bell.ca/Styles/wireless/5G/LG_V60_ThinQ_5G_Blue_Dual_Screen_lrg1_5G.png',
    'LG',
    'V60 ThinQ™ 5G | Sprint',
    `615`,
    [
      'Battery Capacity	5,000 mAh Non-Removable',
      'Screen Resolution	2460 x 1080 pixels',
      'Rear Camera Resolution	64MP (Standard Angle), 13MP (Wide Angle), ToF (Depth)',
      'Storage	128 GB (up to 98.8 GB usable)*',
      'Memory	8GB RAM',
      'Front Camera Resolution	10MP',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/zhouyuxin/F4L-grey-800.png',
    'Xiaomi',
    'Mi Note 10 Lite',
    `400`,
    [
      'Qualcomm® Snapdragon™ 765G with 5G',
      "6.57'' AMOLED TrueColor display",
      'Movie quality effortless editing',
      '48MP quad-camera',
      '4160mAh battery 20W fast charge',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/products/pc/poco-f2-pro/specs1.png',
    'Xiaomi',
    'POCO F2 Pro',
    `455`,
    [
      'Qualcomm® Kryo™ 585, 7 nm Process Technology',
      'CPU frequency: Octa-core processor, up to 2.84 GHz',
      "Qualcomm's trifecta design: 1 x 2.84GHz super large core + 3 x 2.42GHz large core + 4 x 1.80GHz small core",
      'GPU: Adreno 650 GPU, up to 587MHz',
      'AIE: 5th generation AIE processor',
      '64MP quad rear camera',
    ]
  ),
  new product(
    'https://i01.appmifile.com/webfile/globalimg/in/cms/BDFE6DF3-832D-21D2-0388-69267704E493.jpg',
    'Xiaomi',
    'Redmi Note 9 Pro',
    `255`,
    [
      'Qualcomm® Snapdragon™ 720G',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '64MP AI Quad Camera',
      '16MP In-Display Front Camera',
    ]
  ),
  new product(
    'https://news.lenovo.com/wp-content/uploads/2020/07/Header-Image_resized.png',
    'Lenovo',
    'Legion Duel',
    `755`,
    [
      '6.65" 1080x2340 pixels',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '64MP AI Quad Camera',
    ]
  ),
  new product(
    'https://lh3.googleusercontent.com/dPWEOHIEIsePmdj-ZviV9MUWJ9bhsUL1UYkWfvakoQt9Z2ebTGpVz_P8xgroQH6sxuw',
    'Lenovo',
    'K10 Note',
    `155`,
    [
      '6.65" 1080x2340 pixels',
      'Battery and Charging - 5020mAh',
      '6.67" DotDisplay',
      '16MP AI Quad Camera',
    ]
  ),
  new product(
    'https://www.bell.ca/Styles/wireless/5G/LG_V60_ThinQ_5G_Blue_Dual_Screen_lrg1_5G.png',
    'LG',
    'V60 ThinQ™ 5G | Sprint',
    `615`,
    [
      'Battery Capacity	5,000 mAh Non-Removable',
      'Screen Resolution	2460 x 1080 pixels',
      'Rear Camera Resolution	64MP (Standard Angle), 13MP (Wide Angle), ToF (Depth)',
      'Storage	128 GB (up to 98.8 GB usable)*',
      'Memory	8GB RAM',
      'Front Camera Resolution	10MP',
    ]
  ),
];
