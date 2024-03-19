//constants
const baseUrl = 'https://book.soona.co';
var pollCount = 0;
const amazonSpell = 'hD-1jl0MbCkh9O15fU9iN';
const shopifySpell = 'JFh3FTR4VW481NbPyXmH0';
const industryDetailsHash = {
  "accessories": {
    fact: "the average per-customer revenue generated in the United States in 2023 for the accessories industry is $301.80, with an estimated 27.4% of that revenue coming from online sales. the content you feature on your product pages is now more critical than ever.",
    average_score: 68,
    image_quality_score: 90,
    gallery_count_score: 45,
    visual_mix_score: 70,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d2645db5950c1108ce7_Main-accessories.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f03a65a52155a93b5_accessories_sm_3%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406fd2d82163956274f9_accessories_sm_4%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f5324979205dbcb20_accessories_sm_5%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f32cb23ca5b1c0efb_accessories_sm_1%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406eb08fe6adee0cbdba_accessories_sm_2%402x.webp',
  },
  "amazon": {
    fact: "51% of users start their product searches directly on Amazon. Improving the content you use in your Amazon product listings could have an immediate impact on buyers you attract to your product.",
    average_score: 72,
    image_quality_score: 42,
    gallery_count_score: 98,
    visual_mix_score: 77,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d268d8591bc8a570266_Main-amazon.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1407400d37090e25841c3_amazon_sm_1%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f64938325a70f53c5_amazon_sm_2%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f8d8591bc8a5a8c8b_amazon_sm_5%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f3b5512fbf568b603_amazon_sm_4%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406e32cb23ca5b1c0ed1_amazon_sm_3%402x.webp',
  },
  "beauty & skincare": {
    fact: "especially within the beauty and skincare industry, inclusivity has taken on heightened significance. the content on your product listings should cater to a diverse audience, ensuring that everyone can see themselves reflected in their product offerings.",
    average_score: 58,
    image_quality_score: 71,
    gallery_count_score: 18,
    visual_mix_score: 86,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d26cebf8eb31bdfb449_Main-beauty-skincare.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140716594df863fb20b2f_beauty_and_skincare_sm_3%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14071b5ce70462ef82371_beauty_and_skincare_sm_4%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f1a66faeec0d59286_beauty_and_skincare_sm_1%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f1a06e445f872bfa8_beauty_and_skincare_sm_5%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406fdcb2f927d64d0f11_beauty_and_skincare_sm_2%402x.webp',
  },
  "CBD": {
    fact: `data indicates evident differences among CBD consumer segments, including the "Mind Menders", "Life Lifters", and "Pain Pausers". accurately identifying your target audience is a crucial step in CBD marketing. our listing insights tool can help ensure that the content on your product pages aligns with industry standards, increasing your chances of success.`,
    average_score: 74,
    image_quality_score: 79,
    gallery_count_score: 60,
    visual_mix_score: 83,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d279209af30af894145_Main-CBD.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14070ab86a2105183362f_CBD_sm_5%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f6aeb611c959ed73d_CBD_sm_3%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f717a1c22e51c91da_CBD_sm_1%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f11e93f809a5e616e_CBD_sm_2%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1406f64938325a70f5404_CBD_sm_4%402x.webp',
  },
  "clothing & shoes": {
    fact: "the fashion industry is the world's largest ecommerce sector, projected to increase from $820 billion in 2023 to $1.2 trillion by 2027. seize this opportunity and improve your listings to claim a larger share of the market.",
    average_score: 62,
    image_quality_score: 38,
    gallery_count_score: 89,
    visual_mix_score: 60,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d2746bc400681608caa_Main-clothing-shoes.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14071e48781e2e9e849d2_clothing_and_shoes_sm_3%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14070bfd52430ba5995c6_clothing_and_shoes_sm_2%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140701b5a6972ed3a6066_clothing_and_shoes_sm_4%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14070df214cf15588f4e4_clothing_and_shoes_sm_5%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140708d0399d9265e930b_clothing_and_shoes_sm_1%402x.webp',
  },
  "education": {
    fact: "the increased focus on STEM (Science, Technology, Engineering, Mathematics) education has sparked significant growth in the e-commerce education industry. from educational toys to online classes, the demand for at-home learning has never been greater. ensure your product listings effectively convey the value your product offers in terms of education.",
    average_score: 60,
    image_quality_score: 34,
    gallery_count_score: 49,
    visual_mix_score: 96,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d27edbfeb742b14debb_Main-education.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1407136026ca820463ef4_education_sm_4%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14071d2d8216395627626_education_sm_5%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14070fd1607d5044f4749_education_sm_1%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14070c9f0c85c3c332b7b_education_sm_2%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140705d09f0fea9b34cbc_education_sm_3%402x.webp',
  },
  "food & beverage": {
    fact: "consumers are 63% more likely to purchase packaged food items labeled with a sustainability claim. your brand and the images you use to represent it are now more important than ever. Optimize your listings immediately.",
    average_score: 57,
    image_quality_score: 28,
    gallery_count_score: 54,
    visual_mix_score: 89,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d28a34e48b5d264c5b8_Main-food-and-beverage.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140741b5a6972ed3a6927_food_and_beverage_sm_4%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14072eb97ce169478fddf_food_and_beverage_sm_2%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140731a06e445f872d383_food_and_beverage_sm_5%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140725518485de42939cc_food_and_beverage_sm_1%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14072940fe04f6b14f3db_food_and_beverage_sm_3%402x.webp',
  },
  "health & wellness": {
    fact: "experts predict that the global wellness industry will experience an annual growth rate of 9.9% as it rebounds from the COVID-19 pandemic. maximize the potential of your listings and capitalize on this thriving recovery.",
    average_score: 60,
    image_quality_score: 34,
    gallery_count_score: 56,
    visual_mix_score: 91,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d289bc7058bf2dda97b_Main-wellness.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14073b5ce70462ef826a3_health_and_wellness_sm_2%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140732f4693e7f379abda_health_and_wellness_sm_3%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140725794c46903a2fada_health_and_wellness_sm_5%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140723599756248bc8d86_health_and_wellness_sm_4%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1407232cb23ca5b1c1125_health_and_wellness_sm_1%402x.webp',
  },
  "home & garden": {
    fact: "U.S. consumers lead with 31% of global online home and garden spending, with 31% of furniture buyers favoring online shopping due to free shipping. in the era of online shopping, the importance of outstanding content and product listings has never been greater.",
    average_score: 62,
    image_quality_score: 69,
    gallery_count_score: 34,
    visual_mix_score: 84,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d297ce4b43f3f75182d_Main-home-garden.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140735324979205dbefc6_home_and_garden_sm_5%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1407312d8050d1a55eabe_home_and_garden_sm_4%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140736c61fae231b4c182_home_and_garden_sm_3%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140721d3059a101787c30_home_and_garden_sm_1%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140731480e7b179bb179b_home_and_garden_sm_2%402x.webp',
  },
  "jewelry": {
    fact: "brick-and-mortar jewelry shops were severely impacted by the pandemic. independent retailers and online shops have experienced a significant surge, with an astonishing 38% increase in demand for custom jewelry. creative jewelry makers from around the world now have a better chance of showcasing their work through online platforms.",
    average_score: 71,
    image_quality_score: 55,
    gallery_count_score: 67,
    visual_mix_score: 93,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d2a3599756248b91db0_Main-jewelry.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140745e670abe1250f27d_jewelry_sm_5%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140740ba4c88864c190e9_jewelry_sm_4%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140736c61fae231b4c16f_jewelry_sm_1%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140730d7ec7d47539f068_jewelry_sm_3%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140739209af30af8c633e_jewelry_sm_2%402x.webp',
  },
  "outdoor & recreation": {
    fact: "the pandemic spurred the development of new hobbies due to reduced commuting time, and these hobbies have now become integral to people's lives globally. soona can assist in ensuring that your products effectively convey how they enhance buyers' lives.",
    average_score: 62,
    image_quality_score: 93,
    gallery_count_score: 34,
    visual_mix_score: 58,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d28c49ddb9abd2f0c89_Main-outdoor-recreation.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14075acb68a10eca4ece1_outdoor_recreation_sm_2%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140750ba4c88864c191c2_outdoor_recreation_sm_4%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14075e48768b0c39e8c3d_outdoor_recreation_sm_5%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14074f8d513a563287840_outdoor_recreation_sm_3%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140739802607abe3dcce7_outdoor_recreation_sm_1%402x.webp',
  },
  "personal brand": {
    fact: `Amazon and Shopify collectively attract over 250 million monthly shoppers. Effectively capturing even a portion of this audience through content optimizations will provide you with a significant "unfair" advantage.`,
    average_score: 60,
    image_quality_score: 88,
    gallery_count_score: 71,
    visual_mix_score: 23,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d266406ec786f865a78_Main-shopify.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14077d11c927b1cbcf3a1_shopify_sm_2%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076df214cf15588f8d0_shopify_sm_3%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076287406799aad3ea0_shopify_sm_4%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076a34e48b5d268c8fd_shopify_sm_5%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076edbfeb742b182181_shopify_sm_1%402x.webp',
  },
  "pet products": {
    fact: "millennials are three times more likely to own pets than to become parents, with 76% of those aged 20 to 38 being pet owners. industry experts anticipate a compounded annual growth rate of 6% over the next five years, with new pet-centric technology products primarily propelling this trend forward.",
    average_score: 64,
    image_quality_score: 32,
    gallery_count_score: 95,
    visual_mix_score: 67,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d28287406799aaa1c1d_main-pet-products.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14079719094eca990560c_pet_products_sm_4%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14075c3d1ed7acfb9d31c_pet_products_sm_1%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1407512d8050d1a55ef6a_pet_products_sm_5%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140743b5512fbf568b9ca_pet_products_sm_2%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140741480e7b179bb184d_pet_products_sm_3%402x.webp',
  },
  "shopify": {
    fact: "customers are twice as likely to purchase an item that offers a 3D image. To take advantage of the billions, yes billions, of dollars shopify stores generate each year, learn more about how you can improve and optimize your product listings.",
    average_score: 55,
    image_quality_score: 16,
    gallery_count_score: 58,
    visual_mix_score: 92,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d266406ec786f865a78_Main-shopify.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14077d11c927b1cbcf3a1_shopify_sm_2%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076df214cf15588f8d0_shopify_sm_3%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076287406799aad3ea0_shopify_sm_4%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076a34e48b5d268c8fd_shopify_sm_5%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076edbfeb742b182181_shopify_sm_1%402x.webp',
  },
  "tech": {
    fact: "Amazon holds the highest market share in e-commerce, accounting for 37.8% of all online sales. If you're selling tech products on Amazon, our listing insights tool is the perfect resource to gain a competitive advantage.",
    average_score: 58,
    image_quality_score: 71,
    gallery_count_score: 18,
    visual_mix_score: 86,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d2809f3b56e04ea6297_Main-tech.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14077fd1607d5044f5cc6_tech_sm_5%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140775e7087a4e1546a22_tech_sm_4%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076ca49faeca5989cd5_tech_sm_2%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076e48768b0c39e8d23_tech_sm_1%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076276d294b26e3b0d2_tech_sm_3%402x.webp',
  },
  "toys & hobbies": {
    fact: "91% of sellers in the “toys & hobbies” industry are third party sellers? competition is plentiful and we have clear steps you can take to improve your chances of standing out from the crowd.",
    average_score: 66,
    image_quality_score: 91,
    gallery_count_score: 73,
    visual_mix_score: 33,
    main_image: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b13d28d0418ff8ac0e477a_toys-and-hobbies.webp',
    secondary_image_1: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140771480e7b179bb1c0e_toys_and_hobbies_sm_2%402x.webp',
    secondary_image_2: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14077cebf8eb31be2fcf8_toys_and_hobbies_sm_3%402x.webp',
    secondary_image_3: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b1407709f3b56e04edc509_toys_and_hobbies_sm_4%402x.webp',
    secondary_image_4: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b140772f4693e7f379af82_toys_and_hobbies_sm_5%402x.webp',
    secondary_image_5: 'https://uploads-ssl.webflow.com/622327bc87949d02598242bf/65b14076ca49faeca5989d12_toys_and_hobbies_sm_1%402x.webp',
  },
};

