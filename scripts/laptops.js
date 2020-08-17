class laptop {
  constructor(img, brand, name, price, description) {
    this.img = img;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const lenovoThinkPadd = new laptop(
  'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t490-hero-1126.png?context=bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA',
  'Lenovo - ThinkPad',
  `800$`
);

export let laptops = [
  new laptop(
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
  new laptop(
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
  new laptop(
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
  new laptop(
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
  new laptop(
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
  new laptop(
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
  new laptop(
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
  new laptop(
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
];
