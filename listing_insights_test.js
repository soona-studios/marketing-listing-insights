//constants
const baseUrl = 'https://develop.soona.co';
var pollCount = 0;
const amazonSpell = 'hD-1jl0MbCkh9O15fU9iN';
const shopifySpell = 'JFh3FTR4VW481NbPyXmH0';
const industryDetailsHash = {
  "beauty & skincare": {
    fact: "especially within the beauty and skincare industry, inclusivity has taken on heightened significance. the content on your product listings should cater to a diverse audience, ensuring that everyone can see themselves reflected in their product offerings.",
    average_score: 58,
    image_quality_score: 71,
    gallery_count_score: 18,
    visual_mix_score: 86,
  },
  "health & wellness": {
    fact: "experts predict that the global wellness industry will experience an annual growth rate of 9.9% as it rebounds from the COVID-19 pandemic. maximize the potential of your listings and capitalize on this thriving recovery.",
    average_score: 60,
    image_quality_score: 34,
    gallery_count_score: 56,
    visual_mix_score: 91,
  },
  "food & beverage": {
    fact: "consumers are 63% more likely to purchase packaged food items labeled with a sustainability claim. your brand and the images you use to represent it are now more important than ever. Optimize your listings immediately.",
    average_score: 57,
    image_quality_score: 28,
    gallery_count_score: 54,
    visual_mix_score: 89,
  },
  "clothing & shoes": {
    fact: "the fashion industry is the world's largest ecommerce sector, projected to increase from $820 billion in 2023 to $1.2 trillion by 2027. seize this opportunity and improve your listings to claim a larger share of the market.",
    average_score: 62,
    image_quality_score: 38,
    gallery_count_score: 89,
    visual_mix_score: 60,
  },
  "accessories": {
    fact: "the average per-customer revenue generated in the United States in 2023 for the accessories industry is $301.80, with an estimated 27.4% of that revenue coming from online sales. the content you feature on your product pages is now more critical than ever.",
    average_score: 68,
    image_quality_score: 90,
    gallery_count_score: 45,
    visual_mix_score: 70,
  },
  "jewelry": {
    fact: "brick-and-mortar jewelry shops were severely impacted by the pandemic. independent retailers and online shops have experienced a significant surge, with an astonishing 38% increase in demand for custom jewelry. creative jewelry makers from around the world now have a better chance of showcasing their work through online platforms.",
    average_score: 71,
    image_quality_score: 55,
    gallery_count_score: 67,
    visual_mix_score: 93,
  },
  "pet products": {
    fact: "millennials are three times more likely to own pets than to become parents, with 76% of those aged 20 to 38 being pet owners. industry experts anticipate a compounded annual growth rate of 6% over the next five years, with new pet-centric technology products primarily propelling this trend forward.",
    average_score: 64,
    image_quality_score: 32,
    gallery_count_score: 95,
    visual_mix_score: 67,
  },
  "home & garden": {
    fact: "U.S. consumers lead with 31% of global online home and garden spending, with 31% of furniture buyers favoring online shopping due to free shipping. in the era of online shopping, the importance of outstanding content and product listings has never been greater.",
    average_score: 62,
    image_quality_score: 69,
    gallery_count_score: 34,
    visual_mix_score: 84,
  },
  "tech": {
    fact: "Amazon holds the highest market share in e-commerce, accounting for 37.8% of all online sales. If you're selling tech products on Amazon, our listing insights tool is the perfect resource to gain a competitive advantage.",
    average_score: 58,
    image_quality_score: 71,
    gallery_count_score: 18,
    visual_mix_score: 86,
  },
  "toys & hobbies": {
    fact: "91% of sellers in the “toys & hobbies” industry are third party sellers? competition is plentiful and we have clear steps you can take to improve your chances of standing out from the crowd.",
    average_score: 66,
    image_quality_score: 91,
    gallery_count_score: 73,
    visual_mix_score: 33,
  },
  "outdoor & recreation": {
    fact: "the pandemic spurred the development of new hobbies due to reduced commuting time, and these hobbies have now become integral to people's lives globally. soona can assist in ensuring that your products effectively convey how they enhance buyers' lives.",
    average_score: 62,
    image_quality_score: 93,
    gallery_count_score: 34,
    visual_mix_score: 58,
  },
  "education": {
    fact: "the increased focus on STEM (Science, Technology, Engineering, Mathematics) education has sparked significant growth in the e-commerce education industry. from educational toys to online classes, the demand for at-home learning has never been greater. ensure your product listings effectively convey the value your product offers in terms of education.",
    average_score: 60,
    image_quality_score: 34,
    gallery_count_score: 49,
    visual_mix_score: 96,
  },
  "CBD": {
    fact: `data indicates evident differences among CBD consumer segments, including the "Mind Menders", "Life Lifters", and "Pain Pausers". accurately identifying your target audience is a crucial step in CBD marketing. our listing insights tool can help ensure that the content on your product pages aligns with industry standards, increasing your chances of success.`,
    average_score: 74,
    image_quality_score: 79,
    gallery_count_score: 60,
    visual_mix_score: 83,
  },
  "personal brand": {
    fact: `Amazon and Shopify collectively attract over 250 million monthly shoppers. Effectively capturing even a portion of this audience through content optimizations will provide you with a significant "unfair" advantage.`,
    average_score: 60,
    image_quality_score: 88,
    gallery_count_score: 71,
    visual_mix_score: 23,
  },
  "amazon": {
    fact: "51% of users start their product searches directly on Amazon. Improving the content you use in your Amazon product listings could have an immediate impact on buyers you attract to your product.",
    average_score: 72,
    image_quality_score: 42,
    gallery_count_score: 98,
    visual_mix_score: 77,
  },
  "shopify": {
    fact: "customers are twice as likely to purchase an item that offers a 3D image. To take advantage of the billions, yes billions, of dollars shopify stores generate each year, learn more about how you can improve and optimize your product listings.",
    average_score: 55,
    image_quality_score: 16,
    gallery_count_score: 58,
    visual_mix_score: 92,
  },
};