// variables
let loadingSpinner = null,
  listingPlatform = '';

//functions
async function navigationProcess() {
  window.location.href = createListingInsightsPath();
}

function createListingInsightsPath() {
  let path = `${baseUrl}/#/account/<accountId>/listing-insights`;
  return path;
}

function updatePageIndustry(respellResponseString) {
  let decodedResponseString = decodeURIComponent(respellResponseString);
  let industry = decodedResponseString.split(':')[2].trim();
  if (industry === 'other' && listingPlatform === 'Amazon') { 
    industry = 'amazon';
  } else if (industry === 'other' && listingPlatform === 'Shopify') {
    industry = 'shopify';
  } else if (industry === 'other' || industryDetailsHash[industry] === undefined || industryDetailsHash[industry] === null) {
    industry = 'personal brand';
  }
  let storeOrProductTitle = decodedResponseString.split(':')[1].split('\n')[0];
  let industryDetails = industryDetailsHash[industry];
  let industryFormEl = document.getElementsByClassName('insights_form-block')[0];
  let industryResultsEl = document.getElementsByClassName('insights_results-wrap')[0];
  const productOrStoreEl = document.getElementById('product_or_store');
  const industryTitleEl = document.getElementById('industry_title');
  const insightFactEl = document.getElementById('insight_fact');
  const insightAverageScoreEl = document.getElementById('insight_average_score');
  const insightIndustryEl = document.getElementById('insight_industry');
  const listingPlatformEl = document.getElementById('listing_platform');
  const listingImageQualityScoreEl = document.getElementById('listing_image_quality_score');
  const listingGalleryCountScoreEl = document.getElementById('listing_gallery_count_score');
  const listingVisualMixScoreEl = document.getElementById('listing_visual_mix_score');
  const listingIntegrationPlatformEl = document.getElementById('listing_integration_platform');
  const mainImageEl = document.getElementById('main-image');
  const secondaryImage1El = document.getElementById('secondary-image-1');
  const secondaryImage2El = document.getElementById('secondary-image-2');
  const secondaryImage3El = document.getElementById('secondary-image-3');
  const secondaryImage4El = document.getElementById('secondary-image-4');
  const secondaryImage5El = document.getElementById('secondary-image-5');
  mainImageEl.src = industryDetails.main_image;
  mainImageEl.srcset = industryDetails.main_image;
  secondaryImage1El.src = industryDetails.secondary_image_1;
  secondaryImage2El.src = industryDetails.secondary_image_2;
  secondaryImage3El.src = industryDetails.secondary_image_3;
  secondaryImage4El.src = industryDetails.secondary_image_4;
  secondaryImage5El.src = industryDetails.secondary_image_5;
  productOrStoreEl.innerHTML = storeOrProductTitle;
  industryTitleEl.innerHTML = industry;
  insightFactEl.innerHTML = industryDetails.fact;
  insightAverageScoreEl.innerHTML = industryDetails.average_score;
  insightIndustryEl.innerHTML = industry;
  listingPlatformEl.innerHTML = listingPlatform;
  listingImageQualityScoreEl.innerHTML = industryDetails.image_quality_score;
  listingGalleryCountScoreEl.innerHTML = industryDetails.gallery_count_score;
  listingVisualMixScoreEl.innerHTML = industryDetails.visual_mix_score;
  listingIntegrationPlatformEl.innerHTML = listingPlatform;

  hideElement(industryFormEl);
  showElement(industryResultsEl);
}