// reactive objects
const accountId = {
  value: null,
  set(value) {
    this.value = value;
    this.valueListener(value);
  },
  get() {
    return this.value;
  },
  valueListener(value) {},
  addValueListener: function (listener) {
    this.valueListener = listener;
  },
};

accountId.addValueListener(value => {
  if (!value) return;
  else {
    navigationProcess();
  }
});


// variables
let authToken = null,
  listingPlatform = '';


// auth portal

function receiveMessage(event) {
  if (event.origin !== baseUrl) return;
  let splitData = event.data.split(',');
  authToken = splitData[1].split(':')[1];
  if (!authToken || authToken === 'null' || authToken === 'undefined') return;
  accountId.set(splitData[0].split(':')[1]);
}

function openAuthPortal() {
  let popupWinWidth = 500;
  let popupWinHeight = 600;
  let left = window.screenX + (window.outerWidth - popupWinWidth) / 2;
  let top = window.screenY + (window.outerHeight - popupWinHeight) / 2;
  let popUpUrl = `${baseUrl}/#/sign-up?isExternalAuthPortal=true&redirect=/sign-in%3FisExternalAuthPortal=true`;
  let newWindow = window.open(popUpUrl,'google window','width='+popupWinWidth+',height='+popupWinHeight+',top='+top+',left='+left);
  if (window.focus) {newWindow.focus()}
  // add event listener to receive message from auth portal
  window.addEventListener('message', receiveMessage, false);
}

//functions
async function navigationProcess() {
  if(!authToken || authToken === 'null' || authToken === 'undefined') return;
  window.location.href = createListingInsightsPath();
}

function createListingInsightsPath() {
  let path = `${baseUrl}/#/account/${accountId.get()}/listing-insights`;
  return path;
}

function updatePageIndustry(respellResponseString) {
  let decodedResponseString = decodeURIComponent(respellResponseString);
  let industry = decodedResponseString.split(':')[2].trim();
  if (industry === 'other' && listingPlatform === 'Amazon') { 
    industry = 'amazon';
  } else if (industry === 'other' && listingPlatform === 'Shopify') {
    industry = 'shopify';
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
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Sorry, something went wrong. Please try again.");
    }

    const responseData = await response.json();

    if (responseData.provider_job_id) {
      pollStatus(responseData.provider_job_id);
    }
  } catch (error) {
    console.error(error);
  }
}

async function pollStatus(jobId) {
  const url = `${baseUrl}/api/predictions/${jobId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "complete" && pollCount < 20) {
      pollCount++;
      setTimeout(() => pollStatus(jobId), 3000);
    } else if (data.status === "complete" && data.outputs.output) {
      updatePageIndustry(data.outputs.output);
      resetPollCount();
    } else {
      throw new Error("Sorry, something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);

    resetPollCount();
  }
}

function resetPollCount() {
  pollCount = 0;
}

const hideElement = el => el.classList.add('hide');
const showElement = el => el.classList.remove('hide');

document.addEventListener('DOMContentLoaded', function () {
  let resetButton = document.getElementById('insights_results_reset');
  let urlInput = document.getElementById('shop-URL');
  let submitButton = document.querySelectorAll('input[type=button]')[0];
  let integrateWithButton = document.getElementById('integrate_with_button');
  let seeRecommendationsButton = document.getElementById('see_recommendations_button');

  integrateWithButton.addEventListener('click', () => {
    openAuthPortal();
  });

  seeRecommendationsButton.addEventListener('click', () => {
    openAuthPortal();
  });

  resetButton.addEventListener('click', () => {
    let industryForm = document.getElementsByClassName('insights_form-block')[0];
    let industryResults = document.getElementsByClassName('insights_results-wrap')[0];
    hideElement(industryResults);
    showElement(industryForm);
  });
  
  submitButton.addEventListener('click', async () => {
    if (urlInput.value == '') { return; }
    await getIndustryFromURL(urlInput.value);
  });
});