async function getIndustryFromURL(url) {
  if (url === undefined || url === null || url === '') { return; }
  if (!url.includes('http')) {
    url = `https://${url}`;
  }
  listingPlatform = ''
  let spellInput = { input: url };
  if (url.includes('amazon')) {
    listingPlatform = 'Amazon';
    await castSpell(amazonSpell, spellInput);
  } else if (url.includes('shopify')) {
    listingPlatform = 'Shopify';
    await castSpell(shopifySpell, spellInput);
  } else {
    listingPlatform = 'Shopify';
    spellInput = { input: `${url}.myshopify.com`}
    await castSpell(shopifySpell, spellInput);
  }
}

async function castSpell(spellId, spellInputs) {
  const url = `${baseUrl}/api/predictions`;
  const payload = {
    generate: {
      provider: "respell",
      payload: {
        spellId: spellId,
        inputs: spellInputs,
      },
    },
  };

  try {
    addShowClass(loadingSpinner);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      updatePageIndustry('title: personal brand\nindustry: other');
      removeShowClass(loadingSpinner);
    }

    const responseData = await response.json();

    if (responseData.provider_job_id) {
      pollStatus(responseData.provider_job_id);
    }
  } catch (error) {
    console.error(error);
    updatePageIndustry('title: personal brand\nindustry: other');
    removeShowClass(loadingSpinner);
  }
}

async function pollStatus(jobId) {
  const url = `${baseUrl}/api/predictions/${jobId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "complete" && pollCount < 15) {
      pollCount++;
      setTimeout(() => pollStatus(jobId), 3000);
    } else if (data.status === "complete" && data.outputs.output) {
      updatePageIndustry(data.outputs.output);
      resetPollCount();
      removeShowClass(loadingSpinner);
    } else {
      removeShowClass(loadingSpinner);
      updatePageIndustry('title: personal brand\nindustry: other');
      resetPollCount();
    }
  } catch (error) {
    console.error(error);
    updatePageIndustry('title: personal brand\nindustry: other');
    removeShowClass(loadingSpinner);
    resetPollCount();
  }
}

function resetPollCount() {
  pollCount = 0;
}

function getContextFromUrl() {
  let url = window.location.href;
  let splitUrl = url.split('/');
  let context = splitUrl[splitUrl.length - 1];
  context = context.replace(/[\-_]/g, ' ');
  return context;
}

function linkClicked(subContext, linkLabel, linkHref) {
  try {
    analytics.track('Link Clicked',
    {
      context: getContextFromUrl(),
      subContext: subContext,
      linkLabel: linkLabel,
      linkHref: linkHref,
    });
  } catch (error) {
    console.error(error);
  }
}

const hideElement = el => el.classList.add('hide');
const showElement = el => el.classList.remove('hide');
const addShowClass = el => el.classList.add('show');
const removeShowClass = el => el.classList.remove('show');

document.addEventListener('DOMContentLoaded', function () {
  let resetButton = document.getElementById('insights_results_reset');
  let urlInput = document.getElementById('shop-URL');
  let submitButton = document.getElementsByClassName('button is-listing-insights')[0];
  let integrateWithButton = document.getElementById('integrate_with_button');
  let seeRecommendationsButton = document.getElementById('see_recommendations_button');
  let scoreCardLinks = document.getElementsByClassName('insights_score-card');
  let listingInsightsForm = document.getElementsByClassName('insights_form-block')[0];
  let formEntrySection = listingInsightsForm.getElementsByClassName('insights-form')[0];
  let formSuccessSection = listingInsightsForm.getElementsByClassName('w-form-done')[0];
  loadingSpinner = listingInsightsForm.getElementsByClassName('insights-form_loading-overlay')[0];

  integrateWithButton.addEventListener('click', () => {
    linkClicked('results body', integrateWithButton.innerText, null);
    navigationProcess();
  });

  seeRecommendationsButton.addEventListener('click', () => {
    linkClicked('results header', seeRecommendationsButton.innerText, null);
    navigationProcess();
  });

  Array.from(scoreCardLinks).forEach(element => {
    let title = element.getElementsByClassName('insights_score-title')[0].innerText;
    element.addEventListener('click', () => {
      linkClicked('results body', title, null);
      navigationProcess();
    });
  });

  resetButton.addEventListener('click', () => {
    let industryForm = document.getElementsByClassName('insights_form-block')[0];
    let industryResults = document.getElementsByClassName('insights_results-wrap')[0];
    formEntrySection.removeAttribute('style');
    formSuccessSection.removeAttribute('style');
    hideElement(industryResults);
    showElement(industryForm);
  });

  submitButton.addEventListener('click', async () => {
    linkClicked('url entry', submitButton.innerText, null);
    if (urlInput.value == '') { return; }
    await getIndustryFromURL(urlInput.value);
  });
});